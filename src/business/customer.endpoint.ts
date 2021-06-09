import CustomerEntity from '@sk-merkaly/server/dist/business/customer/customer.entity'
import * as validator from '@sk-merkaly/server/dist/business/customer/customer.validator'
import $axios from 'axios'
import { join } from 'path'

export const find = async () => {
  const { data } = await $axios.get<CustomerEntity[]>('/customers')

  return data
}

export const read = async (id: string) => {
  const { data } = await $axios.get<CustomerEntity>(join('/customers', id))

  return data
}

export const create = async (payload: validator.CreateCustomerValidator) => {
  const { data } = await $axios.post<CustomerEntity>('/customers', payload)

  return data
}


export const update = async (id: string, payload: validator.UpdateCustomerValidator) => {
  const { data } = await $axios.put<CustomerEntity>(join('/customers', id), payload)

  return data
}

export const remove = async (id: string) => {
  const { data } = await $axios.delete<void>(join('/customers', id))

  return data
}

