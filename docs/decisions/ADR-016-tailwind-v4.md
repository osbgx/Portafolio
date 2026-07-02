# ADR-016 — Migración a Tailwind CSS v4

## Estado
Aprobado

## Contexto

El proyecto usaba Tailwind CSS v3 + `@astrojs/tailwind` desde ADR-003.
Al actualizar Astro a v7, `@astrojs/tailwind@6.0.2` dejó de ser compatible porque su peer dependency solo acepta `astro@^3.0.0 || ^4.0.0 || ^5.0.0`.

Adicionalmente, `@astrojs/tailwind` fue **deprecado oficialmente** por el equipo de Astro. La recomendación es migrar al Vite plugin nativo de Tailwind (`@tailwindcss/vite`) que Tailwind CSS v4 provee.

## Decisión

Migrar de Tailwind v3 + `@astrojs/tailwind` a **Tailwind CSS v4 + `@tailwindcss/vite`**.

## Justificación

- `@astrojs/tailwind` está deprecado y no soporta Astro 7.
- Tailwind v4 es significativamente más rápido (re-escrito en Rust para el engine de CSS).
- Tailwind v4 usa el estándar `@import` y CSS nativo, eliminando la necesidad de PostCSS y `tailwind.config.js`.
- El Vite plugin (`@tailwindcss/vite`) es el método oficial recomendado tanto por Tailwind como por Astro.
- Se eliminan dependencias innecesarias: `autoprefixer`, `postcss`, `tailwindcss` v3.
- `@tailwindcss/typography` se mantiene (compatible con v4).

## Consecuencias

### Cambios en dependencias

| Eliminar | Agregar |
|---|---|
| `@astrojs/tailwind` | `tailwindcss` v4 |
| `tailwindcss` v3 | `@tailwindcss/vite` |
| `autoprefixer` | — |
| `postcss` | — |

### Cambios en configuración

- `tailwind.config.js` se elimina. Los tokens (colores, fuentes, keyframes) se definen en `src/styles/global.css` mediante `@theme`.
- `postcss.config.cjs` se elimina. Tailwind v4 se inyecta vía Vite plugin.
- `astro.config.mjs`: se reemplaza `import tailwind from '@astrojs/tailwind'` + `integrations: [tailwind()]` por `import tailwindcss from '@tailwindcss/vite'` + `vite: { plugins: [tailwindcss()] }`.

### Cambios en CSS

- `src/styles/global.css`: se agrega `@import "tailwindcss"` al inicio. Los tokens de `tailwind.config.js` se migran a un bloque `@theme`.
- Las directivas `@apply` existentes se mantienen (son compatibles con v4).
- La propiedad `content` de Tailwind v3 ya no es necesaria (v4 detecta automáticamente los archivos).

### Comportamiento esperado

- Las clases utilitarias de Tailwind deben funcionar igual que en v3.
- Los colores, fuentes y animaciones custom deben mantenerse.
- `@tailwindcss/typography` debe seguir funcionando (plugin compatible con v4).
- El build debe producir el mismo CSS que antes, posiblemente más pequeño.

## Referencias

- [Tailwind CSS v4: Installation with Vite](https://tailwindcss.com/docs/installation/using-vite)
- [Tailwind CSS v4: Upgrade guide](https://tailwindcss.com/docs/upgrade-guide)
- [@astrojs/tailwind deprecation notice](https://github.com/withastro/astro/blob/main/packages/integrations/tailwind/CHANGELOG.md#600)
- [Astro docs: Tailwind CSS](https://docs.astro.build/en/guides/styling/#tailwind-css)
