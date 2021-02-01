import { AxiosInstance } from 'axios'
import Product from './product.model'

export default class ProductEndpoint {
  private readonly $axios!: AxiosInstance

  public find () {
    return this.$axios.get<Product[]>('/products')
  }

  public read (id: string) {
    return this.$axios.get<Product>(`/products/${id}`)
  }

  public update (id: string, payload: Partial<Product>) {
    return this.$axios.patch<Product>(`/products/${id}`, payload)
  }

  public remove (id: string) {
    return this.$axios.delete<void>(`/products/${id}`)
  }
}
