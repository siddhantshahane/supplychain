"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import axios from "axios";
import Cookies from "js-cookie";

export default function LoginDebugPage() {
  const [email, setEmail] = useState("admin@example.com");
  const [password, setPassword] = useState("admin123");
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [currentCookie, setCurrentCookie] = useState<string | undefined>(Cookies.get('token'));

  const testDirectLogin = async () => {
    setLoading(true);
    setError(null);
    setResult(null);
    
    try {
      // Make a direct call to the mock login API
      const response = await axios.post('/api/auth/login', { email, password });
      console.log('Login response:', response.data);
      
      // Set the token in cookies
      if (response.data.access_token) {
        Cookies.set('token', response.data.access_token, { expires: 7 });
        setCurrentCookie(response.data.access_token);
      }
      
      setResult(response.data);
    } catch (err: any) {
      console.error('Login error:', err);
      setError(err.response?.data?.detail || err.message || 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  const testUserInfo = async () => {
    setLoading(true);
    setError(null);
    setResult(null);
    
    try {
      // Make a direct call to the mock user API
      const response = await axios.get('/api/users/me', {
        headers: {
          'Authorization': `Bearer ${Cookies.get('token')}`
        }
      });
      console.log('User info response:', response.data);
      setResult(response.data);
    } catch (err: any) {
      console.error('User info error:', err);
      setError(err.response?.data?.detail || err.message || 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  const clearToken = () => {
    Cookies.remove('token');
    setCurrentCookie(undefined);
    setResult(null);
    setError(null);
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Login Debug Page</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Login Test</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Password</label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              
              <div className="flex space-x-2">
                <Button onClick={testDirectLogin} disabled={loading}>
                  Test Login
                </Button>
                <Button variant="outline" onClick={clearToken}>
                  Clear Token
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>User Info Test</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium mb-1">Current Cookie:</p>
                <div className="bg-muted p-2 rounded text-xs overflow-auto">
                  {currentCookie || 'No token found'}
                </div>
              </div>
              
              <Button onClick={testUserInfo} disabled={loading}>
                Get User Info
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {error && (
        <div className="mt-6 p-4 bg-destructive/10 text-destructive rounded-md">
          <p className="font-bold">Error:</p>
          <p>{error}</p>
        </div>
      )}
      
      {result && (
        <div className="mt-6 p-4 bg-muted rounded-md">
          <p className="font-bold mb-2">Result:</p>
          <pre className="text-xs overflow-auto whitespace-pre-wrap">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
} 