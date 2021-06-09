import { LoginValidator } from '@sk-merkaly/server/dist/account/auth/auth.validator'
import { TokenResponse } from 'auth0'
import $axios from 'axios'

export const login = async ({ username, password }: LoginValidator) => $axios.post<TokenResponse>('/auth/login', { username, password })
  .then(({ data }) => {
    $axios.defaults.headers['Authorization'] = `Bearer ${data.access_token}`

    return data
  })

export const register = async (email: string, password: string) =>
  $axios.post('/auth/register', { email, password })

export const recover = async (email: string) =>
  $axios.post('/auth/recover', { email })
