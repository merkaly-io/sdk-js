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
    let category: CategoryEntity
    const payload: CreateCategoryValidator = {
      name: faker.commerce.department()
    }

    beforeAll(async () => {
      let { data } = await $merkaly.$category.create(payload)
      category = data

      expect(isFirebasePushId(category.id)).toBeTruthy()
    })

    test('should retrieve the created category', async () => {
      let { data } = await $merkaly.$category.read(category.id)

      expect(data.name).toEqual(payload.name)
    })

    test('should retrieve all categories including the created category', async () => {
      let { data: categories } = await $merkaly.$category.find()

      expect(categories).toEqual(expect.arrayContaining([expect.objectContaining(category)]))

    })

    afterAll(async () => {
      await $merkaly.$category.remove(category.id)
      const { data } = await $merkaly.$category.read(category.id)

      expect(data).toBeFalsy()
    })
  })

})
