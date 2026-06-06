---
title: "Aplicación móvil de bitácora de servicios para técnicos de campo"
client: "H. Petersen - Caterpillar"
description: "Desarrollo completo de una aplicación interna en Power Apps para que los técnicos de servicios registren sus horas y actividades diarias desde el móvil, reemplazando formularios en papel y acelerando el proceso de carga en el sistema de gestión."
category: "Desarrollo de Aplicaciones Internas"
type: "empleado"
date: 2026-02-01
tags: ["Power Apps", "SharePoint", "Movilidad", "Servicios Técnicos", "Automatización", "ERP"]
pages: ["movil", "consultoria"]
featuredIn: ["movil"]
featured: true
images:
  - label: "Página principal"
    color: "#3FAF6C"
    src: "/projects/hpetersen-bitacora-powerapps.webp"

---

## Resumen
Desarrollé una aplicación móvil interna en Microsoft Power Apps para que los técnicos de servicios registraran sus horas y actividades diarias directamente desde sus dispositivos. La herramienta reemplazó el proceso manual basado en papel y permitió estructurar la información para su posterior carga en el sistema de gestión corporativo.

Aunque la integración completa con el ERP no llegó a implementarse debido a limitaciones técnicas y decisiones gerenciales, la aplicación logró acelerar significativamente el proceso de registro y consolidación de horas, reduciendo errores y mejorando la trazabilidad.

## Problemática
Antes de la aplicación, los técnicos de servicios debían registrar sus horas de trabajo en papel. Esto generaba múltiples problemas:

- Formularios incompletos, ilegibles o extraviados.
- Retrasos en la entrega de partes diarios.
- Dificultad para consolidar la información en el sistema de gestión.
- Errores frecuentes en la interpretación de datos.
- Falta de trazabilidad sobre actividades realizadas en campo.
- Carga administrativa excesiva para el equipo encargado de ingresar los datos al ERP.

La ausencia de una solución móvil era especialmente crítica, ya que los técnicos trabajaban en campo y no contaban con acceso directo al sistema de gestión.

## Solución: aplicación móvil en Power Apps
Para resolver esta necesidad, diseñé y desarrollé una aplicación móvil en Microsoft Power Apps que permitía a los técnicos:

- Registrar horas trabajadas.
- Registrar actividades realizadas.
- Asociar cada registro a clientes, equipos o servicios.
- Enviar sus partes diarios de forma digital y estructurada.

La aplicación fue diseñada para funcionar en dispositivos móviles, con una interfaz simple, clara y optimizada para uso en campo.

## Arquitectura y datos
La aplicación utilizó listas de SharePoint como base de datos, estructuradas para:

- Registrar partes diarios.
- Asociar horas a servicios específicos.
- Mantener consistencia entre técnicos, actividades y clientes.
- Permitir validaciones previas al envío.

Aunque SharePoint no es una base relacional, se diseñó un modelo pseudo relacional mediante identificadores y referencias cruzadas.

## Funcionalidades para técnicos
La aplicación incluía:

- **Registro de horas diarias**, con inicio, fin y total calculado automáticamente.
- **Registro de actividades**, seleccionando tipos de trabajo realizados.
- **Asociación a servicios**, clientes o equipos según corresponda.
- **Historial de partes enviados**, para consulta rápida.
- **Validaciones previas al envío**, evitando datos incompletos o inconsistentes.
- **Interfaz móvil optimizada**, pensada para uso en campo.

## Funcionalidades para supervisores y backoffice
El equipo administrativo contaba con:

- **Listado consolidado de partes diarios enviados**.
- **Validación y control de registros**.
- **Exportación de datos para carga en el ERP**.
- **Visibilidad de horas por técnico, cliente o servicio**.
- **Detección de inconsistencias o faltantes**.

Esto permitió acelerar el proceso de carga y reducir errores.

## Integración con el sistema de gestión
El proyecto contemplaba una integración directa con el ERP corporativo para cargar automáticamente las horas registradas. Sin embargo:

- La integración presentó desafíos técnicos significativos.
- Existieron restricciones y limitaciones desde la gerencia.
- Finalmente, la integración completa no se implementó.

Aun así, la aplicación permitió:

- Estandarizar la captura de datos.
- Reducir tiempos de carga manual.
- Mejorar la calidad y consistencia de la información enviada al ERP.

## Impacto
La aplicación generó mejoras inmediatas:

- Eliminación del uso de papel para partes diarios.
- Reducción de errores en el registro de horas.
- Aceleración del proceso de carga en el ERP.
- Mayor trazabilidad sobre actividades de campo.
- Mejor organización del trabajo técnico.
- Reducción de carga administrativa para el equipo de backoffice.
- Base sólida para futuras integraciones o ampliaciones.

Aunque la integración completa no se concretó, la aplicación resolvió el problema principal: capturar datos de campo de forma estructurada, confiable y accesible.

## Tecnologías
- Microsoft Power Apps  
- SharePoint (listas como base de datos pseudo relacional)  
- Conectores estándar de Power Platform  
