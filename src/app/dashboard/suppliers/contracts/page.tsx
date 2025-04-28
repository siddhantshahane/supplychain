import React from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { FileText, Search, Filter, Download, Plus, Calendar, AlertTriangle, CheckCircle, XCircle, Clock, FileEdit, Trash2, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock data for contracts
const contracts = [
  {
    id: "CTR-2023-001",
    supplier: "Global Manufacturing Co.",
    type: "Manufacturing",
    startDate: "2023-01-15",
    endDate: "2024-01-14",
    value: "$125,000.00",
    status: "active",
    terms: "Net 30",
    documents: 3,
    lastUpdated: "2023-06-10",
  },
  {
    id: "CTR-2023-002",
    supplier: "Tech Components Ltd",
    type: "Distribution",
    startDate: "2023-03-01",
    endDate: "2024-02-29",
    value: "$75,000.00",
    status: "active",
    terms: "Net 45",
    documents: 2,
    lastUpdated: "2023-06-05",
  },
  {
    id: "CTR-2023-003",
    supplier: "Pacific Electronics",
    type: "Manufacturing",
    startDate: "2023-02-10",
    endDate: "2024-02-09",
    value: "$200,000.00",
    status: "active",
    terms: "Net 30",
    documents: 4,
    lastUpdated: "2023-05-28",
  },
  {
    id: "CTR-2022-015",
    supplier: "Quality Parts Inc",
    type: "Parts Supply",
    startDate: "2022-11-01",
    endDate: "2023-10-31",
    value: "$50,000.00",
    status: "expiring",
    terms: "Net 30",
    documents: 2,
    lastUpdated: "2023-05-15",
  },
  {
    id: "CTR-2022-010",
    supplier: "Logistics Solutions",
    type: "Logistics",
    startDate: "2022-08-15",
    endDate: "2023-08-14",
    value: "$90,000.00",
    status: "expiring",
    terms: "Net 30",
    documents: 3,
    lastUpdated: "2023-04-20",
  },
  {
    id: "CTR-2021-008",
    supplier: "Raw Materials Co",
    type: "Raw Materials",
    startDate: "2021-12-01",
    endDate: "2022-11-30",
    value: "$150,000.00",
    status: "expired",
    terms: "Net 30",
    documents: 2,
    lastUpdated: "2022-11-30",
  },
];

// Contract status badge component
const ContractStatusBadge = ({ status }: { status: string }) => {
  switch (status) {
    case "active":
      return (
        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
          <CheckCircle className="mr-1 h-3 w-3" />
          Active
        </Badge>
      );
    case "expiring":
      return (
        <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
          <Clock className="mr-1 h-3 w-3" />
          Expiring Soon
        </Badge>
      );
    case "expired":
      return (
        <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
          <XCircle className="mr-1 h-3 w-3" />
          Expired
        </Badge>
      );
    default:
      return (
        <Badge variant="outline">
          {status}
        </Badge>
      );
  }
};

export default function SupplierContractsPage() {
  return (
    <div className="py-6 md:py-8">
      <div className="container px-4 md:px-6 max-w-full">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 md:mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-1">
              Supplier Contracts
            </h1>
            <p className="text-muted-foreground">
              Manage and track all supplier contracts and agreements
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full md:w-auto">
            <Button asChild>
              <Link href="/dashboard/suppliers/contracts/new">
                <Plus className="mr-2 h-4 w-4" />
                New Contract
              </Link>
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        {/* Contract Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Contracts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">6</div>
              <p className="text-xs text-muted-foreground mt-1">Active and expired contracts</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Active Contracts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground mt-1">Currently in effect</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Expiring Soon</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground mt-1">Within next 3 months</p>
            </CardContent>
          </Card>
        </div>

        {/* Contract Management */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Contract Management</CardTitle>
            <CardDescription>
              View and manage all supplier contracts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search contracts..."
                  className="pl-8 w-full"
                />
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full sm:w-auto">
                <Select defaultValue="all">
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Contract Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="distribution">Distribution</SelectItem>
                    <SelectItem value="logistics">Logistics</SelectItem>
                    <SelectItem value="parts">Parts Supply</SelectItem>
                    <SelectItem value="raw">Raw Materials</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="all">
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="expiring">Expiring Soon</SelectItem>
                    <SelectItem value="expired">Expired</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Contract ID</TableHead>
                    <TableHead>Supplier</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Start Date</TableHead>
                    <TableHead>End Date</TableHead>
                    <TableHead>Value</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {contracts.map((contract) => (
                    <TableRow key={contract.id}>
                      <TableCell className="font-medium">{contract.id}</TableCell>
                      <TableCell>{contract.supplier}</TableCell>
                      <TableCell>{contract.type}</TableCell>
                      <TableCell>{contract.startDate}</TableCell>
                      <TableCell>{contract.endDate}</TableCell>
                      <TableCell>{contract.value}</TableCell>
                      <TableCell>
                        <ContractStatusBadge status={contract.status} />
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <FileEdit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 