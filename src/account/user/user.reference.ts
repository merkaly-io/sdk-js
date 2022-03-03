import { AddUserRole, RemoveUserRole } from '@merkaly/api/src/account/users/roles/role.validator'
import { Role, UserData } from 'auth0'
import MerkalySDK from '../../sdk'

export default class UserReference implements UserData {
  public app_metadata: UserData['app_metadata']
  public blocked: UserData['blocked']
  public email: UserData['email']
  public email_verified: UserData['email_verified']
  public family_name: UserData['family_name']
  public given_name: UserData['given_name']
  public name: UserData['name']
  public nickname: UserData['nickname']
  public phone_number: UserData['phone_number']
  public phone_verified: UserData['phone_verified']
  public picture: UserData['picture']
  public user_id: UserData['user_id']
  public user_metadata: UserData['user_metadata']
  public username: UserData['username']
  public verify_email: UserData['verify_email']

  public get id () {
    return this.user_id
  }

  public getRoles () {
    return MerkalySDK.prototype.$axios.$get<Role[]>('/account/users/' + this.id + '/roles')
  }

  public addRoles (ids: AddUserRole) {
    return MerkalySDK.prototype.$axios.$post<void>('/account/users/' + this.id + '/roles', ids)
  }

  public removeRoles (ids: RemoveUserRole) {
    return MerkalySDK.prototype.$axios.$delete<void>('/account/users/' + this.id + '/roles', { data: ids })
  }
}
