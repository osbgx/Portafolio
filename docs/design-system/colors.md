# Design System — Colores

Paleta global y variaciones temáticas por sección. Tokens definidos en `src/styles/global.css` mediante `@theme` (Tailwind v4).

---

## Paleta global

### Base
| Token | Hex | Uso |
|---|---|---|
| `carbon` | `#0B0B0C` | Fondo principal |
| `obsidian` | `#1A1A1D` | Superficies elevadas |
| `steel` | `#2E2E33` | Bordes, fondos secundarios |
| `white` | `#FFFFFF` | Texto principal |

### Identitarios
| Token | Hex | Uso |
|---|---|---|
| `hylian` | `#3FAF6C` | Data, Web, Mobile, acciones técnicas |
| `purple` | `#7D3CEE` | Acento secundario (Data) |
| `purple-vivid` | `#a855f7` | About (neón RPG) |
| `hero` | `#D4AF37` | Home, Consultoría |
| `rock` | `#8B1E2D` | Acento puntual |

### About (RPG / marrón)
| Token | Uso |
|---|---|
| `brown-darkest` … `brown-darker` | Fondos alternados de secciones |
| `beige`, `cream` | Texto y highlights retro |
| `pastel-cream`, `pastel-blue`, `pastel-green` | Acentos suaves (legacy tokens) |

### Web / Mobile
| Token | Uso |
|---|---|
| `web-bg`, `web-bg-alt` | Fondos página Web |
| `dark-surface` | Fondo página Mobile |

---

## Paletas por sección (implementación)

### Home (`theme="home"`)
- Fondo: `carbon` + `grid-pattern`
- Acento: ámbar (`amber-300`–`500`) y `hero`
- Hero: partículas ámbar, mouse glow, badges glass
- Dock: `#D4AF37`

### Data (`theme="data"`)
- Fondo: `#08080A` + grid verde sutil
- Acento: `hylian`
- Tipografía: JetBrains Mono
- Hero: terminal con typing effect (`data-text`)
- Dock: `#3FAF6C`

### Consultoría (`theme="consulting"`)
- Fondo: `carbon` / `obsidian` alternados
- Acento: `hero` (dorado)
- Tipografía: IBM Plex Sans
- Dock: `#D4AF37`

### Web (`theme="web"`)
- Fondo: `web-bg`, `web-bg-alt`
- Acento: gradiente `hylian` → `cyan-500`
- Tipografía: Sora
- Header CTA: gradiente verde–cyan
- Dock: `#3FAF6C`

### Mobile (`theme="mobile"`)
- Fondo: `dark-surface`
- Acento: gradiente `purple-500` → `teal-500`
- Tipografía: Sora
- Dock: `#3FAF6C`

### About (`theme="about"`)
- Fondo: escala `brown-*` (no `carbon` plano)
- Acento: `#a855f7` (púrpura neón)
- Tipografía: Press Start 2P (`font-pixel`)
- Dock: `#00D4FF`
- Bordes: `rounded-none`, estilo ventana RPG

### Blog / Proyectos / Contacto
- Heredan `theme="home"` (ámbar/hero, Inter)

---

## Temas Header / Footer / Dock

Configuración en `src/data/themes.ts`:

| Theme | Dock | Header logo / CTA |
|---|---|---|
| `home` | `#D4AF37` | `bg-hero/10`, CTA ámbar |
| `data` | `#3FAF6C` | `bg-hylian/10`, bordes `rounded-sm` |
| `consulting` | `#D4AF37` | `bg-hero/10`, `rounded-md` |
| `web` | `#3FAF6C` | Gradiente hylian/cyan |
| `mobile` | `#3FAF6C` | Gradiente purple/teal |
| `about` | `#00D4FF` | Púrpura pixel, CTA retro |
| `default` | `#3FAF6C` | Fallback hylian |

---

## Reglas

- Contraste mínimo WCAG AA en texto body.
- `hero` / ámbar: Home y Consultoría.
- `hylian`: secciones técnicas y dock por defecto.
- Paleta `brown-*` solo en About.
- Hover del dock vía CSS variable `--dock-color` en `SocialDock.astro`.

---

## Tailwind (v4 — `@theme` en CSS)

```css
/* src/styles/global.css */
@theme {
  --color-carbon: #0B0B0C;
  --color-obsidian: #1A1A1D;
  --color-steel: #2E2E33;
  --color-hylian: #3FAF6C;
  --color-hero: #D4AF37;
  --color-purple: #7D3CEE;
  --color-purple-vivid: #a855f7;
  --color-brown-darkest: #0d0907;
  --color-brown-darker: #100a08;
  --color-web-bg: #080a0c;
  --color-dark-surface: #0f0f16;
}
```

> ℹ️ En Tailwind v4 los tokens se definen con `@theme` en CSS en lugar de `tailwind.config.js`. Ver [ADR-016](../decisions/ADR-016-tailwind-v4.md).
