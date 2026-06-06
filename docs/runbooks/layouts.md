# Runbook — Layouts

## Objetivo
Crear y mantener layouts temáticos del sitio.

## Ubicación

`src/layouts/`

## BaseLayout

Responsabilidades:

- Meta tags, OG, Twitter, canonical, JSON-LD
- `<ViewTransitions />` y overlay de transición (`#tx-overlay`)
- `Header` con prop `theme`
- `<main id="main-content"><slot /></main>`
- `Footer` con prop `theme`
- `SocialDock` (variantes `mobile` y `desktop`) — componente en `src/components/global/SocialDock.astro`
- Script de scroll reveal (`src/utils/reveal.ts`)
- Umami opcional si existen `PUBLIC_UMAMI_WEBSITE_ID` y `PUBLIC_UMAMI_SRC`

## Temas

Definidos en `src/data/themes.ts`:

| `theme` | Páginas típicas |
|---|---|
| `home` | `/`, `/blog`, `/projects`, `/contact` |
| `data` | `/data` |
| `consulting` | `/consulting` |
| `web` | `/web` |
| `mobile` | `/mobile` |
| `about` | `/about` |
| `default` | Fallback |

Cada layout temático envuelve `BaseLayout` y pasa `theme` + metadatos (`title`, `description`).

## Layouts existentes

- `HomeLayout`, `DataLayout`, `ConsultingLayout`, `WebLayout`, `MobileLayout`, `AboutLayout`
- `BlogLayout`, `PostLayout`, `ProjectsLayout`, `ContactLayout`

## Crear un layout nuevo

1. Crear `src/layouts/MiLayout.astro`.
2. Importar `BaseLayout` y pasar `theme` acorde.
3. Añadir entrada en `headerThemes` / `footerThemes` / `dockColors` si es un tema nuevo.
4. Usar el layout en `src/pages/mi-pagina.astro`.

## Debug

- Verificar que `theme` coincida con la página.
- Comprobar fuentes cargadas en `BaseLayout` (no duplicar `<link>` en layouts hijos sin necesidad).
- Si el dock no cambia de color, revisar `dockColors[theme]` en `themes.ts`.
