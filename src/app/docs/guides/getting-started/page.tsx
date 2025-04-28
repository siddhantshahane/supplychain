"use client"

import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Compass,
  LayoutDashboard,
  Settings,
  Users,
  Package,
  Truck,
  ShoppingCart,
  FileText,
  BarChart3,
  AlertCircle
} from "lucide-react";

export default function GettingStartedGuide() {
  const steps = [
    {
      id: "account",
      title: "Create Your Account",
      description: "Sign up for a Supply2Uchain account and complete your business profile"
    },
    {
      id: "dashboard",
      title: "Navigate the Dashboard",
      description: "Familiarize yourself with the Supply2Uchain dashboard and its key components"
    },
    {
      id: "setup",
      title: "Initial Setup",
      description: "Configure your essential settings and preferences"
    },
    {
      id: "inventory",
      title: "Add Your Inventory",
      description: "Import your existing inventory or manually add products"
    },
    {
      id: "connect",
      title: "Connect with Suppliers",
      description: "Set up your supplier relationships within the platform"
    },
    {
      id: "orders",
      title: "Process Your First Order",
      description: "Create, manage, and fulfill your first order"
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
                  Getting Started with Supply2Uchain
                </h1>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                  Welcome to Supply2Uchain! This guide will walk you through setting up your account, 
                  navigating the platform, and performing essential tasks to get your supply chain 
                  management system up and running.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild>
                    <Link href="#account">Start the Guide</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/docs">Back to Documentation</Link>
                  </Button>
                </div>
                
                <div className="mt-8 flex items-center text-sm text-muted-foreground">
                  <BookOpen className="h-4 w-4 mr-2" />
                  <span>Reading time: 10 minutes</span>
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
                        {steps.map((step) => (
                          <li key={step.id}>
                            <Link 
                              href={`#${step.id}`} 
                              className="text-sm hover:text-primary flex items-center gap-2"
                            >
                              <ChevronRight className="h-3 w-3" />
                              <span>{step.title}</span>
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
        
        {/* Account Setup */}
        <section id="account" className="py-12 md:py-16 bg-background">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                  1. Create Your Account
                </h2>
              </div>
              
              <div className="space-y-8">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">Sign up for Supply2Uchain</h3>
                  <p className="text-muted-foreground">
                    To get started with Supply2Uchain, you'll need to create an account:
                  </p>
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-start gap-2">
                      <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/10 mt-0.5">
                        <span className="text-xs font-medium">1</span>
                      </div>
                      <span>Visit the <Link href="/signup" className="text-primary hover:underline">Sign Up</Link> page and enter your business email.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/10 mt-0.5">
                        <span className="text-xs font-medium">2</span>
                      </div>
                      <span>Create a secure password that meets our requirements (minimum 8 characters, including uppercase, lowercase, numbers, and special characters).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/10 mt-0.5">
                        <span className="text-xs font-medium">3</span>
                      </div>
                      <span>Verify your email address by clicking the link in the confirmation email.</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">Complete Your Business Profile</h3>
                  <p className="text-muted-foreground">
                    After verifying your email, you'll need to provide some information about your business:
                  </p>
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-start gap-2">
                      <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/10 mt-0.5">
                        <span className="text-xs font-medium">1</span>
                      </div>
                      <span>Enter your company name, business address, and contact information.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/10 mt-0.5">
                        <span className="text-xs font-medium">2</span>
                      </div>
                      <span>Select your industry and business type from the dropdown menus.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/10 mt-0.5">
                        <span className="text-xs font-medium">3</span>
                      </div>
                      <span>Choose the appropriate subscription plan for your business size and needs.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/10 mt-0.5">
                        <span className="text-xs font-medium">4</span>
                      </div>
                      <span>Add payment information to complete your account setup.</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-muted/50 p-6 rounded-lg flex items-start gap-4">
                  <div className="flex-none">
                    <AlertCircle className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Note</h4>
                    <p className="text-sm text-muted-foreground">
                      If you're interested in trying Supply2Uchain before committing, you can sign up for a 14-day free trial. 
                      No credit card is required for the trial period, but you'll need to provide payment information when the trial ends.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button variant="outline" className="gap-2" asChild>
                  <Link href="#dashboard">
                    <span>Next: Navigate the Dashboard</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Dashboard Navigation */}
        <section id="dashboard" className="py-12 md:py-16 bg-muted/50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <LayoutDashboard className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                  2. Navigate the Dashboard
                </h2>
              </div>
              
              <div className="space-y-8">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">Understanding the Dashboard Layout</h3>
                  <p className="text-muted-foreground">
                    Once you've logged in, you'll be greeted by the Supply2Uchain dashboard. 
                    Here's an overview of the key areas:
                  </p>
                  
                  <div className="bg-background p-6 rounded-lg border mt-4 relative">
                    <div className="text-center p-8 border-2 border-dashed rounded">
                      <span className="text-muted-foreground">Dashboard Layout Visualization</span>
                    </div>
                    
                    <div className="mt-6 space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/10 mt-0.5">
                          <span className="text-xs font-medium">A</span>
                        </div>
                        <div>
                          <span className="font-medium">Navigation Sidebar</span>
                          <p className="text-sm text-muted-foreground">
                            Access all main sections of Supply2Uchain, including Inventory, Orders, Suppliers, Analytics, and Settings.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/10 mt-0.5">
                          <span className="text-xs font-medium">B</span>
                        </div>
                        <div>
                          <span className="font-medium">Quick Overview Cards</span>
                          <p className="text-sm text-muted-foreground">
                            See at-a-glance metrics like current inventory levels, pending orders, active suppliers, and recent activity.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/10 mt-0.5">
                          <span className="text-xs font-medium">C</span>
                        </div>
                        <div>
                          <span className="font-medium">Action Buttons</span>
                          <p className="text-sm text-muted-foreground">
                            Quick access to common actions like adding inventory, creating orders, or generating reports.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/10 mt-0.5">
                          <span className="text-xs font-medium">D</span>
                        </div>
                        <div>
                          <span className="font-medium">Notifications & User Menu</span>
                          <p className="text-sm text-muted-foreground">
                            Access system notifications, profile settings, and account management options.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">Key Dashboard Sections</h3>
                  <p className="text-muted-foreground">
                    Let's explore the main sections of the Supply2Uchain platform:
                  </p>
                  
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="h-full">
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <Package className="h-5 w-5 text-primary" />
                          <CardTitle className="text-lg">Inventory</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Manage all your products, categories, stock levels, and locations. Set up automated 
                          reordering points and track inventory movements over time.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card className="h-full">
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <ShoppingCart className="h-5 w-5 text-primary" />
                          <CardTitle className="text-lg">Orders</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Create, track, and fulfill orders. View order history, manage returns, and process 
                          shipments for both inbound and outbound orders.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card className="h-full">
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <Truck className="h-5 w-5 text-primary" />
                          <CardTitle className="text-lg">Suppliers</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Manage your supplier relationships, track performance metrics, and maintain
                          a database of all your vendor information and contracts.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card className="h-full">
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <BarChart3 className="h-5 w-5 text-primary" />
                          <CardTitle className="text-lg">Analytics</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Access detailed reports and visualizations on inventory turnover, supplier performance,
                          order fulfillment rates, and other key metrics.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button variant="outline" className="gap-2" asChild>
                  <Link href="#setup">
                    <span>Next: Initial Setup</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Initial Setup */}
        <section id="setup" className="py-12 md:py-16 bg-background">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Settings className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                  3. Initial Setup
                </h2>
              </div>
              
              <div className="space-y-8">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">Configure Essential Settings</h3>
                  <p className="text-muted-foreground">
                    Before adding inventory or creating orders, it's important to configure a few basic settings:
                  </p>
                  
                  <Tabs defaultValue="company" className="mt-6">
                    <TabsList className="grid grid-cols-3 w-full">
                      <TabsTrigger value="company">Company Profile</TabsTrigger>
                      <TabsTrigger value="preferences">Preferences</TabsTrigger>
                      <TabsTrigger value="users">User Accounts</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="company" className="p-4 bg-muted/20 rounded-lg mt-2">
                      <div className="space-y-4">
                        <h4 className="font-medium">Complete Your Company Profile</h4>
                        <p className="text-sm text-muted-foreground">
                          Navigate to <span className="font-mono text-xs bg-muted px-1 py-0.5 rounded">Settings → Company Profile</span> to:
                        </p>
                        <ul className="space-y-2 mt-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-none" />
                            <span className="text-sm">Upload your company logo (for branded reports and documents)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-none" />
                            <span className="text-sm">Add multiple business locations and warehouses</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-none" />
                            <span className="text-sm">Set your tax information and registration numbers</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-none" />
                            <span className="text-sm">Configure your fiscal year and reporting periods</span>
                          </li>
                        </ul>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="preferences" className="p-4 bg-muted/20 rounded-lg mt-2">
                      <div className="space-y-4">
                        <h4 className="font-medium">System Preferences</h4>
                        <p className="text-sm text-muted-foreground">
                          Navigate to <span className="font-mono text-xs bg-muted px-1 py-0.5 rounded">Settings → Preferences</span> to:
                        </p>
                        <ul className="space-y-2 mt-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-none" />
                            <span className="text-sm">Set your default currency and unit measurements</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-none" />
                            <span className="text-sm">Configure notification preferences (email, in-app, or SMS)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-none" />
                            <span className="text-sm">Set up automated alerts for low stock, backorders, or shipment delays</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-none" />
                            <span className="text-sm">Choose your date format and time zone settings</span>
                          </li>
                        </ul>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="users" className="p-4 bg-muted/20 rounded-lg mt-2">
                      <div className="space-y-4">
                        <h4 className="font-medium">User Management</h4>
                        <p className="text-sm text-muted-foreground">
                          Navigate to <span className="font-mono text-xs bg-muted px-1 py-0.5 rounded">Settings → Users & Permissions</span> to:
                        </p>
                        <ul className="space-y-2 mt-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-none" />
                            <span className="text-sm">Invite team members to join your Supply2Uchain account</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-none" />
                            <span className="text-sm">Assign user roles (Admin, Manager, Staff, Viewer) with appropriate permissions</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-none" />
                            <span className="text-sm">Create custom permission sets for specific job functions</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-none" />
                            <span className="text-sm">Set up two-factor authentication for enhanced security</span>
                          </li>
                        </ul>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
                
                <div className="bg-muted/50 p-6 rounded-lg flex items-start gap-4">
                  <div className="flex-none">
                    <Compass className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Pro Tip</h4>
                    <p className="text-sm text-muted-foreground">
                      Complete the setup checklist in your account dashboard to ensure you haven't missed any important configuration steps. 
                      The system will guide you through all essential settings with step-by-step instructions.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button variant="outline" className="gap-2" asChild>
                  <Link href="#inventory">
                    <span>Next: Add Your Inventory</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* What's Next Section */}
        <section className="py-12 md:py-16 bg-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6 text-center">
                Continue Your Setup Journey
              </h2>
              <p className="text-center text-muted-foreground mb-10">
                Now that you've completed the initial setup, you can continue with the next steps:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Package className="h-5 w-5 text-primary" />
                      <span>Add Inventory</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Import products, set up categories, and manage your stock levels.
                    </p>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <Link href="#inventory">Continue to Inventory Setup</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Truck className="h-5 w-5 text-primary" />
                      <span>Connect Suppliers</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Add your suppliers and configure your supply chain network.
                    </p>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <Link href="#connect">Continue to Supplier Setup</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <ShoppingCart className="h-5 w-5 text-primary" />
                      <span>Process Orders</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Learn how to create and manage orders in the system.
                    </p>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <Link href="#orders">Continue to Order Processing</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-10 text-center">
                <p className="text-muted-foreground mb-6">
                  Need additional help getting set up?
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button variant="outline" asChild>
                    <Link href="/docs/guides">Browse All Guides</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/contact">Contact Support</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 