"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Calendar,
  User,
  Tag,
  TrendingUp,
  Clock,
  ChevronRight,
  ArrowRight
} from "lucide-react";

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  
  const categories = [
    { name: "All", slug: "all" },
    { name: "Supply Chain", slug: "supply-chain" },
    { name: "Inventory", slug: "inventory" },
    { name: "Logistics", slug: "logistics" },
    { name: "Technology", slug: "technology" },
    { name: "Sustainability", slug: "sustainability" }
  ];
  
  const featuredPosts = [
    {
      id: "1",
      title: "10 Ways to Optimize Your Supply Chain for Efficiency",
      excerpt: "Discover proven strategies to streamline your supply chain operations and reduce costs while improving customer satisfaction.",
      date: "April 2, 2024",
      author: "Sarah Johnson",
      authorRole: "Supply Chain Specialist",
      authorImage: "/images/authors/sarah.jpg",
      image: "/images/blog/supply-chain-optimization.jpg",
      category: "Supply Chain",
      readTime: "8 min read",
      featured: true,
      trending: true
    },
    {
      id: "2",
      title: "How AI is Transforming Inventory Management",
      excerpt: "Artificial intelligence is revolutionizing how businesses manage inventory. Learn how AI-powered forecasting is reducing stockouts and overstock situations.",
      date: "March 28, 2024",
      author: "Michael Chen",
      authorRole: "AI Research Lead",
      authorImage: "/images/authors/michael.jpg",
      image: "/images/blog/ai-inventory.jpg",
      category: "Technology",
      readTime: "6 min read",
      featured: true,
      trending: false
    },
    {
      id: "3",
      title: "Sustainable Supply Chain Practices for 2024",
      excerpt: "Environmental responsibility is no longer optional. Explore how leading companies are implementing sustainable practices throughout their supply chains.",
      date: "March 20, 2024",
      author: "Emma Rodriguez",
      authorRole: "Sustainability Director",
      authorImage: "/images/authors/emma.jpg",
      image: "/images/blog/sustainable-practices.jpg",
      category: "Sustainability",
      readTime: "7 min read",
      featured: true,
      trending: true
    }
  ];
  
  const recentPosts = [
    {
      id: "4",
      title: "The Impact of Global Events on Supply Chain Resilience",
      excerpt: "Recent global disruptions have tested supply chain resilience. This article examines strategies for building robust supply chains that can withstand unexpected challenges.",
      date: "April 4, 2024",
      author: "David Wilson",
      authorRole: "Supply Chain Analyst",
      authorImage: "/images/authors/david.jpg",
      image: "/images/blog/global-supply-chain.jpg",
      category: "Supply Chain",
      readTime: "10 min read",
      featured: false,
      trending: false
    },
    {
      id: "5",
      title: "Last-Mile Delivery Solutions for E-Commerce Businesses",
      excerpt: "The final leg of the delivery journey is often the most challenging. Discover innovative solutions to optimize last-mile delivery for your e-commerce business.",
      date: "April 1, 2024",
      author: "Jessica Lee",
      authorRole: "Logistics Manager",
      authorImage: "/images/authors/jessica.jpg",
      image: "/images/blog/last-mile-delivery.jpg",
      category: "Logistics",
      readTime: "5 min read",
      featured: false,
      trending: true
    },
    {
      id: "6",
      title: "Inventory Forecasting: Beyond the Basics",
      excerpt: "Advanced techniques in inventory forecasting can give your business a competitive edge. Learn about demand sensing, probabilistic forecasting, and more.",
      date: "March 25, 2024",
      author: "Robert Taylor",
      authorRole: "Inventory Specialist",
      authorImage: "/images/authors/robert.jpg",
      image: "/images/blog/inventory-forecasting.jpg",
      category: "Inventory",
      readTime: "9 min read",
      featured: false,
      trending: false
    },
    {
      id: "7",
      title: "Blockchain in Supply Chain: Use Cases and Implementation",
      excerpt: "Blockchain technology offers unprecedented transparency and traceability. Explore real-world applications and implementation strategies.",
      date: "March 22, 2024",
      author: "Anita Patel",
      authorRole: "Technology Consultant",
      authorImage: "/images/authors/anita.jpg",
      image: "/images/blog/blockchain-supply-chain.jpg",
      category: "Technology",
      readTime: "8 min read",
      featured: false,
      trending: true
    },
    {
      id: "8",
      title: "Reducing Carbon Footprint in Logistics Operations",
      excerpt: "Transportation accounts for a significant portion of supply chain emissions. Learn strategies to reduce your carbon footprint while maintaining operational efficiency.",
      date: "March 18, 2024",
      author: "Thomas Green",
      authorRole: "Sustainability Coordinator",
      authorImage: "/images/authors/thomas.jpg",
      image: "/images/blog/green-logistics.jpg",
      category: "Sustainability",
      readTime: "7 min read",
      featured: false,
      trending: false
    },
    {
      id: "9",
      title: "The Role of IoT in Modern Warehouse Management",
      excerpt: "Internet of Things (IoT) devices are transforming warehouse operations. Discover how connected sensors and devices can optimize your warehouse management.",
      date: "March 15, 2024",
      author: "Sophia Kim",
      authorRole: "Operations Technology Manager",
      authorImage: "/images/authors/sophia.jpg",
      image: "/images/blog/iot-warehouse.jpg",
      category: "Technology",
      readTime: "6 min read",
      featured: false,
      trending: false
    }
  ];
  
  const allPosts = [...featuredPosts, ...recentPosts];
  
  // Filter posts based on search query
  const filteredPosts = searchQuery 
    ? allPosts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : recentPosts;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Supply Chain Insights
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Expert articles, guides, and trends to help you optimize your supply chain operations
              </p>
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 pr-4 py-2 w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Posts */}
        {!searchQuery && (
          <section className="py-12 md:py-16 bg-background">
            <div className="container px-4 md:px-6 mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
                Featured Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {featuredPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden h-full flex flex-col">
                    <div className="relative h-48 w-full">
                      <div className="absolute inset-0 bg-muted/50 flex items-center justify-center">
                        <span className="text-muted-foreground text-xs">Image: {post.image}</span>
                      </div>
                    </div>
                    <CardHeader className="flex-none">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-xs px-2 py-0.5">
                          {post.category}
                        </Badge>
                        <div className="flex items-center text-muted-foreground text-xs">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <CardTitle className="text-xl line-clamp-2">
                        <Link href={`/blog/${post.id}`} className="hover:underline">
                          {post.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="line-clamp-3 mt-2">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="pt-0 mt-auto flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                          <User className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{post.author}</p>
                          <p className="text-xs text-muted-foreground">{post.date}</p>
                        </div>
                      </div>
                      {post.trending && (
                        <div className="flex items-center text-xs text-primary">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          <span>Trending</span>
                        </div>
                      )}
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* Categories and Latest Articles */}
        <section className="py-12 md:py-16 bg-muted/50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                {searchQuery ? "Search Results" : "Latest Articles"}
              </h2>
              <Tabs defaultValue="all" className="w-full md:w-auto">
                <TabsList className="grid grid-flow-col auto-cols-max gap-2 overflow-x-auto">
                  {categories.map((category) => (
                    <TabsTrigger key={category.slug} value={category.slug}>
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
            
            {searchQuery && filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">No articles found matching "{searchQuery}"</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => setSearchQuery("")}
                >
                  Clear Search
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden h-full flex flex-col">
                    <div className="relative h-48 w-full">
                      <div className="absolute inset-0 bg-muted/50 flex items-center justify-center">
                        <span className="text-muted-foreground text-xs">Image: {post.image}</span>
                      </div>
                    </div>
                    <CardHeader className="flex-none">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-xs px-2 py-0.5">
                          {post.category}
                        </Badge>
                        <div className="flex items-center text-muted-foreground text-xs">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <CardTitle className="text-lg line-clamp-2">
                        <Link href={`/blog/${post.id}`} className="hover:underline">
                          {post.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="line-clamp-3 mt-2">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="pt-0 mt-auto flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                          <User className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{post.author}</p>
                          <p className="text-xs text-muted-foreground">{post.date}</p>
                        </div>
                      </div>
                      {post.trending && (
                        <div className="flex items-center text-xs text-primary">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          <span>Trending</span>
                        </div>
                      )}
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
            
            {!searchQuery && (
              <div className="flex justify-center mt-10">
                <Button variant="outline" className="gap-2">
                  <span>Load More Articles</span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                Stay Updated
              </h2>
              <p className="text-muted-foreground mb-6">
                Subscribe to our newsletter for the latest supply chain insights and best practices.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full"
                />
                <Button className="w-full sm:w-auto whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                By subscribing, you agree to our <Link href="/privacy" className="underline">Privacy Policy</Link> and consent to receive updates from our company.
              </p>
            </div>
          </div>
        </section>
        
        {/* Topics Section */}
        <section className="py-12 md:py-16 bg-muted/50">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8 text-center">
              Popular Topics
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { name: "Supply Chain Optimization", count: 24 },
                { name: "Inventory Management", count: 18 },
                { name: "Logistics", count: 15 },
                { name: "Warehouse Management", count: 12 },
                { name: "AI & Machine Learning", count: 10 },
                { name: "Sustainability", count: 9 },
                { name: "IoT", count: 8 },
                { name: "Blockchain", count: 7 },
                { name: "Analytics", count: 12 },
                { name: "Last Mile Delivery", count: 6 },
                { name: "Supplier Management", count: 11 },
                { name: "Risk Management", count: 9 }
              ].map((topic, index) => (
                <Card key={index} className="hover:bg-accent/50 transition-colors cursor-pointer">
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <Tag className="h-5 w-5 mb-2 text-primary" />
                    <p className="text-sm font-medium">{topic.name}</p>
                    <p className="text-xs text-muted-foreground">{topic.count} articles</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-stretch gap-8 rounded-lg border bg-card p-8 md:p-10">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                  Ready to Optimize Your Supply Chain?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Try Supply2Uchain today and discover how our platform can help you streamline operations, reduce costs, and improve customer satisfaction.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="gap-2">
                    <span>Get Started</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/demo">Request Demo</Link>
                  </Button>
                </div>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div className="relative h-[160px] w-[240px] sm:h-[200px] sm:w-[300px] bg-muted rounded-lg">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-muted-foreground text-xs">Dashboard preview image</span>
                  </div>
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