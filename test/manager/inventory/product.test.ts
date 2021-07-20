import ProductEntity from '@merkaly/api/src/inventory/products/product.entity'
import { CreateProductValidator } from '@merkaly/api/src/inventory/products/product.validator'
import { isFirebasePushId } from 'class-validator'
import faker from 'faker'
import SDK from '../../../src/app'

describe('Products Endpoint', () => {
  SDK.setBaseUrl(String(process.env.baseUrl))
  const $merkaly = new SDK.Admin()

  // beforeAll(async () => $merkaly.$auth.login({
  //   username: String(process.env.username),
  //   password: String(process.env.password)
  // }))

  describe('when basic product is created', () => {
    let product: ProductEntity
    const payload: CreateProductValidator = {
      name: faker.commerce.product(),
      // brand: `category`,
      // category: `category`,
      price: faker.commerce.price()
    }

    beforeAll(async () => {
      let { data } = await $merkaly.inventory.products.create(payload)
      product = data

      expect(isFirebasePushId(product.id)).toBeTruthy()
    })

    test('should retrieve the created product', async () => {
      let { data } = await $merkaly.inventory.products.read(product.id)

      expect(data.name).toEqual(payload.name)
      expect(data.price).toEqual(payload.price)
    })

    test('should retrieve all products including the created product', async () => {
      let { data: products } = await $merkaly.inventory.products.find()

      expect(products).toEqual(expect.arrayContaining([expect.objectContaining(product)]))

    })

    afterAll(async () => {
      await $merkaly.inventory.products.remove(product.id)
      const { data } = await $merkaly.inventory.products.read(product.id)

      expect(data).toBeFalsy()
    })
  })

})
