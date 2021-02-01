import ProductEndpoint from './product/product.endpoint'

export default class MerkalyClient {
  private clientID: string
  protected $products: ProductEndpoint

  constructor (clientID: string) {
    this.clientID = clientID
    this.$products = new ProductEndpoint()
  }
}
