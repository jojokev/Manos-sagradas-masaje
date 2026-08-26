# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Turistas y residentes de Cusco por igual. Los turistas suelen buscar el spa para relajarse antes o después de actividades de altura/trekking (p. ej. Machu Picchu) y valoran encontrar el local fácilmente y reservar por WhatsApp; los locales buscan masajes terapéuticos recurrentes.

## Product Purpose

Sitio web de "Manos Sagradas Masajes", un spa de masajes en Cusco, Perú. El sitio existe para dar a conocer el negocio, transmitir confianza y facilitar la reserva de citas por WhatsApp.

## Positioning

Atención personalizada y trato cercano, no la tradición andina. El competidor dominante del rubro en Cusco (Andina Spa, ~19 años, junto a la Plaza de Armas) ya es dueño del mensaje "ancestral andino/inca" y lo repite en todo su sitio; competir ahí sería pelear en su terreno. Manos Sagradas se diferencia por ser un espacio pequeño y personal: sesiones adaptadas a cada persona, contacto directo con la terapeuta por WhatsApp (no un flujo de compra impersonal tipo carrito), y un ambiente pensado para "detener el ruido" — ver `## Brand Commitments` para la descripción exacta del dueño.

## Operating Context

- Local físico: Plazoleta Belén N.º 1082-A, Tercer piso, Of. 301, Cusco, Perú, 08001.
- Reservas y contacto principal por WhatsApp: +51 907 529 233.
- Presencia en redes: Facebook (https://www.facebook.com/ManosSagradasMasajes/), Instagram (https://www.instagram.com/manossagradasmasajes/) y TikTok (https://www.tiktok.com/@manossagradasmasajes).
- La navegación del sitio (Header.astro) ya referencia secciones `#nosotros`, `#servicios`, `#contactanos`, `#galeria` que todavía no existen en `index.astro` — son la construcción pendiente inmediata.

## Capabilities and Constraints

- Astro + Tailwind CSS v4 (vía `@tailwindcss/vite`); Sass solo para lo que Tailwind no cubra (valores puntuales, transiciones/animaciones complejas).
- Swiper ya integrado y en uso en el Hero (slider a pantalla completa con fade).
- Sitio de una sola página (landing) con navegación por anclas, más páginas de detalle por servicio (`/servicios/[slug]`).
- Catálogo de servicios confirmado por el dueño (7 terapias, texto oficial recibido 2026-08-26, contenido estructurado como content collection en `src/content/servicios/*.md`, esquema en `src/content.config.ts`, página de detalle en `src/pages/servicios/[slug].astro`):
  1. **Relajante** — "Tu pausa sagrada para resetear". Movimientos suaves que calman mente y cuerpo, liberan estrés y ansiedad, y ayudan a dormir mejor. Ideal para desconectar del día a día.
  2. **Descontracturante** — "Libera lo que cargas en la espalda". Presión profunda en cuello, hombros y espalda; suelta nudos y rigidez. Ideal para trabajo de oficina y uso prolongado del celular.
  3. **Terapéutico** — "Alivio con manos que sanan". Enfocado en dolores específicos (lumbar, cervical, piernas); recupera movilidad. Ideal para molestias puntuales.
  4. **Drenaje linfático** — "Desinflámate y reactívate". Toques suaves que activan el sistema linfático y la circulación; reduce líquidos y desinflama. Ideal para piernas hinchadas y post-operatorios.
  5. **Reflexología podal** — "Todo tu cuerpo empieza en tus pies". Estimula puntos de los pies conectados con todo el cuerpo; equilibra órganos y alivia el estrés desde la base. Ideal para estar mucho tiempo de pie o buscar relajación profunda.
  6. **Piedras calientes** — "El calor que derrite la tensión". Piedras volcánicas tibias + masaje; alivio profundo en contracturas fuertes. Ideal para contracturas fuertes y una experiencia premium.
  7. **Prenatal** — "Cuidarte a ti mientras cuidas a tu bebé". Técnicas seguras y cómodas para aliviar espalda, piernas y estrés del embarazo. Ideal para embarazadas que necesitan un momento para sí mismas.

  Precios y duraciones exactas siguen sin confirmar por el dueño — las duraciones que aparecen hoy en `Servicios.astro` son provisionales, no inventar cifras nuevas sin confirmación.
- Hay 3 imágenes reales disponibles (`src/assets/images/manos sagradas masajes 01.webp`, `02.webp`, `03.webp`): piedras calientes, descontracturante de cuello/hombros, y relajante facial. Los otros 4 servicios (terapéutico, drenaje linfático, reflexología podal, prenatal) no tienen foto propia todavía; el comentario en Hero.astro indica que se necesitan más fotos para el slider final.
- `scrap/Andina Spa - Andina Spa.html` es una copia guardada del sitio del competidor dominante (andinaspa.com) — es investigación de mercado, nunca fuente de contenido propio. Confirma que el mercado de Cusco muestra precios en USD, horario visible, y usa la narrativa "ancestral andina/inca" fuertemente.

## Brand Commitments

- Descripción/voz oficial, escrita por el dueño del negocio (usar como fuente de verdad para copy, no reformular libremente):

  > MANOS SAGRADAS MASAJES — El alivio que tu cuerpo estaba esperando.
  > En Manos Sagradas creamos un espacio pensado para ti. Un lugar para detener el ruido, soltar el estrés y regalarte un momento de cuidado personal.
  > Ofrecemos masajes relajantes, descontracturantes, terapéuticos, drenaje linfático, reflexología podal, piedras calientes y prenatal.
  > Cada sesión es personalizada, en un ambiente tranquilo, cómodo y diseñado para tu bienestar.
  > Nuestro compromiso es que cada visita sea una experiencia de relajación, alivio y renovación.
  > Porque cuando cuidas de ti, todo fluye mejor.

- Nombre: "Manos Sagradas Masajes".
- Idioma: español (si llega contenido en inglés, traducir a español nativo).
- Logo: `src/assets/icons/Logo_manos_sagradas.webp`.
- Paleta de marca ya definida en `src/global.css` (marrón chocolate/dorado/crema, ver `## Paleta de colores` en AGENTS.md) — es autoridad visual existente, no un punto de partida en blanco.
- Tipografía ya en uso: Inter (display y sans, una sola familia), cargada en `Layout.astro`.

## Evidence on Hand

- 2 fotos reales de masaje con piedras calientes (ver rutas arriba). No hay más fotos de instalaciones, terapeutas, u otros servicios todavía — no fabricar imágenes de stock que aparenten ser del local real; usar lo disponible o dejar el espacio señalado como pendiente.
- No hay testimonios, precios ni certificaciones documentadas todavía.

## Product Principles

1. Cercanía por sobre escala: frente a un competidor grande y establecido, Manos Sagradas gana siendo personal — trato directo, sesiones adaptadas a cada persona, nunca un flujo impersonal.
2. Reserva sin fricción: el camino a WhatsApp debe estar siempre a un clic, para turistas de paso y locales recurrentes por igual.
3. "Detener el ruido": el sitio debe transmitir calma y cuidado personal, no bullicio ni ostentación — es la propia voz del dueño.
4. No inventar contenido factual (precios, testimonios, certificaciones) — señalar como pendiente cuando falte evidencia real.
