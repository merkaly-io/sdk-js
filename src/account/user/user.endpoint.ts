import { join } from 'path'
import { $AccountPath } from '@merkaly/api/src/account'
import { CreateUserValidator, UpdateUserValidator, UserEntity } from '@merkaly/api/src/account/users'
import UserReference from './user.reference'

export const route = (...path: string[]) => join($AccountPath, UserEntity.$path, ...path)

export default class User {
  public static readonly find = (): Promise<UserReference[]> => $nuxt.$axios.get(route())

  public static readonly read = (id: string): Promise<UserReference> => $nuxt.$axios.get(route(id))

  public static readonly create = (payload: CreateUserValidator): Promise<UserReference> => $nuxt.$axios.post(route(), payload)

  public static readonly update = (id: string, payload: UpdateUserValidator): Promise<UserReference> => $nuxt.$axios.put(route(id), payload)

  public static readonly remove = (id: string): Promise<void> => $nuxt.$axios.delete(route(id))
}
