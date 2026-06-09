type IntroOptions = {
  introKey: string;
  updateBubble: (message: string) => void;
  updateAvatarStatus: (message: string) => void;
  openSection: (sectionId: string, options?: { scroll?: boolean }) => void;
};

export function initIntroInteractions(options: IntroOptions) {
  const { introKey, updateBubble, updateAvatarStatus, openSection } = options;
  const cleanupTasks: Array<() => void> = [];

  function closePressStartOverlay(closeOptions: { openRoom?: boolean } = {}) {
    const overlay = document.getElementById('press-start-overlay');
    const card = overlay?.querySelector('.press-start-card');
    if (overlay?.classList.contains('is-hidden')) return;
    overlay?.classList.add('is-hiding');
    card?.classList.add('is-collapsing');
    updateBubble('explore');
    setTimeout(() => {
      overlay?.classList.add('is-hidden');
      overlay?.classList.remove('is-hiding');
      card?.classList.remove('is-collapsing');
      if (closeOptions.openRoom) {
        openSection('room', { scroll: true });
        return;
      }
      const hero = document.getElementById('hero');
      hero?.scrollIntoView({ behavior: 'smooth' });
      hero?.classList.add('is-waking');
      setTimeout(() => hero?.classList.remove('is-waking'), 800);
    }, 380);
    try { window.localStorage.setItem(introKey, '1'); } catch (_) { /* ignore private mode */ }
  }

  document.querySelectorAll('.hero-bio-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const wrapper = btn.closest('.hero-bio-collapse');
      if (!wrapper) return;
      const wasCollapsed = wrapper.classList.contains('is-collapsed');
      wrapper.classList.toggle('is-collapsed');
      btn.setAttribute('aria-expanded', String(wasCollapsed));
      const label = btn.querySelector('span:last-child');
      if (label) label.textContent = wasCollapsed ? 'CERRAR' : 'LEER MÁS';
      updateBubble(wasCollapsed ? 'hero-expanded' : 'hero');
    });
  });

  document.querySelectorAll('.hero-dropdown-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const wrapper = btn.closest('.hero-dropdown');
      if (!wrapper) return;
      const wasCollapsed = wrapper.classList.contains('is-collapsed');
      wrapper.classList.toggle('is-collapsed');
      btn.setAttribute('aria-expanded', String(wasCollapsed));
      if (wasCollapsed && wrapper.matches('[data-hero-stats]')) {
        wrapper.classList.remove('is-stats-ready');
        requestAnimationFrame(() => wrapper.classList.add('is-stats-ready'));
        updateBubble('hero-expanded');
        updateAvatarStatus('LV.23 · STATS SCANNED · BUILD READOUT');
      }
    });
  });

  document.querySelectorAll('[data-start-action]').forEach(btn => {
    btn.addEventListener('click', () => {
      const action = btn.dataset.startAction;
      if (action === 'fast') {
        (window as any).osbgxTrack?.('about_intro_fast_read');
        const fastPanel = document.getElementById('press-start-fast');
        const introActions = btn.closest('.press-start-actions');
        if (fastPanel) fastPanel.hidden = false;
        if (introActions) introActions.hidden = true;
        updateBubble('fast');
      } else {
        (window as any).osbgxTrack?.('about_intro_enter_profile', { action });
        closePressStartOverlay({ openRoom: action === 'fast-room' });
      }
    });
  });

  const pressStartOverlay = document.getElementById('press-start-overlay');
  try {
    if (!pressStartOverlay?.classList.contains('is-hidden') && window.localStorage.getItem(introKey) !== '1') {
      window.setTimeout(() => {
        pressStartOverlay?.querySelector<HTMLElement>('[data-start-primary]')?.focus();
      }, 950);
    }
  } catch (_) { /* ignore private mode */ }

  const handlePressStartEscape = (e: KeyboardEvent) => {
    if (e.key !== 'Escape') return;
    const overlay = document.getElementById('press-start-overlay');
    if (!overlay || overlay.classList.contains('is-hidden')) return;
    e.preventDefault();
    closePressStartOverlay();
  };
  document.addEventListener('keydown', handlePressStartEscape);
  cleanupTasks.push(() => document.removeEventListener('keydown', handlePressStartEscape));

  try {
    if (window.localStorage.getItem(introKey) === '1') document.getElementById('press-start-overlay')?.classList.add('is-hidden');
  } catch (_) { /* ignore private mode */ }

  return {
    cleanup() {
      cleanupTasks.forEach(cleanup => cleanup());
    },
  };
}
