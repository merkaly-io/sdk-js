import { $AccountPath } from '@merkaly/api/src/account'
import { CreateUserValidator, UpdateUserValidator, UserEntity } from '@merkaly/api/src/account/users'
import { join } from 'path'
import axios from '../../app.axios'
import UserReference from './user.reference'

export const route = (...path: string[]) => join($AccountPath, UserEntity.$path, ...path)

namespace User {
  export async function find (): Promise<UserReference[]> {
  	return axios.$get(route())
  }

  export async function read (id: string): Promise<UserReference> {
  	return axios.$get(route(id))
  }

  export async function create (payload: CreateUserValidator): Promise<UserReference> {
  	return axios.$post(route(), payload)
  }

  export async function update (id: string, payload: UpdateUserValidator): Promise<UserReference> {
  	return axios.$put(route(id), payload)
  }

  export async function remove (id: string): Promise<void> {
  	return axios.$delete(route(id))
  }
}

export default User
