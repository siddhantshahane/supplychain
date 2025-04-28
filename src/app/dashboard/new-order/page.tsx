"use client"

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { CalendarIcon, Check, ChevronRight, Plus, Search, Trash2, CreditCard } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export default function NewOrderPage() {
  // State for the multistep form
  const [activeStep, setActiveStep] = useState("customer");
  const [date, setDate] = useState<Date | undefined>(
    // Set default date to 5 business days from now
    (() => {
      const date = new Date();
      let businessDays = 5;
      while (businessDays > 0) {
        date.setDate(date.getDate() + 1);
        // Skip weekends
        if (date.getDay() !== 0 && date.getDay() !== 6) {
          businessDays--;
        }
      }
      return date;
    })()
  );

  // Mock data for customers
  const customers = [
    { id: "1", name: "Acme Corporation", email: "orders@acme.com", address: "123 Business Ave, Commerce City" },
    { id: "2", name: "Globex Industries", email: "purchasing@globex.com", address: "456 Enterprise St, Industry Park" },
    { id: "3", name: "Oceanic Distributors", email: "supply@oceanic.com", address: "789 Harbor Rd, Port Town" },
  ];

  // Mock data for products
  const products = [
    { id: "1", sku: "INV-1001", name: "Industrial Valve A100", price: 129.99, stock: 45 },
    { id: "2", sku: "PIPE-2030", name: "PVC Pipe 20mm x 3m", price: 24.50, stock: 120 },
    { id: "3", sku: "TOOL-3392", name: "Adjustable Wrench Set", price: 89.75, stock: 32 },
    { id: "4", sku: "CONN-4551", name: "Brass Connector 15mm", price: 12.25, stock: 87 },
    { id: "5", sku: "PUMP-5102", name: "Water Pump 750W", price: 250.00, stock: 18 },
  ];

  // Mock data for shipping methods
  const shippingMethods = [
    { id: "standard", name: "Standard Shipping", price: 12.99, eta: "3-5 business days" },
    { id: "express", name: "Express Shipping", price: 24.99, eta: "1-2 business days" },
    { id: "priority", name: "Priority Shipping", price: 34.99, eta: "Next business day" },
  ];

  // Mock data for payment methods
  const paymentMethods = [
    { id: "credit", name: "Credit Card" },
    { id: "purchase_order", name: "Purchase Order" },
    { id: "bank_transfer", name: "Bank Transfer" },
    { id: "net30", name: "Net 30 Terms" },
  ];

  // Sample cart items
  const [cartItems, setCartItems] = useState([
    { id: "1", name: "Industrial Valve A100", sku: "INV-1001", price: 129.99, quantity: 2 },
    { id: "4", name: "Brass Connector 15mm", sku: "CONN-4551", price: 12.25, quantity: 10 },
  ]);

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 24.99; // Express shipping
  const tax = subtotal * 0.07; // 7% tax
  const total = subtotal + shipping + tax;

  // Function to move to next step
  const goToNextStep = () => {
    if (activeStep === "customer") setActiveStep("items");
    else if (activeStep === "items") setActiveStep("shipping");
    else if (activeStep === "shipping") setActiveStep("payment");
    else if (activeStep === "payment") setActiveStep("review");
  };

  // Function to move to previous step
  const goToPreviousStep = () => {
    if (activeStep === "items") setActiveStep("customer");
    else if (activeStep === "shipping") setActiveStep("items");
    else if (activeStep === "payment") setActiveStep("shipping");
    else if (activeStep === "review") setActiveStep("payment");
  };

  return (
    <div className="flex flex-col">
      <main className="flex-1 py-6 md:py-8">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Create New Order</h1>
                <p className="text-muted-foreground mt-1">Fill in the details to create a new customer order</p>
              </div>
              <Button variant="outline" asChild>
                <Link href="/dashboard/orders">Cancel</Link>
              </Button>
            </div>
            
            <Card className="border-none shadow-none">
              <CardContent className="p-0">
                <Tabs value={activeStep} className="w-full">
                  <TabsList className="grid grid-cols-5 w-full">
                    <TabsTrigger 
                      value="customer" 
                      onClick={() => setActiveStep("customer")}
                      className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                    >
                      Customer
                    </TabsTrigger>
                    <TabsTrigger 
                      value="items" 
                      onClick={() => setActiveStep("items")}
                      className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                    >
                      Items
                    </TabsTrigger>
                    <TabsTrigger 
                      value="shipping" 
                      onClick={() => setActiveStep("shipping")}
                      className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                    >
                      Shipping
                    </TabsTrigger>
                    <TabsTrigger 
                      value="payment" 
                      onClick={() => setActiveStep("payment")}
                      className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                    >
                      Payment
                    </TabsTrigger>
                    <TabsTrigger 
                      value="review" 
                      onClick={() => setActiveStep("review")}
                      className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                    >
                      Review
                    </TabsTrigger>
                  </TabsList>
                  
                  {/* Step 1: Customer Selection */}
                  <TabsContent value="customer" className="pt-6">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium">Select Customer</h3>
                        <Button variant="outline" size="sm">
                          <Plus className="h-4 w-4 mr-2" />
                          Add New Customer
                        </Button>
                      </div>
                      
                      <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          type="search"
                          placeholder="Search customers..."
                          className="pl-8"
                        />
                      </div>
                      
                      <div className="grid gap-4">
                        {customers.map((customer) => (
                          <Card key={customer.id} className="cursor-pointer hover:bg-accent">
                            <CardContent className="p-4 flex items-start justify-between">
                              <div className="space-y-1">
                                <h4 className="font-medium">{customer.name}</h4>
                                <p className="text-sm text-muted-foreground">{customer.email}</p>
                                <p className="text-sm text-muted-foreground">{customer.address}</p>
                              </div>
                              <Button variant="ghost" size="icon" className="rounded-full">
                                <Check className="h-4 w-4" />
                              </Button>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-6 flex justify-end">
                      <Button onClick={goToNextStep}>
                        Next: Add Items
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </TabsContent>
                  
                  {/* Step 2: Add Items */}
                  <TabsContent value="items" className="pt-6">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium">Add Order Items</h3>
                      </div>
                      
                      <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          type="search"
                          placeholder="Search products by name or SKU..."
                          className="pl-8"
                        />
                      </div>
                      
                      <div className="rounded-md border">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>SKU</TableHead>
                              <TableHead>Product Name</TableHead>
                              <TableHead className="text-right">Price</TableHead>
                              <TableHead className="text-right">In Stock</TableHead>
                              <TableHead className="text-center">Action</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {products.map((product) => (
                              <TableRow key={product.id}>
                                <TableCell className="font-mono text-sm">{product.sku}</TableCell>
                                <TableCell>{product.name}</TableCell>
                                <TableCell className="text-right">${product.price.toFixed(2)}</TableCell>
                                <TableCell className="text-right">
                                  <Badge variant={product.stock > 20 ? "default" : product.stock > 0 ? "outline" : "destructive"}>
                                    {product.stock}
                                  </Badge>
                                </TableCell>
                                <TableCell className="text-center">
                                  <Button variant="ghost" size="sm">Add</Button>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                      
                      <h4 className="font-medium">Order Items</h4>
                      
                      <div className="rounded-md border">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Product</TableHead>
                              <TableHead className="text-right">Price</TableHead>
                              <TableHead className="text-right">Quantity</TableHead>
                              <TableHead className="text-right">Total</TableHead>
                              <TableHead></TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {cartItems.map((item) => (
                              <TableRow key={item.id}>
                                <TableCell>
                                  <div>
                                    <p className="font-medium">{item.name}</p>
                                    <p className="text-sm text-muted-foreground font-mono">{item.sku}</p>
                                  </div>
                                </TableCell>
                                <TableCell className="text-right">${item.price.toFixed(2)}</TableCell>
                                <TableCell className="text-right">
                                  <Input 
                                    type="number" 
                                    value={item.quantity}
                                    className="w-16 text-right"
                                    min="1"
                                  />
                                </TableCell>
                                <TableCell className="text-right font-medium">
                                  ${(item.price * item.quantity).toFixed(2)}
                                </TableCell>
                                <TableCell>
                                  <Button variant="ghost" size="icon" className="text-destructive">
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                      
                      <div className="flex justify-end">
                        <div className="w-full max-w-sm space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 flex justify-between">
                      <Button variant="outline" onClick={goToPreviousStep}>
                        Back
                      </Button>
                      <Button onClick={goToNextStep}>
                        Next: Shipping Details
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </TabsContent>
                  
                  {/* Step 3: Shipping */}
                  <TabsContent value="shipping" className="pt-6">
                    <div className="space-y-6">
                      <h3 className="text-lg font-medium">Shipping Details</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <h4 className="font-medium">Shipping Address</h4>
                            <Card>
                              <CardContent className="p-4">
                                <div className="space-y-1">
                                  <p>Acme Corporation</p>
                                  <p>Attn: Receiving Department</p>
                                  <p>123 Business Ave</p>
                                  <p>Commerce City, CA 90001</p>
                                  <p>United States</p>
                                </div>
                                <div className="flex mt-4">
                                  <Button variant="outline" size="sm" className="text-xs">
                                    Use Different Address
                                  </Button>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                          
                          <div className="space-y-2">
                            <h4 className="font-medium">Expected Delivery Date</h4>
                            <div className="grid gap-2">
                              <Popover>
                                <PopoverTrigger asChild>
                                  <Button
                                    variant="outline"
                                    className="w-full justify-start text-left font-normal"
                                  >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {date ? format(date, "EEEE, MMMM d, yyyy") : <span>Select a date</span>}
                                  </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                  <div className="p-2 text-center border-b">
                                    <h4 className="font-medium text-sm">Select delivery date</h4>
                                    <p className="text-xs text-muted-foreground">Choose a business day for delivery</p>
                                  </div>
                                  <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    initialFocus
                                    disabled={(date) => {
                                      // Disable weekends and dates in the past
                                      const today = new Date();
                                      today.setHours(0, 0, 0, 0);
                                      return (
                                        date < today ||
                                        date.getDay() === 0 ||
                                        date.getDay() === 6
                                      );
                                    }}
                                    fromDate={new Date()}
                                    className="rounded-md border-0"
                                  />
                                </PopoverContent>
                              </Popover>
                              
                              {date && (
                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                  <span>Estimated transit time based on shipping method:</span>
                                  <Badge variant="outline" className="font-normal">
                                    {activeStep === "shipping" && 
                                     "Express Shipping: 1-2 business days"}
                                  </Badge>
                                </div>
                              )}
                              
                              <div className="text-xs font-medium text-muted-foreground mt-1">Quick select:</div>
                              <div className="grid grid-cols-3 gap-2">
                                <Button 
                                  variant="outline" 
                                  size="sm" 
                                  className="text-xs"
                                  onClick={() => {
                                    const today = new Date();
                                    let businessDays = 3;
                                    while (businessDays > 0) {
                                      today.setDate(today.getDate() + 1);
                                      if (today.getDay() !== 0 && today.getDay() !== 6) {
                                        businessDays--;
                                      }
                                    }
                                    setDate(today);
                                  }}
                                >
                                  +3 Business Days
                                </Button>
                                <Button 
                                  variant="outline" 
                                  size="sm" 
                                  className="text-xs"
                                  onClick={() => {
                                    const today = new Date();
                                    let businessDays = 5;
                                    while (businessDays > 0) {
                                      today.setDate(today.getDate() + 1);
                                      if (today.getDay() !== 0 && today.getDay() !== 6) {
                                        businessDays--;
                                      }
                                    }
                                    setDate(today);
                                  }}
                                >
                                  +5 Business Days
                                </Button>
                                <Button 
                                  variant="outline" 
                                  size="sm" 
                                  className="text-xs"
                                  onClick={() => {
                                    const today = new Date();
                                    let businessDays = 10;
                                    while (businessDays > 0) {
                                      today.setDate(today.getDate() + 1);
                                      if (today.getDay() !== 0 && today.getDay() !== 6) {
                                        businessDays--;
                                      }
                                    }
                                    setDate(today);
                                  }}
                                >
                                  +10 Business Days
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <h4 className="font-medium">Shipping Method</h4>
                          <div className="space-y-4">
                            {shippingMethods.map((method) => (
                              <Card 
                                key={method.id} 
                                className={cn(
                                  "cursor-pointer hover:bg-accent transition-colors",
                                  method.id === "express" && "border-primary"
                                )}
                              >
                                <CardContent className="p-4 flex justify-between">
                                  <div className="space-y-1">
                                    <h4 className="font-medium">{method.name}</h4>
                                    <p className="text-sm text-muted-foreground">
                                      Estimated Delivery: {method.eta}
                                    </p>
                                  </div>
                                  <div className="text-right">
                                    <p className="font-medium">${method.price.toFixed(2)}</p>
                                    {method.id === "express" && (
                                      <Check className="ml-auto mt-1 h-4 w-4 text-primary" />
                                    )}
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-medium">Special Instructions</h4>
                        <Textarea 
                          placeholder="Add any special delivery instructions or requirements..." 
                          className="min-h-[100px]"
                        />
                      </div>
                    </div>
                    
                    <div className="mt-6 flex justify-between">
                      <Button variant="outline" onClick={goToPreviousStep}>
                        Back
                      </Button>
                      <Button onClick={goToNextStep}>
                        Next: Payment Details
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </TabsContent>
                  
                  {/* Step 4: Payment */}
                  <TabsContent value="payment" className="pt-6">
                    <div className="space-y-6">
                      <h3 className="text-lg font-medium">Payment Information</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h4 className="font-medium">Payment Method</h4>
                          <div className="space-y-4">
                            {paymentMethods.map((method) => (
                              <Card 
                                key={method.id} 
                                className={cn(
                                  "cursor-pointer hover:bg-accent transition-colors",
                                  method.id === "purchase_order" && "border-primary"
                                )}
                              >
                                <CardContent className="p-4 flex justify-between items-center">
                                  <h4 className="font-medium">{method.name}</h4>
                                  {method.id === "purchase_order" && (
                                    <Check className="h-4 w-4 text-primary" />
                                  )}
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                          
                          <div className="space-y-2 pt-4">
                            <h4 className="font-medium">Purchase Order Details</h4>
                            <div className="grid gap-4">
                              <div className="grid gap-2">
                                <Label htmlFor="po-number">PO Number</Label>
                                <Input id="po-number" placeholder="Enter PO number" />
                              </div>
                              <div className="grid gap-2">
                                <Label htmlFor="billing-reference">Billing Reference</Label>
                                <Input id="billing-reference" placeholder="Enter billing reference" />
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-6">
                          <h4 className="font-medium">Order Summary</h4>
                          <div className="rounded-lg border bg-muted/50 p-4">
                            <div className="space-y-3">
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Shipping (Express)</span>
                                <span>${shipping.toFixed(2)}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Tax (7%)</span>
                                <span>${tax.toFixed(2)}</span>
                              </div>
                              <Separator />
                              <div className="flex justify-between font-medium">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <h4 className="font-medium">Additional Notes</h4>
                            <Textarea 
                              placeholder="Add any notes or payment details..." 
                              className="min-h-[100px]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 flex justify-between">
                      <Button variant="outline" onClick={goToPreviousStep}>
                        Back
                      </Button>
                      <Button onClick={goToNextStep}>
                        Next: Review Order
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </TabsContent>
                  
                  {/* Step 5: Review */}
                  <TabsContent value="review" className="pt-6">
                    <div className="space-y-8">
                      <h3 className="text-lg font-medium">Review and Confirm Order</h3>
                      
                      <div className="grid gap-6">
                        <Card>
                          <CardHeader className="pb-2">
                            <div className="flex justify-between items-center">
                              <CardTitle className="text-base">Customer Information</CardTitle>
                              <Button variant="ghost" size="sm" className="h-8" onClick={() => setActiveStep("customer")}>
                                Edit
                              </Button>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-1">
                              <p className="font-medium">Acme Corporation</p>
                              <p className="text-sm text-muted-foreground">orders@acme.com</p>
                              <p className="text-sm text-muted-foreground">123 Business Ave, Commerce City</p>
                            </div>
                          </CardContent>
                        </Card>
                        
                        <Card>
                          <CardHeader className="pb-2">
                            <div className="flex justify-between items-center">
                              <CardTitle className="text-base">Order Items</CardTitle>
                              <Button variant="ghost" size="sm" className="h-8" onClick={() => setActiveStep("items")}>
                                Edit
                              </Button>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="rounded-md border">
                              <Table>
                                <TableHeader>
                                  <TableRow>
                                    <TableHead>Product</TableHead>
                                    <TableHead className="text-right">Price</TableHead>
                                    <TableHead className="text-right">Quantity</TableHead>
                                    <TableHead className="text-right">Total</TableHead>
                                  </TableRow>
                                </TableHeader>
                                <TableBody>
                                  {cartItems.map((item) => (
                                    <TableRow key={item.id}>
                                      <TableCell>
                                        <div>
                                          <p className="font-medium">{item.name}</p>
                                          <p className="text-sm text-muted-foreground font-mono">{item.sku}</p>
                                        </div>
                                      </TableCell>
                                      <TableCell className="text-right">${item.price.toFixed(2)}</TableCell>
                                      <TableCell className="text-right">{item.quantity}</TableCell>
                                      <TableCell className="text-right font-medium">
                                        ${(item.price * item.quantity).toFixed(2)}
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </div>
                          </CardContent>
                        </Card>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <Card>
                            <CardHeader className="pb-2">
                              <div className="flex justify-between items-center">
                                <CardTitle className="text-base">Shipping Details</CardTitle>
                                <Button variant="ghost" size="sm" className="h-8" onClick={() => setActiveStep("shipping")}>
                                  Edit
                                </Button>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-3">
                                <div>
                                  <p className="font-medium text-sm">Shipping Address</p>
                                  <div className="text-sm text-muted-foreground space-y-1 mt-1">
                                    <p>Acme Corporation</p>
                                    <p>Attn: Receiving Department</p>
                                    <p>123 Business Ave</p>
                                    <p>Commerce City, CA 90001</p>
                                  </div>
                                </div>
                                <div>
                                  <p className="font-medium text-sm">Shipping Method</p>
                                  <p className="text-sm text-muted-foreground mt-1">
                                    Express Shipping - 1-2 business days
                                  </p>
                                </div>
                                <div>
                                  <p className="font-medium text-sm">Expected Delivery</p>
                                  <p className="text-sm text-muted-foreground mt-1">
                                    {date ? format(date, "PPP") : "Not specified"}
                                  </p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                          
                          <Card>
                            <CardHeader className="pb-2">
                              <div className="flex justify-between items-center">
                                <CardTitle className="text-base">Payment Details</CardTitle>
                                <Button variant="ghost" size="sm" className="h-8" onClick={() => setActiveStep("payment")}>
                                  Edit
                                </Button>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-3">
                                <div>
                                  <p className="font-medium text-sm">Payment Method</p>
                                  <p className="text-sm text-muted-foreground mt-1">
                                    Purchase Order
                                  </p>
                                </div>
                                <div>
                                  <p className="font-medium text-sm">PO Number</p>
                                  <p className="text-sm text-muted-foreground mt-1">
                                    ACME-2023-456
                                  </p>
                                </div>
                                <div className="pt-2">
                                  <p className="font-medium text-sm">Order Summary</p>
                                  <div className="space-y-1 mt-1 text-sm">
                                    <div className="flex justify-between">
                                      <span className="text-muted-foreground">Subtotal</span>
                                      <span>${subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-muted-foreground">Shipping</span>
                                      <span>${shipping.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-muted-foreground">Tax</span>
                                      <span>${tax.toFixed(2)}</span>
                                    </div>
                                    <Separator className="my-1" />
                                    <div className="flex justify-between font-medium">
                                      <span>Total</span>
                                      <span>${total.toFixed(2)}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                        
                        <Card className="bg-muted/50">
                          <CardContent className="p-4">
                            <div className="flex items-start gap-4">
                              <div className="grid w-full gap-2">
                                <div className="flex items-center gap-2">
                                  <input type="checkbox" id="terms" className="h-4 w-4" />
                                  <Label htmlFor="terms" className="text-sm font-normal">
                                    I confirm that all information in this order is correct
                                  </Label>
                                </div>
                                <div className="flex items-center gap-2">
                                  <input type="checkbox" id="email-confirm" className="h-4 w-4" />
                                  <Label htmlFor="email-confirm" className="text-sm font-normal">
                                    Send order confirmation email to customer
                                  </Label>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                    
                    <div className="mt-6 flex justify-between">
                      <Button variant="outline" onClick={goToPreviousStep}>
                        Back
                      </Button>
                      <Button>
                        Submit Order
                        <CreditCard className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
} 