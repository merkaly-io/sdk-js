import { Role, User } from 'auth0'

export default class RoleReference implements Role {
  public id: string
  public name: string
  public description: string
  public users: User[] = []

  public getUsers () {
    return $nuxt.$api.$get<User[]>('/account/roles/' + this.id + '/users')
  }

  public addUsers (ids: string[]) {
    return $nuxt.$api.$post<void>('/account/roles/' + this.id + '/users', ids)
  }

  public removeUsers (ids: string[]) {
    return $nuxt.$api.$delete<void>('/account/roles/' + this.id + '/users', { data: ids })
  }
}
