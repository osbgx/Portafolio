---
title: "Sistema de Control Autogestionado para Correcciones sobre el ERP"
client: "H. Petersen - Caterpillar"
description: "Diseño y desarrollo de una aplicación interna de escritorio que permitió a usuarios autorizados aplicar correcciones controladas sobre datos del sistema de gestión, con autenticación corporativa, controles de acceso, validaciones avanzadas y un modelo extensible para múltiples formularios."
category: "Desarrollo de Aplicaciones Internas"
type: "empleado"
date: 2023-09-01
tags: ["Visual Basic", "Windows Forms", "SQL Server", "Active Directory", "Automatización Interna", "Control de Acceso", "Calidad de Datos"]
pages: ["consultoria"]
featured: true
images:
  - label: "Interfaz de la aplicación"
    color: "#D4AF37"
    src: "/projects/hpetersen-sistema-control-autogestionado.webp"

---

## Resumen
Desarrollé una aplicación de escritorio para permitir que usuarios autorizados aplicaran correcciones específicas sobre datos del sistema de gestión corporativo. La herramienta surgió como respuesta a la necesidad de resolver errores complejos que no podían corregirse fácilmente desde la interfaz estándar del sistema ERP, en un contexto donde las solicitudes de ajuste eran frecuentes y el conocimiento técnico interno era limitado.

La aplicación permitió canalizar estas correcciones de manera controlada, segura y con múltiples validaciones, reduciendo la dependencia del área técnica y disminuyendo el riesgo asociado a modificaciones directas sobre la base de datos.

## Contexto y problema
La empresa utilizaba Microsoft Dynamics AX 2012 como sistema de gestión principal. En muchos casos, ciertos errores de datos no podían corregirse mediante las funcionalidades estándar del sistema ERP, y la falta de personal con conocimiento profundo del ERP o X++ dificultaba la resolución.

Ante esta situación, la gerencia decidió permitir ajustes directos sobre la base de datos. Sin embargo, esto generaba riesgos importantes:

- Dependencia total del área técnica para cada corrección.
- Alto volumen de solicitudes diarias.
- Riesgo de inconsistencias por modificaciones manuales.
- Ausencia de un mecanismo de validación previo a los cambios.

Era necesario un sistema que permitiera a los usuarios realizar correcciones simples, pero dentro de un marco de control y seguridad.

## Solución:
Para resolver este problema, diseñé y desarrollé una aplicación de escritorio construida en Visual Basic utilizando Windows Forms. La herramienta fue diseñada con tres objetivos principales:

1. Permitir que usuarios autorizados aplicaran correcciones específicas sin intervención del área técnica.
2. Reducir riesgos mediante validaciones estrictas y controles de acceso.
3. Facilitar la expansión del sistema mediante un modelo modular de formularios.

Características principales:

- Interfaz simple, uniforme y fácil de usar.
- Estructura replicable para agregar nuevos formularios rápidamente.
- Validaciones previas a cualquier operación para evitar errores.
- Diseño orientado a minimizar riesgos operativos.

## Arquitectura y seguridad
La aplicación fue diseñada con un enfoque fuerte en seguridad y control de acceso:

- **Autenticación corporativa mediante Active Directory (LDAP)**: los usuarios iniciaban sesión con sus credenciales internas.
- **Restricción por dominio**: la aplicación solo funcionaba en equipos pertenecientes al dominio corporativo.
- **Control de acceso granular**: cada formulario estaba asociado a permisos específicos por área o departamento.
- **Verificación de versión**: la aplicación comprobaba automáticamente que el usuario estuviera utilizando la versión más reciente antes de permitir cualquier operación.
- **Conexión segura a SQL Server**: las operaciones se realizaban mediante consultas controladas y validadas.

## Validaciones y gobierno de cambios
Dado que la herramienta operaba sobre datos sensibles, se implementaron múltiples capas de validación:

- Validaciones previas a cualquier actualización o eliminación.
- Reglas específicas por formulario según el tipo de corrección permitida.
- Validaciones sobre los campos ingresados para evitar valores incorrectos.
- Mecanismos para prevenir inyección de código mediante sanitización estricta de entradas.
- Restricciones operativas para evitar modificaciones fuera del alcance permitido.

Aunque la decisión de permitir modificaciones directas sobre la base de datos fue tomada por la gerencia, el sistema se diseñó para que dichas modificaciones fueran lo más controladas y seguras posible.

## Modelo de extensibilidad
Uno de los objetivos clave fue permitir que el sistema creciera sin necesidad de reescribir la aplicación. Para ello:

- Cada formulario seguía un patrón común de diseño.
- Para agregar un nuevo caso de uso, bastaba con duplicar un formulario existente y ajustar la lógica correspondiente.
- La estructura modular permitió incorporar decenas de formularios sin afectar la estabilidad del sistema.

Este enfoque redujo drásticamente el tiempo de desarrollo de nuevas funcionalidades.

## Colaboración
La primera versión del sistema —arquitectura, diseño, desarrollo completo, validaciones y modelo modular— fue realizada íntegramente por mí.

Posteriormente se sumaron:

- **Daniel Vera** — contribuyó en la ampliación del sistema y en la incorporación de nuevos formularios.
- **Mateo Rojas** — colaboró en la integración con servicios externos relacionados con procesos administrativos.

Su aporte se centró en extender la herramienta una vez que la base técnica ya estaba establecida.

## Impacto
El sistema generó un impacto directo y medible en la operación interna:

- Redujo la dependencia del área técnica para correcciones recurrentes.
- Aceleró los tiempos de respuesta ante incidentes de datos.
- Disminuyó el riesgo asociado a cambios manuales sobre la base de datos.
- Permitió que cada área asumiera responsabilidad sobre sus propios datos dentro de un marco controlado.
- Estandarizó el proceso de corrección, evitando improvisaciones y errores humanos.
- Sentó las bases para futuras herramientas internas más integradas con el sistema de gestión.

## Tecnologías
- Visual Basic  
- Windows Forms  
- Active Directory (LDAP)  
- SQL Server  
- Lógica de validación y sanitización en capa de aplicación  
