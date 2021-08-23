import { $AccountPath } from '@merkaly/api/src/account'
import { CreateRoleValidator, RoleEntity, UpdateRoleValidator } from '@merkaly/api/src/account/roles'
import { join } from 'path'
import axios from '../../app.axios'
import RoleReference from './role.reference'

export const route = (...path: string[]) => join($AccountPath, RoleEntity.$path, ...path)

namespace Role {
  export async function find (): Promise<RoleReference[]> {
  	return axios.$get(route())
  }

  export async function read (id: string): Promise<RoleReference> {
  	return axios.$get(route(id))
  }

  export async function create (payload: CreateRoleValidator): Promise<RoleReference> {
  	return axios.$post(route(), payload)
  }

  export async function update (id: string, payload: UpdateRoleValidator): Promise<RoleReference> {
  	return axios.$put(route(id), payload)
  }

  export async function remove (id: string): Promise<void> {
  	return axios.$delete(route(id))
  }
}

export default Role
