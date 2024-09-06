import axios from 'axios';

const token = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
