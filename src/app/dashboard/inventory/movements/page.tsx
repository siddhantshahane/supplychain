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
  RotateCcw,
  Calendar,
  FileText,
  Printer,
  Share2,
  Filter as FilterIcon,
  SlidersHorizontal,
  CalendarDays,
  Tag,
  MapPin,
  User,
  Building2,
  Clock,
  Info
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
    supplier: "ValveTech Industries",
    cost: 1250.00,
    unit: "pieces",
    batchNumber: "BAT-2023-042",
    expiryDate: "2025-04-15",
    receivedBy: "John Smith",
    status: "Completed",
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
    customer: "BuildRight Construction",
    unit: "pieces",
    issuedTo: "Sarah Johnson",
    status: "Completed",
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
    supplier: "ToolMaster Inc.",
    cost: 450.00,
    unit: "sets",
    batchNumber: "BAT-2023-043",
    expiryDate: "2028-04-17",
    receivedBy: "Michael Brown",
    status: "Completed",
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
    reason: "Count discrepancy",
    adjustedBy: "Emily Davis",
    status: "Completed",
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
    customer: "AquaFlow Systems",
    unit: "pieces",
    issuedTo: "Robert Wilson",
    status: "Completed",
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
    supplier: "SteelFittings Co.",
    cost: 750.00,
    unit: "pieces",
    batchNumber: "BAT-2023-044",
    expiryDate: "2026-04-20",
    receivedBy: "Jennifer Lee",
    status: "Completed",
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
    customer: "FlowTech Solutions",
    unit: "pieces",
    issuedTo: "David Miller",
    status: "Completed",
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
    supplier: "PressurePro Inc.",
    cost: 375.00,
    unit: "pieces",
    batchNumber: "BAT-2023-045",
    expiryDate: "2027-04-22",
    receivedBy: "Lisa Anderson",
    status: "Completed",
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
    reason: "Damaged during handling",
    adjustedBy: "Thomas White",
    status: "Completed",
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
    customer: "Maintenance Dept",
    unit: "tubes",
    issuedTo: "Patricia Martinez",
    status: "Completed",
  },
  {
    id: "MOV-011",
    productId: "PRD-001",
    productName: "Industrial Valve A100",
    type: "Received",
    quantity: 25,
    date: "2023-04-25",
    reference: "PO-2023-046",
    location: "Warehouse A, Shelf 3",
    notes: "Bulk order",
    supplier: "ValveTech Industries",
    cost: 1562.50,
    unit: "pieces",
    batchNumber: "BAT-2023-046",
    expiryDate: "2025-04-25",
    receivedBy: "John Smith",
    status: "Completed",
  },
  {
    id: "MOV-012",
    productId: "PRD-003",
    productName: "Adjustable Wrench Set",
    type: "Issued",
    quantity: -7,
    date: "2023-04-26",
    reference: "SO-2023-093",
    location: "Warehouse A, Shelf 5",
    notes: "Service team equipment",
    customer: "Service Team A",
    unit: "sets",
    issuedTo: "James Wilson",
    status: "Completed",
  },
  {
    id: "MOV-013",
    productId: "PRD-005",
    productName: "Water Pump 750W",
    type: "Received",
    quantity: 8,
    date: "2023-04-27",
    reference: "PO-2023-047",
    location: "Warehouse A, Shelf 4",
    notes: "New model",
    supplier: "PumpMaster Ltd.",
    cost: 1200.00,
    unit: "pieces",
    batchNumber: "BAT-2023-047",
    expiryDate: "2026-04-27",
    receivedBy: "Michael Brown",
    status: "Completed",
  },
  {
    id: "MOV-014",
    productId: "PRD-007",
    productName: "Digital Flow Meter",
    type: "Adjustment",
    quantity: -1,
    date: "2023-04-28",
    reference: "ADJ-2023-014",
    location: "Warehouse A, Shelf 2",
    notes: "Quality control rejection",
    reason: "Failed quality inspection",
    adjustedBy: "Emily Davis",
    status: "Completed",
  },
  {
    id: "MOV-015",
    productId: "PRD-002",
    productName: "PVC Pipe 20mm x 3m",
    type: "Issued",
    quantity: -50,
    date: "2023-04-29",
    reference: "SO-2023-094",
    location: "Warehouse B, Shelf 1",
    notes: "Large project order",
    customer: "BuildRight Construction",
    unit: "pieces",
    issuedTo: "Sarah Johnson",
    status: "Completed",
  },
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

