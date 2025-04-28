"use client"

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Calendar,
  Clock,
  Users,
  VideoIcon,
  CheckCircle2,
  MonitorPlay,
  BarChart4,
  Lightbulb,
  ShoppingCart,
  Headset,
  User,
  Building2,
  CalendarClock
} from "lucide-react";

export default function Demo() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    teamSize: "",
    requirements: "",
    demoType: "live"
  });
  
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      // Reset form after success
      setFormState({
        name: "",
        email: "",
        company: "",
        role: "",
        teamSize: "",
        requirements: "",
        demoType: "live"
      });
    }, 1500);
  };

  const demoIncludes = [
    {
      title: "Platform Overview",
      description: "Comprehensive walkthrough of all core supply chain management features",
      icon: MonitorPlay
    },
    {
      title: "Custom Workflows",
      description: "See how to configure workflows tailored to your specific business processes",
      icon: Lightbulb
    },
    {
      title: "Data Analytics",
      description: "Explore our powerful analytics dashboard and reporting capabilities",
      icon: BarChart4
    },
    {
      title: "Integration Demo",
      description: "Learn how our platform connects with your existing business systems",
      icon: ShoppingCart
    },
    {
      title: "Q&A Session",
      description: "Dedicated time to address your specific questions and requirements",
      icon: Headset
    }
  ];

  const timeSlots = [
    { day: "Monday", times: ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM"] },
    { day: "Tuesday", times: ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM"] },
    { day: "Wednesday", times: ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM"] },
    { day: "Thursday", times: ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM"] },
    { day: "Friday", times: ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM"] }
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
                See Supply2Uchain in Action
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Request a personalized demonstration and discover how our platform 
                can streamline your supply chain operations and drive efficiency.
              </p>
            </div>
          </div>
        </section>

        {/* Demo Request Form */}
        <section className="py-12 md:py-20 bg-background">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Form */}
              <div>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Request Your Demo</h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and one of our product specialists will contact you 
                    to schedule your personalized demonstration.
                  </p>
                </div>

                {formStatus === "success" ? (
                  <Card className="bg-green-50 dark:bg-green-900/10 border-green-200 dark:border-green-900/50">
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center text-center space-y-4">
                        <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                          <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400" />
                        </div>
                        <h3 className="text-xl font-bold">Demo Request Received!</h3>
                        <p className="text-muted-foreground">
                          Thank you for your interest in Supply2Uchain. One of our product specialists will 
                          contact you within 24 hours to schedule your demo.
                        </p>
                        <Button className="mt-4" variant="outline" asChild>
                          <Link href="/">Return to Home</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input 
                          id="name" 
                          name="name" 
                          placeholder="John Smith" 
                          value={formState.name}
                          onChange={handleInputChange}
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Work Email</Label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          placeholder="john@company.com" 
                          value={formState.email}
                          onChange={handleInputChange}
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input 
                          id="company" 
                          name="company" 
                          placeholder="Your Company" 
                          value={formState.company}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="role">Your Role</Label>
                        <Select 
                          value={formState.role}
                          onValueChange={(value) => handleSelectChange("role", value)}
                        >
                          <SelectTrigger id="role">
                            <SelectValue placeholder="Select your role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="executive">Executive / C-Level</SelectItem>
                            <SelectItem value="director">Director / VP</SelectItem>
                            <SelectItem value="manager">Manager</SelectItem>
                            <SelectItem value="operations">Operations</SelectItem>
                            <SelectItem value="it">IT / Technical</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="teamSize">Team Size</Label>
                        <Select 
                          value={formState.teamSize}
                          onValueChange={(value) => handleSelectChange("teamSize", value)}
                        >
                          <SelectTrigger id="teamSize">
                            <SelectValue placeholder="Select team size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-10">1-10 employees</SelectItem>
                            <SelectItem value="11-50">11-50 employees</SelectItem>
                            <SelectItem value="51-200">51-200 employees</SelectItem>
                            <SelectItem value="201-500">201-500 employees</SelectItem>
                            <SelectItem value="501+">501+ employees</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="demoType">Demo Type</Label>
                        <Select 
                          value={formState.demoType}
                          onValueChange={(value) => handleSelectChange("demoType", value)}
                        >
                          <SelectTrigger id="demoType">
                            <SelectValue placeholder="Select demo type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="live">Live Demonstration</SelectItem>
                            <SelectItem value="recorded">Recorded Demo + Q&A</SelectItem>
                            <SelectItem value="custom">Custom Demo (Specific Features)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="requirements">Specific Requirements</Label>
                      <Textarea 
                        id="requirements" 
                        name="requirements" 
                        placeholder="Please share any specific areas of interest or questions you have about our platform" 
                        value={formState.requirements}
                        onChange={handleInputChange}
                        rows={4} 
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full md:w-auto" 
                      disabled={formStatus === "submitting"}
                    >
                      {formStatus === "submitting" ? "Submitting..." : "Request Demo"}
                    </Button>
                  </form>
                )}
              </div>
              
              {/* What's Included */}
              <div>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">What's Included in Your Demo</h2>
                  <p className="text-muted-foreground mb-6">
                    Our personalized demos are tailored to your business needs and typically include:
                  </p>
                  
                  <div className="space-y-6">
                    {demoIncludes.map((item, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="bg-primary/10 p-3 h-12 w-12 flex items-center justify-center rounded-lg shrink-0">
                          <item.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">{item.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Card className="bg-muted/50 mt-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CalendarClock className="h-5 w-5" />
                      Available Demo Times
                    </CardTitle>
                    <CardDescription>
                      Our product specialists are available during the following time slots (all times in EST):
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {timeSlots.map((slot, index) => (
                        <div key={index}>
                          <p className="font-medium text-sm mb-2">{slot.day}</p>
                          <ul className="space-y-1">
                            {slot.times.map((time, idx) => (
                              <li key={idx} className="text-xs text-muted-foreground">{time}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Process */}
        <section className="py-12 md:py-20 bg-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                How Our Demo Process Works
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From request to implementation, we make it easy to see how Supply2Uchain can transform your operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium mb-2">Request Demo</h3>
                <p className="text-sm text-muted-foreground">
                  Fill out our simple demo request form with your information
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium mb-2">Schedule Time</h3>
                <p className="text-sm text-muted-foreground">
                  We'll contact you to schedule a convenient time for your demo
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <VideoIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium mb-2">Personalized Demo</h3>
                <p className="text-sm text-muted-foreground">
                  Join a live demo tailored to your specific business needs
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium mb-2">Implementation Plan</h3>
                <p className="text-sm text-muted-foreground">
                  Receive a customized implementation plan and pricing proposal
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-12 md:py-20 bg-background">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-3xl mx-auto">
              <div className="bg-muted p-8 rounded-lg relative">
                <div className="absolute -top-5 left-10">
                  <span className="inline-block h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                    "
                  </span>
                </div>
                
                <blockquote className="text-lg md:text-xl italic mb-6 mt-4">
                  "The demo session we had with the Supply2Uchain team was incredibly valuable. They showed us exactly how the platform could address our specific pain points, and the implementation was even smoother than we expected. Within 6 weeks, we saw a 28% improvement in order fulfillment rates."
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-muted-foreground/20 flex items-center justify-center mr-3">
                    <Users className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">Jennifer Wilson</p>
                    <p className="text-sm text-muted-foreground">Operations Director, Retail Solutions Inc.</p>
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
                Ready to Transform Your Supply Chain?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of businesses that have optimized their supply chain operations with our platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <a href="#top">Request Demo Now</a>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                  <Link href="/pricing">View Pricing</Link>
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