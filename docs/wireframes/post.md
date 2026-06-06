# Wireframe: Post / Detalle (`/blog/:slug`, `/projects/:slug`)

**Layout:** `PostLayout` · **Tema:** `home` (default)

## Objetivo
Lectura cómoda de Markdown (blog o proyecto).

## Estructura

### 1. Cabecera del artículo
- Título (`h1`)
- Fecha (blog) o categoría (proyecto)
- Tags opcionales (`Tag`)
- Imagen hero si `image` en frontmatter

### 2. Contenido
- Renderizado Markdown con `@tailwindcss/typography` (`prose`)
- Ancho lectura: `max-w-reading` / contenedor acotado
- Código, listas, imágenes embebidas

### 3. Proyectos — extras
- `ImageCarousel` cuando el MD incluye galería
- Enlace externo o metadata según frontmatter

## No implementado
- Tiempo estimado de lectura automático
- Navegación "post anterior / siguiente"
- CTA dedicado al pie del artículo (usar header/footer)

## Archivos
- Blog: `src/pages/blog/[...slug].astro`
- Proyecto: `src/pages/projects/[...slug].astro`
- Layout: `src/layouts/PostLayout.astro`
