import { CreateProductValidator } from '@sk-merkaly/server/src/market/product/product.validator'
import faker from 'faker'
import { Admin } from '../../../src/app'

describe('Product Controller', () => {
  const admin = new Admin()

  beforeAll(async () => {
    await admin.auth.login()
  })

  test('should create a new product', async () => {

    const payload: CreateProductValidator = {
      name: faker.commerce.product(),
      price: faker.commerce.price(),
      category: 'bVgYgCTfHSbP145XIUL5',
      brand: 'bVgYgCTfHSbP145XIUL5'
    }

    const result = await admin.product.create(payload)

    expect(result).toBe(payload)
  })

  test('should find all products', async () => {
    const result = await admin.product.find()

    expect(result).toBeInstanceOf(Array)
  })

})
