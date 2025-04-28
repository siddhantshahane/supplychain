"use client";

import React, { useState } from "react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { 
  TrendingUp, 
  Clock, 
  Package, 
  DollarSign, 
  Star, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle,
  Filter,
  Download,
  Calendar,
  ChevronDown,
  Building2,
  Users,
  Truck,
  Factory,
  Box,
  Tag,
  ArrowRight,
  Search
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
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
import { Progress } from "@/components/ui/progress";

// Mock data for supplier performance
const supplierPerformanceData = [
  {
    id: "SUP-001",
    name: "Global Manufacturing Co.",
    type: "Manufacturer",
    onTimeDelivery: 98,
    qualityRating: 4.9,
    responseTime: "2 hours",
    costEfficiency: 92,
    totalSpend: 458750.00,
    orders: 128,
    products: 45,
    performanceScore: 96,
    trend: "up",
    issues: 2,
    lastAssessment: "2024-04-01"
  },
  {
    id: "SUP-002",
    name: "Tech Components Ltd",
    type: "Distributor",
    onTimeDelivery: 95,
    qualityRating: 4.6,
    responseTime: "4 hours",
    costEfficiency: 88,
    totalSpend: 325000.00,
    orders: 95,
    products: 32,
    performanceScore: 92,
    trend: "up",
    issues: 3,
    lastAssessment: "2024-03-28"
  },
  {
    id: "SUP-003",
    name: "Pacific Electronics",
    type: "Manufacturer",
    onTimeDelivery: 92,
    qualityRating: 4.3,
    responseTime: "6 hours",
    costEfficiency: 85,
    totalSpend: 287500.00,
    orders: 76,
    products: 28,
    performanceScore: 88,
    trend: "stable",
    issues: 5,
    lastAssessment: "2024-03-25"
  },
  {
    id: "SUP-004",
    name: "Nordic Materials",
    type: "Raw Materials",
    onTimeDelivery: 97,
    qualityRating: 4.8,
    responseTime: "3 hours",
    costEfficiency: 90,
    totalSpend: 175000.00,
    orders: 42,
    products: 15,
    performanceScore: 94,
    trend: "up",
    issues: 1,
    lastAssessment: "2024-04-02"
  },
  {
    id: "SUP-005",
    name: "Innovation Parts Inc",
    type: "Component Supplier",
    onTimeDelivery: 85,
    qualityRating: 3.9,
    responseTime: "8 hours",
    costEfficiency: 82,
    totalSpend: 125000.00,
    orders: 35,
    products: 22,
    performanceScore: 82,
    trend: "down",
    issues: 8,
    lastAssessment: "2024-02-15"
  }
];

// Mock data for performance trends
const performanceTrends = [
  { month: "Jan", onTimeDelivery: 92, qualityRating: 4.5, costEfficiency: 88 },
  { month: "Feb", onTimeDelivery: 93, qualityRating: 4.6, costEfficiency: 89 },
  { month: "Mar", onTimeDelivery: 94, qualityRating: 4.7, costEfficiency: 90 },
  { month: "Apr", onTimeDelivery: 95, qualityRating: 4.8, costEfficiency: 91 },
  { month: "May", onTimeDelivery: 96, qualityRating: 4.8, costEfficiency: 92 },
  { month: "Jun", onTimeDelivery: 97, qualityRating: 4.9, costEfficiency: 93 }
];

// Mock data for supplier types distribution
const supplierTypesData = [
  { name: "Manufacturer", value: 18 },
  { name: "Distributor", value: 12 },
  { name: "Raw Materials", value: 8 },
  { name: "Component Supplier", value: 7 }
];

// Colors for charts
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

// Mock data for performance metrics
const performanceMetrics = {
  averageOnTimeDelivery: 93.4,
  averageQualityRating: 4.5,
  averageResponseTime: "4.6 hours",
  averageCostEfficiency: 87.4,
  totalSuppliers: 45,
  highPerformers: 18,
  mediumPerformers: 22,
  lowPerformers: 5,
  totalIssues: 19,
  resolvedIssues: 15,
  openIssues: 4
};

