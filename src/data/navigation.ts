export interface NavLink {
  href: string;
  label: string;
}

export interface NavSection {
  type: 'link' | 'dropdown';
  label?: string;
  links?: NavLink[];
  href?: string;
}

export const mainNav: readonly NavSection[] = [
  { type: 'link', href: '/', label: 'Inicio' },
  {
    type: 'dropdown',
    label: 'Servicios',
    links: [
      { href: '/data', label: 'Data' },
      { href: '/consulting', label: 'Consultoría' },
      { href: '/web', label: 'Web' },
      { href: '/mobile', label: 'Móvil' },
    ],
  },
  { type: 'link', href: '/about', label: 'Sobre mí' },
  { type: 'link', href: '/blog', label: 'Blog' },
  { type: 'link', href: '/projects', label: 'Proyectos' },
];

export const footerNav: readonly NavLink[] = [
  { href: '/', label: 'Inicio' },
  { href: '/data', label: 'Data' },
  { href: '/consulting', label: 'Consultoría' },
  { href: '/web', label: 'Web' },
  { href: '/mobile', label: 'Móvil' },
  { href: '/about', label: 'Sobre mí' },
  { href: '/blog', label: 'Blog' },
  { href: '/projects', label: 'Proyectos' },
];
