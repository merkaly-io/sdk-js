import { Module } from '@nuxt/types'
import 'reflect-metadata'

interface SDKModuleParams {
  client: string
  domain: string
  api: string
  proxy?: string
}

export const MerkalySDKModule: Module<SDKModuleParams> = function (params) {
  const { options } = this

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  options.publicRuntimeConfig.merkaly = {
    api: params.api,
    client: params.client,
    domain: params.domain,
    proxy: params.proxy || 'api'
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
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
