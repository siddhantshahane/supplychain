"use client"

import Link from "next/link";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code,
  Copy,
  FileJson,
  Key,
  Layers,
  Lock,
  Package,
  RefreshCw,
  Server,
  ShieldAlert,
  ShoppingCart,
  Truck,
  Users,
  CheckCircle2,
  ChevronRight,
  ChevronDown
} from "lucide-react";

export default function ApiDocs() {
  const [copiedEndpoint, setCopiedEndpoint] = useState<string | null>(null);

  const copyToClipboard = (text: string, endpoint: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEndpoint(endpoint);
    setTimeout(() => setCopiedEndpoint(null), 2000);
  };

  const apiEndpoints = [
    {
      category: "Authentication",
      endpoints: [
        {
          name: "Get API Token",
          method: "POST",
          url: "/v1/auth/token",
          description: "Generate a new API token for authentication",
          request: `{
  "email": "your-email@example.com",
  "password": "your-password"
}`,
          response: `{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expires_at": "2025-04-06T12:00:00Z"
}`
        }
      ]
    },
    {
      category: "Inventory",
      endpoints: [
        {
          name: "List Inventory Items",
          method: "GET",
          url: "/v1/inventory",
          description: "Retrieve a list of inventory items with pagination",
          request: "?limit=20&page=1&sort=name",
          response: `{
  "data": [
    {
      "id": "inv-12345",
      "sku": "PROD-001",
      "name": "Wireless Headphones",
      "description": "Premium wireless headphones with noise cancellation",
      "category": "Electronics",
      "quantity": 250,
      "unit_price": 79.99,
      "location": "Warehouse A",
      "created_at": "2024-03-15T10:30:00Z",
      "updated_at": "2024-04-01T14:22:00Z"
    },
    // More items...
  ],
  "meta": {
    "current_page": 1,
    "total_pages": 12,
    "total_records": 235,
    "limit": 20
  }
}`
        },
        {
          name: "Get Inventory Item",
          method: "GET",
          url: "/v1/inventory/{id}",
          description: "Retrieve details for a specific inventory item",
          request: "",
          response: `{
  "id": "inv-12345",
  "sku": "PROD-001",
  "name": "Wireless Headphones",
  "description": "Premium wireless headphones with noise cancellation",
  "category": "Electronics",
  "quantity": 250,
  "unit_price": 79.99,
  "location": "Warehouse A",
  "supplier_id": "sup-789",
  "min_stock_level": 50,
  "reorder_quantity": 100,
  "lead_time_days": 14,
  "images": ["https://api.supply2uchain.com/images/products/headphones.jpg"],
  "attributes": {
    "color": "Black",
    "weight": "0.3kg",
    "dimensions": "18 x 15 x 7 cm"
  },
  "created_at": "2024-03-15T10:30:00Z",
  "updated_at": "2024-04-01T14:22:00Z"
}`
        },
        {
          name: "Create Inventory Item",
          method: "POST",
          url: "/v1/inventory",
          description: "Add a new item to inventory",
          request: `{
  "sku": "PROD-002",
  "name": "Bluetooth Speaker",
  "description": "Portable Bluetooth speaker with 10-hour battery life",
  "category": "Electronics",
  "quantity": 100,
  "unit_price": 49.99,
  "location": "Warehouse B",
  "supplier_id": "sup-456",
  "min_stock_level": 20,
  "reorder_quantity": 50,
  "lead_time_days": 10,
  "attributes": {
    "color": "Blue",
    "weight": "0.5kg",
    "dimensions": "15 x 8 x 8 cm"
  }
}`,
          response: `{
  "id": "inv-67890",
  "sku": "PROD-002",
  "name": "Bluetooth Speaker",
  "description": "Portable Bluetooth speaker with 10-hour battery life",
  "category": "Electronics",
  "quantity": 100,
  "unit_price": 49.99,
  "location": "Warehouse B",
  "supplier_id": "sup-456",
  "min_stock_level": 20,
  "reorder_quantity": 50,
  "lead_time_days": 10,
  "attributes": {
    "color": "Blue",
    "weight": "0.5kg",
    "dimensions": "15 x 8 x 8 cm"
  },
  "created_at": "2024-04-06T12:15:30Z",
  "updated_at": "2024-04-06T12:15:30Z"
}`
        }
      ]
    },
    {
      category: "Orders",
      endpoints: [
        {
          name: "List Orders",
          method: "GET",
          url: "/v1/orders",
          description: "Retrieve a list of orders with pagination and filtering",
          request: "?status=processing&start_date=2024-03-01&end_date=2024-04-01&limit=20&page=1",
          response: `{
  "data": [
    {
      "id": "ord-567890",
      "customer_id": "cus-12345",
      "order_number": "ORD-2024-0457",
      "status": "processing",
      "total_amount": 349.95,
      "currency": "USD",
      "payment_status": "paid",
      "shipping_method": "express",
      "tracking_number": "1ZW7X5467890123456",
      "created_at": "2024-03-15T09:30:00Z",
      "updated_at": "2024-03-15T10:45:00Z"
    },
    // More orders...
  ],
  "meta": {
    "current_page": 1,
    "total_pages": 5,
    "total_records": 94,
    "limit": 20
  }
}`
        },
        {
          name: "Create Order",
          method: "POST",
          url: "/v1/orders",
          description: "Create a new order in the system",
          request: `{
  "customer_id": "cus-78901",
  "order_items": [
    {
      "inventory_id": "inv-12345",
      "quantity": 2,
      "unit_price": 79.99
    },
    {
      "inventory_id": "inv-67890",
      "quantity": 1,
      "unit_price": 49.99
    }
  ],
  "shipping_address": {
    "name": "John Smith",
    "street": "123 Main St",
    "city": "New York",
    "state": "NY",
    "postal_code": "10001",
    "country": "US",
    "phone": "+1-555-123-4567"
  },
  "shipping_method": "standard",
  "payment_method": "credit_card",
  "payment_details": {
    "transaction_id": "tr_12345678"
  }
}`,
          response: `{
  "id": "ord-123456",
  "customer_id": "cus-78901",
  "order_number": "ORD-2024-0458",
  "status": "pending",
  "total_amount": 209.97,
  "currency": "USD",
  "payment_status": "paid",
  "shipping_method": "standard",
  "tracking_number": null,
  "shipping_address": {
    "name": "John Smith",
    "street": "123 Main St",
    "city": "New York",
    "state": "NY",
    "postal_code": "10001",
    "country": "US",
    "phone": "+1-555-123-4567"
  },
  "order_items": [
    {
      "inventory_id": "inv-12345",
      "quantity": 2,
      "unit_price": 79.99,
      "subtotal": 159.98
    },
    {
      "inventory_id": "inv-67890",
      "quantity": 1,
      "unit_price": 49.99,
      "subtotal": 49.99
    }
  ],
  "created_at": "2024-04-06T12:20:30Z",
  "updated_at": "2024-04-06T12:20:30Z"
}`
        }
      ]
    },
    {
      category: "Suppliers",
      endpoints: [
        {
          name: "List Suppliers",
          method: "GET",
          url: "/v1/suppliers",
          description: "Retrieve a list of suppliers with pagination",
          request: "?limit=20&page=1",
          response: `{
  "data": [
    {
      "id": "sup-123",
      "name": "TechSupplies Inc.",
      "contact_name": "Sarah Johnson",
      "email": "sarah@techsupplies.com",
      "phone": "+1-555-987-6543",
      "status": "active",
      "created_at": "2023-11-15T10:30:00Z",
      "updated_at": "2024-03-01T14:22:00Z"
    },
    // More suppliers...
  ],
  "meta": {
    "current_page": 1,
    "total_pages": 3,
    "total_records": 58,
    "limit": 20
  }
}`
        },
        {
          name: "Get Supplier Performance",
          method: "GET",
          url: "/v1/suppliers/{id}/performance",
          description: "Retrieve performance metrics for a specific supplier",
          request: "",
          response: `{
  "supplier_id": "sup-123",
  "supplier_name": "TechSupplies Inc.",
  "metrics": {
    "on_time_delivery_rate": 94.5,
    "quality_rating": 4.7,
    "response_time_hours": 4.2,
    "fulfillment_rate": 98.2
  },
  "order_history": {
    "total_orders": 235,
    "completed_orders": 230,
    "canceled_orders": 5,
    "total_spend": 458750.25,
    "currency": "USD"
  },
  "lead_times": {
    "average_days": 12.5,
    "minimum_days": 7,
    "maximum_days": 21
  },
  "time_period": {
    "start_date": "2023-04-01T00:00:00Z",
    "end_date": "2024-04-01T00:00:00Z"
  }
}`
        }
      ]
    }
  ];

  const errorCodes = [
    { code: 400, name: "Bad Request", description: "The request was invalid or cannot be served. The exact error is explained in the error message." },
    { code: 401, name: "Unauthorized", description: "Authentication credentials were missing or incorrect." },
    { code: 403, name: "Forbidden", description: "The request was valid, but you don't have permission to perform the requested action." },
    { code: 404, name: "Not Found", description: "The requested resource could not be found." },
    { code: 409, name: "Conflict", description: "The request could not be completed due to a conflict with the current state of the resource." },
    { code: 422, name: "Unprocessable Entity", description: "The request was well-formed but was unable to be followed due to semantic errors." },
    { code: 429, name: "Too Many Requests", description: "You've exceeded the rate limit. Please try again later." },
    { code: 500, name: "Internal Server Error", description: "Something went wrong on our end. Please try again later or contact support if the problem persists." }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <FileJson className="h-10 w-10 text-primary" />
                </div>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                API Documentation
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Integrate with our powerful RESTful API to automate your supply chain operations
                and connect with your existing systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" asChild>
                  <a href="#authentication">Get Started</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://github.com/supply2uchain/api-sdk" target="_blank" rel="noopener noreferrer">
                    SDK & Client Libraries
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Overview Section */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
                API Overview
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                      <Server className="h-5 w-5 text-primary" /> Base URL
                    </h3>
                    <div className="bg-background p-3 rounded border flex items-center justify-between">
                      <code className="text-sm font-mono">https://api.supply2uchain.com/v1</code>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard("https://api.supply2uchain.com/v1", "base_url")}
                        className="h-8 w-8 p-0"
                      >
                        {copiedEndpoint === "base_url" ? (
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      All API requests should be prefixed with this base URL.
                    </p>
                  </div>
                  
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                      <RefreshCw className="h-5 w-5 text-primary" /> Rate Limits
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      API requests are limited to:
                    </p>
                    <ul className="mt-2 space-y-1">
                      <li className="text-sm flex items-start gap-2">
                        <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full mt-0.5">
                          Standard
                        </span>
                        <span>100 requests per minute</span>
                      </li>
                      <li className="text-sm flex items-start gap-2">
                        <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full mt-0.5">
                          Enterprise
                        </span>
                        <span>1,000 requests per minute</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                      <Code className="h-5 w-5 text-primary" /> Response Format
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      All API responses are returned in JSON format with the following structure:
                    </p>
                    <div className="bg-background p-3 rounded border mt-3">
                      <pre className="text-xs font-mono overflow-x-auto">
{`// Success response
{
  "data": { ... },  // Response data
  "meta": { ... }   // Pagination or additional info
}

// Error response
{
  "error": {
    "code": 400,
    "message": "Invalid request",
    "details": { ... }
  }
}`}
                      </pre>
                    </div>
                  </div>
                  
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                      <Layers className="h-5 w-5 text-primary" /> Versioning
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Our API uses versioning in the URL path (e.g., <code className="text-xs">/v1/resources</code>). This ensures backward compatibility as we evolve the API.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      The current version is <span className="font-semibold">v1</span>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Authentication Section */}
        <section id="authentication" className="py-12 md:py-16 bg-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                  Authentication
                </h2>
              </div>
              
              <div className="bg-background p-6 rounded-lg shadow-sm mb-8">
                <h3 className="text-lg font-medium mb-4">API Keys</h3>
                <p className="text-muted-foreground mb-4">
                  The Supply2Uchain API uses API keys for authentication. You can generate API keys in your account dashboard.
                </p>
                
                <div className="bg-muted/50 p-4 rounded mb-6">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Key className="h-4 w-4 text-primary" /> Including your API key
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Include your API key in the <code className="text-xs">Authorization</code> header of all requests:
                  </p>
                  <div className="bg-background p-3 rounded border">
                    <code className="text-xs font-mono">Authorization: Bearer YOUR_API_KEY</code>
                  </div>
                </div>
                
                <div className="border-t pt-6">
                  <h4 className="font-medium mb-3">Example Request with Authentication</h4>
                  <div className="bg-background p-3 rounded border overflow-x-auto">
                    <pre className="text-xs font-mono">
{`curl -X GET "https://api.supply2uchain.com/v1/inventory" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}
                    </pre>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm">
                  <ShieldAlert className="h-5 w-5 text-amber-500" />
                  <span className="font-medium">Security Best Practices</span>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full mt-0.5 text-xs whitespace-nowrap">Keep keys secure</span>
                    <span>Never share your API keys or store them in publicly accessible areas like GitHub repositories or client-side code.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full mt-0.5 text-xs whitespace-nowrap">Rotate keys</span>
                    <span>Rotate your API keys periodically and immediately if you suspect they've been compromised.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full mt-0.5 text-xs whitespace-nowrap">Use HTTPS</span>
                    <span>Always make API requests over HTTPS to ensure data is encrypted in transit.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* API Endpoints Section */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
                API Endpoints
              </h2>
              
              <Tabs defaultValue={apiEndpoints[0].category.toLowerCase()}>
                <div className="mb-8 overflow-x-auto">
                  <TabsList className="grid grid-flow-col auto-cols-max gap-4">
                    {apiEndpoints.map((category) => (
                      <TabsTrigger
                        key={category.category}
                        value={category.category.toLowerCase()}
                        className="flex items-center gap-2"
                      >
                        {category.category === "Inventory" && <Package className="h-4 w-4" />}
                        {category.category === "Orders" && <ShoppingCart className="h-4 w-4" />}
                        {category.category === "Suppliers" && <Truck className="h-4 w-4" />}
                        {category.category === "Authentication" && <Key className="h-4 w-4" />}
                        {category.category}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>
                
                {apiEndpoints.map((category) => (
                  <TabsContent key={category.category} value={category.category.toLowerCase()} className="space-y-8">
                    {category.endpoints.map((endpoint, index) => (
                      <Card key={index} className="overflow-hidden">
                        <CardHeader className="bg-muted/30">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                                  endpoint.method === "GET" ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400" :
                                  endpoint.method === "POST" ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" :
                                  endpoint.method === "PUT" ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400" :
                                  endpoint.method === "DELETE" ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400" :
                                  "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400"
                                }`}>
                                  {endpoint.method}
                                </span>
                                <CardTitle className="text-lg">{endpoint.name}</CardTitle>
                              </div>
                              <CardDescription>{endpoint.description}</CardDescription>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="bg-background p-2 rounded border flex items-center">
                                <code className="text-xs font-mono">
                                  {endpoint.url}
                                </code>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => copyToClipboard(`https://api.supply2uchain.com/v1${endpoint.url}`, endpoint.url)}
                                  className="h-6 w-6 p-0 ml-2"
                                >
                                  {copiedEndpoint === endpoint.url ? (
                                    <CheckCircle2 className="h-3 w-3 text-green-500" />
                                  ) : (
                                    <Copy className="h-3 w-3" />
                                  )}
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="p-0">
                          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">
                            <div className="p-6">
                              <h4 className="text-sm font-medium mb-3">Request</h4>
                              {endpoint.method === "GET" && endpoint.request ? (
                                <div className="mb-4">
                                  <p className="text-xs text-muted-foreground mb-2">Query Parameters</p>
                                  <div className="bg-muted/30 p-3 rounded">
                                    <code className="text-xs font-mono break-all">
                                      {endpoint.request}
                                    </code>
                                  </div>
                                </div>
                              ) : (
                                <div className="bg-muted/30 p-3 rounded mb-2 overflow-x-auto">
                                  <pre className="text-xs font-mono">
                                    {endpoint.request || "No request body required"}
                                  </pre>
                                </div>
                              )}
                              
                              <div className="mt-4">
                                <p className="text-xs text-muted-foreground mb-2">Example Request</p>
                                <div className="bg-muted/30 p-3 rounded overflow-x-auto">
                                  <pre className="text-xs font-mono">
{`curl -X ${endpoint.method} "https://api.supply2uchain.com/v1${endpoint.url}${endpoint.method === "GET" && endpoint.request ? endpoint.request : ""}" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"${endpoint.method !== "GET" && endpoint.request ? ` \\
  -d '${endpoint.request}'` : ""}`}
                                  </pre>
                                </div>
                              </div>
                            </div>
                            
                            <div className="p-6">
                              <h4 className="text-sm font-medium mb-3">Response</h4>
                              <div className="bg-muted/30 p-3 rounded overflow-x-auto">
                                <pre className="text-xs font-mono">
                                  {endpoint.response}
                                </pre>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </section>
        
        {/* Error Codes */}
        <section className="py-12 md:py-16 bg-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <ShieldAlert className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                  Error Codes
                </h2>
              </div>
              
              <p className="text-muted-foreground mb-8">
                When an API request fails, the API will return an appropriate HTTP status code and an error response with more details.
              </p>
              
              <div className="bg-background rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-muted/50 border-b">
                        <th className="px-6 py-4 text-left font-medium text-sm">Code</th>
                        <th className="px-6 py-4 text-left font-medium text-sm">Error</th>
                        <th className="px-6 py-4 text-left font-medium text-sm">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {errorCodes.map((error, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                              error.code < 500 ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400" 
                                            : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                            }`}>
                              {error.code}
                            </span>
                          </td>
                          <td className="px-6 py-4 font-medium">{error.name}</td>
                          <td className="px-6 py-4 text-sm text-muted-foreground">{error.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="mt-6 bg-muted/50 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-3">Example Error Response</h3>
                <div className="bg-background p-3 rounded border overflow-x-auto">
                  <pre className="text-xs font-mono">
{`{
  "error": {
    "code": 400,
    "message": "Invalid request parameters",
    "details": {
      "quantity": "must be a positive integer",
      "unit_price": "must be greater than zero"
    }
  }
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* SDKs and Libraries */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
                SDKs & Client Libraries
              </h2>
              <p className="text-muted-foreground mb-8">
                We offer client libraries in several languages to make integrating with our API even easier.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <Card className="bg-muted/50 hover:bg-muted/70 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="font-mono text-lg mb-2">JavaScript</div>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://github.com/supply2uchain/javascript-sdk" target="_blank" rel="noopener noreferrer">
                        View on GitHub
                      </a>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="bg-muted/50 hover:bg-muted/70 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="font-mono text-lg mb-2">Python</div>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://github.com/supply2uchain/python-sdk" target="_blank" rel="noopener noreferrer">
                        View on GitHub
                      </a>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="bg-muted/50 hover:bg-muted/70 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="font-mono text-lg mb-2">Ruby</div>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://github.com/supply2uchain/ruby-sdk" target="_blank" rel="noopener noreferrer">
                        View on GitHub
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-10">
                <Button asChild>
                  <Link href="/docs/sdk">View SDK Documentation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-muted to-background">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Create an account to generate your API keys and start building with the Supply2Uchain API.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <Link href="/signup">Create Account</Link>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 