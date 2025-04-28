"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle, Bell, Database, Globe, Lock, Mail, Palette, Save, Shield, User, Users } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    lowStockAlerts: true,
    orderUpdates: true,
    supplierUpdates: true,
    weeklyReports: false,
    monthlyReports: true,
  });

  const [appearance, setAppearance] = useState({
    theme: "system",
    density: "comfortable",
    animations: true,
  });

  const [security, setSecurity] = useState({
    twoFactorAuth: false,
    sessionTimeout: "30",
    passwordExpiry: "90",
  });

  const [integrations, setIntegrations] = useState({
    erp: "sap",
    accounting: "quickbooks",
    shipping: "fedex",
    analytics: "google",
  });

  return (
    <div className="py-6 md:py-8">
      <div className="container px-4 md:px-6 max-w-full">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 md:mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-1">
              Settings
            </h1>
            <p className="text-muted-foreground">
              Manage your application settings and preferences
            </p>
          </div>
        </div>

        <Tabs defaultValue="general" className="space-y-5 md:space-y-6">
          <div className="flex justify-center w-full">
            <TabsList className="w-full max-w-2xl bg-muted text-muted-foreground inline-flex h-9 items-center justify-center rounded-lg p-[3px]">
              <TabsTrigger value="general" className="flex-1 text-center">
                <User className="h-4 w-4 mr-2" />
                <span className="truncate">General</span>
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex-1 text-center">
                <Bell className="h-4 w-4 mr-2" />
                <span className="truncate">Notifications</span>
              </TabsTrigger>
              <TabsTrigger value="appearance" className="flex-1 text-center">
                <Palette className="h-4 w-4 mr-2" />
                <span className="truncate">Appearance</span>
              </TabsTrigger>
              <TabsTrigger value="security" className="flex-1 text-center">
                <Lock className="h-4 w-4 mr-2" />
                <span className="truncate">Security</span>
              </TabsTrigger>
              <TabsTrigger value="integrations" className="flex-1 text-center">
                <Database className="h-4 w-4 mr-2" />
                <span className="truncate">Integrations</span>
              </TabsTrigger>
            </TabsList>
          </div>

          {/* General Settings */}
          <TabsContent value="general" className="space-y-5 md:space-y-6">
            <div className="grid grid-cols-1 gap-5 md:gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Company Information</CardTitle>
                  <CardDescription>
                    Update your company details and contact information
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company-name">Company Name</Label>
                      <Input id="company-name" placeholder="Acme Corporation" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company-email">Company Email</Label>
                      <Input id="company-email" type="email" placeholder="contact@acme.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company-phone">Phone Number</Label>
                      <Input id="company-phone" placeholder="+1 (555) 123-4567" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company-website">Website</Label>
                      <Input id="company-website" placeholder="https://acme.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company-address">Address</Label>
                    <Textarea id="company-address" placeholder="123 Main St, Suite 100, City, State, ZIP" />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>User Preferences</CardTitle>
                  <CardDescription>
                    Configure your personal preferences and default settings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="language">Language</Label>
                      <Select defaultValue="en">
                        <SelectTrigger id="language">
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="es">Spanish</SelectItem>
                          <SelectItem value="fr">French</SelectItem>
                          <SelectItem value="de">German</SelectItem>
                          <SelectItem value="zh">Chinese</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timezone">Timezone</Label>
                      <Select defaultValue="utc">
                        <SelectTrigger id="timezone">
                          <SelectValue placeholder="Select timezone" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="utc">UTC</SelectItem>
                          <SelectItem value="est">Eastern Time (ET)</SelectItem>
                          <SelectItem value="cst">Central Time (CT)</SelectItem>
                          <SelectItem value="mst">Mountain Time (MT)</SelectItem>
                          <SelectItem value="pst">Pacific Time (PT)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="date-format">Date Format</Label>
                      <Select defaultValue="mm/dd/yyyy">
                        <SelectTrigger id="date-format">
                          <SelectValue placeholder="Select date format" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mm/dd/yyyy">MM/DD/YYYY</SelectItem>
                          <SelectItem value="dd/mm/yyyy">DD/MM/YYYY</SelectItem>
                          <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="currency">Currency</Label>
                      <Select defaultValue="usd">
                        <SelectTrigger id="currency">
                          <SelectValue placeholder="Select currency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="usd">USD ($)</SelectItem>
                          <SelectItem value="eur">EUR (€)</SelectItem>
                          <SelectItem value="gbp">GBP (£)</SelectItem>
                          <SelectItem value="jpy">JPY (¥)</SelectItem>
                          <SelectItem value="inr">INR (₹)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          {/* Notifications Settings */}
          <TabsContent value="notifications" className="space-y-5 md:space-y-6">
            <div className="grid grid-cols-1 gap-5 md:gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Email Notifications</CardTitle>
                  <CardDescription>
                    Configure which notifications you receive via email
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Email Alerts</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive notifications via email
                      </p>
                    </div>
                    <Switch 
                      checked={notifications.emailAlerts} 
                      onCheckedChange={(checked) => setNotifications({...notifications, emailAlerts: checked})} 
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Low Stock Alerts</Label>
                      <p className="text-sm text-muted-foreground">
                        Get notified when inventory is running low
                      </p>
                    </div>
                    <Switch 
                      checked={notifications.lowStockAlerts} 
                      onCheckedChange={(checked) => setNotifications({...notifications, lowStockAlerts: checked})} 
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Order Updates</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive updates about order status changes
                      </p>
                    </div>
                    <Switch 
                      checked={notifications.orderUpdates} 
                      onCheckedChange={(checked) => setNotifications({...notifications, orderUpdates: checked})} 
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Supplier Updates</Label>
                      <p className="text-sm text-muted-foreground">
                        Get notified about supplier-related updates
                      </p>
                    </div>
                    <Switch 
                      checked={notifications.supplierUpdates} 
                      onCheckedChange={(checked) => setNotifications({...notifications, supplierUpdates: checked})} 
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Report Notifications</CardTitle>
                  <CardDescription>
                    Configure which reports you receive automatically
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Weekly Reports</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive weekly performance reports
                      </p>
                    </div>
                    <Switch 
                      checked={notifications.weeklyReports} 
                      onCheckedChange={(checked) => setNotifications({...notifications, weeklyReports: checked})} 
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Monthly Reports</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive monthly performance reports
                      </p>
                    </div>
                    <Switch 
                      checked={notifications.monthlyReports} 
                      onCheckedChange={(checked) => setNotifications({...notifications, monthlyReports: checked})} 
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          {/* Appearance Settings */}
          <TabsContent value="appearance" className="space-y-5 md:space-y-6">
            <div className="grid grid-cols-1 gap-5 md:gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Theme Settings</CardTitle>
                  <CardDescription>
                    Customize the appearance of your application
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="theme">Theme</Label>
                    <Select 
                      value={appearance.theme} 
                      onValueChange={(value) => setAppearance({...appearance, theme: value})}
                    >
                      <SelectTrigger id="theme">
                        <SelectValue placeholder="Select theme" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-muted-foreground">
                      Choose between light, dark, or system theme
                    </p>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <Label htmlFor="density">Density</Label>
                    <Select 
                      value={appearance.density} 
                      onValueChange={(value) => setAppearance({...appearance, density: value})}
                    >
                      <SelectTrigger id="density">
                        <SelectValue placeholder="Select density" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="comfortable">Comfortable</SelectItem>
                        <SelectItem value="compact">Compact</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-muted-foreground">
                      Adjust the spacing and size of UI elements
                    </p>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Animations</Label>
                      <p className="text-sm text-muted-foreground">
                        Enable or disable UI animations
                      </p>
                    </div>
                    <Switch 
                      checked={appearance.animations} 
                      onCheckedChange={(checked) => setAppearance({...appearance, animations: checked})} 
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          {/* Security Settings */}
          <TabsContent value="security" className="space-y-5 md:space-y-6">
            <div className="grid grid-cols-1 gap-5 md:gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>
                    Configure your security preferences and authentication settings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Two-Factor Authentication</Label>
                      <p className="text-sm text-muted-foreground">
                        Add an extra layer of security to your account
                      </p>
                    </div>
                    <Switch 
                      checked={security.twoFactorAuth} 
                      onCheckedChange={(checked) => setSecurity({...security, twoFactorAuth: checked})} 
                    />
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
                    <Select 
                      value={security.sessionTimeout} 
                      onValueChange={(value) => setSecurity({...security, sessionTimeout: value})}
                    >
                      <SelectTrigger id="session-timeout">
                        <SelectValue placeholder="Select timeout" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15">15 minutes</SelectItem>
                        <SelectItem value="30">30 minutes</SelectItem>
                        <SelectItem value="60">1 hour</SelectItem>
                        <SelectItem value="120">2 hours</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-muted-foreground">
                      Automatically log out after inactivity
                    </p>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <Label htmlFor="password-expiry">Password Expiry (days)</Label>
                    <Select 
                      value={security.passwordExpiry} 
                      onValueChange={(value) => setSecurity({...security, passwordExpiry: value})}
                    >
                      <SelectTrigger id="password-expiry">
                        <SelectValue placeholder="Select expiry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30">30 days</SelectItem>
                        <SelectItem value="60">60 days</SelectItem>
                        <SelectItem value="90">90 days</SelectItem>
                        <SelectItem value="180">180 days</SelectItem>
                        <SelectItem value="365">365 days</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-muted-foreground">
                      Require password change after specified days
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>

              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Security Recommendation</AlertTitle>
                <AlertDescription>
                  We recommend enabling two-factor authentication to enhance the security of your account.
                </AlertDescription>
              </Alert>
            </div>
          </TabsContent>

          {/* Integrations Settings */}
          <TabsContent value="integrations" className="space-y-5 md:space-y-6">
            <div className="grid grid-cols-1 gap-5 md:gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>System Integrations</CardTitle>
                  <CardDescription>
                    Connect your supply chain management system with other platforms
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="erp">ERP System</Label>
                    <Select 
                      value={integrations.erp} 
                      onValueChange={(value) => setIntegrations({...integrations, erp: value})}
                    >
                      <SelectTrigger id="erp">
                        <SelectValue placeholder="Select ERP system" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sap">SAP</SelectItem>
                        <SelectItem value="oracle">Oracle</SelectItem>
                        <SelectItem value="microsoft">Microsoft Dynamics</SelectItem>
                        <SelectItem value="netsuite">NetSuite</SelectItem>
                        <SelectItem value="none">None</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <Label htmlFor="accounting">Accounting Software</Label>
                    <Select 
                      value={integrations.accounting} 
                      onValueChange={(value) => setIntegrations({...integrations, accounting: value})}
                    >
                      <SelectTrigger id="accounting">
                        <SelectValue placeholder="Select accounting software" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="quickbooks">QuickBooks</SelectItem>
                        <SelectItem value="xero">Xero</SelectItem>
                        <SelectItem value="sage">Sage</SelectItem>
                        <SelectItem value="freshbooks">FreshBooks</SelectItem>
                        <SelectItem value="none">None</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <Label htmlFor="shipping">Shipping Provider</Label>
                    <Select 
                      value={integrations.shipping} 
                      onValueChange={(value) => setIntegrations({...integrations, shipping: value})}
                    >
                      <SelectTrigger id="shipping">
                        <SelectValue placeholder="Select shipping provider" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fedex">FedEx</SelectItem>
                        <SelectItem value="ups">UPS</SelectItem>
                        <SelectItem value="dhl">DHL</SelectItem>
                        <SelectItem value="usps">USPS</SelectItem>
                        <SelectItem value="none">None</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <Label htmlFor="analytics">Analytics Platform</Label>
                    <Select 
                      value={integrations.analytics} 
                      onValueChange={(value) => setIntegrations({...integrations, analytics: value})}
                    >
                      <SelectTrigger id="analytics">
                        <SelectValue placeholder="Select analytics platform" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="google">Google Analytics</SelectItem>
                        <SelectItem value="mixpanel">Mixpanel</SelectItem>
                        <SelectItem value="amplitude">Amplitude</SelectItem>
                        <SelectItem value="segment">Segment</SelectItem>
                        <SelectItem value="none">None</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>

              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Integration Note</AlertTitle>
                <AlertDescription>
                  Some integrations may require additional setup or API keys. Please contact support for assistance.
                </AlertDescription>
              </Alert>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
} 