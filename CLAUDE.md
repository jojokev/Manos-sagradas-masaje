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
