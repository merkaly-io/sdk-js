import Organization from './organization/organization.endpoint'
import Role from './role/role.endpoint'
import User from './user/user.endpoint'

export default class Account {
  public static readonly organizations = Organization
  public static readonly roles = Role
  public static readonly users = User
}
