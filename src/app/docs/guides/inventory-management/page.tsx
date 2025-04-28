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
  Compass,
  Package,
  BarChart3,
  AlertCircle,
  Info,
  Tags,
  Search,
  RefreshCw,
  FileText,
  TrendingUp,
  ArrowDownUp
} from "lucide-react";

export default function InventoryManagementGuide() {
  const sections = [
    {
      id: "overview",
      title: "Inventory Management Overview",
      description: "Understanding inventory management in Supply2Uchain"
    },
    {
      id: "products",
      title: "Managing Products",
      description: "Adding and configuring products in your inventory"
    },
    {
      id: "categories",
      title: "Product Categorization",
      description: "Organizing your inventory with categories and tags"
    },
    {
      id: "stock",
      title: "Stock Management",
      description: "Setting up stock levels, reorder points, and locations"
    },
    {
      id: "tracking",
      title: "Inventory Tracking",
      description: "Monitoring inventory movements and history"
    },
    {
      id: "reporting",
      title: "Inventory Reports",
      description: "Generating insights from your inventory data"
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
                  Inventory Management Guide
                </h1>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                  Learn how to effectively manage your inventory with Supply2Uchain. This guide covers
                  everything from adding products to generating inventory reports and implementing best practices.
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
                  <span>Reading time: 15 minutes</span>
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
                  <Package className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                  Inventory Management Overview
                </h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  Effective inventory management is essential for optimizing your supply chain operations. 
                  Supply2Uchain provides tools to track, analyze, and optimize your inventory to reduce costs, 
                  prevent stockouts, and improve customer satisfaction.
                </p>
                
                <div className="bg-muted/50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium mb-4">Key Benefits of Inventory Management</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-none" />
                      <div>
                        <span className="font-medium">Prevent stockouts</span>
                        <p className="text-sm text-muted-foreground">Maintain optimal stock levels to meet customer demand</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-none" />
                      <div>
                        <span className="font-medium">Reduce excess inventory</span>
                        <p className="text-sm text-muted-foreground">Minimize carrying costs and free up capital</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-none" />
                      <div>
                        <span className="font-medium">Track inventory movements</span>
                        <p className="text-sm text-muted-foreground">Monitor item location, status, and history</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-none" />
                      <div>
                        <span className="font-medium">Automate reordering</span>
                        <p className="text-sm text-muted-foreground">Set up reorder points and automated purchase orders</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-muted/30 p-6 rounded-lg mt-8">
                  <h3 className="text-lg font-medium mb-4 flex items-center">
                    <Info className="h-5 w-5 text-primary mr-2" />
                    Inventory Management Workflow
                  </h3>
                  <ol className="relative border-l border-muted-foreground/20 ml-3 space-y-6 py-2">
                    <li className="mb-10 ml-6">
                      <div className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                        <span className="text-xs font-medium">1</span>
                      </div>
                      <h4 className="font-semibold">Add products to inventory</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Create product records with details like SKU, description, pricing, and images
                      </p>
                    </li>
                    <li className="mb-10 ml-6">
                      <div className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                        <span className="text-xs font-medium">2</span>
                      </div>
                      <h4 className="font-semibold">Organize with categories and tags</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Create a logical structure for your inventory with hierarchical categories
                      </p>
                    </li>
                    <li className="mb-10 ml-6">
                      <div className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                        <span className="text-xs font-medium">3</span>
                      </div>
                      <h4 className="font-semibold">Set up stock levels and locations</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Define warehouse locations, initial quantities, and reorder points
                      </p>
                    </li>
                    <li className="mb-10 ml-6">
                      <div className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                        <span className="text-xs font-medium">4</span>
                      </div>
                      <h4 className="font-semibold">Track inventory movements</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Record receipts, transfers, adjustments, and shipments
                      </p>
                    </li>
                    <li className="ml-6">
                      <div className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                        <span className="text-xs font-medium">5</span>
                      </div>
                      <h4 className="font-semibold">Generate inventory reports</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Analyze inventory data to identify trends and make informed decisions
                      </p>
                    </li>
                  </ol>
                </div>
              </div>
              
              <div className="mt-8">
                <Button variant="outline" className="gap-2" asChild>
                  <Link href="#products">
                    <span>Next: Managing Products</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Products Section */}
        <section id="products" className="py-12 md:py-16 bg-muted/50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Package className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                  Managing Products
                </h2>
              </div>
              
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Adding Products to Your Inventory</h3>
                  <p className="text-muted-foreground">
                    Creating a new product record is the first step in inventory management. 
                    Supply2Uchain offers multiple ways to add products:
                  </p>
                  
                  <Tabs defaultValue="manual" className="mt-6">
                    <TabsList className="grid grid-cols-3 w-full">
                      <TabsTrigger value="manual">Manual Entry</TabsTrigger>
                      <TabsTrigger value="import">Bulk Import</TabsTrigger>
                      <TabsTrigger value="barcode">Barcode Scanning</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="manual" className="p-4 bg-muted/20 rounded-lg mt-2">
                      <div className="space-y-4">
                        <h4 className="font-medium">Manual Product Entry</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                          To create a product manually, navigate to <span className="font-mono text-xs bg-muted px-1 py-0.5 rounded">Inventory → Products → Add New</span>:
                        </p>
                        <ol className="space-y-3">
                          <li className="flex items-start gap-2">
                            <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/10 mt-0.5">
                              <span className="text-xs font-medium">1</span>
                            </div>
                            <div>
                              <span className="font-medium">Enter basic product information</span>
                              <p className="text-sm text-muted-foreground">Product name, SKU (Stock Keeping Unit), UPC/EAN, description, and images</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/10 mt-0.5">
                              <span className="text-xs font-medium">2</span>
                            </div>
                            <div>
                              <span className="font-medium">Set pricing details</span>
                              <p className="text-sm text-muted-foreground">Cost price, retail price, wholesale price, and any applicable taxes</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/10 mt-0.5">
                              <span className="text-xs font-medium">3</span>
                            </div>
                            <div>
                              <span className="font-medium">Specify inventory parameters</span>
                              <p className="text-sm text-muted-foreground">Initial stock level, reorder point, preferred supplier, and lead time</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/10 mt-0.5">
                              <span className="text-xs font-medium">4</span>
                            </div>
                            <div>
                              <span className="font-medium">Add product attributes and variants</span>
                              <p className="text-sm text-muted-foreground">Size, color, material, dimensions, weight, and other specifications</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/10 mt-0.5">
                              <span className="text-xs font-medium">5</span>
                            </div>
                            <div>
                              <span className="font-medium">Assign categories and tags</span>
                              <p className="text-sm text-muted-foreground">Select appropriate categories and add tags for better organization</p>
                            </div>
                          </li>
                        </ol>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="import" className="p-4 bg-muted/20 rounded-lg mt-2">
                      <div className="space-y-4">
                        <h4 className="font-medium">Bulk Import</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                          To import multiple products at once, navigate to <span className="font-mono text-xs bg-muted px-1 py-0.5 rounded">Inventory → Import → Products</span>:
                        </p>
                        <ol className="space-y-3">
                          <li className="flex items-start gap-2">
                            <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/10 mt-0.5">
                              <span className="text-xs font-medium">1</span>
                            </div>
                            <div>
                              <span className="font-medium">Download the template</span>
                              <p className="text-sm text-muted-foreground">Get the CSV or Excel template with the required format for product imports</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/10 mt-0.5">
                              <span className="text-xs font-medium">2</span>
                            </div>
                            <div>
                              <span className="font-medium">Fill in your product data</span>
                              <p className="text-sm text-muted-foreground">Populate the template with your product information, ensuring all required fields are completed</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/10 mt-0.5">
                              <span className="text-xs font-medium">3</span>
                            </div>
                            <div>
                              <span className="font-medium">Upload the file</span>
                              <p className="text-sm text-muted-foreground">Upload your completed file and select the appropriate import options</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/10 mt-0.5">
                              <span className="text-xs font-medium">4</span>
                            </div>
                            <div>
                              <span className="font-medium">Validate and confirm</span>
                              <p className="text-sm text-muted-foreground">Review the validation results to ensure data integrity before finalizing the import</p>
                            </div>
                          </li>
                        </ol>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="barcode" className="p-4 bg-muted/20 rounded-lg mt-2">
                      <div className="space-y-4">
                        <h4 className="font-medium">Barcode Scanning</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                          Using the Supply2Uchain mobile app, you can quickly add products by scanning barcodes:
                        </p>
                        <ol className="space-y-3">
                          <li className="flex items-start gap-2">
                            <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/10 mt-0.5">
                              <span className="text-xs font-medium">1</span>
                            </div>
                            <div>
                              <span className="font-medium">Open the mobile app</span>
                              <p className="text-sm text-muted-foreground">Launch the Supply2Uchain app on your mobile device</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/10 mt-0.5">
                              <span className="text-xs font-medium">2</span>
                            </div>
                            <div>
                              <span className="font-medium">Access the barcode scanner</span>
                              <p className="text-sm text-muted-foreground">Tap on "Scan Barcode" from the Inventory menu</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/10 mt-0.5">
                              <span className="text-xs font-medium">3</span>
                            </div>
                            <div>
                              <span className="font-medium">Scan the product's barcode</span>
                              <p className="text-sm text-muted-foreground">The app will search our product database for matching UPC/EAN codes</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/10 mt-0.5">
                              <span className="text-xs font-medium">4</span>
                            </div>
                            <div>
                              <span className="font-medium">Review and customize</span>
                              <p className="text-sm text-muted-foreground">Edit any pre-filled information and add inventory-specific details</p>
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
                      Always use unique SKUs for each product and variant. The SKU is the primary identifier used 
                      throughout the system for tracking inventory movements, reporting, and integrations with other systems.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Product Variants</h3>
                  <p className="text-muted-foreground">
                    Supply2Uchain allows you to manage products with multiple variations such as size, color, or material.
                  </p>
                  
                  <div className="bg-background p-6 rounded-lg border mt-4">
                    <h4 className="font-medium mb-4">Example: T-Shirt with Size and Color Variants</h4>
                    
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>SKU</TableHead>
                            <TableHead>Variant</TableHead>
                            <TableHead>Attributes</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead>Stock</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-mono text-xs">TS-BLK-S</TableCell>
                            <TableCell>Black Small</TableCell>
                            <TableCell>
                              <div className="flex gap-1">
                                <Badge variant="outline" className="text-xs">Black</Badge>
                                <Badge variant="outline" className="text-xs">Small</Badge>
                              </div>
                            </TableCell>
                            <TableCell>$19.99</TableCell>
                            <TableCell>25</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-mono text-xs">TS-BLK-M</TableCell>
                            <TableCell>Black Medium</TableCell>
                            <TableCell>
                              <div className="flex gap-1">
                                <Badge variant="outline" className="text-xs">Black</Badge>
                                <Badge variant="outline" className="text-xs">Medium</Badge>
                              </div>
                            </TableCell>
                            <TableCell>$19.99</TableCell>
                            <TableCell>30</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-mono text-xs">TS-RED-S</TableCell>
                            <TableCell>Red Small</TableCell>
                            <TableCell>
                              <div className="flex gap-1">
                                <Badge variant="outline" className="text-xs">Red</Badge>
                                <Badge variant="outline" className="text-xs">Small</Badge>
                              </div>
                            </TableCell>
                            <TableCell>$19.99</TableCell>
                            <TableCell>15</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                    
                    <div className="mt-4 text-sm text-muted-foreground">
                      <p className="mb-2">To set up variants:</p>
                      <ol className="list-decimal pl-4 space-y-1">
                        <li>Create the parent product (e.g., "Basic T-Shirt")</li>
                        <li>Go to the Variants tab and click "Add Variant Attributes"</li>
                        <li>Define attributes (e.g., Size: S, M, L, XL; Color: Black, Red, Blue)</li>
                        <li>Generate variants, which creates all combinations</li>
                        <li>Update pricing and inventory for each variant</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button variant="outline" className="gap-2" asChild>
                  <Link href="#categories">
                    <span>Next: Product Categorization</span>
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