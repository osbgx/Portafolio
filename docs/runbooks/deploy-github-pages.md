# Runbook — Deploy en GitHub Pages

## Objetivo
Desplegar el sitio estático en GitHub Pages con GitHub Actions.

## Requisitos

- Repositorio en GitHub con Pages habilitado (origen: GitHub Actions).
- Rama `main` como trigger del workflow.

## Configuración de Astro

En `astro.config.mjs`:

```js
export default defineConfig({
  site: 'https://osbgx.dev',
  // base se calcula automáticamente en CI según el tipo de repo
});
```

El `base` se determina dinámicamente en `astro.config.mjs`:

```js
const isGitHubProjectPage = Boolean(process.env.GITHUB_ACTIONS && repo && repo !== `${owner}.github.io`);
const base = process.env.BASE_PATH || (isGitHubProjectPage ? `/${repo}` : '/');
```

No es necesario pasar `--base` en CI. El workflow lo maneja automáticamente.

## Workflow

Archivo: `.github/workflows/deploy.yml`

Flujo:

1. Job **Build:** `npm ci` → `npm run build` → artifact `dist/`
2. Job **Deploy:** `actions/deploy-pages@v4` al environment `github-pages`

No se usa la rama `gh-pages`; el deploy es por artifact.

## Deploy manual

En GitHub: **Actions** → **Deploy to GitHub Pages** → **Run workflow**.

## Variables de entorno en CI

- `PUBLIC_WEB3FORMS_ACCESS_KEY`: configurar como secret si se usa Web3Forms.
- `PUBLIC_UMAMI_WEBSITE_ID`: configurar como variable de Actions si se usa Umami.
- `PUBLIC_UMAMI_SRC`: queda definido en el workflow como `https://cloud.umami.is/script.js`; no necesita secret.

## Debug

- Revisar logs del job Build si falla `npm run build`.
- Comprobar que los assets usen rutas compatibles con `base` en producción.
- Verificar en Settings que Pages apunte a GitHub Actions, no a una rama estática antigua.
