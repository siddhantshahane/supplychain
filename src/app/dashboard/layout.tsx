"use client"

import Link from "next/link";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Package, Truck, BarChart3, Settings, Users, ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Mobile Sidebar Toggle */}
        <div className="md:hidden p-4 border-b">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Menu className="h-4 w-4" />
                <span>Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[85%] sm:w-[350px] p-0">
              <div className="h-full overflow-auto py-6 px-4">
                <SidebarContent />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Sidebar */}
        <aside className="hidden md:block w-64 border-r p-6 bg-card shrink-0 h-[calc(100vh-64px)] sticky top-16 overflow-y-auto">
          <SidebarContent />
        </aside>
        
        {/* Main Content */}
        <div className="flex-1 w-full overflow-x-hidden">
          {children}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

// Extracted sidebar content as a separate component
function SidebarContent() {
  return (
    <nav className="space-y-6">
      <div>
        <h3 className="text-xs font-semibold mb-3 text-muted-foreground">MAIN</h3>
        <div className="space-y-1">
          <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-accent">
            <Package className="h-4 w-4" />
            Dashboard
          </Link>
        </div>
      </div>
      
      <div>
        <h3 className="text-xs font-semibold mb-3 text-muted-foreground">INVENTORY</h3>
        <div className="space-y-1">
          <Link href="/dashboard/inventory/products" className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-accent">
            <Package className="h-4 w-4" />
            Products
          </Link>
          <Link href="/dashboard/inventory/stock" className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-accent">
            <Package className="h-4 w-4" />
            Stock Levels
          </Link>
          <Link href="/dashboard/inventory/movements" className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-accent">
            <Package className="h-4 w-4" />
            Stock Movements
          </Link>
        </div>
      </div>
      
      <div>
        <h3 className="text-xs font-semibold mb-3 text-muted-foreground">ORDERS</h3>
        <div className="space-y-1">
          <Link href="/dashboard/orders/purchase" className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-accent">
            <ShoppingCart className="h-4 w-4" />
            Purchase Orders
          </Link>
          <Link href="/dashboard/orders/sales" className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-accent">
            <ShoppingCart className="h-4 w-4" />
            Sales Orders
          </Link>
          <Link href="/dashboard/orders/fulfillment" className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-accent">
            <Truck className="h-4 w-4" />
            Order Fulfillment
          </Link>
        </div>
      </div>
      
      <div>
        <h3 className="text-xs font-semibold mb-3 text-muted-foreground">SUPPLIERS</h3>
        <div className="space-y-1">
          <Link href="/dashboard/suppliers/directory" className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-accent">
            <Users className="h-4 w-4" />
            Supplier Directory
          </Link>
          <Link href="/dashboard/suppliers/performance" className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-accent">
            <BarChart3 className="h-4 w-4" />
            Supplier Performance
          </Link>
          <Link href="/dashboard/suppliers/contracts" className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-accent">
            <ShoppingCart className="h-4 w-4" />
            Contracts
          </Link>
        </div>
      </div>
      
      <div>
        <h3 className="text-xs font-semibold mb-3 text-muted-foreground">ANALYTICS</h3>
        <div className="space-y-1">
          <Link href="/dashboard/analytics" className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-accent">
            <BarChart3 className="h-4 w-4" />
            Reports
          </Link>
          <Link href="/dashboard/analytics/forecast" className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-accent">
            <BarChart3 className="h-4 w-4" />
            Forecasting
          </Link>
        </div>
      </div>
      
      <div>
        <h3 className="text-xs font-semibold mb-3 text-muted-foreground">SETTINGS</h3>
        <div className="space-y-1">
          <Link href="/dashboard/settings" className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-accent">
            <Settings className="h-4 w-4" />
            General Settings
          </Link>
          <Link href="/dashboard/settings/users" className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-accent">
            <Users className="h-4 w-4" />
            User Management
          </Link>
        </div>
      </div>
    </nav>
  );
} 