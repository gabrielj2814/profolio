import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// const LIVE_URL=" https://gaodevts.github.io"
// gaodevts.github.io
// https://astro.build/config
export default defineConfig({
  // site:LIVE_URL,
  // base:"/gaodevts.github.io",
  integrations: [tailwind(), react()],
  images: {
    compression: false,
    base: 'public/imagenes',
    include: ['public/imagenes/**/*.{png,jpg,jpeg}'],
  },

});