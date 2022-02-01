import { join } from 'path'
import { $AccountPath } from '@merkaly/api/src/account'
import { CreateRoleValidator, RoleEntity, UpdateRoleValidator } from '@merkaly/api/src/account/roles'
import axios from '../../app.axios'
import RoleReference from './role.reference'

export const route = (...path: string[]) => join($AccountPath, RoleEntity.$path, ...path)

export default class Role {
  public static readonly find = (): Promise<RoleReference[]> => axios.$get(route())

  public static readonly read = (id: string): Promise<RoleReference> => axios.$get(route(id))

  public static readonly create = (payload: CreateRoleValidator): Promise<RoleReference> => axios.$post(route(), payload)

  public static readonly update = (id: string, payload: UpdateRoleValidator): Promise<RoleReference> => axios.$put(route(id), payload)

  public static readonly remove = (id: string): Promise<void> => axios.$delete(route(id))
}
