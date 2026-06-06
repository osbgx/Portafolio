import type { DiscoveryState } from './types';

export function initIdleTimer(
  discovery: DiscoveryState,
  deps: {
    setScene: (scene: string | null) => void;
    updateBubble: (msg: string) => void;
    updateAvatarStatus: (msg: string) => void;
    cleanupTasks: Array<() => void>;
  },
) {
  let idleTimer: number | null = null;
  let autoQuietActive = false;
  let lastIdleReset = 0;

  function resetIdleTimer(force = false) {
    const now = Date.now();
    if (!force && now - lastIdleReset < 1000) return;
    lastIdleReset = now;
    if (idleTimer) window.clearTimeout(idleTimer);
    if (autoQuietActive) {
      autoQuietActive = false;
      if (!discovery.secrets.has('quiet-hours')) deps.setScene(null);
      deps.updateBubble('hero');
      deps.updateAvatarStatus('LV.23 · AWAKE AGAIN · SAVE FILE ACTIVE');
    }
    idleTimer = window.setTimeout(() => {
      if (document.body.classList.contains('quiet-hours')) return;
      autoQuietActive = true;
      deps.setScene('quiet');
      deps.updateBubble('quiet-hours');
      deps.updateAvatarStatus('LV.23 · SLEEPY MODE · DO NOT DISTURB');
    }, 300000);
  }

  ['mousemove', 'keydown', 'click', 'scroll', 'touchstart'].forEach(eventName => {
    document.addEventListener(eventName, resetIdleTimer, { passive: true });
    deps.cleanupTasks.push(() => document.removeEventListener(eventName, resetIdleTimer));
  });
  resetIdleTimer(true);

  return resetIdleTimer;
}
