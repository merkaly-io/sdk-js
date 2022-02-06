import path from 'path'
import { Module } from '@nuxt/types'
import SDK from './src/sdk'

interface SDKModuleParams {
  client: string
  domain: string
  api: string
  proxy?: string
  sdk?: () => SDK
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

  this.addPlugin(path.resolve(__dirname, 'plugins/axios.ts'))

  options.auth = {
    ...options.auth,
    strategies: {
      auth0: {
        domain: params.domain,
        clientId: params.client
      }
    }
  }

  options.axios = {
    ...options.axios,
    proxy: true
  }

  options.proxy = {
    ...options.proxy,
    [`/${params.proxy}`]: { target: params.api, pathRewrite: { [`^/${params.proxy}`]: '' } }
  }

  options.build = {
    ...options.build,
    standalone: true
  }

  this.addModule({ src: '@nuxtjs/axios', options: options.axios })
  this.addModule({ src: '@nuxtjs/auth-next', options: options.auth })
  this.addModule({ src: '@nuxtjs/proxy', options: options.proxy })

  if (params.api) {
    options.cli.badgeMessages.push(`-> API: ${params.api}`)
  }

  if (params.domain) {
    options.cli.badgeMessages.push(`-> AUTH0: https://${params.domain}`)
  }
}

export default MerkalySDKModule
