import API from '@merkaly/api'
import { $path as AccountPath } from '@merkaly/api/src/account'
import * as validator from '@merkaly/api/src/account/roles/role.validator'
import $axios from 'axios'
import { join } from 'path'
import RoleReference from './role.reference'

const route = (...path: string[]) => join(AccountPath, API.Account.Role.$path, ...path)

namespace Role {
  export const find = async () => $axios.get<RoleReference[]>(route())

  export const read = async (id: string) => $axios.get<RoleReference>(route(id))

  export const create = async (payload: validator.CreateRoleValidator) => $axios.post<RoleReference>(route(), payload)

  export const update = async (id: string, payload: validator.UpdateRoleValidator) => $axios.put<RoleReference>(route(id), payload)

  export const remove = async (id: string) => $axios.delete<void>(route(id))
}

export default Role
