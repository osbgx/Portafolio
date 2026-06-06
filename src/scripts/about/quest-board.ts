import type { DiscoveryState } from './types';

export function initQuestBoard(
  discovery: DiscoveryState,
  deps: {
    sfxSelect: () => void;
    playReaction: (id?: string) => void;
    updateBubble: (msg: string) => void;
    showToast: (title: string, text: string) => void;
    openSection: (sectionId: string, options?: { scroll?: boolean }) => void;
    renderDiscoveryTray: () => void;
    saveDiscovery: () => void;
  },
) {
  const board = document.querySelector('[data-quest-board]');
  if (!board) return;

  const rows = [...board.querySelectorAll<HTMLElement>('[data-quest-row]')];
  const details = [...board.querySelectorAll<HTMLElement>('[data-quest-detail]')];
  const filters = [...board.querySelectorAll<HTMLElement>('[data-quest-arc]')];
  const progress = board.querySelector('[data-quest-progress]');
  const prevBtn = board.querySelector<HTMLElement>('[data-quest-prev]');
  const nextBtn = board.querySelector<HTMLElement>('[data-quest-next]');
  const finalReward = board.querySelector<HTMLElement>('[data-quest-final-reward]');
  const inspected = new Set([0]);
  let fiveQuestToastShown = false;
  let archiveToastShown = false;
  let activeIndex = 0;
  let activeArc = 'All';

  function visibleIndexes() {
    return rows
      .map((row, index) => ({ row, index }))
      .filter(({ row }) => activeArc === 'All' || row.dataset.questArcName === activeArc)
      .map(({ index }) => index);
  }

  function syncProgress() {
    if (progress) progress.textContent = `Inspected ${inspected.size} / ${rows.length}`;
    if (inspected.size >= 5 && !fiveQuestToastShown) {
      fiveQuestToastShown = true;
      deps.updateBubble('quest-achievement');
      deps.showToast('Achievement unlocked', 'Completionist tendencies detected.');
    }
    if (finalReward && inspected.size === rows.length && !archiveToastShown) {
      archiveToastShown = true;
      finalReward.hidden = false;
      deps.updateBubble('quest-archive-complete');
      deps.showToast('SIDE QUEST ARCHIVE COMPLETE', 'Passive Trait Unlocked: Overclocked Curiosity');
    }
  }

  function syncQuest(index: number) {
    const nextIndex = Math.max(0, Math.min(index, details.length - 1));
    activeIndex = nextIndex;
    inspected.add(nextIndex);
    rows.forEach((row, i) => {
      const isActive = i === nextIndex;
      row.classList.toggle('is-active', isActive);
      row.classList.toggle('is-inspected', inspected.has(i));
      row.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
    details.forEach((detail, i) => detail.classList.toggle('is-active', i === nextIndex));
    const activeDetail = details[nextIndex];
    discovery.quests.add(activeDetail?.dataset.questId || `quest:${nextIndex}`);
    const isCompanion = activeDetail?.dataset.questId === 'failed-tame-attempt';
    deps.sfxSelect();
    deps.playReaction(isCompanion ? 'rescue' : 'quests');
    deps.updateBubble(isCompanion ? 'quest-companion' : 'quest-complete');
    syncProgress();
    deps.renderDiscoveryTray();
    deps.saveDiscovery();
  }

  filters.forEach(filter => {
    filter.addEventListener('click', () => {
      activeArc = filter.dataset.questArc || 'All';
      filters.forEach(item => item.classList.toggle('is-active', item === filter));
      rows.forEach(row => row.classList.toggle('is-hidden', activeArc !== 'All' && row.dataset.questArcName !== activeArc));
      const firstVisible = visibleIndexes()[0];
      if (firstVisible !== undefined) syncQuest(firstVisible);
    });
  });

  rows.forEach((row, i) => row.addEventListener('click', () => syncQuest(i)));
  prevBtn?.addEventListener('click', () => {
    const indexes = visibleIndexes();
    const currentVisible = indexes.indexOf(activeIndex);
    syncQuest(indexes[Math.max(0, currentVisible - 1)] ?? activeIndex);
  });
  nextBtn?.addEventListener('click', () => {
    const indexes = visibleIndexes();
    const currentVisible = indexes.indexOf(activeIndex);
    syncQuest(indexes[Math.min(indexes.length - 1, currentVisible + 1)] ?? activeIndex);
  });
  board.querySelectorAll<HTMLElement>('[data-open-related]').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.openRelated;
      if (!target) return;
      deps.openSection(target, { scroll: true });
      deps.updateBubble('rescue-open');
    });
  });
}
