import type { DiscoveryState } from './types';

export function initDevLoreArchive(
  discovery: DiscoveryState,
  deps: {
    sfxOpen: (sectionId?: string) => void;
    sfxSelect: () => void;
    showToast: (title: string, text: string) => void;
    updateBubble: (msg: string) => void;
    unlockAchievement: (id: string) => void;
    renderDiscoveryTray: () => void;
    saveDiscovery: () => void;
  },
) {
  const archive = document.querySelector('[data-dev-archive]');
  if (!archive) return;

  const gate = archive.querySelector<HTMLElement>('[data-dev-gate]');
  const shell = archive.querySelector<HTMLElement>('[data-dev-shell]');
  const categoryModules = [...archive.querySelectorAll<HTMLElement>('[data-dev-category]')];
  const panels = [...archive.querySelectorAll<HTMLElement>('[data-dev-category-panel]')];
  const rows = [...archive.querySelectorAll<HTMLElement>('[data-dev-entry]')];
  const inspectors = [...archive.querySelectorAll<HTMLElement>('[data-dev-inspector-entry]')];
  const entryProgress = archive.querySelector('[data-dev-entry-progress]');
  const categoryProgress = archive.querySelector('[data-dev-category-progress]');
  const openedCategories = new Set<string>();
  const inspectedEntries = new Set<string>();
  let tenEntryToastShown = false;
  let mapCompleteShown = false;

  function syncDevProgress() {
    if (entryProgress) entryProgress.textContent = `Explored ${inspectedEntries.size}/${inspectors.length}`;
    if (categoryProgress) categoryProgress.textContent = `Categories ${openedCategories.size}/${categoryModules.length}`;
    if (inspectedEntries.size >= 10 && !tenEntryToastShown) {
      tenEntryToastShown = true;
      deps.showToast('COMPLETIONIST MODE DETECTED', 'You inspected 10 entries.');
      deps.updateBubble('lore-drop');
    }
    if (openedCategories.size === categoryModules.length && !mapCompleteShown) {
      mapCompleteShown = true;
      deps.showToast('ARCHIVE MAP COMPLETE', 'All Dev Lore shelves indexed.');
    }
    deps.renderDiscoveryTray();
    deps.saveDiscovery();
  }

  function openArchive() {
    const isFirstOpen = gate && !gate.classList.contains('is-archived');
    if (shell) shell.hidden = false;
    if (shell) shell.dataset.devStep = 'categories';
    gate?.classList.add('is-archived');
    deps.sfxOpen('dev-lore');
    if (isFirstOpen) deps.showToast('ARCHIVE UNSEALED', `${inspectors.length} entries indexed.`);
    deps.updateBubble('dev-lore');
  }

  function openCategory(category: string) {
    openArchive();
    if (!category) return;
    if (shell) shell.dataset.devStep = 'entries';
    openedCategories.add(category);
    categoryModules.forEach(module => module.classList.toggle('is-active', module.dataset.devCategory === category));
    panels.forEach(panel => panel.classList.toggle('is-active', panel.dataset.devCategoryPanel === category));
    const activePanel = panels.find(panel => panel.dataset.devCategoryPanel === category);
    const firstRow = activePanel?.querySelector<HTMLElement>('[data-dev-entry]');
    if (firstRow) selectEntry(firstRow.dataset.devEntry, false);
    deps.sfxSelect();
    syncDevProgress();
  }

  function selectEntry(id?: string, randomDrop = false) {
    if (!id) return;
    if (shell) shell.dataset.devStep = 'detail';
    inspectedEntries.add(id);
    discovery.codex.add(id);
    rows.forEach(row => row.classList.toggle('is-active', row.dataset.devEntry === id));
    inspectors.forEach(entry => entry.classList.toggle('is-active', entry.dataset.devInspectorEntry === id));
    if (randomDrop) {
      deps.showToast('LORE DROP ACQUIRED', 'Random archive entry selected.');
      deps.updateBubble('lore-drop');
    } else {
      deps.updateBubble('dev-lore');
    }
    deps.unlockAchievement('firstCodex');
    syncDevProgress();
  }

  archive.querySelector<HTMLElement>('[data-dev-open]')?.addEventListener('click', openArchive);
  archive.querySelector<HTMLElement>('[data-dev-random]')?.addEventListener('click', () => {
    openArchive();
    const archiveRows = rows.filter(row => row.dataset.devCategoryName !== 'featured');
    const random = archiveRows[Math.floor(Math.random() * archiveRows.length)];
    const category = random?.dataset.devCategoryName;
    if (category) openCategory(category);
    selectEntry(random?.dataset.devEntry, true);
  });
  archive.querySelector<HTMLElement>('[data-dev-featured]')?.addEventListener('click', () => {
    openArchive();
    if (shell) shell.dataset.devStep = 'entries';
    categoryModules.forEach(module => module.classList.remove('is-active'));
    panels.forEach(panel => panel.classList.toggle('is-active', panel.dataset.devCategoryPanel === 'featured'));
    const firstFeatured = archive.querySelector<HTMLElement>('[data-dev-category-panel="featured"] [data-dev-entry]');
    selectEntry(firstFeatured?.dataset.devEntry);
  });
  categoryModules.forEach(module => module.addEventListener('click', () => openCategory(module.dataset.devCategory || '')));
  rows.forEach(row => row.addEventListener('click', () => selectEntry(row.dataset.devEntry)));
  archive.querySelectorAll<HTMLElement>('[data-dev-back]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (!shell) return;
      shell.dataset.devStep = btn.dataset.devBack === 'categories' ? 'categories' : 'entries';
    });
  });
  archive.querySelectorAll<HTMLElement>('[data-dev-random-category]').forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.devRandomCategory;
      const pool = rows.filter(row => row.dataset.devCategoryName === category);
      const random = pool[Math.floor(Math.random() * pool.length)];
      selectEntry(random?.dataset.devEntry, true);
    });
  });
  archive.querySelectorAll<HTMLElement>('[data-dev-next-entry]').forEach(btn => {
    btn.addEventListener('click', () => {
      const current = rows.findIndex(row => row.dataset.devEntry === btn.dataset.devNextEntry);
      const next = rows[current + 1] || rows[0];
      const category = next?.dataset.devCategoryName;
      if (category && category !== 'featured') openCategory(category);
      selectEntry(next?.dataset.devEntry);
    });
  });
  archive.querySelectorAll<HTMLElement>('[data-dev-show-all]').forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.devShowAll;
      archive.querySelectorAll<HTMLElement>(`[data-dev-entry-list="${category}"] .dev-entry-row`).forEach(row => row.classList.remove('is-extra'));
      btn.hidden = true;
    });
  });
  archive.querySelectorAll<HTMLInputElement>('[data-dev-search]').forEach(input => {
    input.addEventListener('input', () => {
      const category = input.dataset.devSearch;
      const query = input.value.trim().toLowerCase();
      archive.querySelectorAll<HTMLElement>(`[data-dev-entry-list="${category}"] .dev-entry-row`).forEach(row => {
        row.classList.toggle('is-filtered', query.length > 0 && !row.dataset.devSearchText?.includes(query));
      });
    });
  });
}
