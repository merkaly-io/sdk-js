import ProductEndpoint from './controller/product.controller'

export default class MerkalyClient {
  public $products = new ProductEndpoint()
}
