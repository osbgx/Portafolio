---
title: "Implementación de sistema de documentación y gestión del conocimiento - Wiki.js"
client: "H. Petersen - Caterpillar"
description: "Implementación completa de Wiki.js como intranet y base de conocimiento interna para centralizar documentación, procesos y recursos del departamento de informática en H. Petersen, dealer oficial de Caterpillar en Paraguay."
category: "Implementación de Sistemas"
type: "empleado"
date: 2025-12-01
tags: ["Wiki.js", "Documentación", "Ubuntu Server", "Docker", "Nginx", "SSL Interno", "Intranet"]
pages: ["consultoria"]
featuredIn: ["consultoria"]
featured: true
images:
  - label: "Página principal"
    color: "#3FAF6C"
    src: "/projects/hpetersen-wikijs.webp"
---

Wiki.js es una plataforma moderna de documentación y gestión del conocimiento, diseñada para centralizar información técnica, procesos internos, manuales, instructivos y recursos operativos.  
En H. Petersen, dealer oficial de Caterpillar en Paraguay, realicé **en solitario** la implementación completa de Wiki.js como base de conocimiento de la empresa, con el objetivo de organizar documentación dispersa, mejorar la comunicación interna y reducir la dependencia del soporte técnico para tareas repetitivas y mejorar la eficiencia operativa.

El proyecto abarcó desde el diseño de la arquitectura y el despliegue del entorno hasta la estructuración de categorías, permisos, plantillas, migración de contenido y optimización del acceso interno.

## Arquitectura y despliegue
La plataforma se desplegó sobre **Ubuntu Server**, utilizando **contenedores Docker** para asegurar modularidad, portabilidad y facilidad de mantenimiento.  
Se configuró un **reverse proxy con Nginx**, incluyendo certificados **SSL internos**, para garantizar un acceso seguro dentro de la red corporativa y permitir segmentación por áreas y niveles de acceso.

La arquitectura final incluyó:
- Contenedores separados para Wiki.js, base de datos y servicios auxiliares  
- Reverse proxy con Nginx y SSL interno para cifrado de tráfico  
- Configuración de headers de seguridad y control de acceso  
- Políticas de actualización sin interrupción  
- Logs centralizados para auditoría y diagnóstico  

## Estructuración de la base de conocimiento
La documentación existente estaba distribuida en archivos sueltos, correos, documentos aislados y conocimiento tácito de cada equipo.  
Diseñé una estructura clara y escalable basada en:

- Categorías principales por área y función  
- Subcategorías para procesos específicos  
- Plantillas reutilizables para estandarizar documentación  
- Páginas con formato uniforme y navegación intuitiva  
- Índices automáticos y enlaces internos para facilitar búsqueda  
- Tags para clasificación transversal  

El resultado fue una intranet organizada, fácil de navegar y preparada para crecer sin perder orden.

## Permisos, roles y control de acceso
Wiki.js permite un control granular de permisos, lo cual configuré para reflejar la estructura real de la empresa y las necesidades de cada área.

Esto incluyó:
- Roles diferenciados (lectura, edición, administración)  
- Permisos por categoría y subcategoría  
- Acceso restringido a documentación sensible  
- Flujos de aprobación para cambios críticos  
- Auditoría de modificaciones  

El objetivo fue asegurar que cada persona tuviera acceso solo a lo necesario, manteniendo la integridad de la documentación.

## Migración y normalización de contenido
Realicé la migración manual y automatizada de documentación previa, incluyendo:

- Procedimientos técnicos  
- Guías de uso  
- Manuales internos  
- Instructivos de soporte  
- Documentación de infraestructura  
- Políticas internas  

Cada documento fue revisado, normalizado y adaptado a las nuevas plantillas para mantener coherencia visual y estructural.

## Trabajo realizado en solitario
Todo el proyecto —arquitectura, despliegue, configuración, documentación, migración y capacitación— fue realizado **por mí en solitario**, incluyendo:

- Diseño de la estructura de la intranet  
- Configuración del entorno Docker  
- Implementación de seguridad y SSL interno  
- Creación de plantillas y categorías  
- Migración y normalización de contenido  
- Capacitación al equipo interno  
- Documentación completa del sistema  

## Tecnologías
- Wiki.js  
- Ubuntu Server  
- Docker  
- Nginx (reverse proxy + SSL interno)  
