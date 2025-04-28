import React from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Save, Upload, Calendar, FileText, AlertTriangle } from "lucide-react";
import { cardHoverClass } from "@/lib/utils";
import { cn } from "@/lib/utils";

export default function NewContractPage() {
  return (
    <main className="flex-1 py-4 md:py-8">
      <div className="container px-4 md:px-6 max-w-full">
        <div className="flex flex-col justify-between items-start mb-6 md:mb-8 gap-3">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/dashboard/suppliers/contracts">
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight">New Supplier Contract</h1>
              <p className="text-sm md:text-base text-muted-foreground">Create a new contract with a supplier</p>
            </div>
          </div>
        </div>
        
        <Tabs defaultValue="details" className="mb-6 md:mb-8">
          <TabsList className="w-full overflow-x-auto flex flex-nowrap justify-start md:justify-center p-1 mb-1">
            <TabsTrigger value="details" className="flex-none">Contract Details</TabsTrigger>
            <TabsTrigger value="terms" className="flex-none">Terms & Conditions</TabsTrigger>
            <TabsTrigger value="documents" className="flex-none">Documents</TabsTrigger>
          </TabsList>
          
          <TabsContent value="details" className="space-y-5 md:space-y-6">
            <Card className={cardHoverClass}>
              <CardHeader className="pt-4 px-4">
                <CardTitle>Contract Information</CardTitle>
                <CardDescription>Enter the basic information for the new contract</CardDescription>
              </CardHeader>
              <CardContent className="px-4 pb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contract-id">Contract ID</Label>
                    <Input id="contract-id" placeholder="CTR-2023-XXX" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="supplier">Supplier</Label>
                    <Select>
                      <SelectTrigger id="supplier">
                        <SelectValue placeholder="Select supplier" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="global-manufacturing">Global Manufacturing Co.</SelectItem>
                        <SelectItem value="tech-components">Tech Components Ltd</SelectItem>
                        <SelectItem value="pacific-electronics">Pacific Electronics</SelectItem>
                        <SelectItem value="quality-parts">Quality Parts Inc</SelectItem>
                        <SelectItem value="logistics-solutions">Logistics Solutions</SelectItem>
                        <SelectItem value="raw-materials">Raw Materials Co</SelectItem>
                        <SelectItem value="new-supplier">+ Add New Supplier</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contract-type">Contract Type</Label>
                    <Select>
                      <SelectTrigger id="contract-type">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                        <SelectItem value="distribution">Distribution</SelectItem>
                        <SelectItem value="logistics">Logistics</SelectItem>
                        <SelectItem value="parts">Parts Supply</SelectItem>
                        <SelectItem value="raw-materials">Raw Materials</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contract-value">Contract Value</Label>
                    <Input id="contract-value" placeholder="$0.00" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="start-date">Start Date</Label>
                    <div className="relative">
                      <Input id="start-date" type="date" />
                      <Calendar className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="end-date">End Date</Label>
                    <div className="relative">
                      <Input id="end-date" type="date" />
                      <Calendar className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="payment-terms">Payment Terms</Label>
                    <Select>
                      <SelectTrigger id="payment-terms">
                        <SelectValue placeholder="Select terms" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="net-15">Net 15</SelectItem>
                        <SelectItem value="net-30">Net 30</SelectItem>
                        <SelectItem value="net-45">Net 45</SelectItem>
                        <SelectItem value="net-60">Net 60</SelectItem>
                        <SelectItem value="immediate">Immediate</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="status">Status</Label>
                    <Select>
                      <SelectTrigger id="status">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="pending">Pending Approval</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="expired">Expired</SelectItem>
                        <SelectItem value="terminated">Terminated</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className={cardHoverClass}>
              <CardHeader className="pt-4 px-4">
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Primary contact details for this contract</CardDescription>
              </CardHeader>
              <CardContent className="px-4 pb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Contact Name</Label>
                    <Input id="contact-name" placeholder="Full name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-title">Contact Title</Label>
                    <Input id="contact-title" placeholder="Job title" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email</Label>
                    <Input id="contact-email" type="email" placeholder="email@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-phone">Phone</Label>
                    <Input id="contact-phone" placeholder="+1 (555) 123-4567" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex justify-end gap-2">
              <Button variant="outline" asChild>
                <Link href="/dashboard/suppliers/contracts">Cancel</Link>
              </Button>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Save Draft
              </Button>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Submit for Approval
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="terms" className="space-y-5 md:space-y-6">
            <Card className={cardHoverClass}>
              <CardHeader className="pt-4 px-4">
                <CardTitle>Terms & Conditions</CardTitle>
                <CardDescription>Define the terms and conditions for this contract</CardDescription>
              </CardHeader>
              <CardContent className="px-4 pb-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="scope">Scope of Work</Label>
                    <Textarea id="scope" placeholder="Describe the scope of work for this contract..." className="min-h-[100px]" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="deliverables">Deliverables</Label>
                    <Textarea id="deliverables" placeholder="List the deliverables for this contract..." className="min-h-[100px]" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="payment-schedule">Payment Schedule</Label>
                    <Textarea id="payment-schedule" placeholder="Describe the payment schedule..." className="min-h-[100px]" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="termination">Termination Conditions</Label>
                    <Textarea id="termination" placeholder="Describe the termination conditions..." className="min-h-[100px]" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="additional-terms">Additional Terms</Label>
                    <Textarea id="additional-terms" placeholder="Any additional terms and conditions..." className="min-h-[100px]" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex justify-end gap-2">
              <Button variant="outline" asChild>
                <Link href="/dashboard/suppliers/contracts">Cancel</Link>
              </Button>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Save Draft
              </Button>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Submit for Approval
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="documents" className="space-y-5 md:space-y-6">
            <Card className={cardHoverClass}>
              <CardHeader className="pt-4 px-4">
                <CardTitle>Contract Documents</CardTitle>
                <CardDescription>Upload and manage documents related to this contract</CardDescription>
              </CardHeader>
              <CardContent className="px-4 pb-4">
                <div className="space-y-4">
                  <div className="border-2 border-dashed rounded-md p-6 text-center">
                    <Upload className="mx-auto h-10 w-10 text-muted-foreground" />
                    <h3 className="mt-2 text-sm font-medium">Upload Contract Documents</h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Drag and drop files here, or click to select files
                    </p>
                    <Button className="mt-4" variant="outline">
                      Select Files
                    </Button>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Required Documents</Label>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 border rounded-md">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">Signed Contract</span>
                        </div>
                        <Button variant="ghost" size="sm">Upload</Button>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-md">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">Statement of Work</span>
                        </div>
                        <Button variant="ghost" size="sm">Upload</Button>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-md">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">Pricing Agreement</span>
                        </div>
                        <Button variant="ghost" size="sm">Upload</Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Additional Documents</Label>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 border rounded-md">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">Supplier Insurance</span>
                        </div>
                        <Button variant="ghost" size="sm">Upload</Button>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-md">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">Compliance Certificates</span>
                        </div>
                        <Button variant="ghost" size="sm">Upload</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex justify-end gap-2">
              <Button variant="outline" asChild>
                <Link href="/dashboard/suppliers/contracts">Cancel</Link>
              </Button>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Save Draft
              </Button>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Submit for Approval
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
} 