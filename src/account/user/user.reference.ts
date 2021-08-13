import { UserData, UserEntity, UserRoleEntity } from '@merkaly/api/src/account/users'
import { Identity } from 'auth0'
import { join } from 'path'
import axios from '../../app.axios'
import AppReference, { EntityType } from '../../app.reference'
import { route } from './user.endpoint'

export default class UserReference extends AppReference<UserEntity> implements EntityType<UserEntity> {
  public multifactor: string[]
  public blocked: boolean
  public created_at: string
  public email: string
  public email_verified: boolean
  public family_name: string
  public given_name: string
  public identities: Identity[]
  public last_ip: string
  public last_login: string
  public last_password_reset: string
  public logins_count: number
  public name: string
  public nickname: string
  public phone_number: string
  public phone_verified: boolean
  public picture: string
  public updated_at: string
  public user_id: string
  public user_metadata: UserData
  public username: string | undefined
  public roles: UserRoleEntity[] = []

  protected get $route () {
    return route(this.user_id, UserRoleEntity.$path)
  }

  public getRoles () {
    return axios.$get<UserRoleEntity[]>(route(this.user_id, UserRoleEntity.$path))
      .then(roles => (this.roles = roles))
  }

  public addRole (id: string) {
    return axios.$post<UserRoleEntity>(this.$route, { id })
      .then(userRole => (this.roles.push(userRole)))
  }

  public removeRole (id: string) {
    return axios.$delete<UserRoleEntity[]>(join(this.$route + id))
      .then(roles => (this.roles = roles))
  }
}
