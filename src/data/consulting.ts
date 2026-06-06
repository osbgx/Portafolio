export interface FAQ {
  q: string;
  a: string;
}

export interface ApproachStep {
  step: string;
  icon: string;
  title: string;
  desc: string;
}

export interface AutomationItem {
  title: string;
  desc: string;
  icon: string;
}

export const approachSteps: readonly ApproachStep[] = [
  { step: '01', icon: 'heroicons:clipboard-document-list', title: 'Diagnóstico Claro', desc: 'Analizo tu operación, tus herramientas y tus dolores reales. Sin suposiciones: primero entiendo, después propongo.' },
  { step: '02', icon: 'heroicons:puzzle-piece', title: 'Soluciones Prácticas', desc: 'Diseño salidas concretas que se implementan sin rodeos. Nada teórico, todo aplicable desde la primera semana.' },
  { step: '03', icon: 'heroicons:rocket-launch', title: 'Implementación Eficiente', desc: 'Ejecución por etapas, entregas parciales y documentación clara. Acompaño hasta que todo funcione por sí solo.' },
];

export const automationItems: readonly AutomationItem[] = [
  { title: 'Flujos de Trabajo', desc: 'Automatizo procesos manuales con herramientas como n8n, Make y scripts a medida. Conexiones sin fricción entre plataformas.', icon: 'heroicons:arrows-right-left' },
  { title: 'Tareas Repetitivas', desc: 'Bots, schedulers y automatizaciones que liberan horas de tu equipo cada semana. Lo rutinario lo resuelve la máquina.', icon: 'heroicons:clock' },
  { title: 'Pipelines de Datos', desc: 'ETL, transformaciones y sincronización automática entre sistemas. Datos consistentes sin intervención manual.', icon: 'heroicons:circle-stack' },
  { title: 'Monitoreo y Alertas', desc: 'Detección temprana de fallos, dashboards en tiempo real y notificaciones inteligentes. Tu operación bajo control.', icon: 'heroicons:bell' },
];

export const faqs: readonly FAQ[] = [
  { q: '¿Cuánto tiempo toma una consultoría típica?', a: 'Depende del alcance. Un diagnóstico inicial toma 1-2 semanas. Integraciones menores, 4-6 semanas. Proyectos completos de sistemas, 2-3 meses o más.' },
  { q: '¿Trabajas de forma remota o necesitas estar presente?', a: 'El 90% del trabajo lo realizo de forma remota. Para implementaciones críticas o kickoffs, puedo trasladarme.' },
  { q: '¿Qué pasa después de que termina la consultoría?', a: 'Entrego documentación completa y 30 días de soporte posterior para resolver cualquier duda.' },
  { q: '¿Puedes trabajar con sistemas legacy?', a: 'Sí. Tengo experiencia con arquitecturas legacy, integraciones con sistemas heredados y migraciones controladas. Pero por supuesto todo depende del caso.' },
  { q: '¿Cómo se define el alcance del proyecto?', a: 'Inicio con un diagnóstico gratuito de 2-3 días para entender el problema. Luego propongo un alcance claro con entregables, timeline y costos transparentes.' },
];

export interface ImplSystem {
  title: string;
  desc: string;
  icon: string;
}

export interface ResultMetric {
  value: string;
  label: string;
  icon: string;
}

export const implSystems: readonly ImplSystem[] = [
  { title: 'Infraestructura', desc: 'Servidores, cloud y redes. Diseño arquitecturas modulares que crecen sin rehacer lo que ya funciona.', icon: 'heroicons:server-stack' },
  { title: 'Plataformas', desc: 'ERP, CRM, ticketing. Evaluación, selección e implementación de plataformas open source listas para producción.', icon: 'heroicons:building-library' },
  { title: 'Integraciones', desc: 'APIs, webhooks, middleware. Conecto sistemas que no fueron diseñados para hablar entre sí.', icon: 'heroicons:cpu-chip' },
  { title: 'Herramientas de Equipo', desc: 'Colaboración, documentación, dev tools. Stack tecnológico coherente que tu equipo adopta sin resistencia.', icon: 'heroicons:users' },
];

export const results: readonly ResultMetric[] = [
  { value: '40%', label: 'menos tiempo de procesamiento en operaciones críticas', icon: 'heroicons:chart-bar' },
  { value: '100%', label: 'integración estable entre sistemas que no se comunicaban', icon: 'heroicons:arrow-path-rounded-square' },
  { value: '+20h', label: 'semanales recuperadas con automatización de tareas repetitivas', icon: 'heroicons:clock' },
];
