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

### 1. Theme Provider (`components/ThemeProvider.tsx`)
- Client-side React context for theme state
- Detects system preference on mount
- Reads/writes to localStorage
- Applies theme class to `<html>` element

### 2. Theme Toggle (`components/ThemeToggle.tsx`)
- Sun/moon icon button
- Toggles between light and dark modes
- Located in the header navigation

### 3. Tailwind Configuration (`tailwind.config.ts`)
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

import { useTheme } from "@/components/ThemeProvider";

export function MyComponent() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle</button>
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

### Preventing FOUC
A blocking script in `<head>` applies the theme class before React hydrates:

```html
<script>
  try {
    const theme = localStorage.getItem('theme') || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.classList.add(theme);
  } catch (e) {}
</script>
```

### Theme Persistence
- Theme choice is saved to `localStorage` as `'theme'`
- Automatically restored on page load
- Falls back to system preference if no saved theme

### System Preference Detection
```javascript
window.matchMedia('(prefers-color-scheme: dark)').matches
```

## Files Modified

### New Files
- `components/ThemeProvider.tsx` - Theme context and state management
- `components/ThemeToggle.tsx` - Toggle button component
- `THEME_SYSTEM.md` - This documentation

### Updated Files
- `app/layout.tsx` - Added ThemeProvider wrapper and FOUC prevention script
- `components/Header.tsx` - Made client component, added ThemeToggle
- `tailwind.config.ts` - Added `darkMode: "class"` and light theme colors
- `app/globals.css` - Minimal CSS for color-scheme
- All page components - Added dark/light mode classes

## Testing

1. **Toggle Button**: Click sun/moon icon in header
2. **Persistence**: Refresh page - theme should persist
3. **System Preference**: Clear localStorage and check if system preference is detected
4. **No Flash**: Hard refresh - no flash of wrong theme

## Browser Support
- Modern browsers with localStorage support
- Graceful degradation for older browsers
- Respects `prefers-color-scheme` media query
