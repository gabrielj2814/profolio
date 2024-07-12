import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  images: {
    compression: false,
    base: 'public/imagenes',
    include: ['public/imagenes/**/*.{png,jpg,jpeg}'],
  },

});