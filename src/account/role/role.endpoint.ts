import {
  CreateRoleValidator,
  FindRoleValidator,
  IdRoleValidator,
  UpdateRoleValidator
} from '@merkaly/api/src/account/roles/role.validator'
import { plainToInstance } from 'class-transformer'
import MerkalySDK from '../../sdk'
import RoleReference from './role.reference'

export class Role {
  public find (params?: FindRoleValidator) {
    return MerkalySDK.$axios.get<RoleReference[]>('/account/roles/', { params })
      .then(roles => roles.map(role => plainToInstance(RoleReference, role)))
  }

  public read (id: IdRoleValidator) {
    return MerkalySDK.$axios.get<RoleReference>('/account/roles/' + id)
      .then(role => plainToInstance(RoleReference, role))
  }

  public create (payload: CreateRoleValidator) {
    return MerkalySDK.$axios.post<RoleReference>('/account/roles/', payload)
      .then(role => plainToInstance(RoleReference, role))
  }

  public update (id: IdRoleValidator, payload: UpdateRoleValidator) {
    return MerkalySDK.$axios.patch<RoleReference>('/account/roles/' + id, payload)
      .then(role => plainToInstance(RoleReference, role))
  }

  public remove (id: IdRoleValidator) {
    return MerkalySDK.$axios.delete<void>('/account/roles/' + id)
  }
}
