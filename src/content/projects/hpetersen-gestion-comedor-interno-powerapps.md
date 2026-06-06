---
title: "Aplicación móvil para gestión del comedor corporativo"
client: "H. Petersen - Caterpillar"
description: "Desarrollo completo de una aplicación móvil para la gestión del comedor corporativo, incluyendo marcación de almuerzos con código QR, módulo completo de pedidos, control operativo y reportes analíticos, utilizando Power Apps, SharePoint y Power BI."
category: "Desarrollo de Aplicaciones Internas"
type: "empleado"
date: 2024-05-01
tags: ["Power Apps", "SharePoint", "Power BI", "Aplicaciones Internas", "Automatización", "Experiencia de Usuario"]
pages: ["movil", "consultoria"]
featured: true
images:
  - label: "Página principal"
    color: "#3FAF6C"
    src: "/projects/hpetersen-comedor-powerapps.webp"

---

## Resumen
Desarrollé en solitario una aplicación interna para la gestión del comedor corporativo, construida con Microsoft Power Apps y respaldada por listas de SharePoint diseñadas como un modelo pseudo relacional. La solución permitió controlar la marcación de almuerzos, gestionar pedidos completos de productos, administrar el menú diario y ofrecer herramientas operativas al equipo del comedor. Los datos se integraron posteriormente con Power BI para análisis y reportes.

El proyecto fue solicitado directamente por el directorio, con un plazo de entrega de una semana, debido a problemas operativos y financieros que afectaban tanto a los colaboradores como al comedor y al área de recursos humanos.

## Problemática
Antes de la aplicación no existía ningún sistema formal para registrar almuerzos ni pedidos del comedor. Esto generaba múltiples problemas:

- Personas que consumían sin pagar, por falta de registro.
- Colaboradores que recibían descuentos injustos por consumos que no realizaron.
- El comedor no podía controlar correctamente sus costos ni su demanda real.
- Recursos Humanos debía gestionar reclamos constantes por errores en los descuentos.
- Los pedidos se realizaban por teléfono, generando esperas, confusiones y falta de trazabilidad.
- No existía un registro claro de qué se pedía, cuándo, ni por quién.

La situación afectaba la transparencia, la operación diaria y la relación entre áreas.  
Por este motivo, el directorio solicitó una solución urgente al departamento de IT, con un plazo de entrega de una semana.

## Solución: aplicación interna con Power Apps
Diseñé y desarrollé una aplicación completa en Microsoft Power Apps, conectada a listas de SharePoint estructuradas para comportarse como una base de datos pseudo relacional. La solución permitió:

- Registrar almuerzos mediante código QR.
- Ofrecer una alternativa de marcación por botón para dispositivos sin cámara.
- Gestionar pedidos completos mediante un módulo dedicado con carrito.
- Administrar disponibilidad de productos.
- Definir el menú del día.
- Proveer herramientas operativas al equipo del comedor.
- Integrar los datos con Power BI para análisis y reportes.

Todo el desarrollo —diseño funcional, modelado de datos, pantallas, lógica y validaciones— fue realizado íntegramente por mí.

## Arquitectura de datos
Aunque SharePoint no es una base de datos relacional, diseñé un modelo que imitaba ese comportamiento:

- Listas separadas para usuarios, almuerzos, productos, pedidos y configuraciones.
- Relaciones lógicas mediante identificadores.
- Estructura pensada para evitar duplicación y mantener consistencia.
- Campos específicos para estados, fechas, disponibilidad y tipos de consumo.

Este diseño permitió que la aplicación funcionara de forma coherente y que los datos fueran utilizables para análisis posteriores.

## Funcionalidades para usuarios
La aplicación ofrecía a los colaboradores un módulo completo de pedidos, diseñado para funcionar de manera similar a una plataforma de delivery interna:

- **Marcación de almuerzos mediante código QR**, registrando asistencia al comedor de forma rápida y trazable.
- **Marcación alternativa por botón**, para dispositivos sin cámara o sin soporte de lectura de códigos.
- **Módulo completo de pedidos**, con una pantalla dedicada donde los usuarios podían:
  - Navegar productos disponibles.
  - Ver descripciones y precios.
  - Agregar ítems a un carrito.
  - Confirmar pedidos de forma simple y rápida.
- **Gestión de sesión con credenciales internas**, asociando consumos y pedidos a cada usuario.

La experiencia se diseñó para ser rápida, clara y accesible.

## Funcionalidades para el equipo del comedor
El personal del comedor contaba con un conjunto de herramientas operativas diseñadas para gestionar la demanda diaria:

- **Pantalla de aprobación y preparación de pedidos**, con listado, estados y tiempos.
- **Verificación de marcación de almuerzos**, permitiendo validar consumos en tiempo real.
- **Gestión de productos**, activando o desactivando ítems mediante un estado simple (disponible sí/no).
- **Gestión del menú del día**, definiendo opciones disponibles para cada jornada.
- **Visualización de consumos y pedidos**, facilitando la organización operativa del día.

Esto redujo significativamente el trabajo manual y mejoró la organización interna.

## Analítica y reporting con Power BI
Las listas de SharePoint se conectaban a Power BI para:

- Analizar consumo de almuerzos y productos.
- Identificar patrones de demanda.
- Evaluar costos y comportamiento por día.
- Facilitar el proceso de descuentos mensuales para Recursos Humanos.

Esto transformó un proceso operativo en una fuente de información estratégica.

## Impacto
La aplicación generó beneficios inmediatos y medibles:

- Transparencia total en el consumo del comedor y en los pedidos.
- Reducción de reclamos por descuentos incorrectos.
- Incremento significativo en los ingresos del comedor, al eliminar consumos no registrados.
- Flujo de pedidos más ágil y accesible, sin necesidad de llamadas telefónicas.
- Mejor experiencia para los colaboradores, especialmente para quienes preferían evitar interacciones directas para realizar pedidos.
- Optimización del trabajo de Recursos Humanos, al contar con datos claros para los descuentos mensuales.
- Mejor planificación operativa gracias a reportes y dashboards en Power BI.
- Reducción de tiempos y errores en la gestión diaria del comedor.

El proyecto demostró el valor de las herramientas low-code para resolver necesidades internas de forma rápida, escalable y con impacto real.

## Tecnologías
- Microsoft Power Apps  
- SharePoint (listas como base de datos pseudo relacional)  
- Microsoft Power BI  
