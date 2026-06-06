import { bubbleMessages } from './content';
import { randomRange } from './random';

const PET_COUNT_KEY = 'about-mvp-v3-avatar-pets';

type AvatarOptions = {
  unlockAchievement: (id: string) => void;
  sfxSelect: () => void;
};

function readInternalQuotes() {
  const internalQuotesNode = document.getElementById('about-internal-quotes');
  try {
    return internalQuotesNode ? JSON.parse(internalQuotesNode.textContent || '[]') : [];
  } catch (_) {
    return [];
  }
}

export function initAvatarCompanion(options: AvatarOptions) {
  const { unlockAchievement, sfxSelect } = options;
  const avatarBubble = document.getElementById('avatar-bubble');
  const avatarStatus = document.getElementById('avatar-status');
  const internalQuotes = readInternalQuotes();
  let internalQuoteTimer: number | null = null;

  function updateBubble(sectionId: string) {
    if (!avatarBubble) return;
    const msg = bubbleMessages[sectionId] || sectionId || 'Explorando una sección desconocida...';
    avatarBubble.textContent = msg;
  }

  function updateAvatarStatus(text: string) {
    if (avatarStatus) avatarStatus.textContent = text;
  }

  function scheduleInternalQuote(delay = randomRange([300000, 600000])) {
    if (internalQuoteTimer) window.clearTimeout(internalQuoteTimer);
    if (!internalQuotes.length) return;
    internalQuoteTimer = window.setTimeout(() => {
      const isQuiet = document.body.classList.contains('quiet-hours');
      if (!isQuiet && !document.hidden && avatarBubble) {
        const quote = internalQuotes[Math.floor(Math.random() * internalQuotes.length)];
        avatarBubble.textContent = quote;
        updateAvatarStatus('LV.23 · IDLE THOUGHT · RANDOM BARK');
      }
      scheduleInternalQuote();
    }, delay);
  }

  function initPetInteraction() {
    const avatarPet = document.querySelector<HTMLElement>('[data-avatar-pet]');
    if (!avatarPet) return;
    let petCount = 0;
    try { petCount = Number(window.localStorage.getItem(PET_COUNT_KEY) || 0); } catch (_) { /* ignore */ }
    avatarPet.addEventListener('dragstart', (e: DragEvent) => e.preventDefault());
    const petAvatar = () => {
      petCount += 1;
      try { window.localStorage.setItem(PET_COUNT_KEY, String(petCount)); } catch (_) { /* ignore */ }
      avatarPet.classList.remove('is-petted');
      void avatarPet.offsetWidth;
      avatarPet.classList.add('is-petted');
      updateBubble(petCount >= 5 ? 'bugged-cat' : 'hero-expanded');
      updateAvatarStatus(petCount >= 5 ? 'LV.23 · HEADPATS OVERFLOW · COMPANION BUFF' : 'LV.23 · COMPANION BUFF · +1 WARMTH');
      sfxSelect();
      if (petCount >= 5) unlockAchievement('avatarPet');
    };
    avatarPet.addEventListener('click', petAvatar);
    avatarPet.addEventListener('keydown', (e) => {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      e.preventDefault();
      petAvatar();
    });
  }

  updateBubble('hero');
  scheduleInternalQuote();
  initPetInteraction();

  return {
    updateBubble,
    updateAvatarStatus,
    cleanup() {
      if (internalQuoteTimer) window.clearTimeout(internalQuoteTimer);
    },
  };
}
