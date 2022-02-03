import Brand from './brand/brand.endpoint'
import Category from './category/category.endpoint'
import Product from './product/product.endpoint'
import Property from './property/property.endpoint'

namespace Inventory {
  export const brands = Brand
  export const categories = Category
  export const products = Product
  export const properties = Property
}

export default Inventory
