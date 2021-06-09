import ProductEntity from '@sk-merkaly/server/dist/inventory/product/product.entity'
import * as validator from '@sk-merkaly/server/dist/inventory/product/product.validator'
import $axios from 'axios'
import { join } from 'path'
import AbstractEndpoint from '../abstract.endpoint'

const endpoint: AbstractEndpoint<ProductEntity> = {
  async find () {
    const { data } = await $axios.get('/products')

    return data
  },

  async read (id: string) {
    const { data } = await $axios.get(join('/products', id))

    return data
  },

  async create (payload: validator.CreateProductValidator) {
    const { data } = await $axios.post('/products', payload)

    return data
  },

  async update (id: string, payload: validator.UpdateProductValidator) {
    const { data } = await $axios.put(join('/products', id), payload)

    return data
  },

  async remove (id: string) {
    const { data } = await $axios.delete(join('/products', id))

    return data
  }
}

export default endpoint
