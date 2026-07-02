# Arquitectura del Portfolio

Este documento describe la arquitectura general del portfolio de Osmar Sebastián Bogarín Gonzalez.  
Para detalles por área, ver el [índice de documentación](README.md).

## Stack

| Capa | Tecnología |
|---|---|
| Framework | [Astro v7](https://astro.build) — SSG, cero JS en cliente por defecto |
| Estilos | Tailwind CSS v4 + `src/styles/global.css` |
| Tipado | TypeScript en datos y utilidades |
| Iconos | `astro-icon` + Iconify |
| Contenido | Content Collections (blog + projects) con Zod |
| Animaciones | CSS + `IntersectionObserver` (`src/utils/reveal.ts`) |
| Transiciones | `astro:transitions` (View Transitions API) |
| Formulario | Web3Forms (POST nativo, sin API Routes) |
| Hosting | GitHub Pages vía GitHub Actions |

No hay dependencias de GSAP, AOS ni Canvas en el código de producción.

## Configuración (`astro.config.mjs`)

- `site: 'https://osbgx.dev'`
- `compressHTML: true`, `inlineStylesheets: 'always'`
- Integraciones: `astro-icon`, `@astrojs/sitemap`
- Vite plugins: `@tailwindcss/vite` (procesa Tailwind v4)
- Iconos locales incluidos: `sql` (carpeta `src/icons/`)

## Estructura de `src/`

```
src/
├── components/
│   ├── global/       # Header, Footer, SocialDock, Stack*, forms, etc.
│   ├── data/         # DataCard, DataMetric
│   ├── consulting/   # ConsultingCard, FAQ, testimonios, logos, CTA
│   ├── web/          # WebCard
│   ├── mobile/       # MobileCard
│   ├── about/        # PixelCard
│   ├── blog/         # PostCard
│   └── projects/     # ProjectCard (listado)
├── content/          # blog/*.md, projects/*.md, config.ts
├── data/             # JSON/TS: navegación, temas, copy por página, tech stack
├── layouts/          # 11 layouts
├── pages/            # Rutas Astro
├── styles/global.css
└── utils/reveal.ts   # Scroll reveal
```

No existe `src/components/contact/`; el formulario usa componentes globales `FormInput` y `FormTextarea`.

## Layouts (11)

Todos heredan patrones de `BaseLayout.astro`:

- Meta SEO, Open Graph, Twitter Card, canonical
- JSON-LD (`Person` + `WebSite`) generado desde `experience.json`
- `<ViewTransitions />`, skip link, overlay de carga entre páginas
- `Header` + `Footer` con prop `theme`
- `SocialDock` (mobile + desktop) con color desde `dockColors[theme]`
- Script de scroll reveal en `astro:page-load`

| Layout | Tema | Fuente principal |
|---|---|---|
| `BaseLayout` | — | Inter |
| `HomeLayout` | `home` | Inter |
| `DataLayout` | `data` | JetBrains Mono |
| `ConsultingLayout` | `consulting` | IBM Plex Sans |
| `WebLayout` | `web` | Sora |
| `MobileLayout` | `mobile` | Sora |
| `AboutLayout` | `about` | Press Start 2P |
| `BlogLayout` | `home` | Inter |
| `PostLayout` | `home` | Inter |
| `ProjectsLayout` | `home` | Inter |
| `ContactLayout` | `home` | Inter |

Los estilos por tema viven en `src/data/themes.ts` (`headerThemes`, `footerThemes`, `dockColors`).

## Páginas y secciones

| Ruta | Layout | Notas |
|---|---|---|
| `/` | HomeLayout | Incluye `StackSection` (stack tecnológico) |
| `/data` | DataLayout | Hero terminal con typing effect |
| `/consulting` | ConsultingLayout | FAQ accordion, testimonios |
| `/web` | WebLayout | Mockup de editor |
| `/mobile` | MobileLayout | Mockup de teléfono |
| `/about` | AboutLayout | RPG UI + escena interactiva (HTML/CSS/JS) |
| `/blog`, `/blog/page/N` | BlogLayout | 6 posts por página |
| `/blog/:slug` | PostLayout | Markdown renderizado |
| `/projects`, `/projects/page/N` | ProjectsLayout | 9 proyectos por página |
| `/projects/:slug` | PostLayout | Detalle desde Content Collection |
| `/contact` | ContactLayout | Web3Forms |
| `/rss.xml` | — | Feed generado en `src/pages/rss.xml.js` |

## Sistema de temas

Cada página pasa `theme` al layout. Eso controla header, footer y color del dock:

| Tema | Color dock | Uso |
|---|---|---|
| `home` | `#D4AF37` | Home, blog, proyectos, contacto |
| `data` | `#3FAF6C` | `/data` |
| `consulting` | `#D4AF37` | `/consulting` |
| `web` | `#3FAF6C` | `/web` |
| `mobile` | `#3FAF6C` | `/mobile` |
| `about` | `#00D4FF` | `/about` |
| `default` | `#3FAF6C` | Fallback |

## Componentes globales relevantes

| Componente | Rol |
|---|---|
| `Header.astro` | Nav con dropdown Servicios; menú mobile con focus trap |
| `Footer.astro` | Links, sociales, copyright |
| `SocialDock.astro` | Dock flotante (extraído de BaseLayout) |
| `Section`, `SectionTitle` | Bloques de contenido |
| `StackSection`, `StackGrid`, `StackItem` | Stack tecnológico horizontal |
| `ProjectCard`, `CardGlow`, `Tag` | Tarjetas y badges |
| `TechIcon` | Wrapper de astro-icon |
| `ImageCarousel` | Carrusel en detalle de proyecto |
| `Pagination`, `EmptyState` | Listados |
| `FormInput`, `FormTextarea` | Formulario de contacto |

## Content Collections

Definidas en `src/content/config.ts`:

- **blog:** `title`, `description`, `date` (Date), `tags?`, `image?`
- **projects:** `title`, `category`, `tags?`, `pages?`, `featuredIn?`, `image?`

## Escena interactiva (About)

Implementada en `src/pages/about.astro` (sección mini-mapa):

- HTML + CSS + JavaScript vanilla (sin Canvas, sin Astro islands)
- Sprites en `/public/pixel/`
- Personaje y NPC se mueven al clic; respeta `prefers-reduced-motion`

Ver [runbook de la escena](runbooks/minigame.md).

## Features transversales

- Multi-tema con 6 identidades visuales
- Scroll reveal con `[data-reveal]` + `reveal.ts`
- View Transitions con overlay de carga
- Sitemap automático y RSS
- OG image generada en build (`scripts/generate-og-image.mjs` → `public/og-image.webp`)
- Accesibilidad: skip link, ARIA, `prefers-reduced-motion`, focus visible
- Analytics: Umami global en `BaseLayout` con tracking code público hardcodeado

## Estándares de desarrollo

- **Accesibilidad:** contraste, tamaños táctiles, labels en iconos, skip link
- **Performance:** mínimo JS, animaciones con `transform`/`opacity`, `compressHTML`, fuentes con `display=optional`
- **Consistencia:** respetar `themes.ts` y el design system al añadir secciones
