import { Module } from '@nuxt/types'
import SDK from './src/.sdk'

declare module '@nuxt/types/config/runtime' {
  interface NuxtRuntimeConfig {
    merkaly: SDK
  }
}

const MerkalySDKModule: Module = function (sdk: SDK) {
  const { options } = this

  // @ts-ignore
  options.publicRuntimeConfig.merkaly = sdk
  options.plugins.push({ src: '@/plugins/sdk' })
}

export default MerkalySDKModule
