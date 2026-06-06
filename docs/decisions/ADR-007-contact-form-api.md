# ADR-007 -- Formularios con API externa

## Estado
Reemplazado por Web3Forms (actualizado 2026-06)

## Contexto
Formulario de contacto sin backend propio ni API Routes de Astro.

## Decisión
Usar **Web3Forms** como proveedor de formularios.

- Access key desde `import.meta.env.PUBLIC_WEB3FORMS_ACCESS_KEY`
- POST nativo (`method="POST"`, `action` = `https://api.web3forms.com/submit`)
- Honeypot antispam (`name="botcheck"`)
- Componentes reutilizables: `FormInput`, `FormTextarea`

## Justificación
- Integración mínima compatible con SSG
- Sin JavaScript de envío ni estado en cliente
- Configurable por entorno sin tocar código

## Consecuencias
- Documentación: [`docs/runbooks/contact-form.md`](../runbooks/contact-form.md)
- La access key se expone en HTML (pública por diseño del proveedor)
- Configurar `PUBLIC_WEB3FORMS_ACCESS_KEY` en `.env` y GitHub Actions Secrets
