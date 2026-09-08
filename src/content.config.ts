import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const servicios = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/servicios" }),
  schema: ({ image }) =>
    z.object({
      titulo: z.string(),
      tagline: z.string().optional(),
      calificacion: z.number().min(0).max(5).default(5),
      precio: z.number().positive().optional(),
      // Duración de la sesión (texto libre, p. ej. "30 min"). Aún sin decidir dónde se muestra.
      duracion: z.string().default(""),
      categorias: z.array(z.string()).default([]),
      idealPara: z.string().optional(),
      descripcionCorta: z.string(),
      descripcionDetallada: z.string().default(""),
      // Imagen principal mostrada en la página del servicio.
      imagenDestacada: image(),
      // Galería del servicio (mínimo 4 fotos); por ahora solo lleva la imagen por defecto, se completará más adelante.
      imagenes: z.array(image()).default([]),
    }),
});

export const collections = { servicios };
