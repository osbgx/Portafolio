---
title: "Optimización de Performance en SSRS y SQL Server"
client: "H. Petersen - Caterpillar"
description: "Optimización integral de reportes y consultas SQL, reduciendo tiempos de ejecución de horas o días a segundos mediante reescritura de consultas, índices, refactorización de lógica de negocio y mejoras en modelos de datos."
category: "Automatización y Reporting"
type: "empleado"
date: 2026-02-01
featured: false
hidden: true
tags: ["Optimización", "SQL Server", "SSRS", "Performance", "Consultas", "Data Engineering"]
pages: ["data"]
---

Este proyecto se centró en la optimización de performance del ecosistema de reportes en H. Petersen, dealer oficial de Caterpillar en Paraguay. Muchos reportes heredados tardaban entre varias horas y hasta dos días en generarse debido a consultas ineficientes, estructuras mal diseñadas y lógica de negocio duplicada o incorrecta.

El objetivo fue reconstruir y optimizar estos procesos para garantizar tiempos de respuesta adecuados, reducir carga en servidores y permitir que los usuarios accedieran a información crítica de forma inmediata.

## Alcance del proyecto
El trabajo incluyó:

- Identificación de reportes críticos con problemas de performance.
- Análisis de consultas SQL heredadas.
- Reescritura completa de consultas ineficientes.
- Creación de índices específicos para tablas de alto volumen.
- Eliminación de subconsultas innecesarias.
- Refactorización de lógica de negocio.
- Ajustes en modelos de datos.
- Normalización de estructuras heredadas.
- Documentación técnica de cada optimización.

## Problemas detectados
Durante el análisis se identificaron:

- Consultas con múltiples subconsultas anidadas.
- Joins innecesarios o mal estructurados.
- Falta de índices en tablas críticas.
- Cálculos repetidos en cada ejecución.
- Lógica de negocio implementada de forma inconsistente.
- Tablas con estructuras no normalizadas.
- Reportes que realizaban operaciones fila por fila en lugar de set‑based.

## Soluciones implementadas
Las optimizaciones incluyeron:

- Reescritura completa de consultas SQL para adoptar un enfoque set‑based.
- Creación de índices compuestos y filtrados.
- Eliminación de subconsultas redundantes.
- Consolidación de lógica de negocio en vistas o funciones.
- Ajustes en modelos de datos para mejorar cardinalidad y distribución.
- Refactorización de estructuras heredadas.
- Implementación de estadísticas actualizadas y mantenimiento programado.

## Resultados
Los resultados fueron inmediatos y significativos:

- Reportes que tardaban entre 12 horas y 2 días pasaron a ejecutarse en segundos.
- Reducción drástica de carga en servidores SQL.
- Mejora en la experiencia de los usuarios.
- Eliminación de bloqueos y timeouts.
- Mayor estabilidad en procesos diarios y mensuales.
- Base sólida para futuras automatizaciones y reportes.

## Impacto en la empresa
La optimización de performance permitió:

- Acceso inmediato a información crítica.
- Reducción de tiempos de espera para áreas operativas y gerenciales.
- Mejora en la calidad de decisiones basadas en datos.
- Aumento de la productividad en contabilidad, repuestos y servicios.
- Mayor confiabilidad del sistema de reporting.

## Trabajo realizado en solitario
Todo el proceso —análisis, optimización, pruebas, documentación y despliegue— fue realizado por mí en solitario. La única asistencia externa consistió en consultas puntuales sobre reglas de negocio específicas.

## Tecnologías
- SQL Server  
- SSRS  
- Índices y estadísticas  
- Modelos de datos  
- Refactorización SQL  
- Data Engineering  
