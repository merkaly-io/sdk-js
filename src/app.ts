import ProductEndpoint from './product/product.endpoint'

export default class MerkalyClient {
  private clientId: string
  public $products = ProductEndpoint

  constructor (clientId: string) {
    this.clientId = clientId
  }

}
