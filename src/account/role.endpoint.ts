import RoleEntity from '@merkaly/api/dist/account/roles/role.entity'
import * as validator from '@merkaly/api/dist/account/roles/role.validator'
import $axios from 'axios'
import { join } from 'path'

export const find = async () =>
  $axios.get<RoleEntity[]>(join('account', 'roles'))

export const read = async (id: string) =>
  $axios.get<RoleEntity>(join('account', 'roles', id))

export const create = async (payload: validator.CreateRoleValidator) =>
  $axios.post<RoleEntity>(join('account', 'roles'), payload)

export const update = async (id: string, payload: validator.UpdateRoleValidator) =>
  $axios.put<RoleEntity>(join('account', 'roles', id), payload)

export const remove = async (id: string) =>
  $axios.delete<void>(join('account', 'roles', id))
