# Wireframe: Home (`/`)

**Layout:** `HomeLayout` · **Tema:** `home` · **Fuente:** Inter · **Acento:** ámbar / `hero`

## Objetivo
Impacto profesional inmediato: quién soy, qué hago, prueba social (proyectos y experiencia), stack y CTA.

## Estructura (orden en página)

### 1. Hero
- Fondo `carbon` + `grid-pattern`
- Partículas CSS (`#hero-particles`), mouse glow (`#hero-glow`)
- Título con gradiente ámbar–hero
- CTAs: proyectos, sobre mí, contacto
- Foto + badges: "+13 proyectos", "+6 años", "+3 áreas"
- Animación: CSS (sin GSAP)

### 2. Proyectos destacados (`#proyectos`)
- `SectionTitle` + layout asimétrico
- 1 card destacada (ancho) + 3 cards en grid
- Datos: `src/data/projects.json`
- Componente: `ProjectCard`

### 3. Experiencia
- Timeline vertical alternada (desktop)
- Nodos expandibles con métricas extra
- Datos: `src/data/experience.json`
- Glow ámbar en hover/activo

### 4. Áreas de expertise
- Grid 2×2: Data, Consultoría, Web, Móvil
- Enlace a cada servicio
- Hover con animación distinta por card
- Datos: `src/data/home.ts`

### 5. Stack tecnológico
- Sección en Home (no ruta aparte)
- `StackSection` — scroll horizontal, tooltips de nivel
- Datos: `src/data/tech-icons.ts`

### 6. Mi proceso
- 4 pasos con iconos y línea de flujo animada
- Copy en página / `home.ts`

### 7. CTA final
- Mensaje + botones contacto / proyectos
- Fondo `section-subtle`

## No incluido en Home actual
- Listado de posts del blog (ver `/blog`)
- Footer/header: globales vía `BaseLayout`

## Componentes clave
`SectionTitle`, `ProjectCard`, `StackSection`, `StackGrid`, `StackItem`
