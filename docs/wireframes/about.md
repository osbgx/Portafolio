# Wireframe: Sobre mí (`/about`)

**Layout:** `AboutLayout` · **Tema:** `about` · **Fuente:** Press Start 2P · **Fondos:** `brown-*`

## Objetivo
Identidad retro RPG: personalidad, historia y escena interactiva sin minijuego Canvas.

## Estructura (9 bloques en `about.astro`)

### 1. Hero — Title screen
- Pantalla de título estilo JRPG
- CTA scroll a perfil / historia

### 2. Character sheet (`#perfil`)
- Stats, barras, retrato
- `PixelCard`, datos en `src/data/about.ts`
- Sprites: `/pixel/spr-potion.png`, `spr-heart.png`, etc.

### 3. Gustos
- Grid de ítems / aficiones pixel

### 4. Origen (`#historia`)
- Historia en bloques narrativos

### 5. Side quest
- Anécdota o misión secundaria temática

### 6. Habilidades pasivas
- Cards con iconos y bonus flavor

### 7. Player's guide
- Acordeón: cómo trabajar conmigo

### 8. Mini-mapa (`#minijuego`)
- **Escena interactiva** (HTML + CSS + JS)
- Clic mueve personaje; NPC gato sigue
- Sprites: `spr-avatar.png`, `spr-creature2.png`, árboles, pasto
- Ver [runbook escena](../runbooks/minigame.md)

### 9. CTA
- Contacto / proyectos con estilo pixel

## Componentes
`PixelCard`, contenido desde `about.ts`, estilos en `global.css` (utilidades pixel)

## Accesibilidad
`prefers-reduced-motion` desactiva animaciones de escena; contraste cuidado en textos pequeños pixel.
