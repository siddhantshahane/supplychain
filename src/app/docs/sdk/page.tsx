"use client"

import Link from "next/link";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code,
  BookOpen,
  Download,
  FileJson,
  Github,
  Package,
  Terminal,
  CheckCircle2,
  Copy,
  ExternalLink,
  Boxes,
  ChevronRight
} from "lucide-react";

export default function SdkDocs() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const sdks = [
    {
      language: "javascript",
      name: "JavaScript",
      installation: "npm install @supply2uchain/sdk",
      requirements: "Node.js 14+ or any modern browser",
      github: "https://github.com/supply2uchain/javascript-sdk",
      basicUsage: `import { Supply2UchainClient } from '@supply2uchain/sdk';

// Initialize the client with your API key
const client = new Supply2UchainClient({
  apiKey: 'YOUR_API_KEY',
  baseUrl: 'https://api.supply2uchain.com/v1' // Optional, defaults to this
});

// Make API requests
async function getInventory() {
  try {
    const inventory = await client.inventory.list({ limit: 10 });
    console.log(inventory);
  } catch (error) {
    console.error('Error fetching inventory:', error);
  }
}

getInventory();`,
      examples: [
        {
          title: "Creating an inventory item",
          code: `// Create a new inventory item
const newItem = await client.inventory.create({
  sku: "PROD-123",
  name: "Wireless Headphones",
  description: "Premium noise-cancelling headphones",
  category: "Electronics",
  quantity: 100,
  unit_price: 79.99,
  location: "Warehouse A",
  supplier_id: "sup-456",
  min_stock_level: 20,
  reorder_quantity: 50
});

console.log('Created item:', newItem);`
        },
        {
          title: "Processing an order",
          code: `// Create a new order
const order = await client.orders.create({
  customer_id: "cus-789",
  order_items: [
    {
      inventory_id: "inv-123",
      quantity: 2,
      unit_price: 79.99
    }
  ],
  shipping_address: {
    name: "John Smith",
    street: "123 Main St",
    city: "New York",
    state: "NY",
    postal_code: "10001",
    country: "US"
  },
  shipping_method: "standard"
});

// Update order status
await client.orders.updateStatus(order.id, "processing");`
        },
        {
          title: "Error handling",
          code: `try {
  await client.inventory.update("inv-999", { quantity: -5 });
} catch (error) {
  if (error.status === 400) {
    console.error('Validation error:', error.data.error.details);
  } else if (error.status === 404) {
    console.error('Item not found');
  } else {
    console.error('Something went wrong:', error.message);
  }
}`
        }
      ]
    },
    {
      language: "python",
      name: "Python",
      installation: "pip install supply2uchain",
      requirements: "Python 3.7+",
      github: "https://github.com/supply2uchain/python-sdk",
      basicUsage: `from supply2uchain import Supply2UchainClient

# Initialize the client with your API key
client = Supply2UchainClient(
    api_key="YOUR_API_KEY",
    base_url="https://api.supply2uchain.com/v1"  # Optional, defaults to this
)

# Make API requests
def get_inventory():
    try:
        inventory = client.inventory.list(limit=10)
        print(inventory)
    except Exception as e:
        print(f"Error fetching inventory: {e}")

get_inventory()`,
      examples: [
        {
          title: "Creating an inventory item",
          code: `# Create a new inventory item
new_item = client.inventory.create(
    sku="PROD-123",
    name="Wireless Headphones",
    description="Premium noise-cancelling headphones",
    category="Electronics",
    quantity=100,
    unit_price=79.99,
    location="Warehouse A",
    supplier_id="sup-456",
    min_stock_level=20,
    reorder_quantity=50
)

print(f"Created item: {new_item}")`
        },
        {
          title: "Processing an order",
          code: `# Create a new order
order = client.orders.create(
    customer_id="cus-789",
    order_items=[
        {
            "inventory_id": "inv-123",
            "quantity": 2,
            "unit_price": 79.99
        }
    ],
    shipping_address={
        "name": "John Smith",
        "street": "123 Main St",
        "city": "New York",
        "state": "NY",
        "postal_code": "10001",
        "country": "US"
    },
    shipping_method="standard"
)

# Update order status
client.orders.update_status(order["id"], "processing")`
        },
        {
          title: "Error handling",
          code: `from supply2uchain.exceptions import ValidationError, NotFoundError, ApiError

try:
    client.inventory.update("inv-999", quantity=-5)
except ValidationError as e:
    print(f"Validation error: {e.details}")
except NotFoundError:
    print("Item not found")
except ApiError as e:
    print(f"Something went wrong: {e}")`
        }
      ]
    },
    {
      language: "ruby",
      name: "Ruby",
      installation: "gem install supply2uchain",
      requirements: "Ruby 2.6+",
      github: "https://github.com/supply2uchain/ruby-sdk",
      basicUsage: `require 'supply2uchain'

# Initialize the client with your API key
client = Supply2Uchain::Client.new(
  api_key: 'YOUR_API_KEY',
  base_url: 'https://api.supply2uchain.com/v1' # Optional, defaults to this
)

# Make API requests
def get_inventory
  begin
    inventory = client.inventory.list(limit: 10)
    puts inventory
  rescue => e
    puts "Error fetching inventory: #{e.message}"
  end
end

get_inventory()`,
      examples: [
        {
          title: "Creating an inventory item",
          code: `# Create a new inventory item
new_item = client.inventory.create(
  sku: "PROD-123",
  name: "Wireless Headphones",
  description: "Premium noise-cancelling headphones",
  category: "Electronics",
  quantity: 100,
  unit_price: 79.99,
  location: "Warehouse A",
  supplier_id: "sup-456",
  min_stock_level: 20,
  reorder_quantity: 50
)

puts "Created item: #{new_item}")`
        },
        {
          title: "Processing an order",
          code: `# Create a new order
order = client.orders.create(
  customer_id: "cus-789",
  order_items: [
    {
      inventory_id: "inv-123",
      quantity: 2,
      unit_price: 79.99
    }
  ],
  shipping_address: {
    name: "John Smith",
    street: "123 Main St",
    city: "New York",
    state: "NY",
    postal_code: "10001",
    country: "US"
  },
  shipping_method: "standard"
)

# Update order status
client.orders.update_status(order["id"], "processing")`
        },
        {
          title: "Error handling",
          code: `begin
  client.inventory.update("inv-999", quantity: -5)
rescue Supply2Uchain::ValidationError => e
  puts "Validation error: #{e.details}"
rescue Supply2Uchain::NotFoundError
  puts "Item not found"
rescue Supply2Uchain::ApiError => e
  puts "Something went wrong: #{e.message}"
end`
        }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Boxes className="h-10 w-10 text-primary" />
                </div>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                SDK Documentation
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Integrate with Supply2Uchain using our client libraries in your favorite programming language
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" asChild>
                  <a href="#sdks">Get Started</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/docs/api">View API Reference</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Overview Section */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
                SDK Overview
              </h2>
              <p className="text-muted-foreground mb-6">
                Our SDKs provide a convenient way to integrate with the Supply2Uchain API in your preferred programming language. 
                They handle authentication, error handling, and provide a simple interface for making API requests.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <Card className="bg-muted/50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Download className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-medium">Easy Installation</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Simple package installation through standard package managers like npm, pip, and gem.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-muted/50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <FileJson className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-medium">Type Safety</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      TypeScript definitions and language-specific type annotations for improved developer experience.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-muted/50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Terminal className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-medium">Complete Coverage</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Full support for all Supply2Uchain API endpoints with intuitive method naming.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* SDKs Section */}
        <section id="sdks" className="py-12 md:py-16 bg-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
                Client Libraries
              </h2>
              
              <Tabs defaultValue={sdks[0].language}>
                <div className="mb-8 overflow-x-auto">
                  <TabsList className="grid grid-flow-col auto-cols-max gap-4">
                    {sdks.map((sdk) => (
                      <TabsTrigger
                        key={sdk.language}
                        value={sdk.language}
                        className="flex items-center gap-2"
                      >
                        {sdk.name}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>
                
                {sdks.map((sdk) => (
                  <TabsContent key={sdk.language} value={sdk.language} className="space-y-8">
                    <div className="flex flex-col md:flex-row md:justify-between gap-6">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-4">{sdk.name} SDK</h3>
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-lg font-medium mb-2 flex items-center gap-2">
                              <Terminal className="h-5 w-5 text-primary" /> Installation
                            </h4>
                            <div className="bg-background rounded-md p-4 flex items-center justify-between">
                              <code className="text-sm font-mono">{sdk.installation}</code>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => copyToClipboard(sdk.installation, `${sdk.language}-install`)}
                                className="h-8 w-8 p-0"
                              >
                                {copied === `${sdk.language}-install` ? (
                                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                                ) : (
                                  <Copy className="h-4 w-4" />
                                )}
                              </Button>
                            </div>
                          </div>
                          
                          <div>
                            <p className="text-sm">
                              <span className="font-medium">Requirements:</span> {sdk.requirements}
                            </p>
                            <div className="mt-2">
                              <Button variant="outline" size="sm" asChild className="gap-2">
                                <a href={sdk.github} target="_blank" rel="noopener noreferrer">
                                  <Github className="h-4 w-4" />
                                  <span>View on GitHub</span>
                                  <ExternalLink className="h-3 w-3" />
                                </a>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="text-lg font-medium mb-2 flex items-center gap-2">
                          <Code className="h-5 w-5 text-primary" /> Basic Usage
                        </h4>
                        <div className="bg-background rounded-md p-4 relative">
                          <pre className="text-xs font-mono overflow-x-auto">
                            {sdk.basicUsage}
                          </pre>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => copyToClipboard(sdk.basicUsage, `${sdk.language}-usage`)}
                            className="absolute top-2 right-2 h-8 w-8 p-0"
                          >
                            {copied === `${sdk.language}-usage` ? (
                              <CheckCircle2 className="h-4 w-4 text-green-500" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold mb-4">Examples</h3>
                      <div className="space-y-6">
                        {sdk.examples.map((example, index) => (
                          <Card key={index}>
                            <CardHeader>
                              <CardTitle className="text-lg">{example.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                              <div className="bg-muted/50 rounded-md p-4 relative">
                                <pre className="text-xs font-mono overflow-x-auto">
                                  {example.code}
                                </pre>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => copyToClipboard(example.code, `${sdk.language}-example-${index}`)}
                                  className="absolute top-2 right-2 h-8 w-8 p-0"
                                >
                                  {copied === `${sdk.language}-example-${index}` ? (
                                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                                  ) : (
                                    <Copy className="h-4 w-4" />
                                  )}
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-background rounded-lg p-6">
                      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-primary" /> Additional Resources
                      </h3>
                      <ul className="space-y-3">
                        <li>
                          <Link href={`/docs/sdk/${sdk.language}/getting-started`} className="text-primary hover:underline flex items-center gap-2">
                            <span>Getting Started Guide</span>
                            <ChevronRight className="h-4 w-4" />
                          </Link>
                        </li>
                        <li>
                          <Link href={`/docs/sdk/${sdk.language}/api-reference`} className="text-primary hover:underline flex items-center gap-2">
                            <span>API Reference</span>
                            <ChevronRight className="h-4 w-4" />
                          </Link>
                        </li>
                        <li>
                          <Link href={`/docs/examples/${sdk.language}`} className="text-primary hover:underline flex items-center gap-2">
                            <span>Advanced Examples</span>
                            <ChevronRight className="h-4 w-4" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Which SDK should I use?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Choose the SDK that matches your application's primary programming language. All SDKs offer the same functionality, so you should select the one that best integrates with your existing codebase and development workflows.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>How do I handle rate limiting?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      All our SDKs automatically handle rate limiting with built-in retry mechanisms. If you hit a rate limit, the SDK will pause and retry the request after an appropriate backoff period. You can configure these retry settings when initializing the client.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Are the SDKs suitable for server-side or client-side use?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Our SDKs are primarily designed for server-side usage where your API key can be securely stored. The JavaScript SDK can be used in browser environments for development purposes, but we strongly recommend creating a backend service to proxy API requests in production applications to protect your API keys.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>What if I need a different language?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      While we officially support JavaScript, Python, and Ruby, our API is RESTful and can be used with any HTTP client. If you need integration with a different language, please <Link href="/contact" className="text-primary hover:underline">contact us</Link> as we're constantly expanding our SDK offerings based on customer needs.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-muted to-background">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Create an account to get your API key and start integrating with Supply2Uchain.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <Link href="/signup">Create Account</Link>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                  <Link href="/contact">Contact Sales</Link>
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