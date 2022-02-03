import { Context } from '@nuxt/types'
import Login from './auth/login'

declare global {
  const $nuxt: Context
}

export default abstract class MerkalySDK {
  public readonly auth = {
    login: Login
  }
}
