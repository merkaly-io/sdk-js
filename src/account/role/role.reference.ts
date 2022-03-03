import { IdRoleValidator } from '@merkaly/api/src/account/roles/role.validator'
import { AddRoleUsers, RemoveRoleUsers } from '@merkaly/api/src/account/roles/users/user.validator'
import { Role, User } from 'auth0'
import MerkalySDK from '../../sdk'

export default class RoleReference implements Role {
  public id: IdRoleValidator
  public name: Role['name']
  public description: Role['description']
  public users: User[] = []

  public getUsers () {
    return MerkalySDK.prototype.$axios.$get<User[]>('/account/roles/' + this.id + '/users')
  }

  public addUsers (ids: AddRoleUsers) {
    return MerkalySDK.prototype.$axios.$post<void>('/account/roles/' + this.id + '/users', ids)
  }

  public removeUsers (ids: RemoveRoleUsers) {
    return MerkalySDK.prototype.$axios.$delete<void>('/account/roles/' + this.id + '/users', { data: ids })
  }
}
