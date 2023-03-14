export default defineNuxtConfig({
  ssr:true,
  modules: ['@pinia/nuxt'],
  
  //plugins:['@pinia/nuxt'],
  //plugins: ['cookie-universal-nuxt'],

  pinia:{
    ssr:true,
  }
})