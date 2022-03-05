import { Auth as NuxtAuth } from '@nuxtjs/auth-next'
import { UserData } from 'auth0'

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

export { ManagerSDK, AdminSDK } from './src/sdk'
export { MerkalySDKModule } from './nuxt'
