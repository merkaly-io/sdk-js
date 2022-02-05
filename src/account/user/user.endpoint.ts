import { join } from 'path'
import { $AccountPath } from '@merkaly/api/src/account'
import { CreateUserValidator, UpdateUserValidator, UserEntity } from '@merkaly/api/src/account/users'
import { NuxtAxiosInstance } from '@nuxtjs/axios'
import UserReference from './user.reference'

export const route = (...path: string[]) => join($AccountPath, UserEntity.$path, ...path)

export default function User ($axios: NuxtAxiosInstance) {
  function find (): Promise<UserReference[]> {
    return $axios.get(route())
  }

  function read (id: string): Promise<UserReference> {
    return $axios.get(route(id))
  }

  function create (payload: CreateUserValidator): Promise<UserReference> {
    return $axios.post(route(), payload)
  }

  function update (id: string, payload: UpdateUserValidator): Promise<UserReference> {
    return $axios.put(route(id), payload)
  }

  function remove (id: string): Promise<void> {
    return $axios.delete(route(id))
  }

  return { find, read, create, update, remove }
}
