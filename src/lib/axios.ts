import axios from 'axios'

export const api = axios.create({
  // address of API
  baseURL: 'http://localhost:3000',
})
