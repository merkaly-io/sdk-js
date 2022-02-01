import Brand from './brand/brand.endpoint'
import Category from './category/category.endpoint'
import Product from './product/product.endpoint'
import Property from './property/property.endpoint'

export default class Inventory {
  public static readonly brands = Brand
  public static readonly categories = Category
  public static readonly products = Product
  public static readonly properties = Property
}
