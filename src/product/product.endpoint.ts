import { CreateProductValidator, UpdateProductValidator } from '@sk-merkaly/server/src/product/product.validator'
import { join } from 'path'
import { EndpointInterface } from '../../index'
import $axios from '../plugins/axios'
import Product from './product.model'

const prefix = 'products'

const endpoint: EndpointInterface<Product> = {
  find () {
    return $axios.get(prefix)
  },

  read (id: string) {
    return $axios.get(join(prefix, id))
  },

  create (payload: CreateProductValidator) {
    return $axios.post(prefix, payload)
  },

  update (id: string, payload: UpdateProductValidator) {
    return $axios.put(join(prefix, id), payload)
  },

  remove (id: string) {
    return $axios.delete(join(prefix, id))
  }
}

export default endpoint
