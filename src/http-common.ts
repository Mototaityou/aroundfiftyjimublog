import axios, { type AxiosInstance } from 'axios'

const apiClient: AxiosInstance = axios.create({
  // APIのURL
  baseURL: import.meta.env.VITE_APP_HTTP_COMMON_BASEURL,
  // リクエストヘッダ
  headers: {
    'Content-type': 'aplication/json'
  }
})

export default apiClient
