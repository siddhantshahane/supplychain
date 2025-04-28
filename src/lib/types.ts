// User Types
export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  role: 'admin' | 'manager' | 'staff' | 'customer' | 'supplier';
  phone_number?: string;
  address?: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

// Inventory Types
export interface Category {
  id: number;
  name: string;
  description?: string;
  created_at: string;
  updated_at: string;
}

export interface Supplier {
  id: number;
  name: string;
  contact_name: string;
  email: string;
  phone: string;
  address: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Warehouse {
  id: number;
  name: string;
  location: string;
  manager: number; // User ID
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Product {
  id: number;
  name: string;
  sku: string;
  description?: string;
  category: number; // Category ID
  price: number;
  barcode?: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface ProductSupplier {
  id: number;
  product: number; // Product ID
  supplier: number; // Supplier ID
  supplier_sku: string;
  unit_price: number;
  is_preferred: boolean;
  created_at: string;
  updated_at: string;
}

export interface Stock {
  id: number;
  product: number; // Product ID
  warehouse: number; // Warehouse ID
  quantity: number;
  created_at: string;
  updated_at: string;
}

export interface StockMovement {
  id: number;
  product: number; // Product ID
  quantity: number;
  movement_type: 'receipt' | 'issue' | 'transfer' | 'adjustment';
  source_warehouse?: number; // Warehouse ID
  destination_warehouse?: number; // Warehouse ID
  notes?: string;
  created_at: string;
  updated_at: string;
}

// Order Types
export interface PurchaseOrder {
  id: number;
  order_number: string;
  supplier: number; // Supplier ID
  warehouse: number; // Warehouse ID
  order_date: string;
  expected_delivery_date: string;
  status: 'draft' | 'submitted' | 'confirmed' | 'cancelled' | 'received';
  total_amount: number;
  created_at: string;
  updated_at: string;
}

export interface PurchaseOrderItem {
  id: number;
  purchase_order: number; // PurchaseOrder ID
  product: number; // Product ID
  quantity: number;
  unit_price: number;
  quantity_received?: number;
  notes?: string;
  created_at: string;
  updated_at: string;
}

export interface SalesOrder {
  id: number;
  order_number: string;
  customer: number; // User ID
  warehouse: number; // Warehouse ID
  order_date: string;
  status: 'draft' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  total_amount: number;
  created_at: string;
  updated_at: string;
}

export interface SalesOrderItem {
  id: number;
  sales_order: number; // SalesOrder ID
  product: number; // Product ID
  quantity: number;
  unit_price: number;
  created_at: string;
  updated_at: string;
}

export interface Shipment {
  id: number;
  sales_order: number; // SalesOrder ID
  tracking_number: string;
  shipping_address: string;
  status: 'pending' | 'in_transit' | 'delivered' | 'cancelled';
  notes?: string;
  created_at: string;
  updated_at: string;
}

export interface ShipmentItem {
  id: number;
  shipment: number; // Shipment ID
  product: number; // Product ID
  quantity: number;
  created_at: string;
  updated_at: string;
}

export interface Receipt {
  id: number;
  purchase_order: number; // PurchaseOrder ID
  receipt_number: string;
  receipt_date: string;
  notes?: string;
  created_at: string;
  updated_at: string;
}

export interface ReceiptItem {
  id: number;
  receipt: number; // Receipt ID
  product: number; // Product ID
  quantity_received: number;
  notes?: string;
  created_at: string;
  updated_at: string;
}

// API Response Types
export interface ApiResponse<T> {
  data: T;
  message?: string;
  status: 'success' | 'error';
}

export interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
} 