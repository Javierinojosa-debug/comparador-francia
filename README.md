# Comparateur Élec & Gaz — Francia

Landing de llamadas para Francia, copia adaptada de `comparaluzygas` (España).
HTML estático + Vite, publicada en **Netlify**.

## Publicar en Netlify

1. *Add new site* → *Import an existing project* → GitHub → este repo.
2. Build command y publish directory se leen solos de `netlify.toml` (`npm run build` → `dist`).
3. *Domain management* → *Add custom domain* con el dominio definitivo.

Las páginas legales se sirven sin `.html` (`/mentions-legales`, `/politique-de-confidentialite`, `/politique-cookies`); Netlify lo hace por defecto.

## Marcadores pendientes

Sustituir en todos los `.html` antes de publicar:

| Marcador | Qué es | Dónde |
|---|---|---|
| `+33XXXXXXXXX` | Teléfono en formato `tel:` | `href` de todos los botones |
| `01 XX XX XX XX` | Teléfono visible | botones, cabecera y footer |
| `votre-domaine.fr` | Dominio | `og:url`, JSON-LD, mentions légales |
| `GTM-XXXXXXX` | Contenedor GTM de Francia | `<head>` y `<noscript>` de las 4 páginas |
| `+34 XXX XXX XXX` | Teléfono del editor (obligatorio por la LCEN) | `mentions-legales.html` |

Sustitución rápida (ejemplo):

```bash
grep -rl --include=*.html 'XX' . | xargs sed -i \
  -e 's/+33XXXXXXXXX/+33123456789/g' \
  -e 's/01 XX XX XX XX/01 23 45 67 89/g' \
  -e 's/votre-domaine.fr/midominio.fr/g' \
  -e 's/GTM-XXXXXXX/GTM-ABCD123/g'
```

## Configuración fuera del código (CNIL)

- **Cookiebot**: dar de alta el dominio, banner en francés con botón «Tout refuser» al mismo nivel que «Tout accepter» y renovación del consentimiento a **6 meses**.
- **GA4**: la CNIL limita las cookies de audiencia a **13 meses**; ajustar la caducidad de cookies (por defecto 2 años) a 13 meses.

## Personalización del H1

`?h1=Texte du titre&em=mot` cambia el titular y resalta `mot`. El texto se inserta como texto plano (sin HTML).
