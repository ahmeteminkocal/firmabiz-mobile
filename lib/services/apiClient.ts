import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { getAuthToken } from "./storageClient";

const apiClient: AxiosInstance = axios.create({
  baseURL: "https://355c3c5d-54fe-463f-a2c2-eb592efc1f1b.firmabiz.com/api", // TODO: Replace with our API
  timeout: 10000, // TODO: Confirm with backend
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor
apiClient.interceptors.request.use(
  async (config) => {
    const token = await getAuthToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
apiClient.interceptors.response.use(
  (response) => {
    logger(response);
    if(!response.data.success) {
      console.warn(response.data.message);
      return Promise.reject(response.data.message);
    }
    return response;
  },
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


function logger(response: AxiosResponse) {
  console.log('=====================================================================================');
  console.log("Request:", response.config.url);
  if(response.config.params)
    console.log("Params:", response.config.params, '\n\n');
  if(response.config.data)
    console.log("Payload", response.config.data, '\n\n');
  // console.log("Response", response.status + ":", JSON.stringify(response.data.data, null, 8),
  //             '=========================================================================================');
}