# ADR-005 — Escena interactiva en «Sobre mí»

## Estado
**Reemplazado** (2026-05) — La decisión original (minijuego Canvas + Astro island) no se implementó.

## Decisión actual
Implementar una **escena interactiva pixelada** en `/about`:

- Código en `src/pages/about.astro` (sección mini-mapa)
- **HTML + CSS + JavaScript vanilla** (sin Canvas, sin islands)
- Sprites en `/public/pixel/`
- Clic mueve al personaje; un NPC sigue con offset

## Contexto original
Se planteó un minijuego retro con puntuación local y Canvas. Tras iteraciones de diseño (retro RPG), se optó por una escena más ligera que refuerza la identidad sin cargar un motor de juego.

## Justificación de la implementación actual
- Cero dependencias de animación en cliente
- Compatible con SSG y performance del resto del sitio
- Mantiene estética pixelart sin complejidad de Canvas

## Consecuencias
- Documentación operativa: [`docs/runbooks/minigame.md`](../runbooks/minigame.md)
- Los assets viven en `public/pixel/` (sprites `spr-*`, tilesets `tiny16-*`)

## Referencia histórica
Decisión original aprobada: componente island + Canvas + `/public/sprites/`. No aplicable al código actual.
