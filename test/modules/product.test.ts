import ProductController from '@/modules/market/product.controller'

describe('ageea', () => {
  test('adds 1 + 2 to equal 3', () => {
    new ProductController().create({ name: 'gea', brand: 'aaeg', price: 24, category: 'agegea' })

    expect(3).toBe(3)
  })
})
