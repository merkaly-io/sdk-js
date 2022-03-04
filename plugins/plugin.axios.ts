import { Plugin } from '@nuxt/types'
import MerkalySDK from '@merkaly/sdk-js/src/sdk'

const plugin: Plugin = ({ $axios, $config }) => {
  MerkalySDK.prototype.$axios = $axios.create({
    baseURL: `/${$config.merkaly.proxy}`
  })
}

export default plugin
