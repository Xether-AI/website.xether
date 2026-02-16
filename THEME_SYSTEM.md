# Theme Management System

## Overview
The website now supports both dark and light modes with automatic theme detection and persistence.

## Features
- ✅ Dark mode (default)
- ✅ Light mode
- ✅ System preference detection
- ✅ Theme persistence (localStorage)
- ✅ No flash of unstyled content (FOUC)
- ✅ Smooth theme transitions
- ✅ Theme toggle button in header

## How It Works

### 1. Theme Provider (`components/theme-provider.tsx`)
- Uses `next-themes` library for proper SSR/hydration
- Wraps the app in `app/providers.tsx`
- Handles system preference detection
- Manages localStorage persistence
- Prevents hydration mismatches

### 2. Theme Toggle (`components/ThemeToggle.tsx`)
- Uses `useTheme` hook from `next-themes`
- Sun/moon icon button
- Toggles between light and dark modes
- Located in the header navigation

### 3. Root Layout (`app/layout.tsx`)
```typescript
<html lang="en" suppressHydrationWarning>
  {/* suppressHydrationWarning prevents theme flash */}
</html>
```
```typescript
{
  darkMode: "class", // Uses .dark class on html element
  theme: {
    extend: {
      colors: {
        bg: "#020817",      // Dark background
        fg: "#e5e7eb",      // Dark foreground
        accent: "#38bdf8",  // Accent color
        border: "#1e293b",  // Dark border
        muted: "#9ca3af",   // Muted text
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(...)', // Dark gradient
        'gradient-radial-light': 'radial-gradient(...)', // Light gradient
      },
    },
  },
}
```

### 4. Theme Classes
Use Tailwind's dark mode variant:

```tsx
// Dark mode only
<div className="dark:bg-black">

// Light mode only
<div className="light:bg-white">

// Both modes
<div className="bg-gray-100 dark:bg-gray-900">

// Text colors
<p className="text-gray-900 dark:text-fg">

// Borders
<div className="border-gray-300 dark:border-border">
```

## Usage Examples

### Component with Theme Support
```tsx
export function MyComponent() {
  return (
    <div className="bg-white dark:bg-[#020617] text-gray-900 dark:text-fg">
      <h1 className="text-2xl font-bold">Hello</h1>
      <p className="text-gray-600 dark:text-muted">Description</p>
    </div>
  );
}
```

### Using Theme Context
```tsx
"use client";

import { useTheme } from "next-themes";

export function MyComponent() {
  const { theme, setTheme } = useTheme();
  
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Toggle
      </button>
    </div>
  );
}
```

## Color Palette

### Dark Mode (Default)
- Background: `#020817` (dark blue-black)
- Foreground: `#e5e7eb` (light gray)
- Accent: `#38bdf8` (sky blue)
- Border: `#1e293b` (slate)
- Muted: `#9ca3af` (gray)

### Light Mode
- Background: White with light blue gradient
- Foreground: `#111827` (dark gray)
- Accent: `#38bdf8` (sky blue)
- Border: `#d1d5db` (light gray)
- Muted: `#6b7280` (gray)

## Implementation Details

### Using next-themes

The project uses the `next-themes` library which provides:
- Proper SSR/hydration handling
- No flash of unstyled content (FOUC)
- System preference detection
- localStorage persistence
- TypeScript support

### Configuration in app/providers.tsx

```typescript
<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
  {children}
</ThemeProvider>
```

- `attribute="class"` - Adds `dark` or `light` class to `<html>`
- `defaultTheme="system"` - Uses system preference by default
- `enableSystem` - Allows system preference detection

### Preventing FOUC

The `suppressHydrationWarning` prop on the `<html>` tag prevents React from warning about the theme class mismatch during hydration. The `next-themes` library handles this automatically.

## Files Modified

### Core Files
- `app/providers.tsx` - ThemeProvider wrapper using next-themes
- `app/layout.tsx` - Added suppressHydrationWarning
- `components/theme-provider.tsx` - Wrapper for next-themes
- `components/ThemeToggle.tsx` - Theme toggle button using useTheme hook
- `tailwind.config.ts` - Added `darkMode: "class"`
- `app/globals.css` - CSS variables for theming
- All page components - Added dark/light mode classes

### Dependencies
- `next-themes` - Theme management library (already installed)

## Testing

1. **Toggle Button**: Click sun/moon icon in header
2. **Persistence**: Refresh page - theme should persist
3. **System Preference**: Clear localStorage and check if system preference is detected
4. **No Flash**: Hard refresh - no flash of wrong theme

## Browser Support
- Modern browsers with localStorage support
- Graceful degradation for older browsers
- Respects `prefers-color-scheme` media query
