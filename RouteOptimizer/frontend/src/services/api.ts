import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const fetchOrders = () => API.get('/orders');
export const createOrder = (order: any) => API.post('/orders', order);
export const searchOrders = (query: string) => API.get(`/orders/search`, { params: { query } });
export const optimizeRoutes = () => API.get('/routes/optimize');