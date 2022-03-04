import {
  CreateCartValidator,
  FindCartValidator,
  IdCartValidator,
  UpdateCartValidator
} from '@merkaly/api/src/store/carts/cart.validator'
import { plainToInstance } from 'class-transformer'
import MerkalySDK from '../../sdk'
import CartReference from './cart.reference'

export class Cart {
  public find (params?: FindCartValidator) {
    return MerkalySDK.$axios.get<CartReference[]>('/store/carts', { params })
      .then(carts => carts.map(cart => plainToInstance(FindCartValidator, cart)))
  }

  public read (id: IdCartValidator) {
    return MerkalySDK.$axios.get<CartReference>('/store/carts' + id)
      .then(cart => plainToInstance(FindCartValidator, cart))
  }

  public create (payload: CreateCartValidator) {
    return MerkalySDK.$axios.post<CartReference>('/store/carts', payload)
      .then(cart => plainToInstance(FindCartValidator, cart))
  }

  public update (id: IdCartValidator, payload: UpdateCartValidator) {
    return MerkalySDK.$axios.patch<CartReference>('/store/carts' + id, payload)
      .then(cart => plainToInstance(FindCartValidator, cart))
  }

  public remove (id: IdCartValidator) {
    return MerkalySDK.$axios.delete<void>('/store/carts' + id)
  }
}
