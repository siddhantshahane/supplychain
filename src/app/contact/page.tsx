"use client"

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Building, 
  CheckCircle2, 
  MessageSquare, 
  ChevronRight, 
  Globe 
} from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    department: "",
  });
  
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, department: value }));
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
        subject: "",
        message: "",
        department: "",
      });
    }, 1500);
  };

  const officeLocations = [
    {
      city: "New York",
      address: "123 Supply Chain Avenue, New York, NY 10001",
      phone: "+1 (212) 555-7890",
      email: "nyc@Supply2Uchain.com",
      hours: "Monday - Friday: 9AM - 6PM ET"
    },
    {
      city: "London",
      address: "45 Logistics Road, London, EC2A 4BQ, UK",
      phone: "+44 20 7946 0958",
      email: "london@Supply2Uchain.com",
      hours: "Monday - Friday: 9AM - 6PM GMT"
    },
    {
      city: "Singapore",
      address: "78 Supply Tower, Level 23, Singapore 018956",
      phone: "+65 6123 4567",
      email: "singapore@Supply2Uchain.com",
      hours: "Monday - Friday: 9AM - 6PM SGT"
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
                Get in Touch
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Have questions about our platform or need personalized assistance? 
                Our team is here to help you streamline your supply chain operations.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-12 md:py-20 bg-background">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Contact Form */}
              <div>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>

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
                      <Label htmlFor="email">Email</Label>
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
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="department">Department</Label>
                      <Select 
                        value={formState.department}
                        onValueChange={handleSelectChange}
                      >
                        <SelectTrigger id="department">
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sales">Sales</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="billing">Billing & Account</SelectItem>
                          <SelectItem value="partnership">Partnerships</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      name="subject" 
                      placeholder="How can we help?" 
                      value={formState.subject}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="Describe your inquiry in detail..." 
                      value={formState.message}
                      onChange={handleInputChange}
                      rows={6} 
                      required 
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full md:w-auto" 
                    disabled={formStatus === "submitting"}
                  >
                    {formStatus === "submitting" ? "Sending..." : "Send Message"}
                  </Button>
                  
                  {formStatus === "success" && (
                    <div className="flex items-center gap-2 text-sm text-green-500 mt-4">
                      <CheckCircle2 className="h-5 w-5" />
                      <span>Your message has been sent successfully!</span>
                    </div>
                  )}
                </form>
              </div>
              
              {/* Contact Information */}
              <div>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                  <p className="text-muted-foreground">
                    You can reach out to us through various channels or visit our offices in person.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email Us</h3>
                      <p className="text-muted-foreground text-sm mt-1">For general inquiries</p>
                      <a href="mailto:info@Supply2Uchain.com" className="text-primary hover:underline">info@Supply2Uchain.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Call Us</h3>
                      <p className="text-muted-foreground text-sm mt-1">Monday - Friday, 9AM - 6PM ET</p>
                      <a href="tel:+18005551234" className="text-primary hover:underline">+1 (800) 555-1234</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Live Chat</h3>
                      <p className="text-muted-foreground text-sm mt-1">24/7 Support for customers</p>
                      <Button variant="link" className="px-0">Start Chat</Button>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Globe className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Social Media</h3>
                      <p className="text-muted-foreground text-sm mt-1">Follow us for updates</p>
                      <div className="flex gap-4 mt-2">
                        <Link href="https://twitter.com/Supply2Uchain" className="text-primary hover:underline">Twitter</Link>
                        <Link href="https://linkedin.com/company/Supply2Uchain" className="text-primary hover:underline">LinkedIn</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="py-12 md:py-20 bg-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                Our Global Offices
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                With offices across the globe, we provide localized support and expertise for your supply chain needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {officeLocations.map((office, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="h-48 bg-muted-foreground/10 flex items-center justify-center">
                    <MapPin className="h-12 w-12 text-muted-foreground/30" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">{office.city}</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Building className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                        <span className="text-sm">{office.address}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                        <span className="text-sm">{office.phone}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Mail className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                        <span className="text-sm">{office.email}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                        <span className="text-sm">{office.hours}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ CTA */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="rounded-lg bg-muted p-8 relative overflow-hidden">
              <div className="relative z-10 max-w-2xl">
                <h2 className="text-2xl font-bold mb-4">Looking for answers?</h2>
                <p className="text-muted-foreground mb-6">
                  Check our comprehensive FAQ section to find quick answers to common questions about our platform.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/help" className="flex items-center gap-2">
                    Visit Help Center
                    <ChevronRight className="h-4 w-4" />
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