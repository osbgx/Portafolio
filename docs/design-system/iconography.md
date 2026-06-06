# Design System — Iconografía

## Stack Tecnológico

El portfolio usa **Iconify** como sistema de iconos unificado, integrado vía `astro-icon`.

### Colecciones activas
- **[Simple Icons](https://simpleicons.org/):** Tecnologías y marcas (`simple:*` en config)
- **[Devicon](https://devicon.dev/):** Ecosistema developer
- **[Heroicons](https://heroicons.com/):** UI (menú, decoración en páginas)
- **Skill Icons:** Complemento técnico
- **Local** (`src/icons/`): Iconos propios (ej. `sql`)

### Componente TechIcon

```astro
---
import TechIcon from './TechIcon.astro';
---

<TechIcon name="Python" icon="simple-icons:python" size={28} />
```

**Props:**
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `name` | `string` | — | Nombre legible de la tecnología |
| `icon` | `string` | — | ID del icono en formato `coleccion:nombre` |
| `size` | `number` | `24` | Tamaño en píxeles |

### Formato de IDs

```
simple-icons:python        → Simple Icons
simple-icons:typescript    → Simple Icons
devicon:reactnative        → Devicon
simple-icons:amazonwebservices → Simple Icons
```

### Data Source

Todas las tecnologías se definen en `src/data/tech-icons.ts`:

```ts
export const techStack: TechItem[] = [
  { name: 'Python', icon: 'simple-icons:python', category: 'Lenguajes' },
  ...
];
```

**Categorías disponibles:** Lenguajes, Frameworks, Data & Cloud, Bases de Datos, Herramientas, DevOps

### Componentes del Stack

| Componente | Ruta | Función |
|------------|------|---------|
| `TechIcon` | `src/components/global/TechIcon.astro` | Wrapper de astro-icon con accesibilidad |
| `StackItem` | `src/components/global/StackItem.astro` | Item individual con hover glow y tooltip de nivel |
| `StackGrid` | `src/components/global/StackGrid.astro` | Grid horizontal scrollable con arrow nav |
| `StackSection` | `src/components/global/StackSection.astro` | Sección completa en Home |

### Agregar una tecnología nueva

1. Buscar el ID del icono en https://icon-sets.iconify.design/
2. Agregar entrada en `src/data/tech-icons.ts`:
   ```ts
   { name: 'NuevaTech', icon: 'simple-icons:nuevatech', category: 'Frameworks' },
   ```
3. Si la colección no está instalada:
   ```bash
   npm install @iconify-json/nueva-coleccion
   ```

### Reglas
- Siempre incluir `name` descriptivo para accesibilidad.
- Preferir Simple Icons sobre Devicon cuando exista el icono.
- Mantener consistencia en el tamaño (28px para grid, 24px para general).
