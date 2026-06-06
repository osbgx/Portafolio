# Runbook — Escena Interactiva (About)

> El archivo se llama `minigame.md` por legado (ADR-005 original). La implementación actual **no es un minijuego Canvas**.

## Objetivo
Describir cómo funciona la escena interactiva pixelada en la página "Sobre mí".

---

## Ubicación
La escena se implementa directamente en `src/pages/about.astro`, sección 8 "MINI-MAPA".

## Cómo funciona
- La escena es **HTML + CSS + JavaScript vanilla** (no usa Canvas).
- Renderiza un bosque pixelado con fondo estático, árboles, pasto, tierra y agua.
- El personaje (sprite avatar) se mueve horizontalmente al hacer clic en cualquier parte de la escena.
- Un gato (NPC) sigue al personaje con un pequeño offset.
- Estrellas parpadean en el cielo con `pixel-blink`.

## Recursos visuales
Sprites en `/public/pixel/`:

| Archivo | Uso |
|---|---|
| `spr-avatar.png` | Personaje principal (escena) |
| `spr-creature2.png` | NPC gato (escena) |
| `spr-grass1.png`, `spr-dirt1.png`, `spr-water1.png` | Texturas del escenario |
| `spr-tree1.png`, `spr-tree2.png` | Árboles |
| `spr-potion.png`, `spr-heart.png`, `spr-nature.png`, … | Iconos en character sheet (`src/data/about.ts`) |
| `tiny16-*.png` | Tilesets auxiliares |

Datos del RPG (stats, inventario, skills) en `src/data/about.ts`.

## Modificar la escena
- **Posición inicial del personaje:** Editar `style="left:40%"` en `#scene-character`
- **Límites de movimiento:** Editar `Math.max(5, Math.min(90, x))` en el script
- **Velocidad del gato:** Editar `transition: 'left 0.3s steps(4)'` en el script
- **Cantidad de estrellas:** Editar `[...Array(12)]` (cambiar el número)
- **Posición de árboles:** Editar el array `[[15,45],[30,42],...]`

## Debug
- Si un sprite no carga, verificar ruta en `/public/pixel/`
- La escena respeta `prefers-reduced-motion`
- Verificar consola para errores de JavaScript
