import ProductEntity from '@sk-merkaly/server/dist/inventory/product/product.entity'
import * as validator from '@sk-merkaly/server/dist/inventory/product/product.validator'
import $axios from 'axios'
import { join } from 'path'

export const find = async () => {
  const { data } = await $axios.get<ProductEntity[]>('/products')

  return data
}

export const read = async (id: string) => {
  const { data } = await $axios.get<ProductEntity>(join('/products', id))

  return data
}

export const create = async (payload: validator.CreateProductValidator) => {
  const { data } = await $axios.post<ProductEntity>('/products', payload)

  return data
}


export const update = async (id: string, payload: validator.UpdateProductValidator) => {
  const { data } = await $axios.put<ProductEntity>(join('/products', id), payload)

  return data
}

export const remove = async (id: string) => {
  const { data } = await $axios.delete<void>(join('/products', id))

  return data
}

