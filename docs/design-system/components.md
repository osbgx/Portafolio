# Design System — Componentes

Componentes globales reutilizables y componentes por sección. Código en `src/components/`.

---

## Objetivos

- Base común (header, footer, secciones, forms)
- Variación temática sin duplicar estructura
- Animaciones CSS (ver [animations.md](animations.md))

---

## Globales (`src/components/global/`)

| Componente | Función |
|---|---|
| `Header.astro` | Nav + dropdown Servicios + menú mobile (focus trap) |
| `Footer.astro` | Links, sociales, copyright |
| `SocialDock.astro` | LinkedIn, GitHub, mail, WhatsApp — mobile bar / desktop dock |

| `SectionTitle.astro` | Título + descripción (`h1`–`h3`) |
| `StackSection.astro` | Bloque stack en Home |
| `StackGrid.astro` | Scroll horizontal + flechas |
| `StackItem.astro` | Item con tooltip de nivel |
| `ProjectCard.astro` | Tarjeta proyecto (home y reutilizable) |
| `CardGlow.astro` | Wrapper hover glow |
| `Tag.astro` | Badge de tag |
| `TechIcon.astro` | Icono Iconify accesible |
| `ImageCarousel.astro` | Carrusel en detalle proyecto |
| `Pagination.astro` | Blog / proyectos paginados |
| `EmptyState.astro` | Listados vacíos |
| `FormInput.astro` | Input formulario contacto |
| `FormTextarea.astro` | Textarea contacto |

### Header
- Datos nav: `src/data/navigation.ts`
- Estilos: `headerThemes[theme]` en `themes.ts`

### Social Dock
- Props: `dockColor`, `variant` (`mobile` | `desktop`)
- Hover: `--dock-color` en CSS

---

## Por sección

### Data — `data/`
| Componente | Uso |
|---|---|
| `DataCard.astro` | Servicios / capacidades |
| `DataMetric.astro` | KPI numérico |

### Consultoría — `consulting/`
| Componente | Uso |
|---|---|
| `ConsultingCard.astro` | Servicio |
| `FAQSection.astro` | Acordeón FAQ |
| `InlineCTA.astro` | CTA inline entre secciones |
| `InlineCTA.astro` | CTA inline entre secciones |

### Web — `web/`
| Componente | Uso |
|---|---|
| `WebCard.astro` | Proyecto o especialidad web |

### Mobile — `mobile/`
| Componente | Uso |
|---|---|
| `MobileCard.astro` | Proyecto o capacidad móvil |

### About — `about/`
| Componente | Uso |
|---|---|
| `PixelCard.astro` | Panel estilo RPG |

La escena interactiva vive en `about.astro`, no en un componente aparte.

### Blog — `blog/`
| Componente | Uso |
|---|---|
| `PostCard.astro` | Entrada en listado |

### Proyectos — `projects/`
| Componente | Uso |
|---|---|
| `ProjectCard.astro` | Card en grid `/projects` |

---

## Home (en `index.astro`)

Lógica inline o datos de `home.ts`:

- Hero particles + mouse glow
- Timeline experiencia expandible
- Expertise cards 2×2
- `StackSection`
- Proceso 4 pasos

---

## Contacto

Sin carpeta `contact/`. Formulario en `contact.astro` con `FormInput` / `FormTextarea`.

---

## Reglas

- Globales: sin colores fijos de un solo tema (usar props o clases neutras).
- Temáticos: no importar en otras secciones.
- Hover glow unificado: `0 0 24px -4px rgba(accent, 0.35)` (ver animations.md).
- **No usar** GSAP, AOS ni componentes listados solo en wireframes antiguos (`DataGrid`, `MiniGameContainer`, `SearchBar`, etc.).

---

## Estructura de carpetas

```
src/components/
  global/
  data/
  consulting/
  web/
  mobile/
  about/
  blog/
  projects/
```

Ver [ADR-012](../decisions/ADR-012-arquitectura-componentes.md) y [runbook](../runbooks/components.md).
