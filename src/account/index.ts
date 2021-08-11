import organization from './organization/organization.endpoint'
import role from './role/role.endpoint'
import user from './user/user.endpoint'

namespace Account {
  export const useOrganization = () => organization
  export const roles = () => role
  export const users = () => user
}

export default Account
