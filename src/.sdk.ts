import { Context } from '@nuxt/types'
import { Auth } from '@nuxtjs/auth-next'
import { UserData } from 'auth0'

class AuthModule {
  constructor (protected $auth: Auth) {
  }

  public get user () {
    return this.$auth.user as UserData
  }

  public get isLoggedIn (): boolean {
    return this.$auth.loggedIn
  }

  public async login (): Promise<any> {
    return this.$auth.loginWith('auth0')
  }

  public async logout (): Promise<void> {
    return this.$auth.logout()
  }
}

export default abstract class MerkalySDK {
  public readonly auth = new AuthModule(this.$ctx.$auth)

  constructor (protected $ctx: Context) {
  }
}
