import { CreateUserValidator, UpdateUserValidator } from '@merkaly/api/src/account/users/user.validator'
import { plainToInstance } from 'class-transformer'
import UserReference from './user.reference'

namespace User {
  export const find = () => {
    return $nuxt.$api.$get<UserReference[]>('/account/users/')
      .then(users => users.map(user => plainToInstance(UserReference, user)))
  }

  export const read = (id: string) => {
    return $nuxt.$api.$get<UserReference>('/account/users/' + id)
      .then(user => plainToInstance(UserReference, user))
  }

  export const create = (payload: CreateUserValidator) => {
    return $nuxt.$api.$post<UserReference>('/account/users/', payload)
      .then(user => plainToInstance(UserReference, user))
  }

  export const update = (id: string, payload: UpdateUserValidator) => {
    return $nuxt.$api.$patch<UserReference>('/account/users/' + id, payload)
      .then(user => plainToInstance(UserReference, user))
  }

  export const remove = (id: string) => {
    return $nuxt.$api.$delete<void>('/account/users/' + id)
  }
}

export default User
