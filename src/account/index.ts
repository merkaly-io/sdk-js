import { NuxtAxiosInstance } from '@nuxtjs/axios'
import Organization from './organization/organization.endpoint'
import Role from './role/role.endpoint'
import User from './user/user.endpoint'

export default function Account ($axios: NuxtAxiosInstance) {
  const organizations = Organization($axios)
  const roles = Role($axios)
  const users = User($axios)

  return { organizations, roles, users }
}
