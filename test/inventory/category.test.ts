import CategoryEntity from '@sk-merkaly/server/dist/inventory/category/category.entity'
import CreateCategoryValidator from '@sk-merkaly/server/dist/inventory/category/category.validator'
import { isFirebasePushId } from 'class-validator'
import faker from 'faker'
import { Admin } from '../../src/app'

describe('Category Endpoint', () => {
  const $merkaly = new Admin(String(process.env.baseUrl))

  beforeAll(async () => $merkaly.$auth.login({
    username: String(process.env.username),
    password: String(process.env.password)
  }))

  describe('when basic category is created', () => {
    let product: CategoryEntity
    const payload: CreateCategoryValidator = {
      name: faker.commerce.department()
    }

    beforeAll(async () => {
      product = await $merkaly.$category.create(payload)

      expect(isFirebasePushId(product.id)).toBeTruthy()
    })

    test('should retrieve the created category', async () => {
      await $merkaly.$category.read(product.id)

      expect(product.name).toEqual(payload.name)
    })

    test('should retrieve all categories including the created category', async () => {
      const result = await $merkaly.$category.find()

      expect(result).toEqual(expect.arrayContaining([expect.objectContaining(product)]))

    })

    afterAll(async () => {
      await $merkaly.$category.remove(product.id)
      const result = await $merkaly.$category.read(product.id)

      expect(result).toBeFalsy()
    })
  })

})
