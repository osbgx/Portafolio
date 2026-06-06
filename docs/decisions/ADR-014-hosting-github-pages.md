# ADR-014 — Hosting en GitHub Pages

## Estado
Aprobado (actualizado 2026-05)

## Contexto
El portfolio es un sitio **estático** generado por Astro:

- HTML/CSS pre-renderizado
- Content Collections (blog, proyectos)
- Formulario vía Web3Forms (externo)
- Escena About con JS vanilla inline
- Sin SSR, API Routes ni Edge Functions

## Decisión
**GitHub Pages** como hosting, con deploy mediante **GitHub Actions** y `actions/deploy-pages` (artifact `dist/`, no rama `gh-pages`).

## Configuración

| Aspecto | Valor |
|---|---|
| `site` en `astro.config.mjs` | `https://osbgx.dev` |
| `base` en CI | Automático (dinámico según tipo de repo) |
| Workflow | `.github/workflows/deploy.yml` |
| Node en CI | 20 |

## Justificación
- Gratuito, integrado con el repositorio
- Adecuado para SSG sin servidor
- Deploy automático en cada push a `main`

## Consecuencias
- Rutas y assets respetan el base dinámico (autodetectado en CI)
- No hay previews por PR ni optimización de imágenes en el edge
- El rendimiento depende del build estático y assets pre-optimizados

## Alternativas consideradas
- **Vercel / Netlify:** previews y CDN; innecesario para el alcance actual del proyecto
