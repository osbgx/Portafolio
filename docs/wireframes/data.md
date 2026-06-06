# Wireframe: Data Fullstack (`/data`)

**Layout:** `DataLayout` · **Tema:** `data` · **Fuente:** JetBrains Mono · **Acento:** `hylian`

## Objetivo
Comunicar especialización en ingeniería de datos: pipelines, calidad, stack y resultados.

## Estructura

### 1. Hero técnico (`hero-data`)
- Fondo oscuro `#08080A` + grid verde
- Prompt terminal: `cat /profiles/data-fullstack` con **typing effect** (JS inline)
- CTAs a servicios y proyectos
- Scanlines / estética terminal (CSS)

### 2. Servicios (`#servicios`)
- Grid de capacidades
- Componente: `DataCard`
- Copy: `src/data/data-page.ts`

### 3. Proyectos data (`#proyectos`)
- Casos o enlaces a `/projects`
- Cards con glow hylian

### 4. Stack de datos
- Tecnologías del dominio data
- Iconos vía `TechIcon`

### 5. Flujo de trabajo
- Timeline / pipeline ETL→ML→viz
- Estilo diagrama en CSS

### 6. Métricas / resultados
- `DataMetric` — números destacados

### 7. CTA
- Contacto o consultoría

## Animaciones
CSS keyframes (data-flow, glow). Sin GSAP.

## Componentes
`DataCard`, `DataMetric`, `SectionTitle` (en página)
