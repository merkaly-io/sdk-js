import { CreateProductValidator } from '@sk-merkaly/server/src/product/product.validator'
import faker from 'faker'
import ProductController from '../../src/modules/market/product.controller'

describe('Product Controller', () => {
  const product = new ProductController()

  test('Create new Product', async () => {

    const payload: CreateProductValidator = {
      name: faker.commerce.product(),
      price: Number(faker.commerce.price()),
      category: faker.commerce.productMaterial(),
      brand: faker.commerce.productAdjective()
    }

    const result = await product.create(payload)

    expect(result).toBe(payload)
  })
})
