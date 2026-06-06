# Design System — Layouts

Arquitectura de layouts: una base compartida y envoltorios temáticos por página.

---

## BaseLayout (`src/layouts/BaseLayout.astro`)

Estructura real:

```
<html>
  <head> SEO, OG, JSON-LD, ViewTransitions, fonts </head>
  <body>
    skip-link
    Header(theme)
    main#main-content → slot
    Footer(theme)
    SocialDock(mobile)
    SocialDock(desktop)
    #tx-overlay (loading dots)
    script: reveal + view transition hooks
  </body>
</html>
```

Los layouts temáticos **no** reimportan Header/Footer; solo envuelven contenido en `<BaseLayout theme="…">`.

Contenedor habitual en páginas: `container-section` (`max-w-7xl mx-auto px-6 md:px-8`).

---

## Layouts temáticos

| Layout | `theme` | Fuente | Página |
|---|---|---|---|
| `HomeLayout` | `home` | Inter | `/` |
| `DataLayout` | `data` | JetBrains Mono | `/data` |
| `ConsultingLayout` | `consulting` | IBM Plex Sans | `/consulting` |
| `WebLayout` | `web` | Sora | `/web` |
| `MobileLayout` | `mobile` | Sora | `/mobile` |
| `AboutLayout` | `about` | Press Start 2P | `/about` |
| `BlogLayout` | `home` | Inter | `/blog`, paginación |
| `PostLayout` | `home` | Inter | posts y detalle proyecto |
| `ProjectsLayout` | `home` | Inter | `/projects`, paginación |
| `ContactLayout` | `home` | Inter | `/contact` |

Estilos de header/footer/dock: `src/data/themes.ts`.

---

## Reglas

- Nuevas páginas: reutilizar layout existente o extender `BaseLayout` con un `theme` registrado en `themes.ts`.
- No duplicar `<Header>` / `<Footer>` fuera de `BaseLayout`.
- Espaciado vertical de secciones: `py-24 md:py-32` (patrón común).
- About usa fondos `bg-brown-*`, no el patrón carbon/obsidian del resto.

---

## Archivos

```
src/layouts/
  BaseLayout.astro
  HomeLayout.astro
  DataLayout.astro
  ConsultingLayout.astro
  WebLayout.astro
  MobileLayout.astro
  AboutLayout.astro
  BlogLayout.astro
  PostLayout.astro
  ProjectsLayout.astro
  ContactLayout.astro
```

Ver también: [runbook de layouts](../runbooks/layouts.md), [ADR-008](../decisions/ADR-008-layouts-tematicos.md).
