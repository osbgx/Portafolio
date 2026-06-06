import type { DiscoveryState } from './types';

export function initBossLog(
  discovery: DiscoveryState,
  deps: {
    sfxOpen: (sectionId?: string) => void;
    updateBubble: (msg: string) => void;
    updateAvatarStatus: (msg: string) => void;
    unlockAchievement: (id: string) => void;
    renderDiscoveryTray: () => void;
    saveDiscovery: () => void;
    reduceMotion: boolean;
  },
) {
  const bossEntries = Array.from(document.querySelectorAll<HTMLElement>('.boss-entry'));
  if (!bossEntries.length) return;

  const arena = document.getElementById('boss-encounter-stage');
  const grid = document.querySelector('.boss-bestiary-grid');
  const inspectedBosses = new Set<string>();
  let activeBossIndex = Math.max(0, bossEntries.findIndex(entry => entry.classList.contains('is-selected')));

  const arenaEls = {
    signal: document.getElementById('boss-encounter-signal'),
    category: document.getElementById('boss-encounter-category'),
    rank: document.getElementById('boss-encounter-rank'),
    name: document.getElementById('boss-encounter-name'),
    desc: document.getElementById('boss-encounter-desc'),
    domain: document.getElementById('boss-encounter-domain'),
    reward: document.getElementById('boss-encounter-reward'),
    status: document.getElementById('boss-encounter-status'),
    hpBar: document.getElementById('boss-encounter-hp'),
    hpLabel: document.getElementById('boss-encounter-hp-label'),
  };

  function bossReaction(entry: HTMLElement) {
    const state = entry.dataset.bossState;
    const category = entry.dataset.bossCategory;
    if (state === 'active') return 'boss-active';
    if (state === 'allied') return 'boss-allied';
    if (category === 'Life') return 'boss-life';
    if (category === 'Technical') return 'boss-technical';
    return 'boss-open';
  }

  function visibleBossEntries() {
    const visible = bossEntries.filter(entry => !entry.classList.contains('is-filtered'));
    return visible.length ? visible : bossEntries;
  }

  function selectBoss(entry: HTMLElement, options: { scroll?: boolean } = {}) {
    if (!entry) return;
    activeBossIndex = Number(entry.dataset.bossIndex || 0);
    const rank = entry.dataset.bossRank || '???';
    const currentHp = Number(entry.dataset.bossCurrentHp || 0);
    const maxHp = Number(entry.dataset.bossMaxHp || 1);
    const state = entry.dataset.bossState || 'defeated';
    const name = entry.dataset.bossName || 'Unknown Boss';
    const status = entry.dataset.bossStatus || '---';

    bossEntries.forEach(item => {
      const selected = item === entry;
      item.classList.toggle('is-selected', selected);
      item.setAttribute('aria-selected', selected ? 'true' : 'false');
    });

    if (grid) {
      grid.classList.remove('is-defeated', 'is-latent', 'is-active', 'is-allied');
      grid.classList.add(`is-${state}`);
      grid.setAttribute('data-boss-state', state);
    }

    if (arena) {
      arena.classList.remove('is-active');
      void arena.offsetWidth;
      arena.classList.add('is-active');
    }

    if (arenaEls.signal) arenaEls.signal.textContent = entry.dataset.bossSignal || 'BOSS ENCOUNTER';
    if (arenaEls.category) arenaEls.category.textContent = entry.dataset.bossCategory || 'Encounter';
    if (arenaEls.rank) {
      arenaEls.rank.textContent = rank;
      arenaEls.rank.classList.remove('rank-s', 'rank-a', 'rank-b');
      if (rank.startsWith('S')) arenaEls.rank.classList.add('rank-s');
      else if (rank.startsWith('A')) arenaEls.rank.classList.add('rank-a');
      else if (rank.startsWith('B')) arenaEls.rank.classList.add('rank-b');
    }
    if (arenaEls.name) arenaEls.name.textContent = name;
    if (arenaEls.desc) arenaEls.desc.textContent = entry.dataset.bossDesc || 'Encounter data missing.';
    if (arenaEls.domain) arenaEls.domain.textContent = `DOMAIN: ${entry.dataset.bossDomain || '---'}`;
    if (arenaEls.reward) arenaEls.reward.textContent = entry.dataset.bossReward || '---';
    if (arenaEls.status) arenaEls.status.textContent = `STATUS: ${status}`;
    if (arenaEls.hpBar) arenaEls.hpBar.style.width = `${maxHp > 0 ? (currentHp / maxHp) * 100 : 0}%`;
    if (arenaEls.hpLabel) arenaEls.hpLabel.textContent = `HP ${currentHp} / ${maxHp}`;

    inspectedBosses.add(name);
    discovery.bosses.add(name);
    deps.unlockAchievement('bossStarted');
    if (inspectedBosses.size >= 5) deps.unlockAchievement('bossPattern');
    if (inspectedBosses.size >= bossEntries.length) deps.unlockAchievement('bossComplete');
    if (name === 'The Motivation Phoenix') deps.unlockAchievement('bossAlly');

    deps.updateBubble(bossReaction(entry));
    deps.updateAvatarStatus(`LV.23 · ${state === 'allied' ? 'ALLY ENCOUNTER' : 'BOSS ENCOUNTER'} · ${rank}`);
    deps.sfxOpen('bosses');
    deps.renderDiscoveryTray();
    deps.saveDiscovery();

    if (options.scroll) {
      arena?.scrollIntoView({ behavior: deps.reduceMotion ? 'auto' : 'smooth', block: 'start' });
    }
  }

  bossEntries.forEach(entry => {
    entry.addEventListener('click', () => selectBoss(entry, { scroll: true }));
  });

  document.querySelectorAll<HTMLElement>('[data-boss-control]').forEach(control => {
    control.addEventListener('click', () => {
      const visible = visibleBossEntries();
      const currentVisibleIndex = Math.max(0, visible.findIndex(entry => Number(entry.dataset.bossIndex || 0) === activeBossIndex));
      const action = control.dataset.bossControl;
      let nextVisibleIndex = currentVisibleIndex;
      if (action === 'next') nextVisibleIndex = (currentVisibleIndex + 1) % visible.length;
      else if (action === 'prev') nextVisibleIndex = (currentVisibleIndex - 1 + visible.length) % visible.length;
      else if (action === 'random') {
        nextVisibleIndex = Math.floor(Math.random() * visible.length);
        if (visible.length > 1 && nextVisibleIndex === currentVisibleIndex) nextVisibleIndex = (nextVisibleIndex + 1) % visible.length;
      }
      selectBoss(visible[nextVisibleIndex], { scroll: true });
    });
  });

  document.querySelectorAll<HTMLElement>('[data-boss-filter]').forEach(filter => {
    filter.addEventListener('click', () => {
      const target = filter.dataset.bossFilter || 'All';
      document.querySelectorAll<HTMLElement>('[data-boss-filter]').forEach(btn => {
        const active = btn === filter;
        btn.classList.toggle('is-active', active);
        btn.setAttribute('aria-pressed', active ? 'true' : 'false');
      });
      let visibleCount = 0;
      bossEntries.forEach(entry => {
        const visible = target === 'All' || entry.dataset.bossCategory === target;
        entry.classList.toggle('is-filtered', !visible);
        if (visible) visibleCount += 1;
      });
      const count = document.getElementById('boss-roster-count');
      if (count) count.textContent = `${visibleCount}/${bossEntries.length}`;
      if (bossEntries[activeBossIndex]?.classList.contains('is-filtered')) selectBoss(visibleBossEntries()[0], { scroll: false });
    });
  });
}
