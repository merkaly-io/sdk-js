import { RoleEntity, RoleUserEntity } from '@merkaly/api/src/account/roles'
import { route } from './role.endpoint'

export default class RoleReference extends RoleEntity {
  public name: string
  public description: string
  public users: RoleUserEntity[] = []

  public getUsers () {
    return $nuxt.$api.$get<RoleUserEntity[]>(route(this.id, RoleUserEntity.$path))
  }

  public addUsers (ids: string[]) {
    return $nuxt.$api.$post<void>(route(this.id, RoleUserEntity.$path), ids)
  }

  public removeUsers (ids: string[]) {
    return $nuxt.$api.$delete<void>(route(this.id, RoleUserEntity.$path), { data: ids })
  }
}
