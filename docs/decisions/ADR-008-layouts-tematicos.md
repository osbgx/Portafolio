# ADR-008 — Layouts temáticos por sección

## Estado
Aprobado (actualizado 2026-05)

## Contexto
Cada área del portfolio (Data, Consultoría, Web, etc.) requiere identidad visual distinta con estructura común.

## Decisión

| Layout | Ruta |
|---|---|
| `HomeLayout` | `/` |
| `DataLayout` | `/data` |
| `ConsultingLayout` | `/consulting` |
| `WebLayout` | `/web` |
| `MobileLayout` | `/mobile` |
| `AboutLayout` | `/about` |
| `BlogLayout` | `/blog` |
| `PostLayout` | `/blog/:slug`, `/projects/:slug` |
| `ProjectsLayout` | `/projects` |
| `ContactLayout` | `/contact` |

Todos delegan en **`BaseLayout`**, que centraliza Header, Footer, SocialDock, SEO y scripts globales.

## Temas
Prop `theme` → `src/data/themes.ts` (header, footer, dock).

## Consecuencias
- Nuevo layout temático = wrapper fino + entrada en `themes.ts`
- Blog/Proyectos/Contacto usan `theme="home"` para coherencia con acentos ámbar
