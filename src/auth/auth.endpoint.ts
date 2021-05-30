import { LoginValidator } from '@sk-merkaly/server/dist/account/auth/auth.validator'
import { TokenResponse } from 'auth0'
import $axios from 'axios'

export default {
  async login ({ username, password }: LoginValidator) {

    return $axios.post<TokenResponse>('/auth/login', { username, password })
      .then(({ data }) => {
        $axios.defaults.headers['Authorization'] = `Bearer ${data.access_token}`

        return data
      })
  },

  async register (email: string, password: string) {

    return $axios.post('/auth/register', { email, password })
  },

  async recover (email: string) {

    return $axios.post('/auth/recover', { email })
  }
}
