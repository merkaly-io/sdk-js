import organization from './organization/organization.endpoint'
import role from './role/role.endpoint'
import user from './user/user.endpoint'

namespace Account {
  export const Organization = organization
  export const Role = role
  export const User = user
}

export default Account
