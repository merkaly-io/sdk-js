import AccountModule from '@merkaly/api/src/account/account.module'
import UserModule from '@merkaly/api/src/account/users/user.module'
import * as validator from '@merkaly/api/src/account/users/user.validator'
import $axios from 'axios'
import { join } from 'path'
import UserReference from './user.reference'

const route = (...path: string[]) => join(AccountModule.$path, UserModule.$path, ...path)

namespace User {
  export const find = async () => $axios.get<UserReference[]>(route())

  export const read = async (id: string) => $axios.get<UserReference>(route(id))

  export const create = async (payload: validator.CreateUserValidator) => $axios.post<UserReference>(route(), payload)

  export const update = async (id: string, payload: validator.UpdateUserValidator) => $axios.put<UserReference>(route(id), payload)

  export const remove = async (id: string) => $axios.delete<void>(route(id))
}

export default User
