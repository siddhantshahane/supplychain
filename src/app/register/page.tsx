"use client"

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardDivider, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Toast, ToastDescription, ToastProvider, ToastTitle } from "@/components/ui/toast";
import { Loader2, Mail, Lock, AlertCircle, KeyRound, ShieldCheck, UserPlus, ArrowRightCircle, User, Building, CheckCircle2 } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import axios from "axios";

// Define toast variant type
type ToastVariant = "default" | "destructive" | "success" | "info" | "warning";

// Temporary checkbox component until the UI checkbox is properly implemented
const Checkbox = ({ 
  id, 
  checked, 
  onCheckedChange 
}: { 
  id: string; 
  checked: boolean; 
  onCheckedChange: (checked: boolean) => void 
}) => {
  return (
    <input
      type="checkbox"
      id={id}
      checked={checked}
      onChange={(e) => onCheckedChange(e.target.checked)}
      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
    />
  );
};

export default function RegisterPage() {
  const router = useRouter();
  const { resolvedTheme } = useTheme();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState<{
    title: string;
    message: string;
    variant: ToastVariant;
  }>({ 
    title: "", 
    message: "", 
    variant: "default" 
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    
    if (!agreeTerms) {
      setError("You must agree to the Terms of Service and Privacy Policy");
      return;
    }
    
    setLoading(true);
    setError("");

    try {
      // Call the register API endpoint directly with axios
      console.log('Attempting registration with:', { name: fullName, email, company, password });
      const response = await axios.post('/api/auth/register', {
        name: fullName,
        email,
        company,
        password
      });
      
      console.log('Registration response:', response.data);
      
      // Show success toast
      setToastMessage({
        title: "Registration Successful",
        message: "Your account has been created. Redirecting to login...",
        variant: "success"
      });
      setShowToast(true);
      
      // Delay redirect for toast to be seen
      setTimeout(() => {
        router.push("/login");
      }, 2000);
      
    } catch (err: any) {
      console.error('Registration error:', err);
      if (err.response?.data?.detail) {
        setError(err.response.data.detail);
      } else {
        setError("An error occurred during registration. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  // Close toast after timeout
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        <section className="py-12 md:py-16 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              {/* Left side content - Registration form */}
              <div className="w-full lg:w-1/2 max-w-md mx-auto lg:mx-0">
                <h1 className="text-3xl font-bold tracking-tight gradient-text mb-6 text-center lg:text-left">Create your account</h1>
                
                <Card variant="elevated" className="w-full animate-fade-in">
                  <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-semibold">Join Supply2Uchain</CardTitle>
                    <CardDescription>Fill out the form below to create your account</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="fullName" className="text-sm font-medium flex items-center gap-2">
                          <User className="h-4 w-4 text-muted-foreground" />
                          Full Name
                        </label>
                        <Input
                          id="fullName"
                          type="text"
                          placeholder="John Smith"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="transition-all"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@company.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="transition-all"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-medium flex items-center gap-2">
                          <Building className="h-4 w-4 text-muted-foreground" />
                          Company
                        </label>
                        <Input
                          id="company"
                          type="text"
                          placeholder="Your Company Name"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          className="transition-all"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="password" className="text-sm font-medium flex items-center gap-2">
                          <Lock className="h-4 w-4 text-muted-foreground" />
                          Password
                        </label>
                        <Input
                          id="password"
                          type="password"
                          placeholder="••••••••"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="transition-all"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="confirmPassword" className="text-sm font-medium flex items-center gap-2">
                          <ShieldCheck className="h-4 w-4 text-muted-foreground" />
                          Confirm Password
                        </label>
                        <Input
                          id="confirmPassword"
                          type="password"
                          placeholder="••••••••"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          className="transition-all"
                          required
                        />
                      </div>
                      
                      {error && (
                        <div className="text-sm text-destructive flex items-center gap-2 p-3 rounded-md bg-destructive/10">
                          <AlertCircle className="h-4 w-4" />
                          {error}
                        </div>
                      )}
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="agreeTerms" 
                          checked={agreeTerms} 
                          onCheckedChange={(checked) => setAgreeTerms(checked)}
                        />
                        <label htmlFor="agreeTerms" className="text-sm cursor-pointer">
                          I agree to the{" "}
                          <Link href="/terms" className="text-primary hover:underline">
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link href="/privacy" className="text-primary hover:underline">
                            Privacy Policy
                          </Link>
                        </label>
                      </div>
                      
                      <Button 
                        type="submit" 
                        variant="gradient"
                        size="lg"
                        animation={loading ? "pulse" : "none"}
                        className="w-full transition-all"
                        disabled={loading || !agreeTerms}
                      >
                        {loading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Creating account...
                          </>
                        ) : (
                          <>
                            Create Account
                            <UserPlus className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                  
                  <CardDivider />
                  <CardFooter className="flex justify-center p-4">
                    <p className="text-sm text-muted-foreground">
                      Already have an account?{" "}
                      <Link 
                        href="/login" 
                        className="text-primary hover:underline hover:text-primary/80 font-medium transition-colors"
                      >
                        Sign in
                      </Link>
                    </p>
                  </CardFooter>
                </Card>
              </div>
              
              {/* Right side content - Features */}
              <div className="w-full lg:w-1/2">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold tracking-tight">Benefits of joining Supply2Uchain</h2>
                  <p className="text-muted-foreground">Create an account to access our comprehensive supply chain management platform.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <Card variant="interactive" className="bg-muted/50">
                      <CardHeader className="pb-2">
                        <div className="bg-primary/10 p-2 w-8 h-8 flex items-center justify-center rounded-lg">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                        </div>
                        <CardTitle className="text-base font-medium mt-2">Real-time Analytics</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">Get insights into your supply chain with real-time analytics and reporting.</p>
                      </CardContent>
                    </Card>
                    
                    <Card variant="interactive" className="bg-muted/50">
                      <CardHeader className="pb-2">
                        <div className="bg-primary/10 p-2 w-8 h-8 flex items-center justify-center rounded-lg">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                        </div>
                        <CardTitle className="text-base font-medium mt-2">Inventory Management</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">Track your inventory levels and automate reordering processes.</p>
                      </CardContent>
                    </Card>
                    
                    <Card variant="interactive" className="bg-muted/50">
                      <CardHeader className="pb-2">
                        <div className="bg-primary/10 p-2 w-8 h-8 flex items-center justify-center rounded-lg">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                        </div>
                        <CardTitle className="text-base font-medium mt-2">Supplier Management</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">Manage supplier relationships and streamline procurement processes.</p>
                      </CardContent>
                    </Card>
                    
                    <Card variant="interactive" className="bg-muted/50">
                      <CardHeader className="pb-2">
                        <div className="bg-primary/10 p-2 w-8 h-8 flex items-center justify-center rounded-lg">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                        </div>
                        <CardTitle className="text-base font-medium mt-2">Order Tracking</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">Track orders from placement to delivery with end-to-end visibility.</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* Toast notification */}
      {showToast && (
        <ToastProvider>
          <Toast variant={toastMessage.variant}>
            <ToastTitle>{toastMessage.title}</ToastTitle>
            <ToastDescription>{toastMessage.message}</ToastDescription>
          </Toast>
        </ToastProvider>
      )}
    </div>
  );
} 