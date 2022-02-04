import { Auth } from '@nuxtjs/auth-next'

export default interface Store {
  auth: Auth
}

export const state = (): Partial<Store> => ({})

export const actions = {}
