import { Plugin } from '@nuxt/types'
import { NuxtAxiosInstance } from '@nuxtjs/axios'

declare module 'vue/types/vue' {
  interface Vue {
    $request: NuxtAxiosInstance
  }
}

declare module '@nuxt/types' {
  interface Context {
    $request: NuxtAxiosInstance
  }

  interface NuxtAppOptions {
    $request: NuxtAxiosInstance
  }

  interface Configuration {
    request?: NuxtAxiosInstance
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $request: NuxtAxiosInstance
  }
}

const plugin: Plugin = ({ app, $axios, $config }, inject) => {
  const request = $axios.create()
  request.setBaseURL($config.merkaly.api)

  app.$request = request
  inject('request', request)
}

export default plugin
