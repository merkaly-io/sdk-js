import { Context } from '@nuxt/types'

declare global {
  const $nuxt: Context
}

namespace Auth {
  export const user = () => {
    return $nuxt.$auth.user
  }

  export const isLoggedIn = () => {
    return $nuxt.$auth.loggedIn
  }

  export const login = async () => {
    return $nuxt.$auth.loginWith('auth0')
  }

  export const logout = () => {
    return $nuxt.$auth.logout()
  }
}

export default abstract class MerkalySDK {
  public readonly auth = Auth
}
