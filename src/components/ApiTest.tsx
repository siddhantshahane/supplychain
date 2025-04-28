"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { authApi, usersApi, productsApi, suppliersApi } from "@/lib/fastapi";
import { Loader2 } from "lucide-react";

export function ApiTest() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const testApi = async (apiCall: () => Promise<any>, name: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await apiCall();
      setResult({
        name,
        data: response
      });
      console.log(`${name} response:`, response);
    } catch (err: any) {
      console.error(`${name} error:`, err);
      setError(err.response?.data?.detail || err.message || `Error testing ${name}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>FastAPI Connection Test</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Button 
            variant="outline" 
            onClick={() => testApi(() => authApi.me(), "Current User")} 
            disabled={loading}
          >
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            Test Me Endpoint
          </Button>
          
          <Button 
            variant="outline" 
            onClick={() => testApi(() => usersApi.list(), "Users List")} 
            disabled={loading}
          >
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            Test Users Endpoint
          </Button>
          
          <Button 
            variant="outline" 
            onClick={() => testApi(() => productsApi.list(), "Products List")} 
            disabled={loading}
          >
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            Test Products Endpoint
          </Button>
          
          <Button 
            variant="outline" 
            onClick={() => testApi(() => suppliersApi.list(), "Suppliers List")} 
            disabled={loading}
          >
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            Test Suppliers Endpoint
          </Button>
        </div>
        
        {error && (
          <div className="bg-destructive/10 p-4 rounded-md text-destructive mb-4">
            <p className="font-semibold">Error:</p>
            <p>{error}</p>
          </div>
        )}
        
        {result && (
          <div className="bg-muted p-4 rounded-md">
            <p className="font-semibold mb-2">Response from {result.name}:</p>
            <pre className="whitespace-pre-wrap overflow-auto max-h-96 text-xs">
              {JSON.stringify(result.data, null, 2)}
            </pre>
          </div>
        )}
      </CardContent>
    </Card>
  );
} 