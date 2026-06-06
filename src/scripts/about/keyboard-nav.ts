import { isTextInputTarget } from './dom';

export function initKeyboardNav(
  deps: {
    sfxSelect: () => void;
    toggle: (trigger: HTMLElement, forceState?: boolean) => void;
  },
) {
  const sectionList = [...document.querySelectorAll<HTMLElement>('.accordion-section')];
  if (!sectionList.length) return;

  let focusIdx = 0;
  let sectionKeyboardMode = false;
  let sectionKeyboardTimer: number | null = null;

  function setSectionKeyboardMode(active: boolean) {
    sectionKeyboardMode = active;
    document.body.classList.toggle('section-keyboard-mode', active);
    if (!active) sectionList.forEach(section => section.classList.remove('kb-focus'));
    if (sectionKeyboardTimer) window.clearTimeout(sectionKeyboardTimer);
    if (active) {
      sectionKeyboardTimer = window.setTimeout(() => setSectionKeyboardMode(false), 10000);
    }
  }

  function updateFocus(shouldScroll = false) {
    setSectionKeyboardMode(true);
    sectionList.forEach((section, index) => {
      section.classList.toggle('kb-focus', index === focusIdx);
    });
    if (shouldScroll) {
      sectionList[focusIdx]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  const handler = (e: KeyboardEvent) => {
    if (isTextInputTarget(e.target)) return;

    if (e.key === 'Escape' && sectionKeyboardMode) {
      e.preventDefault();
      setSectionKeyboardMode(false);
      return;
    }

    const sectionNavKey = e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter' || e.key === ' ';
    if (!sectionKeyboardMode && !(e.altKey && (e.key === 'ArrowDown' || e.key === 'ArrowUp'))) return;
    if (!sectionNavKey) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      focusIdx = Math.min(focusIdx + 1, sectionList.length - 1);
      updateFocus(true);
      deps.sfxSelect();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      focusIdx = Math.max(focusIdx - 1, 0);
      updateFocus(true);
      deps.sfxSelect();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const focused = sectionList[focusIdx];
      if (focused) {
        const t = focused.querySelector<HTMLElement>('.accordion-trigger');
        const p = focused.querySelector('.accordion-panel');
        if (p && !p.classList.contains('open') && t) {
          deps.toggle(t, true);
        } else if (focusIdx < sectionList.length - 1) {
          focusIdx++;
          updateFocus(true);
        }
      }
    } else if (e.key === ' ') {
      e.preventDefault();
      const focused = sectionList[focusIdx];
      if (focused) {
        const t = focused.querySelector<HTMLElement>('.accordion-trigger');
        if (t) deps.toggle(t);
      }
    }
  };

  document.addEventListener('keydown', handler);
  return () => document.removeEventListener('keydown', handler);
}
