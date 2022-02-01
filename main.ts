import { Module } from '@nuxt/types'

const MerkalySDKModule: Module = function () {
  const { options } = this

  options.plugins.push({ src: '@/plugins/sdk' })
}

export default MerkalySDKModule
