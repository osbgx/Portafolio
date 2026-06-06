function getFocusable(el: HTMLElement) {
  return el.querySelectorAll<HTMLElement>(
    'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
  );
}

export function setupHeader() {
  document.addEventListener('astro:page-load', () => {
    const toggle = document.getElementById('menu-toggle');
    const overlay = document.getElementById('mobile-overlay');
    const menu = document.getElementById('mobile-menu');
    const hamburger = document.getElementById('menu-icon-hamburger');
    const closeIcon = document.getElementById('menu-icon-close');
    const servicesToggle = document.getElementById('services-toggle');
    const servicesSub = document.getElementById('services-sub');
    const servicesChevron = document.getElementById('services-chevron');
    if (!toggle || !overlay || !menu || !hamburger || !closeIcon || !servicesToggle || !servicesSub || !servicesChevron) return;

    overlay.classList.add('hidden');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    hamburger.classList.remove('hidden');
    closeIcon.classList.add('hidden');
    toggle.setAttribute('aria-label', 'Abrir menú');
    servicesSub.classList.add('hidden');
    servicesChevron.classList.remove('rotate-180');
    servicesToggle.setAttribute('aria-expanded', 'false');

    function openMobile() {
      overlay.classList.remove('hidden');
      overlay.removeAttribute('aria-hidden');
      document.body.style.overflow = 'hidden';
      toggle!.setAttribute('aria-label', 'Cerrar menú');
      hamburger!.classList.add('hidden');
      closeIcon!.classList.remove('hidden');
      const first = getFocusable(menu)[0];
      if (first) first.focus();
    }

    function closeMobile() {
      overlay.classList.add('hidden');
      overlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      toggle!.setAttribute('aria-label', 'Abrir menú');
      hamburger!.classList.remove('hidden');
      closeIcon!.classList.add('hidden');
      servicesSub.classList.add('hidden');
      servicesChevron.classList.remove('rotate-180');
      servicesToggle.setAttribute('aria-expanded', 'false');
      toggle!.focus();
    }

    if (!toggle.dataset.hListener) {
      toggle.dataset.hListener = '1';
      toggle.addEventListener('click', () => {
        overlay.classList.contains('hidden') ? openMobile() : closeMobile();
      });
    }
    if (!overlay.dataset.hListener) {
      overlay.dataset.hListener = '1';
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeMobile();
      });
    }
    if (!menu.dataset.hListener) {
      menu.dataset.hListener = '1';
      menu.addEventListener('keydown', (e) => {
        if (overlay.classList.contains('hidden')) return;
        if (e.key === 'Escape') { closeMobile(); return; }
        const focusable = getFocusable(menu);
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.key === 'Tab') {
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      });
    }
    if (!servicesToggle.dataset.hListener) {
      servicesToggle.dataset.hListener = '1';
      servicesToggle.addEventListener('click', () => {
        const isOpen = servicesSub.classList.contains('hidden');
        servicesSub.classList.toggle('hidden');
        servicesChevron.classList.toggle('rotate-180');
        servicesToggle.setAttribute('aria-expanded', String(!isOpen));
      });
    }

    document.querySelectorAll('.menu-link').forEach((link) => {
      if ((link as HTMLElement).dataset.hListener) return;
      (link as HTMLElement).dataset.hListener = '1';
      link.addEventListener('click', closeMobile);
    });

    document.querySelectorAll('nav button[aria-haspopup]').forEach((btn) => {
      const wrapper = btn.closest('.group') as HTMLElement | null;
      if (!wrapper || wrapper.dataset.hListener) return;
      wrapper.dataset.hListener = '1';

      function openDropdown() { wrapper!.dataset.dropdownOpen = 'true'; btn.setAttribute('aria-expanded', 'true'); }
      function closeDropdown() { wrapper!.dataset.dropdownOpen = 'false'; btn.setAttribute('aria-expanded', 'false'); }

      wrapper.addEventListener('mouseenter', openDropdown);
      wrapper.addEventListener('mouseleave', closeDropdown);
      wrapper.addEventListener('focusin', openDropdown);
      wrapper.addEventListener('focusout', (e) => {
        if (!wrapper.contains(e.relatedTarget as Node)) closeDropdown();
      });

      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = wrapper.dataset.dropdownOpen === 'true';
        wrapper.dataset.dropdownOpen = isOpen ? 'false' : 'true';
        btn.setAttribute('aria-expanded', String(!isOpen));
      });
    });

    if (!window.__osb_headerEscape) {
      window.__osb_headerEscape = true;
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          const o = document.getElementById('mobile-overlay');
          if (o && !o.classList.contains('hidden')) o.click();
        }
      });
    }
  });
}
