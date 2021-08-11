import { RoleEntity, RoleUserEntity } from '@merkaly/api/src/account/roles'
import $axios from 'axios'
import { join } from 'path'
import AppReference from '../../app.reference'
import { route } from './role.endpoint'

export default class RoleReference extends AppReference<RoleEntity> {
  public name: string
  public description: string
  public users: RoleUserEntity[] = []

  protected get $route () {
    return route(this.id, RoleUserEntity.$path)
  }

  public getUsers () {
    return $axios.get<RoleUserEntity[]>(this.$route)
      .then(({ data: users }) => (this.users = users))
  }

  public addUser (id: string) {
    return $axios.post<RoleUserEntity>(this.$route, { id })
      .then(({ data: user }) => this.users.push(user))
  }

  public removeUser (id: string) {
    return $axios.delete<RoleUserEntity>(join(this.$route, id))
      .then(({ data: user }) => this.users.push(user))
  }
}
