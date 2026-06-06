import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

// Detecta si estamos en GitHub Actions
const [owner, repo] = (process.env.GITHUB_REPOSITORY || '').split('/');

// Si estamos en GitHub Actions y NO es un User/Org Page (osbgx.github.io),
// entonces es un Project Page → necesita /Portafolio/
const isGitHubProjectPage =
  process.env.GITHUB_ACTIONS === 'true' &&
  repo &&
  repo !== `${owner}.github.io`;

// Si usamos dominio custom, forzamos base = "/"
const usingCustomDomain = true;

// Base final
const base = usingCustomDomain
  ? '/'
  : isGitHubProjectPage
    ? `/${repo}/`
    : '/';

export default defineConfig({
  site: 'https://osbgx.dev',
  base,
  compressHTML: true,
  build: {
    inlineStylesheets: 'always',
  },
  integrations: [icon({ include: {
    local: ['sql'],
    simple: ['android', 'androidstudio', 'apachesuperset', 'astro', 'bootstrap', 'budibase', 'c', 'cplusplus', 'csharp', 'css3', 'django', 'docker', 'dotnet', 'express', 'fastapi', 'figma', 'firebase', 'flask', 'flutter', 'git', 'github', 'githubactions', 'gnubash', 'go', 'gradle', 'html5', 'instagram', 'java', 'javascript', 'jest', 'jetpackcompose', 'junit5', 'kotlin', 'kubernetes', 'laravel', 'linkedin', 'linux', 'metabase', 'microsoftsqlserver', 'mongodb', 'mysql', 'n8n', 'nextdotjs', 'nginx', 'nodedotjs', 'nuxtdotjs', 'openjdk', 'php', 'playwright', 'postgresql', 'postman', 'powerapps', 'powerautomate', 'powerbi', 'powershell', 'pytest', 'python', 'r', 'react', 'redis', 'rust', 'snowflake', 'sqlite', 'supabase', 'svelte', 'swift', 'tailwindcss', 'terraform', 'typescript', 'ubuntu', 'visualstudiocode', 'vite', 'vitest', 'vuedotjs', 'whatsapp', 'x'],
    heroicons: ['academic-cap', 'arrow-path', 'arrow-path-rounded-square', 'arrow-right', 'arrow-up-circle', 'arrows-right-left', 'bell', 'bolt', 'briefcase', 'bug-ant', 'building-library', 'chart-bar', 'chart-bar-square', 'chat-bubble-left', 'check-circle', 'chevron-double-down', 'chevron-down', 'chevron-left', 'chevron-right', 'circle-stack', 'clipboard-document-list', 'clock', 'code-bracket', 'cog', 'cog-6-tooth', 'command-line', 'cpu-chip', 'currency-dollar', 'device-phone-mobile', 'document-text', 'ellipsis-horizontal', 'envelope', 'finger-print', 'folder', 'heart', 'home', 'light-bulb', 'lock-closed', 'magnifying-glass', 'paint-brush', 'photo', 'play', 'plus', 'puzzle-piece', 'rectangle-group', 'rocket-launch', 'server', 'server-stack', 'share', 'shopping-bag', 'sparkles', 'square-2-stack', 'star', 'sun', 'truck', 'users', 'wrench-screwdriver'],
  } }), tailwind(), sitemap()],
});
