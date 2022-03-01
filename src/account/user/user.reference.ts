import { AppMetadata, Role, UserData, UserMetadata } from 'auth0'

export default class UserReference implements UserData {
  public app_metadata: AppMetadata | undefined
  public blocked: boolean | undefined
  public email: string | undefined
  public email_verified: boolean | undefined
  public family_name: string | undefined
  public given_name: string | undefined
  public name: string | undefined
  public nickname: string | undefined
  public password: string | undefined
  public phone_number: string | undefined
  public phone_verified: boolean | undefined
  public picture: string | undefined
  public user_id: string | undefined
  public user_metadata: UserMetadata | undefined
  public username: string | undefined
  public verify_email: boolean | undefined

  public get id () {
    return this.user_id
  }

  public getRoles (): Promise<Role[]> {
    return $nuxt.$api.$get('/account/users/' + this.id + '/roles')
  }

  public addRoles (ids: string[]) {
    return $nuxt.$api.$post<void>('/account/users/' + this.id + '/roles', ids)
  }

  public removeRoles (ids: string[]) {
    return $nuxt.$api.$delete<void>('/account/users/' + this.id + '/roles', { data: ids })
  }
}