// Custom tooltip for charts
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 rounded-md shadow-sm">
        <p className="font-medium">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={`item-${index}`} style={{ color: entry.color }}>
            {entry.name}: {entry.value}{entry.name === "qualityRating" ? "" : "%"}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function SupplierPerformancePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [performanceFilter, setPerformanceFilter] = useState("all");
  const [timeRange, setTimeRange] = useState("6m");

  // Filter suppliers based on search and filters
  const filteredSuppliers = supplierPerformanceData.filter(supplier => {
    const matchesSearch = 
      supplier.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      supplier.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesType = typeFilter === "all" || supplier.type.toLowerCase() === typeFilter;
    const matchesPerformance = performanceFilter === "all" || 
      (performanceFilter === "high" && supplier.performanceScore >= 90) ||
      (performanceFilter === "medium" && supplier.performanceScore >= 80 && supplier.performanceScore < 90) ||
      (performanceFilter === "low" && supplier.performanceScore < 80);
    
    return matchesSearch && matchesType && matchesPerformance;
  });

  // Get performance badge color
  const getPerformanceColor = (score: number) => {
    if (score >= 90) return "bg-green-100 text-green-800";
    if (score >= 80) return "bg-yellow-100 text-yellow-800";
    return "bg-red-100 text-red-800";
  };

  // Get trend icon
  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-4 w-4 text-green-500" />;
      case "down":
        return <TrendingUp className="h-4 w-4 text-red-500 transform rotate-180" />;
      default:
        return <TrendingUp className="h-4 w-4 text-gray-500 transform rotate-90" />;
    }
  };

  return (
    <div className="py-6 md:py-8">
      <div className="container px-4 md:px-6 max-w-full">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 md:mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-1">
              Supplier Performance
            </h1>
            <p className="text-muted-foreground">
              Monitor and analyze supplier performance metrics
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full md:w-auto">
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Select time range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3m">Last 3 Months</SelectItem>
                <SelectItem value="6m">Last 6 Months</SelectItem>
                <SelectItem value="1y">Last Year</SelectItem>
                <SelectItem value="all">All Time</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        {/* Performance Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Average On-Time Delivery</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{performanceMetrics.averageOnTimeDelivery}%</div>
              <div className="flex items-center text-xs text-green-500 mt-1">
                <Progress value={performanceMetrics.averageOnTimeDelivery} className="h-2" indicatorClassName="bg-green-500" />
              </div>
              <p className="text-xs text-muted-foreground">Industry average: 90%</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Quality Rating</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{performanceMetrics.averageQualityRating}</div>
              <div className="flex items-center text-xs text-green-500 mt-1">
                <Progress value={performanceMetrics.averageQualityRating * 20} className="h-2" indicatorClassName="bg-blue-500" />
              </div>
              <p className="text-xs text-muted-foreground">Out of 5.0 scale</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Response Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{performanceMetrics.averageResponseTime}</div>
              <div className="flex items-center text-xs text-red-500 mt-1">
                <Progress value={85} className="h-2" indicatorClassName="bg-purple-500" />
              </div>
              <p className="text-xs text-muted-foreground">Average response to inquiries</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Cost Efficiency</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{performanceMetrics.averageCostEfficiency}%</div>
              <div className="flex items-center text-xs text-green-500 mt-1">
                <Progress value={performanceMetrics.averageCostEfficiency} className="h-2" indicatorClassName="bg-amber-500" />
              </div>
              <p className="text-xs text-muted-foreground">Value for money rating</p>
            </CardContent>
          </Card>
        </div>

        {/* Performance Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 mb-6 md:mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>On-Time Delivery Trend</CardTitle>
              <CardDescription>
                Monthly on-time delivery performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={performanceTrends}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                    <XAxis dataKey="month" />
                    <YAxis domain={[90, 100]} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="onTimeDelivery"
                      name="On-Time Delivery %"
                      stroke="#4f46e5"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Quality Rating Distribution</CardTitle>
              <CardDescription>
                Distribution of supplier quality ratings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={supplierTypesData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {supplierTypesData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Distribution */}
        <Card className="mb-6 md:mb-8">
          <CardHeader className="border-b">
            <CardTitle className="text-base sm:text-lg">Performance Distribution</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">High Performers</span>
                  <Badge className="bg-green-100 text-green-800">{performanceMetrics.highPerformers}</Badge>
                </div>
                <Progress value={(performanceMetrics.highPerformers / performanceMetrics.totalSuppliers) * 100} className="h-2" indicatorClassName="bg-green-500" />
                <p className="text-xs text-muted-foreground">Suppliers with performance score ≥ 90%</p>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Medium Performers</span>
                  <Badge className="bg-yellow-100 text-yellow-800">{performanceMetrics.mediumPerformers}</Badge>
                </div>
                <Progress value={(performanceMetrics.mediumPerformers / performanceMetrics.totalSuppliers) * 100} className="h-2" indicatorClassName="bg-yellow-500" />
                <p className="text-xs text-muted-foreground">Suppliers with performance score 80-89%</p>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Low Performers</span>
                  <Badge className="bg-red-100 text-red-800">{performanceMetrics.lowPerformers}</Badge>
                </div>
                <Progress value={(performanceMetrics.lowPerformers / performanceMetrics.totalSuppliers) * 100} className="h-2" indicatorClassName="bg-red-500" />
                <p className="text-xs text-muted-foreground">Suppliers with performance score &lt; 80%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Issue Tracking */}
        <Card className="mb-6 md:mb-8">
          <CardHeader className="border-b">
            <CardTitle className="text-base sm:text-lg">Issue Tracking</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Total Issues</span>
                  <Badge variant="outline">{performanceMetrics.totalIssues}</Badge>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Resolved</span>
                    </div>
                    <Progress value={(performanceMetrics.resolvedIssues / performanceMetrics.totalIssues) * 100} className="h-2" indicatorClassName="bg-green-500" />
                    <p className="text-xs text-muted-foreground">{performanceMetrics.resolvedIssues} issues</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-amber-500" />
                      <span className="text-sm">Open</span>
                    </div>
                    <Progress value={(performanceMetrics.openIssues / performanceMetrics.totalIssues) * 100} className="h-2" indicatorClassName="bg-amber-500" />
                    <p className="text-xs text-muted-foreground">{performanceMetrics.openIssues} issues</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Issue Resolution Rate</span>
                  <Badge variant="outline">{Math.round((performanceMetrics.resolvedIssues / performanceMetrics.totalIssues) * 100)}%</Badge>
                </div>
                <div className="h-40">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={[
                        { name: "Jan", resolved: 3, open: 1 },
                        { name: "Feb", resolved: 2, open: 2 },
                        { name: "Mar", resolved: 4, open: 1 },
                        { name: "Apr", resolved: 3, open: 0 },
                        { name: "May", resolved: 2, open: 1 },
                        { name: "Jun", resolved: 1, open: 0 }
                      ]}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="resolved" name="Resolved" fill="#10B981" />
                      <Bar dataKey="open" name="Open" fill="#F59E0B" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Filters and Search */}
        <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center mb-6 md:mb-8">
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
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
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
            <Select value={performanceFilter} onValueChange={setPerformanceFilter}>
              <SelectTrigger className="w-full sm:w-[180px] h-10">
                <SelectValue placeholder="Filter by performance" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Performance</SelectItem>
                <SelectItem value="high">High (90%+)</SelectItem>
                <SelectItem value="medium">Medium (80-89%)</SelectItem>
                <SelectItem value="low">Low (&lt;80%)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Suppliers Performance Table */}
        <Card className="mb-6 md:mb-8">
          <CardHeader className="border-b">
            <CardTitle className="text-base sm:text-lg">Supplier Performance</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Performance Score</TableHead>
                    <TableHead>On-Time Delivery</TableHead>
                    <TableHead>Quality Rating</TableHead>
                    <TableHead>Response Time</TableHead>
                    <TableHead>Cost Efficiency</TableHead>
                    <TableHead>Issues</TableHead>
                    <TableHead>Trend</TableHead>
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
                        <Badge className={getPerformanceColor(supplier.performanceScore)}>
                          {supplier.performanceScore}%
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={supplier.onTimeDelivery} className="h-2" indicatorClassName="bg-green-500" />
                          <span className="text-xs text-muted-foreground">{supplier.onTimeDelivery}%</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={supplier.qualityRating * 20} className="h-2" indicatorClassName="bg-blue-500" />
                          <span className="text-xs text-muted-foreground">{supplier.qualityRating}</span>
                        </div>
                      </TableCell>
                      <TableCell>{supplier.responseTime}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={supplier.costEfficiency} className="h-2" indicatorClassName="bg-amber-500" />
                          <span className="text-xs text-muted-foreground">{supplier.costEfficiency}%</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={supplier.issues > 5 ? "destructive" : supplier.issues > 2 ? "secondary" : "outline"}>
                          {supplier.issues}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {getTrendIcon(supplier.trend)}
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <ChevronDown className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>View Issues</DropdownMenuItem>
                            <DropdownMenuItem>Performance History</DropdownMenuItem>
                            <DropdownMenuItem>Generate Report</DropdownMenuItem>
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
    </div>
  );
} 