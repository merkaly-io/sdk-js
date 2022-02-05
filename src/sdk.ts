import { NuxtAppOptions } from '@nuxt/types'
import { Auth } from '@nuxtjs/auth-next'
import { UserData } from 'auth0'

class AuthModule {
  private readonly $auth: Auth

  constructor ($auth: Auth) {
    this.$auth = $auth
  }

  public get user () {
    return this.$auth.user as UserData
  }

  public get isLoggedIn (): boolean {
    return this.$auth.loggedIn
  }

  public login (): Promise<any> {
    return this.$auth.loginWith('auth0')
  }

  public logout (): Promise<void> {
    return this.$auth.logout()
  }
}

export default abstract class MerkalySDK {
  private readonly $app: NuxtAppOptions
  public readonly auth: AuthModule

  constructor ($app: NuxtAppOptions) {
    this.$app = $app
    this.auth = new AuthModule(this.$app.$auth)
  }
}
