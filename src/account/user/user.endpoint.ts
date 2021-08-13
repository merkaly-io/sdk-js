import { $AccountPath } from '@merkaly/api/src/account'
import { CreateUserValidator, UpdateUserValidator, UserEntity } from '@merkaly/api/src/account/users'
import { join } from 'path'
import axios from '../../app.axios'
import UserReference from './user.reference'

export const route = (...path: string[]) => join($AccountPath, UserEntity.$path, ...path)

namespace User {
  export async function find () {
    return axios.$get<UserReference[]>(route())
  }

  export async function read (id: string) {
    return axios.$get<UserReference>(route(id))
  }

  export async function create (payload: CreateUserValidator) {
    return axios.$post<UserReference>(route(), payload)
  }

  export async function update (id: string, payload: UpdateUserValidator) {
    return axios.$put<UserReference>(route(id), payload)
  }

  export async function remove (id: string) {
    return axios.$delete<void>(route(id))
  }

}

export default User
