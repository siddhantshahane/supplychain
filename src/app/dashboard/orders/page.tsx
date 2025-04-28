import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Plus, 
  Filter, 
  ArrowUpDown,
  Download,
  Eye,
  ClipboardList,
  Clock,
  CheckCircle,
  AlertCircle,
  Truck 
} from "lucide-react";

export default function OrdersPage() {
  // Mock orders data
  const orders = [
    {
      id: "ORD-34928",
      customer: "Acme Corp",
      date: "2023-04-10",
      total: 1249.99,
      status: "Pending",
      type: "Sales"
    },
    {
      id: "ORD-34927",
      customer: "TechSolutions Inc",
      date: "2023-04-09",
      total: 899.50,
      status: "Processing",
      type: "Sales"
    },
    {
      id: "ORD-34926",
      customer: "Global Manufacturers",
      date: "2023-04-08",
      total: 2499.99,
      status: "Shipped",
      type: "Sales"
    },
    {
      id: "ORD-34925",
      customer: "Innovative Designs",
      date: "2023-04-07",
      total: 749.00,
      status: "Delivered",
      type: "Sales"
    },
    {
      id: "PO-12845",
      customer: "Parts Supplier Co.",
      date: "2023-04-05",
      total: 1875.50,
      status: "Received",
      type: "Purchase"
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case "Pending":
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case "Processing":
        return <ClipboardList className="h-4 w-4 text-blue-500" />;
      case "Shipped":
        return <Truck className="h-4 w-4 text-purple-500" />;
      case "Delivered":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "Cancelled":
        return <AlertCircle className="h-4 w-4 text-destructive" />;
      case "Received":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-500/10 text-yellow-500";
      case "Processing":
        return "bg-blue-500/10 text-blue-500";
      case "Shipped":
        return "bg-purple-500/10 text-purple-500";
      case "Delivered":
        return "bg-green-500/10 text-green-500";
      case "Cancelled":
        return "bg-destructive/10 text-destructive";
      case "Received":
        return "bg-green-500/10 text-green-500";
      default:
        return "bg-gray-500/10 text-gray-500";
    }
  };

  return (
    <main className="flex-1 py-8">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Order Management</h1>
            <p className="text-muted-foreground">Manage sales and purchase orders.</p>
          </div>
          <div className="flex gap-2">
            <Button asChild>
              <Link href="/dashboard/orders/new">
                <Plus className="mr-2 h-4 w-4" />
                New Order
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Orders Overview</CardTitle>
              <CardDescription>Summary of all current orders.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="border p-4 rounded-lg">
                  <p className="text-muted-foreground text-sm">Total Orders</p>
                  <p className="text-2xl font-bold">145</p>
                </div>
                <div className="border p-4 rounded-lg">
                  <p className="text-muted-foreground text-sm">Pending Orders</p>
                  <p className="text-2xl font-bold text-yellow-500">24</p>
                </div>
                <div className="border p-4 rounded-lg">
                  <p className="text-muted-foreground text-sm">Processing</p>
                  <p className="text-2xl font-bold text-blue-500">18</p>
                </div>
                <div className="border p-4 rounded-lg">
                  <p className="text-muted-foreground text-sm">This Month Revenue</p>
                  <p className="text-2xl font-bold">$45,890.00</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Orders</CardTitle>
              <CardDescription>Manage all your order transactions.</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all" className="mb-6">
                <TabsList>
                  <TabsTrigger value="all">All Orders</TabsTrigger>
                  <TabsTrigger value="sales">Sales Orders</TabsTrigger>
                  <TabsTrigger value="purchase">Purchase Orders</TabsTrigger>
                </TabsList>
                
                <TabsContent value="all" className="space-y-4">
                  <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
                    <div className="relative w-full md:w-72">
                      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Search orders..." className="pl-8" />
                    </div>
                    <div className="flex gap-2 w-full md:w-auto">
                      <Button variant="outline" size="sm">
                        <Filter className="mr-2 h-4 w-4" />
                        Filter
                      </Button>
                      <Button variant="outline" size="sm">
                        <ArrowUpDown className="mr-2 h-4 w-4" />
                        Sort
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Export
                      </Button>
                    </div>
                  </div>
                  
                  <div className="border rounded-md">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">Order ID</TableHead>
                          <TableHead>Customer/Supplier</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead className="text-right">Total</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {orders.map((order) => (
                          <TableRow key={order.id}>
                            <TableCell className="font-medium">{order.id}</TableCell>
                            <TableCell>{order.customer}</TableCell>
                            <TableCell>{order.date}</TableCell>
                            <TableCell>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                order.type === "Sales" 
                                  ? "bg-blue-500/10 text-blue-500" 
                                  : "bg-purple-500/10 text-purple-500"
                              }`}>
                                {order.type}
                              </span>
                            </TableCell>
                            <TableCell className="text-right">
                              ${order.total.toFixed(2)}
                            </TableCell>
                            <TableCell>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 w-fit ${getStatusClass(order.status)}`}>
                                {getStatusIcon(order.status)}
                                {order.status}
                              </span>
                            </TableCell>
                            <TableCell className="text-right">
                              <Button variant="ghost" size="icon" asChild>
                                <Link href={`/dashboard/orders/${order.id}`}>
                                  <Eye className="h-4 w-4" />
                                  <span className="sr-only">View</span>
                                </Link>
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                  
                  <div className="flex items-center justify-end space-x-2 py-4">
                    <div className="flex-1 text-sm text-muted-foreground">
                      Showing <span className="font-medium">1</span> to{" "}
                      <span className="font-medium">5</span> of{" "}
                      <span className="font-medium">145</span> entries
                    </div>
                    <div className="space-x-2">
                      <Button variant="outline" size="sm">
                        Previous
                      </Button>
                      <Button variant="outline" size="sm">
                        Next
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="sales" className="space-y-4">
                  <p className="text-center py-8 text-muted-foreground">
                    Sales orders will be displayed here.
                  </p>
                </TabsContent>
                
                <TabsContent value="purchase" className="space-y-4">
                  <p className="text-center py-8 text-muted-foreground">
                    Purchase orders will be displayed here.
                  </p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
} 