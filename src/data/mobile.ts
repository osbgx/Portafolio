export interface ToolItem {
  name: string;
  icon: string;
  color: string;
}

export interface Capability {
  icon: string;
  title: string;
  desc: string;
  accent: string;
}

export interface CapabilityAccent {
  iconBg: string;
  iconColor: string;
  borderHover: string;
  titleHover: string;
  bottomBar: string;
}

export interface Platform {
  name: string;
  icon: string;
  desc: string;
  gradient: string;
  border: string;
  glow: string;
  shadow: string;
  iconColor: string;
  features: string[];
}

export const iconColors: Record<string, string> = {
  'simple-icons:kotlin': 'text-purple-400',
  'simple-icons:react': 'text-sky-400',
  'simple-icons:typescript': 'text-blue-400',
  'simple-icons:javascript': 'text-yellow-400',
  'simple-icons:firebase': 'text-amber-400',
  'simple-icons:figma': 'text-pink-400',
  'simple-icons:android': 'text-green-400',
  'simple-icons:androidstudio': 'text-green-400',
  'simple-icons:swift': 'text-orange-500',
  'simple-icons:flutter': 'text-cyan-400',
  'simple-icons:gradle': 'text-blue-300',
  'simple-icons:jetpackcompose': 'text-purple-400',
  'simple-icons:sqlite': 'text-blue-300',
  'simple-icons:postman': 'text-orange-500',
  'simple-icons:githubactions': 'text-gray-400',
  'simple-icons:git': 'text-orange-500',
  'simple-icons:supabase': 'text-emerald-400',
  'simple-icons:budibase': 'text-amber-500',
  'simple-icons:n8n': 'text-red-400',
};

export const toolkit: readonly ToolItem[] = [
  { name: 'Kotlin', icon: 'simple-icons:kotlin', color: 'from-purple-400 to-purple-600' },
  { name: 'React Native', icon: 'simple-icons:react', color: 'from-sky-400 to-cyan-300' },
  { name: 'TypeScript', icon: 'simple-icons:typescript', color: 'from-blue-500 to-indigo-400' },
  { name: 'JavaScript', icon: 'simple-icons:javascript', color: 'from-yellow-400 to-amber-500' },
  { name: 'Swift', icon: 'simple-icons:swift', color: 'from-orange-500 to-red-400' },
  { name: 'Flutter', icon: 'simple-icons:flutter', color: 'from-cyan-400 to-blue-500' },
  { name: 'Firebase', icon: 'simple-icons:firebase', color: 'from-amber-400 to-yellow-500' },
  { name: 'SQLite', icon: 'simple-icons:sqlite', color: 'from-blue-300 to-cyan-400' },
  { name: 'Jetpack Compose', icon: 'simple-icons:jetpackcompose', color: 'from-purple-400 to-pink-400' },
  { name: 'Android', icon: 'simple-icons:android', color: 'from-green-400 to-emerald-500' },
  { name: 'Figma', icon: 'simple-icons:figma', color: 'from-pink-400 to-purple-400' },
  { name: 'GitHub Actions', icon: 'simple-icons:githubactions', color: 'from-gray-400 to-slate-400' },
  { name: 'Supabase', icon: 'simple-icons:supabase', color: 'from-emerald-400 to-green-500' },
  { name: 'Budibase', icon: 'simple-icons:budibase', color: 'from-amber-500 to-orange-500' },
  { name: 'n8n', icon: 'simple-icons:n8n', color: 'from-red-500 to-orange-500' },
];

export const capabilities: readonly Capability[] = [
  { icon: 'heroicons:briefcase', title: 'Herramientas Internas', desc: 'Apps de gestión, paneles operativos y dashboards para equipos. Flujos internos que optimizan tu operación diaria.', accent: 'purple' },
  { icon: 'heroicons:device-phone-mobile', title: 'Apps Nativas', desc: 'Android con Kotlin y Jetpack Compose. Cuando el rendimiento nativo importa, voy por ese camino.', accent: 'teal' },
  { icon: 'heroicons:square-2-stack', title: 'Cross-Platform', desc: 'React Native y Flutter. Código compartido, experiencia nativa, menor costo de mantenimiento.', accent: 'pink' },
  { icon: 'heroicons:server-stack', title: 'Supabase & Backend', desc: 'Autenticación, base de datos en tiempo real, almacenamiento y APIs. Backend sin fricción.', accent: 'emerald' },
  { icon: 'heroicons:puzzle-piece', title: 'Low-Code & No-Code', desc: 'Budibase, n8n y herramientas visuales. Soluciones rápidas cuando el código tradicional no es necesario.', accent: 'amber' },
  { icon: 'heroicons:rocket-launch', title: 'Escalabilidad', desc: 'Arquitectura que crece con tu negocio. Desde una herramienta interna hasta una app con miles de usuarios.', accent: 'blue' },
];

