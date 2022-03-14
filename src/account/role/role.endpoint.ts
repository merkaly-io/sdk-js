import {
  CreateRoleValidator,
  FindRoleValidator,
  UpdateRoleValidator
} from '@merkaly/api/src/account/roles/role.validator'
import { plainToInstance } from 'class-transformer'
import { useAxios } from '../../axios'
import RoleReference from './role.reference'

export class Role {
  public find (params?: FindRoleValidator) {
    return useAxios.get<RoleReference[]>('/account/roles/', { params })
      .then(roles => roles.map(role => plainToInstance(RoleReference, role)))
  }

  public read (id: RoleReference['id']) {
    return useAxios.get<RoleReference>('/account/roles/' + id)
      .then(role => plainToInstance(RoleReference, role))
  }

  public create (payload: CreateRoleValidator) {
    return useAxios.post<RoleReference>('/account/roles/', payload)
      .then(role => plainToInstance(RoleReference, role))
  }

  public update (id: RoleReference['id'], payload: UpdateRoleValidator) {
    return useAxios.patch<RoleReference>('/account/roles/' + id, payload)
      .then(role => plainToInstance(RoleReference, role))
  }

  public remove (id: RoleReference['id']) {
    return useAxios.delete<void>('/account/roles/' + id)
  }
}
