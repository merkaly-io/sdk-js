import { join } from 'path'
import { Module } from '@nuxt/types'
import SDK from './src/.sdk'

interface SDKModuleParams {
  client: string
  domain: string
  api: string
  sdk?: () => SDK
}

export const MerkalySDKModule: Module = function (params: SDKModuleParams) {
  const { options } = this

  this.addPlugin({ src: require.resolve(join(__dirname, '/plugins/axios')) })
  this.addModule({ src: '@nuxtjs/axios' })
  this.addModule({ src: '@nuxtjs/auth-next' })

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
    baseURL: process.env.API_ENDPOINT
  }

  if (params.api) {
    options.cli.badgeMessages.push(`-> API: ${params.api}`)
  }

  if (params.domain) {
    options.cli.badgeMessages.push(`-> AUTH0: https://${params.domain}`)
  }
}

export default MerkalySDKModule
