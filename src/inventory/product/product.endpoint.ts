import * as validator from '@merkaly/api/dist/inventory/products/product.validator'
import $axios from 'axios'
import { join } from 'path'
import ProductReference from './product.reference'

export const find = async () =>
  $axios.get<ProductReference[]>('/products')

export const read = async (id: string) =>
  $axios.get<ProductReference>(join('/products', id))

export const create = async (payload: validator.CreateProductValidator) =>
  $axios.post<ProductReference>('/products', payload)

export const update = async (id: string, payload: validator.UpdateProductValidator) =>
  $axios.put<ProductReference>(join('/products', id), payload)

export const remove = async (id: string) =>
  $axios.delete<void>(join('/products', id))

