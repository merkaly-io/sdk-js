import { CreateProductValidator } from '@sk-merkaly/server/market/product/product.validator'
import faker from 'faker'
import Merkaly from '../../../src/app'

describe('Product Controller', () => {
  const $merkaly = new Merkaly(String(process.env.baseUrl))

  beforeAll(async () => {
    await $merkaly.$auth.login(String(process.env.username), String(process.env.password))
  })

  test('should create a new product', async () => {

    const payload: CreateProductValidator = {
      name: faker.commerce.product(),
      price: faker.commerce.price(),
      category: 'bVgYgCTfHSbP145XIUL5',
      brand: 'bVgYgCTfHSbP145XIUL5'
    }

    const result = await $merkaly.$admin.product.create(payload)

    expect(result).toBe(payload)
  })

  test('should find all products', async () => {
    const result = await $merkaly.$admin.product.find()

    expect(result).toBeInstanceOf(Array)
  })

})
