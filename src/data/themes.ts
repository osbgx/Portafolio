export interface HeaderTheme {
  logo: string;
  cta: string;
  mobileCta: string;
  font: string;
  border: string;
}

export interface FooterTheme {
  logo: string;
  hover: string;
  border: string;
  font: string;
}

export const headerThemes: Record<string, HeaderTheme> = {
  home: {
    logo: 'bg-hero/10 border-hero/20 text-hero group-hover:bg-hero/20 rounded-xl',
    cta: 'bg-hero hover:bg-hero/90 text-carbon hover:shadow-lg hover:shadow-hero/20 rounded-xl',
    mobileCta: 'bg-hero hover:bg-hero/90 text-carbon rounded-xl',
    font: '',
    border: 'border-white/5',
  },
  data: {
    logo: 'bg-hylian/10 border-hylian/20 text-hylian group-hover:bg-hylian/20 rounded-sm',
    cta: 'bg-hylian hover:bg-hylian/90 text-carbon hover:shadow-lg hover:shadow-hylian/20 rounded-md',
    mobileCta: 'bg-hylian hover:bg-hylian/90 text-carbon rounded-md',
    font: 'font-jetbrains-mono',
    border: 'border-hylian/10',
  },
  consulting: {
    logo: 'bg-hero/10 border-hero/20 text-hero group-hover:bg-hero/20 rounded-md',
    cta: 'bg-hero hover:bg-hero/90 text-carbon hover:shadow-lg hover:shadow-hero/20 rounded-md',
    mobileCta: 'bg-hero hover:bg-hero/90 text-carbon rounded-md',
    font: 'font-ibm-plex-sans',
    border: 'border-hero/10',
  },
  web: {
    logo: 'bg-gradient-to-br from-hylian/15 to-cyan-500/15 border-hylian/20 text-hylian group-hover:from-hylian/25 group-hover:to-cyan-500/25 rounded-xl',
    cta: 'bg-gradient-to-r from-hylian to-cyan-500 hover:from-hylian/90 hover:to-cyan-500/90 text-carbon hover:shadow-lg hover:shadow-hylian/20 rounded-xl',
    mobileCta: 'bg-gradient-to-r from-hylian to-cyan-500 text-carbon rounded-xl',
    font: 'font-sora',
    border: 'border-white/5',
  },
  mobile: {
    logo: 'bg-gradient-to-br from-purple-500/15 to-teal-500/15 border-purple-400/20 text-purple-300 group-hover:from-purple-500/25 group-hover:to-teal-500/25 rounded-2xl',
    cta: 'bg-gradient-to-r from-purple-500 to-teal-500 hover:from-purple-500/90 hover:to-teal-500/90 text-white hover:shadow-lg hover:shadow-purple-500/20 rounded-xl',
    mobileCta: 'bg-gradient-to-r from-purple-500 to-teal-500 text-white rounded-xl',
    font: 'font-sora',
    border: 'border-white/5',
  },
  about: {
    logo: 'bg-[#d4a030]/15 border-[#d4a030]/30 text-[#d4a030] group-hover:bg-[#d4a030]/25 rounded-none',
    cta: 'bg-[#d4a030] hover:bg-transparent text-[#140e08] hover:text-[#d4a030] font-pixel text-[9px] rounded-none border-2 border-[#d4a030]',
    mobileCta: 'bg-[#d4a030] text-[#140e08] font-pixel text-[9px] rounded-none border-2 border-[#d4a030]',
    font: 'font-pixel',
    border: 'border-[#2a1a0a]',
  },
  default: {
    logo: 'bg-hylian/10 border-hylian/20 text-hylian group-hover:bg-hylian/20 rounded-lg',
    cta: 'bg-hylian hover:bg-hylian/90 text-carbon hover:shadow-lg hover:shadow-hylian/20 rounded-lg',
    mobileCta: 'bg-hylian hover:bg-hylian/90 text-carbon rounded-lg',
    font: '',
    border: 'border-white/5',
  },
};

export const footerThemes: Record<string, FooterTheme> = {
  home: {
    logo: 'text-hero',
    hover: 'hover:text-hero',
    border: 'border-hero/5',
    font: '',
  },
  data: {
    logo: 'text-hylian',
    hover: 'hover:text-hylian',
    border: 'border-hylian/5',
    font: 'font-jetbrains-mono',
  },
  consulting: {
    logo: 'text-hero',
    hover: 'hover:text-hero',
    border: 'border-hero/5',
    font: 'font-ibm-plex-sans',
  },
  web: {
    logo: 'text-transparent bg-clip-text bg-gradient-to-r from-hylian to-cyan-400',
    hover: 'hover:text-hylian hover:opacity-80',
    border: 'border-hylian/5',
    font: 'font-sora',
  },
  mobile: {
    logo: 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400',
    hover: 'hover:text-purple-300',
    border: 'border-purple-400/20',
    font: 'font-sora',
  },
  about: {
    logo: 'text-[#d4a030]',
    hover: 'hover:text-[#d4a030]',
    border: 'border-[#2a1a0a]',
    font: 'font-pixel text-[9px]',
  },
  default: {
    logo: 'text-hylian',
    hover: 'hover:text-hylian',
    border: 'border-white/5',
    font: '',
  },
};

export const dockColors: Record<string, string> = {
  home: '#D4AF37',
  data: '#3FAF6C',
  consulting: '#D4AF37',
  web: '#3FAF6C',
  mobile: '#3FAF6C',
  about: '#d4a030',
  default: '#3FAF6C',
};
