# Home Page Sections Redesign

> **Estado:** Implementado en `src/pages/index.astro` (2026). Este documento describe el diseño objetivo y su mapeo al código actual.

## Objetivo
Dar a cada sección del home un layout y micro-interacciones propias, evitando la sensación de plantilla repetida.

## Mapeo implementación → código

| Sección doc | Implementación | Archivo / componente |
|---|---|---|
| Experience Timeline interactivo | Timeline expandible con métricas | `index.astro` — `#exp-heading`, dots `exp-active` |
| Featured Projects asimétrico | Card grande + grid 3 columnas | `index.astro` — `#proyectos`, `projects.json` |
| Expertise cards dinámicas | Grid 2×2 con animaciones hover únicas | `index.astro` — `#expertise-heading`, `home.ts` |
| Stack tecnológico | Scroll horizontal con tooltips | `StackSection.astro`, `tech-icons.ts` |
| Proceso visual | 4 pasos + línea animada | `index.astro` — `#process-heading` |
| Hero | Partículas + mouse glow + stats | `index.astro` hero section |

## Detalle por sección

### 1. Experiencia → "Experiencia"
- Nodos clickeables expanden panel con métricas y logros
- `dotPulse` en línea temporal; glow ámbar al expandir
- Datos: `src/data/experience.json`

### 2. Proyectos destacados
- Primer proyecto: formato destacado (más ancho)
- Resto: grid de 3 tarjetas
- `ProjectCard` con acentos purple/amber/hylian

### 3. Áreas de expertise
- 4 disciplinas: Data, Consultoría, Web, Móvil
- Hover: `dataflowPulse`, `shineSweep`, `bracketFlash`, `mobilePulse`
- Enlaces a `/data`, `/consulting`, `/web`, `/mobile`

### 4. Stack tecnológico
- Entre Expertise y Proceso
- `StackGrid` + flechas; niveles en tooltip

### 5. Mi proceso
- 4 pasos: Analizar → Diseñar → Desarrollar → Desplegar
- Animaciones de icono por paso (CSS)

### 6. CTA final
- Sección `section-subtle` con CTA a contacto/proyectos

## Animaciones
Todas CSS (ver `docs/design-system/animations.md`). Sin GSAP.

## Pendiente / no implementado
- Mini-preview expandido en hover de expertise cards (solo gradiente + icono animado)
- Sección "Blog reciente" en home (blog solo en `/blog`)
