# ADR-015 — Sección Stack Tecnológico

## Estado
Aprobado

## Contexto
El portfolio necesita una sección que muestre de forma visual y organizada el stack tecnológico del autor. Esto permite a visitantes y reclutadores identificar rápidamente las tecnologías dominadas.

Se requiere:
- Visualización clara y atractiva de tecnologías agrupadas por categoría
- Facilidad de mantenimiento (agregar/quitar tecnologías)
- Iconos oficiales de cada tecnología
- Integración con el design system existente

## Decisión
Se crea una nueva sección "Stack Tecnológico" en la página principal, entre "Áreas de Expertise" y "Mi Enfoque", utilizando:

- **Iconify** via `astro-icon` como sistema de iconos unificado
- **Simple Icons + Devicon** como colecciones principales
- **`src/data/tech-icons.ts`** como fuente única de datos
- **Componentes modulares:** `TechIcon`, `StackItem`, `StackGrid`, `StackSection`
- **Grid responsive** con hover effects coherentes al design system

## Justificación
- Iconify proporciona iconos oficiales de cientos de tecnologías sin necesidad de assets estáticos.
- Los datos en TypeScript permiten type safety y auto-completado.
- La estructura modular facilita reordenar o reutilizar los componentes.
- El grid responsivo se adapta naturalmente a cualquier pantalla.

## Consecuencias
- Se debe mantener `src/data/tech-icons.ts` actualizado con nuevas tecnologías.
- Los iconos se renderizan en cliente liviano (SVG inline).
- Nuevas colecciones de Iconify pueden agregarse con `npm install @iconify-json/<coleccion>`.

## Alternativas consideradas
- **SVGs locales:** Más control pero difícil de mantener y actualizar.
- **Imágenes PNG:** Pesadas, no escalables, sin color dinámico.
- **Font Awesome:** Menor cobertura de tecnologías específicas.

## Referencias
- Iconify: https://iconify.design/
- Simple Icons: https://simpleicons.org/
- astro-icon: https://github.com/natemoo-re/astro-icon
- Archivo de datos: `/src/data/tech-icons.ts`
- Componentes: `/src/components/global/Stack*.astro`
