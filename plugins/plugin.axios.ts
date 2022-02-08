import { Plugin } from '@nuxt/types'

const plugin: Plugin = ({ app, $axios, $config }, inject) => {
  const api = $axios.create()
  api.setBaseURL(`/${$config.merkaly.proxy}`)

  app.$api = api
  inject('api', api)
}

export default plugin
