---
name: Manos Sagradas Masajes
description: Spa de masajes en Cusco con atención personalizada, presentado como un santuario cálido y cercano.
colors:
  primary: "#4A2F24"
  primary-light: "#70513D"
  primary-dark: "#352019"
  gold: "#B58A4A"
  gold-light: "#D6B982"
  gold-dark: "#8F6935"
  background: "#F7F1E7"
  background-alt: "#E8DCCB"
  surface: "#FFFDF9"
  text: "#30231D"
  text-muted: "#705F53"
  sage: "#7A8065"
  sage-light: "#A5AA91"
  success: "#687A5A"
typography:
  display:
    fontFamily: "Playfair Display, ui-serif, Georgia, serif"
    fontWeight: 600
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontWeight: 400
rounded:
  sm: "1rem"
  md: "1.5rem"
  lg: "2rem"
  awning: "3rem"
  full: "9999px"
spacing:
  section-y: "5rem"
  section-y-lg: "7rem"
components:
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.surface}"
    rounded: "{rounded.full}"
    padding: "0.75rem 2rem"
  button-primary-hover:
    backgroundColor: "{colors.gold-dark}"
---

# Design System: Manos Sagradas Masajes

## Overview

**Creative North Star: "El Santuario de Manos Sagradas"**

El sitio traduce la voz real del dueño ("un lugar para detener el ruido,
soltar el estrés y regalarte un momento de cuidado personal") a una
landing de una sola página: cada terapia vive en un nicho con arco cálido
— eco del propio nombre "Manos Sagradas" — que se abre cuando te
detienes, nunca una vitrina de precios ni una narrativa de mercado. La
paleta marrón chocolate y dorado, junto con Playfair Display para los
títulos, mantiene el tono íntimo de un espacio personal, no el de una
cadena de spas ni una narrativa "ancestral andina" (ese mensaje ya
pertenece al competidor dominante del rubro en Cusco).

Rechazo confirmado: nada de estética de resort de lujo genérico (foto de
piscina de fondo, titular encerrado en una caja delgada superpuesta, tono
impersonal de plantilla). Tampoco esterilidad clínica: sin azules fríos ni
lenguaje de consultorio médico. Tampoco la narrativa "técnica ancestral
andina/inca" como mensaje central — es el terreno ya ocupado por Andina
Spa, el competidor grande y establecido de la ciudad.

**Key Characteristics:**
- Fotografía real de tratamientos como material principal, nunca stock genérico añadido sin evidencia.
- Un solo acento dorado que marca la acción principal (reservar por WhatsApp), nunca disperso en el fondo.
- Formas con un arco superior amplio que evocan un nicho o santuario acogedor, no un mostrador comercial.
- Reserva por WhatsApp siempre a un enlace de distancia, en cada sección relevante.

## Colors

Paleta cálida y terrosa de un solo acento: marrones como base y superficie, un dorado como único color de acción.

### Primary
- **Marrón profundo** (`#352019`, `primary-dark`): fondos de sección de cierre/contacto y overlays sobre fotografía.
- **Marrón chocolate** (`#4A2F24`, `primary`): paneles sólidos (tarjeta "¿Buscas algo más?").
- **Café cálido** (`#70513D`, `primary-light`): reservado, aún sin uso extendido en componentes.

### Secondary
- **Dorado** (`#B58A4A`, `gold`): el único acento de acción — CTA primario, viñetas, bordes decorativos.
- **Champagne** (`#D6B982`, `gold-light`): texto de acento sobre fondos oscuros (enlaces "Reservar →", nav en el header).
- **Dorado oscuro** (`#8F6935`, `gold-dark`): estado hover de los elementos dorados.

### Neutral
- **Crema principal** (`#F7F1E7`, `background`): fondo base del body y secciones claras.
- **Beige** (`#E8DCCB`, `background-alt`): fondo secundario, texto claro sobre fondo oscuro, divisores.
- **Blanco cálido** (`#FFFDF9`, `surface`): tarjetas y superficie de texto sobre fondo oscuro.
- **Marrón oscuro** (`#30231D`, `text`): texto principal.
- **Texto secundario** (`#705F53`, `text-muted`): párrafos de apoyo.

### Named Rules
**La Regla del Acento Único.** El dorado es el único color que llama a la acción. Nunca se introduce un segundo acento saturado (rojo, azul, verde vivo) compitiendo por atención.

## Typography

**Display Font:** Playfair Display (con ui-serif, Georgia, serif como respaldo)
**Body Font:** Inter (con ui-sans-serif, system-ui, sans-serif como respaldo)

**Character:** Un serif editorial con peso para los títulos, transmitiendo calidez artesanal, combinado con un sans-serif neutro y legible para el cuerpo de texto y la interfaz.

### Hierarchy
- **Display** (600, `text-4xl` a `text-6xl` con `sm:`/`lg:`, `font-display`): titulares de sección y el hero.
- **Title** (600, `text-xl`, `font-display`): nombre de cada puesto de servicio y subtítulos de tarjeta.
- **Body** (400, `text-base`/`text-lg`, `font-sans`): párrafos descriptivos, 65–75ch de medida en bloques de texto largos.
- **Label** (600, `text-xs`/`text-sm`, tracking amplio, mayúsculas en CTAs secundarios): enlaces "Reservar →", nav del header.

## Layout

Landing de una sola página con navegación por anclas (`#nosotros`, `#servicios`, `#galeria`, `#contactanos`). Contenedor máximo `max-w-7xl` centrado, padding horizontal `px-6` en móvil y `lg:px-10` en escritorio. Ritmo vertical de secciones en `py-20 sm:py-28` (más espacio del que da la sensación de "capítulo" entre bloques). Servicios usa una fila con scroll horizontal y snap (`overflow-x-auto snap-x`) en vez de una grilla fija, para que cada terapia se sienta como un nicho propio al que te acercas, no una casilla más de una tabla.

## Elevation & Depth

El sistema es mayormente plano: la profundidad se transmite con overlays de gradiente sobre fotografía (`from-primary-dark/95` hacia transparente) para legibilidad de texto, no con sombras decorativas. Las tarjetas de servicio y las imágenes principales llevan `shadow-lg`/`shadow-xl` sutil; no hay sombras de color ni halos.

### Named Rules
**La Regla del Overlay, no del Recuadro.** El texto sobre fotografía se resuelve con un degradado desde el fondo de la imagen, nunca con una caja o recuadro semitransparente superpuesto al estilo plantilla de resort.

## Shapes

Dos lenguajes de esquina conviven a propósito: un arco amplio superior (`rounded-t-[3rem]`) en las tarjetas de servicio, evocando un nicho o santuario acogedor (eco del nombre "Manos Sagradas"), y esquinas suaves convencionales (`rounded-2xl`, `rounded-[2rem]`) en el resto de tarjetas e imágenes. Los CTA principales son siempre píldora (`rounded-full`). Un anillo dorado con separación (`border` desplazado con `-inset-3`) enmarca la imagen de la sección Nosotros.

## Components

### Buttons
- **Primary (CTA de reserva):** píldora dorada (`rounded-full`, `bg-gold`), texto `surface`, hover `bg-gold-dark`.
- **Secundario ("Reservar →" dentro de tarjeta):** texto dorado claro en mayúsculas pequeñas con tracking amplio, sin fondo; hover a `gold`.

### Cards / Nichos de servicio (componente insignia)
- **Forma:** arco superior amplio (`rounded-t-[3rem]`), base convencional (`rounded-b-2xl`).
- **Fondo:** fotografía a sangre con overlay de gradiente `primary-dark` cuando hay foto real; textura de líneas diagonales doradas sobre `bg-primary` con un ícono de línea propio cuando no la hay.
- **Estado:** al hover/focus la descripción pasa de 2 líneas (`line-clamp-2`) a completa, la imagen escala levemente, y las tarjetas vecinas se atenúan (`opacity: .55`, `scale: .97`) vía `:has()` — el nicho que visitas se abre, los demás se quedan al fondo.
- **Variante CTA:** un nicho sin foto, fondo sólido `primary` con la misma textura diagonal dorada, para "¿buscas algo más?".

### Navigation
- Header transparente y absoluto sobre el hero, texto `surface`; menú móvil como panel lateral (`aside`) sobre `surface` con texto `text`.

## Do's and Don'ts

### Do:
- **Do** usar el dorado (`#B58A4A`) solo para la acción de reservar y acentos puntuales, nunca como color de fondo extendido.
- **Do** resolver el texto sobre foto con degradado desde `primary-dark`, no con recuadros ni cajas.
- **Do** mantener el arco superior amplio (`rounded-t-[3rem]`) como firma exclusiva de las tarjetas de servicio/puesto.
- **Do** enlazar cada CTA de reserva a WhatsApp con un mensaje pre-rellenado específico al contexto.

### Don't:
- **Don't** usar fotografía de stock genérica sin evidencia real del negocio (piscinas, modelos de resort internacional).
- **Don't** encerrar titulares en un recuadro delgado superpuesto a una foto de fondo (estética de plantilla de resort de lujo).
- **Don't** introducir un segundo acento de color saturado además del dorado.
- **Don't** usar azules fríos o estética clínica/médica en ninguna sección.
- **Don't** centrar el mensaje en "técnica ancestral andina/inca" — es el territorio ya ocupado por el competidor dominante; el mensaje propio es cercanía y atención personalizada.
