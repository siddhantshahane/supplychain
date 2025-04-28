"use client";

import React from "react";
import Link from "next/link";
import { 
  BookOpen, 
  Package, 
  ClipboardList, 
  BarChart, 
  Users, 
  Settings, 
  FileText, 
  ArrowRight,
  Search
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Guide categories with their descriptions and icons
const guideCategories = [
  {
    title: "Getting Started",
    description: "Learn the basics of our supply chain management system",
    icon: <BookOpen className="h-6 w-6" />,
    href: "/docs/guides/getting-started",
    badge: "New",
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
  },
  {
    title: "Inventory Management",
    description: "Manage your inventory, track stock levels, and optimize storage",
    icon: <Package className="h-6 w-6" />,
    href: "/docs/guides/inventory-management",
    color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
  },
  {
    title: "Order Processing",
    description: "Process orders, manage fulfillment, and track shipments",
    icon: <ClipboardList className="h-6 w-6" />,
    href: "/docs/guides/order-processing",
    color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
  },
  {
    title: "Analytics & Reporting",
    description: "Generate reports and analyze your supply chain performance",
    icon: <BarChart className="h-6 w-6" />,
    href: "/docs/guides/analytics",
    color: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300"
  },
  {
    title: "Supplier Management",
    description: "Manage suppliers, track performance, and maintain relationships",
    icon: <Users className="h-6 w-6" />,
    href: "/docs/guides/supplier-management",
    color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
  },
  {
    title: "System Configuration",
    description: "Configure your system settings and customize workflows",
    icon: <Settings className="h-6 w-6" />,
    href: "/docs/guides/configuration",
    color: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
  }
];

// Popular guides
const popularGuides = [
  {
    title: "Setting Up Your First Inventory",
    description: "Learn how to set up your inventory system and add your first products",
    href: "/docs/guides/inventory-management/setup",
    category: "Inventory Management",
    readTime: "5 min read"
  },
  {
    title: "Creating and Processing Orders",
    description: "Step-by-step guide to creating and processing orders in the system",
    href: "/docs/guides/order-processing/create",
    category: "Order Processing",
    readTime: "8 min read"
  },
  {
    title: "Understanding Supplier Performance Metrics",
    description: "Learn about the key metrics used to evaluate supplier performance",
    href: "/docs/guides/supplier-management/metrics",
    category: "Supplier Management",
    readTime: "6 min read"
  },
  {
    title: "Generating Custom Reports",
    description: "Create and customize reports to track your supply chain metrics",
    href: "/docs/guides/analytics/reports",
    category: "Analytics & Reporting",
    readTime: "7 min read"
  }
];

// Quick start guides
const quickStartGuides = [
  {
    title: "Quick Start Guide",
    description: "Get up and running with our supply chain management system in minutes",
    href: "/docs/guides/getting-started/quick-start",
    icon: <BookOpen className="h-5 w-5" />
  },
  {
    title: "User Guide",
    description: "Comprehensive guide to using all features of the system",
    href: "/docs/guides/getting-started/user-guide",
    icon: <FileText className="h-5 w-5" />
  }
];

export default function GuidesPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col items-center text-center mb-10">
        <h1 className="text-3xl font-bold tracking-tight mb-4">Documentation & Guides</h1>
        <p className="text-muted-foreground max-w-[700px] mb-6">
          Comprehensive guides and documentation to help you get the most out of our supply chain management system.
        </p>
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search guides..."
            className="pl-10 h-10"
          />
        </div>
      </div>

      {/* Quick Start Guides */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Quick Start Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {quickStartGuides.map((guide, index) => (
            <Link href={guide.href} key={index}>
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {guide.icon}
                    <CardTitle>{guide.title}</CardTitle>
                  </div>
                  <CardDescription>{guide.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="ghost" className="p-0 h-auto">
                    Read guide <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Guide Categories */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Guide Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {guideCategories.map((category, index) => (
            <Link href={category.href} key={index}>
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {category.icon}
                    <CardTitle className="flex items-center gap-2">
                      {category.title}
                      {category.badge && (
                        <Badge className={category.color}>{category.badge}</Badge>
                      )}
                    </CardTitle>
                  </div>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="ghost" className="p-0 h-auto">
                    Browse guides <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Popular Guides */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Popular Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {popularGuides.map((guide, index) => (
            <Link href={guide.href} key={index}>
              <Card className="h-full">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{guide.title}</CardTitle>
                    <Badge variant="outline" className="text-xs">{guide.readTime}</Badge>
                  </div>
                  <CardDescription>{guide.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between items-center">
                  <Badge variant="secondary">{guide.category}</Badge>
                  <Button variant="ghost" className="p-0 h-auto">
                    Read guide <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Additional Resources */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Additional Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>API Documentation</CardTitle>
              <CardDescription>Integrate with our system using our comprehensive API</CardDescription>
            </CardHeader>
            <CardFooter>
              <Link href="/docs/api">
                <Button variant="outline">View API Docs</Button>
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>SDK Documentation</CardTitle>
              <CardDescription>Use our SDKs to build custom integrations</CardDescription>
            </CardHeader>
            <CardFooter>
              <Link href="/docs/sdk">
                <Button variant="outline">View SDK Docs</Button>
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Community Forums</CardTitle>
              <CardDescription>Connect with other users and share knowledge</CardDescription>
            </CardHeader>
            <CardFooter>
              <Link href="/community">
                <Button variant="outline">Visit Forums</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
} 