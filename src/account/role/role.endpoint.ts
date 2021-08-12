import { $AccountPath } from '@merkaly/api/src/account'
import { CreateRoleValidator, RoleEntity, UpdateRoleValidator } from '@merkaly/api/src/account/roles'
import $axios from 'axios'
import { join } from 'path'
import RoleReference from './role.reference'

export const route = (...path: string[]) => join($AccountPath, RoleEntity.$path, ...path)

namespace Role {
  export async function find () {
    return $axios.get<RoleReference[]>(route())
  }

  export async function read (id: string) {
    return $axios.get<RoleReference>(route(id))
  }

  export async function create (payload: CreateRoleValidator) {
    return $axios.post<RoleReference>(route(), payload)
  }

  export async function update (id: string, payload: UpdateRoleValidator) {
    return $axios.put<RoleReference>(route(id), payload)
  }

  export async function remove (id: string) {
    return $axios.delete<void>(route(id))
  }
}

export default Role
