export interface TechItem {
  name: string;
  icon: string;
  category: TechCategory;
  level: number;
}

export type TechCategory =
  | 'Lenguajes'
  | 'Frameworks'
  | 'Testing'
  | 'Data & Bases de Datos'
  | 'Herramientas'
  | 'DevOps & Cloud';

function byLevel(a: TechItem, b: TechItem) {
  return b.level - a.level;
}

export const techStack: TechItem[] = [
  { name: 'SQL', icon: 'local:sql', category: 'Lenguajes', level: 100 },
  { name: 'Python', icon: 'simple-icons:python', category: 'Lenguajes', level: 100 },
  { name: 'R', icon: 'simple-icons:r', category: 'Lenguajes', level: 100 },
  { name: 'HTML5', icon: 'simple-icons:html5', category: 'Lenguajes', level: 100 },
  { name: 'CSS3', icon: 'simple-icons:css3', category: 'Lenguajes', level: 100 },
  { name: 'Bash', icon: 'simple-icons:gnubash', category: 'Lenguajes', level: 80 },
  { name: 'JavaScript', icon: 'simple-icons:javascript', category: 'Lenguajes', level: 80 },
  { name: 'TypeScript', icon: 'simple-icons:typescript', category: 'Lenguajes', level: 80 },
  { name: 'PowerShell', icon: 'simple-icons:powershell', category: 'Lenguajes', level: 75 },
  { name: 'Kotlin', icon: 'simple-icons:kotlin', category: 'Lenguajes', level: 30 },
  { name: 'PHP', icon: 'simple-icons:php', category: 'Lenguajes', level: 15 },
  { name: 'Java', icon: 'simple-icons:openjdk', category: 'Lenguajes', level: 15 },
  { name: 'C', icon: 'simple-icons:c', category: 'Lenguajes', level: 15 },
  { name: 'C++', icon: 'simple-icons:cplusplus', category: 'Lenguajes', level: 15 },
  { name: 'GO', icon: 'simple-icons:go', category: 'Lenguajes', level: 0 },
  { name: 'Rust', icon: 'simple-icons:rust', category: 'Lenguajes', level: 0 },
  { name: 'C#', icon: 'simple-icons:csharp', category: 'Lenguajes', level: 0 },

  { name: 'FastAPI', icon: 'simple-icons:fastapi', category: 'Frameworks', level: 100 },
  { name: 'Flask', icon: 'simple-icons:flask', category: 'Frameworks', level: 80 },
  { name: 'Django', icon: 'simple-icons:django', category: 'Frameworks', level: 60 },
  { name: 'Astro', icon: 'simple-icons:astro', category: 'Frameworks', level: 100 },
  { name: 'Tailwind', icon: 'simple-icons:tailwindcss', category: 'Frameworks', level: 100 },
  { name: 'React', icon: 'simple-icons:react', category: 'Frameworks', level: 80 },
  { name: 'Node.js', icon: 'simple-icons:nodedotjs', category: 'Frameworks', level: 80 },
  { name: 'Next.js', icon: 'simple-icons:nextdotjs', category: 'Frameworks', level: 80 },
  { name: 'Nuxt.js', icon: 'simple-icons:nuxtdotjs', category: 'Frameworks', level: 60 },
  { name: 'Vue.js', icon: 'simple-icons:vuedotjs', category: 'Frameworks', level: 60 },
  { name: 'Express', icon: 'simple-icons:express', category: 'Frameworks', level: 30 },
  { name: 'Svelte', icon: 'simple-icons:svelte', category: 'Frameworks', level: 0 },


  { name: 'Bootstrap', icon: 'simple-icons:bootstrap', category: 'Frameworks', level: 100 },
  { name: 'Vite', icon: 'simple-icons:vite', category: 'Frameworks', level: 60 },
  { name: '.NET', icon: 'simple-icons:dotnet', category: 'Frameworks', level: 60 },

  { name: 'Pytest', icon: 'simple-icons:pytest', category: 'Testing', level: 80 },
  { name: 'Playwright', icon: 'simple-icons:playwright', category: 'Testing', level: 80 },
  { name: 'Jest', icon: 'simple-icons:jest', category: 'Testing', level: 30 },
  { name: 'Vitest', icon: 'simple-icons:vitest', category: 'Testing', level: 0 },
  { name: 'JUnit', icon: 'simple-icons:junit5', category: 'Testing', level: 0 },
 
  { name: 'MS SQL Server', icon: 'simple-icons:microsoftsqlserver', category: 'Data & Bases de Datos', level: 100 },
  { name: 'SQLite', icon: 'simple-icons:sqlite', category: 'Data & Bases de Datos', level: 100 },
  { name: 'PostgreSQL', icon: 'simple-icons:postgresql', category: 'Data & Bases de Datos', level: 100 },
  { name: 'MySQL', icon: 'simple-icons:mysql', category: 'Data & Bases de Datos', level: 100 },
  { name: 'Power BI', icon: 'simple-icons:powerbi', category: 'Data & Bases de Datos', level: 100 },
  { name: 'Apache Superset', icon: 'simple-icons:apachesuperset', category: 'Data & Bases de Datos', level: 100 },
  { name: 'Metabase', icon: 'simple-icons:metabase', category: 'Data & Bases de Datos', level: 60 },
  { name: 'Snowflake', icon: 'simple-icons:snowflake', category: 'Data & Bases de Datos', level: 30 },
  { name: 'MongoDB', icon: 'simple-icons:mongodb', category: 'Data & Bases de Datos', level: 30 },
  { name: 'Redis', icon: 'simple-icons:redis', category: 'Data & Bases de Datos', level: 0 },

  { name: 'Power Apps', icon: 'simple-icons:powerapps', category: 'Herramientas', level: 80 },
  { name: 'Power Automate', icon: 'simple-icons:powerautomate', category: 'Herramientas', level: 60 },
  { name: 'Git', icon: 'simple-icons:git', category: 'Herramientas', level: 80 },
  { name: 'GitHub', icon: 'simple-icons:github', category: 'Herramientas', level: 80 },
  { name: 'Docker', icon: 'simple-icons:docker', category: 'Herramientas', level: 80 },
  { name: 'Power Platform', icon: 'simple-icons:powerapps', category: 'Herramientas', level: 60 },
  { name: 'Figma', icon: 'simple-icons:figma', category: 'Herramientas', level: 30 },
  { name: 'Linux', icon: 'simple-icons:linux', category: 'Herramientas', level: 60 },
  { name: 'Ubuntu Server', icon: 'simple-icons:ubuntu', category: 'Herramientas', level: 60 },
  { name: 'Postman', icon: 'simple-icons:postman', category: 'Herramientas', level: 60 },
  { name: 'Nginx', icon: 'simple-icons:nginx', category: 'Herramientas', level: 60 },
  { name: 'VS Code', icon: 'simple-icons:visualstudiocode', category: 'Herramientas', level: 80 },
  

  { name: 'GitHub Actions', icon: 'simple-icons:githubactions', category: 'DevOps & Cloud', level: 60 },
  { name: 'Terraform', icon: 'simple-icons:terraform', category: 'DevOps & Cloud', level: 0 },
  { name: 'Kubernetes', icon: 'simple-icons:kubernetes', category: 'DevOps & Cloud', level: 0 },
].sort(byLevel);
