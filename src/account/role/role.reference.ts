import { RoleEntity, RoleUserEntity } from '@merkaly/api/src/account/roles'
import { join } from 'path'
import axios from '../../app.axios'
import AppReference, { EntityType } from '../../app.reference'
import { route } from './role.endpoint'

export default class RoleReference extends AppReference implements EntityType<RoleEntity> {
  public name: string
  public description: string
  public users: RoleUserEntity[] = []

  public static getUsers (roleId: string): Promise<RoleUserEntity[]> {
  	return axios.$get(route(roleId, RoleUserEntity.$path))
  }

  public static addUser (roleId: string, userId: string): Promise<RoleUserEntity> {
  	return axios.$post(route(roleId, RoleUserEntity.$path), { id: userId })
  }

  public static removeUser (roleId: string, userId: string): Promise<void> {
  	return axios.$delete(join(route(roleId, RoleUserEntity.$path), userId))
  }
}
