import { Account } from '@merkaly/api'
import $axios from 'axios'
import { join } from 'path'
import RoleReference from './role.reference'

const route = (...path: string[]) => join(Account.$path, Account.Role.Entity.$path, ...path)

namespace Role {
  export const find = async () => $axios.get<RoleReference[]>(route())

  export const read = async (id: string) => $axios.get<RoleReference>(route(id))

  export const create = async (payload: Account.Role.validators.CreateRoleValidator) => $axios.post<RoleReference>(route(), payload)

  export const update = async (id: string, payload: Account.Role.validators.UpdateRoleValidator) => $axios.put<RoleReference>(route(id), payload)

  export const remove = async (id: string) => $axios.delete<void>(route(id))
}

export default Role
