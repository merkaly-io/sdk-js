import UserEntity from '@merkaly/api/dist/account/users/user.entity'
import * as validator from '@merkaly/api/dist/account/users/user.validator'
import $axios from 'axios'
import { join } from 'path'

export const find = async () =>
  $axios.get<UserEntity[]>(join('account', 'users'))

export const read = async (id: string) =>
  $axios.get<UserEntity>(join('account', 'users', id))

export const create = async (payload: validator.CreateUserValidator) =>
  $axios.post<UserEntity>(join('account', 'users'), payload)

export const update = async (id: string, payload: validator.UpdateUserValidator) =>
  $axios.put<UserEntity>(join('account', 'users', id), payload)

export const remove = async (id: string) =>
  $axios.delete<void>(join('account', 'users', id))
