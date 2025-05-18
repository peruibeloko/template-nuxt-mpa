// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },
  css: ['@/styles/colors.css', '@/styles/global.css', '@/styles/theme.css', '@/styles/reset.css'],
  app: {
    baseURL: '/template-nuxt-mpa'
  }
});
