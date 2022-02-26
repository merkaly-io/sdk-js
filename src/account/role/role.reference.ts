import { RoleEntity } from '@merkaly/api/src/account/roles/role.entity'
import { RoleUserEntity } from '@merkaly/api/src/account/roles/users/user.entity'

export default class RoleReference extends RoleEntity {
  public name: string
  public description: string
  public users: RoleUserEntity[] = []

  public getUsers () {
    return $nuxt.$api.$get<RoleUserEntity[]>('/account/roles/' + this.id + '/users')
  }

  public addUsers (ids: string[]) {
    return $nuxt.$api.$post<void>('/account/roles/' + this.id + '/users', ids)
  }

  public removeUsers (ids: string[]) {
    return $nuxt.$api.$delete<void>('/account/roles/' + this.id + '/users', { data: ids })
  }
}