// Status options for filtering
const statusOptions = [
  "All Statuses",
  "Completed",
  "Pending",
  "Cancelled",
];

// Date range options
const dateRanges = [
  "Last 7 days",
  "Last 30 days",
  "Last 90 days",
  "Last 6 months",
  "Last year",
  "Custom range",
];

export default function StockMovementsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMovementType, setSelectedMovementType] = useState("All Types");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [selectedStatus, setSelectedStatus] = useState("All Statuses");
  const [selectedDateRange, setSelectedDateRange] = useState("Last 30 days");
  const [sortField, setSortField] = useState("date");
  const [sortDirection, setSortDirection] = useState("desc");
  const [activeTab, setActiveTab] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  // Filter stock movements based on search query, type, location, status, and date range
  const filteredStockMovements = stockMovements.filter((item) => {
    const matchesSearch = 
      item.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.reference.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.supplier && item.supplier.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.customer && item.customer.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesType =
      selectedMovementType === "All Types" || item.type === selectedMovementType;

    const matchesLocation =
      selectedLocation === "All Locations" || item.location === selectedLocation;

    const matchesStatus =
      selectedStatus === "All Statuses" || item.status === selectedStatus;

    // Date filtering logic
    let matchesDateRange = true;
    const itemDate = new Date(item.date);
    const today = new Date();
    
    if (selectedDateRange === "Last 7 days") {
      const sevenDaysAgo = new Date(today);
      sevenDaysAgo.setDate(today.getDate() - 7);
      matchesDateRange = itemDate >= sevenDaysAgo;
    } else if (selectedDateRange === "Last 30 days") {
      const thirtyDaysAgo = new Date(today);
      thirtyDaysAgo.setDate(today.getDate() - 30);
      matchesDateRange = itemDate >= thirtyDaysAgo;
    } else if (selectedDateRange === "Last 90 days") {
      const ninetyDaysAgo = new Date(today);
      ninetyDaysAgo.setDate(today.getDate() - 90);
      matchesDateRange = itemDate >= ninetyDaysAgo;
    } else if (selectedDateRange === "Last 6 months") {
      const sixMonthsAgo = new Date(today);
      sixMonthsAgo.setMonth(today.getMonth() - 6);
      matchesDateRange = itemDate >= sixMonthsAgo;
    } else if (selectedDateRange === "Last year") {
      const oneYearAgo = new Date(today);
      oneYearAgo.setFullYear(today.getFullYear() - 1);
      matchesDateRange = itemDate >= oneYearAgo;
    }
    // Custom range would require additional date picker implementation

    return matchesSearch && matchesType && matchesLocation && matchesStatus && matchesDateRange;
  });

  // Filter by active tab
  const tabFilteredMovements = activeTab === "all" 
    ? filteredStockMovements 
    : filteredStockMovements.filter(item => item.type === activeTab);

  // Sort stock movements based on selected field and direction
  const sortedStockMovements = [...tabFilteredMovements].sort((a, b) => {
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
    } else if (sortField === "location") {
      return sortDirection === "asc"
        ? a.location.localeCompare(b.location)
        : b.location.localeCompare(a.location);
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

  // Get status badge
  const getStatusBadge = (status) => {
    switch (status) {
      case "Completed":
        return <Badge className="bg-green-500 hover:bg-green-600">{status}</Badge>;
      case "Pending":
        return <Badge className="bg-amber-500 hover:bg-amber-600">{status}</Badge>;
      case "Cancelled":
        return <Badge className="bg-red-500 hover:bg-red-600">{status}</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  // Calculate movement statistics
  const totalReceived = stockMovements
    .filter(m => m.type === "Received")
    .reduce((sum, m) => sum + m.quantity, 0);
  
  const totalIssued = stockMovements
    .filter(m => m.type === "Issued")
    .reduce((sum, m) => sum + Math.abs(m.quantity), 0);
  
  const totalAdjustments = stockMovements
    .filter(m => m.type === "Adjustment")
    .reduce((sum, m) => sum + m.quantity, 0);
  
  const netMovement = totalReceived - totalIssued + totalAdjustments;

  return (
    <div className="py-6 md:py-8">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-1">
              Stock Movements
            </h1>
            <p className="text-muted-foreground">
              Track and manage inventory movements
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="h-4 w-4" />
              Export
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Printer className="h-4 w-4" />
              Print
            </Button>
            <Button size="sm" className="gap-2">
              <Plus className="h-4 w-4" />
              New Movement
            </Button>
          </div>
        </div>

        {/* Movement Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Received</p>
                  <h3 className="text-2xl font-bold text-green-600">{totalReceived}</h3>
                </div>
                <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center">
                  <ArrowRight className="h-6 w-6 text-green-500" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Issued</p>
                  <h3 className="text-2xl font-bold text-red-600">{totalIssued}</h3>
                </div>
                <div className="h-12 w-12 rounded-full bg-red-500/10 flex items-center justify-center">
                  <ArrowLeft className="h-6 w-6 text-red-500" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Adjustments</p>
                  <h3 className="text-2xl font-bold">{totalAdjustments}</h3>
                </div>
                <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <RotateCcw className="h-6 w-6 text-blue-500" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Net Movement</p>
                  <h3 className={`text-2xl font-bold ${netMovement >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {netMovement >= 0 ? `+${netMovement}` : netMovement}
                  </h3>
                </div>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs for switching between movement types */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
          <TabsList className="w-full max-w-md">
            <TabsTrigger value="all" className="flex-1">All Movements</TabsTrigger>
            <TabsTrigger value="Received" className="flex-1">Received</TabsTrigger>
            <TabsTrigger value="Issued" className="flex-1">Issued</TabsTrigger>
            <TabsTrigger value="Adjustment" className="flex-1">Adjustments</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search by product, reference, ID, supplier, or customer..."
                    className="pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="gap-2"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <FilterIcon className="h-4 w-4" />
                  {showFilters ? "Hide Filters" : "Show Filters"}
                </Button>
              </div>
              
              {showFilters && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2 border-t">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Movement Type</label>
                    <Select value={selectedMovementType} onValueChange={setSelectedMovementType}>
                      <SelectTrigger>
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
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Location</label>
                    <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                      <SelectTrigger>
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
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Status</label>
                    <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                      <SelectTrigger>
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent>
                        {statusOptions.map((status) => (
                          <SelectItem key={status} value={status}>
                            {status}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Date Range</label>
                    <Select value={selectedDateRange} onValueChange={setSelectedDateRange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Date Range" />
                      </SelectTrigger>
                      <SelectContent>
                        {dateRanges.map((range) => (
                          <SelectItem key={range} value={range}>
                            {range}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Stock Movements Table */}
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
                    <TableHead>
                      <div className="flex items-center gap-1 cursor-pointer" onClick={() => handleSort("location")}>
                        Location
                        {sortField === "location" && (
                          sortDirection === "asc" ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />
                        )}
                      </div>
                    </TableHead>
                    <TableHead>Status</TableHead>
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
                        <TableCell>{getStatusBadge(movement.status)}</TableCell>
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
                              <DropdownMenuItem className="cursor-pointer">
                                <FileText className="mr-2 h-4 w-4" />
                                Generate Report
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
                      <TableCell colSpan={9} className="h-24 text-center">
                        No stock movements found matching your criteria.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-4">
          <p className="text-sm text-muted-foreground">
            Showing {sortedStockMovements.length} of {stockMovements.length} movements
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
      </div>
    </div>
  );
} 