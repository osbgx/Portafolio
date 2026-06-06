export function initGuidedTour(
  tourSteps: [string, string][],
  deps: {
    openSection: (sectionId: string, options?: { scroll?: boolean }) => void;
    playReaction: (id?: string) => void;
    updateBubble: (msg: string) => void;
    updateAvatarStatus: (msg: string) => void;
    showToast: (title: string, text: string) => void;
  },
) {
  let tourActive = false;
  let tourIndex = 0;
  const tourButton = document.querySelector<HTMLElement>('[data-tour-start]');
  const tourStopButton = document.querySelector<HTMLElement>('[data-tour-stop]');

  function setTourButton(active: boolean) {
    if (!tourButton) return;
    tourButton.textContent = active ? `NEXT ${Math.min(tourIndex + 1, tourSteps.length)}/${tourSteps.length}` : 'START TOUR';
    tourButton.setAttribute('aria-pressed', active ? 'true' : 'false');
    tourButton.classList.toggle('is-active', active);
    if (tourStopButton) tourStopButton.hidden = !active;
  }

  function cancelGuidedTour() {
    if (!tourActive) return;
    tourActive = false;
    tourIndex = 0;
    setTourButton(false);
    deps.updateBubble('Tour pausado. Podés retomarlo desde ROOM MAP cuando quieras.');
    deps.updateAvatarStatus('LV.23 · TOUR PAUSED · FREE EXPLORE');
  }

  function advanceGuidedTour() {
    if (!tourActive) {
      tourActive = true;
      tourIndex = 0;
      deps.updateAvatarStatus('LV.23 · GUIDED TOUR · MANUAL');
      deps.showToast('Guided tour started', 'Usá NEXT para avanzar a tu ritmo.');
    }
    const step = tourSteps[tourIndex];
    if (!step) {
      tourActive = false;
      tourIndex = 0;
      setTourButton(false);
      deps.updateBubble('Tour complete. Ahora podés buscar secretos o abrir el contacto.');
      deps.updateAvatarStatus('LV.23 · TOUR COMPLETE · FREE EXPLORE');
      deps.showToast('Tour complete', 'El mapa principal fue recorrido. Quedan secretos opcionales.');
      return;
    }
    const [sectionId, message] = step;
    deps.openSection(sectionId, { scroll: true });
    deps.updateBubble(message);
    deps.playReaction(sectionId);
    tourIndex += 1;
    setTourButton(true);
  }

  tourButton?.addEventListener('click', advanceGuidedTour);
  tourStopButton?.addEventListener('click', cancelGuidedTour);

  return { cancelGuidedTour };
}
