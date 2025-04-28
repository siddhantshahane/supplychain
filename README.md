# Supply2Uchain Management System

A modern, responsive web application for supply chain management. This system helps businesses optimize inventory, track orders, and manage suppliers with an intuitive dashboard.

## Features

- Real-time inventory tracking
- Supplier management
- Order processing and fulfillment
- Analytics and reporting
- Responsive design for all devices

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Shadcn UI Components

## Tailwind Configuration

The project uses a comprehensive Tailwind CSS configuration with custom themes and responsive breakpoints.

### Color System

The color system includes:

#### Brand Colors
- `brand-50` to `brand-950`: Primary brand colors for the application
- Use for main UI elements, buttons, and visual accents

#### Semantic Colors for Psychological Signaling
- `success-50` to `success-950`: Green colors for positive actions or statuses
- `warning-50` to `warning-950`: Amber/yellow colors for alerts and cautions
- `error-50` to `error-950`: Red colors for errors and critical notifications
- `info-50` to `info-950`: Blue colors for informational elements
- `neutral-50` to `neutral-950`: Neutral gray tones

#### Theme Colors
Colors that adapt between dark and light modes:
- `background`/`foreground`: Base page colors
- `card`/`card-foreground`: Card component colors
- `primary`/`primary-foreground`: Primary action colors
- `secondary`/`secondary-foreground`: Secondary action colors 
- `muted`/`muted-foreground`: Subdued UI elements
- `accent`/`accent-foreground`: Accent highlights
- `destructive`: Destructive actions
- `border`, `input`, `ring`: Form and border styles

#### Specialized Colors
- Chart colors (`chart-1` through `chart-5`) for data visualizations
- Sidebar-specific colors for the dashboard sidebar

### Responsive Breakpoints

The system includes these responsive breakpoints:

- `xs`: 380px (extra small devices)
- `sm`: 640px (small devices, phones)
- `md`: 768px (medium devices, tablets)
- `lg`: 1024px (large devices, laptops)
- `xl`: 1280px (extra large devices, desktops)
- `2xl`: 1536px (extra extra large devices)
- `3xl`: 1920px (ultra large devices)

#### Device-Targeted Breakpoints

Special breakpoints for targeting specific device types:
- `mobile`: max-width 639px (mobile-specific styles)
- `tablet`: min-width 640px, max-width 1023px (tablet-specific styles)
- `desktop`: min-width 1024px (desktop-specific styles)
- `touch`: max-width 1023px (touch device styles)

#### Height-Based Breakpoints
- `tall`: min-height 800px (taller screens)
- `short`: max-height 799px (shorter screens)

### Usage

```jsx
// Example using responsive breakpoints
<div className="block sm:flex lg:grid">
  {/* Changes layout based on screen size */}
</div>

// Example using semantic colors
<div className="bg-success-100 text-success-800 dark:bg-success-800 dark:text-success-100">
  {/* Success message with automatic dark mode support */}
</div>

// Example using device-targeted queries
<div className="hidden desktop:block">
  {/* Only visible on desktop */}
</div>
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
