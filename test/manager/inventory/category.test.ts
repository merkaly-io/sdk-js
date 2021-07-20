import CategoryEntity from '@merkaly/api/src/inventory/categories/category.entity'
import { CreateCategoryValidator } from '@merkaly/api/src/inventory/categories/category.validator'
import { isFirebasePushId } from 'class-validator'
import faker from 'faker'
import SDK from '../../../src/app'

describe('Category Endpoint', () => {
  SDK.setBaseUrl(String(process.env.baseUrl))
  const $merkaly = new SDK.Admin()

  // beforeAll(async () => $merkaly.$auth.login({
  //   username: String(process.env.username),
  //   password: String(process.env.password)
  // }))

  describe('when basic category is created', () => {
    let category: CategoryEntity
    const payload: CreateCategoryValidator = {
      name: faker.commerce.department()
    }

    beforeAll(async () => {
      let { data } = await $merkaly.inventory.categories.create(payload)
      category = data

      expect(isFirebasePushId(category.id)).toBeTruthy()
    })

    test('should retrieve the created category', async () => {
      let { data } = await $merkaly.inventory.categories.read(category.id)

      expect(data.name).toEqual(payload.name)
    })

    test('should retrieve all categories including the created category', async () => {
      let { data: categories } = await $merkaly.inventory.categories.find()

      expect(categories).toEqual(expect.arrayContaining([expect.objectContaining(category)]))

    })

    afterAll(async () => {
      await $merkaly.inventory.categories.remove(category.id)
      const { data } = await $merkaly.inventory.categories.read(category.id)

      expect(data).toBeFalsy()
    })
  })

})
