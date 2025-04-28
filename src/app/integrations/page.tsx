"use client"

import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowRight, 
  Database, 
  BarChart,
  ShoppingCart,
  Truck,
  CreditCard,
  Users,
  BarChart2,
  LineChart,
  RefreshCw,
  CheckCircle2,
  ArrowUpRight
} from "lucide-react";

export default function Integrations() {
  const integrationCategories = [
    {
      title: "ERP Systems",
      icon: Database,
      description: "Seamlessly connect with major enterprise resource planning systems to maintain data consistency across platforms.",
      integrations: [
        { name: "SAP", logo: "/images/logos/sap.svg", popular: true },
        { name: "Oracle NetSuite", logo: "/images/logos/netsuite.svg", popular: true },
        { name: "Microsoft Dynamics", logo: "/images/logos/dynamics.svg", popular: false },
        { name: "Odoo", logo: "/images/logos/odoo.svg", popular: false },
        { name: "Epicor", logo: "/images/logos/epicor.svg", popular: false }
      ]
    },
    {
      title: "E-commerce Platforms",
      icon: ShoppingCart,
      description: "Connect your online store with our platform to automate order processing and inventory updates.",
      integrations: [
        { name: "Shopify", logo: "/images/logos/shopify.svg", popular: true },
        { name: "WooCommerce", logo: "/images/logos/woocommerce.svg", popular: true },
        { name: "Magento", logo: "/images/logos/magento.svg", popular: false },
        { name: "BigCommerce", logo: "/images/logos/bigcommerce.svg", popular: false },
        { name: "Amazon", logo: "/images/logos/amazon.svg", popular: true }
      ]
    },
    {
      title: "Logistics & Shipping",
      icon: Truck,
      description: "Integrate with leading shipping carriers and logistics providers for seamless fulfillment.",
      integrations: [
        { name: "FedEx", logo: "/images/logos/fedex.svg", popular: true },
        { name: "UPS", logo: "/images/logos/ups.svg", popular: true },
        { name: "DHL", logo: "/images/logos/dhl.svg", popular: false },
        { name: "USPS", logo: "/images/logos/usps.svg", popular: false },
        { name: "ShipStation", logo: "/images/logos/shipstation.svg", popular: true }
      ]
    },
    {
      title: "Payment Gateways",
      icon: CreditCard,
      description: "Process payments securely and automate financial transactions with integrated payment solutions.",
      integrations: [
        { name: "Stripe", logo: "/images/logos/stripe.svg", popular: true },
        { name: "PayPal", logo: "/images/logos/paypal.svg", popular: true },
        { name: "Square", logo: "/images/logos/square.svg", popular: false },
        { name: "Authorize.net", logo: "/images/logos/authorize.svg", popular: false },
        { name: "Braintree", logo: "/images/logos/braintree.svg", popular: false }
      ]
    },
    {
      title: "CRM Systems",
      icon: Users,
      description: "Maintain customer data consistency between your CRM and supply chain processes.",
      integrations: [
        { name: "Salesforce", logo: "/images/logos/salesforce.svg", popular: true },
        { name: "HubSpot", logo: "/images/logos/hubspot.svg", popular: true },
        { name: "Zoho CRM", logo: "/images/logos/zoho.svg", popular: false },
        { name: "Microsoft Dynamics 365", logo: "/images/logos/dynamics365.svg", popular: false },
        { name: "Pipedrive", logo: "/images/logos/pipedrive.svg", popular: false }
      ]
    },
    {
      title: "Analytics & BI",
      icon: BarChart2,
      description: "Export your supply chain data to powerful analytics platforms for deeper insights.",
      integrations: [
        { name: "Tableau", logo: "/images/logos/tableau.svg", popular: true },
        { name: "Power BI", logo: "/images/logos/powerbi.svg", popular: true },
        { name: "Looker", logo: "/images/logos/looker.svg", popular: false },
        { name: "Google Data Studio", logo: "/images/logos/datastudio.svg", popular: false },
        { name: "Qlik", logo: "/images/logos/qlik.svg", popular: false }
      ]
    }
  ];

  const integrationProcess = [
    {
      step: 1,
      title: "Select Your Integration",
      description: "Choose from our library of pre-built connectors or request a custom integration for your specific systems."
    },
    {
      step: 2,
      title: "Configure Connection",
      description: "Set up authentication and configure data mapping between systems using our intuitive integration wizard."
    },
    {
      step: 3,
      title: "Test & Validate",
      description: "Run test scenarios in a sandbox environment to ensure data flows correctly between systems."
    },
    {
      step: 4,
      title: "Deploy & Monitor",
      description: "Launch your integration in production and monitor performance through our integration dashboard."
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
                Powerful Integrations for Seamless Operations
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Connect your entire business ecosystem with our extensive integration capabilities. 
                Automate data flows and eliminate information silos across your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Request Custom Integration</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/docs/api">Explore API Documentation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Categories */}
        <section className="py-12 md:py-20 bg-background">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                Connect With Your Favorite Tools
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our platform integrates with over 50+ systems across multiple categories,
                enabling seamless data flow throughout your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {integrationCategories.map((category, index) => (
                <Card key={index} className="h-full">
                  <CardHeader className="pb-2">
                    <div className="bg-primary/10 p-3 w-12 h-12 flex items-center justify-center rounded-lg mb-3">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    <CardDescription className="text-base">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {category.integrations.map((integration, idx) => (
                        <span 
                          key={idx}
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            integration.popular 
                              ? "bg-primary/10 text-primary" 
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {integration.name}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How Integration Works */}
        <section className="py-12 md:py-20 bg-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                How Our Integration Process Works
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Getting connected is simple with our structured approach to system integration.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {integrationProcess.map((process, index) => (
                <Card key={index} className="bg-card border-none relative h-full">
                  <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                    {process.step}
                  </div>
                  <CardHeader className="pt-8">
                    <CardTitle className="text-lg">{process.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {process.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Features */}
        <section className="py-12 md:py-20 bg-background">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
                  Enterprise-Grade Integration Platform
                </h2>
                <p className="text-muted-foreground mb-6">
                  Our robust integration infrastructure ensures reliable data synchronization between systems
                  with the security and performance features your business demands.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-primary/10 p-1 rounded-full">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Bidirectional Sync</h3>
                      <p className="text-sm text-muted-foreground">
                        Keep data consistent across all systems with real-time bidirectional synchronization.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-primary/10 p-1 rounded-full">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Custom Data Mapping</h3>
                      <p className="text-sm text-muted-foreground">
                        Map fields between systems with flexible transformation rules to match your business processes.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-primary/10 p-1 rounded-full">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Scheduled or Real-time Sync</h3>
                      <p className="text-sm text-muted-foreground">
                        Choose between scheduled batches or real-time event-driven synchronization based on your needs.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-primary/10 p-1 rounded-full">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Error Handling & Retries</h3>
                      <p className="text-sm text-muted-foreground">
                        Automatic retry mechanisms and detailed error logs ensure reliable data transfer.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-primary/10 p-1 rounded-full">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Secure Data Transfer</h3>
                      <p className="text-sm text-muted-foreground">
                        All integrations use encrypted connections and follow enterprise security standards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-8 h-full flex items-center justify-center">
                <div className="relative w-full max-w-sm mx-auto">
                  <div className="absolute -top-6 -left-6 w-12 h-12 bg-background rounded-lg flex items-center justify-center shadow-lg">
                    <Database className="h-6 w-6 text-primary" />
                  </div>
                  
                  <RefreshCw className="h-8 w-8 text-primary mx-auto mb-4" />
                  
                  <div className="grid grid-cols-3 gap-3 mb-8">
                    {Array.from({ length: 6 }).map((_, idx) => (
                      <div key={idx} className="h-16 bg-background rounded-md shadow-sm flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-muted"></div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-background rounded-lg flex items-center justify-center shadow-lg">
                    <BarChart className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* API Section */}
        <section className="py-12 md:py-20 bg-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-card p-6 rounded-lg shadow-sm overflow-hidden">
                <div className="font-mono text-sm">
                  <div className="flex items-center bg-muted p-2 rounded-t-md border-b">
                    <span className="w-3 h-3 rounded-full bg-red-500 mx-1"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500 mx-1"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500 mx-1"></span>
                    <span className="ml-2 text-muted-foreground">Terminal</span>
                  </div>
                  <pre className="p-4 overflow-x-auto text-xs">
                    <code className="language-bash">
                      <span className="text-muted-foreground"># Get inventory levels</span>{"\n"}
                      curl -X GET \{"\n"}
                      {"  "}<span className="text-green-500">"https://api.Supply2Uchain.com/v1/inventory"</span> \{"\n"}
                      {"  "}-H <span className="text-green-500">"Authorization: Bearer YOUR_API_KEY"</span> \{"\n"}
                      {"  "}-H <span className="text-green-500">"Content-Type: application/json"</span>{"\n\n"}
                      
                      <span className="text-muted-foreground"># Create a new purchase order</span>{"\n"}
                      curl -X POST \{"\n"}
                      {"  "}<span className="text-green-500">"https://api.Supply2Uchain.com/v1/orders"</span> \{"\n"}
                      {"  "}-H <span className="text-green-500">"Authorization: Bearer YOUR_API_KEY"</span> \{"\n"}
                      {"  "}-H <span className="text-green-500">"Content-Type: application/json"</span> \{"\n"}
                      {"  "}-d '{"\n"}
                      {"    "}"supplier_id": "SUP123",{"\n"}
                      {"    "}"items": [{"\n"}
                      {"      "}"sku": "PROD-001",{"\n"}
                      {"      "}"quantity": 100,{"\n"}
                      {"      "}"unit_price": 24.99{"\n"}
                      {"    "}]{"\n"}
                      {"  "}'
                    </code>
                  </pre>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
                  RESTful API for Custom Integrations
                </h2>
                <p className="text-muted-foreground mb-6">
                  Build your own integrations with our comprehensive REST API. Access all the functionality of our platform programmatically.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-primary/10 p-1 rounded-full">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Comprehensive Documentation</h3>
                      <p className="text-sm text-muted-foreground">
                        Detailed API reference with examples for all endpoints and operations.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-primary/10 p-1 rounded-full">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">SDKs for Popular Languages</h3>
                      <p className="text-sm text-muted-foreground">
                        Client libraries for JavaScript, Python, PHP, Ruby, and Java to accelerate development.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-primary/10 p-1 rounded-full">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Webhooks Support</h3>
                      <p className="text-sm text-muted-foreground">
                        Get notified of events in real-time with configurable webhooks for all major events.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button variant="outline" className="gap-2" asChild>
                    <Link href="/docs/api">
                      View API Documentation
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-12 md:py-20 bg-background">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
                Integration Success Stories
              </h2>
              
              <div className="mt-10 bg-muted p-8 rounded-lg relative">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <span className="inline-block h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                    "
                  </span>
                </div>
                
                <blockquote className="text-lg md:text-xl italic mb-6">
                  "The integration between our ERP system and Supply2Uchain has transformed our operations. What used to take days of manual data entry now happens automatically in real-time. Our inventory accuracy has improved by 35% and we've cut order processing time by half."
                </blockquote>
                
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-muted-foreground/20 flex items-center justify-center mr-3">
                    <Users className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium">Michael Rodriguez</p>
                    <p className="text-sm text-muted-foreground">Supply Chain Director, Global Manufacturing Inc.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-muted to-background">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
                Ready to Connect Your Systems?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Whether you need a pre-built connector or a custom integration solution, our team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                  <Link href="/demo">Schedule Demo</Link>
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