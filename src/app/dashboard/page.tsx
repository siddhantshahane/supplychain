"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, ShoppingCart, Users, BarChart, TrendingUp, Truck } from "lucide-react";
import Cookies from "js-cookie";
import axios from "axios";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = Cookies.get('token');
        
        // If no token, redirect to login
        if (!token) {
          router.push('/login');
          return;
        }
        
        // Try to fetch user data
        const response = await axios.get('/api/users/me', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        
        setUser(response.data);
      } catch (error) {
        console.error('Authentication error:', error);
        // Redirect to login on error
        router.push('/login');
      } finally {
        setLoading(false);
      }
    };
    
    checkAuth();
  }, [router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin h-10 w-10 border-4 border-primary border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      
      <main className="flex-1 py-10">
        <div className="container px-4 md:px-6 mx-auto">
          {user && (
            <div className="mb-8">
              <h1 className="text-3xl font-bold">Welcome, {user.first_name}</h1>
              <p className="text-muted-foreground mt-1">Here's what's happening in your supply chain today</p>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg">Inventory Status</CardTitle>
                <Package className="h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2">1,287</div>
                <CardDescription>Total items in stock</CardDescription>
                <div className="flex justify-between mt-4 text-sm">
                  <div className="bg-success/10 text-success px-2 py-1 rounded-md">12 Low Stock</div>
                  <div className="bg-warning/10 text-warning px-2 py-1 rounded-md">3 Out of Stock</div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg">Recent Orders</CardTitle>
                <ShoppingCart className="h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2">48</div>
                <CardDescription>Orders this week</CardDescription>
                <div className="flex justify-between mt-4 text-sm">
                  <div className="bg-primary/10 text-primary px-2 py-1 rounded-md">+12% from last week</div>
                  <div>Total: $24,500</div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg">Suppliers</CardTitle>
                <Truck className="h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2">42</div>
                <CardDescription>Active suppliers</CardDescription>
                <div className="flex justify-between mt-4 text-sm">
                  <div className="bg-info/10 text-info px-2 py-1 rounded-md">8 Pending Orders</div>
                  <div className="bg-success/10 text-success px-2 py-1 rounded-md">3 New</div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card className="col-span-1 lg:col-span-2">
              <CardHeader>
                <CardTitle>Supply Chain Overview</CardTitle>
                <CardDescription>Current status and key metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] bg-muted/40 rounded-md flex items-center justify-center">
                  <p className="text-muted-foreground">Supply Chain Analytics Dashboard</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Package className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">New inventory received</p>
                    <p className="text-xs text-muted-foreground">12 minutes ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 pb-3 border-b">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <ShoppingCart className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">New order #35791</p>
                    <p className="text-xs text-muted-foreground">45 minutes ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <TrendingUp className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Sales report updated</p>
                    <p className="text-xs text-muted-foreground">1 hour ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="col-span-1 md:col-span-2">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2">
                    <Package className="h-5 w-5" />
                    <span>Add Inventory</span>
                  </Button>
                  <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2">
                    <ShoppingCart className="h-5 w-5" />
                    <span>Create Order</span>
                  </Button>
                  <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2">
                    <Truck className="h-5 w-5" />
                    <span>Add Supplier</span>
                  </Button>
                  <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2">
                    <Users className="h-5 w-5" />
                    <span>Add User</span>
                  </Button>
                  <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2">
                    <BarChart className="h-5 w-5" />
                    <span>Analytics</span>
                  </Button>
                  <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    <span>Reports</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 