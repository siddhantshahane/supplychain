"use client"

import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Moon, Sun, Laptop, LucideIcon } from "lucide-react";
import { useState, useEffect } from "react";

interface ThemeOption {
  value: "light" | "dark" | "system";
  label: string;
  icon: LucideIcon;
  description: string;
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Ensure hydration match
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;

  const themeOptions: ThemeOption[] = [
    {
      value: "light",
      label: "Light",
      icon: Sun,
      description: "Light theme for daytime use"
    },
    {
      value: "dark",
      label: "Dark",
      icon: Moon,
      description: "Dark theme for low-light environments"
    },
    {
      value: "system",
      label: "System",
      icon: Laptop,
      description: "Follow system preferences"
    }
  ];
  
  const currentTheme = themeOptions.find(option => option.value === theme) || themeOptions[2];
  const Icon = currentTheme.icon;
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="relative w-10 h-10 rounded-full border border-primary/20 bg-background hover:bg-accent/40 hover:text-accent-foreground !ring-0 !ring-offset-0 !outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:outline-none focus:outline-none transition-colors duration-200"
        >
          <span className="sr-only">Toggle theme</span>
          <Sun className="h-[1.3rem] w-[1.3rem] rotate-0 scale-100 transition-all text-yellow-500 dark:rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.3rem] w-[1.3rem] rotate-90 scale-0 transition-all text-blue-400 dark:text-gray-300 dark:rotate-0 dark:scale-100" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="min-w-[200px] animate-fade-in animate-slide-in bg-background border border-border shadow-md rounded-xl dark:bg-zinc-900 dark:border-zinc-800"
        style={{ opacity: 1 }}
      >
        {themeOptions.map((option) => {
          const OptionIcon = option.icon;
          return (
            <DropdownMenuItem
              key={option.value}
              onClick={() => setTheme(option.value)}
              className="flex items-center gap-3 py-2 transition-colors hover:bg-accent/40 data-[highlighted]:bg-accent/40 cursor-pointer"
            >
              <div className={`rounded-full p-1 ${
                theme === option.value ? "bg-primary/20 dark:bg-gray-700" : "bg-muted dark:bg-zinc-800"
              }`}>
                <OptionIcon className={`h-4 w-4 ${
                  theme === option.value ? "text-primary dark:text-gray-300" : "text-muted-foreground dark:text-gray-400"
                }`} />
              </div>
              <div className="flex flex-col">
                <span className={`text-sm font-medium ${
                  theme === option.value ? "text-primary dark:text-gray-300" : "text-foreground dark:text-gray-400"
                }`}>
                  {option.label}
                </span>
                <span className="text-xs text-muted-foreground dark:text-gray-500">
                  {option.description}
                </span>
              </div>
              {theme === option.value && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary dark:bg-gray-400" />
              )}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 