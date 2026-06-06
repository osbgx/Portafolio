# Runbook — Componentes

## Objetivo
Crear, extender y mantener componentes globales y por sección.

## Estructura actual

```
src/components/
├── global/
│   ├── Header.astro, Footer.astro, SocialDock.astro
│   ├── SectionTitle.astro
│   ├── StackSection.astro, StackGrid.astro, StackItem.astro
│   ├── ProjectCard.astro, CardGlow.astro, Tag.astro
│   ├── TechIcon.astro, ImageCarousel.astro
│   ├── Pagination.astro, EmptyState.astro
│   └── FormInput.astro, FormTextarea.astro
├── data/         → DataCard, DataMetric
├── consulting/   → ConsultingCard, FAQSection, InlineCTA
├── web/          → WebCard
├── mobile/       → MobileCard
├── about/        → PixelCard
├── blog/         → PostCard
└── projects/     → ProjectCard
```

No existe `src/components/contact/`.

## Crear un componente global

1. Añadir archivo en `src/components/global/`.
2. Usar tokens del design system (colores neutros, spacing).
3. Evitar colores fijos de un solo tema; recibir acentos por props si hace falta.

## Crear un componente temático

1. Añadir en la carpeta de la sección (`data/`, `consulting/`, etc.).
2. Aplicar tipografía y paleta de esa página (ver `src/data/themes.ts` y wireframes).
3. Reutilizar `SectionTitle`, `CardGlow` o `Tag` cuando encaje.

## Temas (header / footer / dock)

Los estilos por tema están centralizados en `src/data/themes.ts`.  
Los layouts pasan `theme` a `BaseLayout`; no duplicar clases de tema en cada componente salvo excepciones locales.

## Debug

- Revisar imports y props requeridas.
- Confirmar que la página usa el layout correcto.
- Tras View Transitions, comprobar que scripts inline se re-ejecutan en `astro:page-load` si aplica.
