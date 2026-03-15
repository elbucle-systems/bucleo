import axios from "axios"

const apiClient = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
    "Accept-Language": "en",
  },
})

export default apiClient