export const capabilityAccents: Record<string, CapabilityAccent> = {
  purple: { iconBg: 'bg-gradient-to-br from-purple-500/15 to-teal-500/5 border-purple-500/20 group-hover:from-purple-500/25 group-hover:to-teal-500/10 group-hover:border-purple-400/30', iconColor: 'text-purple-300', borderHover: 'hover:border-purple-400/30', titleHover: 'group-hover:text-purple-300', bottomBar: 'from-purple-400/40 to-teal-400/40' },
  teal: { iconBg: 'bg-gradient-to-br from-teal-500/15 to-cyan-500/5 border-teal-500/20 group-hover:from-teal-500/25 group-hover:to-cyan-500/10 group-hover:border-teal-400/30', iconColor: 'text-teal-300', borderHover: 'hover:border-teal-400/30', titleHover: 'group-hover:text-teal-300', bottomBar: 'from-teal-400/40 to-cyan-400/40' },
  pink: { iconBg: 'bg-gradient-to-br from-pink-500/15 to-rose-500/5 border-pink-500/20 group-hover:from-pink-500/25 group-hover:to-rose-500/10 group-hover:border-pink-400/30', iconColor: 'text-pink-300', borderHover: 'hover:border-pink-400/30', titleHover: 'group-hover:text-pink-300', bottomBar: 'from-pink-400/40 to-rose-400/40' },
  emerald: { iconBg: 'bg-gradient-to-br from-emerald-500/15 to-green-500/5 border-emerald-500/20 group-hover:from-emerald-500/25 group-hover:to-green-500/10 group-hover:border-emerald-400/30', iconColor: 'text-emerald-300', borderHover: 'hover:border-emerald-400/30', titleHover: 'group-hover:text-emerald-300', bottomBar: 'from-emerald-400/40 to-green-400/40' },
  amber: { iconBg: 'bg-gradient-to-br from-amber-500/15 to-orange-500/5 border-amber-500/20 group-hover:from-amber-500/25 group-hover:to-orange-500/10 group-hover:border-amber-400/30', iconColor: 'text-amber-300', borderHover: 'hover:border-amber-400/30', titleHover: 'group-hover:text-amber-300', bottomBar: 'from-amber-400/40 to-orange-400/40' },
  blue: { iconBg: 'bg-gradient-to-br from-blue-500/15 to-indigo-500/5 border-blue-500/20 group-hover:from-blue-500/25 group-hover:to-indigo-500/10 group-hover:border-blue-400/30', iconColor: 'text-blue-300', borderHover: 'hover:border-blue-400/30', titleHover: 'group-hover:text-blue-300', bottomBar: 'from-blue-400/40 to-indigo-400/40' },
};

export const platforms: readonly Platform[] = [
  {
    name: 'Android',
    icon: 'heroicons:device-phone-mobile',
    desc: 'Kotlin, Jetpack Compose, Material You. Apps que se sienten como parte del sistema.',
    gradient: 'from-purple-500/20 to-pink-500/10',
    border: 'border-purple-400/30',
    glow: 'from-purple-400/15 to-pink-400/5',
    shadow: 'rgba(168,85,247,0.15)',
    iconColor: 'text-purple-300',
    features: ['Material You', 'Jetpack Compose', 'Kotlin Coroutines', 'Room DB'],
  },
  {
    name: 'iOS',
    icon: 'heroicons:command-line',
    desc: 'Swift, SwiftUI, UIKit. Experiencias nativas con el look & feel de Apple.',
    gradient: 'from-cyan-500/20 to-blue-500/10',
    border: 'border-cyan-400/30',
    glow: 'from-cyan-400/15 to-blue-400/5',
    shadow: 'rgba(34,211,238,0.15)',
    iconColor: 'text-cyan-300',
    features: ['SwiftUI', 'UIKit', 'Core Data', 'ARKit'],
  },
  {
    name: 'Cross-Platform',
    icon: 'heroicons:square-2-stack',
    desc: 'React Native y Flutter. Una base de código, dos plataformas, rendimiento nativo.',
    gradient: 'from-teal-500/20 to-emerald-500/10',
    border: 'border-teal-400/30',
    glow: 'from-teal-400/15 to-emerald-400/5',
    shadow: 'rgba(20,184,166,0.15)',
    iconColor: 'text-teal-300',
    features: ['React Native', 'Flutter', 'Expo', 'Bloc / Provider'],
  },
];

export interface WorkflowStep {
  step: string;
  icon: string;
  label: string;
  desc: string;
}

export const workflow: readonly WorkflowStep[] = [
  { step: '01', icon: 'heroicons:light-bulb', label: 'Concepto', desc: 'Idea, research, definición de features y alcance.' },
  { step: '02', icon: 'heroicons:paint-brush', label: 'Diseño', desc: 'Wireframes, prototipos interactivos, design system.' },
  { step: '03', icon: 'heroicons:code-bracket', label: 'Desarrollo', desc: 'Arquitectura, componentes, integraciones y testing.' },
  { step: '04', icon: 'heroicons:rocket-launch', label: 'Deploy', desc: 'Testing final, publicación y monitoreo continuo.' },
];
