# Design System — Animaciones

Este documento define el sistema de animaciones del portfolio.
El objetivo es mantener **fluidez**, **performance** y **personalidad**, priorizando CSS nativo sobre JavaScript.

---

## Principios
- **GPU-accelerated**: Usar `transform` y `opacity` siempre que sea posible
- **Sin reflow**: Evitar animar propiedades que disparan layout (width, height, top, left, margin, padding)
- **CSS nativo exclusivamente**: Keyframes y transiciones sin librerías JS (sin GSAP, AOS ni similares)
- **`will-change` con moderación**: Solo en elementos animados continuamente (partículas)
- **`backdrop-blur-sm`**: Preferir blur pequeño sobre variantes más pesadas (xl, 2xl)

---

## Parámetros Globales

### Duraciones
- **Entrada (scroll reveal):** 0.5–0.6s
- **Hover:** 0.2–0.3s
- **Transiciones entre páginas:** 280ms (old) + 350ms (new)
- **Partículas:** 5–8s (loop infinito)

### Easing
- **Entrada:** `ease-out`
- **Hover UI:** `ease-in-out` o `transition-all duration-300`
- **Partículas:** `ease-in-out`

---

## Animaciones Globales

### View Transitions (entre páginas)
- `::view-transition-old(root)`: fadeOut + scale(1.03) + blur(6px) — 280ms
- `::view-transition-new(root)`: fadeIn + scale(0.97→1) + blur(6px→0) — 350ms
- Loading overlay con 3 bouncing dots durante la transición (en BaseLayout)
- Transiciones View Transitions API con fadeOut/fadeIn + scale + blur

### Scroll Reveal (`data-reveal`)
- `opacity: 0` + `translateY(30px)` → `opacity: 1` + `translateY(0)` (clase `reveal-visible`)
- Implementación: `src/utils/reveal.ts` — `initScrollReveal()` / `revealAll()`
- Gatillado por IntersectionObserver (threshold 0.1)
- Inicializado en `BaseLayout` en evento `astro:page-load`
- Tras navegación con View Transitions: `revealAll()` para evitar contenido oculto

### Section Entrances
- **Expertise cards**: `cardEntrance` — fade + slide desde dirección variable (`--dir`)
- **Process steps**: `stepEntrance` — fade + slide up escalonado
- **Stack rows**: `stackFadeIn` — fade + slide up por categoría

---

## Animaciones del Home

### Hero Particles
- 10 dots con `@keyframes particleDrift`
- `opacity: 0→0.4→0.12→0` + `scale: 0→1→0.5→0`
- Cada partícula tiene `--dur` (5–8s) y `--d` (delay) único vía inline style
- `will-change: transform`

### Hero Mouse Glow
- `radial-gradient(350px at X% Y%, ...)` que sigue al cursor
- Throttled via `requestAnimationFrame` (no reflow, solo composite)
- Solo activo dentro del hero section

### Stats Badges
- Sin animación propia — aparecen con el hero
- Estilo glass estático

### Timeline Dot Pulse
```css
@keyframes dotPulse {
  0%, 100% { box-shadow: 0 0 12px rgba(251,191,36,0.5); }
  50% { box-shadow: 0 0 20px rgba(251,191,36,0.8); }
}
```
- Loop infinito en dots de experiencia
- `exp-active` state: glow más intenso al expandir

### Experience Card Hover
```css
box-shadow: 0 0 24px -4px rgba(251, 191, 36, 0.35);
```
- Mismo glow que los stack items, consistente en toda la página

### Expertise Card Icon Animations

| Área | Animación | Descripción |
|---|---|---|
| Data Fullstack | `dataflowPulse` | Escala 1→1.1 + rotación 0°→5° |
| Consultoría | `shineSweep` | Barrido de luz con `::after` (translateX -100%→100%) |
| Desarrollo Web | `bracketFlash` | Opacidad 1→0.4 (parpadeo 3 veces) |
| Desarrollo Móvil | `mobilePulse` | translateY 0→-3px→0 (bounce 2 veces) |

### Process Section Animations
- `process-flow-dot`: Dot animado que recorre la línea horizontal (4s loop)
- `numPulse`: Números de paso con glow pulsante
- Icon animations por paso: analyzePulse, designDraw, developBracket, deployLaunch

---

## Stack Section

### StackItem Hover Glow
```css
box-shadow: 0 0 24px -4px rgba(accent-color, 0.35);
```
- Color varía por acento: purple, hylian (verde), amber
- Mismo glow consistente en toda la página (exp-cards, featured-cards, project-cards)

### StackItem Tooltip
- Aparece debajo del badge en hover (`top-full mt-2`)
- Muestra nivel: Aprendiendo / Básico / Intermedio / Avanzado / Experto
- Color según acento de la sección

### Horizontal Scroll
- Scroll nativo con `overflow-x: auto`
- Flechas de navegación con estado `arrow-disabled`
- Padding interno (`px-5 py-9`) para que glow y tooltip no se clipeen

---

## Featured & Project Cards

### featured-card / ProjectCard Hover Glow
```css
box-shadow: 0 0 24px -4px rgba(251, 191, 36, 0.35);
```
- Mismo glow consistente que stack items y exp-cards
- ProjectCard: glow varía por acento (purple/amber/hylian)

---

## Reglas de Consistencia

- **No mezclar estilos de animación**: Cada área tiene su animación hover única
- **No animar layout**: Solo transform y opacity
- **Hover consistente**: Todos los componentes interactivos tienen feedback hover de 0.2–0.3s
- **Sin dependencias JS**: Todas las animaciones son CSS nativas (cero librerías — ni GSAP, ni AOS, ni Framer Motion)
- **Performance**: Verificar con Chrome DevTools → Performance tab que no hay forced reflow
