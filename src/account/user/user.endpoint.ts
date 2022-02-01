import { join } from 'path'
import { $AccountPath } from '@merkaly/api/src/account'
import { CreateUserValidator, UpdateUserValidator, UserEntity } from '@merkaly/api/src/account/users'
import axios from '../../app.axios'
import UserReference from './user.reference'

export const route = (...path: string[]) => join($AccountPath, UserEntity.$path, ...path)

export default class User {
  public static readonly find = (): Promise<UserReference[]> => axios.$get(route())

  public static readonly read = (id: string): Promise<UserReference> => axios.$get(route(id))

  public static readonly create = (payload: CreateUserValidator): Promise<UserReference> => axios.$post(route(), payload)

  public static readonly update = (id: string, payload: UpdateUserValidator): Promise<UserReference> => axios.$put(route(id), payload)

  public static readonly remove = (id: string): Promise<void> => axios.$delete(route(id))
}
