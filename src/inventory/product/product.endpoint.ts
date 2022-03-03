import {
  CreateProductValidator,
  IdProductValidator,
  UpdateProductValidator
} from '@merkaly/api/src/inventory/products/product.validator'
import { plainToInstance } from 'class-transformer'
import MerkalySDK from '../../sdk'
import ProductReference from './product.reference'

namespace Product {
  export const find = () => {
    return MerkalySDK.prototype.$axios.$get<ProductReference[]>('/inventory/products/')
      .then(products => products.map(product => plainToInstance(ProductReference, product)))
  }

  export const read = (id: IdProductValidator) => {
    return MerkalySDK.prototype.$axios.$get<ProductReference>('/inventory/products/' + id)
      .then(product => plainToInstance(ProductReference, product))
  }

  export const create = (payload: CreateProductValidator) => {
    return MerkalySDK.prototype.$axios.$post<ProductReference>('/inventory/products/', payload)
      .then(product => plainToInstance(ProductReference, product))
  }

  export const update = (id: IdProductValidator, payload: UpdateProductValidator) => {
    return MerkalySDK.prototype.$axios.$patch<ProductReference>('/inventory/products/' + id, payload)
      .then(product => plainToInstance(ProductReference, product))
  }

  export const remove = (id: IdProductValidator) => {
    return MerkalySDK.prototype.$axios.$delete<void>('/inventory/products/' + id)
  }
}

export default Product
