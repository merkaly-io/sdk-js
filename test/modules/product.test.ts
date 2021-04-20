import { CreateProductValidator } from '@sk-merkaly/server/src/product/product.validator'
import faker from 'faker'
import { MerkalyAdmin } from '../../src/app'

describe('Product Controller', () => {
  const admin = new MerkalyAdmin()

  test('Create new Product', async () => {

    const payload: CreateProductValidator = {
      name: faker.commerce.product(),
      price: Number(faker.commerce.price()),
      category: faker.commerce.productMaterial(),
      brand: faker.commerce.productAdjective()
    }

    const result = await admin.product.create(payload)

    expect(result).toBe(payload)
  })
})
