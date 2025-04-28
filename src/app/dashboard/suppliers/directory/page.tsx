"use client";

import React, { useState } from "react";
import { 
  Building2, 
  Phone, 
  Mail, 
  Globe, 
  MapPin, 
  Plus, 
  Search, 
  Filter, 
  Download, 
  MoreHorizontal,
  FileText,
  Users,
  TrendingUp,
  Star,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Package,
  DollarSign,
  Tag,
  ChevronDown,
  CreditCard,
  Box,
  PackageCheck,
  ArrowRight,
  Building,
  Truck,
  Factory
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

// Mock data for suppliers
const suppliers = [
  {
    id: "SUP-001",
    name: "Global Manufacturing Co.",
    type: "Manufacturer",
    status: "Active",
    rating: 4.8,
    location: "New York, USA",
    contactPerson: "John Smith",
    email: "john.smith@globalmfg.com",
    phone: "+1 (212) 555-1234",
    website: "www.globalmfg.com",
    products: 45,
    orders: 128,
    totalSpend: 458750.00,
    onTimeDelivery: 98,
    qualityRating: 4.9,
    responseTime: "2 hours",
    paymentTerms: "Net 30",
    lastOrder: "2024-04-01"
  },
  {
    id: "SUP-002",
    name: "Tech Components Ltd",
    type: "Distributor",
    status: "Active",
    rating: 4.5,
    location: "London, UK",
    contactPerson: "Sarah Johnson",
    email: "sarah.j@techcomp.com",
    phone: "+44 20 7123 4567",
    website: "www.techcomp.com",
    products: 32,
    orders: 95,
    totalSpend: 325000.00,
    onTimeDelivery: 95,
    qualityRating: 4.6,
    responseTime: "4 hours",
    paymentTerms: "Net 45",
    lastOrder: "2024-03-28"
  },
  {
    id: "SUP-003",
    name: "Pacific Electronics",
    type: "Manufacturer",
    status: "Active",
    rating: 4.2,
    location: "Singapore",
    contactPerson: "Michael Chen",
    email: "m.chen@pacificelec.com",
    phone: "+65 6789 0123",
    website: "www.pacificelec.com",
    products: 28,
    orders: 76,
    totalSpend: 287500.00,
    onTimeDelivery: 92,
    qualityRating: 4.3,
    responseTime: "6 hours",
    paymentTerms: "Net 30",
    lastOrder: "2024-03-25"
  },
  {
    id: "SUP-004",
    name: "Nordic Materials",
    type: "Raw Materials",
    status: "Active",
    rating: 4.7,
    location: "Stockholm, Sweden",
    contactPerson: "Erik Svensson",
    email: "erik.s@nordicmaterials.com",
    phone: "+46 8 123 4567",
    website: "www.nordicmaterials.com",
    products: 15,
    orders: 42,
    totalSpend: 175000.00,
    onTimeDelivery: 97,
    qualityRating: 4.8,
    responseTime: "3 hours",
    paymentTerms: "Net 30",
    lastOrder: "2024-04-02"
  },
  {
    id: "SUP-005",
    name: "Innovation Parts Inc",
    type: "Component Supplier",
    status: "Inactive",
    rating: 3.8,
    location: "Toronto, Canada",
    contactPerson: "David Wilson",
    email: "d.wilson@innovationparts.com",
    phone: "+1 (416) 555-9876",
    website: "www.innovationparts.com",
    products: 22,
    orders: 35,
    totalSpend: 125000.00,
    onTimeDelivery: 85,
    qualityRating: 3.9,
    responseTime: "8 hours",
    paymentTerms: "Net 30",
    lastOrder: "2024-02-15"
  }
];

// Mock data for supplier statistics
const supplierStats = {
  totalSuppliers: 45,
  activeSuppliers: 42,
  inactiveSuppliers: 3,
  totalSpend: 1475000.00,
  averageRating: 4.5,
  topSupplier: {
    name: "Global Manufacturing Co.",
    spend: 458750.00
  },
  supplierTypes: [
    { type: "Manufacturer", count: 18 },
    { type: "Distributor", count: 12 },
    { type: "Raw Materials", count: 8 },
    { type: "Component Supplier", count: 7 }
  ]
};

export default function SuppliersDirectoryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [ratingFilter, setRatingFilter] = useState("all");

  // Filter suppliers based on search and filters
  const filteredSuppliers = suppliers.filter(supplier => {
    const matchesSearch = 
      supplier.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      supplier.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      supplier.contactPerson.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || supplier.status.toLowerCase() === statusFilter;
    const matchesType = typeFilter === "all" || supplier.type.toLowerCase() === typeFilter;
    const matchesRating = ratingFilter === "all" || 
      (ratingFilter === "high" && supplier.rating >= 4.5) ||
      (ratingFilter === "medium" && supplier.rating >= 3.5 && supplier.rating < 4.5) ||
      (ratingFilter === "low" && supplier.rating < 3.5);
    
    return matchesSearch && matchesStatus && matchesType && matchesRating;
  });

  // Get status badge color
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-green-100 text-green-800";
      case "inactive":
        return "bg-red-100 text-red-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // Get rating stars
  const getRatingStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="h-4 w-4 fill-yellow-400 text-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<Star key="half-star" className="h-4 w-4 fill-yellow-400 text-yellow-400" style={{ clipPath: 'inset(0 50% 0 0)' }} />);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-star-${i}`} className="h-4 w-4 text-gray-300" />);
    }
    
    return stars;
  };

  return (
    <div className="container mx-auto px-4 py-6 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Supplier Directory</h1>
          <p className="text-muted-foreground mt-1">
            Manage and track your supplier information
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full sm:w-auto">
              <Plus className="mr-2 h-4 w-4" />
              Add New Supplier
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>Add New Supplier</DialogTitle>
              <DialogDescription>
                Fill in the details to add a new supplier
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Supplier Name</Label>
                  <Input id="name" placeholder="Enter supplier name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type">Supplier Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select supplier type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="manufacturer">Manufacturer</SelectItem>
                      <SelectItem value="distributor">Distributor</SelectItem>
                      <SelectItem value="raw_materials">Raw Materials</SelectItem>
                      <SelectItem value="component">Component Supplier</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="contactPerson">Contact Person</Label>
                  <Input id="contactPerson" placeholder="Enter contact person name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter email address" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" placeholder="Enter phone number" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input id="website" placeholder="Enter website URL" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Textarea id="address" placeholder="Enter supplier address" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="paymentTerms">Payment Terms</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select payment terms" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="net15">Net 15</SelectItem>
                      <SelectItem value="net30">Net 30</SelectItem>
                      <SelectItem value="net45">Net 45</SelectItem>
                      <SelectItem value="net60">Net 60</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="inactive">Inactive</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea id="notes" placeholder="Add any additional notes..." />
              </div>
            </div>
            <div className="flex justify-end space-x-2">
              <Button variant="outline">Cancel</Button>
              <Button>Add Supplier</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Suppliers
            </CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{supplierStats.totalSuppliers}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {supplierStats.activeSuppliers} active, {supplierStats.inactiveSuppliers} inactive
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Spend
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${supplierStats.totalSpend.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Top: {supplierStats.topSupplier.name}
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Average Rating
            </CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{supplierStats.averageRating}</div>
            <div className="flex mt-1">
              {getRatingStars(supplierStats.averageRating)}
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Supplier Types
            </CardTitle>
            <Tag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{supplierStats.supplierTypes.length}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {supplierStats.supplierTypes[0].count} {supplierStats.supplierTypes[0].type}s
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
              placeholder="Search suppliers..."
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
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
            </SelectContent>
          </Select>
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-full sm:w-[180px] h-10">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="manufacturer">Manufacturer</SelectItem>
              <SelectItem value="distributor">Distributor</SelectItem>
              <SelectItem value="raw_materials">Raw Materials</SelectItem>
              <SelectItem value="component">Component Supplier</SelectItem>
            </SelectContent>
          </Select>
          <Select value={ratingFilter} onValueChange={setRatingFilter}>
            <SelectTrigger className="w-full sm:w-[180px] h-10">
              <SelectValue placeholder="Filter by rating" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Ratings</SelectItem>
              <SelectItem value="high">High (4.5+)</SelectItem>
              <SelectItem value="medium">Medium (3.5-4.4)</SelectItem>
              <SelectItem value="low">Low (&lt;3.5)</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="h-10">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Suppliers Table */}
      <Card className="shadow-sm">
        <CardHeader className="border-b">
          <CardTitle>Suppliers</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Products</TableHead>
                  <TableHead>Orders</TableHead>
                  <TableHead className="text-right">Total Spend</TableHead>
                  <TableHead>On-Time Delivery</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredSuppliers.map((supplier) => (
                  <TableRow key={supplier.id}>
                    <TableCell className="font-medium">{supplier.id}</TableCell>
                    <TableCell className="font-medium">{supplier.name}</TableCell>
                    <TableCell>{supplier.type}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(supplier.status)}>
                        {supplier.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        {getRatingStars(supplier.rating)}
                        <span className="ml-1 text-xs text-muted-foreground">
                          ({supplier.rating})
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span>{supplier.contactPerson}</span>
                        <span className="text-xs text-muted-foreground">{supplier.email}</span>
                      </div>
                    </TableCell>
                    <TableCell>{supplier.location}</TableCell>
                    <TableCell>{supplier.products}</TableCell>
                    <TableCell>{supplier.orders}</TableCell>
                    <TableCell className="text-right">
                      ${supplier.totalSpend.toLocaleString()}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress value={supplier.onTimeDelivery} className="h-2" indicatorClassName="bg-green-500" />
                        <span className="text-xs text-muted-foreground">{supplier.onTimeDelivery}%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Edit Supplier</DropdownMenuItem>
                          <DropdownMenuItem>View Orders</DropdownMenuItem>
                          <DropdownMenuItem>Contact Supplier</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            Deactivate Supplier
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