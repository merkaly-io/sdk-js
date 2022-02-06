import { Plugin } from '@nuxt/types'
import { NuxtAxiosInstance } from '@nuxtjs/axios'

declare module 'vue/types/vue' {
  interface Vue {
    $api: NuxtAxiosInstance
  }
}

declare module '@nuxt/types' {
  interface Context {
    $api: NuxtAxiosInstance
  }

  interface NuxtAppOptions {
    $api: NuxtAxiosInstance
  }

  interface Configuration {
    api?: NuxtAxiosInstance
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $api: NuxtAxiosInstance
  }
}

const plugin: Plugin = ({ app, $axios, $config }, inject) => {
  const api = $axios.create()
  api.setBaseURL(`/${$config.merkaly.proxy}`)

  app.$api = api
  inject('api', api)
}

export default plugin
