import {
  CreateProductValidator,
  IdProductValidator,
  UpdateProductValidator
} from '@merkaly/api/src/inventory/products/product.validator'
import { plainToInstance } from 'class-transformer'
import useAxios from '../../../hooks/useAxios'
import ProductReference from './product.reference'

namespace Product {
  export const find = () => {
    return useAxios.$get<ProductReference[]>('/inventory/products/')
      .then(products => products.map(product => plainToInstance(ProductReference, product)))
  }

  export const read = (id: IdProductValidator) => {
    return useAxios.$get<ProductReference>('/inventory/products/' + id)
      .then(product => plainToInstance(ProductReference, product))
  }

  export const create = (payload: CreateProductValidator) => {
    return useAxios.$post<ProductReference>('/inventory/products/', payload)
      .then(product => plainToInstance(ProductReference, product))
  }

  export const update = (id: IdProductValidator, payload: UpdateProductValidator) => {
    return useAxios.$patch<ProductReference>('/inventory/products/' + id, payload)
      .then(product => plainToInstance(ProductReference, product))
  }

  export const remove = (id: IdProductValidator) => {
    return useAxios.$delete<void>('/inventory/products/' + id)
  }
}

export default Product
