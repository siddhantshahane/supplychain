import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Utility function for consistent card hover effects
export const cardHoverClass = "shadow-sm hover:bg-gray-100/30 dark:hover:bg-gray-800/30 transition-all duration-200 border-[var(--card-border-color)]"

// Utility function for consistent table row hover effects
export const tableRowHoverClass = "hover:bg-gray-100/30 dark:hover:bg-gray-800/30 transition-colors duration-150"

// Utility function for border with custom opacity
export function getBorderWithOpacity(opacity: number = 0.1) {
  return `rgba(var(--foreground-rgb), ${opacity})`
}

// Format a date with localization
export function formatDate(date: Date | string): string {
  if (typeof date === 'string') {
    date = new Date(date)
  }
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(date)
}
