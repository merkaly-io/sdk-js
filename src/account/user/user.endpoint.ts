import { Account } from '@merkaly/api'
import $axios from 'axios'
import { join } from 'path'
import UserReference from './user.reference'

export const route = (...path: string[]) => join(Account.$path, Account.User.Entity.$path, ...path)

namespace User {
  export const find = async () => $axios.get<UserReference[]>(route())

  export const read = async (id: string) => $axios.get<UserReference>(route(id))

  export const create = async (payload: Account.User.validators.CreateUserValidator) => $axios.post<UserReference>(route(), payload)

  export const update = async (id: string, payload: Account.User.validators.UpdateUserValidator) => $axios.put<UserReference>(route(id), payload)

  export const remove = async (id: string) => $axios.delete<void>(route(id))
}

export default User
