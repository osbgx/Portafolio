export interface SocialLink {
  href: string;
  label: string;
  icon: string;
}

export const contactInfo = {
  email: 'osbgx.dev@gmail.com',
  linkedin: 'https://www.linkedin.com/in/osbgx/',
  github: 'https://github.com/osbgx',
  instagram: 'https://www.instagram.com/osbgx.dev/',
  x: 'https://x.com/osbgxdev',
  xHandle: '@osbgxdev',
  whatsapp: '595962229710',
} as const;

export const socialLinks: readonly SocialLink[] = [
  { href: contactInfo.linkedin, label: 'LinkedIn', icon: 'simple-icons:linkedin' },
  { href: contactInfo.github, label: 'GitHub', icon: 'simple-icons:github' },
  { href: contactInfo.instagram, label: 'Instagram', icon: 'simple-icons:instagram' },
  { href: contactInfo.x, label: 'X', icon: 'simple-icons:x' },
  { href: `mailto:${contactInfo.email}`, label: 'Email', icon: 'heroicons:envelope' },
  { href: `https://wa.me/${contactInfo.whatsapp}`, label: 'WhatsApp', icon: 'simple-icons:whatsapp' },
];
