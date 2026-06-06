# ADR-006 — Animaciones del sitio

## Estado
**Reemplazado** (2026-05) — GSAP y AOS no están en `package.json` ni en el código.

## Decisión actual
Usar animaciones **sin librerías externas**:

| Mecanismo | Uso |
|---|---|
| CSS keyframes y `transition` | Hero, hovers, partículas, efectos retro en About |
| `astro:transitions` | Transiciones entre páginas + overlay de carga |
| `src/utils/reveal.ts` | Scroll reveal vía `IntersectionObserver` y atributo `[data-reveal]` |
| JS vanilla puntual | Typing effect en `/data`, escena About, mouse glow en hero |

## Contexto original
Se evaluó GSAP para animaciones avanzadas y AOS para scroll. Se descartó para mantener el bundle liviano y alineado con el enfoque SSG de Astro.

## Justificación
- Menor peso y menos hidratación
- `prefers-reduced-motion` más fácil de respetar de forma global
- Suficiente para el nivel de motion del portfolio

## Consecuencias
- Nuevas animaciones: preferir CSS; si hace falta JS, scripts inline pequeños en la página o utilidades en `src/utils/`
- Tras `astro:after-swap`, `reveal.ts` vuelve a marcar elementos visibles (`revealAll`)
- Ver también: `docs/design-system/animations.md`, `ADR-010`

## Referencia histórica
Decisión original: GSAP en islas + AOS global. No implementado.
