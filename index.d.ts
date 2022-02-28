import { Context } from '@nuxt/types'
import { Auth as NuxtAuth } from '@nuxtjs/auth-next'
import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { UserData } from 'auth0'

declare global {
  const $nuxt: Context
}

export interface User {
  id: string
  name: string
}

declare module 'vue/types/vue' {
  interface Auth extends NuxtAuth {
    user: UserData & typeof NuxtAuth.prototype.user
  }
}

declare module '@nuxt/types' {
  interface Auth extends NuxtAuth {
    user: UserData & typeof NuxtAuth.prototype.user
  }
}

declare module 'vuex/types/index' {
  interface Auth extends NuxtAuth {
    user: UserData & typeof NuxtAuth.prototype.user
  }
}

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

export * from '@merkaly/api'