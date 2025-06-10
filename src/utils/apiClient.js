
import axiosInstance from './axiosInstance';

export const apiGet = async (url, config = {}) => {
  const response = await axiosInstance.get(url, config);
  return response.data;
};

export const apiPost = async (url, data, config = {}) => {
  const response = await axiosInstance.post(url, data, config);
  return response.data;
};

export const apiPut = async (url, data, config = {}) => {
  const response = await axiosInstance.put(url, data, config);
  return response.data;
};

export const apiDelete = async (url, config = {}) => {
  const response = await axiosInstance.delete(url, config);
  return response.data;
};
