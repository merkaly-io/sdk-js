import { Connection } from './connections/connection.endpoint'
import { Organization } from './organization/organization.endpoint'
import { Role } from './role/role.endpoint'
import { User } from './user/user.endpoint'

export class Account {
  public readonly organizations = new Organization()
  public readonly connections = new Connection()
  public readonly roles = new Role()
  public readonly users = new User()
}
