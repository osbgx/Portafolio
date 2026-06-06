# ADR-011 — Accesibilidad

## Estado
Aprobado (actualizado 2026-05)

## Contexto
El sitio debe ser usable con teclado, lectores de pantalla y preferencias de movimiento reducido.

## Decisión
Estándar basado en **WCAG 2.1 AA** donde aplique:

| Área | Implementación |
|---|---|
| Navegación | Skip link a `#main-content` en `BaseLayout` |
| Menú mobile | Focus trap, overlay, `aria-expanded` en Header |
| Iconos | `aria-label` en sociales y `TechIcon` (`name`) |
| Formulario | `label` + `for`, `required`, `autocomplete` |
| Secciones | `aria-labelledby` en bloques Home |
| Motion | `prefers-reduced-motion` en CSS y escena About |
| Focus | `focus-visible` en controles interactivos |
| Semántica | `main`, headings jerárquicos, `lang="es"` |

## Consecuencias
- Nuevos componentes interactivos: foco visible y nombre accesible
- About: tipografía pixel con tamaños mínimos cuidados; contraste en UI RPG
- Animaciones no deben bloquear contenido esencial
