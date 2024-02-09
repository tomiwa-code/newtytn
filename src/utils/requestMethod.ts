import axios, { AxiosResponse, AxiosRequestConfig } from "axios";

// Define your base URL if applicable
const baseURL = process.env.NEXT_PUBLIC_TYTN_BASE_URL;

// Create a custom Axios instance with a base URL and default headers
const axiosInstance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Define a function to handle errors
const handleRequestError = (error: any) => {
  console.error("Request error:", error);
  throw error;
};

// Helper function for common request configurations
const createRequestConfig = (
  token: string | null,
  formData: boolean = false
): AxiosRequestConfig => ({
  headers: {
    "Content-Type": formData ? "multipart/form-data" : "application/json",
    Authorization: token ? `Bearer ${token}` : undefined,
  },
});

// POST request with or without formData and a dynamic token
export const postRequest = async <T>(
  url: string,
  data: any,
  token: string | null,
  formData: boolean = false
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axiosInstance.post(
      url,
      formData ? data : JSON.stringify(data),
      createRequestConfig(token, formData)
    );
    return response.data;
  } catch (error) {
    return handleRequestError(error);
  }
};

// DELETE request with a dynamic token
export const deleteRequest = async <T>(
  url: string,
  token: string | null
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axiosInstance.delete(
      url,
      createRequestConfig(token)
    );
    return response.data;
  } catch (error) {
    return handleRequestError(error);
  }
};

// GET request with a dynamic token
export const getRequest = async <T>(
  url: string,
  token: string | null
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axiosInstance.get(
      url,
      createRequestConfig(token)
    );
    return response.data;
  } catch (error) {
    return handleRequestError(error);
  }
};

// PUT request with or without formData and a dynamic token
export const putRequest = async <T>(
  url: string,
  data: any,
  token: string | null,
  formData: boolean = false
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axiosInstance.put(
      url,
      formData ? data : JSON.stringify(data),
      createRequestConfig(token, formData)
    );
    return response.data;
  } catch (error) {
    return handleRequestError(error);
  }
};
