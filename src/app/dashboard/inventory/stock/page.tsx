"use client"

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
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
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { 
  Search, 
  Filter, 
  Plus, 
  MoreHorizontal, 
  Package, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  ChevronDown, 
  ChevronUp,
  ArrowUpDown,
  Eye,
  Edit,
  Trash,
  Download,
  Upload,
  ArrowRight,
  ArrowLeft,
  RefreshCw,
  BarChart3,
  History,
  Settings,
  PlusCircle,
  MinusCircle,
  RotateCcw
} from "lucide-react";

// Mock data for stock movements
const stockMovements = [
  {
    id: "MOV-001",
    productId: "PRD-001",
    productName: "Industrial Valve A100",
    type: "Received",
    quantity: 20,
    date: "2023-04-15",
    reference: "PO-2023-042",
    location: "Warehouse A, Shelf 3",
    notes: "Regular stock replenishment",
  },
  {
    id: "MOV-002",
    productId: "PRD-002",
    productName: "PVC Pipe 20mm x 3m",
    type: "Issued",
    quantity: -15,
    date: "2023-04-16",
    reference: "SO-2023-089",
    location: "Warehouse B, Shelf 1",
    notes: "Order fulfillment",
  },
  {
    id: "MOV-003",
    productId: "PRD-003",
    productName: "Adjustable Wrench Set",
    type: "Received",
    quantity: 10,
    date: "2023-04-17",
    reference: "PO-2023-043",
    location: "Warehouse A, Shelf 5",
    notes: "Emergency restock",
  },
  {
    id: "MOV-004",
    productId: "PRD-004",
    productName: "Brass Connector 15mm",
    type: "Adjustment",
    quantity: 5,
    date: "2023-04-18",
    reference: "ADJ-2023-012",
    location: "Warehouse B, Shelf 2",
    notes: "Inventory correction",
  },
  {
    id: "MOV-005",
    productId: "PRD-005",
    productName: "Water Pump 750W",
    type: "Issued",
    quantity: -3,
    date: "2023-04-19",
    reference: "SO-2023-090",
    location: "Warehouse A, Shelf 4",
    notes: "Customer order",
  },
  {
    id: "MOV-006",
    productId: "PRD-006",
    productName: "Steel Pipe Fitting 25mm",
    type: "Received",
    quantity: 30,
    date: "2023-04-20",
    reference: "PO-2023-044",
    location: "Warehouse B, Shelf 3",
    notes: "Regular stock replenishment",
  },
  {
    id: "MOV-007",
    productId: "PRD-007",
    productName: "Digital Flow Meter",
    type: "Issued",
    quantity: -5,
    date: "2023-04-21",
    reference: "SO-2023-091",
    location: "Warehouse A, Shelf 2",
    notes: "Project requirement",
  },
  {
    id: "MOV-008",
    productId: "PRD-008",
    productName: "Pressure Gauge 0-100 PSI",
    type: "Received",
    quantity: 15,
    date: "2023-04-22",
    reference: "PO-2023-045",
    location: "Warehouse A, Shelf 1",
    notes: "Backorder received",
  },
  {
    id: "MOV-009",
    productId: "PRD-009",
    productName: "Industrial Hose 1-inch",
    type: "Adjustment",
    quantity: -2,
    date: "2023-04-23",
    reference: "ADJ-2023-013",
    location: "Warehouse B, Shelf 4",
    notes: "Damaged goods write-off",
  },
  {
    id: "MOV-010",
    productId: "PRD-010",
    productName: "Pipe Thread Sealant",
    type: "Issued",
    quantity: -8,
    date: "2023-04-24",
    reference: "SO-2023-092",
    location: "Warehouse A, Shelf 6",
    notes: "Maintenance supplies",
  },
];

