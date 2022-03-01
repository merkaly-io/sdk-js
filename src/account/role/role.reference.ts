import { IdRoleValidator } from '@merkaly/api/src/account/roles/role.validator'
import { AddRoleUsers, RemoveRoleUsers } from '@merkaly/api/src/account/roles/users/user.validator'
import { Role, User } from 'auth0'

export default class RoleReference implements Role {
  public id: IdRoleValidator
  public name: Role['name']
  public description: Role['description']
  public users: User[] = []

  public getUsers () {
    return $nuxt.$api.$get<User[]>('/account/roles/' + this.id + '/users')
  }

  public addUsers (ids: AddRoleUsers) {
    return $nuxt.$api.$post<void>('/account/roles/' + this.id + '/users', ids)
  }

  public removeUsers (ids: RemoveRoleUsers) {
    return $nuxt.$api.$delete<void>('/account/roles/' + this.id + '/users', { data: ids })
  }
}
