import {
  CreateRoleValidator,
  FindRoleValidator,
  IdRoleValidator,
  UpdateRoleValidator
} from '@merkaly/api/src/account/roles/role.validator'
import { plainToInstance } from 'class-transformer'
import MerkalySDK from '../../sdk'
import RoleReference from './role.reference'

namespace Role {
  export const find = (params?: FindRoleValidator) => {
    return MerkalySDK.prototype.$axios.$get<RoleReference[]>('/account/roles/', { params })
      .then(roles => roles.map(role => plainToInstance(RoleReference, role)))
  }

  export const read = (id: IdRoleValidator) => {
    return MerkalySDK.prototype.$axios.$get<RoleReference>('/account/roles/' + id)
      .then(role => plainToInstance(RoleReference, role))
  }

  export const create = (payload: CreateRoleValidator) => {
    return MerkalySDK.prototype.$axios.$post<RoleReference>('/account/roles/', payload)
      .then(role => plainToInstance(RoleReference, role))
  }

  export const update = (id: IdRoleValidator, payload: UpdateRoleValidator) => {
    return MerkalySDK.prototype.$axios.$patch<RoleReference>('/account/roles/' + id, payload)
      .then(role => plainToInstance(RoleReference, role))
  }

  export const remove = (id: IdRoleValidator) => {
    return MerkalySDK.prototype.$axios.$delete<void>('/account/roles/' + id)
  }
}

export default Role
