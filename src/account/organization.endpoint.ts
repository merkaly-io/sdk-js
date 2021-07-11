import OrganizationEntity from '@merkaly/api/dist/account/organizations/organization.entity'
import * as validator from '@merkaly/api/dist/account/organizations/organization.validator'
import $axios from 'axios'
import { join } from 'path'

export const find = async () =>
  $axios.get<OrganizationEntity[]>('/account/organizations')

export const read = async (id: string) =>
  $axios.get<OrganizationEntity>(join('/account/organizations', id))

export const create = async (payload: validator.CreateOrganizationValidator) =>
  $axios.post<OrganizationEntity>('/account/organizations', payload)

export const update = async (id: string, payload: validator.UpdateOrganizationValidator) =>
  $axios.put<OrganizationEntity>(join('/account/organizations', id), payload)

export const remove = async (id: string) =>
  $axios.delete<void>(join('/account/organizations', id))
