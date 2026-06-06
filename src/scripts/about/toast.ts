export function createToastSystem(reduceMotion: boolean) {
  const toastEl = document.getElementById('toast');
  let toastTimer: number | null = null;

  return {
    showToast(title?: string, text?: string) {
      if (!toastEl || reduceMotion || document.body.classList.contains('quiet-read')) return;
      const strong = toastEl.querySelector('strong');
      const span = toastEl.querySelector('#toast-text');
      if (strong) strong.textContent = title || 'Exploraste algo.';
      if (span) span.textContent = text || '';
      if (toastTimer) window.clearTimeout(toastTimer);
      toastEl.classList.remove('show');
      void toastEl.offsetWidth;
      toastEl.classList.add('show');
      toastTimer = window.setTimeout(() => {
        toastEl.classList.remove('show');
      }, 3500);
    },
    cleanup() {
      if (toastTimer) window.clearTimeout(toastTimer);
    },
  };
}
