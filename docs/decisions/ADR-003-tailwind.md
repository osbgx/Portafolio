# ADR-003 — Uso de Tailwind como sistema de estilos

## Estado
Aprobado

## Contexto
El proyecto requiere:
- velocidad de desarrollo
- consistencia visual
- escalabilidad
- personalización por sección

## Decisión
Usar **Tailwind CSS** como sistema de estilos principal.

## Justificación
- Permite definir tokens globales (colores, spacing, tipografías).
- Facilita variaciones temáticas por sección.
- Reduce CSS repetitivo.
- Excelente integración con Astro.

## Consecuencias
- Config: `tailwind.config.js` (colores, fuentes, `maxWidth.reading`, keyframes)
- Plugin: `@tailwindcss/typography` para prose del blog
- Overrides puntuales en `src/styles/global.css` (pixel, reveal, view transitions)
- Integración: `@astrojs/tailwind` en `astro.config.mjs`
