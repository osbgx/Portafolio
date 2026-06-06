export interface ToolItem {
  name: string;
  icon: string;
  color: string;
}

export interface Specialty {
  title: string;
  desc: string;
  gradient: string;
  glow: string;
  icons: string[];
  preview: string;
}

export interface WorkflowStep {
  step: string;
  label: string;
  icon: string;
  desc: string;
}

export interface ToolkitGroup {
  name: string;
  items: ToolItem[];
}

export const iconColors: Record<string, string> = {
  'simple-icons:astro': 'text-orange-400',
  'simple-icons:tailwindcss': 'text-cyan-400',
  'simple-icons:react': 'text-sky-400',
  'simple-icons:powerbi': 'text-yellow-400',
  'simple-icons:typescript': 'text-blue-400',
  'simple-icons:nodedotjs': 'text-green-500',
  'simple-icons:express': 'text-white/50',
  'simple-icons:postman': 'text-orange-500',
  'simple-icons:figma': 'text-pink-400',
  'simple-icons:css3': 'text-sky-400',
  'simple-icons:javascript': 'text-yellow-400',
  'simple-icons:nuxtdotjs': 'text-green-400',
  'simple-icons:mysql': 'text-blue-400',
  'simple-icons:php': 'text-indigo-400',
  'simple-icons:laravel': 'text-red-400',
  'simple-icons:html5': 'text-orange-500',
  'simple-icons:svelte': 'text-orange-500',
  'simple-icons:vuedotjs': 'text-emerald-400',
  'simple-icons:docker': 'text-sky-400',
  'simple-icons:playwright': 'text-lime-400',
  'simple-icons:postgresql': 'text-indigo-400',
  'simple-icons:githubactions': 'text-gray-400',
  'simple-icons:nextdotjs': 'text-white/60',
  'simple-icons:python': 'text-yellow-400',
};

const toolkit: readonly ToolItem[] = [
  { name: 'Astro', icon: 'simple-icons:astro', color: 'from-orange-400 to-pink-500' },
  { name: 'React', icon: 'simple-icons:react', color: 'from-sky-400 to-cyan-300' },
  { name: 'Vue.js', icon: 'simple-icons:vuedotjs', color: 'from-emerald-400 to-green-400' },
  { name: 'Svelte', icon: 'simple-icons:svelte', color: 'from-orange-500 to-red-400' },
  { name: 'TypeScript', icon: 'simple-icons:typescript', color: 'from-blue-500 to-indigo-400' },
  { name: 'JavaScript', icon: 'simple-icons:javascript', color: 'from-yellow-400 to-amber-500' },
  { name: 'HTML5', icon: 'simple-icons:html5', color: 'from-orange-500 to-red-500' },
  { name: 'CSS3', icon: 'simple-icons:css3', color: 'from-sky-400 to-blue-500' },
  { name: 'Tailwind', icon: 'simple-icons:tailwindcss', color: 'from-teal-400 to-cyan-400' },
  { name: 'PHP', icon: 'simple-icons:php', color: 'from-indigo-400 to-purple-500' },
  { name: 'Laravel', icon: 'simple-icons:laravel', color: 'from-red-500 to-rose-500' },
  { name: 'Next.js', icon: 'simple-icons:nextdotjs', color: 'from-pink-400 to-rose-400' },
  { name: 'Nuxt', icon: 'simple-icons:nuxtdotjs', color: 'from-green-400 to-emerald-500' },
  { name: 'Node.js', icon: 'simple-icons:nodedotjs', color: 'from-green-500 to-emerald-600' },
  { name: 'MySQL', icon: 'simple-icons:mysql', color: 'from-blue-400 to-cyan-500' },
  { name: 'PostgreSQL', icon: 'simple-icons:postgresql', color: 'from-indigo-400 to-blue-500' },
  { name: 'Docker', icon: 'simple-icons:docker', color: 'from-sky-400 to-blue-500' },
  { name: 'Playwright', icon: 'simple-icons:playwright', color: 'from-lime-400 to-green-400' },
  { name: 'Figma', icon: 'simple-icons:figma', color: 'from-pink-400 to-purple-400' },
  { name: 'GitHub Actions', icon: 'simple-icons:githubactions', color: 'from-gray-400 to-slate-400' },
];

