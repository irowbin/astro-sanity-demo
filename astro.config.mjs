import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';

import sanity from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
  experimental: {
    viewTransitions: true
  },
  integrations: [tailwind(), compress(), sanity({
    projectId: 'cgovw6qt',
    dataset: 'production',
    apiVersion: '2023-02-08',
    useCdn: false,
  })]
});