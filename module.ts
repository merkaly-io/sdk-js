import { Module } from '@nuxt/types'
import 'reflect-metadata'
import SDK from './src/sdk'

interface SDKModuleParams {
  client: string
  domain: string
  api: string
  proxy?: string
  sdk?: () => SDK
}

declare module '@nuxt/types/config/runtime' {
  // @ts-ignore
  interface NuxtOptionsRuntimeConfig {
    merkaly: SDKModuleParams
  }
}

export const MerkalySDKModule: Module<SDKModuleParams> = function (params) {
  const { options } = this

  // @ts-ignore
  options.publicRuntimeConfig.merkaly = {
    api: params.api,
    client: params.client,
    domain: params.domain,
    proxy: params.proxy || 'api'
  }

  // @ts-ignore
  const merkaly = options.publicRuntimeConfig.merkaly

  options.auth = {
    ...options.auth,
    strategies: {
      auth0: {
        domain: merkaly.domain,
        clientId: merkaly.client
      }
    }
  }

  options.axios = {
    ...options.axios,
    proxy: true
  }

  options.proxy = {
    ...options.proxy,
    [`/${merkaly.proxy}`]: {
      target: merkaly.api,
      pathRewrite: { [`^/${merkaly.proxy}`]: '' }
    }
  }

  options.build = {
    ...options.build,
    standalone: true
  }

  this.addModule({
    src: '@nuxtjs/axios',
    options: options.axios
  })
  this.addModule({
    src: '@nuxtjs/auth-next',
    options: options.auth
  })
  this.addModule({
    src: '@nuxtjs/proxy',
    options: options.proxy
  })

  if (merkaly.api) {
    options.cli.badgeMessages.push(`-> API: /${merkaly.proxy} -> ${merkaly.api}`)
  }

  if (merkaly.domain) {
    options.cli.badgeMessages.push(`-> AUTH0: https://${merkaly.domain}`)
  }
}
