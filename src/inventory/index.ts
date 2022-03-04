import { Brand } from './brand/brand.endpoint'
import { Category } from './category/category.endpoint'
import { Product } from './product/product.endpoint'
import { Property } from './property/property.endpoint'

export class Inventory {
  public readonly brands = new Brand()
  public readonly categories = new Category()
  public readonly products = new Product()
  public readonly properties = new Property()
}
