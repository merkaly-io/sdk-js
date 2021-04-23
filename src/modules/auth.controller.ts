import $axios from '../plugin/axios'

export default {
  async login (username: string, password: string) {

    return $axios.post('/auth/login', { username, password })
      .then(({ data }) => {
        $axios.setToken(data.accessToken)

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
