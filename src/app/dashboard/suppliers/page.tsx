import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Plus, 
  Filter, 
  ArrowUpDown, 
  Download, 
  Eye, 
  Star,
  Mail,
  Phone
} from "lucide-react";

export default function SuppliersPage() {
  // Mock suppliers data
  const suppliers = [
    {
      id: 1,
      name: "Acme Manufacturing",
      category: "Electronics",
      contact: "John Smith",
      email: "john@acmemanufacturing.com",
      phone: "+1 (555) 123-4567",
      rating: 4.5,
      status: "Active"
    },
    {
      id: 2,
      name: "Global Components Ltd",
      category: "Components",
      contact: "Sarah Johnson",
      email: "sarah@globalcomponents.com",
      phone: "+1 (555) 987-6543",
      rating: 3.8,
      status: "Active"
    },
    {
      id: 3,
      name: "StellarTech Industries",
      category: "Electronics",
      contact: "Michael Wong",
      email: "michael@stellartech.com",
      phone: "+1 (555) 456-7890",
      rating: 4.9,
      status: "Active"
    },
    {
      id: 4,
      name: "Raw Materials Co",
      category: "Raw Materials",
      contact: "Jessica Brown",
      email: "jessica@rawmaterials.com",
      phone: "+1 (555) 321-7654",
      rating: 4.2,
      status: "Inactive"
    },
    {
      id: 5,
      name: "Precision Parts Inc",
      category: "Components",
      contact: "Robert Chen",
      email: "robert@precisionparts.com",
      phone: "+1 (555) 654-3210",
      rating: 4.0,
      status: "Active"
    }
  ];

  // Function to render star rating
  const renderRating = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="flex items-center gap-1">
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        ))}
        {hasHalfStar && (
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        )}
        <span className="ml-1 text-sm text-muted-foreground">{rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <main className="flex-1 py-8">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Suppliers</h1>
            <p className="text-muted-foreground">Manage your supplier relationships and information.</p>
          </div>
          <div className="flex gap-2">
            <Button asChild>
              <Link href="/dashboard/suppliers/add">
                <Plus className="mr-2 h-4 w-4" />
                Add Supplier
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Suppliers Overview</CardTitle>
              <CardDescription>Summary of all supplier relationships.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="border p-4 rounded-lg">
                  <p className="text-muted-foreground text-sm">Total Suppliers</p>
                  <p className="text-2xl font-bold">32</p>
                </div>
                <div className="border p-4 rounded-lg">
                  <p className="text-muted-foreground text-sm">Active Suppliers</p>
                  <p className="text-2xl font-bold text-green-500">28</p>
                </div>
                <div className="border p-4 rounded-lg">
                  <p className="text-muted-foreground text-sm">Avg. Lead Time</p>
                  <p className="text-2xl font-bold">12 days</p>
                </div>
                <div className="border p-4 rounded-lg">
                  <p className="text-muted-foreground text-sm">Contracts Expiring</p>
                  <p className="text-2xl font-bold text-yellow-500">3</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Supplier Directory</CardTitle>
              <CardDescription>Manage your supplier relationships and information.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
                <div className="relative w-full md:w-72">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search suppliers..." className="pl-8" />
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
                      <TableHead>Supplier Name</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Rating</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {suppliers.map((supplier) => (
                      <TableRow key={supplier.id}>
                        <TableCell className="font-medium">{supplier.name}</TableCell>
                        <TableCell>{supplier.category}</TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div>{supplier.contact}</div>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Mail className="h-3 w-3" /> {supplier.email}
                            </div>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Phone className="h-3 w-3" /> {supplier.phone}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{renderRating(supplier.rating)}</TableCell>
                        <TableCell>
                          <span 
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              supplier.status === "Active" 
                                ? "bg-green-500/10 text-green-500" 
                                : "bg-gray-500/10 text-gray-500"
                            }`}
                          >
                            {supplier.status}
                          </span>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon" asChild>
                              <Link href={`/dashboard/suppliers/${supplier.id}`}>
                                <Eye className="h-4 w-4" />
                                <span className="sr-only">View</span>
                              </Link>
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
                  <span className="font-medium">32</span> entries
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