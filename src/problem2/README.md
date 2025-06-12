# Problem 2 - Currency Swap Interface

A modern React TypeScript application built with Vite that provides a currency swap interface. This project demonstrates modern frontend development practices using React 19, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Currency Swap Interface**: Interactive form for swapping between different currencies
- **Real-time Price Data**: Integration with token price APIs using Axios
- **Modern UI Components**: Built with Radix UI primitives and custom components
- **Form Validation**: Robust form handling with React Hook Form and Zod validation
- **Responsive Design**: Mobile-first design using Tailwind CSS
- **TypeScript**: Full type safety throughout the application
- **Component Library**: Reusable UI components following design system principles

## 🛠️ Tech Stack

### Core
- **React 19.1.0** - Latest React with modern features
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server

### Styling & UI
- **Tailwind CSS 4.1.10** - Utility-first CSS framework
- **Radix UI** - Headless UI components for accessibility
- **Lucide React** - Modern icon library
- **Class Variance Authority** - Component variant handling

### Form Management
- **React Hook Form 7.57.0** - Performant forms with easy validation
- **@hookform/resolvers** - Form validation resolvers
- **Zod** - TypeScript-first schema validation

### Data Fetching
- **Axios 1.9.0** - Promise-based HTTP client

## 📁 Project Structure

```
src/
├── components/
│   ├── swap-form/          # Currency swap form components
│   └── ui/                 # Reusable UI components (buttons, inputs, etc.)
├── contexts/
│   └── TokenPricesContext.tsx  # Token price state management
├── hooks/
│   ├── useLoading.ts       # Loading state hook
│   ├── useSwapCalculation.ts   # Swap calculation logic
│   └── useTokenPrices.ts   # Token price fetching hook
├── lib/
│   └── utils.ts            # Utility functions
├── types/
│   └── index.ts            # TypeScript type definitions
├── utils/
│   └── token.ts            # Token-related utilities
├── validators/             # Zod validation schemas
├── App.tsx                 # Main application component
├── main.tsx               # Application entry point
└── index.css              # Global styles and CSS variables
```

## 🚦 Getting Started

### Prerequisites
- Node.js (>=18.0.0)
- pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository and navigate to the problem2 directory:
```bash
cd src/problem2
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📜 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production (TypeScript compilation + Vite build)
- `pnpm lint` - Run ESLint for code quality
- `pnpm preview` - Preview production build locally

## 🎨 Design System

The project uses a custom design system built on top of Tailwind CSS with:

- **CSS Custom Properties** - For theme customization
- **Component Variants** - Using `class-variance-authority`
- **Responsive Design** - Mobile-first approach
- **Dark Mode Support** - Built-in dark mode capabilities
- **Accessible Components** - Using Radix UI primitives

### Key Components
- Custom form inputs and selects
- Loading states and error handling
- Responsive layout components
- Icon integration with Lucide React

## 🔧 Configuration

### Tailwind CSS
Configuration in [`tailwind.config.js`](tailwind.config.js) includes:
- Custom color palette using CSS variables
- Extended spacing and typography
- Component-specific utilities

### TypeScript
Multiple TypeScript configurations:
- [`tsconfig.json`](tsconfig.json) - Main TypeScript config
- [`tsconfig.app.json`](tsconfig.app.json) - App-specific settings
- [`tsconfig.node.json`](tsconfig.node.json) - Node.js tooling config

### Vite
Build tool configuration in [`vite.config.ts`](vite.config.ts) with optimized settings for React and TypeScript.

## 🎯 Key Features Implementation

### Currency Swap Logic
- Real-time price fetching and caching
- Swap calculation with proper decimal handling
- Form validation for amount and currency selection

### State Management
- Context API for global token price state
- Custom hooks for encapsulating business logic
- Proper loading and error states

### Performance Optimizations
- Vite for fast development and optimized builds
- Tree-shaking for minimal bundle size
- Efficient re-rendering with proper React patterns

## 🤝 Contributing

This is part of the 99Tech Code Challenge. The implementation focuses on:
- Clean, maintainable code structure
- Modern React patterns and best practices
- Type safety with TypeScript
- Responsive and accessible UI design
- Proper error handling and loading states

## 📝 Notes

This project is **Problem 2** of the 99Tech Code Challenge, demonstrating proficiency in:
- Modern React development
- TypeScript integration
- Form handling and validation
- API integration
- Component architecture
- CSS frameworks and design systems