import http from './http';
import config from '../config';

const { apiUrl } = config;

const createProduct = data => http.post(`${apiUrl}/products`, data);
const getProducts = () => http.get(`${apiUrl}/products`);
const getProduct = id => http.get(`${apiUrl}/products/${id}`);

const productsApi = { createProduct, getProducts, getProduct };
export default productsApi;