export const specialties: readonly Specialty[] = [
  {
    title: 'Landing Pages',
    desc: 'Conversión, velocidad, diseño.',
    gradient: 'from-violet-500/20 to-pink-500/10',
    glow: 'rgba(139,92,246,0.18)',
    icons: ['simple-icons:astro', 'simple-icons:tailwindcss', 'simple-icons:react'],
    preview: 'hero',
  },
  {
    title: 'Dashboards',
    desc: 'Datos en tiempo real, claros.',
    gradient: 'from-cyan-500/20 to-blue-500/10',
    glow: 'rgba(6,182,212,0.18)',
    icons: ['simple-icons:powerbi', 'simple-icons:typescript', 'simple-icons:react'],
    preview: 'chart',
  },
  {
    title: 'Integraciones',
    desc: 'APIs, webhooks, automatización.',
    gradient: 'from-amber-500/20 to-orange-500/10',
    glow: 'rgba(251,146,60,0.18)',
    icons: ['simple-icons:nodedotjs', 'simple-icons:express', 'simple-icons:postman'],
    preview: 'nodes',
  },
  {
    title: 'UI/UX & Animación',
    desc: 'Interacción viva, microdetalles.',
    gradient: 'from-pink-500/20 to-rose-500/10',
    glow: 'rgba(236,72,153,0.18)',
    icons: ['simple-icons:figma', 'simple-icons:css3', 'simple-icons:javascript'],
    preview: 'layers',
  },
];

export const workflow: readonly WorkflowStep[] = [
  { step: '01', label: 'Ideación', icon: 'heroicons:light-bulb', desc: 'Brief, referencias, objetivos claros.' },
  { step: '02', label: 'Diseño', icon: 'heroicons:paint-brush', desc: 'Wireframes, UI, prototipo interactivo.' },
  { step: '03', label: 'Desarrollo', icon: 'heroicons:code-bracket', desc: 'Componentes, APIs, integraciones.' },
  { step: '04', label: 'Lanzamiento', icon: 'heroicons:rocket-launch', desc: 'Deploy, testing, monitoreo.' },
];

export const toolkitGroups: readonly ToolkitGroup[] = [
  {
    name: 'Lenguajes',
    items: [
      { name: 'TypeScript', icon: 'simple-icons:typescript', color: 'from-blue-500 to-indigo-400' },
      { name: 'JavaScript', icon: 'simple-icons:javascript', color: 'from-yellow-400 to-amber-500' },
      { name: 'Python', icon: 'simple-icons:python', color: 'from-yellow-400 to-blue-500' },
      { name: 'PHP', icon: 'simple-icons:php', color: 'from-indigo-400 to-purple-500' },
      { name: 'HTML5', icon: 'simple-icons:html5', color: 'from-orange-500 to-red-500' },
      { name: 'CSS3', icon: 'simple-icons:css3', color: 'from-sky-400 to-blue-500' },
    ],
  },
  {
    name: 'Frameworks',
    items: [
      { name: 'Astro', icon: 'simple-icons:astro', color: 'from-orange-400 to-pink-500' },
      { name: 'React', icon: 'simple-icons:react', color: 'from-sky-400 to-cyan-300' },
      { name: 'Vue.js', icon: 'simple-icons:vuedotjs', color: 'from-emerald-400 to-green-400' },
      { name: 'Svelte', icon: 'simple-icons:svelte', color: 'from-orange-500 to-red-400' },
      { name: 'Next.js', icon: 'simple-icons:nextdotjs', color: 'from-pink-400 to-rose-400' },
      { name: 'Nuxt', icon: 'simple-icons:nuxtdotjs', color: 'from-green-400 to-emerald-500' },
      { name: 'Laravel', icon: 'simple-icons:laravel', color: 'from-red-500 to-rose-500' },
      { name: 'Tailwind', icon: 'simple-icons:tailwindcss', color: 'from-teal-400 to-cyan-400' },
      { name: 'Express', icon: 'simple-icons:express', color: 'from-gray-400 to-slate-400' },
    ],
  },
  {
    name: 'Backend & DevOps',
    items: [
      { name: 'Node.js', icon: 'simple-icons:nodedotjs', color: 'from-green-500 to-emerald-600' },
      { name: 'Python', icon: 'simple-icons:python', color: 'from-yellow-400 to-blue-500' },
      { name: 'MySQL', icon: 'simple-icons:mysql', color: 'from-blue-400 to-cyan-500' },
      { name: 'PostgreSQL', icon: 'simple-icons:postgresql', color: 'from-indigo-400 to-blue-500' },
      { name: 'Docker', icon: 'simple-icons:docker', color: 'from-sky-400 to-blue-500' },
      { name: 'GitHub Actions', icon: 'simple-icons:githubactions', color: 'from-gray-400 to-slate-400' },
    ],
  },
  {
    name: 'Testing & Diseño',
    items: [
      { name: 'Playwright', icon: 'simple-icons:playwright', color: 'from-lime-400 to-green-400' },
      { name: 'Figma', icon: 'simple-icons:figma', color: 'from-pink-400 to-purple-400' },
      { name: 'Postman', icon: 'simple-icons:postman', color: 'from-orange-500 to-red-400' },
    ],
  },
];
