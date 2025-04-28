"use client"

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, LineChart, PieChart } from "lucide-react";
import {
  ResponsiveContainer,
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  LineChart as RechartsLineChart,
  Line,
  Area,
  AreaChart,
} from "recharts";

export default function AnalyticsDashboard() {
  const [timeRange, setTimeRange] = useState("30days");

  // Mock data for charts
  const inventoryData = [
    { name: "Raw Materials", value: 42, color: "#4f46e5" },
    { name: "Work in Progress", value: 28, color: "#8b5cf6" },
    { name: "Finished Goods", value: 30, color: "#06b6d4" },
  ];

  // Enhanced order trends data with more points
  const orderTrends = [
    { month: "Jan", sales: 120, purchases: 105, inventory: 250 },
    { month: "Feb", sales: 150, purchases: 125, inventory: 245 },
    { month: "Mar", sales: 200, purchases: 150, inventory: 260 },
    { month: "Apr", sales: 180, purchases: 130, inventory: 240 },
    { month: "May", sales: 250, purchases: 180, inventory: 280 },
    { month: "Jun", sales: 300, purchases: 220, inventory: 320 },
  ];

  // Data for inventory age analysis
  const inventoryAgeData = [
    { name: "0-30 days", value: 65 },
    { name: "31-60 days", value: 20 },
    { name: "61-90 days", value: 10 },
    { name: ">90 days", value: 5 },
  ];

  // Supplier performance data
  const supplierPerformanceData = [
    { name: "Acme Corp", onTime: 95, quality: 90, price: 85 },
    { name: "Globex", onTime: 87, quality: 95, price: 80 },
    { name: "Initech", onTime: 92, quality: 85, price: 95 },
    { name: "Umbrella", onTime: 80, quality: 82, price: 90 },
  ];

  const kpis = [
    {
      title: "Inventory Turnover",
      value: "4.2",
      change: "+0.3",
      trend: "up",
      description: "Times per year",
    },
    {
      title: "Order Fulfillment Rate",
      value: "96.8%",
      change: "+1.2%",
      trend: "up",
      description: "Orders shipped on time",
    },
    {
      title: "Supplier On-Time Delivery",
      value: "92.5%",
      change: "-0.5%",
      trend: "down",
      description: "Orders received on time",
    },
    {
      title: "Inventory Accuracy",
      value: "98.2%",
      change: "+0.7%",
      trend: "up",
      description: "Physical vs. system count",
    },
  ];

  const recentReports = [
    {
      id: "1",
      name: "Monthly Inventory Valuation",
      date: "June 15, 2023",
      type: "Inventory",
    },
    {
      id: "2",
      name: "Q2 Supplier Performance",
      date: "June 12, 2023",
      type: "Supplier",
    },
    {
      id: "3",
      name: "Order Fulfillment Analysis",
      date: "June 10, 2023",
      type: "Orders",
    },
    {
      id: "4",
      name: "Stock Movement Report",
      date: "June 8, 2023",
      type: "Inventory",
    },
  ];

  // Custom tooltip for charts
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background border rounded-md shadow-md p-3 text-xs">
          <p className="font-medium mb-1">{label}</p>
          {payload.map((entry: any, index: number) => (
            <div key={`item-${index}`} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }}/>
              <span>{`${entry.name}: ${entry.value}`}</span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="py-6 md:py-8">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-1">Analytics Dashboard</h1>
            <p className="text-muted-foreground">Monitor your supply chain performance and insights</p>
          </div>
          <div className="flex items-center gap-4">
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select time range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">Last 7 Days</SelectItem>
                <SelectItem value="30days">Last 30 Days</SelectItem>
                <SelectItem value="90days">Last 90 Days</SelectItem>
                <SelectItem value="12months">Last 12 Months</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              Export Reports
            </Button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {kpis.map((kpi, index) => (
            <Card key={index} className="transition-all duration-200 hover:shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-row justify-between items-center mb-2">
                  <p className="text-sm font-medium text-muted-foreground">{kpi.title}</p>
                  <span
                    className={`text-xs font-medium ${
                      kpi.trend === "up" ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {kpi.change}
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-2xl font-bold">{kpi.value}</h3>
                  <p className="text-xs text-muted-foreground">{kpi.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content with Tabs */}
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="w-full max-w-md">
            <TabsTrigger value="overview" className="flex-1">
              Overview
            </TabsTrigger>
            <TabsTrigger value="inventory" className="flex-1">
              Inventory
            </TabsTrigger>
            <TabsTrigger value="orders" className="flex-1">
              Orders
            </TabsTrigger>
            <TabsTrigger value="suppliers" className="flex-1">
              Suppliers
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Order Trends Chart */}
              <Card className="transition-all duration-200 hover:shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle>Order Trends</CardTitle>
                  <CardDescription>
                    Sales vs. Purchase orders over time
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsBarChart
                        data={orderTrends}
                        margin={{
                          top: 20,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend />
                        <Bar 
                          dataKey="sales" 
                          name="Sales Orders" 
                          fill="#4f46e5" 
                          radius={[4, 4, 0, 0]}
                          animationDuration={1000}
                          isAnimationActive={true}
                        />
                        <Bar 
                          dataKey="purchases" 
                          name="Purchase Orders" 
                          fill="#8b5cf6" 
                          radius={[4, 4, 0, 0]}
                          animationDuration={1500}
                          isAnimationActive={true}
                        />
                      </RechartsBarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Inventory Distribution Chart */}
              <Card className="transition-all duration-200 hover:shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle>Inventory Distribution</CardTitle>
                  <CardDescription>
                    Current stock by product category
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsPieChart>
                        <Pie
                          data={inventoryData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={100}
                          paddingAngle={3}
                          dataKey="value"
                          animationDuration={1000}
                          animationBegin={200}
                          isAnimationActive={true}
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          labelLine={{ stroke: 'rgba(100, 100, 100, 0.5)', strokeWidth: 1 }}
                        >
                          {inventoryData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip content={<CustomTooltip />} />
                        <Legend />
                      </RechartsPieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Inventory Trend Line Chart */}
              <Card className="transition-all duration-200 hover:shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle>Inventory Levels</CardTitle>
                  <CardDescription>
                    Inventory level trends over time
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={orderTrends}
                        margin={{
                          top: 20,
                          right: 30,
                          left: 0,
                          bottom: 0,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip content={<CustomTooltip />} />
                        <Area 
                          type="monotone" 
                          dataKey="inventory" 
                          name="Inventory Level"
                          stroke="#06b6d4" 
                          fill="#06b6d4"
                          fillOpacity={0.2}
                          animationDuration={1500}
                          isAnimationActive={true}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Reports */}
              <Card className="transition-all duration-200 hover:shadow-md">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Recent Reports</CardTitle>
                      <CardDescription>
                        Recently generated analytics reports
                      </CardDescription>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/dashboard/analytics/reports">View all</Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="border rounded-md">
                    <div className="grid grid-cols-3 gap-4 p-4 border-b font-medium text-sm">
                      <div>Report Name</div>
                      <div>Date</div>
                      <div>Category</div>
                    </div>
                    {recentReports.map((report) => (
                      <div
                        key={report.id}
                        className="grid grid-cols-3 gap-4 p-4 border-b last:border-0 text-sm items-center hover:bg-accent/30 transition-colors"
                      >
                        <div className="font-medium">{report.name}</div>
                        <div className="text-muted-foreground">{report.date}</div>
                        <div>
                          <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-muted">
                            {report.type}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Inventory Tab */}
          <TabsContent value="inventory" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="transition-all duration-200 hover:shadow-md">
                <CardHeader>
                  <CardTitle>Inventory Age Analysis</CardTitle>
                  <CardDescription>
                    Age distribution of current inventory
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsPieChart>
                        <Pie
                          data={inventoryAgeData}
                          cx="50%"
                          cy="50%"
                          outerRadius={100}
                          dataKey="value"
                          animationDuration={1000}
                          isAnimationActive={true}
                          label={({ name, value }) => `${name}: ${value}%`}
                        >
                          {inventoryAgeData.map((entry, index) => (
                            <Cell 
                              key={`cell-${index}`} 
                              fill={
                                index === 0 ? "#10b981" : 
                                index === 1 ? "#6366f1" : 
                                index === 2 ? "#f59e0b" : 
                                "#ef4444"
                              } 
                            />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </RechartsPieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card className="transition-all duration-200 hover:shadow-md">
                <CardHeader>
                  <CardTitle>Stock Level Analysis</CardTitle>
                  <CardDescription>
                    Current inventory levels against targets
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsBarChart
                        layout="vertical"
                        data={[
                          { name: "Raw Materials", actual: 85, target: 100 },
                          { name: "Components", actual: 110, target: 100 },
                          { name: "WIP", actual: 95, target: 100 },
                          { name: "Finished Goods", actual: 120, target: 100 },
                        ]}
                        margin={{ top: 20, right: 30, left: 70, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                        <XAxis type="number" />
                        <YAxis type="category" dataKey="name" />
                        <Tooltip />
                        <Legend />
                        <Bar 
                          dataKey="actual" 
                          name="Actual Level" 
                          fill="#4f46e5" 
                          radius={[0, 4, 4, 0]} 
                          animationDuration={1000}
                          isAnimationActive={true}
                        />
                        <Bar 
                          dataKey="target" 
                          name="Target Level" 
                          fill="#8b5cf6" 
                          radius={[0, 4, 4, 0]} 
                          animationDuration={1500}
                          isAnimationActive={true}
                          opacity={0.5}
                        />
                      </RechartsBarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="transition-all duration-200 hover:shadow-md">
                <CardHeader>
                  <CardTitle>Order Volume Trends</CardTitle>
                  <CardDescription>
                    Monthly order volumes by type
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsLineChart
                        data={[
                          { month: "Jan", sales: 65, purchases: 45, returns: 5 },
                          { month: "Feb", sales: 70, purchases: 50, returns: 8 },
                          { month: "Mar", sales: 90, purchases: 65, returns: 12 },
                          { month: "Apr", sales: 85, purchases: 60, returns: 10 },
                          { month: "May", sales: 100, purchases: 75, returns: 7 },
                          { month: "Jun", sales: 120, purchases: 80, returns: 9 },
                        ]}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line 
                          type="monotone" 
                          dataKey="sales" 
                          name="Sales Orders"
                          stroke="#4f46e5" 
                          activeDot={{ r: 8 }}
                          animationDuration={1000}
                          isAnimationActive={true}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="purchases" 
                          name="Purchase Orders"
                          stroke="#8b5cf6" 
                          animationDuration={1500}
                          isAnimationActive={true}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="returns" 
                          name="Returns"
                          stroke="#ef4444" 
                          animationDuration={2000}
                          isAnimationActive={true}
                        />
                      </RechartsLineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card className="transition-all duration-200 hover:shadow-md">
                <CardHeader>
                  <CardTitle>Fulfillment Performance</CardTitle>
                  <CardDescription>
                    Order fulfillment KPIs by month
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsBarChart
                        data={[
                          { month: "Jan", onTime: 92, complete: 95 },
                          { month: "Feb", onTime: 94, complete: 97 },
                          { month: "Mar", onTime: 91, complete: 94 },
                          { month: "Apr", onTime: 96, complete: 98 },
                          { month: "May", onTime: 97, complete: 99 },
                          { month: "Jun", onTime: 95, complete: 97 },
                        ]}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                        <XAxis dataKey="month" />
                        <YAxis domain={[85, 100]} />
                        <Tooltip />
                        <Legend />
                        <Bar 
                          dataKey="onTime" 
                          name="On-Time Delivery %" 
                          fill="#10b981" 
                          radius={[4, 4, 0, 0]}
                          animationDuration={1000}
                          isAnimationActive={true}
                        />
                        <Bar 
                          dataKey="complete" 
                          name="Order Completeness %" 
                          fill="#06b6d4" 
                          radius={[4, 4, 0, 0]}
                          animationDuration={1500}
                          isAnimationActive={true}
                        />
                      </RechartsBarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Suppliers Tab */}
          <TabsContent value="suppliers" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="transition-all duration-200 hover:shadow-md">
                <CardHeader>
                  <CardTitle>Supplier Performance</CardTitle>
                  <CardDescription>
                    Key performance metrics by supplier
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsBarChart
                        data={supplierPerformanceData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                        <XAxis dataKey="name" />
                        <YAxis domain={[0, 100]} />
                        <Tooltip />
                        <Legend />
                        <Bar 
                          dataKey="onTime" 
                          name="On-Time Delivery %" 
                          fill="#4f46e5" 
                          radius={[4, 4, 0, 0]}
                          animationDuration={1000}
                          isAnimationActive={true}
                        />
                        <Bar 
                          dataKey="quality" 
                          name="Quality Rating %" 
                          fill="#10b981" 
                          radius={[4, 4, 0, 0]}
                          animationDuration={1500}
                          isAnimationActive={true}
                        />
                        <Bar 
                          dataKey="price" 
                          name="Price Competitiveness" 
                          fill="#f59e0b" 
                          radius={[4, 4, 0, 0]}
                          animationDuration={2000}
                          isAnimationActive={true}
                        />
                      </RechartsBarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card className="transition-all duration-200 hover:shadow-md">
                <CardHeader>
                  <CardTitle>Supplier Delivery Trends</CardTitle>
                  <CardDescription>
                    On-time delivery performance over time
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsLineChart
                        data={[
                          { month: "Jan", acme: 94, globex: 89, initech: 91, umbrella: 82 },
                          { month: "Feb", acme: 95, globex: 92, initech: 93, umbrella: 85 },
                          { month: "Mar", acme: 93, globex: 90, initech: 94, umbrella: 83 },
                          { month: "Apr", acme: 96, globex: 88, initech: 92, umbrella: 84 },
                          { month: "May", acme: 97, globex: 91, initech: 93, umbrella: 88 },
                          { month: "Jun", acme: 95, globex: 93, initech: 95, umbrella: 90 },
                        ]}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                        <XAxis dataKey="month" />
                        <YAxis domain={[80, 100]} />
                        <Tooltip />
                        <Legend />
                        <Line 
                          type="monotone" 
                          dataKey="acme" 
                          name="Acme Corp"
                          stroke="#4f46e5" 
                          animationDuration={1000}
                          isAnimationActive={true}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="globex" 
                          name="Globex"
                          stroke="#10b981" 
                          animationDuration={1500}
                          isAnimationActive={true}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="initech" 
                          name="Initech"
                          stroke="#f59e0b" 
                          animationDuration={2000}
                          isAnimationActive={true}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="umbrella" 
                          name="Umbrella"
                          stroke="#ef4444" 
                          animationDuration={2500}
                          isAnimationActive={true}
                        />
                      </RechartsLineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
} 