import { Module } from '@nuxt/types'
import SDK from './src/.sdk'

declare module '@nuxt/types/config/runtime' {
  interface NuxtRuntimeConfig {
    merkaly: SDK
  }
}

interface SDKModuleParams {
  sdk?: () => SDK
  endpoint?: string
}

const MerkalySDKModule: Module = function (params: SDKModuleParams) {
  const { options } = this
  const api = params.endpoint || 'https://api.merkaly.io'

  options.auth = {
    strategies: {
      local: {
        endpoints: {
          login: { url: (api + '/auth/login'), method: 'post' },
          logout: { url: (api + '/auth/logout'), method: 'post' },
          user: { url: (api + '/auth/user'), method: 'get' }
        }
      }
    }
  }

  options.plugins.push({ src: '@/plugins/sdk' })
}

export default MerkalySDKModule
