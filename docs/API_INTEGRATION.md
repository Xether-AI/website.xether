# API Integration Guide

This document explains how the frontend integrates with the Xether AI backend API.

## Architecture Overview

The frontend uses a **Backend-for-Frontend (BFF)** pattern where all backend communication goes through Next.js API routes that proxy requests to the main backend service.

```
Frontend → Next.js API Routes → Backend API
```

### Why This Pattern?

1. **Security**: API keys and secrets stay server-side
2. **Session Management**: HTTP-only cookies for auth tokens
3. **Flexibility**: Can transform requests/responses if needed
4. **CORS**: No cross-origin issues

## Configuration

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
# Required
XETHER_BACKEND_API_BASE_URL=https://api.xether.ai

# OAuth2 (if using SSO)
XETHER_OAUTH_CLIENT_ID=your_client_id
XETHER_OAUTH_CLIENT_SECRET=your_client_secret

# Application URL (where to redirect after auth)
NEXT_PUBLIC_APP_URL=https://app.xether.ai

# Optional
XETHER_BACKEND_API_KEY=your_api_key
```

### Custom Backend Paths

If your backend uses different endpoint paths, override them:

```bash
XETHER_AUTH_LOGIN_PATH=/custom/login
XETHER_AUTH_REGISTER_PATH=/custom/register
# ... etc
```

## API Client Usage

### Client-Side API Calls

Use the `api` client from `@/lib/api/client`:

```typescript
import { api } from "@/lib/api/client"
import { useMutation } from "@tanstack/react-query"

// In a component
const mutation = useMutation({
  mutationFn: api.login,
  onSuccess: () => {
    // Handle success
  },
  onError: (err) => {
    // Handle error
  },
})

// Call it
mutation.mutate({ email: "user@example.com", password: "password" })
```

### Available API Methods

#### Authentication

```typescript
// Login with email/password
api.login({ email: string, password: string })

// Register new user
api.register({ name?: string, email: string, password: string })

// Request password reset
api.forgotPassword({ email: string })

// Logout
api.logout()
```

#### Forms

```typescript
// Contact form
api.submitContactForm({
  name: string,
  email: string,
  company?: string,
  message: string,
})

// Demo request
api.submitDemoRequest({
  name: string,
  email: string,
  company?: string,
  role?: string,
  teamSize?: string,
  notes?: string,
})

// Email capture (CTA)
api.submitEmailCapture({ email: string })
```

## Authentication Flow

### Email/Password Authentication

1. User submits login/signup form
2. Frontend calls `/api/auth/login` or `/api/auth/register`
3. API route proxies to backend
4. Backend returns access/refresh tokens
5. API route sets HTTP-only cookies
6. Frontend redirects to `NEXT_PUBLIC_APP_URL`

### OAuth2 Flow

1. User clicks "Continue with SSO"
2. Frontend redirects to `/api/auth/oauth2/start`
3. API route generates state, redirects to backend OAuth authorize endpoint
4. User authenticates with OAuth provider
5. Backend redirects to `/api/auth/oauth2/callback?code=...&state=...`
6. API route exchanges code for tokens
7. Sets HTTP-only cookies
8. Redirects to `NEXT_PUBLIC_APP_URL`

### Session Management

Sessions are managed via HTTP-only cookies:

- `xether_access_token`: Short-lived access token
- `xether_refresh_token`: Long-lived refresh token

These cookies are:
- HTTP-only (not accessible via JavaScript)
- Secure (HTTPS only in production)
- SameSite=Lax (CSRF protection)

### Logout

```typescript
import { useLogout } from "@/hooks/use-logout"

function MyComponent() {
  const logout = useLogout()
  
  return (
    <button onClick={() => logout.mutate()}>
      Logout
    </button>
  )
}
```

## API Routes

### Authentication Routes

- `POST /api/auth/login` - Email/password login
- `POST /api/auth/register` - User registration
- `POST /api/auth/forgot-password` - Password reset request
- `POST /api/auth/logout` - Clear session cookies
- `GET /api/auth/oauth2/start` - Initiate OAuth2 flow
- `GET /api/auth/oauth2/callback` - OAuth2 callback handler

### Form Routes

- `POST /api/forms/contact` - Contact form submission
- `POST /api/forms/demo` - Demo request submission
- `POST /api/forms/cta` - Email capture submission

## Error Handling

All API calls use the `ApiError` class for consistent error handling:

```typescript
import { ApiError } from "@/lib/api/errors"

try {
  await api.login(credentials)
} catch (err) {
  if (err instanceof ApiError) {
    console.error(err.message) // User-friendly message
    console.error(err.status)  // HTTP status code
    console.error(err.data)    // Raw response data
  }
}
```

### With React Query

```typescript
const mutation = useMutation({
  mutationFn: api.login,
  onError: (err) => {
    const message = err instanceof ApiError 
      ? err.message 
      : "Something went wrong"
    toast.error(message)
  },
})
```

## Form Validation

Forms use React Hook Form + Zod for validation:

```typescript
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

const schema = z.object({
  email: z.string().email("Please enter a valid email."),
  password: z.string().min(8, "Password must be at least 8 characters."),
})

const form = useForm<z.infer<typeof schema>>({
  resolver: zodResolver(schema),
  defaultValues: { email: "", password: "" },
})
```

## Loading States

All forms show loading states during submission:

```typescript
const mutation = useMutation({
  mutationFn: api.submitContactForm,
})

// In JSX
<Button type="submit" disabled={mutation.isPending}>
  {mutation.isPending ? (
    <>
      <Loader2 className="h-4 w-4 animate-spin" />
      Sending…
    </>
  ) : (
    "Send message"
  )}
</Button>
```

## Success/Error Notifications

Use Sonner for toast notifications:

```typescript
import { toast } from "sonner"

const mutation = useMutation({
  mutationFn: api.submitContactForm,
  onSuccess: () => {
    toast.success("Message sent successfully!")
    form.reset()
  },
  onError: (err) => {
    const message = err instanceof ApiError 
      ? err.message 
      : "Something went wrong"
    toast.error(message)
  },
})
```

## Testing API Integration

### Local Development

1. Set up a local backend or use a staging environment
2. Configure `.env.local` with the backend URL
3. Test each form and auth flow
4. Check browser DevTools → Network tab for API calls
5. Verify cookies are set correctly

### Common Issues

**Issue**: "Backend not configured" error
**Solution**: Set `XETHER_BACKEND_API_BASE_URL` in `.env.local`

**Issue**: OAuth2 not working
**Solution**: Ensure `XETHER_OAUTH_CLIENT_ID` and `XETHER_OAUTH_CLIENT_SECRET` are set

**Issue**: Redirects not working after auth
**Solution**: Set `NEXT_PUBLIC_APP_URL` to your main app URL

**Issue**: CORS errors
**Solution**: All requests go through Next.js API routes, so CORS shouldn't be an issue. Check backend CORS config if you see errors.

## Security Considerations

1. **Never expose API keys client-side**: Use environment variables and API routes
2. **HTTP-only cookies**: Tokens are not accessible via JavaScript
3. **HTTPS in production**: Set `NODE_ENV=production` to enable secure cookies
4. **CSRF protection**: SameSite=Lax cookies provide basic CSRF protection
5. **Input validation**: All forms use Zod schemas for validation
6. **Rate limiting**: Should be implemented on the backend

## Next Steps

- [ ] Add request/response logging for debugging
- [ ] Implement token refresh logic
- [ ] Add retry logic for failed requests
- [ ] Set up API mocking for tests
- [ ] Add request caching where appropriate
