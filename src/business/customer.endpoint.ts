import CustomerEntity from '@merkaly/api/dist/account/organizations/organization.controller'
import * as validator from '@merkaly/api/dist/account/organizations/organization.validator'
import $axios from 'axios'
import { join } from 'path'

export const find = async () =>
  $axios.get<CustomerEntity[]>('/customers')

export const read = async (id: string) =>
  $axios.get<CustomerEntity>(join('/customers', id))

export const create = async (payload: validator.CreateOrganizationValidator) =>
  $axios.post<CustomerEntity>('/customers', payload)

export const update = async (id: string, payload: validator.UpdateOrganizationValidator) =>
  $axios.put<CustomerEntity>(join('/customers', id), payload)

export const remove = async (id: string) =>
  $axios.delete<void>(join('/customers', id))

