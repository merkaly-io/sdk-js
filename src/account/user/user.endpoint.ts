import * as validator from '@merkaly/api/src/account/users/user.validator'
import $axios from 'axios'
import { join } from 'path'
import UserReference from './user.reference'

export const find = async () =>
  $axios.get<UserReference[]>(join('account', 'users'))

export const read = async (id: string) =>
  $axios.get<UserReference>(join('account', 'users', id))

export const create = async (payload: validator.CreateUserValidator) =>
  $axios.post<UserReference>(join('account', 'users'), payload)

export const update = async (id: string, payload: validator.UpdateUserValidator) =>
  $axios.put<UserReference>(join('account', 'users', id), payload)

export const remove = async (id: string) =>
  $axios.delete<void>(join('account', 'users', id))
