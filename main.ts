import { Module } from '@nuxt/types'

const MerkalySDKModule: Module = function () {
  const { options } = this

  options.plugins.push('@/plugins/sdk')
}

export default MerkalySDKModule
