import { UserData, UserEntity, UserRoleEntity } from '@merkaly/api/src/account/users'
import { Identity } from 'auth0'
import { route } from './user.endpoint'

export default class UserReference extends UserEntity {
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

  public getRoles (): Promise<UserRoleEntity[]> {
    return $nuxt.$api.$get(route(this.id, UserRoleEntity.$path))
  }

  public addRoles (ids: string[]) {
    return $nuxt.$api.$post<void>(route(this.id, UserRoleEntity.$path), ids)
  }

  public removeRoles (ids: string[]) {
    return $nuxt.$api.$delete<void>(route(this.id, UserRoleEntity.$path), { data: ids })
  }
}
