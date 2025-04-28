"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  HelpCircle, 
  Search, 
  Mail, 
  MessageSquare, 
  Phone, 
  FileText, 
  BookOpen, 
  ChevronDown, 
  ChevronUp,
  ArrowRight,
  ExternalLink,
  Package,
  ClipboardList,
  Users,
  BarChart,
  Settings
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// FAQ categories and questions
const faqCategories = [
  {
    category: "Getting Started",
    icon: <BookOpen className="h-5 w-5" />,
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    questions: [
      {
        question: "How do I create my first inventory?",
        answer: "To create your first inventory, navigate to the Inventory Management section in the dashboard. Click on 'Add New Inventory' and follow the step-by-step wizard to set up your inventory items, including product details, quantities, and storage locations."
      },
      {
        question: "How do I add suppliers to my account?",
        answer: "You can add suppliers by going to the Suppliers section and clicking on 'Add New Supplier'. Fill in the supplier details, including contact information, payment terms, and any specific requirements. You can also import suppliers in bulk using our CSV import feature."
      },
      {
        question: "What payment methods are accepted?",
        answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. For enterprise customers, we also offer invoicing with net-30 payment terms."
      }
    ]
  },
  {
    category: "Inventory Management",
    icon: <Package className="h-5 w-5" />,
    color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    questions: [
      {
        question: "How do I track inventory levels?",
        answer: "Our system automatically tracks inventory levels in real-time. You can view current stock levels, set up low stock alerts, and generate inventory reports from the Inventory Management dashboard. The system also provides predictive analytics to help you optimize your inventory levels."
      },
      {
        question: "Can I set up automatic reordering?",
        answer: "Yes, you can set up automatic reordering based on minimum stock levels. Go to Inventory Settings > Reorder Rules to configure when and how much to reorder. You can set different rules for different product categories or individual items."
      },
      {
        question: "How do I handle inventory adjustments?",
        answer: "To adjust inventory levels, go to the Inventory Management section and select 'Adjust Inventory'. You can add or remove items, record damages, or correct discrepancies. All adjustments are logged for audit purposes."
      }
    ]
  },
  {
    category: "Order Processing",
    icon: <ClipboardList className="h-5 w-5" />,
    color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    questions: [
      {
        question: "How do I process incoming orders?",
        answer: "Incoming orders appear in your Order Management dashboard. Click on an order to view details, then follow the processing workflow to confirm, pick, pack, and ship the order. The system will guide you through each step and update inventory automatically."
      },
      {
        question: "Can I customize the order fulfillment process?",
        answer: "Yes, you can customize the order fulfillment process in the System Settings > Order Processing section. You can define custom statuses, add approval steps, set up automated notifications, and configure shipping options to match your business requirements."
      },
      {
        question: "How do I handle order cancellations?",
        answer: "To cancel an order, go to the Order Management section, find the order, and click on 'Cancel Order'. You'll need to provide a reason for the cancellation. The system will automatically update inventory levels and notify relevant parties."
      }
    ]
  },
  {
    category: "Supplier Management",
    icon: <Users className="h-5 w-5" />,
    color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    questions: [
      {
        question: "How do I evaluate supplier performance?",
        answer: "Our system automatically tracks key supplier performance metrics including on-time delivery, quality ratings, response time, and cost efficiency. You can view these metrics in the Supplier Performance dashboard and generate detailed reports for supplier evaluations."
      },
      {
        question: "Can I set up automated supplier communications?",
        answer: "Yes, you can set up automated communications with suppliers through the Supplier Management > Communication Settings. You can configure automatic purchase orders, delivery notifications, and payment reminders to streamline your supplier relationships."
      },
      {
        question: "How do I manage supplier contracts?",
        answer: "Supplier contracts can be managed in the Supplier Management > Contracts section. You can upload, view, and track contract terms, renewal dates, and compliance requirements. The system will send notifications when contracts are approaching expiration."
      }
    ]
  },
  {
    category: "Analytics & Reporting",
    icon: <BarChart className="h-5 w-5" />,
    color: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300",
    questions: [
      {
        question: "What types of reports are available?",
        answer: "Our system offers a wide range of reports including inventory reports, order fulfillment reports, supplier performance reports, financial reports, and custom reports. You can schedule reports to be generated automatically and delivered via email."
      },
      {
        question: "How do I create custom reports?",
        answer: "To create a custom report, go to Analytics > Custom Reports and click on 'Create New Report'. You can select the data points, metrics, and visualizations you want to include, and save your report template for future use."
      },
      {
        question: "Can I export reports to different formats?",
        answer: "Yes, all reports can be exported to PDF, Excel, CSV, or PowerPoint formats. Simply click on the 'Export' button when viewing a report and select your preferred format."
      }
    ]
  },
  {
    category: "Account & Billing",
    icon: <Settings className="h-5 w-5" />,
    color: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300",
    questions: [
      {
        question: "How do I change my subscription plan?",
        answer: "To change your subscription plan, go to Account Settings > Subscription and click on 'Change Plan'. You can upgrade, downgrade, or switch between different plans. Changes will take effect at the start of your next billing cycle."
      },
      {
        question: "How do I update my billing information?",
        answer: "You can update your billing information in Account Settings > Billing. Here you can add, edit, or remove payment methods, update billing addresses, and view your billing history."
      },
      {
        question: "How do I request a refund?",
        answer: "To request a refund, contact our support team through the Help Center or by emailing support@supplychain.com. Please include your account information, the transaction details, and the reason for your refund request."
      }
    ]
  }
];

