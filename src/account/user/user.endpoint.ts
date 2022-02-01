import { join } from 'path'
import { $AccountPath } from '@merkaly/api/src/account'
import { CreateUserValidator, UpdateUserValidator, UserEntity } from '@merkaly/api/src/account/users'
import axios from '../../app.axios'
import UserReference from './user.reference'

export const route = (...path: string[]) => join($AccountPath, UserEntity.$path, ...path)

namespace User {
  export const find = (): Promise<UserReference[]> => axios.$get(route())

  export const read = (id: string): Promise<UserReference> => axios.$get(route(id))

  export const create = (payload: CreateUserValidator): Promise<UserReference> => axios.$post(route(), payload)

  export const update = (id: string, payload: UpdateUserValidator): Promise<UserReference> => axios.$put(route(id), payload)

  export const remove = (id: string): Promise<void> => axios.$delete(route(id))
}

export default User
