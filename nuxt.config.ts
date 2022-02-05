import { NuxtConfig } from '@nuxt/types'
import { MerkalySDKModule } from './main'

const config: NuxtConfig = {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    ['@nuxt/typescript-build', {}], // https://go.nuxtjs.dev/typescript
    [MerkalySDKModule, {
      api: process.env.API_ENDPOINT,
      client: process.env.AUTH0_CLIENT,
      domain: process.env.AUTH0_DOMAIN
    }]
  ],

  auth: {
    redirect: {
      home: '/',
      login: '/auth',
      logout: '/',
      callback: '/auth'
    }
  }
}

export default config
