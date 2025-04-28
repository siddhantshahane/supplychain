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
import { Loader2, Mail, Lock, AlertCircle, KeyRound, ShieldCheck, UserPlus, ArrowRightCircle } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import axios from "axios";
import Cookies from "js-cookie";

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

export default function LoginPage() {
  const router = useRouter();
  const { resolvedTheme } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
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

  // Check for saved email if remember me was previously checked
  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberedEmail");
    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      console.log('Attempting login with:', { email, password });
      // Direct API call to our Next.js API route
      const response = await axios.post('/api/auth/login', { email, password });
      
      console.log('Login response:', response.data);
      
      // Handle remember me functionality
      if (rememberMe) {
        localStorage.setItem("rememberedEmail", email);
      } else {
        localStorage.removeItem("rememberedEmail");
      }
      
      // Store token in cookie
      if (response.data.access_token) {
        Cookies.set('token', response.data.access_token, { expires: 7 });
      }
      
      // Show success toast
      setToastMessage({
        title: "Login Successful",
        message: "Redirecting to dashboard...",
        variant: "success"
      });
      setShowToast(true);
      
      // Delay redirect for toast to be seen
      setTimeout(() => {
        router.push("/dashboard");
      }, 1500);
      
    } catch (err: any) {
      console.error('Login error:', err);
      if (err.response?.status === 401) {
        setError("Invalid email or password");
      } else if (err.response?.data?.detail) {
        setError(err.response.data.detail);
      } else {
        setError("An error occurred during login. Please try again.");
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
              {/* Left side content - Login form */}
              <div className="w-full lg:w-1/2 max-w-md mx-auto lg:mx-0">
                <h1 className="text-3xl font-bold tracking-tight gradient-text mb-6 text-center lg:text-left">Sign in to your account</h1>
                
                <Card variant="elevated" className="w-full animate-fade-in">
                  <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-semibold">Welcome Back</CardTitle>
                    <CardDescription>Enter your credentials to access your account</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
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
                      
                      {error && (
                        <div className="text-sm text-destructive flex items-center gap-2 p-3 rounded-md bg-destructive/10">
                          <AlertCircle className="h-4 w-4" />
                          {error}
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="rememberMe" 
                            checked={rememberMe} 
                            onCheckedChange={(checked) => setRememberMe(checked)}
                          />
                          <label htmlFor="rememberMe" className="text-sm cursor-pointer">
                            Remember me
                          </label>
                        </div>
                        
                        <Link 
                          href="/forgot-password" 
                          className="text-sm text-primary hover:underline hover:text-primary/80 transition-colors"
                        >
                          Forgot password?
                        </Link>
                      </div>
                      
                      <Button 
                        type="submit" 
                        variant="gradient"
                        size="lg"
                        animation={loading ? "pulse" : "none"}
                        className="w-full transition-all"
                        disabled={loading}
                      >
                        {loading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Signing in...
                          </>
                        ) : (
                          <>
                            Sign In
                            <ArrowRightCircle className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                  
                  <CardDivider />
                  <CardFooter className="flex justify-center p-4">
                    <p className="text-sm text-muted-foreground">
                      Don't have an account?{" "}
                      <Link 
                        href="/register" 
                        className="text-primary hover:underline hover:text-primary/80 font-medium transition-colors"
                      >
                        Create account
                      </Link>
                    </p>
                  </CardFooter>
                </Card>
              </div>
              
              {/* Right side content - Features */}
              <div className="w-full lg:w-1/2">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold tracking-tight">Welcome to the Supply Chain Platform</h2>
                  <p className="text-muted-foreground">Access your dashboard to manage inventory, track orders, and optimize your supply chain.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <Card variant="interactive" className="bg-muted/50">
                      <CardHeader className="pb-2">
                        <div className="bg-primary/10 p-2 w-8 h-8 flex items-center justify-center rounded-lg">
                          <KeyRound className="h-4 w-4 text-primary" />
                        </div>
                        <CardTitle className="text-base font-medium mt-2">Secure Login</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">Your data is protected with enterprise-grade security.</p>
                      </CardContent>
                    </Card>
                    
                    <Card variant="interactive" className="bg-muted/50">
                      <CardHeader className="pb-2">
                        <div className="bg-primary/10 p-2 w-8 h-8 flex items-center justify-center rounded-lg">
                          <ShieldCheck className="h-4 w-4 text-primary" />
                        </div>
                        <CardTitle className="text-base font-medium mt-2">Data Protection</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">Your data is encrypted and protected at all times.</p>
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

      <div className="text-center text-xs text-muted-foreground mt-4 mb-2">
        <p>Demo credentials: admin@example.com / admin123</p>
      </div>
    </div>
  );
} 