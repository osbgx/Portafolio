import { createSoundEngine, spawnSparkles as spawnPixelSparkles } from './about/audio';
import { initAvatarCompanion } from './about/avatar';
import { achievements, hotspotReactionMap, hotspotToastMap, roomCopy, sectionNames, tourSteps } from './about/content';
import { initFinalSavePoint } from './about/final-save';
import { initIntroInteractions } from './about/intro';
import { initRoomZoom } from './about/room-zoom';
import { initSpriteSequencer } from './about/sprite';
import { createToastSystem } from './about/toast';
import { createStore, getTotals } from './about/store';
import { initSectionNav } from './about/section-nav';
import { initQuestBoard } from './about/quest-board';
import { initMemoryConsole } from './about/memory-console';
import { initBossLog } from './about/boss-log';
import { initRescueGuild } from './about/rescue-guild';
import { initDevLoreArchive } from './about/dev-lore-archive';
import { initEasterEggs } from './about/easter-eggs';
import { initGuidedTour } from './about/guided-tour';
import { initKeyboardNav } from './about/keyboard-nav';
import { initIdleTimer } from './about/idle-timer';
import { withBase } from '../utils/paths';

document.addEventListener('astro:page-load', () => {
  const CAT_CLICKS_KEY = 'about-mvp-v3-cat-clicks';
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const cleanupTasks: Array<() => void> = [];

  /* ── 1. Core systems (no dependencies) ── */
  const { sfxOpen, sfxClose, sfxSelect } = createSoundEngine();
  const { playReaction, cleanup: cleanupSprites } = initSpriteSequencer(reduceMotion);
  const { showToast, cleanup: cleanupToast } = createToastSystem(reduceMotion);
  const spawnSparkles = (x: number, y: number) => spawnPixelSparkles(x, y, reduceMotion);
  cleanupTasks.push(cleanupSprites, cleanupToast);

  /* ── 2. Store (discovery state + persistence) ── */
  const store = createStore();
  const { discovery } = store;
  const totals = getTotals();

  /* ── 3. Discovery helpers ── */
  const trayList = document.getElementById('discovery-tray-list');
  const progressCounter = document.getElementById('progress-counter');
  const finalProgressSummary = document.getElementById('final-progress-summary');
  const roomInspectorTitle = document.getElementById('room-inspector-title');
  const roomInspectorText = document.getElementById('room-inspector-text');

  function renderDiscoveryTray() {
    if (progressCounter) {
      progressCounter.textContent = `S ${discovery.sections.size}/${totals.sectionTotal} · R ${discovery.hotspots.size}/${totals.roomHotspotTotal}`;
    }
    const codexRead = Math.min(discovery.codex.size, totals.codexTotal);
    const logRead = discovery.memory.size + discovery.quests.size + discovery.bosses.size + discovery.rescue.size;
    const logTotal = totals.memoryTotal + totals.sideQuestTotal + totals.bossTotal + totals.rescueTotal;
    const groups = [
      { label: 'Room', items: [`Objects: ${discovery.hotspots.size} / ${totals.roomHotspotTotal}`, `Sections: ${discovery.sections.size} / ${totals.sectionTotal}`] },
      { label: 'Logs', items: [`Memories: ${discovery.memory.size} / ${totals.memoryTotal}`, `Quests: ${discovery.quests.size} / ${totals.sideQuestTotal}`, `Bosses: ${discovery.bosses.size} / ${totals.bossTotal}`, `Rescue: ${discovery.rescue.size} / ${totals.rescueTotal}`] },
      { label: 'Codex', items: [`Inspected: ${codexRead} / ${totals.codexTotal}`] },
      { label: 'Secrets', items: [`Found: ${discovery.secrets.size} / ?`] },
    ];
    if (trayList) {
      trayList.innerHTML = groups.map(group => `
        <section class="discovery-group">
          <strong>${group.label}</strong>
          ${group.items.map(item => `<span>${item}</span>`).join('')}
        </section>
      `).join('');
    }
    if (finalProgressSummary) {
      finalProgressSummary.innerHTML = [
        ['Room', `${discovery.hotspots.size} / ${totals.roomHotspotTotal}`],
        ['Logs', `${logRead} / ${logTotal}`],
        ['Codex', `${codexRead} / ${totals.codexTotal}`],
        ['Secrets', `${discovery.secrets.size} / ?`],
      ].map(([label, value]) => `<span class="final-progress-chip"><strong>${label}</strong><em>${value}</em></span>`).join('');
    }
  }

  function unlockAchievement(id: string) {
    if (discovery.achievements.has(id)) return;
    discovery.achievements.add(id);
    const [title, text] = achievements[id] || ['Achievement unlocked', 'Nuevo descubrimiento registrado.'];
    showToast(title, text);
    renderDiscoveryTray();
    store.save();
  }

  function saveDiscovery() {
    store.save();
    renderDiscoveryTray();
  }

  function setScene(scene: string | null) {
    document.body.classList.toggle('scene-rescue', scene === 'rescue');
    document.body.classList.toggle('quiet-hours', scene === 'quiet');
  }

  function updateInspector(item: string) {
    const copy = roomCopy[item];
    if (!copy) return;
    if (roomInspectorTitle) roomInspectorTitle.textContent = copy.title;
    if (roomInspectorText) roomInspectorText.textContent = copy.text;
  }

  function triggerMilestonePulse(className: string) {
    if (reduceMotion) return;
    document.body.classList.remove(className);
    void document.body.offsetWidth;
    document.body.classList.add(className);
    window.setTimeout(() => document.body.classList.remove(className), 1400);
  }

  /* ── 4. Avatar (needs unlockAchievement) ── */
  const { updateBubble, updateAvatarStatus, cleanup: cleanupAvatar } = initAvatarCompanion({ unlockAchievement, sfxSelect });
  cleanupTasks.push(cleanupAvatar);

  /* ── 5. Remaining helpers (need avatar + store) ── */
  function checkMilestones() {
    if (discovery.hotspots.size >= totals.roomHotspotTotal) {
      const wasNew = !discovery.secrets.has('room-mapped');
      discovery.secrets.add('room-mapped');
      updateBubble('room-complete');
      if (wasNew) triggerMilestonePulse('milestone-room-complete');
      unlockAchievement('roomComplete');
    }
    if (discovery.sections.size >= totals.sectionTotal) {
      const wasNew = !discovery.secrets.has('full-map');
      discovery.secrets.add('full-map');
      updateBubble('map-complete');
      if (wasNew) triggerMilestonePulse('milestone-map-complete');
      unlockAchievement('mapComplete');
    }
  }

  function setQuietRead(active: boolean) {
    const button = document.querySelector<HTMLElement>('[data-quiet-read]');
    document.body.classList.toggle('quiet-read', active);
    button?.setAttribute('aria-pressed', active ? 'true' : 'false');
    button?.classList.toggle('is-active', active);
    if (button) button.textContent = active ? 'QUIET ON' : 'QUIET READ';
    try { window.localStorage.setItem('about-mvp-v3-quiet-read', active ? '1' : '0'); } catch (_) { /* ignore */ }
  }

  function hydrateDiscovery() {
    store.load();
    discovery.sections.forEach(sectionId => {
      document.querySelector(`.progress-dot[data-section-id="${sectionId}"]`)?.classList.add('is-visited');
    });
    discovery.hotspots.forEach(item => {
      document.querySelector(`.room-hotspot[data-room-item="${item}"]`)?.classList.add('is-active');
    });
    if (discovery.secrets.has('retro-mode')) document.body.classList.add('retro-mode');
    if (discovery.secrets.has('full-map')) updateAvatarStatus('LV.23 · FULL MAP · COMPLETIONIST');
    else if (discovery.secrets.has('room-mapped')) updateAvatarStatus('LV.23 · ROOM MAPPED · HUB ONLINE');
    else if (discovery.secrets.has('retro-mode')) updateAvatarStatus('LV.23 · RETRO MODE · CRT ONLINE');
    renderDiscoveryTray();
    try { setQuietRead(window.localStorage.getItem('about-mvp-v3-quiet-read') === '1'); } catch (_) { /* ignore */ }
  }

  /* ── 6. Section navigation ── */
  const nav = initSectionNav(discovery, {
    updateBubble, updateAvatarStatus, showToast, playReaction, spawnSparkles, sfxOpen, sfxClose, sfxSelect,
    unlockAchievement, renderDiscoveryTray, saveDiscovery,
    cleanupTasks, roomHotspotTotal: totals.roomHotspotTotal, sectionTotal: totals.sectionTotal, sectionNames, reduceMotion,
  });

  /* ── 7. Room zoom ── */
  initRoomZoom({ cleanupTasks, sfxSelect });

  /* ── 8. Intro ── */
  const { cleanup: cleanupIntro } = initIntroInteractions({
    introKey: 'about-mvp-v3-intro-dismissed',
    updateBubble, updateAvatarStatus, openSection: nav.openSection,
  });
  cleanupTasks.push(cleanupIntro);

  /* ── 9. Feature modules ── */
  initQuestBoard(discovery, {
    sfxSelect, playReaction, updateBubble, showToast, openSection: nav.openSection,
    renderDiscoveryTray, saveDiscovery,
  });

  initMemoryConsole(discovery, {
    sfxSelect, playReaction, showToast, updateBubble,
    renderDiscoveryTray, saveDiscovery,
  });

  initBossLog(discovery, {
    sfxOpen, updateBubble, updateAvatarStatus, unlockAchievement,
    renderDiscoveryTray, saveDiscovery, reduceMotion,
  });

  initRescueGuild(discovery, {
    sfxSelect, sfxOpen, playReaction, setScene, updateBubble, updateAvatarStatus, showToast, unlockAchievement,
    renderDiscoveryTray, saveDiscovery, cleanupTasks,
  });

  initDevLoreArchive(discovery, {
    sfxOpen, sfxSelect, showToast, updateBubble, unlockAchievement,
    renderDiscoveryTray, saveDiscovery,
  });

  /* ── 10. Final save point ── */
  initFinalSavePoint({ cleanupTasks, updateBubble, updateAvatarStatus, playReaction, showToast });

  /* ── 11. Guided tour ── */
  const { cancelGuidedTour } = initGuidedTour(tourSteps, {
    openSection: nav.openSection, playReaction, updateBubble, updateAvatarStatus, showToast,
  });

  /* ── 12. Dev Lore tabs ── */
  function activateDevLoreCategory(category = 'all') {
    const tabs = [...document.querySelectorAll<HTMLElement>('.dev-lore-tab')];
    const groups = [...document.querySelectorAll<HTMLElement>('.dev-lore-group')];
    const targetCategory = category === 'best'
      ? (tabs.find(tab => /data|debug|code|dev|bug/i.test(tab.dataset.category || ''))?.dataset.category || tabs.find(tab => tab.dataset.category !== 'all')?.dataset.category || 'all')
      : category;
    tabs.forEach(tab => tab.classList.toggle('is-active', tab.dataset.category === targetCategory));
    groups.forEach(group => {
      const visible = targetCategory === 'all' || group.dataset.category === targetCategory;
      group.classList.toggle('is-hidden', !visible);
    });
    discovery.codex.add(`filter:${targetCategory}`);
    unlockAchievement('firstCodex');
    renderDiscoveryTray();
    store.save();
  }

  document.querySelectorAll('.dev-lore-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const category = tab.dataset.category || 'all';
      (window as any).osbgxTrack?.('about_dev_lore_filter', { category });
      activateDevLoreCategory(category);
    });
  });
  document.querySelectorAll('.dev-lore-more').forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.closest('.dev-lore-group');
      (window as any).osbgxTrack?.('about_dev_lore_expand', { group: btn.dataset.group || 'lore' });
      group?.querySelectorAll('.dev-lore-card-extra').forEach(card => card.classList.add('is-visible'));
      btn.classList.add('is-hidden');
      discovery.codex.add(`expanded:${btn.dataset.group || 'lore'}`);
      unlockAchievement('firstCodex');
      renderDiscoveryTray();
      store.save();
    });
  });
  document.querySelectorAll('.dev-lore-card, .dev-lore-tab').forEach(el => {
    el.addEventListener('click', () => {
      discovery.codex.add(el.textContent?.trim().slice(0, 80) || `codex-${discovery.codex.size + 1}`);
      unlockAchievement('firstCodex');
      updateBubble('dev-lore');
      renderDiscoveryTray();
      store.save();
    });
  });

  /* ── 13. Room hotspots ── */
  let catClicks = 0;
  try { catClicks = Number(window.localStorage.getItem(CAT_CLICKS_KEY) || 0); } catch (_) { /* ignore */ }
  document.querySelectorAll('.room-hotspot').forEach(hotspot => {
    hotspot.addEventListener('click', () => {
      const item = (hotspot as HTMLElement).dataset.roomItem;
      const sectionId = (hotspot as HTMLElement).dataset.targetSection || hotspotReactionMap[item || ''] || 'room';
      (window as any).osbgxTrack?.('about_room_hotspot_click', { item: item || 'unknown', section: sectionId });
      sfxSelect();
      hotspot.classList.remove('is-active');
      void (hotspot as HTMLElement).offsetWidth;
      hotspot.classList.add('is-active');
      if (item) discovery.hotspots.add(item);
      updateInspector(item || '');
      updateAvatarStatus(`LV.23 · INSPECTING ${String(item || 'ROOM').toUpperCase()} · ${discovery.hotspots.size}/${totals.roomHotspotTotal}`);
      unlockAchievement('firstHotspot');
      checkMilestones();
      renderDiscoveryTray();
      store.save();
      if (item === 'work') {
        showToast('Objeto inspeccionado', hotspotToastMap[item] || 'Has encontrado algo.');
        window.setTimeout(() => { window.location.href = withBase('/projects'); }, 400);
        return;
      }
      if (item === 'miku') {
        showToast('Objeto inspeccionado', hotspotToastMap[item] || 'Has encontrado algo.');
        window.open('https://www.youtube.com/watch?v=k3KAYAgfSuM', '_blank');
        return;
      }
      nav.updateProgress(sectionId);
      playReaction(sectionId);
      updateBubble(sectionId);
      if (item === 'cat') {
        catClicks += 1;
        try { window.localStorage.setItem(CAT_CLICKS_KEY, String(catClicks)); } catch (_) { /* ignore */ }
        setScene('rescue');
        if (catClicks >= 5) {
          discovery.secrets.add('bugged-cat');
          unlockAchievement('cat');
          updateBubble('bugged-cat');
        }
      } else {
        setScene(sectionId === 'rescue' ? 'rescue' : null);
      }
      nav.openSection(sectionId, { scroll: true });
      showToast('Objeto inspeccionado', hotspotToastMap[item || ''] || 'Has encontrado algo.');
    });
  });

  /* ── 14. Keyboard nav ── */
  const cleanupKeyboard = initKeyboardNav({ sfxSelect, toggle: nav.toggle });
  if (cleanupKeyboard) cleanupTasks.push(cleanupKeyboard);

  /* ── 15. Idle timer ── */
  initIdleTimer(discovery, { setScene, updateBubble, updateAvatarStatus, cleanupTasks });

  /* ── 16. Easter eggs ── */
  const cleanupEggs = initEasterEggs(discovery, { updateBubble, updateAvatarStatus, unlockAchievement, renderDiscoveryTray, saveDiscovery });
  if (cleanupEggs) cleanupTasks.push(cleanupEggs);

  /* ── 17. Nav links ── */
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href')?.slice(1);
      if (!targetId) return;
      (window as any).osbgxTrack?.('about_hero_nav_click', { section: targetId });
      cancelGuidedTour();
      sfxSelect();
      nav.openSection(targetId, { scroll: true });
      updateBubble(targetId);
    });
  });

  /* ── 18. Quick nav ── */
  const quickNav = document.querySelector('.quick-nav');
  if (quickNav) {
    const heroSection = document.getElementById('hero');
    const quickNavObserver = new IntersectionObserver(([entry]) => {
      quickNav.classList.toggle('is-visible', !entry.isIntersecting);
    }, { threshold: 0 });
    if (heroSection) quickNavObserver.observe(heroSection);
    cleanupTasks.push(() => quickNavObserver.disconnect());

    quickNav.querySelectorAll('.quick-nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        cancelGuidedTour();
        sfxSelect();
        const targetId = link.getAttribute('href').slice(1);
        (window as any).osbgxTrack?.('about_quick_nav_click', { section: targetId });
        const section = document.getElementById(targetId);
        if (section) {
          const trigger = section.querySelector<HTMLElement>('.accordion-trigger');
          const panel = section.querySelector('.accordion-panel');
          if (trigger && panel && !panel.classList.contains('open')) {
            nav.toggle(trigger, true);
          }
        }
        if (targetId) {
          const el = document.getElementById(targetId);
          if (el) {
            const rect = (el.querySelector('.accordion-trigger') || el).getBoundingClientRect();
            spawnSparkles(rect.left + rect.width * 0.5, rect.top);
          }
          playReaction(targetId);
          updateBubble(targetId);
        }
        section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    /* ── 18b. Mobile map toggle ── */
    const mobileMapToggle = document.querySelector<HTMLElement>('[data-mobile-map-toggle]');
    mobileMapToggle?.addEventListener('click', () => {
      const open = !quickNav.classList.contains('is-mobile-open');
      (window as any).osbgxTrack?.('about_mobile_map_toggle', { open });
      quickNav.classList.toggle('is-mobile-open', open);
      mobileMapToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      mobileMapToggle.textContent = open ? 'CLOSE' : 'MAP';
    });
    quickNav.querySelectorAll('.quick-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        quickNav.classList.remove('is-mobile-open');
        mobileMapToggle?.setAttribute('aria-expanded', 'false');
        if (mobileMapToggle) mobileMapToggle.textContent = 'MAP';
      });
    });
  }

  /* ── 19. Hydrate saved state ── */
  hydrateDiscovery();

  /* ── 20. Quiet read button ── */
  const quietReadButton = document.querySelector<HTMLElement>('[data-quiet-read]');
  quietReadButton?.addEventListener('click', () => {
    const next = !document.body.classList.contains('quiet-read');
    (window as any).osbgxTrack?.('about_quiet_read_toggle', { enabled: next });
    setQuietRead(next);
    updateBubble(next ? 'Quiet Read activo. Menos ruido, misma historia.' : 'Quiet Read desactivado. Los efectos vuelven al save file.');
    updateAvatarStatus(next ? 'LV.23 · QUIET READ · LOW FX' : 'LV.23 · FULL FX · SAVE FILE ACTIVE');
  });

  /* ── 21. Reset ── */
  document.getElementById('discovery-reset')?.addEventListener('click', () => {
    (window as any).osbgxTrack?.('about_save_reset');
    store.reset();
    try { window.localStorage.removeItem('about-mvp-v3-intro-dismissed'); } catch (_) { /* ignore */ }
    try { window.localStorage.removeItem(CAT_CLICKS_KEY); } catch (_) { /* ignore */ }
    try { window.localStorage.removeItem('about-mvp-v3-avatar-pets'); } catch (_) { /* ignore */ }
    document.body.classList.remove('quiet-hours', 'retro-mode', 'scene-rescue');
    document.querySelectorAll('.progress-dot.is-visited, .room-hotspot.is-active').forEach(el => el.classList.remove('is-visited', 'is-active'));
    document.getElementById('press-start-overlay')?.classList.remove('is-hidden');
    updateBubble('hero');
    updateAvatarStatus('LV.23 · STILL LOADING… · MEMORY REALM');
    renderDiscoveryTray();
    showToast('Save reset', 'Descubrimientos reiniciados para testear la experiencia.');
  });

  /* ── 22. Cleanup on page swap ── */
  document.addEventListener('astro:before-swap', () => {
    cleanupTasks.forEach(cleanup => {
      try { cleanup(); } catch (_) { /* keep running remaining cleanup tasks */ }
    });
  }, { once: true });
});
