## Convenciones de código

**Scripts**

- No ejecutar los script, eso se realiza manualmente.

**Comentarios**

- Usar `#` como separador en comentarios generados, nunca `-`, `_` u otros caracteres similares.

**Estilos**

- Usar siempre clases de Tailwind.
- Usar `scss` solo cuando Tailwind no sea suficiente: valores específicos (`px`, `rem`, etc.), transiciones complejas o animaciones.

**Bordes**

- Radio de borde máximo en todo el proyecto: `.5rem` (`rounded-lg` de Tailwind). No usar `rounded-full`, `rounded-xl`, `rounded-2xl`, `rounded-3xl` ni valores arbitrarios (`rounded-[2rem]`, etc.) en botones, tarjetas, imágenes ni contenedores.
- Excepción: elementos decorativos pequeños (p. ej. un punto/bullet de `h-2 w-2`) donde el radio real ya es menor a `.5rem` pueden seguir usando `rounded-full`.
- Excepción: fotos circulares tipo badge/avatar superpuestas sobre otra imagen (collage), cuando se pida explícitamente forma circular — ahí sí aplica `rounded-full`.

**Breakpoints**

- Para todo diseño responsive nuevo usar los breakpoints de Tailwind (definidos como variables Sass en `src/main.scss`: `$bp-sm`, `$bp-md`, `$bp-lg`, `$bp-xl`, `$bp-2xl`):
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px
  - `2xl`: 1536px
