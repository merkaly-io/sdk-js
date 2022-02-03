import { NuxtConfig } from '@nuxt/types'
import MerkalySDKModule from './main'
import { ManagerSDK } from './src'

const config: NuxtConfig = {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    ['@nuxt/typescript-build', {}], // https://go.nuxtjs.dev/typescript
    [MerkalySDKModule, new ManagerSDK()]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['@nuxtjs/axios', {}], // https://go.nuxtjs.dev/axios
    ['@nuxtjs/auth-next', {}] // https://auth.nuxtjs.org/guide/setup
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.baseUrl
  }
}

export default config
