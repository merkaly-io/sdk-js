import axios from 'axios'
import * as https from 'https'

axios.defaults.baseURL = process.env.baseUrl
axios.defaults.httpsAgent = new https.Agent({
  rejectUnauthorized: false
})

export default axios
