import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { 
  Package, 
  Plus, 
  Search, 
  ArrowUpDown, 
  Download, 
  Filter, 
  Edit, 
  Trash
} from "lucide-react";

export default function InventoryPage() {
  // Mock inventory data
  const inventoryItems = [
    {
      id: 1,
      sku: "WIDGET-001",
      name: "Widget X-1000",
      category: "Electronics",
      quantity: 45,
      unitPrice: 129.99,
      location: "Warehouse A",
      status: "In Stock"
    },
    {
      id: 2,
      sku: "COMP-Y200",
      name: "Component Y-200",
      category: "Parts",
      quantity: 5,
      unitPrice: 49.99,
      location: "Warehouse B",
      status: "Low Stock"
    },
    {
      id: 3,
      sku: "MAT-Z500",
      name: "Material Z-500",
      category: "Raw Materials",
      quantity: 8,
      unitPrice: 79.99,
      location: "Warehouse A",
      status: "Low Stock"
    },
    {
      id: 4,
      sku: "PROD-A100",
      name: "Product A-100",
      category: "Finished Goods",
      quantity: 15,
      unitPrice: 199.99,
      location: "Warehouse C",
      status: "In Stock"
    },
    {
      id: 5,
      sku: "TOOL-B300",
      name: "Tool B-300",
      category: "Equipment",
      quantity: 22,
      unitPrice: 249.99,
      location: "Warehouse B",
      status: "In Stock"
    }
  ];

  return (
    <main className="flex-1 py-8">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Inventory Management</h1>
            <p className="text-muted-foreground">Manage your inventory, track stock levels, and set reorder points.</p>
          </div>
          <div className="flex gap-2">
            <Button asChild>
              <Link href="/dashboard/inventory/add">
                <Plus className="mr-2 h-4 w-4" />
                Add Product
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Overview</CardTitle>
              <CardDescription>Inventory statistics and summary.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="border p-4 rounded-lg">
                  <p className="text-muted-foreground text-sm">Total Products</p>
                  <p className="text-2xl font-bold">95</p>
                </div>
                <div className="border p-4 rounded-lg">
                  <p className="text-muted-foreground text-sm">Low Stock Items</p>
                  <p className="text-2xl font-bold text-destructive">12</p>
                </div>
                <div className="border p-4 rounded-lg">
                  <p className="text-muted-foreground text-sm">Total Value</p>
                  <p className="text-2xl font-bold">$124,750.00</p>
                </div>
                <div className="border p-4 rounded-lg">
                  <p className="text-muted-foreground text-sm">Avg. Turnover Rate</p>
                  <p className="text-2xl font-bold">45 days</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Inventory Items</CardTitle>
              <CardDescription>List of all inventory items and their current status.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
                <div className="relative w-full md:w-72">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search products..." className="pl-8" />
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
                      <TableHead className="w-[100px]">SKU</TableHead>
                      <TableHead>Product Name</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead className="text-right">Quantity</TableHead>
                      <TableHead className="text-right">Unit Price</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {inventoryItems.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.sku}</TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.category}</TableCell>
                        <TableCell className="text-right">
                          {item.quantity}
                        </TableCell>
                        <TableCell className="text-right">
                          ${item.unitPrice.toFixed(2)}
                        </TableCell>
                        <TableCell>{item.location}</TableCell>
                        <TableCell>
                          <span 
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              item.status === "Low Stock" 
                                ? "bg-destructive/10 text-destructive" 
                                : "bg-green-500/10 text-green-500"
                            }`}
                          >
                            {item.status}
                          </span>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon">
                              <Edit className="h-4 w-4" />
                              <span className="sr-only">Edit</span>
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Trash className="h-4 w-4" />
                              <span className="sr-only">Delete</span>
                            </Button>
                          </div>
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
                  <span className="font-medium">95</span> entries
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
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
} 