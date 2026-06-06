import type { DiscoveryState } from './types';

export function initMemoryConsole(
  discovery: DiscoveryState,
  deps: {
    sfxSelect: () => void;
    playReaction: (id?: string) => void;
    showToast: (title: string, text: string) => void;
    updateBubble: (msg: string) => void;
    renderDiscoveryTray: () => void;
    saveDiscovery: () => void;
  },
) {
  const consoleEl = document.querySelector('[data-memory-console]');
  if (!consoleEl) return;

  const nodes = [...consoleEl.querySelectorAll<HTMLElement>('[data-memory-node]')];
  const entries = [...consoleEl.querySelectorAll<HTMLElement>('[data-memory-entry]')];
  const prevBtn = consoleEl.querySelector<HTMLElement>('[data-memory-prev]');
  const nextBtn = consoleEl.querySelector<HTMLElement>('[data-memory-next]');
  const finalReward = consoleEl.querySelector<HTMLElement>('[data-memory-final-reward]');
  const viewed = new Set([0]);
  if (entries[0]?.dataset.memoryId) discovery.memory.add(entries[0].dataset.memoryId);
  let activeIndex = 0;

  function syncMemory(index: number) {
    const nextIndex = Math.max(0, Math.min(index, entries.length - 1));
    activeIndex = nextIndex;
    viewed.add(nextIndex);
    discovery.memory.add(entries[nextIndex]?.dataset.memoryId || `memory:${nextIndex}`);
    consoleEl.classList.add('is-viewing');
    nodes.forEach((node, i) => {
      const isActive = i === nextIndex;
      node.classList.toggle('is-active', isActive);
      node.classList.toggle('is-recovered', viewed.has(i));
      node.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
    entries.forEach((entry, i) => entry.classList.toggle('is-active', i === nextIndex));
    deps.sfxSelect();
    deps.playReaction('memory');
    deps.showToast(
      nextIndex === entries.length - 1 ? 'Origin Arc Complete' : nextIndex === 0 ? 'Origin fragment discovered' : 'Memory recovered',
      nextIndex === entries.length - 1 ? 'CLASS UNLOCKED: Systems Builder' : 'La imagen abrió una memoria recuperada.',
    );
    if (nextIndex === 0) deps.updateBubble('memory-crt');
    else if (nextIndex === entries.length - 1) deps.updateBubble('memory-work');
    else deps.updateBubble('memory');
    if (finalReward && viewed.size === entries.length) {
      finalReward.hidden = false;
      deps.updateBubble('memory-complete');
      deps.showToast('Passive Trait Unlocked', 'Curiosity-driven builder');
    }
    deps.renderDiscoveryTray();
    deps.saveDiscovery();
  }

  nodes.forEach((node, i) => node.addEventListener('click', () => syncMemory(i)));
  prevBtn?.addEventListener('click', () => syncMemory(activeIndex - 1));
  nextBtn?.addEventListener('click', () => syncMemory(activeIndex + 1));

  consoleEl.querySelectorAll<HTMLElement>('[data-memory-fragment]').forEach(tab => {
    tab.addEventListener('click', () => {
      const fragmentId = tab.dataset.memoryFragment;
      const group = tab.closest('[data-memory-fragments]');
      if (!group || !fragmentId) return;
      group.querySelectorAll('[data-memory-fragment]').forEach(other => {
        const isActive = other === tab;
        other.classList.toggle('is-active', isActive);
        other.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });
      group.querySelectorAll('[data-memory-fragment-panel]').forEach(panel => {
        panel.classList.toggle('is-active', panel.dataset.memoryFragmentPanel === fragmentId);
      });
      deps.sfxSelect();
      deps.playReaction('memory');
      discovery.memory.add(`fragment:${fragmentId}`);
      if (fragmentId === 'jaguarete') {
        deps.updateBubble('memory-jaguarete');
        deps.showToast('BUG ARCHIVED', 'Tail Hitbox Incident');
      } else {
        deps.updateBubble('memory-crt');
        deps.showToast('Fragment recovered', tab.textContent?.trim() || 'Memory fragment');
      }
      deps.renderDiscoveryTray();
      deps.saveDiscovery();
    });
  });
}
