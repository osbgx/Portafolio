export interface ExpertiseCard {
  href: string;
  title: string;
  desc: string;
  accent: 'amber';
  icon: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
  icon: string;
  anim: string;
}

export const expertiseCards: readonly ExpertiseCard[] = [
  { href: '/data', title: 'Data Fullstack', desc: 'Arquitectura, ingeniería, análisis, visualización, ML y ciencia de datos. Todo el ciclo de vida del dato, de principio a fin.', accent: 'amber', icon: 'heroicons:server-stack' },
  { href: '/consulting', title: 'Consultoría', desc: 'Asesoramiento técnico, arquitectura de sistemas, optimización de procesos y estrategia digital.', accent: 'amber', icon: 'heroicons:briefcase' },
  { href: '/web', title: 'Desarrollo Web', desc: 'Aplicaciones modernas, responsivas y con experiencias de usuario que marcan la diferencia con Astro, React y Tailwind.', accent: 'amber', icon: 'heroicons:code-bracket' },
  { href: '/mobile', title: 'Desarrollo Móvil', desc: 'Apps nativas y multiplataforma con React Native, Kotlin y Firebase. Experiencias fluidas en iOS y Android.', accent: 'amber', icon: 'heroicons:device-phone-mobile' },
];

export const expertiseStyles: Record<string, Record<string, string>> = {
  amber: {
    card: 'bg-amber-500/5 border-amber-500/10 hover:border-amber-400/30',
    grad: 'from-amber-500/5',
    icon: 'bg-amber-500/10 border-amber-500/20',
    text: 'text-amber-300',
    hover: 'group-hover:text-amber-200',
    anim: 'icon-bracket',
  },
};

export const processSteps: readonly ProcessStep[] = [
  { step: '01', title: 'Analizar', desc: 'Entiendo el problema, los datos y los objetivos. Preguntas correctas antes de soluciones apresuradas.', icon: 'heroicons:magnifying-glass', anim: 'icon-analyze' },
  { step: '02', title: 'Diseñar', desc: 'Arquitectura limpia, UX pensamiento, planificación clara. Cada detalle cuenta antes de escribir código.', icon: 'heroicons:paint-brush', anim: 'icon-design' },
  { step: '03', title: 'Desarrollar', desc: 'Código modular, iteraciones rápidas, testing continuo. Construyo pensando en mantenibilidad.', icon: 'heroicons:code-bracket', anim: 'icon-develop' },
  { step: '04', title: 'Desplegar', desc: 'CI/CD, monitoreo, documentación. Un proyecto no termina hasta que está vivo y funcionando.', icon: 'heroicons:rocket-launch', anim: 'icon-deploy' },
];
