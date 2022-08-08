import Axios, { AxiosInstance } from 'axios';

let axiosApi: AxiosInstance;

export const useAxiosApi = (): AxiosInstance => {
  if (axiosApi) return axiosApi;

  return createAxiosApi();
};

export const createAxiosApi = (): AxiosInstance => {
  const axios: AxiosInstance = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    withCredentials: true,
    timeout: 300000,
  });

  axiosApi = axios;
  return axios;
};

export const setTokenOnAxiosApiHeader = (token: string) => {
  axiosApi.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};
