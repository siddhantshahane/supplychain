"use client"

import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  BarChart, 
  Timer, 
  Award, 
  Target, 
  Compass, 
  Heart, 
  Shield, 
  Sparkles,
  Star,
  Globe
} from "lucide-react";

export default function About() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      bio: "With over 20 years of experience in supply chain management and business operations, Sarah has led Supply2Uchain from startup to industry leader.",
      image: "/images/team/placeholder.png"
    },
    {
      name: "David Chen",
      role: "Chief Technology Officer",
      bio: "David brings 15+ years of experience in enterprise software development and cloud architecture, leading our engineering team to build innovative solutions.",
      image: "/images/team/placeholder.png"
    },
    {
      name: "Maria Rodriguez",
      role: "Chief Product Officer",
      bio: "Maria has deep expertise in logistics and inventory management systems, ensuring our platform meets the evolving needs of supply chain professionals.",
      image: "/images/team/placeholder.png"
    },
    {
      name: "James Wilson",
      role: "VP of Customer Success",
      bio: "James ensures our customers get maximum value from our platform with his extensive background in operations management and customer support.",
      image: "/images/team/placeholder.png"
    },
  ];

  const companyTimeline = [
    {
      year: "2018",
      title: "Company Founded",
      description: "Supply2Uchain was founded with a mission to bring modern technology to supply chain management."
    },
    {
      year: "2019",
      title: "First Product Launch",
      description: "Released our core inventory management platform with initial customers in manufacturing and retail."
    },
    {
      year: "2020",
      title: "Series A Funding",
      description: "Secured $12M in Series A funding to expand product capabilities and grow the team."
    },
    {
      year: "2021",
      title: "Global Expansion",
      description: "Opened offices in London and Singapore to support our growing international customer base."
    },
    {
      year: "2022",
      title: "Advanced Analytics Launch",
      description: "Released our predictive analytics module with machine learning capabilities for demand forecasting."
    },
    {
      year: "2023",
      title: "Enterprise Client Growth",
      description: "Expanded our enterprise client base to include Fortune 500 companies across multiple industries."
    },
    {
      year: "2024",
      title: "Series B Funding",
      description: "Secured $40M in Series B funding to accelerate product development and international expansion."
    }
  ];

  const coreValues = [
    {
      title: "Innovation",
      description: "We continuously push the boundaries of what's possible in supply chain technology.",
      icon: Sparkles
    },
    {
      title: "Customer Success",
      description: "We are dedicated to our customers' success and measure our own success by their outcomes.",
      icon: Target
    },
    {
      title: "Integrity",
      description: "We operate with honesty, transparency, and ethical business practices in all we do.",
      icon: Shield
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork, both within our company and with our customers.",
      icon: Users
    },
    {
      title: "Excellence",
      description: "We strive for excellence in our products, services, and customer experiences.",
      icon: Award
    },
    {
      title: "Global Perspective",
      description: "We embrace diverse perspectives and build solutions for a global market.",
      icon: Globe
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
                About Supply2Uchain
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                We're transforming supply chain management with modern technology and data-driven insights.
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-12 md:py-20 bg-background">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
                  Our Story
                </h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Founded in 2018, Supply2Uchain was born from a simple observation: supply chain management was stuck in the past, relying on outdated systems and manual processes.
                  </p>
                  <p className="text-muted-foreground">
                    Our founders, with decades of experience in logistics and technology, set out to build a platform that would bring modern cloud technology, automation, and predictive analytics to supply chain operations.
                  </p>
                  <p className="text-muted-foreground">
                    Today, Supply2Uchain serves customers across manufacturing, retail, distribution, and healthcare industries, with offices in New York, London, and Singapore. Our platform helps businesses of all sizes optimize their inventory, streamline supplier management, and gain real-time visibility into their entire supply chain.
                  </p>
                </div>
              </div>
              
              <div className="bg-muted rounded-lg p-8">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-primary/10 p-3 h-12 w-12 flex items-center justify-center rounded-lg shrink-0">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">500+ Customers</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Across 30+ countries and diverse industries
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="bg-primary/10 p-3 h-12 w-12 flex items-center justify-center rounded-lg shrink-0">
                      <BarChart className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">$50B+ in Inventory</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Managed through our platform annually
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="bg-primary/10 p-3 h-12 w-12 flex items-center justify-center rounded-lg shrink-0">
                      <Timer className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">35% Average Time Savings</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        For order processing and inventory management
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="bg-primary/10 p-3 h-12 w-12 flex items-center justify-center rounded-lg shrink-0">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Recognized Industry Leader</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Award-winning supply chain management platform
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="py-12 md:py-20 bg-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
                Our Mission and Vision
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="bg-background border-none h-full">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Target className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Our Mission</h3>
                    <p className="text-muted-foreground">
                      To empower businesses with the technology and insights they need to build resilient, 
                      efficient, and sustainable supply chains that drive growth and deliver exceptional 
                      customer experiences.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-background border-none h-full">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Compass className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Our Vision</h3>
                    <p className="text-muted-foreground">
                      To be the global leader in supply chain management software, creating a world where 
                      businesses of all sizes can optimize their operations, reduce waste, and respond 
                      rapidly to changing market conditions.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-12 md:py-20 bg-background">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
                Leadership Team
              </h2>
              <p className="text-muted-foreground">
                Meet the experienced team driving our innovation and growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="h-40 w-40 rounded-full bg-muted mb-4 flex items-center justify-center overflow-hidden">
                    <Users className="h-20 w-20 text-muted-foreground/30" />
                  </div>
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <p className="text-sm text-primary mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Timeline */}
        <section className="py-12 md:py-20 bg-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
                Our Journey
              </h2>
              <p className="text-muted-foreground">
                The key milestones in our growth from startup to industry leader.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] top-0 bottom-0 w-[2px] bg-border"></div>
              
              {/* Timeline entries */}
              <div className="space-y-12">
                {companyTimeline.map((entry, index) => (
                  <div key={index} className={`relative flex flex-col md:flex-row gap-8 items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="md:w-1/2 flex flex-col items-start md:items-end">
                      <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-start md:text-left' : 'md:items-end md:text-right'}`}>
                        <span className="text-3xl font-bold text-primary">{entry.year}</span>
                        <h3 className="text-lg font-bold">{entry.title}</h3>
                        <p className="text-sm text-muted-foreground">{entry.description}</p>
                      </div>
                    </div>
                    <div className="md:w-1/2 flex items-center justify-center md:justify-start">
                      <div className="absolute left-[-9px] md:left-1/2 md:transform md:translate-x-[-50%] w-5 h-5 rounded-full bg-primary"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-12 md:py-20 bg-background">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
                Our Core Values
              </h2>
              <p className="text-muted-foreground">
                The principles that guide our decisions and actions every day.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <Card key={index} className="bg-muted/50 border-none">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                        <value.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-muted to-background">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
                Join Us on Our Journey
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Partner with Supply2Uchain to transform your supply chain operations and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <Link href="/contact">Contact Our Team</Link>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                  <Link href="/careers">View Open Positions</Link>
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