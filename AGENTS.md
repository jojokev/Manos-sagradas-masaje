## Contexto del proyecto

- El proyecto es una página web para el negocio de masajes "Manos Sagradas Masajes".
- El proyecto usa Sass (ya instalado) y Swiper.
- Dirección: Plazoleta Belén N.º 1082-A, Tercer piso, Of. 301, Cusco, Peru, 08001.
- Teléfono y WhatsApp: +51 907 529 233.
- Página de Facebook: https://www.facebook.com/ManosSagradasMasajes/
- Instagram: https://www.instagram.com/manossagradasmasajes/
- TikTok: https://www.tiktok.com/@manossagradasmasajes
- Horario de atención: lunes a sábado, 9:00 a.m. – 6:00 p.m. Domingo cerrado.

## Servicios

Texto oficial "Elige tu momento sagrado", 7 terapias (contenido estructurado en `src/content/servicios/*.md`, esquema en `src/content.config.ts`; cada terapia tiene su página en `/servicios/[slug]`):

1. **Relajante** — Tu pausa sagrada para resetear. Movimientos suaves que calman mente y cuerpo, liberan estrés y ansiedad, y ayudan a dormir mejor. Ideal para: desconectar del día a día.
2. **Descontracturante** — Libera lo que cargas en la espalda. Presión profunda en cuello, hombros y espalda; suelta nudos y rigidez. Ideal para: trabajo de oficina y uso prolongado del celular.
3. **Terapéutico** — Alivio con manos que sanan. Enfocado en dolores específicos (lumbar, cervical, piernas); recupera movilidad. Ideal para: molestias puntuales.
4. **Drenaje linfático** — Desinflámate y reactívate. Toques suaves que activan el sistema linfático y la circulación; reduce líquidos y desinflama. Ideal para: piernas hinchadas y post-operatorios.
5. **Reflexología podal** — Todo tu cuerpo empieza en tus pies. Estimula puntos de los pies conectados con todo el cuerpo; equilibra órganos y alivia el estrés desde la base. Ideal para: estar mucho tiempo de pie o buscar relajación profunda.
6. **Piedras calientes** — El calor que derrite la tensión. Piedras volcánicas tibias + masaje; alivio profundo en contracturas fuertes. Ideal para: contracturas fuertes y una experiencia premium.
7. **Prenatal** — Cuidarte a ti mientras cuidas a tu bebé. Técnicas seguras y cómodas para aliviar espalda, piernas y estrés del embarazo. Ideal para: embarazadas que necesitan un momento para sí mismas.

Frase de cierre de marca: *"Porque cuando cuidas de ti, todo fluye mejor."*

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
