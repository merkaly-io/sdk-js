import { join } from 'path'
import { $AccountPath } from '@merkaly/api/src/account'
import { CreateUserValidator, UpdateUserValidator, UserEntity } from '@merkaly/api/src/account/users'
import UserReference from './user.reference'

export const route = (...path: string[]) => join($AccountPath, UserEntity.$path, ...path)

namespace User {
  export const find = (): Promise<UserReference[]> => {
    return $nuxt.$request.$get(route())
  }

  export const read = (id: string): Promise<UserReference> => {
    return $nuxt.$request.$get(route(id))
  }

  export const create = (payload: CreateUserValidator): Promise<UserReference> => {
    return $nuxt.$request.$post(route(), payload)
  }

  export const update = (id: string, payload: UpdateUserValidator): Promise<UserReference> => {
    return $nuxt.$request.$put(route(id), payload)
  }

  export const remove = (id: string): Promise<void> => {
    return $nuxt.$request.$delete(route(id))
  }
}

export default User
