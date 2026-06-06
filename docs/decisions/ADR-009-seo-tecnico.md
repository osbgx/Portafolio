# ADR-009 — SEO técnico

## Estado
Aprobado (actualizado 2026-05)

## Contexto
El portfolio debe ser indexable, compartible en redes y coherente en todas las secciones temáticas.

## Decisión
SEO técnico implementado con:

| Elemento | Implementación |
|---|---|
| Meta por página | `title`, `description` en layouts → `BaseLayout` |
| Open Graph / Twitter | Tags en `BaseLayout` (`og:image` → `og-image.webp`) |
| Canonical | `BaseLayout` con URL absoluta |
| JSON-LD | `Person` + `WebSite` en `BaseLayout` (desde `experience.json`) |
| Sitemap | `@astrojs/sitemap` en `astro.config.mjs` |
| robots.txt | `public/robots.txt` |
| RSS | `src/pages/rss.xml.js` |
| OG image build | `scripts/generate-og-image.mjs` |
| Estructura | Headings jerárquicos por página; blog/projects con frontmatter SEO |

## Justificación
- Mejora indexación y CTR en redes
- Astro genera sitemap en build sin mantenimiento manual
- JSON-LD refuerce entidad personal y experiencia laboral

## Consecuencias
- Nuevas páginas: pasar `title` y `description` al layout
- Posts/proyectos: mantener `description` y `image` cuando aplique
- Tras cambiar foto de perfil, regenerar OG con `npm run build` (o script aislado)
