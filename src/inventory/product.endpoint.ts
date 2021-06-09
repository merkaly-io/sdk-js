import ProductEntity from '@sk-merkaly/server/dist/inventory/product/product.entity'
import * as validator from '@sk-merkaly/server/dist/inventory/product/product.validator'
import $axios from 'axios'
import { join } from 'path'

export const find = async () =>
  $axios.get<ProductEntity[]>('/products')

export const read = async (id: string) =>
  $axios.get<ProductEntity>(join('/products', id))

export const create = async (payload: validator.CreateProductValidator) =>
  $axios.post<ProductEntity>('/products', payload)

export const update = async (id: string, payload: validator.UpdateProductValidator) =>
  $axios.put<ProductEntity>(join('/products', id), payload)

export const remove = async (id: string) =>
  $axios.delete<void>(join('/products', id))

