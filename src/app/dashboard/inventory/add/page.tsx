import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Package, Save } from "lucide-react";

export default function AddProductPage() {
  return (
    <main className="flex-1 py-8">
      <div className="container px-4 md:px-6">
        <div className="flex items-center gap-2 mb-6">
          <Button variant="outline" size="icon" asChild>
            <Link href="/dashboard/inventory">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Link>
          </Button>
          <h1 className="text-3xl font-bold tracking-tight">Add New Product</h1>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Product Information</CardTitle>
            <CardDescription>Enter details for the new product to add to inventory.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="sku">SKU</Label>
                  <Input id="sku" placeholder="Enter product SKU" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name">Product Name</Label>
                  <Input id="name" placeholder="Enter product name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Input id="category" placeholder="Select category" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Warehouse Location</Label>
                  <Input id="location" placeholder="Select location" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quantity">Initial Quantity</Label>
                  <Input id="quantity" type="number" min="0" placeholder="0" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="unitPrice">Unit Price ($)</Label>
                  <Input id="unitPrice" type="number" min="0" step="0.01" placeholder="0.00" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reorderPoint">Reorder Point</Label>
                  <Input id="reorderPoint" type="number" min="0" placeholder="0" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reorderQuantity">Reorder Quantity</Label>
                  <Input id="reorderQuantity" type="number" min="0" placeholder="0" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <textarea 
                  id="description" 
                  className="w-full min-h-[100px] px-3 py-2 text-sm rounded-md border border-input bg-background ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  placeholder="Enter product description"
                />
              </div>
              
              <div className="flex gap-3 justify-end">
                <Button variant="outline" asChild>
                  <Link href="/dashboard/inventory">Cancel</Link>
                </Button>
                <Button type="submit">
                  <Save className="mr-2 h-4 w-4" />
                  Save Product
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
} 