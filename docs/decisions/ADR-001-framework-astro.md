# ADR-001 — Elección del framework: Astro

## Estado
Aprobado (actualizado 2026-05)

## Contexto
Portfolio modular, multi-sección, orientado a performance y contenido en Markdown.

## Decisión
**Astro v5** como framework principal en modo **SSG** (sin SSR en producción).

## Justificación
- HTML estático por defecto, mínimo JavaScript
- Content Collections con Zod
- Layouts y componentes `.astro` por sección
- Integración Tailwind, sitemap, iconos
- Scripts acotados (reveal, transiciones, escena About)

## Consecuencias
- No hay API Routes ni islas React por defecto
- Interactividad con JS vanilla inline o `src/utils/`
- Deploy compatible con GitHub Pages (ver ADR-014)

## No implementado (referencia histórica)
- SSR / hidratación masiva
- Islas GSAP o minijuego Canvas (ver ADR-005, ADR-006)
