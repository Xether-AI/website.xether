# Async Cookies Fix (Next.js 15+)

## Issue

In Next.js 15 and later, the `cookies()` function returns a Promise and must be awaited:

```
Error: Route "/login" used `cookies().get`. 
`cookies()` returns a Promise and must be unwrapped with `await` 
or `React.use()` before accessing its properties.
```

## Root Cause

Next.js 15+ changed the `cookies()` API to be asynchronous for better performance and to support the new async Server Components model.

## Solution

### 1. Update Session Utilities

Changed `lib/server/session.ts` to make functions async:

**Before:**
```typescript
export function getAccessToken() {
  return cookies().get(SESSION_COOKIE_ACCESS)?.value ?? null
}

export function isAuthenticated() {
  return Boolean(getAccessToken())
}
```

**After:**
```typescript
export async function getAccessToken() {
  const cookieStore = await cookies()
  return cookieStore.get(SESSION_COOKIE_ACCESS)?.value ?? null
}

export async function isAuthenticated() {
  const token = await getAccessToken()
  return Boolean(token)
}
```

### 2. Update Page Components

Made page components async and awaited the `isAuthenticated()` call:

**app/login/page.tsx:**
```typescript
export default async function LoginPage() {
  if (await isAuthenticated()) {
    redirect(process.env.NEXT_PUBLIC_APP_URL || "/")
  }
  // ...
}
```

**app/signup/page.tsx:**
```typescript
export default async function SignupPage() {
  if (await isAuthenticated()) {
    redirect(process.env.NEXT_PUBLIC_APP_URL || "/")
  }
  // ...
}
```

## Files Changed

- ✅ `lib/server/session.ts` - Made functions async
- ✅ `app/login/page.tsx` - Made component async, await isAuthenticated
- ✅ `app/signup/page.tsx` - Made component async, await isAuthenticated

## Additional Fix: Missing Avatar Image

Fixed 404 error for missing avatar image:

**Before:**
```typescript
src="/images/avatars/elena-rodriguez.png"
```

**After:**
```typescript
src="/images/avatars/dianne-russell.png"
```

Updated in `components/large-testimonial.tsx`.

## Why This Works

Next.js Server Components can be async, which allows us to await the `cookies()` Promise. This is the recommended pattern for Next.js 15+.

## Important Notes

1. **Server Components Only**: The `cookies()` function can only be used in Server Components (not Client Components)
2. **API Routes**: In API routes, `cookies()` is still async and must be awaited
3. **Middleware**: In middleware, use the `request.cookies` object instead

## Testing

After the fix:
- ✅ No cookies() errors
- ✅ Login page loads correctly
- ✅ Signup page loads correctly
- ✅ Authentication check works
- ✅ Redirects work properly
- ✅ No 404 errors for avatars

## References

- [Next.js 15 Upgrade Guide](https://nextjs.org/docs/app/building-your-application/upgrading/version-15)
- [Async Request APIs](https://nextjs.org/docs/messages/sync-dynamic-apis)
- [cookies() Documentation](https://nextjs.org/docs/app/api-reference/functions/cookies)
