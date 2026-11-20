# Comparateur Élec & Gaz — Francia

Landing de llamadas para Francia, copia adaptada de `comparaluzygas` (España).
HTML estático + Vite, publicada en **Netlify**.

## Publicar en Netlify

1. *Add new site* → *Import an existing project* → GitHub → este repo.
2. Build command y publish directory se leen solos de `netlify.toml` (`npm run build` → `dist`).
3. *Domain management* → *Add custom domain* con el dominio definitivo.

Las páginas legales se sirven sin `.html` (`/mentions-legales`, `/politique-de-confidentialite`, `/politique-cookies`); Netlify lo hace por defecto.

## Teléfonos (hoja de Selectra)
Número por defecto: grupo **12537**. Para otro grupo, añade `?n=<id>` a la URL final del anuncio:

| `?n=` | Lead source Zoho | Número |
|---|---|---|
| `12537` (defecto) | fr-ei-pa-javier12537 | 01 86 26 70 54 |
| `12538` | fr-ei-pa-javier12538 | 01 86 26 71 93 |
| `12539` | fr-ei-pa-javier12539 | 01 86 26 63 11 |

Google Ads: cuenta **Selectra FR - EnergyLine (974-844-9509)**, etiqueta AW-18582746442, GTM-PXTRXV2G.

## Marcadores pendientes

Sustituir en todos los `.html` antes de publicar:

| Marcador | Qué es | Dónde |
|---|---|---|
| `+33XXXXXXXXX` | Teléfono en formato `tel:` | `href` de todos los botones |
| `01 XX XX XX XX` | Teléfono visible | botones, cabecera y footer |
| `votre-domaine.fr` | Dominio | `og:url`, JSON-LD, mentions légales |
| ~~`GTM-XXXXXXX`~~ | Hecho: `GTM-PXTRXV2G` (contenedor energyline.fr) | — |

Sustitución rápida (ejemplo):

```bash
grep -rl --include=*.html 'XX' . | xargs sed -i \
  -e 's/+33XXXXXXXXX/+33123456789/g' \
  -e 's/01 XX XX XX XX/01 23 45 67 89/g' \
  -e 's/votre-domaine.fr/midominio.fr/g' \
  -e 's/GTM-XXXXXXX/GTM-ABCD123/g'
```

## Configuración fuera del código (CNIL)

- **Consentiam** (CMP del GTM): dar de alta el dominio, banner en francés con botón «Tout refuser» al mismo nivel que «Tout accepter» y renovación del consentimiento a **6 meses**.
- **GA4**: la CNIL limita las cookies de audiencia a **13 meses**; ajustar la caducidad de cookies (por defecto 2 años) a 13 meses.

## Personalización del H1

`?h1=Texte du titre&em=mot` cambia el titular y resalta `mot`. El texto se inserta como texto plano (sin HTML).
