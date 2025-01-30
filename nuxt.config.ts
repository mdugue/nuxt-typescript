import tailwindcss from "@tailwindcss/vite";
import { createShikiHighlighter } from "@nuxtjs/mdc/runtime";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxtjs/mdc"],
  vite: {
    plugins: [tailwindcss()],
  },
  mdc: {
    highlight: {
      theme: "github-light",
      highlighter: "shiki",
    },
  },
});