// Mock data for stock levels
const stockLevels = [
  {
    id: "PRD-001",
    name: "Industrial Valve A100",
    category: "Valves",
    sku: "VAL-A100",
    currentStock: 45,
    reorderPoint: 20,
    reorderQuantity: 30,
    status: "In Stock",
    location: "Warehouse A, Shelf 3",
    lastCount: "2023-04-15",
    nextCount: "2023-05-15",
  },
  {
    id: "PRD-002",
    name: "PVC Pipe 20mm x 3m",
    category: "Pipes",
    sku: "PIPE-20-3M",
    currentStock: 105,
    reorderPoint: 50,
    reorderQuantity: 100,
    status: "In Stock",
    location: "Warehouse B, Shelf 1",
    lastCount: "2023-04-10",
    nextCount: "2023-05-10",
  },
  {
    id: "PRD-003",
    name: "Adjustable Wrench Set",
    category: "Tools",
    sku: "TOOL-WRENCH-SET",
    currentStock: 25,
    reorderPoint: 25,
    reorderQuantity: 20,
    status: "Low Stock",
    location: "Warehouse A, Shelf 5",
    lastCount: "2023-03-28",
    nextCount: "2023-04-28",
  },
  {
    id: "PRD-004",
    name: "Brass Connector 15mm",
    category: "Connectors",
    sku: "CONN-BRASS-15",
    currentStock: 5,
    reorderPoint: 30,
    reorderQuantity: 50,
    status: "Low Stock",
    location: "Warehouse B, Shelf 2",
    lastCount: "2023-03-15",
    nextCount: "2023-04-15",
  },
  {
    id: "PRD-005",
    name: "Water Pump 750W",
    category: "Pumps",
    sku: "PUMP-750W",
    currentStock: 5,
    reorderPoint: 15,
    reorderQuantity: 10,
    status: "Low Stock",
    location: "Warehouse A, Shelf 4",
    lastCount: "2023-04-05",
    nextCount: "2023-05-05",
  },
  {
    id: "PRD-006",
    name: "Steel Pipe Fitting 25mm",
    category: "Fittings",
    sku: "FIT-STEEL-25",
    currentStock: 95,
    reorderPoint: 40,
    reorderQuantity: 80,
    status: "In Stock",
    location: "Warehouse B, Shelf 3",
    lastCount: "2023-04-12",
    nextCount: "2023-05-12",
  },
  {
    id: "PRD-007",
    name: "Digital Flow Meter",
    category: "Meters",
    sku: "METER-DIG-FLOW",
    currentStock: 17,
    reorderPoint: 20,
    reorderQuantity: 15,
    status: "Low Stock",
    location: "Warehouse A, Shelf 2",
    lastCount: "2023-04-08",
    nextCount: "2023-05-08",
  },
  {
    id: "PRD-008",
    name: "Pressure Gauge 0-100 PSI",
    category: "Meters",
    sku: "METER-PRES-100",
    currentStock: 15,
    reorderPoint: 15,
    reorderQuantity: 20,
    status: "Low Stock",
    location: "Warehouse A, Shelf 1",
    lastCount: "2023-04-22",
    nextCount: "2023-05-22",
  },
  {
    id: "PRD-009",
    name: "Industrial Hose 1-inch",
    category: "Hoses",
    sku: "HOSE-IND-1IN",
    currentStock: 33,
    reorderPoint: 25,
    reorderQuantity: 30,
    status: "In Stock",
    location: "Warehouse B, Shelf 4",
    lastCount: "2023-04-18",
    nextCount: "2023-05-18",
  },
  {
    id: "PRD-010",
    name: "Pipe Thread Sealant",
    category: "Sealants",
    sku: "SEAL-PIPE-THREAD",
    currentStock: 42,
    reorderPoint: 30,
    reorderQuantity: 40,
    status: "In Stock",
    location: "Warehouse A, Shelf 6",
    lastCount: "2023-04-14",
    nextCount: "2023-05-14",
  },
];

// Categories for filtering
const categories = [
  "All Categories",
  "Valves",
  "Pipes",
  "Tools",
  "Connectors",
  "Pumps",
  "Fittings",
  "Meters",
  "Hoses",
  "Sealants",
];

// Movement types for filtering
const movementTypes = [
  "All Types",
  "Received",
  "Issued",
  "Adjustment",
];

