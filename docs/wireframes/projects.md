# Wireframe: Proyectos (`/projects`)

**Layout:** `ProjectsLayout` · **Tema:** `home` · **Ruta paginada:** `/projects/page/:page`

## Objetivo
Catálogo visual de proyectos con acceso al detalle en Markdown.

## Estructura (implementación actual)

### 1. Cabecera
- Título "Proyectos" + descripción breve

### 2. Grid de proyectos
- `ProjectCard` (componente en `src/components/projects/`)
- Content Collection `src/content/projects/`
- Orden por título o fecha según implementación en `projects.astro`

### 3. Paginación
- **9 proyectos por página**
- Página 1: `/projects`
- Páginas 2+: `/projects/page/2`, …
- `Pagination`

## No implementado
- Filtros por categoría (chips)
- Hero dedicado de altura completa

### Detalle (`/projects/:slug`)
- `PostLayout` + Markdown del proyecto
- `ImageCarousel` si hay galería en contenido
- Tags con `Tag`

## CTA
Contacto vía header CTA y footer.
