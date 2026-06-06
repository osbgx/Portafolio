# Documentación del Portfolio

Índice de la documentación técnica del proyecto. Sincronizado con el código en `main` (Astro 5, SSG, sin GSAP/AOS).

## Visión general

| Documento | Descripción |
|---|---|
| [Arquitectura](arquitecture.md) | Stack, layouts, temas, componentes y features |
| [README del repo](../README.md) | Inicio rápido, scripts y despliegue |

## Design system

| Documento | Descripción |
|---|---|
| [Colores](design-system/colors.md) | Paleta y tokens por tema |
| [Tipografía](design-system/typography.md) | Fuentes por sección |
| [Espaciado](design-system/spacing.md) | Escala y márgenes |
| [Animaciones](design-system/animations.md) | Keyframes, reveals y transiciones |
| [Componentes](design-system/components.md) | Componentes globales y temáticos |
| [Layouts](design-system/layouts.md) | Layouts y variantes visuales |
| [Iconografía](design-system/iconography.md) | astro-icon + Iconify |
| [Home sections redesign](design-system/home-sections-redesign.md) | Rediseño de secciones del home |

## Decisiones (ADR)

Registros de decisiones de arquitectura en [`decisions/`](decisions/).

| ADR | Tema | Estado |
|---|---|---|
| [001](decisions/ADR-001-framework-astro.md) | Framework Astro | Aprobado |
| [002](decisions/ADR-002-design-system-modular.md) | Design system modular | Aprobado |
| [003](decisions/ADR-003-tailwind.md) | Tailwind CSS | Aprobado |
| [004](decisions/ADR-004-content-collections.md) | Content Collections | Aprobado |
| [005](decisions/ADR-005-minigame-canvas.md) | Escena About (antes minijuego Canvas) | **Reemplazado** |
| [006](decisions/ADR-006-animations-gsap-aos.md) | Animaciones (antes GSAP/AOS) | **Reemplazado** |
| [007](decisions/ADR-007-contact-form-api.md) | Formulario Web3Forms | Reemplazado |
| [008](decisions/ADR-008-layouts-tematicos.md) | Layouts temáticos | Aprobado |
| [009](decisions/ADR-009-seo-tecnico.md) | SEO técnico | Aprobado |
| [010](decisions/ADR-010-performance-optimizacion.md) | Performance | Aprobado |
| [011](decisions/ADR-011-accesibilidad.md) | Accesibilidad | Aprobado |
| [012](decisions/ADR-012-arquitectura-componentes.md) | Arquitectura de componentes | Aprobado |
| [013](decisions/ADR-013-manejo-imagenes.md) | Manejo de imágenes | Aprobado |
| [014](decisions/ADR-014-hosting-github-pages.md) | GitHub Pages | Aprobado |
| [015-stack](decisions/ADR-015-stack-section.md) | Sección Stack en Home | Aprobado |
| [015-iconografia](decisions/ADR-015-iconografia.md) | Sistema de iconografía | Aprobado |

## Runbooks

Guías operativas para tareas habituales:

| Runbook | Uso |
|---|---|
| [Componentes](runbooks/components.md) | Crear o extender componentes |
| [Layouts](runbooks/layouts.md) | Layouts y temas |
| [Contenido](runbooks/content.md) | Blog y proyectos (Markdown) |
| [Deploy](runbooks/deploy-github-pages.md) | GitHub Pages + Actions |
| [Formulario de contacto](runbooks/contact-form.md) | Web3Forms y variables de entorno |
| [Escena About](runbooks/minigame.md) | Mini-mapa interactivo en `/about` |

## Wireframes

Especificaciones de UI por página o sección en [`wireframes/`](wireframes/).

| Página / sección | Ruta | Wireframe |
|---|---|---|
| Home | `/` | [home.md](wireframes/home.md) |
| Stack (sección en Home) | `/` | [stack.md](wireframes/stack.md) |
| Data | `/data` | [data.md](wireframes/data.md) |
| Consultoría | `/consulting` | [consulting.md](wireframes/consulting.md) |
| Web | `/web` | [web.md](wireframes/web.md) |
| Móvil | `/mobile` | [mobile.md](wireframes/mobile.md) |
| Sobre mí | `/about` | [about.md](wireframes/about.md) |
| Blog | `/blog` | [blog.md](wireframes/blog.md) |
| Post | `/blog/:slug` | [post.md](wireframes/post.md) |
| Proyectos | `/projects` | [projects.md](wireframes/projects.md) |
| Contacto | `/contact` | [contact.md](wireframes/contact.md) |
