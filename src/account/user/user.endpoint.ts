import {
  CreateUserValidator,
  FindUserValidator,
  IdUserValidator,
  UpdateUserValidator
} from '@merkaly/api/src/account/users/user.validator'
import { plainToInstance } from 'class-transformer'
import UserReference from './user.reference'

namespace User {
  export const find = (params?: FindUserValidator) => {
    return $nuxt.$api.$get<UserReference[]>('/account/users/', { params })
      .then(users => users.map(user => plainToInstance(UserReference, user)))
  }

  export const read = (id: IdUserValidator) => {
    return $nuxt.$api.$get<UserReference>('/account/users/' + id)
      .then(user => plainToInstance(UserReference, user))
  }

  export const create = (payload: CreateUserValidator) => {
    return $nuxt.$api.$post<UserReference>('/account/users/', payload)
      .then(user => plainToInstance(UserReference, user))
  }

  export const update = (id: IdUserValidator, payload: UpdateUserValidator) => {
    return $nuxt.$api.$patch<UserReference>('/account/users/' + id, payload)
      .then(user => plainToInstance(UserReference, user))
  }

  export const remove = (id: IdUserValidator) => {
    return $nuxt.$api.$delete<void>('/account/users/' + id)
  }
}

export default User
