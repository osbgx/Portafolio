import type { DiscoveryState, Totals } from './types';

const SAVE_KEY = 'about-mvp-v3-discovery';

function createDiscovery(): DiscoveryState {
  return {
    sections: new Set(),
    hotspots: new Set(),
    codex: new Set(),
    quests: new Set(),
    bosses: new Set(),
    rescue: new Set(),
    memory: new Set(),
    secrets: new Set(),
    achievements: new Set(),
  };
}

export function getTotals(): Totals {
  return {
    sectionTotal: document.querySelectorAll('.accordion-section').length,
    roomHotspotTotal: document.querySelectorAll('.room-hotspot').length,
    memoryTotal: document.querySelectorAll('.memory-node').length,
    sideQuestTotal: document.querySelectorAll('.quest-row').length,
    codexTotal: document.querySelectorAll('.dev-inspector-entry').length,
    bossTotal: document.querySelectorAll('.boss-entry').length,
    rescueTotal: document.querySelectorAll('[data-rescue-dex], [data-rescue-note], [data-rescue-support]').length,
  };
}

export function createStore() {
  const discovery = createDiscovery();

  function serialize(): Record<string, string[]> {
    return Object.fromEntries(
      Object.entries(discovery).map(([key, value]) => [key, [...value]])
    );
  }

  function save() {
    try {
      window.localStorage.setItem(SAVE_KEY, JSON.stringify(serialize()));
    } catch (_) { /* ignore private mode */ }
  }

  function load(): boolean {
    try {
      const saved = JSON.parse(window.localStorage.getItem(SAVE_KEY) || '{}');
      Object.entries(saved).forEach(([key, values]) => {
        const target = discovery[key as keyof DiscoveryState];
        if (target && Array.isArray(values)) {
          (values as string[]).forEach(value => target.add(value));
        }
      });
      return true;
    } catch (_) {
      return false;
    }
  }

  function reset() {
    Object.values(discovery).forEach(value => value.clear());
    try { window.localStorage.removeItem(SAVE_KEY); } catch (_) { /* ignore */ }
  }

  return { discovery, save, load, reset, serialize };
}
