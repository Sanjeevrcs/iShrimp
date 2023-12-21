import axios from 'axios';

let isProd = import.meta.env.PROD;

const axiosInstance = axios.create({
  baseURL: isProd
    ? 'https://ishrimpapi.iqubekct.ac.in/api'
    : 'https://localhost:8000/api',
});

export default axiosInstance;
