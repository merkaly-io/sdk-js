import { Account } from '@merkaly/api'
import { Identity } from 'auth0'
import $axios from 'axios'
import { join } from 'path'
import AppReference from '../../app.reference'
import { route } from './user.endpoint'

export default class UserReference extends AppReference implements Account.User.Entity {
  public blocked: boolean | undefined
  public created_at: string | undefined
  public email: string | undefined
  public email_verified: boolean | undefined
  public family_name: string | undefined
  public given_name: string | undefined
  public identities: Identity[] | undefined
  public last_ip: string | undefined
  public last_login: string | undefined
  public last_password_reset: string | undefined
  public logins_count: number | undefined
  public multifactor: string[] | undefined
  public name: string | undefined
  public nickname: string | undefined
  public phone_number: string | undefined
  public phone_verified: boolean | undefined
  public picture: string | undefined
  public updated_at: string | undefined
  public user_id: string
  public user_metadata: Account.User.UserData | undefined
  public username: string | undefined
  public roles: Account.User.Role.Entity[] = []

  protected get $route () {
    return route(this.user_id, Account.User.Role.Entity.$path)
  }

  public getRoles () {
    return $axios.get<Account.User.Role.Entity[]>(route(this.user_id, Account.User.Role.Entity.$path))
      .then(({ data }) => (this.roles = data))
  }

  public addRole (id: string) {
    return $axios.post<Account.User.Role.Entity>(this.$route, { id })
      .then(({ data: role }) => (this.roles.push(role)))
  }

  public removeRole (id: string) {
    return $axios.delete<Account.User.Role.Entity[]>(join(this.$route + id))
      .then(({ data: roles }) => (this.roles = roles))
  }
}