// Locations for filtering
const locations = [
  "All Locations",
  "Warehouse A, Shelf 1",
  "Warehouse A, Shelf 2",
  "Warehouse A, Shelf 3",
  "Warehouse A, Shelf 4",
  "Warehouse A, Shelf 5",
  "Warehouse A, Shelf 6",
  "Warehouse B, Shelf 1",
  "Warehouse B, Shelf 2",
  "Warehouse B, Shelf 3",
  "Warehouse B, Shelf 4",
];

export default function StockPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [selectedMovementType, setSelectedMovementType] = useState("All Types");
  const [sortField, setSortField] = useState("date");
  const [sortDirection, setSortDirection] = useState("desc");
  const [activeTab, setActiveTab] = useState("levels");

  // Filter stock levels based on search query, category, and location
  const filteredStockLevels = stockLevels.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase()) ||
      item.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.id.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "All Categories" || item.category === selectedCategory;

    const matchesLocation =
      selectedLocation === "All Locations" || item.location === selectedLocation;

    return matchesSearch && matchesCategory && matchesLocation;
  });

  // Filter stock movements based on search query, category, and movement type
  const filteredStockMovements = stockMovements.filter((item) => {
    const matchesSearch = item.productName
      .toLowerCase()
      .includes(searchQuery.toLowerCase()) ||
      item.reference.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.id.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType =
      selectedMovementType === "All Types" || item.type === selectedMovementType;

    return matchesSearch && matchesType;
  });

  // Sort stock levels based on selected field and direction
  const sortedStockLevels = [...filteredStockLevels].sort((a, b) => {
    if (sortField === "name") {
      return sortDirection === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    } else if (sortField === "currentStock") {
      return sortDirection === "asc" ? a.currentStock - b.currentStock : b.currentStock - a.currentStock;
    } else if (sortField === "category") {
      return sortDirection === "asc"
        ? a.category.localeCompare(b.category)
        : b.category.localeCompare(a.category);
    } else if (sortField === "location") {
      return sortDirection === "asc"
        ? a.location.localeCompare(b.location)
        : b.location.localeCompare(a.location);
    } else if (sortField === "status") {
      return sortDirection === "asc"
        ? a.status.localeCompare(b.status)
        : b.status.localeCompare(a.status);
    } else {
      return 0;
    }
  });

  // Sort stock movements based on selected field and direction
  const sortedStockMovements = [...filteredStockMovements].sort((a, b) => {
    if (sortField === "date") {
      return sortDirection === "asc"
        ? new Date(a.date).getTime() - new Date(b.date).getTime()
        : new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (sortField === "productName") {
      return sortDirection === "asc"
        ? a.productName.localeCompare(b.productName)
        : b.productName.localeCompare(a.productName);
    } else if (sortField === "type") {
      return sortDirection === "asc"
        ? a.type.localeCompare(b.type)
        : b.type.localeCompare(a.type);
    } else if (sortField === "quantity") {
      return sortDirection === "asc" ? a.quantity - b.quantity : b.quantity - a.quantity;
    } else if (sortField === "reference") {
      return sortDirection === "asc"
        ? a.reference.localeCompare(b.reference)
        : b.reference.localeCompare(a.reference);
    } else {
      return 0;
    }
  });

  // Handle sort change
  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  // Get status badge color
  const getStatusBadge = (status) => {
    switch (status) {
      case "In Stock":
        return <Badge className="bg-green-500 hover:bg-green-600">{status}</Badge>;
      case "Low Stock":
        return <Badge className="bg-amber-500 hover:bg-amber-600">{status}</Badge>;
      case "Out of Stock":
        return <Badge className="bg-red-500 hover:bg-red-600">{status}</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  // Get stock level indicator
  const getStockIndicator = (currentStock, reorderPoint) => {
    if (currentStock === 0) {
      return <XCircle className="h-4 w-4 text-red-500" />;
    } else if (currentStock <= reorderPoint) {
      return <AlertTriangle className="h-4 w-4 text-amber-500" />;
    } else {
      return <CheckCircle2 className="h-4 w-4 text-green-500" />;
    }
  };

  // Get movement type indicator
  const getMovementTypeIndicator = (type, quantity) => {
    switch (type) {
      case "Received":
        return <ArrowRight className="h-4 w-4 text-green-500" />;
      case "Issued":
        return <ArrowLeft className="h-4 w-4 text-red-500" />;
      case "Adjustment":
        return quantity > 0 ? (
          <PlusCircle className="h-4 w-4 text-green-500" />
        ) : (
          <MinusCircle className="h-4 w-4 text-red-500" />
        );
      default:
        return <RefreshCw className="h-4 w-4 text-blue-500" />;
    }
  };

  return (
    <div className="py-6 md:py-8">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-1">
              Stock Management
            </h1>
            <p className="text-muted-foreground">
              Track stock levels and inventory movements
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="h-4 w-4" />
              Export
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Upload className="h-4 w-4" />
              Import
            </Button>
            <Button size="sm" className="gap-2">
              <Plus className="h-4 w-4" />
              New Movement
            </Button>
          </div>
        </div>

        {/* Stock Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Stock Items</p>
                  <h3 className="text-2xl font-bold">{stockLevels.length}</h3>
                </div>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Package className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">In Stock</p>
                  <h3 className="text-2xl font-bold">
                    {stockLevels.filter((p) => p.status === "In Stock").length}
                  </h3>
                </div>
                <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-green-500" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Low Stock</p>
                  <h3 className="text-2xl font-bold">
                    {stockLevels.filter((p) => p.status === "Low Stock").length}
                  </h3>
                </div>
                <div className="h-12 w-12 rounded-full bg-amber-500/10 flex items-center justify-center">
                  <AlertTriangle className="h-6 w-6 text-amber-500" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Recent Movements</p>
                  <h3 className="text-2xl font-bold">{stockMovements.length}</h3>
                </div>
                <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <History className="h-6 w-6 text-blue-500" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs for switching between stock levels and movements */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
          <TabsList className="w-full max-w-md">
            <TabsTrigger value="levels" className="flex-1">Stock Levels</TabsTrigger>
            <TabsTrigger value="movements" className="flex-1">Stock Movements</TabsTrigger>
            <TabsTrigger value="adjustments" className="flex-1">Adjustments</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder={
                    activeTab === "levels"
                      ? "Search stock by name, SKU, or ID..."
                      : "Search movements by product, reference, or ID..."
                  }
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                {activeTab === "levels" ? (
                  <>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="w-full sm:w-[180px]">
                        <SelectValue placeholder="Category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                      <SelectTrigger className="w-full sm:w-[180px]">
                        <SelectValue placeholder="Location" />
                      </SelectTrigger>
                      <SelectContent>
                        {locations.map((location) => (
                          <SelectItem key={location} value={location}>
                            {location}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </>
                ) : (
                  <Select value={selectedMovementType} onValueChange={setSelectedMovementType}>
                    <SelectTrigger className="w-full sm:w-[180px]">
                      <SelectValue placeholder="Movement Type" />
                    </SelectTrigger>
                    <SelectContent>
                      {movementTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stock Levels Table */}
        {activeTab === "levels" && (
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">
                        <div className="flex items-center gap-1 cursor-pointer" onClick={() => handleSort("id")}>
                          ID
                          {sortField === "id" && (
                            sortDirection === "asc" ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />
                          )}
                        </div>
                      </TableHead>
                      <TableHead>
                        <div className="flex items-center gap-1 cursor-pointer" onClick={() => handleSort("name")}>
                          Product
                          {sortField === "name" && (
                            sortDirection === "asc" ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />
                          )}
                        </div>
                      </TableHead>
                      <TableHead>
                        <div className="flex items-center gap-1 cursor-pointer" onClick={() => handleSort("category")}>
                          Category
                          {sortField === "category" && (
                            sortDirection === "asc" ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />
                          )}
                        </div>
                      </TableHead>
                      <TableHead>
                        <div className="flex items-center gap-1 cursor-pointer" onClick={() => handleSort("currentStock")}>
                          Current Stock
                          {sortField === "currentStock" && (
                            sortDirection === "asc" ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />
                          )}
                        </div>
                      </TableHead>
                      <TableHead>Reorder Point</TableHead>
                      <TableHead>Reorder Quantity</TableHead>
                      <TableHead>
                        <div className="flex items-center gap-1 cursor-pointer" onClick={() => handleSort("status")}>
                          Status
                          {sortField === "status" && (
                            sortDirection === "asc" ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />
                          )}
                        </div>
                      </TableHead>
                      <TableHead>
                        <div className="flex items-center gap-1 cursor-pointer" onClick={() => handleSort("location")}>
                          Location
                          {sortField === "location" && (
                            sortDirection === "asc" ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />
                          )}
                        </div>
                      </TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sortedStockLevels.length > 0 ? (
                      sortedStockLevels.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell className="font-medium">{item.id}</TableCell>
                          <TableCell>
                            <div className="flex flex-col">
                              <span className="font-medium">{item.name}</span>
                              <span className="text-xs text-muted-foreground">{item.sku}</span>
                            </div>
                          </TableCell>
                          <TableCell>{item.category}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              {getStockIndicator(item.currentStock, item.reorderPoint)}
                              <span>{item.currentStock}</span>
                            </div>
                          </TableCell>
                          <TableCell>{item.reorderPoint}</TableCell>
                          <TableCell>{item.reorderQuantity}</TableCell>
                          <TableCell>{getStatusBadge(item.status)}</TableCell>
                          <TableCell>{item.location}</TableCell>
                          <TableCell className="text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="h-8 w-8 p-0">
                                  <span className="sr-only">Open menu</span>
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuItem className="cursor-pointer">
                                  <Eye className="mr-2 h-4 w-4" />
                                  View Details
                                </DropdownMenuItem>
                                <DropdownMenuItem className="cursor-pointer">
                                  <Edit className="mr-2 h-4 w-4" />
                                  Edit Stock
                                </DropdownMenuItem>
                                <DropdownMenuItem className="cursor-pointer">
                                  <History className="mr-2 h-4 w-4" />
                                  View History
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="cursor-pointer text-blue-600">
                                  <PlusCircle className="mr-2 h-4 w-4" />
                                  Add Stock
                                </DropdownMenuItem>
                                <DropdownMenuItem className="cursor-pointer text-amber-600">
                                  <MinusCircle className="mr-2 h-4 h-4" />
                                  Remove Stock
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={9} className="h-24 text-center">
                          No stock items found matching your criteria.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Stock Movements Table */}
        {activeTab === "movements" && (
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">
                        <div className="flex items-center gap-1 cursor-pointer" onClick={() => handleSort("id")}>
                          ID
                          {sortField === "id" && (
                            sortDirection === "asc" ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />
                          )}
                        </div>
                      </TableHead>
                      <TableHead>
                        <div className="flex items-center gap-1 cursor-pointer" onClick={() => handleSort("productName")}>
                          Product
                          {sortField === "productName" && (
                            sortDirection === "asc" ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />
                          )}
                        </div>
                      </TableHead>
                      <TableHead>
                        <div className="flex items-center gap-1 cursor-pointer" onClick={() => handleSort("type")}>
                          Type
                          {sortField === "type" && (
                            sortDirection === "asc" ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />
                          )}
                        </div>
                      </TableHead>
                      <TableHead>
                        <div className="flex items-center gap-1 cursor-pointer" onClick={() => handleSort("quantity")}>
                          Quantity
                          {sortField === "quantity" && (
                            sortDirection === "asc" ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />
                          )}
                        </div>
                      </TableHead>
                      <TableHead>
                        <div className="flex items-center gap-1 cursor-pointer" onClick={() => handleSort("date")}>
                          Date
                          {sortField === "date" && (
                            sortDirection === "asc" ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />
                          )}
                        </div>
                      </TableHead>
                      <TableHead>
                        <div className="flex items-center gap-1 cursor-pointer" onClick={() => handleSort("reference")}>
                          Reference
                          {sortField === "reference" && (
                            sortDirection === "asc" ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />
                          )}
                        </div>
                      </TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sortedStockMovements.length > 0 ? (
                      sortedStockMovements.map((movement) => (
                        <TableRow key={movement.id}>
                          <TableCell className="font-medium">{movement.id}</TableCell>
                          <TableCell>
                            <div className="flex flex-col">
                              <span className="font-medium">{movement.productName}</span>
                              <span className="text-xs text-muted-foreground">{movement.productId}</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              {getMovementTypeIndicator(movement.type, movement.quantity)}
                              <span>{movement.type}</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <span className={movement.quantity > 0 ? "text-green-600" : "text-red-600"}>
                              {movement.quantity > 0 ? `+${movement.quantity}` : movement.quantity}
                            </span>
                          </TableCell>
                          <TableCell>{movement.date}</TableCell>
                          <TableCell>{movement.reference}</TableCell>
                          <TableCell>{movement.location}</TableCell>
                          <TableCell className="text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="h-8 w-8 p-0">
                                  <span className="sr-only">Open menu</span>
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuItem className="cursor-pointer">
                                  <Eye className="mr-2 h-4 w-4" />
                                  View Details
                                </DropdownMenuItem>
                                <DropdownMenuItem className="cursor-pointer">
                                  <Edit className="mr-2 h-4 w-4" />
                                  Edit Movement
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="cursor-pointer text-red-600">
                                  <Trash className="mr-2 h-4 w-4" />
                                  Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={8} className="h-24 text-center">
                          No stock movements found matching your criteria.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Stock Adjustments Tab */}
        {activeTab === "adjustments" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Add Stock</CardTitle>
                <CardDescription>Increase stock levels for products</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="product" className="text-sm font-medium">
                      Product
                    </label>
                    <Select>
                      <SelectTrigger id="product">
                        <SelectValue placeholder="Select a product" />
                      </SelectTrigger>
                      <SelectContent>
                        {stockLevels.map((item) => (
                          <SelectItem key={item.id} value={item.id}>
                            {item.name} ({item.sku})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="quantity" className="text-sm font-medium">
                      Quantity
                    </label>
                    <Input id="quantity" type="number" min="1" placeholder="Enter quantity" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="reference" className="text-sm font-medium">
                      Reference
                    </label>
                    <Input id="reference" placeholder="PO number or other reference" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="notes" className="text-sm font-medium">
                      Notes
                    </label>
                    <Input id="notes" placeholder="Add notes about this adjustment" />
                  </div>
                  <Button className="w-full gap-2">
                    <PlusCircle className="h-4 w-4" />
                    Add Stock
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Remove Stock</CardTitle>
                <CardDescription>Decrease stock levels for products</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="product-remove" className="text-sm font-medium">
                      Product
                    </label>
                    <Select>
                      <SelectTrigger id="product-remove">
                        <SelectValue placeholder="Select a product" />
                      </SelectTrigger>
                      <SelectContent>
                        {stockLevels.map((item) => (
                          <SelectItem key={item.id} value={item.id}>
                            {item.name} ({item.sku})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="quantity-remove" className="text-sm font-medium">
                      Quantity
                    </label>
                    <Input id="quantity-remove" type="number" min="1" placeholder="Enter quantity" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="reason" className="text-sm font-medium">
                      Reason
                    </label>
                    <Select>
                      <SelectTrigger id="reason">
                        <SelectValue placeholder="Select a reason" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="damaged">Damaged Goods</SelectItem>
                        <SelectItem value="expired">Expired</SelectItem>
                        <SelectItem value="lost">Lost/Missing</SelectItem>
                        <SelectItem value="count">Inventory Count Adjustment</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="notes-remove" className="text-sm font-medium">
                      Notes
                    </label>
                    <Input id="notes-remove" placeholder="Add notes about this adjustment" />
                  </div>
                  <Button variant="destructive" className="w-full gap-2">
                    <MinusCircle className="h-4 w-4" />
                    Remove Stock
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Pagination */}
        {activeTab !== "adjustments" && (
          <div className="flex items-center justify-between mt-4">
            <p className="text-sm text-muted-foreground">
              Showing {activeTab === "levels" ? sortedStockLevels.length : sortedStockMovements.length} of{" "}
              {activeTab === "levels" ? stockLevels.length : stockMovements.length} items
            </p>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm" disabled>
                Next
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 