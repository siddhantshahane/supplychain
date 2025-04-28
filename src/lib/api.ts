import axios from 'axios';
import * as types from './types';
import Cookies from 'js-cookie';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to add auth token
api.interceptors.request.use((config) => {
  const token = Cookies.get('token');
  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }
  return config;
});

// Add response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      Cookies.remove('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth endpoints
export const auth = {
  login: async (email: string, password: string): Promise<types.ApiResponse<{ token: string }>> => {
    const response = await api.post('/users/login/', { email, password });
    Cookies.set('token', response.data.token, { expires: 7 }); // Token expires in 7 days
    return {
      data: {
        token: response.data.token
      },
      message: 'Login successful',
      status: 'success'
    };
  },
  logout: async (): Promise<void> => {
    await api.post('/users/logout/');
    Cookies.remove('token');
  },
  me: async (): Promise<types.ApiResponse<types.User>> => {
    const response = await api.get('/users/me/');
    return response.data;
  },
};

// User endpoints
export const users = {
  list: async (): Promise<types.PaginatedResponse<types.User>> => {
    const response = await api.get('/users/');
    return response.data;
  },
  create: async (userData: Partial<types.User>): Promise<types.ApiResponse<types.User>> => {
    const response = await api.post('/users/', userData);
    return response.data;
  },
  update: async (id: number, userData: Partial<types.User>): Promise<types.ApiResponse<types.User>> => {
    const response = await api.patch(`/users/${id}/`, userData);
    return response.data;
  },
  delete: async (id: number): Promise<void> => {
    await api.delete(`/users/${id}/`);
  },
};

// Category endpoints
export const categories = {
  list: async (): Promise<types.PaginatedResponse<types.Category>> => {
    const response = await api.get('/inventory/categories/');
    return response.data;
  },
  create: async (categoryData: Partial<types.Category>): Promise<types.ApiResponse<types.Category>> => {
    const response = await api.post('/inventory/categories/', categoryData);
    return response.data;
  },
  update: async (id: number, categoryData: Partial<types.Category>): Promise<types.ApiResponse<types.Category>> => {
    const response = await api.patch(`/inventory/categories/${id}/`, categoryData);
    return response.data;
  },
  delete: async (id: number): Promise<void> => {
    await api.delete(`/inventory/categories/${id}/`);
  },
  products: async (id: number): Promise<types.PaginatedResponse<types.Product>> => {
    const response = await api.get(`/inventory/categories/${id}/products/`);
    return response.data;
  },
};

// Supplier endpoints
export const suppliers = {
  list: async (): Promise<types.PaginatedResponse<types.Supplier>> => {
    const response = await api.get('/inventory/suppliers/');
    return response.data;
  },
  create: async (supplierData: Partial<types.Supplier>): Promise<types.ApiResponse<types.Supplier>> => {
    const response = await api.post('/inventory/suppliers/', supplierData);
    return response.data;
  },
  update: async (id: number, supplierData: Partial<types.Supplier>): Promise<types.ApiResponse<types.Supplier>> => {
    const response = await api.patch(`/inventory/suppliers/${id}/`, supplierData);
    return response.data;
  },
  delete: async (id: number): Promise<void> => {
    await api.delete(`/inventory/suppliers/${id}/`);
  },
  products: async (id: number): Promise<types.PaginatedResponse<types.Product>> => {
    const response = await api.get(`/inventory/suppliers/${id}/products/`);
    return response.data;
  },
};

// Warehouse endpoints
export const warehouses = {
  list: async (): Promise<types.PaginatedResponse<types.Warehouse>> => {
    const response = await api.get('/inventory/warehouses/');
    return response.data;
  },
  create: async (warehouseData: Partial<types.Warehouse>): Promise<types.ApiResponse<types.Warehouse>> => {
    const response = await api.post('/inventory/warehouses/', warehouseData);
    return response.data;
  },
  update: async (id: number, warehouseData: Partial<types.Warehouse>): Promise<types.ApiResponse<types.Warehouse>> => {
    const response = await api.patch(`/inventory/warehouses/${id}/`, warehouseData);
    return response.data;
  },
  delete: async (id: number): Promise<void> => {
    await api.delete(`/inventory/warehouses/${id}/`);
  },
  stock: async (id: number): Promise<types.PaginatedResponse<types.Stock>> => {
    const response = await api.get(`/inventory/warehouses/${id}/stock/`);
    return response.data;
  },
  lowStock: async (id: number): Promise<types.PaginatedResponse<types.Stock>> => {
    const response = await api.get(`/inventory/warehouses/${id}/low-stock/`);
    return response.data;
  },
};

// Product endpoints
export const products = {
  list: async (): Promise<types.PaginatedResponse<types.Product>> => {
    const response = await api.get('/inventory/products/');
    return response.data;
  },
  create: async (productData: Partial<types.Product>): Promise<types.ApiResponse<types.Product>> => {
    const response = await api.post('/inventory/products/', productData);
    return response.data;
  },
  update: async (id: number, productData: Partial<types.Product>): Promise<types.ApiResponse<types.Product>> => {
    const response = await api.patch(`/inventory/products/${id}/`, productData);
    return response.data;
  },
  delete: async (id: number): Promise<void> => {
    await api.delete(`/inventory/products/${id}/`);
  },
  stock: async (id: number): Promise<types.PaginatedResponse<types.Stock>> => {
    const response = await api.get(`/inventory/products/${id}/stock/`);
    return response.data;
  },
  movements: async (id: number): Promise<types.PaginatedResponse<types.StockMovement>> => {
    const response = await api.get(`/inventory/products/${id}/movements/`);
    return response.data;
  },
  suppliers: async (id: number): Promise<types.PaginatedResponse<types.ProductSupplier>> => {
    const response = await api.get(`/inventory/products/${id}/suppliers/`);
    return response.data;
  },
};

