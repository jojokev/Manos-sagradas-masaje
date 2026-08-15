# Manos Sagradas Masajes

Sitio web del spa **Manos Sagradas Masajes** (Cusco), construido con [Astro](https://astro.build) y [Tailwind CSS](https://tailwindcss.com).

## 🚀 Estructura del proyecto

```text
/
├── public/
│   ├── Icon_manos_sagradasx32.ico
│   ├── Icon_manos_sagradasx64.ico
│   └── Icon_manos_sagradasx256.ico
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   │   └── Logo_manos_sagradas.webp
│   │   └── images/
│   │       └── manos sagradas masajes 0{1,2,3}.webp
│   ├── components/
│   │   ├── Header.astro
│   │   └── Hero.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── global.css
├── astro.config.mjs
└── package.json
```

Para más información sobre la estructura de un proyecto Astro, consulta la [guía oficial](https://docs.astro.build/en/basics/project-structure/).

## 🎨 Stack

- **[Astro](https://astro.build)** — framework de sitio
- **[Tailwind CSS v4](https://tailwindcss.com)** (vía `@tailwindcss/vite`) — estilos, con `sass` para casos que Tailwind no cubre (valores puntuales, transiciones/animaciones complejas)
- **[Swiper](https://swiperjs.com)** — carruseles/sliders
- **[Prettier](https://prettier.io)** (+ `prettier-plugin-astro`) — formateo de código

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando                | Acción                                             |
| :---------------------- | :-------------------------------------------------- |
| `pnpm install`          | Instala las dependencias                            |
| `pnpm dev`               | Inicia el servidor de desarrollo en `localhost:4321` |
| `pnpm build`             | Compila el sitio de producción en `./dist/`          |
| `pnpm preview`           | Previsualiza el build localmente antes de desplegar  |
| `pnpm format`            | Formatea el código con Prettier                      |
| `pnpm astro ...`         | Ejecuta comandos CLI de Astro (`astro add`, `astro check`, etc.) |
| `pnpm astro -- --help`   | Muestra la ayuda del CLI de Astro                    |

## 📐 Convenciones de código

Ver [`CLAUDE.md`](./CLAUDE.md) para las convenciones del proyecto (estilos con Tailwind, breakpoints, comentarios, etc.).

## 👀 Más información

Consulta la [documentación de Astro](https://docs.astro.build) o su [servidor de Discord](https://astro.build/chat).
