import axios from 'axios'

const ApiService = axios.create({
  baseURL: 'http://localhost:3001'
})

ApiService.interceptors.request.use(async config => {
  const userData = await localStorage.getItem('codeburguer:userData')
  const token = userData && JSON.parse(userData).token
  config.headers.authorization = `Bearer ${token}`

  return config
})

export default ApiService
