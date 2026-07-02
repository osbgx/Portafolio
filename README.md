# Portafolio — Osmar Bogarín

Portfolio profesional de **Osmar Sebastián Bogarín Gonzalez** — Data Engineer, Consultant & Multidisciplinary Developer.

> **URL:** [osbgx.dev](https://osbgx.dev)  
> **Idioma:** Español

---

## Stack tecnológico

| Categoría | Tecnologías |
|---|---|
| **Framework** | [Astro v7](https://astro.build) — Static Site Generation |
| **Estilos** | [Tailwind CSS v4](https://tailwindcss.com) + CSS en `src/styles/global.css` |
| **Tipografía** | Inter, JetBrains Mono, IBM Plex Sans, Sora, Press Start 2P (Google Fonts) |
| **Iconos** | [astro-icon](https://github.com/natemoo-re/astro-icon) + Iconify (Simple Icons, Devicon, Heroicons, Skill Icons) |
| **Animaciones** | CSS (keyframes, transiciones) + `IntersectionObserver` (`src/utils/reveal.ts`) |
| **Transiciones** | View Transitions API (`astro:transitions`) |
| **Contenido** | Content Collections (Markdown + Zod) |
| **SEO** | `@astrojs/sitemap`, RSS (`/rss.xml`), JSON-LD en `BaseLayout` |
| **Formulario** | [Web3Forms](https://web3forms.com) (POST directo) |
| **Hosting** | GitHub Pages (GitHub Actions → `deploy-pages`) |
| **Runtime** | Node.js >=22.12.0 |

---

## Estructura del proyecto

```
├── src/
│   ├── components/     # global/ + por sección (data, consulting, web, mobile, about, blog, projects)
│   ├── content/        # Content Collections (blog + projects)
│   ├── data/           # Datos tipados (navegación, temas, tech stack, copy por página)
│   ├── layouts/        # 11 layouts (Base + 10 temáticos/contenido)
│   ├── pages/          # Rutas del sitio
│   ├── styles/         # Estilos globales
│   └── utils/          # Utilidades (scroll reveal)
├── public/             # Assets estáticos (favicon, pixel art, og-image, robots.txt)
├── scripts/            # generate-og-image.mjs (build)
├── docs/               # Documentación (ver docs/README.md)
└── .github/workflows/  # CI/CD — deploy a GitHub Pages
```

### Datos (`src/data/`)

| Archivo | Contenido |
|---|---|
| `navigation.ts` | Menú principal y footer |
| `themes.ts` | Estilos de header, footer y dock por tema |
| `tech-icons.ts` | Stack tecnológico (Iconify) |
| `home.ts`, `data-page.ts`, `consulting.ts`, `web.ts`, `mobile.ts`, `about.ts` | Copy y listas por página |
| `experience.json`, `projects.json` | Experiencia y proyectos destacados en Home |
| `social.ts`, `site.ts` | Enlaces sociales y URL base |

---

## Páginas

| Ruta | Descripción |
|---|---|
| `/` | Home — hero, proyectos destacados, experiencia, stack tecnológico, proceso |
| `/data` | Data Fullstack — estilo terminal, servicios, pipeline, métricas |
| `/consulting` | Consultoría — hero, servicios, testimonios, FAQ, logos de clientes |
| `/web` | Desarrollo Web — hero tipo editor, proyectos, toolkit |
| `/mobile` | Desarrollo Móvil — hero tipo teléfono, plataformas, capacidades |
| `/about` | Sobre mí — tema retro RPG, character sheet, escena interactiva |
| `/blog` | Blog — grid paginado (6 por página) |
| `/blog/:slug` | Post individual |
| `/blog/page/:page` | Paginación del blog |
| `/projects` | Proyectos — grid paginado (9 por página) |
| `/projects/:slug` | Detalle de proyecto |
| `/projects/page/:page` | Paginación de proyectos |
| `/contact` | Formulario de contacto (Web3Forms) |
| `/rss.xml` | Feed RSS del blog |

---

## Design system

Sistema **multi-tema**: cada sección tiene identidad visual propia (header, footer, dock).

| Sección | Tema | Fuente | Acento |
|---|---|---|---|
| Home, Blog, Proyectos, Contacto | `home` | Inter | Ámbar / dorado |
| Data | `data` | JetBrains Mono | Verde Hylian |
| Consultoría | `consulting` | IBM Plex Sans | Dorado Hero |
| Web | `web` | Sora | Verde Hylian + cyan |
| Mobile | `mobile` | Sora | Púrpura + teal |
| About | `about` | Press Start 2P | Púrpura neón |

El **Social Dock** (`SocialDock.astro`) aparece en todas las páginas y cambia de color según el tema.

---

## Scripts

```bash
npm run dev        # Servidor de desarrollo
npm run build      # Build estático en dist/
npm run preview    # Preview del build local
```

La imagen OG se sirve desde `public/og-image.jpg`; reemplazar ese archivo si se quiere actualizar el preview social.

---

## Variables de entorno

Crear `.env` en la raíz (no se commitea):

```env
PUBLIC_WEB3FORMS_ACCESS_KEY=tu-access-key-aqui
```

Umami queda configurado directamente en `src/layouts/BaseLayout.astro` con el tracking code público del sitio.

---

## Despliegue

Cada push a `main` dispara `.github/workflows/deploy.yml`:

1. `npm ci`
2. `npm run build`
3. Artifact `dist/` → GitHub Pages (`actions/deploy-pages`)

`site` en `astro.config.mjs` apunta a `https://osbgx.dev`. El `base` se calcula automáticamente según el repo (user page vs project page).

---

## Documentación

Documentación completa en [`docs/`](docs/):

- **[Índice](docs/README.md)** — Mapa de toda la documentación
- **[Arquitectura](docs/arquitecture.md)** — Visión técnica del proyecto
- **[Design system](docs/design-system/)** — Colores, tipografía, componentes, etc.
- **[Decisiones](docs/decisions/)** — ADR-001 a ADR-015
- **[Runbooks](docs/runbooks/)** — Guías operativas
- **[Wireframes](docs/wireframes/)** — Especificaciones por página

---

## Licencia

© 2026 Osmar Bogarín. Todos los derechos reservados.
