// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
  ],
  ssr: false,
  devtools: { enabled: true },
  runtimeConfig: {
    apiKey: '',
    public: {
      apiUrl: 'https://wx41advo6k.execute-api.ap-northeast-1.amazonaws.com/',
    },
  },
  srcDir: 'src',
  compatibilityDate: '2024-11-01',
  typescript: {
    typeCheck: true,
  },
  eslint: {
    config: {
      stylistic: {
        indent: 2,
        quotes: 'single',
        semi: false,
      },
    },
  },
})
