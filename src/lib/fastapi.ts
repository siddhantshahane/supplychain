import axios from 'axios';
import * as types from './types';
import Cookies from 'js-cookie';

// Updated to use Next.js API routes instead of FastAPI backend
const FASTAPI_URL = process.env.NEXT_PUBLIC_NEXTJS_API_URL || '/api';

console.log('API URL:', FASTAPI_URL); // Log the URL being used

// Create axios instance with default config
const fastapi = axios.create({
  baseURL: FASTAPI_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to add auth token
fastapi.interceptors.request.use((config) => {
  const token = Cookies.get('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  console.log('Request to:', config.url, 'with method:', config.method);
  return config;
});

// Add response interceptor to handle errors
fastapi.interceptors.response.use(
  (response) => {
    console.log('Response from:', response.config.url, 'status:', response.status);
    return response;
  },
  (error) => {
    // Handle 401 Unauthorized errors by redirecting to login
    console.error('API error:', error.message);
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response data:', error.response.data);
      
      if (error.response.status === 401) {
        Cookies.remove('token');
        if (typeof window !== 'undefined') {
          window.location.href = '/login';
        }
      }
    } else if (error.request) {
      console.error('No response received, request:', error.request);
    }
    return Promise.reject(error);
  }
);

// Auth endpoints
export const authApi = {
  login: async (email: string, password: string): Promise<types.ApiResponse<{ token: string; user: types.User }>> => {
    console.log('Attempting login with email:', email);
    try {
      // For debugging purposes - Log the full URL being used for login
      console.log('Login URL:', `${FASTAPI_URL}/auth/login`);
      
      const response = await fastapi.post('/auth/login', { email, password });
      console.log('Login response:', response.data);
      
      // Check the structure of the response
      const accessToken = response.data.access_token || response.data.token;
      
      if (!accessToken) {
        console.error('No token found in response:', response.data);
        throw new Error('Invalid response format: No token found');
      }
      
      // Store token in cookies
      Cookies.set('token', accessToken, { expires: 7 }); // Token expires in 7 days
      
      return {
        data: {
          token: accessToken,
          user: response.data.user || {}
        },
        message: 'Login successful',
        status: 'success'
      };
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },
  
  register: async (userData: { 
    name: string; 
    email: string; 
    company: string; 
    password: string 
  }): Promise<types.ApiResponse<{ user: types.User }>> => {
    const response = await fastapi.post('/auth/register', userData);
    return {
      data: {
        user: response.data.user
      },
      message: 'Registration successful',
      status: 'success'
    };
  },
  
  logout: async (): Promise<void> => {
    // FastAPI typically doesn't need a logout endpoint since JWT tokens are stateless
    // Just remove the token from cookies
    Cookies.remove('token');
  },
  
  me: async (): Promise<types.ApiResponse<types.User>> => {
    const response = await fastapi.get('/users/me');
    return {
      data: response.data,
      status: 'success'
    };
  },
};

// User endpoints
export const usersApi = {
  list: async (): Promise<types.PaginatedResponse<types.User>> => {
    const response = await fastapi.get('/users');
    return response.data;
  },
  
  getById: async (id: number): Promise<types.ApiResponse<types.User>> => {
    const response = await fastapi.get(`/users/${id}`);
    return {
      data: response.data,
      status: 'success'
    };
  },
  
  create: async (userData: Partial<types.User>): Promise<types.ApiResponse<types.User>> => {
    const response = await fastapi.post('/users', userData);
    return {
      data: response.data,
      status: 'success'
    };
  },
  
  update: async (id: number, userData: Partial<types.User>): Promise<types.ApiResponse<types.User>> => {
    const response = await fastapi.put(`/users/${id}`, userData);
    return {
      data: response.data,
      status: 'success'
    };
  },
  
  delete: async (id: number): Promise<void> => {
    await fastapi.delete(`/users/${id}`);
  },
};

// Product endpoints
export const productsApi = {
  list: async (): Promise<types.PaginatedResponse<types.Product>> => {
    const response = await fastapi.get('/products');
    return response.data;
  },
  
  getById: async (id: number): Promise<types.ApiResponse<types.Product>> => {
    const response = await fastapi.get(`/products/${id}`);
    return {
      data: response.data,
      status: 'success'
    };
  },
  
  create: async (productData: Partial<types.Product>): Promise<types.ApiResponse<types.Product>> => {
    const response = await fastapi.post('/products', productData);
    return {
      data: response.data,
      status: 'success'
    };
  },
  
  update: async (id: number, productData: Partial<types.Product>): Promise<types.ApiResponse<types.Product>> => {
    const response = await fastapi.put(`/products/${id}`, productData);
    return {
      data: response.data,
      status: 'success'
    };
  },
  
  delete: async (id: number): Promise<void> => {
    await fastapi.delete(`/products/${id}`);
  },
};

// Supplier endpoints
export const suppliersApi = {
  list: async (): Promise<types.PaginatedResponse<types.Supplier>> => {
    const response = await fastapi.get('/suppliers');
    return response.data;
  },
  
  getById: async (id: number): Promise<types.ApiResponse<types.Supplier>> => {
    const response = await fastapi.get(`/suppliers/${id}`);
    return {
      data: response.data,
      status: 'success'
    };
  },
  
  create: async (supplierData: Partial<types.Supplier>): Promise<types.ApiResponse<types.Supplier>> => {
    const response = await fastapi.post('/suppliers', supplierData);
    return {
      data: response.data,
      status: 'success'
    };
  },
  
  update: async (id: number, supplierData: Partial<types.Supplier>): Promise<types.ApiResponse<types.Supplier>> => {
    const response = await fastapi.put(`/suppliers/${id}`, supplierData);
    return {
      data: response.data,
      status: 'success'
    };
  },
  
  delete: async (id: number): Promise<void> => {
    await fastapi.delete(`/suppliers/${id}`);
  },
};

// Order endpoints
export const ordersApi = {
  getPurchaseOrders: async (): Promise<types.PaginatedResponse<types.PurchaseOrder>> => {
    const response = await fastapi.get('/orders/purchase');
    return response.data;
  },
  
  getPurchaseOrderById: async (id: number): Promise<types.ApiResponse<types.PurchaseOrder>> => {
    const response = await fastapi.get(`/orders/purchase/${id}`);
    return {
      data: response.data,
      status: 'success'
    };
  },
  
  createPurchaseOrder: async (orderData: Partial<types.PurchaseOrder>): Promise<types.ApiResponse<types.PurchaseOrder>> => {
    const response = await fastapi.post('/orders/purchase', orderData);
    return {
      data: response.data,
      status: 'success'
    };
  },
  
  updatePurchaseOrder: async (id: number, orderData: Partial<types.PurchaseOrder>): Promise<types.ApiResponse<types.PurchaseOrder>> => {
    const response = await fastapi.put(`/orders/purchase/${id}`, orderData);
    return {
      data: response.data,
      status: 'success'
    };
  },
  
  getSalesOrders: async (): Promise<types.PaginatedResponse<types.SalesOrder>> => {
    const response = await fastapi.get('/orders/sales');
    return response.data;
  },
  
  getSalesOrderById: async (id: number): Promise<types.ApiResponse<types.SalesOrder>> => {
    const response = await fastapi.get(`/orders/sales/${id}`);
    return {
      data: response.data,
      status: 'success'
    };
  },
  
  createSalesOrder: async (orderData: Partial<types.SalesOrder>): Promise<types.ApiResponse<types.SalesOrder>> => {
    const response = await fastapi.post('/orders/sales', orderData);
    return {
      data: response.data,
      status: 'success'
    };
  },
  
  updateSalesOrder: async (id: number, orderData: Partial<types.SalesOrder>): Promise<types.ApiResponse<types.SalesOrder>> => {
    const response = await fastapi.put(`/orders/sales/${id}`, orderData);
    return {
      data: response.data,
      status: 'success'
    };
  },
};

// Warehouse endpoints
export const warehousesApi = {
  list: async (): Promise<types.PaginatedResponse<types.Warehouse>> => {
    const response = await fastapi.get('/warehouses');
    return response.data;
  },
  
  getById: async (id: number): Promise<types.ApiResponse<types.Warehouse>> => {
    const response = await fastapi.get(`/warehouses/${id}`);
    return {
      data: response.data,
      status: 'success'
    };
  },
  
  create: async (warehouseData: Partial<types.Warehouse>): Promise<types.ApiResponse<types.Warehouse>> => {
    const response = await fastapi.post('/warehouses', warehouseData);
    return {
      data: response.data,
      status: 'success'
    };
  },
  
  update: async (id: number, warehouseData: Partial<types.Warehouse>): Promise<types.ApiResponse<types.Warehouse>> => {
    const response = await fastapi.put(`/warehouses/${id}`, warehouseData);
    return {
      data: response.data,
      status: 'success'
    };
  },
  
  delete: async (id: number): Promise<void> => {
    await fastapi.delete(`/warehouses/${id}`);
  },
};

// Inventory endpoints
export const inventoryApi = {
  getStock: async (): Promise<types.PaginatedResponse<types.Stock>> => {
    const response = await fastapi.get('/inventory/stock');
    return response.data;
  },
  
  getStockByProduct: async (productId: number): Promise<types.PaginatedResponse<types.Stock>> => {
    const response = await fastapi.get(`/inventory/stock/product/${productId}`);
    return response.data;
  },
  
  getStockByWarehouse: async (warehouseId: number): Promise<types.PaginatedResponse<types.Stock>> => {
    const response = await fastapi.get(`/inventory/stock/warehouse/${warehouseId}`);
    return response.data;
  },
  
  updateStock: async (id: number, stockData: Partial<types.Stock>): Promise<types.ApiResponse<types.Stock>> => {
    const response = await fastapi.put(`/inventory/stock/${id}`, stockData);
    return {
      data: response.data,
      status: 'success'
    };
  },
  
  createMovement: async (movementData: Partial<types.StockMovement>): Promise<types.ApiResponse<types.StockMovement>> => {
    const response = await fastapi.post('/inventory/movements', movementData);
    return {
      data: response.data,
      status: 'success'
    };
  },
  
  getMovements: async (): Promise<types.PaginatedResponse<types.StockMovement>> => {
    const response = await fastapi.get('/inventory/movements');
    return response.data;
  },
}; 