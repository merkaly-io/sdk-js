import CustomerEntity from '@sk-merkaly/server/dist/business/customer/customer.entity'
import * as validator from '@sk-merkaly/server/dist/business/customer/customer.validator'
import $axios from 'axios'
import { join } from 'path'

export const find = async () =>
  $axios.get<CustomerEntity[]>('/customers')

export const read = async (id: string) =>
  $axios.get<CustomerEntity>(join('/customers', id))

export const create = async (payload: validator.CreateCustomerValidator) =>
  $axios.post<CustomerEntity>('/customers', payload)

export const update = async (id: string, payload: validator.UpdateCustomerValidator) =>
  $axios.put<CustomerEntity>(join('/customers', id), payload)

export const remove = async (id: string) =>
  $axios.delete<void>(join('/customers', id))

