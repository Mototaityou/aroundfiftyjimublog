import axios, { type AxiosInstance } from 'axios'

const apiClient: AxiosInstance = axios.create({
  // APIのURL
  baseURL: import.meta.env.VITE_APP_DYNAMODB_COMMON_BASEURL,
  // リクエストヘッダ
  headers: {
    'Content-Type': 'application/json'
  }
})

export default apiClient
