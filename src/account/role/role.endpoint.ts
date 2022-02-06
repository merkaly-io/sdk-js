import { join } from 'path'
import { $AccountPath } from '@merkaly/api/src/account'
import { CreateRoleValidator, RoleEntity, UpdateRoleValidator } from '@merkaly/api/src/account/roles'
import { plainToInstance } from 'class-transformer'
import RoleReference from './role.reference'

export const route = (...path: string[]) => join($AccountPath, RoleEntity.$path, ...path)

namespace Role {
  export const find = () => {
    return $nuxt.$api.$get<RoleReference[]>(route())
      .then(roles => roles.map(role => plainToInstance(RoleReference, role)))
  }

  export const read = (id: string) => {
    return $nuxt.$api.$get<RoleReference>(route(id))
      .then(role => plainToInstance(RoleReference, role))
  }

  export const create = (payload: CreateRoleValidator) => {
    return $nuxt.$api.$post<RoleReference>(route(), payload)
      .then(role => plainToInstance(RoleReference, role))
  }

  export const update = (id: string, payload: UpdateRoleValidator) => {
    return $nuxt.$api.$put<RoleReference>(route(id), payload)
      .then(role => plainToInstance(RoleReference, role))
  }

  export const remove = (id: string) => {
    return $nuxt.$api.$delete<void>(route(id))
  }
}

export default Role
