import {
  CreateUserValidator,
  FindUserValidator,
  UpdateUserValidator
} from '@merkaly/api/src/account/users/user.validator'
import { plainToInstance } from 'class-transformer'
import { useAxios } from '../../../nuxt.axios'
import UserReference from './user.reference'

export class User {
  public find (params?: FindUserValidator) {
    return useAxios.get<UserReference[]>('/account/users/', { params })
      .then(users => users.map(user => plainToInstance(UserReference, user)))
  }

  public read (id: UserReference['id']) {
    return useAxios.get<UserReference>('/account/users/' + id)
      .then(user => plainToInstance(UserReference, user))
  }

  public create (payload: CreateUserValidator) {
    return useAxios.post<UserReference>('/account/users/', payload)
      .then(user => plainToInstance(UserReference, user))
  }

  public update (id: UserReference['id'], payload: UpdateUserValidator) {
    return useAxios.patch<UserReference>('/account/users/' + id, payload)
      .then(user => plainToInstance(UserReference, user))
  }

  public remove (id: UserReference['id']) {
    return useAxios.delete<void>('/account/users/' + id)
  }
}
