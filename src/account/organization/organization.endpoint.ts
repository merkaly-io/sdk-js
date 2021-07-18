import AccountModule from '@merkaly/api/src/account/account.module'
import OrganizationModule from '@merkaly/api/src/account/organizations/organization.module'
import * as validator from '@merkaly/api/src/account/organizations/organization.validator'
import $axios from 'axios'
import { join } from 'path'
import OrganizationReference from './organization.reference'

export const find = async () =>
  $axios.get<OrganizationReference[]>(join(AccountModule.$path, OrganizationModule.$path))

export const read = async (id: string) =>
  $axios.get<OrganizationReference>(join(AccountModule.$path, OrganizationModule.$path, id))

export const create = async (payload: validator.CreateOrganizationValidator) =>
  $axios.post<OrganizationReference>(join(AccountModule.$path, OrganizationModule.$path), payload)

export const update = async (id: string, payload: validator.UpdateOrganizationValidator) =>
  $axios.put<OrganizationReference>(join(AccountModule.$path, OrganizationModule.$path, id), payload)

export const remove = async (id: string) =>
  $axios.delete<void>(join(AccountModule.$path, OrganizationModule.$path, id))
