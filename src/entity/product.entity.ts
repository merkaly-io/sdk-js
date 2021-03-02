import Entity from './.entity'

export default interface Product extends Entity {
  name: string
  category: unknown,
  brand: unknown,
  customer: unknown,
  price: number,
  variants: unknown[],
  images: unknown[]
}
