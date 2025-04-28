"use client"

import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  Code, 
  FileText, 
  FileJson, 
  Terminal, 
  Boxes, 
  Wrench, 
  LifeBuoy, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight 
} from "lucide-react";

export default function DocsPage() {
  const documentationSections = [
    {
      id: "api",
      icon: <FileJson className="h-8 w-8 text-primary" />,
      title: "API Reference",
      description: "Complete documentation for the Supply2Uchain RESTful API with endpoints, parameters, and examples.",
      href: "/docs/api",
      popular: true
    },
    {
      id: "sdk",
      icon: <Boxes className="h-8 w-8 text-primary" />,
      title: "SDK & Client Libraries",
      description: "Language-specific SDKs for integrating with Supply2Uchain in JavaScript, Python, and Ruby.",
      href: "/docs/sdk",
      popular: true
    },
    {
      id: "guides",
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Integration Guides",
      description: "Step-by-step instructions for common integration scenarios and use cases.",
      href: "/docs/guides",
      popular: false
    },
    {
      id: "tutorials",
      icon: <Terminal className="h-8 w-8 text-primary" />,
      title: "Tutorials",
      description: "Hands-on tutorials for getting started with the Supply2Uchain platform.",
      href: "/docs/tutorials",
      popular: false
    },
    {
      id: "webhooks",
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Webhooks",
      description: "Documentation for setting up and receiving webhook events from Supply2Uchain.",
      href: "/docs/webhooks",
      popular: false
    },
    {
      id: "troubleshooting",
      icon: <Wrench className="h-8 w-8 text-primary" />,
      title: "Troubleshooting",
      description: "Solutions to common issues and error messages you might encounter.",
      href: "/docs/troubleshooting",
      popular: false
    }
  ];

  const quickStartGuides = [
    {
      title: "Getting Started with Supply2Uchain",
      description: "Learn the basics of setting up and configuring your Supply2Uchain account.",
      time: "10 min read",
      href: "/docs/guides/getting-started"
    },
    {
      title: "API Authentication",
      description: "How to authenticate your API requests using API keys.",
      time: "5 min read",
      href: "/docs/api#authentication"
    },
    {
      title: "Inventory Management",
      description: "Track and manage your inventory with the Supply2Uchain API.",
      time: "15 min read",
      href: "/docs/guides/inventory-management"
    },
    {
      title: "Order Processing",
      description: "Create and manage orders through the Supply2Uchain platform.",
      time: "12 min read",
      href: "/docs/guides/order-processing"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Supply2Uchain Documentation
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Everything you need to know about integrating with and using the Supply2Uchain platform
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" asChild>
                  <Link href="/docs/api">API Reference</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/docs/sdk">SDK Documentation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Quick Start Section */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <BookOpen className="h-6 w-6 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                  Quick Start Guides
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {quickStartGuides.map((guide, index) => (
                  <Card key={index} className="h-full">
                    <CardHeader>
                      <CardTitle className="text-xl">{guide.title}</CardTitle>
                      <CardDescription>{guide.description}</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex justify-between items-center pt-0">
                      <span className="text-sm text-muted-foreground">{guide.time}</span>
                      <Button variant="ghost" asChild className="gap-1">
                        <Link href={guide.href}>
                          <span>Read Guide</span>
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Documentation Sections */}
        <section className="py-12 md:py-16 bg-muted/50">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8 text-center">
              Browse Documentation
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {documentationSections.map((section) => (
                <Card key={section.id} className="h-full relative overflow-hidden">
                  {section.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-primary/10 text-primary text-xs rounded-full px-2 py-1 font-medium flex items-center">
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        Popular
                      </span>
                    </div>
                  )}
                  <CardHeader>
                    <div className="mb-4">
                      {section.icon}
                    </div>
                    <CardTitle className="text-xl">{section.title}</CardTitle>
                    <CardDescription>{section.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="pt-0">
                    <Button variant="secondary" asChild>
                      <Link href={section.href}>
                        View Documentation
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Developer Resources */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Terminal className="h-6 w-6 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                  Developer Resources
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="h-full">
                  <CardHeader>
                    <FileText className="h-6 w-6 text-primary mb-3" />
                    <CardTitle className="text-xl">Code Samples</CardTitle>
                    <CardDescription>Browse our collection of code samples and example projects</CardDescription>
                  </CardHeader>
                  <CardFooter className="pt-0">
                    <Button variant="outline" asChild>
                      <Link href="/docs/examples">View Examples</Link>
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card className="h-full">
                  <CardHeader>
                    <Code className="h-6 w-6 text-primary mb-3" />
                    <CardTitle className="text-xl">API Changelog</CardTitle>
                    <CardDescription>Stay up to date with the latest changes to our API</CardDescription>
                  </CardHeader>
                  <CardFooter className="pt-0">
                    <Button variant="outline" asChild>
                      <Link href="/docs/changelog">View Changelog</Link>
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card className="h-full">
                  <CardHeader>
                    <LifeBuoy className="h-6 w-6 text-primary mb-3" />
                    <CardTitle className="text-xl">Help Center</CardTitle>
                    <CardDescription>Additional resources and support for your integration journey</CardDescription>
                  </CardHeader>
                  <CardFooter className="pt-0">
                    <Button variant="outline" asChild>
                      <Link href="/help">Visit Help Center</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* Request Feature */}
        <section className="py-12 md:py-16 bg-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                Can't find what you're looking for?
              </h2>
              <p className="text-muted-foreground mb-8">
                Our documentation is constantly evolving. If you can't find the information you need, please let us know.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link href="/contact">Contact Support</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="https://github.com/supply2uchain/feedback/issues/new" target="_blank" rel="noopener noreferrer">
                    Request Documentation
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