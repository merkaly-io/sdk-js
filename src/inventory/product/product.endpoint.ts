import {
  CreateProductValidator,
  IdProductValidator,
  UpdateProductValidator
} from '@merkaly/api/src/inventory/products/product.validator'
import { plainToInstance } from 'class-transformer'
import MerkalySDK from '../../sdk'
import ProductReference from './product.reference'

export class Product {
  public find () {
    return MerkalySDK.$axios.get<ProductReference[]>('/inventory/products/')
      .then(products => products.map(product => plainToInstance(ProductReference, product)))
  }

  public read (id: IdProductValidator) {
    return MerkalySDK.$axios.get<ProductReference>('/inventory/products/' + id)
      .then(product => plainToInstance(ProductReference, product))
  }

  public create (payload: CreateProductValidator) {
    return MerkalySDK.$axios.post<ProductReference>('/inventory/products/', payload)
      .then(product => plainToInstance(ProductReference, product))
  }

  public update (id: IdProductValidator, payload: UpdateProductValidator) {
    return MerkalySDK.$axios.patch<ProductReference>('/inventory/products/' + id, payload)
      .then(product => plainToInstance(ProductReference, product))
  }

  public remove (id: IdProductValidator) {
    return MerkalySDK.$axios.delete<void>('/inventory/products/' + id)
  }
}
