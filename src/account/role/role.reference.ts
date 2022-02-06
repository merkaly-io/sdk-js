import { join } from 'path'
import { RoleEntity, RoleUserEntity } from '@merkaly/api/src/account/roles'
import { route } from './role.endpoint'

export default class RoleReference extends RoleEntity {
  public name: string
  public description: string
  public users: RoleUserEntity[] = []

  public static getUsers (roleId: string): Promise<RoleUserEntity[]> {
    return $nuxt.$request.$get(route(roleId, RoleUserEntity.$path))
  }

  public static addUser (roleId: string, userId: string): Promise<RoleUserEntity> {
    return $nuxt.$request.$post(route(roleId, RoleUserEntity.$path), { id: userId })
  }

  public static removeUser (roleId: string, userId: string): Promise<void> {
    return $nuxt.$request.$delete(join(route(roleId, RoleUserEntity.$path), userId))
  }
}
