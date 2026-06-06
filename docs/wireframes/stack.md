# Wireframe: Stack Tecnológico

> **Ubicación en el sitio:** sección dentro de la página **Home** (`/`), implementada con `StackSection.astro`. No es una ruta independiente.

## Objetivo
Mostrar de forma visual y organizada todas las tecnologías que maneja Osmar, agrupadas por categoría.

## Estructura

### 1. Título de Sección
- Título: "Stack Tecnológico"
- Subtítulo: "Herramientas, lenguajes y plataformas con las que trabajo día a día."

### 2. Grid por Categorías
Cada categoría se renderiza como un bloque con:
- **Encabezado de categoría** (ej. "Lenguajes", "Frameworks")
- **Grid de iconos** responsive: 3 columnas mobile, 4 tablet, 5-6 desktop
- Cada tecnología es una card con:
  - Icono (28px, vía Iconify)
  - Nombre de la tecnología

### Categorías
1. **Lenguajes** — Python, TypeScript, JavaScript, SQL, Bash, Java
2. **Frameworks** — Astro, React, React Native, Node.js, Next.js, Tailwind, Express, FastAPI
3. **Data & Cloud** — Apache Spark, Apache Airflow, dbt, AWS, GCP, Docker
4. **Bases de Datos** — PostgreSQL, BigQuery, MongoDB, Redis, Snowflake
5. **Herramientas** — Git, VS Code, Figma, Linux, Postman
6. **DevOps** — GitHub Actions, Terraform, Kubernetes, Nginx

## Comportamiento
- Scroll horizontal por categoría con flechas (`StackGrid`)
- **Hover:** glow según acento (`amber` en Home) + tooltip de nivel (Aprendiendo → Experto)
- **Responsive:** scroll táctil en mobile

## Componentes y datos
- `StackSection.astro` — prop `accent="amber"` en Home
- `StackGrid.astro`, `StackItem.astro`, `TechIcon.astro`
- `src/data/tech-icons.ts`

## Estado
Implementado en Home entre **Áreas de Expertise** y **Mi Proceso**.
