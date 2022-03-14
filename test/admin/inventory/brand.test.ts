import { CreateBrandValidator, UpdateBrandValidator } from '@merkaly/api/src/inventory/brands/brand.validator'
import * as faker from 'faker'
import BrandReference from '../../../src/inventory/brand/brand.reference'
import { AdminSDK } from '../../../src/sdk'

describe('Admin > Inventory > Brand', () => {
  const $merkaly = new AdminSDK()

  let brand: BrandReference

  const createValidator = new CreateBrandValidator()
  createValidator.name = faker.vehicle.manufacturer()

  beforeAll(async () => {
    brand = await $merkaly.inventory.brands.create(createValidator)

    expect(brand).toBeInstanceOf(BrandReference)
    expect(brand.id).toBeDefined()
  })

  // beforeAll(async () => $merkaly.$auth.login({
  //   username: String(process.env.username),
  //   password: String(process.env.password)
  // }))

  describe('when an brand is created', () => {
    test('should retrieve the created brand', async () => {
      const createdBrand = await $merkaly.inventory.brands.read(brand.id)

      expect(createdBrand).toBeInstanceOf(BrandReference)

      expect(createdBrand.name).toEqual(createValidator.name)
      expect(createdBrand.createdAt).toBeDefined()
      expect(createdBrand.updatedAt).toBeDefined()
      expect(createdBrand.deletedAt).toBeNull()
    })

    test('should retrieve all brands including the created brand', async () => {
      const brands = await $merkaly.inventory.brands.find()

      expect(brands).toEqual(expect.arrayContaining([expect.objectContaining(brand)]))
    })

    test('should update the created brand', async () => {
      const updateValidator = new UpdateBrandValidator()
      updateValidator.name = faker.vehicle.manufacturer()

      const updatedOrg = await $merkaly.inventory.brands.update(brand.id, updateValidator)

      expect(updatedOrg).toBeInstanceOf(BrandReference)

      expect(updatedOrg.name).toEqual(updateValidator.name)
      expect(updatedOrg.updatedAt).toBeDefined()
    })
  })

  afterAll(async () => {
    await $merkaly.inventory.brands.remove(brand.id)
    const removedBrand = await $merkaly.inventory.brands.read(brand.id)

    expect(removedBrand).toBeFalsy()
  })
})
