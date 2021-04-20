import { CreateProductValidator, UpdateProductValidator } from '@sk-merkaly/server/src/product/product.validator'
import { join } from 'path'
import Product from '../../entity/product.entity'
import $axios from '../../plugin/axios'
import Controller from '../.controller'

const prefix = '/products'

export default class ProductController extends Controller<Product> {
  find () {
    return $axios.get(prefix)
  }

  read (id: string) {
    return $axios.get(join(prefix, id))
  }

  create (payload: CreateProductValidator) {
    return $axios.post(prefix, payload)
  }

  update (id: string, payload: UpdateProductValidator) {
    return $axios.put(join(prefix, id), payload)
  }

  remove (id: string) {
    return $axios.delete(join(prefix, id))
  }
}
