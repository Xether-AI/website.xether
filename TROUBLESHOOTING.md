# Troubleshooting Guide

## Tailwind CSS Not Working

If Tailwind styles aren't being applied, follow these steps:

### 1. Verify Configuration Files

Check that these files exist:

- `tailwind.config.ts` ✅
- `postcss.config.mjs` ✅
- `app/globals.css` with `@import "tailwindcss";` ✅

### 2. Restart Development Server

Tailwind CSS v4 requires a server restart after configuration changes:

```bash
# Stop the dev server (Ctrl+C)
# Then restart:
npm run dev
```

### 3. Clear Next.js Cache

If styles still don't work:

```bash
# Remove cache and build artifacts
rm -rf .next

# Reinstall dependencies (if needed)
rm -rf node_modules package-lock.json
npm install

# Start dev server
npm run dev
```

### 4. Verify Tailwind Classes

Test with a simple component:

```tsx
<div className="bg-black text-white p-4">
  This should have black background and white text
</div>
```

### 5. Check Browser Console

Open DevTools (F12) and check for:
- CSS loading errors
- 404 errors for stylesheets
- JavaScript errors

### 6. Verify Package Versions

Check `package.json`:

```json
{
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "tailwindcss": "^4"
  }
}
```

### 7. Hard Refresh Browser

- Chrome/Edge: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
- Firefox: `Ctrl+F5` (Windows/Linux) or `Cmd+Shift+R` (Mac)
- Safari: `Cmd+Option+R`

## Common Issues

### Issue: Classes not applying

**Solution**: Restart dev server after any config changes.

### Issue: Custom CSS variables not working

**Solution**: Ensure `globals.css` is imported in `layout.tsx`:

```tsx
import "./globals.css";
```

### Issue: Build fails

**Solution**: Check for syntax errors in config files:

```bash
npm run build
```

### Issue: Styles work in dev but not in production

**Solution**: Rebuild the production bundle:

```bash
npm run build
npm start
```

## Verification Steps

1. **Check if Tailwind is loaded**:
   - Open DevTools → Network tab
   - Look for CSS files being loaded
   - Check if styles are in the `<head>`

2. **Inspect element**:
   - Right-click element → Inspect
   - Check if Tailwind classes are present
   - Verify computed styles

3. **Test basic classes**:
   ```tsx
   <div className="bg-red-500 text-white p-4">Test</div>
   ```

## Still Not Working?

1. Check Node.js version: `node -v` (should be 18+)
2. Check npm version: `npm -v` (should be 9+)
3. Try a fresh install:
   ```bash
   rm -rf node_modules .next
   npm install
   npm run dev
   ```

## Tailwind CSS v4 Specifics

Tailwind CSS v4 uses a new architecture:

- Uses `@tailwindcss/postcss` plugin
- Imports via `@import "tailwindcss";`
- Requires PostCSS configuration
- Auto-detects content files

### Configuration Files

**tailwind.config.ts**:
```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};

export default config;
```

**postcss.config.mjs**:
```javascript
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

**app/globals.css**:
```css
@import "tailwindcss";

/* Your custom styles */
```

## Contact

If issues persist, check:
- Next.js documentation: https://nextjs.org/docs
- Tailwind CSS v4 docs: https://tailwindcss.com/docs
- GitHub issues for known problems
