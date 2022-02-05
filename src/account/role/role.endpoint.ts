import { join } from 'path'
import { $AccountPath } from '@merkaly/api/src/account'
import { CreateRoleValidator, RoleEntity, UpdateRoleValidator } from '@merkaly/api/src/account/roles'
import { NuxtAxiosInstance } from '@nuxtjs/axios'
import RoleReference from './role.reference'

export const route = (...path: string[]) => join($AccountPath, RoleEntity.$path, ...path)

export default function Role ($axios: NuxtAxiosInstance) {
  function find (): Promise<RoleReference[]> {
    return $axios.get(route())
  }

  function read (id: string): Promise<RoleReference> {
    return $axios.get(route(id))
  }

  function create (payload: CreateRoleValidator): Promise<RoleReference> {
    return $axios.post(route(), payload)
  }

  function update (id: string, payload: UpdateRoleValidator): Promise<RoleReference> {
    return $axios.put(route(id), payload)
  }

  function remove (id: string): Promise<void> {
    return $axios.delete(route(id))
  }

  return { find, read, create, update, remove }
}
