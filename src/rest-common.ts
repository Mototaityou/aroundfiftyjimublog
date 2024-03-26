import axios, { type AxiosInstance } from 'axios'

const apiClient: AxiosInstance = axios.create({
  // APIのURL
  baseURL: import.meta.env['VITE_APP_REST_COMMON_BASEURL'],
  // リクエストヘッダ
  headers: {
    // "Access-Control-Allow-Headers": "Content-Type",
    // "Access-Control-Allow-Origin": "http://localhost:8080",
    // "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
  }
})

export default apiClient
