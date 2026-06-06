import type { DiscoveryState } from './types';
import { isTextInputTarget } from './dom';

export function initEasterEggs(
  discovery: DiscoveryState,
  deps: {
    updateBubble: (msg: string) => void;
    updateAvatarStatus: (msg: string) => void;
    unlockAchievement: (id: string) => void;
    renderDiscoveryTray: () => void;
    saveDiscovery: () => void;
  },
) {
  const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let konamiIndex = 0;
  let whyBuffer = '';
  let marcoBuffer = '';

  const handler = (e: KeyboardEvent) => {
    if (isTextInputTarget(e.target)) return;

    const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;

    if (e.key.length === 1) {
      whyBuffer = `${whyBuffer}${e.key.toLowerCase()}`.slice(-3);
      if (whyBuffer === 'why') {
        discovery.secrets.add('why');
        deps.updateBubble('why');
        deps.updateAvatarStatus('LV.23 · EXISTENTIAL QUERY · STILL ONLINE');
        deps.unlockAchievement('why');
        deps.renderDiscoveryTray();
        deps.saveDiscovery();
      }

      marcoBuffer = `${marcoBuffer}${e.key.toLowerCase()}`.slice(-9);
      if (marcoBuffer === 'marcopolo') {
        document.querySelectorAll<HTMLElement>('.room-hotspot').forEach(el => {
          const item = el.dataset.roomItem;
          if (item) {
            discovery.hotspots.add(item);
            el.classList.add('is-active');
          }
        });
        deps.updateBubble('marcopolo');
        deps.updateAvatarStatus('LV.23 · MARCO POLO · ALL HOTSPOTS REVEALED');
        deps.unlockAchievement('marcopolo');
        deps.renderDiscoveryTray();
        deps.saveDiscovery();
      }
    }

    konamiIndex = key === konami[konamiIndex] ? konamiIndex + 1 : (key === konami[0] ? 1 : 0);
    if (konamiIndex === konami.length) {
      konamiIndex = 0;
      document.body.classList.toggle('retro-mode');
      discovery.secrets.add('retro-mode');
      deps.updateBubble('retro');
      deps.updateAvatarStatus('LV.23 · RETRO MODE · CRT ONLINE');
      deps.unlockAchievement('retro');
      deps.renderDiscoveryTray();
      deps.saveDiscovery();
    }
  };

  document.addEventListener('keydown', handler);
  return () => document.removeEventListener('keydown', handler);
}
