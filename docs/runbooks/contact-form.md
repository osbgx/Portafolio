# Runbook: Formulario de Contacto

## Proveedor

- **Backend**: Web3Forms (POST nativo del navegador)
- **Endpoint**: `https://api.web3forms.com/submit`
- **Access key**: Enviada como hidden field `access_key`

## Configuración

1. Crear formulario en [Web3Forms](https://web3forms.com) y copiar la access key.
2. Crear (o editar) `.env` en la raíz del proyecto:

```env
PUBLIC_WEB3FORMS_ACCESS_KEY=tu-access-key-aqui
```

3. En GitHub Actions, configurar el secret `PUBLIC_WEB3FORMS_ACCESS_KEY` en **Settings → Secrets and variables → Actions**.

## Cómo funciona

- El formulario hace un POST directo a `https://api.web3forms.com/submit`
- La access key viaja como `input hidden` (pública por diseño del proveedor)
- Hay un campo honeypot oculto (`name="botcheck"`) para prevenir spam
- Tras submit exitoso, Web3Forms redirige a una página de confirmación
- Los emails se entregan a la dirección configurada en el panel de Web3Forms

## Verificación en producción

1. Abrir la página `/contact`
2. Llenar y enviar el formulario
3. Verificar que llega el email a la bandeja configurada
4. Verificar que el honeypot no causa falsos positivos
