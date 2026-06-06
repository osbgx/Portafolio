import type { DiscoveryState } from './types';

export function initRescueGuild(
  discovery: DiscoveryState,
  deps: {
    sfxSelect: () => void;
    sfxOpen: (sectionId?: string) => void;
    playReaction: (id?: string) => void;
    setScene: (scene: string | null) => void;
    updateBubble: (msg: string) => void;
    updateAvatarStatus: (msg: string) => void;
    showToast: (title: string, text: string) => void;
    unlockAchievement: (id: string) => void;
    renderDiscoveryTray: () => void;
    saveDiscovery: () => void;
    cleanupTasks: Array<() => void>;
  },
) {
  const rescueGuild = document.querySelector('[data-rescue-guild]');
  if (!rescueGuild) return;

  let supportSeen = false;

  rescueGuild.querySelectorAll<HTMLElement>('[data-rescue-dex]').forEach(entry => {
    entry.addEventListener('click', () => {
      rescueGuild.querySelectorAll('[data-rescue-dex]').forEach(item => item.classList.toggle('is-active', item === entry));
      discovery.rescue.add(`dex:${entry.dataset.rescueDex || 'entry'}`);
      deps.setScene('rescue');
      deps.updateBubble('rescue-dex');
      deps.updateAvatarStatus(`LV.23 · RESCUE DEX · ${String(entry.dataset.rescueDex || 'ENCOUNTER')}`);
      deps.showToast('Encounter data loaded', `${entry.dataset.rescueDex || 'Rescue'} registered in field notes.`);
      deps.sfxSelect();
      deps.renderDiscoveryTray();
      deps.saveDiscovery();
    });
  });

  rescueGuild.querySelectorAll<HTMLElement>('[data-rescue-note-trigger]').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const noteId = trigger.dataset.rescueNoteTrigger;
      if (noteId) discovery.rescue.add(`note:${noteId}`);
      deps.setScene('rescue');
      rescueGuild.querySelectorAll<HTMLElement>('[data-rescue-note]').forEach(note => {
        const open = note.dataset.rescueNote === noteId;
        note.classList.toggle('is-open', open);
        note.querySelector('[data-rescue-note-trigger]')?.setAttribute('aria-expanded', open ? 'true' : 'false');
        const body = note.querySelector<HTMLElement>('.rescue-note-body');
        if (body) body.hidden = !open;
        const state = note.querySelector('.rescue-note-trigger small');
        if (state) state.textContent = open ? 'OPEN' : 'READ';
      });
      if (noteId === 'failed-tame-attempt') {
        deps.updateBubble('rescue-failed-tame');
        deps.unlockAchievement('rescueCritical');
      } else {
        deps.updateBubble('rescue-open');
        deps.unlockAchievement('rescueNote');
      }
      deps.playReaction('rescue');
      deps.sfxOpen('rescue');
      deps.renderDiscoveryTray();
      deps.saveDiscovery();
    });
  });

  const support = rescueGuild.querySelector('[data-rescue-support]');
  if (support && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || supportSeen) return;
      supportSeen = true;
      discovery.rescue.add('support');
      deps.setScene('rescue');
      deps.updateBubble('rescue-support');
      deps.unlockAchievement('rescueSupport');
      deps.renderDiscoveryTray();
      deps.saveDiscovery();
      observer.disconnect();
    }, { threshold: 0.45 });
    observer.observe(support);
    deps.cleanupTasks.push(() => observer.disconnect());
  }
}
