import brand from '../store/cart/brand.endpoint'
import category from './category/category.endpoint'
import product from './product/product.endpoint'
import property from './property/property.endpoint'

namespace Inventory {
  export const Brand = brand
  export const Category = category
  export const Product = product
  export const Property = property
}

export default Inventory
