import { join } from 'path'
import { $AccountPath } from '@merkaly/api/src/account'
import { CreateRoleValidator, RoleEntity, UpdateRoleValidator } from '@merkaly/api/src/account/roles'
import RoleReference from './role.reference'

export const route = (...path: string[]) => join($AccountPath, RoleEntity.$path, ...path)

namespace Role {
  export const find = (): Promise<RoleReference[]> => {
    return $nuxt.$api.$get(route())
  }

  export const read = (id: string): Promise<RoleReference> => {
    return $nuxt.$api.$get(route(id))
  }

  export const create = (payload: CreateRoleValidator): Promise<RoleReference> => {
    return $nuxt.$api.$post(route(), payload)
  }

  export const update = (id: string, payload: UpdateRoleValidator): Promise<RoleReference> => {
    return $nuxt.$api.$put(route(id), payload)
  }

  export const remove = (id: string): Promise<void> => {
    return $nuxt.$api.$delete(route(id))
  }
}

export default Role
