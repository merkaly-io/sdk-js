import { Account } from '@merkaly/api'
import $axios from 'axios'
import { join } from 'path'
import { route } from './role.endpoint'

export default class RoleReference extends Account.Role.Entity {
  public users: Account.Role.User.Entity[] = []

  protected get $route () {
    return route(this.id, Account.Role.User.Entity.$path)
  }

  public getUsers () {
    return $axios.get<Account.Role.User.Entity[]>(this.$route)
      .then(({ data: users }) => (this.users = users))
  }

  public addUser (id: string) {
    return $axios.post<Account.Role.User.Entity>(this.$route, { id })
      .then(({ data: user }) => this.users.push(user))
  }

  public removeUser (id: string) {
    return $axios.delete<Account.Role.User.Entity>(join(this.$route, id))
      .then(({ data: user }) => this.users.push(user))
  }
}
