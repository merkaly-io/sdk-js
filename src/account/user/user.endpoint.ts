import AccountModule from '@merkaly/api/src/account/account.module'
import UserModule from '@merkaly/api/src/account/users/user.module'
import * as validator from '@merkaly/api/src/account/users/user.validator'
import $axios from 'axios'
import { join } from 'path'
import UserReference from './user.reference'

export const find = async () =>
  $axios.get<UserReference[]>(join(AccountModule.$path, UserModule.$path))

export const read = async (id: string) =>
  $axios.get<UserReference>(join(AccountModule.$path, UserModule.$path, id))

export const create = async (payload: validator.CreateUserValidator) =>
  $axios.post<UserReference>(join(AccountModule.$path, UserModule.$path), payload)

export const update = async (id: string, payload: validator.UpdateUserValidator) =>
  $axios.put<UserReference>(join(AccountModule.$path, UserModule.$path, id), payload)

export const remove = async (id: string) =>
  $axios.delete<void>(join(AccountModule.$path, UserModule.$path, id))
