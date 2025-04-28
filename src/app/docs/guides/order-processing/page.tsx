"use client"

import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  CheckCircle2,
  ChevronRight,
  ShoppingCart,
  Package,
  Truck,
  AlertCircle,
  Info,
  Calendar,
  Search,
  RefreshCw,
  FileText,
  TrendingUp,
  ArrowDownUp,
  ClipboardCheck
} from "lucide-react";

export default function OrderProcessingGuide() {
  const sections = [
    {
      id: "overview",
      title: "Order Processing Overview",
      description: "Understanding order management in Supply2Uchain"
    },
    {
      id: "create-orders",
      title: "Creating Orders",
      description: "How to create and configure new orders"
    },
    {
      id: "order-fulfillment",
      title: "Order Fulfillment",
      description: "Processing orders from acceptance to shipment"
    },
    {
      id: "tracking-orders",
      title: "Order Tracking",
      description: "Monitoring order status and history"
    },
    {
      id: "returns",
      title: "Returns & Exchanges",
      description: "Managing product returns and exchanges"
    },
    {
      id: "order-analytics",
      title: "Order Analytics",
      description: "Generating insights from order data"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10">
              <div className="md:w-2/3">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  Order Processing Guide
                </h1>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                  Learn how to efficiently manage the complete order lifecycle with Supply2Uchain. This guide covers
                  everything from order creation to fulfillment, tracking, and analytics.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild>
                    <Link href="#overview">Start the Guide</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/docs">Back to Documentation</Link>
                  </Button>
                </div>
                
                <div className="mt-8 flex items-center text-sm text-muted-foreground">
                  <BookOpen className="h-4 w-4 mr-2" />
                  <span>Reading time: 12 minutes</span>
                </div>
              </div>
              
              <div className="md:w-1/3">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">In this guide</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <nav className="px-6 pb-6">
                      <ul className="space-y-2">
                        {sections.map((section) => (
                          <li key={section.id}>
                            <Link 
                              href={`#${section.id}`} 
                              className="text-sm hover:text-primary flex items-center gap-2"
                            >
                              <ChevronRight className="h-3 w-3" />
                              <span>{section.title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* Overview Section */}
        <section id="overview" className="py-12 md:py-16 bg-background">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <ShoppingCart className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                  Order Processing Overview
                </h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  Efficient order processing is at the heart of any successful supply chain operation. 
                  Supply2Uchain provides a comprehensive order management system that streamlines the entire 
                  process from order creation to fulfillment and beyond.
                </p>
                
                <div className="bg-muted/50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium mb-4">Key Benefits of Effective Order Processing</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-none" />
                      <div>
                        <span className="font-medium">Increased efficiency</span>
                        <p className="text-sm text-muted-foreground">Automate manual tasks and reduce processing time</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-none" />
                      <div>
                        <span className="font-medium">Improved accuracy</span>
                        <p className="text-sm text-muted-foreground">Minimize errors in order entry and fulfillment</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-none" />
                      <div>
                        <span className="font-medium">Enhanced visibility</span>
                        <p className="text-sm text-muted-foreground">Track orders in real-time throughout their lifecycle</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-none" />
                      <div>
                        <span className="font-medium">Better customer service</span>
                        <p className="text-sm text-muted-foreground">Provide accurate delivery estimates and order status</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-muted/30 p-6 rounded-lg mt-8">
                  <h3 className="text-lg font-medium mb-4 flex items-center">
                    <Info className="h-5 w-5 text-primary mr-2" />
                    Order Management Lifecycle
                  </h3>
                  <ol className="relative border-l border-muted-foreground/20 ml-3 space-y-6 py-2">
                    <li className="mb-10 ml-6">
                      <div className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                        <span className="text-xs font-medium">1</span>
                      </div>
                      <h4 className="font-semibold">Order Creation</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Create new orders manually or receive them automatically from integrated sales channels
                      </p>
                    </li>
                    <li className="mb-10 ml-6">
                      <div className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                        <span className="text-xs font-medium">2</span>
                      </div>
                      <h4 className="font-semibold">Order Validation</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Verify product availability, pricing, and customer information
                      </p>
                    </li>
                    <li className="mb-10 ml-6">
                      <div className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                        <span className="text-xs font-medium">3</span>
                      </div>
                      <h4 className="font-semibold">Fulfillment</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Process orders through picking, packing, and shipping stages
                      </p>
                    </li>
                    <li className="mb-10 ml-6">
                      <div className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                        <span className="text-xs font-medium">4</span>
                      </div>
                      <h4 className="font-semibold">Delivery & Tracking</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Monitor shipments and provide tracking information to customers
                      </p>
                    </li>
                    <li className="ml-6">
                      <div className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                        <span className="text-xs font-medium">5</span>
                      </div>
                      <h4 className="font-semibold">Post-order Management</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Handle returns, exchanges, and customer feedback
                      </p>
                    </li>
                  </ol>
                </div>
              </div>
              
              <div className="mt-8">
                <Button variant="outline" className="gap-2" asChild>
                  <Link href="#create-orders">
                    <span>Next: Creating Orders</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Creating Orders Section */}
        <section id="create-orders" className="py-12 md:py-16 bg-muted/50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <ClipboardCheck className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                  Creating Orders
                </h2>
              </div>
              
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Creating New Orders</h3>
                  <p className="text-muted-foreground">
                    Supply2Uchain offers multiple ways to create and manage orders based on your business needs.
                  </p>
                  
                  <Tabs defaultValue="manual" className="mt-6">
                    <TabsList className="grid grid-cols-3 w-full">
                      <TabsTrigger value="manual">Manual Entry</TabsTrigger>
                      <TabsTrigger value="import">Bulk Import</TabsTrigger>
                      <TabsTrigger value="channel">Sales Channels</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="manual" className="p-4 bg-muted/20 rounded-lg mt-2">
                      <div className="space-y-4">
                        <h4 className="font-medium">Manual Order Entry</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                          To create an order manually, navigate to <span className="font-mono text-xs bg-muted px-1 py-0.5 rounded">Orders → New Order</span>:
                        </p>
                        <ol className="space-y-3">
                          <li className="flex items-start gap-2">
                            <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/10 mt-0.5">
                              <span className="text-xs font-medium">1</span>
                            </div>
                            <div>
                              <span className="font-medium">Select customer</span>
                              <p className="text-sm text-muted-foreground">Choose an existing customer or create a new one with contact details</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/10 mt-0.5">
                              <span className="text-xs font-medium">2</span>
                            </div>
                            <div>
                              <span className="font-medium">Add order items</span>
                              <p className="text-sm text-muted-foreground">Search for products and specify quantities</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/10 mt-0.5">
                              <span className="text-xs font-medium">3</span>
                            </div>
                            <div>
                              <span className="font-medium">Set shipping details</span>
                              <p className="text-sm text-muted-foreground">Select shipping address, method, and estimated delivery date</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/10 mt-0.5">
                              <span className="text-xs font-medium">4</span>
                            </div>
                            <div>
                              <span className="font-medium">Add payment information</span>
                              <p className="text-sm text-muted-foreground">Enter payment method, terms, and any additional fees</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/10 mt-0.5">
                              <span className="text-xs font-medium">5</span>
                            </div>
                            <div>
                              <span className="font-medium">Review and confirm</span>
                              <p className="text-sm text-muted-foreground">Verify all order details before submission</p>
                            </div>
                          </li>
                        </ol>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="import" className="p-4 bg-muted/20 rounded-lg mt-2">
                      <div className="space-y-4">
                        <h4 className="font-medium">Bulk Order Import</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                          For importing multiple orders at once:
                        </p>
                        <ol className="space-y-3">
                          <li className="flex items-start gap-2">
                            <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/10 mt-0.5">
                              <span className="text-xs font-medium">1</span>
                            </div>
                            <div>
                              <span className="font-medium">Prepare your data</span>
                              <p className="text-sm text-muted-foreground">Download the order import template (CSV or Excel)</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/10 mt-0.5">
                              <span className="text-xs font-medium">2</span>
                            </div>
                            <div>
                              <span className="font-medium">Fill in order details</span>
                              <p className="text-sm text-muted-foreground">Complete the template with customer information, products, quantities, etc.</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/10 mt-0.5">
                              <span className="text-xs font-medium">3</span>
                            </div>
                            <div>
                              <span className="font-medium">Upload the file</span>
                              <p className="text-sm text-muted-foreground">Go to Orders → Import and upload your completed file</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/10 mt-0.5">
                              <span className="text-xs font-medium">4</span>
                            </div>
                            <div>
                              <span className="font-medium">Map fields and validate</span>
                              <p className="text-sm text-muted-foreground">Ensure your data columns match system fields and verify the data</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/10 mt-0.5">
                              <span className="text-xs font-medium">5</span>
                            </div>
                            <div>
                              <span className="font-medium">Process the import</span>
                              <p className="text-sm text-muted-foreground">Confirm and complete the import process</p>
                            </div>
                          </li>
                        </ol>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="channel" className="p-4 bg-muted/20 rounded-lg mt-2">
                      <div className="space-y-4">
                        <h4 className="font-medium">Sales Channel Integration</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                          Automatically import orders from connected sales channels:
                        </p>
                        <ol className="space-y-3">
                          <li className="flex items-start gap-2">
                            <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/10 mt-0.5">
                              <span className="text-xs font-medium">1</span>
                            </div>
                            <div>
                              <span className="font-medium">Set up channel integration</span>
                              <p className="text-sm text-muted-foreground">Configure connections to your e-commerce platforms, marketplaces, or POS systems</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/10 mt-0.5">
                              <span className="text-xs font-medium">2</span>
                            </div>
                            <div>
                              <span className="font-medium">Configure sync settings</span>
                              <p className="text-sm text-muted-foreground">Specify how often orders should sync and any filtering rules</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/10 mt-0.5">
                              <span className="text-xs font-medium">3</span>
                            </div>
                            <div>
                              <span className="font-medium">Map product catalogs</span>
                              <p className="text-sm text-muted-foreground">Ensure products in external channels match your Supply2Uchain inventory</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/10 mt-0.5">
                              <span className="text-xs font-medium">4</span>
                            </div>
                            <div>
                              <span className="font-medium">Test the integration</span>
                              <p className="text-sm text-muted-foreground">Create a test order in your sales channel to verify proper syncing</p>
                            </div>
                          </li>
                        </ol>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
                
                <div className="bg-muted/50 p-6 rounded-lg flex items-start gap-4">
                  <div className="flex-none">
                    <AlertCircle className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Important</h4>
                    <p className="text-sm text-muted-foreground">
                      When creating orders, always verify product availability before confirming. 
                      Supply2Uchain will automatically reserve inventory when an order is created, 
                      but it's good practice to ensure sufficient stock especially for high-volume items.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Order Types</h3>
                  <p className="text-muted-foreground">
                    Supply2Uchain supports various order types to accommodate different business scenarios:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Standard Orders</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Regular customer orders that follow the standard fulfillment process.
                          These orders typically include immediate payment and standard shipping options.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Subscription Orders</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Recurring orders that are automatically generated at specified intervals.
                          Ideal for consumable products or services billed on a regular basis.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Blanket Purchase Orders</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Long-term agreements with set terms for multiple deliveries over time.
                          These typically include defined quantities, prices, and delivery schedules.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Drop Shipment Orders</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Orders fulfilled directly by suppliers to end customers.
                          Supply2Uchain coordinates between you, suppliers, and customers.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button variant="outline" className="gap-2" asChild>
                  <Link href="#order-fulfillment">
                    <span>Next: Order Fulfillment</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
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