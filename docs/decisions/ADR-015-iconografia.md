# ADR-015 — Sistema de iconografía

**Estado:** Aprobado (actualizado 2026-05)

## Contexto
Iconografía consistente para tecnologías, navegación y UI, integrada con Astro y Tailwind.

## Decisión
Sistema híbrido vía **astro-icon** + **Iconify**:

| Colección | Uso principal |
|---|---|
| Simple Icons | Marcas y tecnologías (stack, muchas secciones) |
| Devicon | Ecosistema developer |
| Heroicons | UI (menú, iconos decorativos en páginas) |
| Skill Icons | Complemento técnico |
| Local (`src/icons/`) | Iconos custom (ej. `sql`) |

Configuración en `astro.config.mjs`:

```js
icon({ include: { local: ['sql'], simple: ['*'], heroicons: ['*'] } })
```

## Implementación

- Componente: `src/components/global/TechIcon.astro`
- Datos: `src/data/tech-icons.ts`
- Paquetes: `@iconify-json/simple-icons`, `devicon`, `heroicons`, `skill-icons`

```astro
<TechIcon name="Python" icon="simple-icons:python" size={28} />
```

## Consecuencias
- Agregar tecnologías: editar `tech-icons.ts`; si falta el icono, instalar `@iconify-json/<colección>` o usar otro ID de Iconify
- Los SVG se incluyen en build (no depende de CDN en runtime para las colecciones configuradas)

## Alternativas descartadas
- Solo Simple Icons o solo Devicon — cobertura o estilo insuficiente para todas las secciones
- Iconos PNG propios — mantenimiento alto
