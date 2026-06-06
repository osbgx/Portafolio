# Wireframe: Contacto (`/contact`)

**Layout:** `ContactLayout` · **Tema:** `home` · **Fuente:** Inter

## Objetivo
Formulario simple para consultas profesionales.

## Estructura (implementación actual)

### 1. Sección única
- `SectionTitle` nivel h1: "Contacto" + descripción
- Formulario centrado `max-w-3xl`

### 2. Formulario
| Campo | Implementado |
|---|---|
| Nombre | Sí (`name`) |
| Email | Sí (`email`) |
| Asunto | **No** |
| Mensaje | Sí (`message`) |

- Componentes: `FormInput`, `FormTextarea`
- `action`: `https://api.web3forms.com/submit`
- `access_key`: vía `PUBLIC_WEB3FORMS_ACCESS_KEY`
- `method="POST"` nativo
- Honeypot antispam (`name="botcheck"`)
- Botón submit ámbar ancho completo

### 3. Estados UI
- Validación HTML5 (`required`)
- Envío AJAX con estados enviando ✅ / error ❌
- Copy-to-clipboard del email
- Umami tracking events

## No implementado en página
- Bloque lateral email/redes (ya en Footer y SocialDock)
- Hero aparte
- Campo asunto

## Configuración
Ver [runbook contact-form](../runbooks/contact-form.md).
