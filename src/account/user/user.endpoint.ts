import { $AccountPath, CreateUserValidator, UpdateUserValidator } from '@merkaly/api/src/account'
import { UserEntity } from '@merkaly/api/src/account/users'
import { User } from 'auth0'
import $axios from 'axios'
import { join } from 'path'
import UserReference from './user.reference'

export const route = (...path: string[]) => join($AccountPath, UserEntity.$path, ...path)

namespace User {
  export async function find () {
    return $axios.get<UserReference[]>(route())
      .then(({ data }) => UserReference.fromArrayOfPlains(data))
  }

  export async function read (id: string) {
    return $axios.get<UserReference>(route(id))
      .then(({ data }) => UserReference.fromPlain(data))
  }

  export async function create (payload: CreateUserValidator) {
    return $axios.post<UserReference>(route(), payload)
      .then(({ data }) => UserReference.fromPlain(data))
  }

  export async function update (id: string, payload: UpdateUserValidator) {
    return $axios.put<UserReference>(route(id), payload)
      .then(({ data }) => UserReference.fromPlain(data))
  }

  export async function remove (id: string) {
    return $axios.delete<void>(route(id))
      .then(({ data }) => data)
  }

}

export default User
