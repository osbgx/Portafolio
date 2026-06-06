type CleanupList = Array<() => void>;

export function initRoomZoom(options: { cleanupTasks: CleanupList; sfxSelect: () => void }) {
  const panorama = document.querySelector<HTMLElement>('.room-panorama');
  if (!panorama) return;

  const { cleanupTasks, sfxSelect } = options;
  const levelLabel = panorama.querySelector<HTMLElement>('[data-room-zoom-level]');
  const buttons = [...panorama.querySelectorAll<HTMLButtonElement>('[data-room-zoom]')];
  const zoomLevels = [1, 1.25, 1.5, 2];
  let zoomIndex = 0;
  let panX = 0;
  let panY = 0;
  let dragStartX = 0;
  let dragStartY = 0;
  let dragPanX = 0;
  let dragPanY = 0;
  let isPanning = false;
  let didDrag = false;

  function clampPan() {
    const zoom = zoomLevels[zoomIndex];
    if (zoom <= 1) {
      panX = 0;
      panY = 0;
      return;
    }
    const maxPanX = panorama.clientWidth * (zoom - 1);
    const maxPanY = panorama.clientHeight * (zoom - 1);
    panX = Math.min(0, Math.max(-maxPanX, panX));
    panY = Math.min(0, Math.max(-maxPanY, panY));
  }

  function applyZoom() {
    const zoom = zoomLevels[zoomIndex];
    clampPan();
    panorama.style.setProperty('--room-zoom', String(zoom));
    panorama.style.setProperty('--room-pan-x', `${panX}px`);
    panorama.style.setProperty('--room-pan-y', `${panY}px`);
    panorama.classList.toggle('is-zoomed', zoom > 1);
    if (levelLabel) levelLabel.textContent = `${Math.round(zoom * 100)}%`;
    buttons.forEach(button => {
      const action = button.dataset.roomZoom;
      button.disabled = (action === 'out' && zoomIndex === 0)
        || (action === 'in' && zoomIndex === zoomLevels.length - 1)
        || (action === 'reset' && zoomIndex === 0);
    });
  }

  function getZoomOrigin(e?: MouseEvent | WheelEvent | KeyboardEvent) {
    const rect = panorama.getBoundingClientRect();
    if (e && 'clientX' in e && e.clientX > 0) {
      return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }
    return { x: rect.width * 0.5, y: rect.height * 0.5 };
  }

  function setZoom(nextIndex: number, e?: MouseEvent | WheelEvent | KeyboardEvent) {
    const oldZoom = zoomLevels[zoomIndex];
    const origin = getZoomOrigin(e);
    const contentX = (origin.x - panX) / oldZoom;
    const contentY = (origin.y - panY) / oldZoom;
    zoomIndex = Math.max(0, Math.min(nextIndex, zoomLevels.length - 1));
    const nextZoom = zoomLevels[zoomIndex];
    panX = origin.x - contentX * nextZoom;
    panY = origin.y - contentY * nextZoom;
    applyZoom();
  }

  function movePan(dx: number, dy: number) {
    if (zoomLevels[zoomIndex] <= 1) return;
    panX += dx;
    panY += dy;
    applyZoom();
  }

  buttons.forEach(button => {
    button.addEventListener('click', (e: MouseEvent) => {
      const action = button.dataset.roomZoom;
      if (action === 'in') setZoom(zoomIndex + 1, e);
      else if (action === 'out') setZoom(zoomIndex - 1, e);
      else setZoom(0, e);
      sfxSelect();
    });
  });

  panorama.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === '+' || e.key === '=') {
      e.preventDefault();
      setZoom(zoomIndex + 1, e);
    } else if (e.key === '-' || e.key === '_') {
      e.preventDefault();
      setZoom(zoomIndex - 1, e);
    } else if (e.key === '0') {
      e.preventDefault();
      setZoom(0, e);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      movePan(48, 0);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      movePan(-48, 0);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      movePan(0, 48);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      movePan(0, -48);
    }
  });

  panorama.addEventListener('dblclick', (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('.room-zoom-controls')) return;
    e.preventDefault();
    setZoom(zoomIndex >= 2 ? 0 : zoomIndex + 1, e);
    sfxSelect();
  });

  panorama.addEventListener('wheel', (e: WheelEvent) => {
    if (!e.altKey || e.ctrlKey || e.metaKey) return;
    e.preventDefault();
    setZoom(zoomIndex + (e.deltaY < 0 ? 1 : -1), e);
  }, { passive: false });

  panorama.addEventListener('dragstart', (e: DragEvent) => {
    e.preventDefault();
  });

  panorama.addEventListener('pointerdown', (e: PointerEvent) => {
    const target = e.target as HTMLElement;
    if (zoomLevels[zoomIndex] <= 1 || target.closest('.room-zoom-controls')) return;
    isPanning = true;
    didDrag = false;
    dragStartX = e.clientX;
    dragStartY = e.clientY;
    dragPanX = panX;
    dragPanY = panY;
    panorama.classList.add('is-panning');
    panorama.setPointerCapture(e.pointerId);
  });

  panorama.addEventListener('pointermove', (e: PointerEvent) => {
    if (!isPanning) return;
    const dx = e.clientX - dragStartX;
    const dy = e.clientY - dragStartY;
    didDrag = didDrag || Math.abs(dx) > 3 || Math.abs(dy) > 3;
    panX = dragPanX + dx;
    panY = dragPanY + dy;
    applyZoom();
  });

  function stopPanning(e: PointerEvent) {
    if (!isPanning) return;
    isPanning = false;
    panorama.classList.remove('is-panning');
    if (panorama.hasPointerCapture(e.pointerId)) panorama.releasePointerCapture(e.pointerId);
  }

  panorama.addEventListener('pointerup', stopPanning);
  panorama.addEventListener('pointercancel', stopPanning);
  panorama.addEventListener('click', (e: MouseEvent) => {
    if (!didDrag) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    didDrag = false;
  }, true);

  window.addEventListener('resize', applyZoom);
  cleanupTasks.push(() => window.removeEventListener('resize', applyZoom));

  applyZoom();
}
