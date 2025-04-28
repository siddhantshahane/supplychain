"use client"

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertCircle, TrendingUp, BarChart3, Calendar, PackageSearch } from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  ComposedChart,
  Bar,
} from "recharts";

export default function ForecastingPage() {
  const [forecastRange, setForecastRange] = useState("3months");
  const [confidence, setConfidence] = useState("medium");

  // Mock data for forecasts
  const salesForecastData = [
    { month: "Jul", actual: 310, forecast: 310, upper: 310, lower: 310 },
    { month: "Aug", forecast: 340, upper: 360, lower: 320 },
    { month: "Sep", forecast: 375, upper: 405, lower: 345 },
    { month: "Oct", forecast: 420, upper: 460, lower: 380 },
    { month: "Nov", forecast: 390, upper: 440, lower: 340 },
    { month: "Dec", forecast: 450, upper: 510, lower: 390 },
  ];

  const inventoryForecastData = [
    { month: "Jul", actual: 320, forecast: 320, upper: 320, lower: 320 },
    { month: "Aug", forecast: 305, upper: 325, lower: 285 },
    { month: "Sep", forecast: 315, upper: 345, lower: 285 },
    { month: "Oct", forecast: 340, upper: 380, lower: 300 },
    { month: "Nov", forecast: 325, upper: 375, lower: 275 },
    { month: "Dec", forecast: 355, upper: 415, lower: 295 },
  ];

  const seasonalDemandData = [
    { month: "Jan", value: 65 },
    { month: "Feb", value: 70 },
    { month: "Mar", value: 90 },
    { month: "Apr", value: 85 },
    { month: "May", value: 100 },
    { month: "Jun", value: 120 },
    { month: "Jul", value: 140 },
    { month: "Aug", value: 145 },
    { month: "Sep", value: 125 },
    { month: "Oct", value: 110 },
    { month: "Nov", value: 100 },
    { month: "Dec", value: 130 },
  ];

  // Product demand forecast data
  const productDemandForecast = [
    { product: "Industrial Valve A100", growth: 15, confidence: 85, trend: "up" },
    { product: "PVC Pipe 20mm x 3m", growth: 8, confidence: 75, trend: "up" },
    { product: "Adjustable Wrench Set", growth: -3, confidence: 65, trend: "down" },
    { product: "Brass Connector 15mm", growth: 22, confidence: 80, trend: "up" },
    { product: "Water Pump 750W", growth: 5, confidence: 70, trend: "up" },
  ];

  // Custom tooltip for uncertainty ranges
  const ForecastTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background border rounded-md shadow-md p-3 text-xs">
          <p className="font-medium mb-1">{label}</p>
          {payload.map((entry: any, index: number) => {
            if (entry.dataKey === "actual" && entry.value) {
              return (
                <div key={`actual-${index}`} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-yellow-500" />
                  <span>Actual: {entry.value}</span>
                </div>
              );
            }
            if (entry.dataKey === "forecast") {
              return (
                <div key={`forecast-${index}`} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <span>Forecast: {entry.value}</span>
                </div>
              );
            }
            if (entry.dataKey === "upper") {
              return (
                <div key={`upper-${index}`} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gray-400" />
                  <span>Upper bound: {entry.value}</span>
                </div>
              );
            }
            if (entry.dataKey === "lower") {
              return (
                <div key={`lower-${index}`} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gray-400" />
                  <span>Lower bound: {entry.value}</span>
                </div>
              );
            }
            return null;
          })}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="py-6 md:py-8">
      <div className="container px-4 md:px-6 max-w-full">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 md:mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-1">
              Forecasting & Predictive Analytics
            </h1>
            <p className="text-muted-foreground">
              Predict future trends and optimize your supply chain planning
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full md:w-auto">
            <Select value={forecastRange} onValueChange={setForecastRange}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Forecast Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1month">1 Month</SelectItem>
                <SelectItem value="3months">3 Months</SelectItem>
                <SelectItem value="6months">6 Months</SelectItem>
                <SelectItem value="12months">12 Months</SelectItem>
              </SelectContent>
            </Select>
            <Select value={confidence} onValueChange={setConfidence}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Confidence Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low (68%)</SelectItem>
                <SelectItem value="medium">Medium (95%)</SelectItem>
                <SelectItem value="high">High (99%)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Alert for predictive nature */}
        <Card className="mb-6 md:mb-8 bg-muted/20">
          <CardContent className="p-4 flex items-start gap-4">
            <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-none" />
            <div>
              <h4 className="text-sm font-medium">Forecasting Information</h4>
              <p className="text-sm text-muted-foreground">
                These forecasts are based on historical data and predictive models. Actual results may vary.
                The confidence intervals shown represent {confidence === "low" ? "68%" : confidence === "medium" ? "95%" : "99%"} prediction intervals.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Forecast tabs */}
        <Tabs defaultValue="demand" className="space-y-5 md:space-y-6">
          <div className="flex justify-center w-full">
            <TabsList className="w-full max-w-2xl bg-muted text-muted-foreground inline-flex h-9 items-center justify-center rounded-lg p-[3px]">
              <TabsTrigger value="demand" className="flex-1 text-center">
                <PackageSearch className="h-4 w-4 mr-2" />
                <span className="truncate">Demand Forecast</span>
              </TabsTrigger>
              <TabsTrigger value="inventory" className="flex-1 text-center">
                <BarChart3 className="h-4 w-4 mr-2" />
                <span className="truncate">Inventory Forecast</span>
              </TabsTrigger>
              <TabsTrigger value="seasonal" className="flex-1 text-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span className="truncate">Seasonal Analysis</span>
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Demand Forecast Tab */}
          <TabsContent value="demand" className="space-y-5 md:space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
              {/* Sales Forecast Chart */}
              <Card className="lg:col-span-2">
                <CardHeader className="pb-2 pt-4 px-4">
                  <CardTitle>Demand Forecast</CardTitle>
                  <CardDescription>
                    Sales volume projections for the next {forecastRange === "1month" ? "month" : forecastRange === "3months" ? "3 months" : forecastRange === "6months" ? "6 months" : "year"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 md:p-6">
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <ComposedChart
                        data={salesForecastData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip content={<ForecastTooltip />} />
                        <Legend />
                        <Area
                          type="monotone"
                          dataKey="upper"
                          fill="#a5b4fc"
                          stroke="none"
                          fillOpacity={0.2}
                          name="Upper Bound"
                          isAnimationActive={true}
                        />
                        <Area
                          type="monotone"
                          dataKey="lower"
                          fill="#a5b4fc"
                          stroke="none"
                          fillOpacity={0.2}
                          name="Lower Bound"
                          isAnimationActive={true}
                        />
                        <Line
                          type="monotone"
                          dataKey="actual"
                          stroke="#eab308"
                          strokeWidth={2}
                          dot={{ r: 4 }}
                          name="Actual Sales"
                          isAnimationActive={true}
                        />
                        <Line
                          type="monotone"
                          dataKey="forecast"
                          stroke="#4f46e5"
                          strokeWidth={2}
                          strokeDasharray="5 5"
                          dot={{ r: 4 }}
                          name="Forecasted Sales"
                          isAnimationActive={true}
                        />
                      </ComposedChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Top Products Demand Growth */}
              <Card className="h-full">
                <CardHeader className="pb-2 pt-4 px-4">
                  <CardTitle>Product Demand Growth</CardTitle>
                  <CardDescription>
                    Projected demand growth for top products
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y">
                    {productDemandForecast.map((product, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4"
                      >
                        <div className="flex-1">
                          <h4 className="text-sm font-medium">{product.product}</h4>
                          <div className="flex items-center mt-1">
                            <div
                              className="h-1.5 rounded-full bg-primary/20 w-full max-w-36"
                              style={{ position: "relative" }}
                            >
                              <div
                                className="absolute top-0 left-0 h-1.5 rounded-full bg-primary"
                                style={{ width: `${product.confidence}%` }}
                              ></div>
                            </div>
                            <span className="ml-2 text-xs text-muted-foreground">
                              {product.confidence}% confidence
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-sm font-medium ${
                              product.trend === "up" ? "text-green-500" : "text-red-500"
                            }`}
                          >
                            {product.trend === "up" ? "+" : ""}
                            {product.growth}%
                          </span>
                          <TrendingUp
                            className={`h-4 w-4 ${
                              product.trend === "up" ? "text-green-500" : "text-red-500"
                            }`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Demand Insights */}
              <Card className="h-full">
                <CardHeader className="pt-4 px-4">
                  <CardTitle>Demand Insights</CardTitle>
                  <CardDescription>
                    Key insights from demand forecast models
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Growth Drivers</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 text-xs mt-0.5">↑</span>
                        <span>Industrial Valve demand growing 15% due to construction sector expansion</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 text-xs mt-0.5">↑</span>
                        <span>Brass Connectors showing strongest growth (22%) from new export markets</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 text-xs mt-0.5">↓</span>
                        <span>Adjustable Wrench Sets declining 3% due to competition</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Recommendations</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary text-xs mt-0.5">•</span>
                        <span>Increase Industrial Valve stock by 10% to meet growing demand</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary text-xs mt-0.5">•</span>
                        <span>Secure additional suppliers for Brass Connectors to handle growth</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary text-xs mt-0.5">•</span>
                        <span>Consider promotions for Adjustable Wrench Sets to boost sales</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Inventory Forecast Tab */}
          <TabsContent value="inventory" className="space-y-5 md:space-y-6">
            <div className="grid grid-cols-1 gap-5 md:gap-6">
              {/* Inventory Forecast Chart */}
              <Card>
                <CardHeader className="pb-2 pt-4 px-4">
                  <CardTitle>Inventory Level Forecast</CardTitle>
                  <CardDescription>
                    Projected inventory levels for the next {forecastRange === "1month" ? "month" : forecastRange === "3months" ? "3 months" : forecastRange === "6months" ? "6 months" : "year"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 md:p-6">
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <ComposedChart
                        data={inventoryForecastData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip content={<ForecastTooltip />} />
                        <Legend />
                        <Area
                          type="monotone"
                          dataKey="upper"
                          fill="#a5b4fc"
                          stroke="none"
                          fillOpacity={0.2}
                          name="Upper Bound"
                          isAnimationActive={true}
                        />
                        <Area
                          type="monotone"
                          dataKey="lower"
                          fill="#a5b4fc"
                          stroke="none"
                          fillOpacity={0.2}
                          name="Lower Bound"
                          isAnimationActive={true}
                        />
                        <Line
                          type="monotone"
                          dataKey="actual"
                          stroke="#eab308"
                          strokeWidth={2}
                          dot={{ r: 4 }}
                          name="Actual Inventory"
                          isAnimationActive={true}
                        />
                        <Line
                          type="monotone"
                          dataKey="forecast"
                          stroke="#4f46e5"
                          strokeWidth={2}
                          strokeDasharray="5 5"
                          dot={{ r: 4 }}
                          name="Forecasted Inventory"
                          isAnimationActive={true}
                        />
                      </ComposedChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Inventory Optimization Recommendations */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Optimization Opportunities</CardTitle>
                    <CardDescription>
                      Projected inventory cost savings
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <h4 className="text-sm font-medium">Excess Inventory Reduction</h4>
                        <span className="text-green-500 font-medium">$12,500</span>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Opportunity to reduce holding costs by optimizing stock levels
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: "65%" }}></div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <h4 className="text-sm font-medium">Order Cycle Optimization</h4>
                        <span className="text-green-500 font-medium">$8,200</span>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Savings from improved order frequency and quantities
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: "45%" }}></div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <h4 className="text-sm font-medium">Warehouse Space Utilization</h4>
                        <span className="text-green-500 font-medium">$5,800</span>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Projected savings from improved space utilization
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: "30%" }}></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Stock Management Plan</CardTitle>
                    <CardDescription>
                      Recommended actions based on forecasts
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Products to Restock</h4>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-amber-500 text-xs mt-0.5">!</span>
                          <span>Industrial Valve A100 - Reorder in 14 days (15 units)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-amber-500 text-xs mt-0.5">!</span>
                          <span>Brass Connector 15mm - Reorder in 7 days (50 units)</span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Potential Overstock</h4>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500 text-xs mt-0.5">↓</span>
                          <span>PVC Pipe 20mm x 3m - 35% above optimal level</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500 text-xs mt-0.5">↓</span>
                          <span>Adjustable Wrench Set - 22% above optimal level</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Seasonal Analysis Tab */}
          <TabsContent value="seasonal" className="space-y-5 md:space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
              {/* Seasonal Demand Chart */}
              <Card className="lg:col-span-2">
                <CardHeader className="pb-2 pt-4 px-4">
                  <CardTitle>Seasonal Demand Patterns</CardTitle>
                  <CardDescription>
                    Annual demand cycle showing seasonal variations
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 md:p-6">
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={seasonalDemandData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area
                          type="monotone"
                          dataKey="value"
                          name="Demand Index"
                          stroke="#4f46e5"
                          fill="#4f46e5"
                          fillOpacity={0.2}
                          isAnimationActive={true}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Seasonal Insights */}
              <Card>
                <CardHeader className="pt-4 px-4">
                  <CardTitle>Seasonal Insights</CardTitle>
                  <CardDescription>
                    Key seasonal patterns and implications
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Peak Seasons</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="font-medium text-xs">Summer (Jun-Aug):</span>
                        <span>40% higher demand than yearly average</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-medium text-xs">December:</span>
                        <span>30% higher demand due to year-end projects</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Low Seasons</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="font-medium text-xs">January:</span>
                        <span>35% lower demand than yearly average</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-medium text-xs">February:</span>
                        <span>30% lower demand than yearly average</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Seasonal Planning */}
              <Card>
                <CardHeader className="pt-4 px-4">
                  <CardTitle>Seasonal Planning</CardTitle>
                  <CardDescription>
                    Recommendations for managing seasonal variations
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Inventory Strategies</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary text-xs mt-0.5">•</span>
                        <span>Increase stock levels by 25% in May to prepare for summer peak</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary text-xs mt-0.5">•</span>
                        <span>Reduce purchasing in January to minimize excess inventory</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary text-xs mt-0.5">•</span>
                        <span>Schedule promotions during February to boost low-season sales</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Supplier Coordination</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary text-xs mt-0.5">•</span>
                        <span>Negotiate flexible delivery schedules with key suppliers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary text-xs mt-0.5">•</span>
                        <span>Share seasonal forecast with partners to improve planning</span>
                      </li>
                    </ul>
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