# ADR-013 — Manejo de imágenes

## Estado
Aprobado (actualizado 2026-05)

## Contexto
Imágenes en proyectos, blog, hero, OG social y sprites pixel de About.

## Decisión

| Tipo | Ubicación | Notas |
|---|---|---|
| Estáticas generales | `public/` | `me.webp`, `og-image.webp`, `favicon.svg` |
| Sprites About | `public/pixel/` | PNG pixel art, tilesets `tiny16-*` |
| Referencias en Markdown | Rutas `/…` en frontmatter | Sin `@astrojs/image` en build actual |
| OG image | Generada en build | `scripts/generate-og-image.mjs` → `public/og-image.webp` |

- Formato preferido: **WebP** para fotos
- Lazy loading: `loading="lazy"` donde aplica en componentes
- GitHub Pages: sin optimización on-the-fly; pre-comprimir antes de commit

## Justificación
- Simplicidad en hosting estático
- Control total del peso de assets
- OG consistente en todas las URLs

## Consecuencias
- Tras cambiar `public/me.webp`, ejecutar `npm run build` para regenerar OG
- No usar `/public/sprites/` (legado ADR-005); sprites en `/public/pixel/`
- `@astrojs/image` puede evaluarse si el hosting cambia a Vercel/Netlify
