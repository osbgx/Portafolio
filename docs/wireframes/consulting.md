# Wireframe: Consultoría (`/consulting`)

**Layout:** `ConsultingLayout` · **Tema:** `consulting` · **Fuente:** IBM Plex Sans · **Acento:** `hero`

## Objetivo
Seniority consultivo: servicios claros, proceso, resultados e industrias.

## Estructura

### 1. Hero (`hero-consulting`)
- Fondo `carbon`, altura ~90vh
- Título + propuesta de valor
- CTAs a `#servicios` y contacto
- Animación: fade / CSS sutil

### 2. Qué ofrezco (`#servicios`)
- 4 áreas en grid
- `ConsultingCard`
- `InlineCTA` al final de bloque

### 3. Enfoque consultivo
- Proceso en 3 etapas
- `SectionTitle` + pasos numerados

### 4. Automatización de procesos
- Filosofía costo-beneficio
- Lista o cards explicativas

### 5. Implementación de sistemas
- Selección e integración de tecnología

### 6. Resultados (`#resultados`)
- Métricas / KPIs de consultorías
- Estilo corporativo oscuro

### 7. Industrias
- Sectores con experiencia
- Grid de industrias

### 8. FAQ
- `FAQSection` — acordeón
- Preguntas frecuentes antes de contacto

### 9. CTA final
- Borde superior sutil, mensaje + botón contacto

## Componentes
`ConsultingCard`, `FAQSection`, `InlineCTA`, `ClientLogos` (comentado en código, opcional)

## Notas
- Fondos alternan `carbon` / `obsidian`
- `ClientLogos` importado pero deshabilitado (`<!-- -->`) hasta tener logos finales
