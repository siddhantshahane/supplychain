"use client"

import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  Globe, 
  HeartHandshake, 
  GraduationCap, 
  BadgeCheck, 
  Clock, 
  Building, 
  Home, 
  Briefcase,
  Heart,
  Laptop,
  Medal,
  ChevronRight
} from "lucide-react";

export default function Careers() {
  const jobListings = [
    {
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "New York or Remote",
      type: "Full-time",
      description: "We're looking for experienced software engineers to help build the next generation of our supply chain platform. You'll work on complex problems involving inventory optimization, real-time data processing, and user experience improvements.",
      responsibilities: [
        "Design and implement new features for our core platform",
        "Work with product managers to refine requirements and provide technical expertise",
        "Mentor junior engineers and participate in code reviews",
        "Collaborate with the data science team to integrate advanced analytics capabilities"
      ],
      requirements: [
        "5+ years of professional software development experience",
        "Strong experience with JavaScript/TypeScript and modern web frameworks (React, Next.js)",
        "Background in building scalable backend systems (Node.js, Python, or similar)",
        "Experience with cloud infrastructure (AWS, Azure, or GCP)"
      ]
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "London or Remote",
      type: "Full-time",
      description: "We're seeking a product manager to lead the development of our inventory management module. You'll work closely with customers, engineers, and designers to build features that solve real-world supply chain challenges.",
      responsibilities: [
        "Define product requirements based on market research and customer feedback",
        "Prioritize features and create detailed user stories and specifications",
        "Collaborate with engineering and design teams to deliver high-quality products",
        "Track product metrics and iterate based on user feedback"
      ],
      requirements: [
        "3+ years of product management experience, preferably in SaaS or enterprise software",
        "Excellent communication and stakeholder management skills",
        "Ability to translate complex business requirements into clear product specifications",
        "Data-driven approach to product development and decision making"
      ]
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Singapore or Remote",
      type: "Full-time",
      description: "As a Customer Success Manager, you'll ensure our customers get maximum value from our platform. You'll build relationships with key stakeholders, help them achieve their supply chain goals, and identify opportunities for growth.",
      responsibilities: [
        "Serve as the primary point of contact for a portfolio of enterprise customers",
        "Develop deep understanding of customer business objectives and help them achieve success",
        "Identify expansion opportunities and work with sales on account growth",
        "Monitor product usage and customer health metrics"
      ],
      requirements: [
        "3+ years of customer success or account management experience in B2B software",
        "Strong communication and relationship building skills",
        "Experience with supply chain, logistics, or inventory management a plus",
        "Data-driven approach to measuring and improving customer outcomes"
      ]
    },
    {
      title: "Data Scientist",
      department: "Data Science",
      location: "New York or Remote",
      type: "Full-time",
      description: "Join our data science team to develop predictive models that help businesses optimize inventory levels, forecast demand, and identify supply chain risks. You'll work with large datasets and implement machine learning algorithms that deliver real business value.",
      responsibilities: [
        "Develop and deploy predictive models for inventory optimization and demand forecasting",
        "Work with engineering to integrate models into our product",
        "Analyze customer data to identify patterns and insights",
        "Stay current with latest research in machine learning and supply chain optimization"
      ],
      requirements: [
        "MS or PhD in Data Science, Computer Science, Statistics, or related field",
        "3+ years of experience applying machine learning to business problems",
        "Strong programming skills in Python and familiarity with ML frameworks",
        "Experience with time series forecasting and optimization algorithms"
      ]
    }
  ];

  const benefits = [
    {
      title: "Competitive Compensation",
      description: "Salary packages in the top 25% of the market, with equity options for all full-time roles",
      icon: Medal
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision insurance, plus wellness stipend and mental health support",
      icon: Heart
    },
    {
      title: "Flexible Work",
      description: "Remote-first culture with flexible hours and generous paid time off policy",
      icon: Home
    },
    {
      title: "Professional Growth",
      description: "Learning and development budget, conference attendance, and clear career progression paths",
      icon: GraduationCap
    },
    {
      title: "Global Team",
      description: "Work with talented colleagues from diverse backgrounds across our global offices",
      icon: Globe
    },
    {
      title: "Modern Tech Stack",
      description: "We use the latest technologies and provide top-of-the-line equipment for all employees",
      icon: Laptop
    }
  ];

  const applicationSteps = [
    {
      title: "Application Review",
      description: "Our recruiting team reviews your application and matches your skills to our open positions."
    },
    {
      title: "Initial Interview",
      description: "A 30-minute call with a recruiter to discuss your background, experience, and expectations."
    },
    {
      title: "Technical Assessment",
      description: "Depending on the role, you may complete a take-home assignment or participate in a technical interview."
    },
    {
      title: "Team Interviews",
      description: "Meet with team members and stakeholders to assess skills fit and alignment with our values."
    },
    {
      title: "Final Interview",
      description: "Connect with a senior leader to discuss your potential impact and growth opportunities."
    },
    {
      title: "Offer & Onboarding",
      description: "Receive your offer and join our comprehensive onboarding program to set you up for success."
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
                Join Our Team
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Help us transform supply chain management with technology and innovation. 
                Build your career with a team that's passionate about solving complex problems.
              </p>
              <Button size="lg" asChild>
                <a href="#openings">View Open Positions</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-12 md:py-20 bg-background">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                Why Join Supply2Uchain?
              </h2>
              <p className="text-muted-foreground">
                We're building the future of supply chain management and need passionate people to join us.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 bg-muted rounded-lg">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <HeartHandshake className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Meaningful Impact</h3>
                <p className="text-muted-foreground">
                  Our platform helps businesses around the world streamline operations, reduce waste, and 
                  make better decisions. Your work will directly impact global supply chains.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 bg-muted rounded-lg">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <BadgeCheck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Growth & Learning</h3>
                <p className="text-muted-foreground">
                  We believe in continuous learning and development. You'll have opportunities to expand your 
                  skills, take on new challenges, and advance your career.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 bg-muted rounded-lg">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Collaborative Culture</h3>
                <p className="text-muted-foreground">
                  Join a diverse team of passionate experts who value collaboration, innovation, and supporting 
                  each other. We win together and learn together.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-12 md:py-20 bg-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                Employee Benefits
              </h2>
              <p className="text-muted-foreground">
                We offer competitive benefits to support your well-being, growth, and work-life balance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="openings" className="py-12 md:py-20 bg-background">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                Open Positions
              </h2>
              <p className="text-muted-foreground">
                Explore our current opportunities and find a role that matches your skills and interests.
              </p>
            </div>
            
            <Tabs defaultValue="all" className="max-w-4xl mx-auto">
              <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 mb-8">
                <TabsTrigger value="all">All Departments</TabsTrigger>
                <TabsTrigger value="engineering">Engineering</TabsTrigger>
                <TabsTrigger value="product">Product</TabsTrigger>
                <TabsTrigger value="customer">Customer Success</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="space-y-6">
                {jobListings.map((job, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <CardTitle className="text-xl">{job.title}</CardTitle>
                          <CardDescription className="flex flex-wrap gap-3 mt-2">
                            <span className="inline-flex items-center gap-1">
                              <Briefcase className="h-4 w-4" /> {job.department}
                            </span>
                            <span className="inline-flex items-center gap-1">
                              <Building className="h-4 w-4" /> {job.location}
                            </span>
                            <span className="inline-flex items-center gap-1">
                              <Clock className="h-4 w-4" /> {job.type}
                            </span>
                          </CardDescription>
                        </div>
                        <Button>Apply Now</Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{job.description}</p>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-bold mb-2">Responsibilities:</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            {job.responsibilities.map((item, i) => (
                              <li key={i} className="text-sm text-muted-foreground">{item}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-bold mb-2">Requirements:</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            {job.requirements.map((item, i) => (
                              <li key={i} className="text-sm text-muted-foreground">{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="bg-muted/50 border-t">
                      <Button variant="link" className="gap-1 ml-auto" asChild>
                        <Link href={`/careers/apply?job=${encodeURIComponent(job.title)}`}>
                          View Full Description & Apply
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </TabsContent>
              
              <TabsContent value="engineering" className="space-y-6">
                {jobListings
                  .filter(job => job.department === "Engineering" || job.department === "Data Science")
                  .map((job, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div>
                            <CardTitle className="text-xl">{job.title}</CardTitle>
                            <CardDescription className="flex flex-wrap gap-3 mt-2">
                              <span className="inline-flex items-center gap-1">
                                <Briefcase className="h-4 w-4" /> {job.department}
                              </span>
                              <span className="inline-flex items-center gap-1">
                                <Building className="h-4 w-4" /> {job.location}
                              </span>
                              <span className="inline-flex items-center gap-1">
                                <Clock className="h-4 w-4" /> {job.type}
                              </span>
                            </CardDescription>
                          </div>
                          <Button>Apply Now</Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{job.description}</p>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-bold mb-2">Responsibilities:</h4>
                            <ul className="list-disc pl-5 space-y-1">
                              {job.responsibilities.map((item, i) => (
                                <li key={i} className="text-sm text-muted-foreground">{item}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-bold mb-2">Requirements:</h4>
                            <ul className="list-disc pl-5 space-y-1">
                              {job.requirements.map((item, i) => (
                                <li key={i} className="text-sm text-muted-foreground">{item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="bg-muted/50 border-t">
                        <Button variant="link" className="gap-1 ml-auto" asChild>
                          <Link href={`/careers/apply?job=${encodeURIComponent(job.title)}`}>
                            View Full Description & Apply
                            <ChevronRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </TabsContent>
              
              <TabsContent value="product" className="space-y-6">
                {jobListings
                  .filter(job => job.department === "Product")
                  .map((job, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div>
                            <CardTitle className="text-xl">{job.title}</CardTitle>
                            <CardDescription className="flex flex-wrap gap-3 mt-2">
                              <span className="inline-flex items-center gap-1">
                                <Briefcase className="h-4 w-4" /> {job.department}
                              </span>
                              <span className="inline-flex items-center gap-1">
                                <Building className="h-4 w-4" /> {job.location}
                              </span>
                              <span className="inline-flex items-center gap-1">
                                <Clock className="h-4 w-4" /> {job.type}
                              </span>
                            </CardDescription>
                          </div>
                          <Button>Apply Now</Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{job.description}</p>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-bold mb-2">Responsibilities:</h4>
                            <ul className="list-disc pl-5 space-y-1">
                              {job.responsibilities.map((item, i) => (
                                <li key={i} className="text-sm text-muted-foreground">{item}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-bold mb-2">Requirements:</h4>
                            <ul className="list-disc pl-5 space-y-1">
                              {job.requirements.map((item, i) => (
                                <li key={i} className="text-sm text-muted-foreground">{item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="bg-muted/50 border-t">
                        <Button variant="link" className="gap-1 ml-auto" asChild>
                          <Link href={`/careers/apply?job=${encodeURIComponent(job.title)}`}>
                            View Full Description & Apply
                            <ChevronRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </TabsContent>
              
              <TabsContent value="customer" className="space-y-6">
                {jobListings
                  .filter(job => job.department === "Customer Success")
                  .map((job, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div>
                            <CardTitle className="text-xl">{job.title}</CardTitle>
                            <CardDescription className="flex flex-wrap gap-3 mt-2">
                              <span className="inline-flex items-center gap-1">
                                <Briefcase className="h-4 w-4" /> {job.department}
                              </span>
                              <span className="inline-flex items-center gap-1">
                                <Building className="h-4 w-4" /> {job.location}
                              </span>
                              <span className="inline-flex items-center gap-1">
                                <Clock className="h-4 w-4" /> {job.type}
                              </span>
                            </CardDescription>
                          </div>
                          <Button>Apply Now</Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{job.description}</p>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-bold mb-2">Responsibilities:</h4>
                            <ul className="list-disc pl-5 space-y-1">
                              {job.responsibilities.map((item, i) => (
                                <li key={i} className="text-sm text-muted-foreground">{item}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-bold mb-2">Requirements:</h4>
                            <ul className="list-disc pl-5 space-y-1">
                              {job.requirements.map((item, i) => (
                                <li key={i} className="text-sm text-muted-foreground">{item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="bg-muted/50 border-t">
                        <Button variant="link" className="gap-1 ml-auto" asChild>
                          <Link href={`/careers/apply?job=${encodeURIComponent(job.title)}`}>
                            View Full Description & Apply
                            <ChevronRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-12 md:py-20 bg-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                Our Application Process
              </h2>
              <p className="text-muted-foreground">
                We've designed a fair and thorough process to find the right candidates for our team.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto relative">
              {/* Process line */}
              <div className="absolute left-16 top-0 bottom-0 w-[2px] bg-border hidden md:block"></div>
              
              {/* Process steps */}
              <div className="space-y-10">
                {applicationSteps.map((step, index) => (
                  <div key={index} className="flex gap-8 items-start relative">
                    <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shrink-0 z-10">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Employee Testimonial */}
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
                  "Joining Supply2Uchain was one of the best career decisions I've made. I'm constantly challenged to grow, have the opportunity to work on meaningful problems, and collaborate with some of the smartest people I've ever met. The company truly invests in its employees and creates an environment where everyone can thrive."
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-muted-foreground/20 flex items-center justify-center mr-3">
                    <Users className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">Alex Martinez</p>
                    <p className="text-sm text-muted-foreground">Software Engineer, 2 years at Supply2Uchain</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-muted to-background">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
                Ready to Join Our Team?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Take the first step towards a rewarding career at Supply2Uchain. Browse our openings and apply today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <a href="#openings">View All Positions</a>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                  <Link href="/contact">Contact Recruiting</Link>
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