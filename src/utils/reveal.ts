export function initScrollReveal(): void {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );

  document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el));
}

export function revealAll(): void {
  document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('reveal-visible'));
}
