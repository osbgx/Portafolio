# ADR-004 — Content Collections para Blog y Proyectos

## Estado
Aprobado (actualizado 2026-05)

## Contexto
Posts y proyectos en Markdown con metadatos validados y rutas dinámicas.

## Decisión
**Astro Content Collections** en `src/content/` con esquemas Zod en `config.ts`.

### Blog
`title`, `description`, `date` (Date), `tags?`, `image?`

### Projects
`title`, `category`, `tags?`, `image?`

## Rutas

| Recurso | Listado | Detalle | Paginación |
|---|---|---|---|
| Blog | `/blog` | `/blog/:slug` | `/blog/page/:page` (6/página) |
| Projects | `/projects` | `/projects/:slug` | `/projects/page/:page` (9/página) |

RSS: `/rss.xml` desde colección blog.

## Consecuencias
- Frontmatter inválido falla en `astro dev` / `astro build`
- Fecha como `date: 2026-05-07` (tipo Date, no string entre comillas)
- Runbook: [`docs/runbooks/content.md`](../runbooks/content.md)
