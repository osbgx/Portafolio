# Design System — Espaciado

Este documento define el sistema de espaciado global del portfolio.  
El objetivo es mantener **coherencia visual**, **ritmo vertical uniforme** y **modularidad** entre todas las secciones, incluso cuando cambian tipografías, paletas o componentes.

---

## Objetivos
- Mantener un ritmo vertical consistente en todas las páginas.
- Garantizar separación clara entre secciones, bloques y componentes.
- Facilitar layouts temáticos sin perder coherencia global.
- Basarse en una escala simple, fácil de recordar y aplicar.

---

## Escala de Espaciado (global)

La escala está inspirada en Tailwind, pero adaptada a tu estilo:

| Token | Tamaño |
|-------|--------|
| `xs`  | 4px    |
| `sm`  | 8px    |
| `md`  | 12px   |
| `lg`  | 16px   |
| `xl`  | 24px   |
| `2xl` | 32px   |
| `3xl` | 48px   |
| `4xl` | 64px   |
| `5xl` | 96px   |

Esta escala se usa en:

- márgenes  
- paddings  
- separación entre bloques  
- separación entre secciones  
- grids  
- tarjetas  
- layouts  

---

## Ritmo Vertical

El ritmo vertical debe sentirse **ordenado, profesional y respirable**.

### Reglas globales
- Títulos → `3xl` arriba, `xl` abajo  
- Subtítulos → `xl` arriba, `lg` abajo  
- Párrafos → `md` entre párrafos  
- Listas → `md` entre ítems  
- Secciones → mínimo `4xl` entre secciones  
- Tarjetas → `lg`–`xl` de padding interno  
- Grids → `xl`–`2xl` de gap  

---

## Espaciado por Sección

### Home
- Hero: `5xl` arriba y abajo  
- Bloques: `3xl`  
- Tarjetas: `xl` padding  
- CTA final: `4xl`  

### Data Engineering
- Secciones técnicas: `3xl`  
- Grids: `xl`–`2xl`  
- Métricas: `2xl`  
- Tarjetas técnicas: `xl` padding  

### Consultoría
- Secciones corporativas: `3xl`  
- Tarjetas premium: `xl` padding  
- Casos de éxito: `2xl`  
- CTA: `4xl`  

### Desarrollo Web
- Secciones visuales: `3xl`  
- Grids: `xl`–`2xl`  
- Tarjetas modernas: `xl` padding  
- Galería de animaciones: `lg`–`xl`  

### Desarrollo Móvil
- Secciones mobile-first: `3xl`  
- Tarjetas: `xl` padding  
- Mockups: `2xl` separación  
- Microinteracciones: `lg`–`xl`  

### Sobre mí
- Secciones retro: `py-24 md:py-28` (patrón en `about.astro`)  
- Pixelart: `lg`–`xl` entre ítems  
- Mini-mapa / escena: bloque final antes del CTA  
- Sin timeline vertical en About actual (historia en sección Origen)  

### Blog
- Lista de posts: `xl`–`2xl`  
- Tarjetas: `lg`–`xl` padding  
- Paginación: `xl`  
- Header del post: `3xl`  

### Proyectos
- Grid general: `xl`–`2xl`  
- Tarjetas: `xl` padding  
- Filtros: `lg`  
- CTA: `4xl`  

### Contacto
- Formulario: `xl`–`2xl`  
- Inputs: `md`–`lg`  
- Sección final: `3xl`  

---

## Reglas de Consistencia
- Nunca usar valores arbitrarios fuera de la escala.
- No mezclar paddings internos grandes con márgenes externos pequeños.
- Mantener **mínimo `4xl`** entre secciones para dar aire.
- Mantener **mínimo `xl`** entre elementos dentro de una misma sección.
- El espaciado debe compensar tipografías más pesadas (Press Start 2P).

---

## Implementación en Tailwind

```js
// tailwind.config.js
theme: {
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    '2xl': '32px',
    '3xl': '48px',
    '4xl': '64px',
    '5xl': '96px',
  }
}
```

---

## Notas
- El espaciado es el **pegamento visual** entre secciones temáticas distintas.
- Aunque cada sección tenga su estilo, el ritmo vertical debe sentirse igual.
- El espaciado es clave para que tu portfolio se vea **premium, ordenado y profesional**.
