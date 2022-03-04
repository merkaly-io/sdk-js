import { Plugin } from '@nuxt/types'
import MerkalySDK from '@merkaly/sdk-js/src/sdk'

const plugin: Plugin = ({ $axios, $config, req }) => {
  let baseURL = `/${$config.merkaly.proxy}/`

  if (process.server) {
    baseURL = (req.headers.host) + baseURL
    baseURL = 'http://' + baseURL
  }

  MerkalySDK.$axios = $axios.create({ baseURL })
}

export default plugin
