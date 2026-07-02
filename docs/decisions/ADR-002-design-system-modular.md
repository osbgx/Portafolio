# ADR-002 — Sistema de diseño modular por sección

## Estado
Aprobado

## Contexto
El portfolio debe reflejar múltiples identidades profesionales:
- Data Engineering
- Consultoría
- Desarrollo Web
- Desarrollo Móvil
- Identidad gamer/pixelart

Cada sección necesita su propia estética sin perder coherencia global.

## Decisión
Implementar un **Design System modular**, donde:
- la estructura base es global
- la tipografía, paleta y componentes pueden variar por sección
- los layouts son independientes

## Justificación
- Refuerza la identidad multidisciplinaria del usuario.
- Permite estilos únicos sin romper la coherencia.
- Facilita mantenimiento y escalabilidad.
- Compatible con Astro y Tailwind.

## Consecuencias
- Tokens en `src/styles/global.css` (`@theme`) y temas en `src/data/themes.ts`
- Cada sección: layout + carpeta en `src/components/<sección>/`
- Documentación: `docs/design-system/`, wireframes por ruta

## Implementación
- 6 temas visuales (`home`, `data`, `consulting`, `web`, `mobile`, `about`)
- Blog/Proyectos/Contacto reutilizan tema `home`
