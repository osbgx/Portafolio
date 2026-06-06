# Design System — Tipografía

Fuentes cargadas en `BaseLayout.astro` (Google Fonts, `display=optional`). Clases en `tailwind.config.js` → `fontFamily`.

---

## Escala global

| Token Tailwind | Tamaño | Uso |
|---|---|---|
| `text-display` | 3rem | Títulos hero |
| `text-h1` | 2.25rem | Títulos de página |
| `text-h2` | 1.875rem | `SectionTitle` |
| `text-h3` | 1.5rem | Subtítulos de tarjetas |
| `text-body-lg` | 1.125rem | Lead / descripciones |
| `text-body-base` | 1rem | Párrafos |
| `text-body-sm` | 0.875rem | Metadata, tags |

Lectura larga (posts): `max-w-reading` (720px) en `PostLayout`.

---

## Fuente por sección

| Sección | Clase Tailwind | Fuente | Notas |
|---|---|---|---|
| Home, Blog, Proyectos, Contacto | (default) | Inter | `font-inter` disponible |
| Data | `font-jetbrains-mono` | JetBrains Mono | Aplicada en `DataLayout` |
| Consultoría | `font-ibm-plex-sans` | IBM Plex Sans | Preload en layout |
| Web, Mobile | `font-sora` | Sora | Preload en layout |
| About | `font-pixel` | Press Start 2P | Tamaños reducidos (`text-[9px]` en UI RPG) |

IBM Plex Sans y Sora se cargan en layouts temáticos cuando hace falta; Inter y JetBrains/Press Start en `BaseLayout`.

---

## Reglas

- No mezclar `font-pixel` fuera de About (legibilidad).
- En Data, preferir monospace solo en hero, prompts y labels técnicos si el layout ya envuelve el slot.
- Títulos hero: `clamp()` en varias páginas para responsive fluido.
- `SectionTitle` usa `h2` por defecto; contacto puede usar `level="h1"`.

---

## Implementación

```js
// tailwind.config.js
fontFamily: {
  inter: ['Inter', 'system-ui', 'sans-serif'],
  'jetbrains-mono': ['JetBrains Mono', 'monospace'],
  'ibm-plex-sans': ['IBM Plex Sans', 'system-ui', 'sans-serif'],
  sora: ['Sora', 'system-ui', 'sans-serif'],
},
fontSize: {
  display: ['3rem', { lineHeight: '1.1', fontWeight: '700' }],
  // h1, h2, h3, body-lg, body-base, body-sm
},
```

Clase utilitaria About: `font-pixel` → `Press Start 2P` (definida en `global.css`).