// Stock endpoints
export const stock = {
  list: async (): Promise<types.PaginatedResponse<types.Stock>> => {
    const response = await api.get('/inventory/stock/');
    return response.data;
  },
  update: async (id: number, stockData: Partial<types.Stock>): Promise<types.ApiResponse<types.Stock>> => {
    const response = await api.patch(`/inventory/stock/${id}/`, stockData);
    return response.data;
  },
  lowStock: async (): Promise<types.PaginatedResponse<types.Stock>> => {
    const response = await api.get('/inventory/stock/low-stock/');
    return response.data;
  },
};

// Stock Movement endpoints
export const movements = {
  list: async (): Promise<types.PaginatedResponse<types.StockMovement>> => {
    const response = await api.get('/inventory/movements/');
    return response.data;
  },
  create: async (movementData: Partial<types.StockMovement>): Promise<types.ApiResponse<types.StockMovement>> => {
    const response = await api.post('/inventory/movements/', movementData);
    return response.data;
  },
};

// Purchase Order endpoints
export const purchaseOrders = {
  list: async (): Promise<types.PaginatedResponse<types.PurchaseOrder>> => {
    const response = await api.get('/orders/purchase-orders/');
    return response.data;
  },
  create: async (orderData: Partial<types.PurchaseOrder>): Promise<types.ApiResponse<types.PurchaseOrder>> => {
    const response = await api.post('/orders/purchase-orders/', orderData);
    return response.data;
  },
  update: async (id: number, orderData: Partial<types.PurchaseOrder>): Promise<types.ApiResponse<types.PurchaseOrder>> => {
    const response = await api.patch(`/orders/purchase-orders/${id}/`, orderData);
    return response.data;
  },
  delete: async (id: number): Promise<void> => {
    await api.delete(`/orders/purchase-orders/${id}/`);
  },
  submit: async (id: number): Promise<types.ApiResponse<types.PurchaseOrder>> => {
    const response = await api.post(`/orders/purchase-orders/${id}/submit/`);
    return response.data;
  },
  confirm: async (id: number): Promise<types.ApiResponse<types.PurchaseOrder>> => {
    const response = await api.post(`/orders/purchase-orders/${id}/confirm/`);
    return response.data;
  },
  cancel: async (id: number): Promise<types.ApiResponse<types.PurchaseOrder>> => {
    const response = await api.post(`/orders/purchase-orders/${id}/cancel/`);
    return response.data;
  },
  receive: async (id: number): Promise<types.ApiResponse<types.PurchaseOrder>> => {
    const response = await api.post(`/orders/purchase-orders/${id}/receive/`);
    return response.data;
  },
};

// Sales Order endpoints
export const salesOrders = {
  list: async (): Promise<types.PaginatedResponse<types.SalesOrder>> => {
    const response = await api.get('/orders/sales-orders/');
    return response.data;
  },
  create: async (orderData: Partial<types.SalesOrder>): Promise<types.ApiResponse<types.SalesOrder>> => {
    const response = await api.post('/orders/sales-orders/', orderData);
    return response.data;
  },
  update: async (id: number, orderData: Partial<types.SalesOrder>): Promise<types.ApiResponse<types.SalesOrder>> => {
    const response = await api.patch(`/orders/sales-orders/${id}/`, orderData);
    return response.data;
  },
  delete: async (id: number): Promise<void> => {
    await api.delete(`/orders/sales-orders/${id}/`);
  },
  confirm: async (id: number): Promise<types.ApiResponse<types.SalesOrder>> => {
    const response = await api.post(`/orders/sales-orders/${id}/confirm/`);
    return response.data;
  },
  process: async (id: number): Promise<types.ApiResponse<types.SalesOrder>> => {
    const response = await api.post(`/orders/sales-orders/${id}/process/`);
    return response.data;
  },
  cancel: async (id: number): Promise<types.ApiResponse<types.SalesOrder>> => {
    const response = await api.post(`/orders/sales-orders/${id}/cancel/`);
    return response.data;
  },
  deliver: async (id: number): Promise<types.ApiResponse<types.SalesOrder>> => {
    const response = await api.post(`/orders/sales-orders/${id}/deliver/`);
    return response.data;
  },
  createShipment: async (id: number): Promise<types.ApiResponse<types.Shipment>> => {
    const response = await api.post(`/orders/sales-orders/${id}/create-shipment/`);
    return response.data;
  },
};

// Shipment endpoints
export const shipments = {
  list: async (): Promise<types.PaginatedResponse<types.Shipment>> => {
    const response = await api.get('/orders/shipments/');
    return response.data;
  },
  update: async (id: number, shipmentData: Partial<types.Shipment>): Promise<types.ApiResponse<types.Shipment>> => {
    const response = await api.patch(`/orders/shipments/${id}/`, shipmentData);
    return response.data;
  },
};

// Receipt endpoints
export const receipts = {
  list: async (): Promise<types.PaginatedResponse<types.Receipt>> => {
    const response = await api.get('/orders/receipts/');
    return response.data;
  },
  create: async (receiptData: Partial<types.Receipt>): Promise<types.ApiResponse<types.Receipt>> => {
    const response = await api.post('/orders/receipts/', receiptData);
    return response.data;
  },
  update: async (id: number, receiptData: Partial<types.Receipt>): Promise<types.ApiResponse<types.Receipt>> => {
    const response = await api.patch(`/orders/receipts/${id}/`, receiptData);
    return response.data;
  },
  delete: async (id: number): Promise<void> => {
    await api.delete(`/orders/receipts/${id}/`);
  },
};

export default api; 