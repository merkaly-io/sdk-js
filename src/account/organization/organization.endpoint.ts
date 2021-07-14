import * as validator from '@merkaly/api/dist/account/organizations/organization.validator'
import $axios from 'axios'
import { join } from 'path'
import OrganizationReference from './organization.reference'

export const find = async () =>
  $axios.get<OrganizationReference[]>(join('account', 'organizations'))

export const read = async (id: string) =>
  $axios.get<OrganizationReference>(join('account', 'organizations', id))

export const create = async (payload: validator.CreateOrganizationValidator) =>
  $axios.post<OrganizationReference>(join('account', 'organizations'), payload)

export const update = async (id: string, payload: validator.UpdateOrganizationValidator) =>
  $axios.put<OrganizationReference>(join('account', 'organizations', id), payload)

export const remove = async (id: string) =>
  $axios.delete<void>(join('account', 'organizations', id))