// Support options
const supportOptions = [
  {
    title: "Email Support",
    description: "Get help via email. Our support team typically responds within 24 hours.",
    icon: <Mail className="h-6 w-6" />,
    action: "Send Email",
    href: "mailto:support@supplychain.com"
  },
  {
    title: "Live Chat",
    description: "Chat with our support team in real-time. Available during business hours.",
    icon: <MessageSquare className="h-6 w-6" />,
    action: "Start Chat",
    href: "#"
  },
  {
    title: "Phone Support",
    description: "Speak directly with our support team. Available for premium and enterprise customers.",
    icon: <Phone className="h-6 w-6" />,
    action: "Call Us",
    href: "tel:+1-800-123-4567"
  },
  {
    title: "Knowledge Base",
    description: "Browse our comprehensive knowledge base for self-service support.",
    icon: <FileText className="h-6 w-6" />,
    action: "Browse Articles",
    href: "/docs"
  }
];

// Help resources
const helpResources = [
  {
    title: "Documentation",
    description: "Comprehensive guides and documentation for all features.",
    icon: <BookOpen className="h-6 w-6" />,
    href: "/docs"
  },
  {
    title: "Video Tutorials",
    description: "Step-by-step video tutorials for common tasks.",
    icon: <ExternalLink className="h-6 w-6" />,
    href: "/docs/videos"
  },
  {
    title: "Community Forums",
    description: "Connect with other users and share knowledge.",
    icon: <MessageSquare className="h-6 w-6" />,
    href: "/community"
  },
  {
    title: "Webinars",
    description: "Live and recorded webinars on advanced features.",
    icon: <ExternalLink className="h-6 w-6" />,
    href: "/webinars"
  }
];

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("faq");

  // Filter FAQs based on search query
  const filteredFaqs = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="container py-10">
      <div className="flex flex-col items-center text-center mb-10">
        <h1 className="text-3xl font-bold tracking-tight mb-4">How can we help you?</h1>
        <p className="text-muted-foreground max-w-[700px] mb-6">
          Find answers to common questions, get support, or explore our resources to help you make the most of our supply chain management system.
        </p>
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search for help..."
            className="pl-10 h-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <Tabs defaultValue="faq" className="mb-10" onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="faq">FAQs</TabsTrigger>
          <TabsTrigger value="support">Support Options</TabsTrigger>
          <TabsTrigger value="resources">Help Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="faq">
          {searchQuery && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Search Results</h2>
              <p className="text-muted-foreground mb-4">
                Showing results for "{searchQuery}"
              </p>
            </div>
          )}

          {filteredFaqs.length === 0 ? (
            <Card>
              <CardContent className="py-10">
                <div className="flex flex-col items-center text-center">
                  <HelpCircle className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No results found</h3>
                  <p className="text-muted-foreground mb-4">
                    We couldn't find any answers matching your search. Try using different keywords or browse our categories below.
                  </p>
                  <Button onClick={() => setSearchQuery("")}>
                    Clear Search
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-8">
              {filteredFaqs.map((category, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="border-b pb-4">
                    <div className="flex items-center gap-2">
                      <div className={`p-2 rounded-full ${category.color}`}>
                        {category.icon}
                      </div>
                      <CardTitle className="text-xl">{category.category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((faq, qIndex) => (
                        <AccordionItem key={qIndex} value={`item-${index}-${qIndex}`} className="border-b last:border-b-0">
                          <AccordionTrigger className="text-left py-4 hover:no-underline">
                            <span className="font-medium">{faq.question}</span>
                          </AccordionTrigger>
                          <AccordionContent className="pb-4">
                            <p className="text-muted-foreground pl-1">{faq.answer}</p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="support">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {supportOptions.map((option, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {option.icon}
                    <CardTitle>{option.title}</CardTitle>
                  </div>
                  <CardDescription>{option.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link href={option.href} className="w-full">
                    <Button className="w-full">
                      {option.action}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="resources">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {helpResources.map((resource, index) => (
              <Link href={resource.href} key={index}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      {resource.icon}
                      <CardTitle>{resource.title}</CardTitle>
                    </div>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="ghost" className="p-0 h-auto">
                      Explore <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Contact Form */}
      <div className="mt-12">
        <Card>
          <CardHeader>
            <CardTitle>Still need help?</CardTitle>
            <CardDescription>
              Fill out the form below and our support team will get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <Input id="subject" placeholder="What's your issue about?" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Describe your issue in detail"
                ></textarea>
              </div>
              <Button type="submit" className="w-full">Submit</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 