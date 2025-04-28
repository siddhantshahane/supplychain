"use client"

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ApiTest } from "@/components/ApiTest";

export default function ApiTestPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6 mx-auto">
          <h1 className="text-3xl font-bold tracking-tight mb-8">API Connection Test</h1>
          <p className="text-muted-foreground mb-8">
            This page allows you to test the connection to the FastAPI backend endpoints.
            Click on any of the buttons below to make a request to the corresponding endpoint.
          </p>
          
          <ApiTest />
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 