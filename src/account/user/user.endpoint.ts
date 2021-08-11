import { $AccountPath, CreateUserValidator, UpdateUserValidator } from '@merkaly/api/src/account'
import { UserEntity } from '@merkaly/api/src/account/users'
import { User } from 'auth0'
import $axios from 'axios'
import { join } from 'path'
import UserReference from './user.reference'

export const route = (...path: string[]) => join($AccountPath, UserEntity.$path, ...path)

namespace User {
  export const find = async () => $axios.get<UserReference[]>(route())
    .then(({ data }) => UserReference.fromArrayOfPlains(data))

  export const read = async (id: string) => $axios.get<UserReference>(route(id))
    .then(({ data }) => UserReference.fromPlain(data))

  export const create = async (payload: CreateUserValidator) => $axios.post<UserReference>(route(), payload)
    .then(({ data }) => UserReference.fromPlain(data))

  export const update = async (id: string, payload: UpdateUserValidator) => $axios.put<UserReference>(route(id), payload)
    .then(({ data }) => UserReference.fromPlain(data))

  export const remove = async (id: string) => $axios.delete<void>(route(id))
    .then(({ data }) => data)

}

export default User
