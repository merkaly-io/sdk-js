import { CreateRoleValidator, UpdateRoleValidator } from '@merkaly/api/src/account/roles/role.validator'
import { plainToInstance } from 'class-transformer'
import RoleReference from './role.reference'

namespace Role {
  export const find = () => {
    return $nuxt.$api.$get<RoleReference[]>('/account/roles/')
      .then(roles => roles.map(role => plainToInstance(RoleReference, role)))
  }

  export const read = (id: string) => {
    return $nuxt.$api.$get<RoleReference>('/account/roles/' + id)
      .then(role => plainToInstance(RoleReference, role))
  }

  export const create = (payload: CreateRoleValidator) => {
    return $nuxt.$api.$post<RoleReference>('/account/roles/', payload)
      .then(role => plainToInstance(RoleReference, role))
  }

  export const update = (id: string, payload: UpdateRoleValidator) => {
    return $nuxt.$api.$put<RoleReference>('/account/roles/' + id, payload)
      .then(role => plainToInstance(RoleReference, role))
  }

  export const remove = (id: string) => {
    return $nuxt.$api.$delete<void>('/account/roles/' + id)
  }
}

export default Role
