"use client"

import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, HelpCircle, X } from "lucide-react";

export default function Pricing() {
  const pricingPlans = [
    {
      name: "Essential",
      description: "Best for small businesses getting started with supply chain management.",
      price: "$99",
      frequency: "/month per user",
      features: [
        "Inventory management",
        "Basic supplier management",
        "Order processing",
        "Standard reports",
        "Email support",
        "Single warehouse location"
      ],
      cta: "Start Free Trial",
      ctaLink: "/signup?plan=essential",
      popular: false
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses with expanding supply chain needs.",
      price: "$249",
      frequency: "/month per user",
      features: [
        "Everything in Essential",
        "Advanced analytics & reporting",
        "Multi-location inventory",
        "Supplier performance scoring",
        "Automated notifications",
        "Priority support",
        "API access"
      ],
      cta: "Start Free Trial",
      ctaLink: "/signup?plan=professional",
      popular: true
    },
    {
      name: "Enterprise",
      description: "Complete solution for large-scale, complex supply chain operations.",
      price: "Custom",
      frequency: "tailored pricing",
      features: [
        "Everything in Professional",
        "Unlimited warehouse locations",
        "Advanced demand forecasting",
        "AI-powered optimization",
        "Custom integrations",
        "Dedicated account manager",
        "SLA guarantees",
        "24/7 priority support"
      ],
      cta: "Contact Sales",
      ctaLink: "/contact",
      popular: false
    }
  ];

  const featureComparison = {
    categories: [
      {
        name: "Core Features",
        features: [
          { name: "Inventory Management", essential: true, professional: true, enterprise: true },
          { name: "Supplier Management", essential: true, professional: true, enterprise: true },
          { name: "Order Processing", essential: true, professional: true, enterprise: true },
          { name: "Multi-channel Orders", essential: false, professional: true, enterprise: true },
          { name: "Returns Management", essential: false, professional: true, enterprise: true }
        ]
      },
      {
        name: "Data & Analytics",
        features: [
          { name: "Standard Reports", essential: true, professional: true, enterprise: true },
          { name: "Custom Dashboards", essential: false, professional: true, enterprise: true },
          { name: "Demand Forecasting", essential: false, professional: true, enterprise: true },
          { name: "AI-powered Insights", essential: false, professional: false, enterprise: true },
          { name: "Export Capabilities", essential: true, professional: true, enterprise: true }
        ]
      },
      {
        name: "Integration & Support",
        features: [
          { name: "API Access", essential: false, professional: true, enterprise: true },
          { name: "Custom Integrations", essential: false, professional: false, enterprise: true },
          { name: "Email Support", essential: true, professional: true, enterprise: true },
          { name: "Phone Support", essential: false, professional: true, enterprise: true },
          { name: "Dedicated Account Manager", essential: false, professional: false, enterprise: true }
        ]
      }
    ]
  };

  const faqs = [
    {
      question: "Can I switch plans later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Upgrades take effect immediately, while downgrades will take effect at the end of your current billing cycle."
    },
    {
      question: "Do you offer annual pricing discounts?",
      answer: "Yes, we offer a 15% discount when you choose annual billing for any of our plans. This option is available at checkout or in your account settings."
    },
    {
      question: "How many users are included in each plan?",
      answer: "Each plan is priced per user. You can add as many users as you need to your account, and you'll be billed accordingly. Volume discounts are available for larger teams."
    },
    {
      question: "Is there a limit to how many products or suppliers I can manage?",
      answer: "The Essential plan supports up to 1,000 SKUs and 50 suppliers. The Professional plan increases this to 10,000 SKUs and 200 suppliers. Enterprise plans have no limits."
    },
    {
      question: "What kind of support do you offer?",
      answer: "Essential plans include email support with 48-hour response times. Professional plans add priority email support (24-hour response) and scheduled phone support. Enterprise plans include 24/7 priority support and a dedicated account manager."
    },
    {
      question: "Can I try the software before purchasing?",
      answer: "Absolutely! We offer a 14-day free trial of our Professional plan with no credit card required. You can also request a personalized demo from our sales team."
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
                Simple, Transparent Pricing
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Choose the plan that works best for your business needs. 
                All plans include our core supply chain management features.
              </p>
              <div className="flex items-center justify-center mb-8">
                <Tabs defaultValue="monthly" className="w-full max-w-md">
                  <TabsList className="w-full grid grid-cols-2">
                    <TabsTrigger value="monthly">Monthly Billing</TabsTrigger>
                    <TabsTrigger value="annual">Annual Billing <span className="ml-1 text-xs bg-primary/10 text-primary py-0.5 px-1.5 rounded-full">Save 15%</span></TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-12 md:py-20 bg-background">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {pricingPlans.map((plan, index) => (
                <Card key={index} className={`flex flex-col h-full ${plan.popular ? 'border-primary shadow-lg relative' : ''}`}>
                  {plan.popular && (
                    <span className="absolute top-0 right-0 px-3 py-1 transform translate-y-[-50%] bg-primary text-primary-foreground text-sm font-medium rounded-full">
                      Most Popular
                    </span>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription className="mt-2 text-md text-muted-foreground">{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="mt-2 mb-6">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground ml-1 text-sm">{plan.frequency}</span>
                    </div>
                    <ul className="space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className={`w-full ${plan.popular ? '' : 'variant-outline'}`} variant={plan.popular ? "default" : "outline"}>
                      <Link href={plan.ctaLink}>{plan.cta}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="py-12 md:py-20 bg-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                Compare Plan Features
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                See exactly what's included in each plan to find the right fit for your business.
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-background rounded-lg overflow-hidden">
                <thead>
                  <tr className="border-b">
                    <th className="px-6 py-4 text-left font-medium">Features</th>
                    <th className="px-6 py-4 text-center font-medium">Essential</th>
                    <th className="px-6 py-4 text-center font-medium">Professional</th>
                    <th className="px-6 py-4 text-center font-medium">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {featureComparison.categories.map((category, categoryIndex) => (
                    <>
                      <tr key={`cat-${categoryIndex}`} className="bg-muted/50">
                        <td colSpan={4} className="px-6 py-3 font-medium">{category.name}</td>
                      </tr>
                      {category.features.map((feature, featureIndex) => (
                        <tr key={`feat-${categoryIndex}-${featureIndex}`} className="border-b last:border-0">
                          <td className="px-6 py-3">{feature.name}</td>
                          <td className="px-6 py-3 text-center">
                            {feature.essential ? 
                              <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" /> : 
                              <X className="h-5 w-5 text-muted-foreground mx-auto" />}
                          </td>
                          <td className="px-6 py-3 text-center">
                            {feature.professional ? 
                              <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" /> : 
                              <X className="h-5 w-5 text-muted-foreground mx-auto" />}
                          </td>
                          <td className="px-6 py-3 text-center">
                            {feature.enterprise ? 
                              <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" /> : 
                              <X className="h-5 w-5 text-muted-foreground mx-auto" />}
                          </td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-20 bg-background">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-muted-foreground">
                  Find answers to common questions about our pricing and plans.
                </p>
              </div>
              
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Enterprise CTA */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-muted to-background">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
                Need a Custom Solution?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Our enterprise plans can be customized to fit the specific needs of your business,
                no matter how complex your supply chain.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <Link href="/contact">Contact Sales</Link>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                  <Link href="/demo">Request Demo</Link>
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