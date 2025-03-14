import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: "http://localhost:5001/api",
    withCredentials: true,
})

// ❌ Remove token attachment from headers
axiosInstance.interceptors.request.use(
    (config) => config,
    (error) => Promise.reject(error)
);