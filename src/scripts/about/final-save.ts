export function initFinalSavePoint(options: {
  cleanupTasks: Array<() => void>;
  updateBubble: (message: string) => void;
  updateAvatarStatus: (message: string) => void;
  playReaction: (sectionId: string) => void;
  showToast: (title: string, text: string) => void;
}) {
  const { cleanupTasks, updateBubble, updateAvatarStatus, playReaction, showToast } = options;
  const finalSavePoint = document.querySelector('[data-final-save-point]');
  if (!finalSavePoint || !('IntersectionObserver' in window)) return;
  let saved = false;
  const observer = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting || saved) return;
    saved = true;
    finalSavePoint.classList.add('is-saved');
    updateBubble('save-point');
    updateAvatarStatus('LV.23 · SAVE POINT · QUEST AVAILABLE');
    playReaction('room');
    showToast('Progress saved.', 'La próxima quest puede empezar con un mensaje.');
    observer.disconnect();
  }, { threshold: 0.45 });
  observer.observe(finalSavePoint);
  cleanupTasks.push(() => observer.disconnect());
}
