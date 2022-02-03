import { Context } from '@nuxt/types'

declare global {
  const $nuxt: Context
}

namespace Auth {
  export const user = () => $nuxt.$auth.user

  export const isLoggedIn = () => $nuxt.$auth.loggedIn

  export const login = (username: string, password: string) => $nuxt.$auth.loginWith('local', { data: { username, password } })

  export const logout = () => $nuxt.$auth.logout()
}

export default abstract class MerkalySDK {
  public readonly auth = Auth
}
