"use client"

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Truck, BarChart3, Settings, ShieldCheck, Zap } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Detect dark mode
  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains('dark') || 
                   document.documentElement.getAttribute('data-theme') === 'dark';
      setIsDarkMode(isDark);
    };
    
    // Initial check
    checkDarkMode();
    
    // Set up mutation observer to detect theme changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class', 'data-theme']
    });
    
    return () => observer.disconnect();
  }, []);

  // Direct hover handler function
  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    if (!isDarkMode) return;
    e.currentTarget.style.backgroundColor = 'white';
    e.currentTarget.style.color = 'black';
    // Change child SVGs and text
    e.currentTarget.querySelectorAll('*').forEach((el: Element) => {
      if (el instanceof HTMLElement) {
        el.style.color = 'black';
      }
      // SVG-specific properties
      if (el instanceof SVGElement) {
        el.style.fill = 'black';
        el.style.stroke = 'black';
      }
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    if (!isDarkMode) return;
    e.currentTarget.style.backgroundColor = '';
    e.currentTarget.style.color = '';
    // Reset child SVGs and text
    e.currentTarget.querySelectorAll('*').forEach((el: Element) => {
      if (el instanceof HTMLElement) {
        el.style.color = '';
      }
      // SVG-specific properties
      if (el instanceof SVGElement) {
        el.style.fill = '';
        el.style.stroke = '';
      }
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-20 lg:py-28 bg-gradient-to-b from-background to-muted overflow-hidden">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="flex flex-col gap-4 text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                  Streamline Your Supply Chain Management
                </h1>
                <p className="text-lg text-muted-foreground max-w-[600px] mx-auto md:mx-0">
                  Optimize inventory, track orders, and manage suppliers with our all-in-one ERP solution.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mt-2 justify-center md:justify-start">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto relative overflow-hidden group bg-primary hover:bg-primary"
                    asChild
                  >
                    <Link href="/dashboard" className="relative z-10">
                      <span className="relative z-10 transition-colors duration-300 group-hover:text-black font-medium">Get Started</span>
                      <span className="absolute inset-0 bg-white dark:bg-white bg-gray-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left rounded-md"></span>
                    </Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="w-full sm:w-auto relative overflow-hidden group border-white/40 hover:border-white/40 hover:bg-transparent"
                    asChild
                  >
                    <Link href="/demo" className="relative z-10">
                      <span className="relative z-10 transition-colors duration-300 group-hover:text-black font-medium">Request Demo</span>
                      <span className="absolute inset-0 bg-gray-400 dark:bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left rounded-md"></span>
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center mt-6 md:mt-0">
                <div className="relative w-full max-w-[350px] md:max-w-[400px] aspect-square">
                  <Image 
                    src="/images/dashboard-preview.png" 
                    alt="Dashboard preview" 
                    fill
                    className="object-contain drop-shadow-xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 md:py-20 bg-background">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">Key Features</h2>
              <p className="text-muted-foreground max-w-[700px] mx-auto">
                Our comprehensive solution provides everything you need to manage your supply chain effectively.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <Card className="h-full">
                <CardHeader className="pb-2">
                  <Package className="h-6 w-6 mb-2 text-primary" />
                  <CardTitle>Inventory Management</CardTitle>
                  <CardDescription>
                    Track inventory levels, set reorder points, and optimize stock levels.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                    <li>Real-time inventory tracking</li>
                    <li>Automated reorder notifications</li>
                    <li>Inventory forecasting</li>
                    <li>Barcode scanning support</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="h-full">
                <CardHeader className="pb-2">
                  <Truck className="h-6 w-6 mb-2 text-primary" />
                  <CardTitle>Supplier Management</CardTitle>
                  <CardDescription>
                    Manage suppliers, track performance, and streamline procurement.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                    <li>Supplier performance metrics</li>
                    <li>Purchase order management</li>
                    <li>Contract and pricing management</li>
                    <li>Supplier communication tools</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="h-full sm:col-span-2 md:col-span-1">
                <CardHeader className="pb-2">
                  <BarChart3 className="h-6 w-6 mb-2 text-primary" />
                  <CardTitle>Analytics & Reporting</CardTitle>
                  <CardDescription>
                    Gain insights with powerful analytics and customizable reports.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                    <li>Real-time performance dashboards</li>
                    <li>Customizable reporting tools</li>
                    <li>Trend analysis and forecasting</li>
                    <li>Data export capabilities</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 md:py-20 bg-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">Why Choose Us</h2>
              <p className="text-muted-foreground max-w-[700px] mx-auto">
                Our platform offers unique advantages to help your business thrive.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              <div className="flex flex-col items-center text-center p-4">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Increased Efficiency</h3>
                <p className="text-muted-foreground">
                  Automate workflows and reduce manual tasks to save time and resources.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Enhanced Security</h3>
                <p className="text-muted-foreground">
                  Enterprise-grade security to protect your sensitive supply chain data.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-4 sm:col-span-2 md:col-span-1">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <Settings className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Customizable Solution</h3>
                <p className="text-muted-foreground">
                  Tailor the platform to your specific business needs and workflows.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 lg:py-28 bg-background">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-[800px] mx-auto text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
                Ready to transform your supply chain?
              </h2>
              <p className="text-lg text-muted-foreground mb-6 md:mb-8">
                Join thousands of businesses optimizing their operations with our platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto relative overflow-hidden group bg-primary hover:bg-primary"
                  asChild
                >
                  <Link href="/dashboard" className="relative z-10">
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-black font-medium">Get Started Now</span>
                    <span className="absolute inset-0 bg-white dark:bg-white bg-gray-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left rounded-md"></span>
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto relative overflow-hidden group border-white/40 hover:border-white/40 hover:bg-transparent"
                  asChild
                >
                  <Link href="/contact" className="relative z-10">
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-black font-medium">Contact Sales</span>
                    <span className="absolute inset-0 bg-gray-400 dark:bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left rounded-md"></span>
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
