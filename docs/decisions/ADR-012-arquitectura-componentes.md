# ADR-012 — Arquitectura de componentes

## Estado
Aprobado (actualizado 2026-05)

## Contexto
El portfolio tiene múltiples secciones con estilos distintos, pero debe mantener coherencia estructural.

## Decisión
Arquitectura en capas:

- **Componentes globales** — neutros, reutilizables (`src/components/global/`)
- **Componentes por sección** — estética del área (`data/`, `consulting/`, `web/`, `mobile/`, `about/`, `blog/`, `projects/`)
- **Layouts** — envoltorio y tema (`src/layouts/`)
- **Datos** — copy y configuración (`src/data/`)
- **Design system** — documentado en `docs/design-system/`

## Estructura actual

```
src/components/
├── global/       # Header, Footer, SocialDock, Stack*, forms, Pagination, …
├── data/         # DataCard, DataMetric
├── consulting/   # ConsultingCard, FAQSection, TestimonialSection, ClientLogos, InlineCTA
├── web/          # WebCard
├── mobile/       # MobileCard
├── about/        # PixelCard
├── blog/         # PostCard
└── projects/     # ProjectCard (grid de listado)
```

No hay carpeta `contact/`; contacto usa `FormInput` y `FormTextarea` en `global/`.

## Justificación
- Evita duplicación
- Permite personalización por sección sin romper la base
- Compatible con Astro + Tailwind

## Consecuencias
- Componentes globales no deben hardcodear colores de un solo tema (salvo defaults)
- Componentes temáticos usan la paleta y tipografía de su sección
- Temas de header/footer/dock centralizados en `src/data/themes.ts`
