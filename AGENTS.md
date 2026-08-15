## Contexto del proyecto

- El proyecto es una página web para el negocio de masajes "Manos Sagradas Masajes".
- El proyecto usa Sass (ya instalado) y Swiper.
- Dirección: Plazoleta Belén N.º 1082-A, Tercer piso, Of. 301, Cusco, Peru, 08001.
- Teléfono y WhatsApp: +51 907 529 233.
- Página de Facebook: https://www.facebook.com/ManosSagradasMasajes/

## Idioma

- El idioma del proyecto es español.
- Si se recibe información en inglés, traducirla al español nativo.

## Paleta de colores

Definida en `src/global.css` con `@theme` de Tailwind v4, disponible como clases Tailwind (`bg-primary`, `text-gold`, `border-sage`, etc.):

- Brand: `primary` #4A2F24 (marrón chocolate), `primary-light` #70513D (café cálido), `primary-dark` #352019 (marrón profundo)
- Accent: `gold` #B58A4A (dorado), `gold-light` #D6B982 (champagne), `gold-dark` #8F6935 (dorado oscuro)
- Backgrounds: `background` #F7F1E7 (crema principal), `background-alt` #E8DCCB (beige), `surface` #FFFDF9 (blanco cálido)
- Text: `text` #30231D (marrón oscuro), `text-muted` #705F53 (texto secundario)
- Nature: `sage` #7A8065 (verde salvia), `sage-light` #A5AA91
- Status: `success` #687A5A

## Convenciones de código

**Scripts**

- No ejecutar los script, eso se realiza manualmente.

**Comentarios**

- Usar `#` como separador en comentarios generados, nunca `-`, `_` u otros caracteres similares.

**Estilos**

- Usar siempre clases de Tailwind.
- Usar `scss` solo cuando Tailwind no sea suficiente: valores específicos (`px`, `rem`, etc.), transiciones complejas o animaciones.

**Breakpoints**

- Para todo diseño responsive nuevo usar los breakpoints de Tailwind (definidos como variables Sass en `src/main.scss`: `$bp-sm`, `$bp-md`, `$bp-lg`, `$bp-xl`, `$bp-2xl`):
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px
  - `2xl`: 1536px
