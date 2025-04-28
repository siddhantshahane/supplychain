"use client";

import React, { useState } from "react";
import { 
  Package, 
  Truck, 
  CheckCircle2, 
  Clock, 
  Plus, 
  Search, 
  Filter, 
  Download, 
  MoreHorizontal,
  FileText,
  ShoppingCart,
  Building2,
  Calendar,
  DollarSign,
  Tag,
  ChevronDown,
  Users,
  TrendingUp,
  CreditCard,
  Box,
  PackageCheck,
  AlertTriangle,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";

// Mock data for fulfillment orders
const fulfillmentOrders = [
  {
    id: "FO-2024-001",
    orderId: "SO-2024-001",
    customer: "Acme Corporation",
    date: "2024-04-01",
    status: "Processing",
    items: 15,
    expectedDelivery: "2024-04-15",
    priority: "High",
    progress: 65,
    warehouse: "Main Warehouse",
    shippingMethod: "Express"
  },
  {
    id: "FO-2024-002",
    orderId: "SO-2024-002",
    customer: "Tech Solutions Ltd",
    date: "2024-04-02",
    status: "Shipped",
    items: 8,
    expectedDelivery: "2024-04-20",
    priority: "Medium",
    progress: 90,
    warehouse: "East Warehouse",
    shippingMethod: "Standard"
  },
  {
    id: "FO-2024-003",
    orderId: "SO-2024-003",
    customer: "Global Industries",
    date: "2024-04-03",
    status: "Delivered",
    items: 5,
    expectedDelivery: "2024-04-10",
    priority: "Low",
    progress: 100,
    warehouse: "Main Warehouse",
    shippingMethod: "Standard"
  },
  {
    id: "FO-2024-004",
    orderId: "SO-2024-004",
    customer: "Innovation Systems",
    date: "2024-04-04",
    status: "Processing",
    items: 12,
    expectedDelivery: "2024-04-18",
    priority: "High",
    progress: 45,
    warehouse: "West Warehouse",
    shippingMethod: "Express"
  },
  {
    id: "FO-2024-005",
    orderId: "SO-2024-005",
    customer: "Future Tech Inc",
    date: "2024-04-05",
    status: "Pending",
    items: 6,
    expectedDelivery: "2024-04-22",
    priority: "Medium",
    progress: 20,
    warehouse: "Main Warehouse",
    shippingMethod: "Standard"
  }
];

// Mock data for warehouses
const warehouses = [
  { id: 1, name: "Main Warehouse", location: "New York", capacity: 10000 },
  { id: 2, name: "East Warehouse", location: "Boston", capacity: 8000 },
  { id: 3, name: "West Warehouse", location: "Los Angeles", capacity: 12000 },
  { id: 4, name: "South Warehouse", location: "Houston", capacity: 9000 }
];

// Mock data for fulfillment statistics
const fulfillmentStats = {
  totalOrders: 245,
  pendingOrders: 18,
  processingOrders: 42,
  shippedOrders: 156,
  deliveredOrders: 29,
  averageProcessingTime: "2.5 days",
  onTimeDeliveryRate: 94,
  topWarehouse: {
    name: "Main Warehouse",
    orders: 98
  }
};

export default function FulfillmentOrdersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [warehouseFilter, setWarehouseFilter] = useState("all");
  const [dateRange, setDateRange] = useState("30days");

  // Filter fulfillment orders based on search and filters
  const filteredOrders = fulfillmentOrders.filter(order => {
    const matchesSearch = 
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.orderId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || order.status.toLowerCase() === statusFilter;
    const matchesPriority = priorityFilter === "all" || order.priority.toLowerCase() === priorityFilter;
    const matchesWarehouse = warehouseFilter === "all" || order.warehouse === warehouseFilter;
    
    return matchesSearch && matchesStatus && matchesPriority && matchesWarehouse;
  });

  // Get status badge color
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "processing":
        return "bg-blue-100 text-blue-800";
      case "shipped":
        return "bg-purple-100 text-purple-800";
      case "delivered":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // Get priority badge color
  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-orange-100 text-orange-800";
      case "low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // Get progress bar color
  const getProgressColor = (progress: number) => {
    if (progress < 30) return "bg-red-500";
    if (progress < 70) return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <div className="container mx-auto px-4 py-6 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Order Fulfillment</h1>
          <p className="text-muted-foreground mt-1">
            Manage and track order fulfillment status
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full sm:w-auto">
              <Plus className="mr-2 h-4 w-4" />
              Create Fulfillment Order
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>Create New Fulfillment Order</DialogTitle>
              <DialogDescription>
                Fill in the details to create a new fulfillment order
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="orderId">Sales Order ID</Label>
                  <Input id="orderId" placeholder="Enter sales order ID" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="warehouse">Warehouse</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select warehouse" />
                    </SelectTrigger>
                    <SelectContent>
                      {warehouses.map(warehouse => (
                        <SelectItem key={warehouse.id} value={warehouse.id.toString()}>
                          {warehouse.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="shippingMethod">Shipping Method</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select shipping method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Standard</SelectItem>
                      <SelectItem value="express">Express</SelectItem>
                      <SelectItem value="overnight">Overnight</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="expectedDelivery">Expected Delivery</Label>
                  <Input type="date" id="expectedDelivery" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea id="notes" placeholder="Add any additional notes..." />
              </div>
            </div>
            <div className="flex justify-end space-x-2">
              <Button variant="outline">Cancel</Button>
              <Button>Create Fulfillment Order</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Orders
            </CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{fulfillmentStats.totalOrders}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {fulfillmentStats.pendingOrders} pending orders
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              On-Time Delivery
            </CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{fulfillmentStats.onTimeDeliveryRate}%</div>
            <p className="text-xs text-muted-foreground mt-1">
              Avg. {fulfillmentStats.averageProcessingTime} processing time
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Processing Orders
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{fulfillmentStats.processingOrders}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {fulfillmentStats.shippedOrders} shipped, {fulfillmentStats.deliveredOrders} delivered
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Top Warehouse
            </CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{fulfillmentStats.topWarehouse.orders}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {fulfillmentStats.topWarehouse.name}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search orders..."
              className="pl-10 h-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full sm:w-[180px] h-10">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="processing">Processing</SelectItem>
              <SelectItem value="shipped">Shipped</SelectItem>
              <SelectItem value="delivered">Delivered</SelectItem>
            </SelectContent>
          </Select>
          <Select value={priorityFilter} onValueChange={setPriorityFilter}>
            <SelectTrigger className="w-full sm:w-[180px] h-10">
              <SelectValue placeholder="Filter by priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Priorities</SelectItem>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="low">Low</SelectItem>
            </SelectContent>
          </Select>
          <Select value={warehouseFilter} onValueChange={setWarehouseFilter}>
            <SelectTrigger className="w-full sm:w-[180px] h-10">
              <SelectValue placeholder="Filter by warehouse" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Warehouses</SelectItem>
              {warehouses.map(warehouse => (
                <SelectItem key={warehouse.id} value={warehouse.name}>
                  {warehouse.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={dateRange} onValueChange={setDateRange}>
            <SelectTrigger className="w-full sm:w-[180px] h-10">
              <SelectValue placeholder="Date range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="90days">Last 90 days</SelectItem>
              <SelectItem value="custom">Custom range</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="h-10">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Fulfillment Orders Table */}
      <Card className="shadow-sm">
        <CardHeader className="border-b">
          <CardTitle>Fulfillment Orders</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Fulfillment ID</TableHead>
                  <TableHead className="w-[100px]">Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Items</TableHead>
                  <TableHead>Warehouse</TableHead>
                  <TableHead>Shipping</TableHead>
                  <TableHead>Progress</TableHead>
                  <TableHead>Expected Delivery</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell className="font-medium">{order.orderId}</TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell>{order.date}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(order.status)}>
                        {order.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getPriorityColor(order.priority)}>
                        {order.priority}
                      </Badge>
                    </TableCell>
                    <TableCell>{order.items}</TableCell>
                    <TableCell>{order.warehouse}</TableCell>
                    <TableCell>{order.shippingMethod}</TableCell>
                    <TableCell className="w-[150px]">
                      <div className="flex items-center gap-2">
                        <Progress value={order.progress} className="h-2" indicatorClassName={getProgressColor(order.progress)} />
                        <span className="text-xs text-muted-foreground">{order.progress}%</span>
                      </div>
                    </TableCell>
                    <TableCell>{order.expectedDelivery}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Update Status</DropdownMenuItem>
                          <DropdownMenuItem>Assign to Warehouse</DropdownMenuItem>
                          <DropdownMenuItem>Print Packing Slip</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            Cancel Fulfillment
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 