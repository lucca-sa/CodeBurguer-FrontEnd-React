import axios from 'axios'

export const ApiService = axios.create({
  baseURL: 'http://localhost:3001'
})
