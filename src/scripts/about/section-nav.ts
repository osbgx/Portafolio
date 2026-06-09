import type { DiscoveryState, CoreCapabilities } from './types';

export function initSectionNav(
  discovery: DiscoveryState,
  deps: CoreCapabilities & {
    unlockAchievement: (id: string) => void;
    renderDiscoveryTray: () => void;
    saveDiscovery: () => void;
    showToast: (title: string, text: string) => void;
    cleanupTasks: Array<() => void>;
    roomHotspotTotal: number;
    sectionTotal: number;
    sectionNames: Record<string, string>;
    reduceMotion: boolean;
  },
) {
  const progressEl = document.getElementById('progress-counter');
  const navSectionLinks = [...document.querySelectorAll<HTMLElement>('[data-section]')];
  let activeNavigationId: string | null = null;

  /* Room hint / sweep state */
  let roomSweepPlayed = false;
  let roomHintTimer: number | null = null;
  let roomHintShown = false;

  function sweepRoomHotspotsOnce() {
    if (roomSweepPlayed || deps.reduceMotion) return;
    roomSweepPlayed = true;
    const hotspots = [...document.querySelectorAll<HTMLElement>('.room-hotspot')];
    hotspots.forEach((hotspot, index) => {
      window.setTimeout(() => hotspot.classList.add('is-sweeping'), index * 85);
      window.setTimeout(() => hotspot.classList.remove('is-sweeping'), 1050 + index * 85);
    });
  }

  function scheduleRoomHint() {
    if (roomHintShown || discovery.hotspots.size > 0) return;
    if (roomHintTimer) window.clearTimeout(roomHintTimer);
    roomHintTimer = window.setTimeout(() => {
      if (!document.body.classList.contains('room-in-view') || discovery.hotspots.size > 0) return;
      roomHintShown = true;
      deps.updateBubble('Tip: acercá la imagen y buscá pequeñas chispas al pasar sobre objetos del cuarto.');
      deps.updateAvatarStatus('LV.23 · ROOM HINT · ZOOM + DRAG ENABLED');
    }, 8500);
  }

  function setActiveNavigation(sectionId: string | null) {
    if (!sectionId || activeNavigationId === sectionId) return;
    activeNavigationId = sectionId;
    navSectionLinks.forEach(link => {
      const active = link.dataset.section === sectionId;
      link.classList.toggle('is-active', active);
      if (active) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
    document.querySelectorAll('.accordion-section.is-current').forEach(section => section.classList.remove('is-current'));
    document.getElementById(sectionId)?.classList.add('is-current');
    document.body.classList.toggle('room-in-view', sectionId === 'room');
    if (sectionId === 'room') scheduleRoomHint();
    else if (roomHintTimer) window.clearTimeout(roomHintTimer);
  }

  function updateProgress(sectionId: string) {
    if (!sectionId) return;
    setActiveNavigation(sectionId);
    const wasNew = !discovery.sections.has(sectionId);
    discovery.sections.add(sectionId);
    const dot = document.querySelector(`.progress-dot[data-section-id="${sectionId}"]`);
    if (dot) dot.classList.add('is-visited');
    if (progressEl) progressEl.textContent = `S ${discovery.sections.size}/${deps.sectionTotal} · R ${discovery.hotspots.size}/${deps.roomHotspotTotal}`;
    if (wasNew) deps.unlockAchievement(sectionId === 'rescue' ? 'rescue' : 'firstSection');
    deps.renderDiscoveryTray();
    deps.saveDiscovery();
  }

  const triggers = document.querySelectorAll<HTMLElement>('.accordion-trigger');

  function toggle(trigger: HTMLElement, forceState?: boolean) {
    const panel = trigger.parentElement?.querySelector<HTMLElement>('.accordion-panel');
    const indicator = trigger.querySelector('.sec-indicator');
    if (!panel) return;
    const isOpen = forceState !== undefined ? forceState : !panel.classList.contains('open');
    panel.classList.toggle('open', isOpen);
    trigger.parentElement?.classList.toggle('is-open-section', isOpen);
    trigger.setAttribute('aria-expanded', isOpen);
    if (indicator) indicator.textContent = isOpen ? '▼' : '▶';
    if (isOpen) {
      const sid = trigger.parentElement?.id;
      if (sid) (window as any).osbgxTrack?.('about_section_open', { section: sid });
      const wasNew = sid ? !discovery.sections.has(sid) : false;
      deps.sfxOpen(sid);
      const rect = trigger.getBoundingClientRect();
      deps.spawnSparkles(rect.left + rect.width * 0.5, rect.top);
      deps.playReaction(sid);
      updateProgress(sid);
      deps.updateBubble(sid === 'rescue' ? 'rescue-open' : sid === 'bosses' ? 'boss-open' : sid === 'quests' ? 'quest-board' : sid);
      if (sid === 'rescue') deps.unlockAchievement('rescueGuild');
      if (sid === 'room') sweepRoomHotspotsOnce();
      if (wasNew) deps.showToast(deps.sectionNames[sid] || 'SECTION', 'Sección desbloqueada.');
    } else {
      deps.sfxClose();
    }
  }

  function openSection(sectionId: string, options: { scroll?: boolean } = {}) {
    const section = document.getElementById(sectionId);
    if (!section) return;
    (window as any).osbgxTrack?.('about_section_navigate', { section: sectionId, scroll: Boolean(options.scroll) });
    const trigger = section.querySelector<HTMLElement>('.accordion-trigger');
    const panel = section.querySelector('.accordion-panel');
    if (trigger && panel && !panel.classList.contains('open')) toggle(trigger, true);
    updateProgress(sectionId);
    if (options.scroll) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (sectionId === 'room') sweepRoomHotspotsOnce();
  }

  triggers.forEach(t => {
    t.addEventListener('click', () => toggle(t));
  });

  if ('IntersectionObserver' in window) {
    const visibleSections = new Map<string, number>();
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const id = entry.target.id;
        if (!id) return;
        if (entry.isIntersecting) visibleSections.set(id, entry.intersectionRatio);
        else visibleSections.delete(id);
      });
      const [activeId] = [...visibleSections.entries()].sort((a, b) => b[1] - a[1])[0] || [];
      if (activeId) setActiveNavigation(activeId);
    }, { rootMargin: '-28% 0px -58% 0px', threshold: [0, 0.2, 0.45, 0.7] });
    document.querySelectorAll('.accordion-section').forEach(section => sectionObserver.observe(section));
    deps.cleanupTasks.push(() => sectionObserver.disconnect());
  }

  return { toggle, openSection, setActiveNavigation, updateProgress, sweepRoomHotspotsOnce, scheduleRoomHint };
}
