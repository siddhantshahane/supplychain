"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Package, 
  Truck, 
  BarChart3, 
  Settings, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Users, 
  LineChart, 
  BarChart, 
  ClipboardCheck,
  LucideIcon,
  ShoppingCart,
  Bell,
  RefreshCw,
  Image as ImageIcon
} from "lucide-react";

interface FeatureProps {
  title: string;
  description: string;
  icon: LucideIcon;
  benefits: string[];
}

const FeatureCard = ({ title, description, icon: Icon, benefits }: FeatureProps) => {
  return (
    <Card className="h-full transition-all hover:shadow-lg">
      <CardHeader className="pb-2">
        <div className="bg-primary/10 p-3 w-12 h-12 flex items-center justify-center rounded-lg mb-3">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-base">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
              <span className="text-sm text-muted-foreground">{benefit}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

// Image placeholder component when images aren't available
const ImagePlaceholder = ({ alt }: { alt: string }) => (
  <div className="w-full h-full bg-muted flex flex-col items-center justify-center p-6 rounded-lg">
    <ImageIcon className="h-12 w-12 text-muted-foreground mb-3" />
    <p className="text-sm text-muted-foreground text-center">{alt}</p>
  </div>
);

export default function Features() {
  const featuresData = [
    {
      title: "Inventory Management",
      description: "Complete control over your inventory with real-time tracking and optimization.",
      icon: Package,
      benefits: [
        "Real-time inventory tracking across multiple locations",
        "Automated alerts for stock levels and reordering",
        "Barcode and QR code scanning integration",
        "Batch and expiry date tracking for regulated goods",
        "Inventory forecasting and demand planning"
      ]
    },
    {
      title: "Supplier Management",
      description: "Streamline relationships with suppliers and optimize procurement processes.",
      icon: Truck,
      benefits: [
        "Centralized supplier information database",
        "Performance metrics and scorecards",
        "Contract management and renewal alerts",
        "Streamlined communication channels",
        "Supplier onboarding and compliance tracking"
      ]
    },
    {
      title: "Order Processing",
      description: "Efficient order handling from placement to fulfillment with full visibility.",
      icon: ShoppingCart,
      benefits: [
        "Automated order processing workflows",
        "Real-time order status tracking",
        "Multi-channel order integration",
        "Customizable approval processes",
        "Backorder management and prioritization"
      ]
    },
    {
      title: "Analytics & Reporting",
      description: "Gain actionable insights with comprehensive analytics and customizable reports.",
      icon: BarChart3,
      benefits: [
        "Customizable dashboards for key metrics",
        "Trend analysis and forecasting tools",
        "Automated report generation and scheduling",
        "Export capabilities in multiple formats",
        "AI-powered predictive analytics"
      ]
    },
    {
      title: "Notifications & Alerts",
      description: "Stay informed with real-time alerts and customizable notifications.",
      icon: Bell,
      benefits: [
        "Customizable alert thresholds and conditions",
        "Multi-channel notification delivery (email, SMS, in-app)",
        "Priority-based alert system",
        "Scheduled reports and digests",
        "Team collaboration tools for alert handling"
      ]
    },
    {
      title: "Integration Capabilities",
      description: "Seamlessly connect with your existing systems and third-party services.",
      icon: RefreshCw,
      benefits: [
        "Pre-built connectors for popular business systems",
        "API access for custom integrations",
        "Real-time data synchronization",
        "EDI support for trading partners",
        "Workflow automation across platforms"
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Powerful Features for Modern Supply Chain Management
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Our comprehensive platform provides everything you need to streamline operations, 
                increase visibility, and optimize your entire supply chain from end to end.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" asChild>
                  <Link href="/demo">Request a Demo</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-12 md:py-20 bg-background">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                Core Features
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore the powerful capabilities that make our supply chain management 
                system the choice of industry leaders worldwide.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {featuresData.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </section>

        {/* Feature Tabs */}
        <section className="py-12 md:py-20 bg-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                Explore Each Feature in Detail
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Click through the tabs below to learn more about each core module in our platform.
              </p>
            </div>
            
            <Tabs defaultValue="inventory" className="max-w-4xl mx-auto">
              <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 mb-8">
                <TabsTrigger value="inventory" className="text-sm">Inventory</TabsTrigger>
                <TabsTrigger value="suppliers" className="text-sm">Suppliers</TabsTrigger>
                <TabsTrigger value="orders" className="text-sm">Orders</TabsTrigger>
                <TabsTrigger value="analytics" className="text-sm">Analytics</TabsTrigger>
              </TabsList>
              
              <TabsContent value="inventory" className="p-6 bg-card rounded-lg shadow-sm">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-xl font-bold mb-3">Inventory Management</h3>
                    <p className="text-muted-foreground mb-4">
                      Get complete visibility into your inventory across all locations 
                      with powerful tracking, forecasting, and optimization tools.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        <span>Multi-location inventory tracking</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        <span>Barcode scanning and mobile access</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        <span>Automated reordering and purchase orders</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        <span>Batch tracking and expiry management</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        <span>Inventory optimization algorithms</span>
                      </li>
                    </ul>
                  </div>
                  <div className="relative w-full h-64 md:h-auto rounded-lg overflow-hidden shadow-lg">
                    <ImagePlaceholder alt="Inventory dashboard visualization" />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="suppliers" className="p-6 bg-card rounded-lg shadow-sm">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-xl font-bold mb-3">Supplier Management</h3>
                    <p className="text-muted-foreground mb-4">
                      Build stronger supplier relationships and streamline procurement 
                      with comprehensive supplier management tools.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        <span>Supplier performance scorecards</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        <span>Contract management and renewal tracking</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        <span>Supplier onboarding and compliance</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        <span>RFQ and bid management</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        <span>Supplier communication portal</span>
                      </li>
                    </ul>
                  </div>
                  <div className="relative w-full h-64 md:h-auto rounded-lg overflow-hidden shadow-lg">
                    <ImagePlaceholder alt="Supplier management interface" />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="orders" className="p-6 bg-card rounded-lg shadow-sm">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-xl font-bold mb-3">Order Management</h3>
                    <p className="text-muted-foreground mb-4">
                      Streamline the entire order lifecycle with automated workflows 
                      and real-time visibility across all channels.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        <span>Multi-channel order processing</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        <span>Automated order workflows</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        <span>Real-time order tracking</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        <span>Backorder management</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        <span>Returns and warranty tracking</span>
                      </li>
                    </ul>
                  </div>
                  <div className="relative w-full h-64 md:h-auto rounded-lg overflow-hidden shadow-lg">
                    <ImagePlaceholder alt="Order management system" />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="analytics" className="p-6 bg-card rounded-lg shadow-sm">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-xl font-bold mb-3">Analytics & Reporting</h3>
                    <p className="text-muted-foreground mb-4">
                      Turn your supply chain data into actionable insights with 
                      powerful analytics and customizable reporting tools.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        <span>Customizable executive dashboards</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        <span>Key performance indicators (KPIs)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        <span>Predictive analytics and forecasting</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        <span>Scheduled and automated reporting</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        <span>Data export and visualization tools</span>
                      </li>
                    </ul>
                  </div>
                  <div className="relative w-full h-64 md:h-auto rounded-lg overflow-hidden shadow-lg">
                    <ImagePlaceholder alt="Analytics dashboard visualization" />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-12 md:py-20 bg-background">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                See what our customers have to say about their experience using our platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-muted/50">
                <CardContent className="pt-6">
                  <div className="mb-4 flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="h-5 w-5 fill-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground italic mb-4">
                    "This platform has transformed our supply chain operations. We've seen a 30% reduction in stockouts and a 25% decrease in inventory carrying costs."
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Sarah Johnson</p>
                      <p className="text-sm text-muted-foreground">Supply Chain Director, GloboTech Inc.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-muted/50">
                <CardContent className="pt-6">
                  <div className="mb-4 flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="h-5 w-5 fill-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground italic mb-4">
                    "The analytics capabilities are incredible. We're now able to forecast demand with 95% accuracy, which has revolutionized our planning process."
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">David Chen</p>
                      <p className="text-sm text-muted-foreground">Operations Manager, Prime Logistics</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-muted/50">
                <CardContent className="pt-6">
                  <div className="mb-4 flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="h-5 w-5 fill-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground italic mb-4">
                    "Implementation was smooth and customer support has been exceptional. The system is intuitive and our team was able to adapt quickly."
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Laura Martinez</p>
                      <p className="text-sm text-muted-foreground">CIO, Global Manufacturing Co.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-muted to-background">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
                Ready to Transform Your Supply Chain?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of businesses that have optimized their operations with our 
                comprehensive supply chain management platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <Link href="/dashboard">Get Started Now</Link>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                  <Link href="/contact">Talk to Sales</Link>
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