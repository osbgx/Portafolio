# ADR-010 — Performance y optimización

## Estado
Aprobado (actualizado 2026-05)

## Contexto
El portfolio debe ser rápido, liviano y usable en móvil, con animaciones presentes pero sin penalizar Core Web Vitals.

## Decisión
Estrategia basada en:

- **Astro SSG** — HTML estático por defecto, JS solo donde aporta (reveal, transiciones, escena About)
- **Tailwind** — CSS utility, purge en build
- **Sin librerías de animación** — CSS + `IntersectionObserver` (ver ADR-006)
- **Build:** `compressHTML`, `inlineStylesheets: 'always'`
- **Fuentes:** Google Fonts con `display=optional`, preload selectivo en `BaseLayout`
- **Imágenes:** assets en `public/`; OG generada en build con `scripts/generate-og-image.mjs`
- **Iconos:** SVG inline vía Iconify (astro-icon), sin spritesheet pesado

## Justificación
- Astro minimiza JS enviado al cliente
- Animaciones con `transform`/`opacity` son GPU-friendly
- GitHub Pages no ofrece optimización de imágenes on-the-fly; conviene pre-optimizar (`me.webp`, etc.)

## Consecuencias
- No hay islas GSAP ni minijuego Canvas que cargar bajo demanda
- El script de reveal se inicializa una vez y se re-ejecuta tras navegación con View Transitions
- Nuevas imágenes grandes deben comprimirse antes de subir a `public/`
- Analytics (Umami) es opcional y se carga con `defer` solo si hay variables de entorno
