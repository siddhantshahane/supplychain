"use client"

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { Menu, User, Package, Truck, BarChart3, Settings, LogOut, ChevronRight } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";

export function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Navigation items
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/features", label: "Features" },
    { path: "/pricing", label: "Pricing" },
    { path: "/contact", label: "Contact" }
  ];

  // Detect dark mode
  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains('dark') || 
                   document.documentElement.getAttribute('data-theme') === 'dark';
      setIsDarkMode(isDark);
    };
    
    // Initial check
    checkDarkMode();
    
    // Set up mutation observer to detect theme changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class', 'data-theme']
    });
    
    return () => observer.disconnect();
  }, []);

  // Direct inline styles for hover
  const hoverStyle = isDarkMode ? {
    ':hover': {
      backgroundColor: '#e0e0e0',
      color: '#121212',
    }
  } : {};

  const handleLogout = async () => {
    try {
      // Remove the token cookie directly
      Cookies.remove('token');
      
      // Redirect to login page
      router.push("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  // Direct hover handler function
  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    if (!isDarkMode) return;
    e.currentTarget.style.backgroundColor = '#e0e0e0';
    e.currentTarget.style.color = '#121212';
    // Change child SVGs and text
    e.currentTarget.querySelectorAll('*').forEach((el: Element) => {
      if (el instanceof HTMLElement) {
        el.style.color = '#121212';
      }
      // SVG-specific properties
      if (el instanceof SVGElement) {
        el.style.fill = '#121212';
        el.style.stroke = '#121212';
      }
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    if (!isDarkMode) return;
    e.currentTarget.style.backgroundColor = '';
    e.currentTarget.style.color = '';
    // Reset child SVGs and text
    e.currentTarget.querySelectorAll('*').forEach((el: Element) => {
      if (el instanceof HTMLElement) {
        el.style.color = '';
      }
      // SVG-specific properties
      if (el instanceof SVGElement) {
        el.style.fill = '';
        el.style.stroke = '';
      }
    });
  };

  return (
    <header className="border-b bg-black text-white sticky top-0 z-40 border-zinc-800">
      <div className="container flex h-16 items-center justify-between px-4 py-2 mx-auto">
        <div className="flex items-center gap-3">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-md text-white"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 p-0 dark:bg-black dark:border-zinc-800">
              <div className="p-6 border-b border-zinc-800">
                <Link href="/" className="font-bold text-xl flex items-center gap-2">
                  <Package className="h-5 w-5" />
                  Supply2Uchain
                </Link>
              </div>
              <nav className="flex flex-col py-6">
                {navItems.map((item) => (
                  <Link 
                    key={item.path}
                    href={item.path} 
                    className={`flex items-center justify-between px-6 py-3 text-sm font-medium transition-colors ${
                      pathname === item.path 
                        ? "bg-white/10 text-white border-l-2 border-white" 
                        : "hover:bg-white/5"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>{item.label}</span>
                    {pathname === item.path && <ChevronRight className="h-4 w-4" />}
                  </Link>
                ))}
                <div className="border-t border-zinc-800 my-4"></div>
                <Link 
                  href="/dashboard" 
                  className="flex items-center justify-between px-6 py-3 text-sm font-medium transition-colors hover:bg-white/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="flex items-center gap-3">
                    <Package className="h-4 w-4" />
                    Dashboard
                  </span>
                </Link>
                <Link 
                  href="/dashboard/orders" 
                  className="flex items-center justify-between px-6 py-3 text-sm font-medium transition-colors hover:bg-white/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="flex items-center gap-3">
                    <BarChart3 className="h-4 w-4" />
                    Orders
                  </span>
                </Link>
                <Link 
                  href="/dashboard/suppliers" 
                  className="flex items-center justify-between px-6 py-3 text-sm font-medium transition-colors hover:bg-white/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="flex items-center gap-3">
                    <Truck className="h-4 w-4" />
                    Suppliers
                  </span>
                </Link>
                <Link 
                  href="/dashboard/settings" 
                  className="flex items-center justify-between px-6 py-3 text-sm font-medium transition-colors hover:bg-white/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="flex items-center gap-3">
                    <Settings className="h-4 w-4" />
                    Settings
                  </span>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="font-bold text-xl flex items-center gap-2 text-white">
            <Package className="h-5 w-5" />
            Supply2Uchain
          </Link>
        </div>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex gap-3">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.path} className="relative">
                <Link href={item.path} legacyBehavior passHref>
                  <NavigationMenuLink 
                    className={`px-5 py-2.5 rounded-md font-medium flex items-center text-white relative overflow-hidden
                      before:absolute before:inset-0 before:bg-white before:scale-x-0 before:origin-left
                      before:transition-transform before:duration-300 before:ease-out before:rounded-md
                      hover:before:scale-x-100 hover:text-black
                    `}
                  >
                    <span className="relative z-10">{item.label}</span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full text-white"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <User className="h-5 w-5" />
                <span className="sr-only">User menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-white dark:bg-black dark:border-zinc-800 p-1">
              <DropdownMenuItem asChild className="cursor-pointer p-0">
                <Link 
                  href="/dashboard" 
                  className="flex items-center gap-2 w-full p-2.5 rounded-md hover:bg-black/5 dark:hover:bg-white/10"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Package className="h-4 w-4" />
                  Dashboard
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="cursor-pointer p-0">
                <Link 
                  href="/dashboard/settings" 
                  className="flex items-center gap-2 w-full p-2.5 rounded-md hover:bg-black/5 dark:hover:bg-white/10"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Settings className="h-4 w-4" />
                  Settings
                </Link>
              </DropdownMenuItem>
              <div className="h-px bg-gray-200 dark:bg-zinc-800 my-1"></div>
              <DropdownMenuItem 
                className="cursor-pointer p-2.5 rounded-md hover:bg-black/5 dark:hover:bg-white/10" 
                onClick={handleLogout}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button 
            asChild 
            size="sm"
            variant="outline" 
            className="px-4 text-white bg-transparent border-white/20 hover:bg-white/10"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/dashboard">Dashboard</Link>
          </Button>
        </div>
      </div>
    </header>
  );
} 