import { Module } from '@nuxt/types'
import { join, resolve } from 'path'
import 'reflect-metadata'

interface SDKModuleParams {
  client: string
  domain: string
  api: string
  proxy?: string
}

export const MerkalySDK: Module<SDKModuleParams> = async function (params) {
  const { options } = this

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  options.publicRuntimeConfig.merkaly = {
    api: params.api || 'https://api.merkaly.io',
    client: params.client,
    domain: params.domain,
    proxy: params.proxy || '/api'
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const merkaly = options.publicRuntimeConfig.merkaly

  await this.addPlugin({
    src: resolve(__dirname, './nuxt.auth.ts'),
    filename: './nuxt.auth.ts'
  })

  await this.addTemplate({
    src: resolve(__dirname, './nuxt.axios.ts'),
    filename: './nuxt.axios.ts'
  })

  options.auth = {
    ...options.auth,
    plugins: [join(options.buildDir, './nuxt.auth.ts')],
    strategies: {
      auth0: {
        domain: merkaly.domain,
        clientId: merkaly.client
      }
    }
  }

  options.axios = {
    ...options.axios,
    proxy: true,
    https: true
  }

  const target = merkaly.api.split('//').pop()

  options.proxy = {
    ...options.proxy,
    [`${merkaly.proxy}`]: {
      target: `http://${target}`,
      pathRewrite: { [`^${merkaly.proxy}`]: '' }
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
