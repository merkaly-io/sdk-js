import ProductEntity from '@sk-merkaly/server/dist/market/product/product.entity'
import {
  CreateProductValidator,
  UpdateProductValidator
} from '@sk-merkaly/server/dist/market/product/product.validator'
import { join } from 'path'
import AbstractEndpoint from '../abstract.endpoint'

export default class ProductEndpoint extends AbstractEndpoint<ProductEntity> {
  async find () {
    const { data } = await this.$axios.get<ProductEntity[]>('/products')

    return data
  }

  async read (id: string) {
    const { data } = await this.$axios.get<ProductEntity>(join('/products', id))

    return data
  }

  async create (payload: CreateProductValidator) {
    const { data } = await this.$axios.post<ProductEntity>('/products', payload)

    return data
  }

  async update (id: string, payload: UpdateProductValidator) {
    const { data } = await this.$axios.put<ProductEntity>(join('/products', id), payload)

    return data
  }

  async remove (id: string) {
    const { data } = await this.$axios.delete<void>(join('/products', id))

    return data
  }
}
