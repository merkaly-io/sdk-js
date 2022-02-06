import { join } from 'path'
import { $AccountPath } from '@merkaly/api/src/account'
import { CreateUserValidator, UpdateUserValidator, UserEntity } from '@merkaly/api/src/account/users'
import { plainToInstance } from 'class-transformer'
import UserReference from './user.reference'

export const route = (...path: string[]) => join($AccountPath, UserEntity.$path, ...path)

namespace User {
  export const find = () => {
    return $nuxt.$api.$get<UserReference[]>(route())
      .then(users => users.map(user => plainToInstance(UserReference, user)))
  }

  export const read = (id: string) => {
    return $nuxt.$api.$get<UserReference>(route(id))
      .then(user => plainToInstance(UserReference, user))
  }

  export const create = (payload: CreateUserValidator) => {
    return $nuxt.$api.$post<UserReference>(route(), payload)
      .then(user => plainToInstance(UserReference, user))
  }

  export const update = (id: string, payload: UpdateUserValidator) => {
    return $nuxt.$api.$put<UserReference>(route(id), payload)
      .then(user => plainToInstance(UserReference, user))
  }

  export const remove = (id: string) => {
    return $nuxt.$api.$delete<void>(route(id))
  }
}

export default User
