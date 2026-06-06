---
title: "Implementación de sistema de gestión de activos y servicios de IT - GLPI"
client: "H. Petersen - Caterpillar"
description: "Implementación completa de GLPI como plataforma ITSM para gestión de inventario, tickets y necesidades operativas del departamento de informática en H. Petersen, dealer oficial de Caterpillar en Paraguay."
category: "Implementación de Sistemas"
type: "empleado"
date: 2026-02-01
tags: ["GLPI", "ITSM", "Ubuntu Server", "Docker", "Nginx", "Active Directory", "GPO", "SSL Interno"]
pages: ["consultoria"]
featuredIn: ["consultoria", "index"]
featured: true
images:
  - label: "Panel de gestión"
    color: "#D4AF37"
    src: "/projects/hpetersen-glpi.webp"
---

GLPI es una plataforma ITSM (IT Service Management) utilizada para gestionar activos, solicitudes, tickets, mantenimiento y procesos internos de soporte.  
En H. Petersen, dealer oficial de Caterpillar en Paraguay, realicé **en solitario** la implementación completa de GLPI como sistema central del departamento de informática, abarcando inventario, soporte técnico, flujos operativos y organización interna entre múltiples áreas.

El proyecto incluyó el diseño de la arquitectura, el despliegue del entorno, la configuración de módulos, la integración con Active Directory, la automatización del inventario y la creación de flujos de trabajo adaptados a las necesidades reales de la operación.

## Arquitectura y despliegue
La plataforma se desplegó sobre **Ubuntu Server**, utilizando **contenedores Docker** para asegurar modularidad, mantenibilidad y facilidad de actualización.  
Se configuró un **reverse proxy con Nginx**, incluyendo certificados **SSL internos**, para garantizar un acceso seguro dentro de la red corporativa y permitir segmentación por áreas y permisos.

La arquitectura final incluyó:
- Contenedores separados para GLPI, base de datos y servicios auxiliares  
- Reverse proxy con Nginx y SSL interno para tráfico cifrado  
- Configuración de headers de seguridad y control de acceso  
- Políticas de actualización y mantenimiento sin interrupción  
- Logs centralizados para auditoría y diagnóstico  

## Integración con Active Directory y automatización
Para automatizar el inventario y facilitar la administración, integré GLPI con **Active Directory**, permitiendo:
- Autenticación centralizada  
- Sincronización de usuarios y grupos  
- Distribución automática del agente mediante **GPO**  

La GPO se diseñó para instalar el agente en todos los equipos del dominio sin intervención manual, logrando un inventario actualizado, confiable y detallado permitiendo conocer todos los datos de cada equipo.

## Gestión de tickets y flujos operativos
El módulo de tickets se configuró desde cero, adaptado a la estructura real del departamento de informática y a las necesidades de cada área.  
Esto incluyó:

- Tipos de tickets personalizados  
- Categorías por tipo de error (facturación, red, hardware, software, etc.)  
- Priorización por impacto y urgencia  
- SLA internos (no aplicados aún por decisiones de la gerencia)
- Reglas automáticas de asignación
- Derivación entre técnicos
- Plantillas para solicitudes frecuentes  
- Paneles personalizados para técnicos y supervisores  

El resultado fue un sistema claro, ordenado y fácil de usar, que redujo tiempos de respuesta y mejoró la trazabilidad de cada solicitud.

## Inventario y gestión de activos
El inventario se configuró para registrar:
- Equipos de escritorio y portátiles  
- Impresoras y periféricos  
- Equipos de red  
- Software instalado  
- Componentes internos  
- Historial de mantenimiento  

Gracias al agente distribuido por GPO, el inventario se mantuvo actualizado automáticamente, eliminando la necesidad de relevamientos manuales.

## Trabajo realizado en solitario
Todo el proyecto —arquitectura, despliegue, configuración, documentación, automatización e integración— fue realizado **por mí en solitario**, desde el análisis inicial hasta la puesta en producción.  
Esto incluyó:
- Diseño de la arquitectura  
- Configuración del entorno  
- Implementación de seguridad y SSL interno  
- Integración con Active Directory  
- Creación de flujos y reglas  
- Capacitación al equipo interno  
- Documentación completa del sistema  

## Tecnologías
- GLPI (ITSM)  
- Ubuntu Server  
- Docker  
- Nginx (reverse proxy + SSL interno)  
- Active Directory (GPO)  
