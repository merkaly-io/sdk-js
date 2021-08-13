import { RoleEntity, RoleUserEntity } from '@merkaly/api/src/account/roles'
import { join } from 'path'
import axios from '../../app.axios'
import AppReference, { EntityType } from '../../app.reference'
import { route } from './role.endpoint'

export default class RoleReference extends AppReference<RoleEntity> implements EntityType<RoleEntity> {
  public name: string
  public description: string
  public users: RoleUserEntity[] = []

  protected get $route () {
    return route(this.id, RoleUserEntity.$path)
  }

  public getUsers () {
    return axios.$get<RoleUserEntity[]>(this.$route)
      .then(users => (this.users = users))
  }

  public addUser (id: string) {
    return axios.$post<RoleUserEntity>(this.$route, { id })
      .then(user => this.users.push(user))
  }

  public removeUser (id: string) {
    return axios.$delete<RoleUserEntity>(join(this.$route, id))
      .then(user => this.users.push(user))
  }
}
