# ADR-003 — Uso de Tailwind como sistema de estilos

## Estado
**Reemplazado** — ver [ADR-016](ADR-016-tailwind-v4.md)

## Contexto
El proyecto requiere:
- velocidad de desarrollo
- consistencia visual
- escalabilidad
- personalización por sección

## Decisión (original)
Usar **Tailwind CSS v3** como sistema de estilos principal, integrado vía `@astrojs/tailwind`.

> ⚠️ **Decisión reemplazada.** Ver [ADR-016](ADR-016-tailwind-v4.md) para la estrategia actual con Tailwind v4 + Vite plugin.

## Justificación
- Permite definir tokens globales (colores, spacing, tipografías).
- Facilita variaciones temáticas por sección.
- Reduce CSS repetitivo.
- Excelente integración con Astro.

## Consecuencias (originales)
- Config: `tailwind.config.js` (colores, fuentes, `maxWidth.reading`, keyframes)
- Plugin: `@tailwindcss/typography` para prose del blog
- Overrides puntuales en `src/styles/global.css` (pixel, reveal, view transitions)
- Integración: `@astrojs/tailwind` en `astro.config.mjs`

> ⚠️ Las consecuencias originales ya no aplican. Migrado a Tailwind v4 con `@tailwindcss/vite` (ver ADR-016).
