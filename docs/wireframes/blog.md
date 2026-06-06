# Wireframe: Blog (`/blog`)

**Layout:** `BlogLayout` · **Tema:** `home` · **Fuente:** Inter · **Ruta paginada:** `/blog/page/:page`

## Objetivo
Listar artículos técnicos de forma clara y paginada.

## Estructura (implementación actual)

### 1. Cabecera de página
- Título "Blog" + descripción
- Sin hero separado de altura completa

### 2. Grid de posts
- `PostCard` por entrada
- Datos: Content Collection `src/content/blog/`
- Orden: fecha descendente

### 3. Paginación
- **6 posts por página**
- Página 1: `/blog`
- Páginas 2+: `/blog/page/2`, …
- Componente: `Pagination`

## No implementado
- Barra de categorías / chips
- Buscador en cliente
- Sección "posts destacados" separada
- Hero minimalista dedicado

## CTA
Enlaces a contacto vía header/footer globales.

## Relacionado
- Detalle: [post.md](post.md)
- RSS: `/rss.xml`
