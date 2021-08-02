import { Account } from '@merkaly/api'
import $axios from 'axios'
import { join } from 'path'
import { route } from './user.endpoint'

export default class UserReference extends Account.User.Entity {
  public roles: Account.User.Role.Entity[] = []

  protected get $route () {
    return route(this.id, Account.User.Role.Entity.$path)
  }

  public getRoles () {
    return $axios.get<Account.User.Role.Entity[]>(route(this.id, Account.User.Role.Entity.$path))
      .then(({ data }) => (this.roles = data))
  }

  public addRole (id: string) {
    return $axios.post<Account.Organization.Members.Entity>(this.$route, { id })
      .then(({ data: role }) => (this.roles.push(role)))
  }

  public removeRole (id: string) {
    return $axios.delete<Account.Organization.Members.Entity[]>(join(this.$route + id))
      .then(({ data: roles }) => (this.roles = roles))
  }
}
