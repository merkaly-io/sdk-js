import * as validator from '@merkaly/api/src/account/roles/role.validator'
import $axios from 'axios'
import { join } from 'path'
import RoleReference from './role.reference'

export const find = async () =>
  $axios.get<RoleReference[]>(join('account', 'roles'))

export const read = async (id: string) =>
  $axios.get<RoleReference>(join('account', 'roles', id))

export const create = async (payload: validator.CreateRoleValidator) =>
  $axios.post<RoleReference>(join('account', 'roles'), payload)

export const update = async (id: string, payload: validator.UpdateRoleValidator) =>
  $axios.put<RoleReference>(join('account', 'roles', id), payload)

export const remove = async (id: string) =>
  $axios.delete<void>(join('account', 'roles', id))
