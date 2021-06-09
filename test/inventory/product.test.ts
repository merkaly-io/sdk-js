import ProductEntity from '@sk-merkaly/server/dist/inventory/product/product.entity'
import { CreateProductValidator } from '@sk-merkaly/server/dist/inventory/product/product.validator'
import { isFirebasePushId } from 'class-validator'
import faker from 'faker'
import { Admin } from '../../src/app'

describe('Products Endpoint', () => {
  const $merkaly = new Admin(String(process.env.baseUrl))

  beforeAll(async () => $merkaly.$auth.login({
    username: String(process.env.username),
    password: String(process.env.password)
  }))

  describe('when basic product is created', () => {
    let product: ProductEntity
    const payload: CreateProductValidator = {
      name: faker.commerce.product(),
      price: faker.commerce.price()
    }

    beforeAll(async () => {
      product = await $merkaly.$product.create(payload)

      expect(isFirebasePushId(product.id)).toBeTruthy()
    })

    test('should retrieve the created product', async () => {
      await $merkaly.$product.read(product.id)

      expect(product.name).toEqual(payload.name)
      expect(Number(product.price).toFixed(2)).toEqual(payload.price)
    })

    test('should retrieve all products including the created product', async () => {
      const result = await $merkaly.$product.find()

      expect(result).toEqual(expect.arrayContaining([expect.objectContaining(product)]))

    })

    afterAll(async () => {
      await $merkaly.$product.remove(product.id)
      const result = await $merkaly.$product.read(product.id)

      expect(result).toBeFalsy()
    })
  })

})
