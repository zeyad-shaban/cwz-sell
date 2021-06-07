import http from "./http";
import config from '../config';

const addToCart = id => http.put(config.apiUrl + '/cart/add', { id });
const getProducts = () => http.get(config.apiUrl + '/cart');
const deleteProduct = id => http.delete(`${config.apiUrl}/cart/${id}`)
const getTotal = () => http.get(config.apiUrl + '/cart/total')
const deleteAllProducts = () => http.delete(config.apiUrl + '/cart')

const cartApi = { addToCart, getProducts, deleteProduct, getTotal, deleteAllProducts };
export default cartApi;