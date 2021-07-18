import AccountModule from '@merkaly/api/src/account/account.module'
import RoleModule from '@merkaly/api/src/account/roles/role.module'
import * as validator from '@merkaly/api/src/account/roles/role.validator'
import $axios from 'axios'
import { join } from 'path'
import RoleReference from './role.reference'

export const find = async () =>
  $axios.get<RoleReference[]>(join(AccountModule.$path, RoleModule.$path))

export const read = async (id: string) =>
  $axios.get<RoleReference>(join(AccountModule.$path, RoleModule.$path, id))

export const create = async (payload: validator.CreateRoleValidator) =>
  $axios.post<RoleReference>(join(AccountModule.$path, RoleModule.$path), payload)

export const update = async (id: string, payload: validator.UpdateRoleValidator) =>
  $axios.put<RoleReference>(join(AccountModule.$path, RoleModule.$path, id), payload)

export const remove = async (id: string) =>
  $axios.delete<void>(join(AccountModule.$path, RoleModule.$path, id))
