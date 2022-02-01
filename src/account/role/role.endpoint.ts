import { join } from 'path'
import { $AccountPath } from '@merkaly/api/src/account'
import { CreateRoleValidator, RoleEntity, UpdateRoleValidator } from '@merkaly/api/src/account/roles'
import axios from '../../app.axios'
import RoleReference from './role.reference'

export const route = (...path: string[]) => join($AccountPath, RoleEntity.$path, ...path)

namespace Role {
  export const find = (): Promise<RoleReference[]> => axios.$get(route())

  export const read = (id: string): Promise<RoleReference> => axios.$get(route(id))

  export const create = (payload: CreateRoleValidator): Promise<RoleReference> => axios.$post(route(), payload)

  export const update = (id: string, payload: UpdateRoleValidator): Promise<RoleReference> => axios.$put(route(id), payload)

  export const remove = (id: string): Promise<void> => axios.$delete(route(id))
}

export default Role
