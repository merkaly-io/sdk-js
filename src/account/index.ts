import Connection from './connections/connection.endpoint'
import Organization from './organization/organization.endpoint'
import Role from './role/role.endpoint'
import User from './user/user.endpoint'

namespace Account {
  export const organizations = Organization
  export const connections = Connection
  export const roles = Role
  export const users = User
}

export default Account
