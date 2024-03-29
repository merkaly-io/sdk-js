import { AddRoleUsers, RemoveRoleUsers } from '@merkaly/api/src/account/roles/users/user.validator'
import { Role, User } from 'auth0'
import { useAxios } from '../../../nuxt.axios'

export default class RoleReference implements Role {
  public id: Role['id']
  public name: Role['name']
  public description: Role['description']
  public users: User[] = []

  public getUsers () {
    return useAxios.get<User[]>('/account/roles/' + this.id + '/users')
  }

  public addUsers (ids: AddRoleUsers) {
    return useAxios.post<void>('/account/roles/' + this.id + '/users', ids)
  }

  public removeUsers (ids: RemoveRoleUsers) {
    return useAxios.delete<void>('/account/roles/' + this.id + '/users', { data: ids })
  }
}
