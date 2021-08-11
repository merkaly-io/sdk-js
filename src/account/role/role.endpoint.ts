import { $AccountPath } from '@merkaly/api/src/account'
import { CreateRoleValidator, RoleEntity, UpdateRoleValidator } from '@merkaly/api/src/account/roles'
import $axios from 'axios'
import { join } from 'path'
import RoleReference from './role.reference'

export const route = (...path: string[]) => join($AccountPath, RoleEntity.$path, ...path)

namespace Role {
  export const find = async () => $axios.get<RoleReference[]>(route())

  export const read = async (id: string) => $axios.get<RoleReference>(route(id))

  export const create = async (payload: CreateRoleValidator) => $axios.post<RoleReference>(route(), payload)

  export const update = async (id: string, payload: UpdateRoleValidator) => $axios.put<RoleReference>(route(id), payload)

  export const remove = async (id: string) => $axios.delete<void>(route(id))
}

export default Role
