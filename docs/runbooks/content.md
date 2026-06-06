# Runbook — Contenido (Blog y Proyectos)

## Objetivo
Crear y mantener entradas en Markdown con Content Collections.

## Estructura

```
src/content/
├── config.ts
├── blog/
└── projects/
```

## Esquemas (Zod)

Definidos en `src/content/config.ts`:

**Blog:** `title`, `description`, `date` (tipo `Date`), `tags?`, `image?`  
**Projects:** `title`, `category`, `tags?`, `image?`

## Crear un post

1. Crear `src/content/blog/mi-post.md`.
2. Frontmatter de ejemplo:

```yaml
---
title: "Título del post"
description: "Resumen para SEO y listados"
date: 2026-05-07
tags: ["data", "astro"]
image: "/images/post.webp"
---
```

3. Escribir el cuerpo en Markdown.

El listado en `/blog` muestra 6 posts por página; páginas adicionales en `/blog/page/2`, etc.

## Crear un proyecto

1. Crear `src/content/projects/mi-proyecto.md`.
2. Frontmatter de ejemplo:

```yaml
---
title: "Nombre del proyecto"
category: "data"
tags: ["python", "sql"]
image: "/images/proyecto.webp"
---
```

Listado en `/projects` (9 por página); detalle en `/projects/mi-proyecto`.

## Validación

- Astro valida al dev/build; errores de esquema aparecen en consola.
- `date` debe ser fecha válida (no string entre comillas con formato ambiguo).

## RSS

Los posts del blog se incluyen en `/rss.xml` (`src/pages/rss.xml.js`).

## Debug

- Revisar slug del archivo (ruta URL).
- Comprobar rutas de imágenes en `public/`.
- Si no aparece en listado, verificar que el frontmatter pase Zod.
