import {
  CreateRoleValidator,
  FindRoleValidator,
  IdRoleValidator,
  UpdateRoleValidator
} from '@merkaly/api/src/account/roles/role.validator'
import { plainToInstance } from 'class-transformer'
import useAxios from '../../../hooks/useAxios'
import RoleReference from './role.reference'

namespace Role {
  export const find = (params?: FindRoleValidator) => {
    return useAxios.$get<RoleReference[]>('/account/roles/', { params })
      .then(roles => roles.map(role => plainToInstance(RoleReference, role)))
  }

  export const read = (id: IdRoleValidator) => {
    return useAxios.$get<RoleReference>('/account/roles/' + id)
      .then(role => plainToInstance(RoleReference, role))
  }

  export const create = (payload: CreateRoleValidator) => {
    return useAxios.$post<RoleReference>('/account/roles/', payload)
      .then(role => plainToInstance(RoleReference, role))
  }

  export const update = (id: IdRoleValidator, payload: UpdateRoleValidator) => {
    return useAxios.$patch<RoleReference>('/account/roles/' + id, payload)
      .then(role => plainToInstance(RoleReference, role))
  }

  export const remove = (id: IdRoleValidator) => {
    return useAxios.$delete<void>('/account/roles/' + id)
  }
}

export default Role
