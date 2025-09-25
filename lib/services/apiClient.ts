import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { getAuthToken } from "./storageClient";

const apiClient: AxiosInstance = axios.create({
  baseURL: "https://google.com", // TODO: Replace with our API
  timeout: 10000, // TODO: Confirm with backend
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor: add auth token if exists
apiClient.interceptors.request.use(
  async (config) => {
    const token = await getAuthToken();
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.warn("API Error:", error.response.status, error.response.data);
    } else if (error.request) {
      console.warn("No response received:", error.request);
    } else {
      console.warn("Request error:", error.message);
    }
    return Promise.reject(error);
  }
);

// Generic GET
export const get = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
  const response = await apiClient.get<T>(url, config);
  return response.data;
};

// Generic POST
export const post = async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
  const response = await apiClient.post<T>(url, data, config);
  return response.data;
};

// Generic PUT
export const put = async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
  const response = await apiClient.put<T>(url, data, config);
  return response.data;
};

// Generic DELETE
export const del = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
  const response = await apiClient.delete<T>(url, config);
  return response.data;
};

export default apiClient;