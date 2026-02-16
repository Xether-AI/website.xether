# Setup Guide

Quick start guide for setting up the Xether AI marketing website.

## Prerequisites

- Node.js 20.9 or later
- npm, pnpm, or yarn
- Access to Xether AI backend API

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd website
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
# or
yarn install
```

3. Configure environment variables:
```bash
cp .env.example .env.local
```

4. Edit `.env.local` with your configuration:
```bash
# Required
XETHER_BACKEND_API_BASE_URL=https://api.xether.ai

# OAuth2 (if using SSO)
XETHER_OAUTH_CLIENT_ID=your_client_id
XETHER_OAUTH_CLIENT_SECRET=your_client_secret

# Application URL
NEXT_PUBLIC_APP_URL=https://app.xether.ai
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000)

## Development

### Project Structure

```
website/
├── app/                    # Next.js App Router
│   ├── api/               # API routes (BFF pattern)
│   │   ├── auth/         # Authentication endpoints
│   │   └── forms/        # Form submission endpoints
│   ├── (pages)/          # Public pages
│   └── layout.tsx        # Root layout
├── components/            # React components
│   ├── auth/             # Auth forms
│   ├── ui/               # UI components (shadcn/ui)
│   └── (sections)/       # Page sections
├── lib/                   # Utilities
│   ├── api/              # API client
│   └── server/           # Server utilities
├── hooks/                 # Custom React hooks
├── docs/                  # Documentation
└── public/               # Static assets
```

### Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

### Key Features

- **Next.js 16** with App Router
- **React 19.2** with Server Components
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **TanStack Query** for data fetching
- **React Hook Form + Zod** for forms
- **Shadcn/UI** component library

## Configuration

### Environment Variables

See `.env.example` for all available variables.

**Required:**
- `XETHER_BACKEND_API_BASE_URL` - Backend API URL

**Optional:**
- `XETHER_BACKEND_API_KEY` - API key for backend auth
- `XETHER_OAUTH_CLIENT_ID` - OAuth2 client ID
- `XETHER_OAUTH_CLIENT_SECRET` - OAuth2 client secret
- `NEXT_PUBLIC_APP_URL` - Main app URL for redirects

### Custom Backend Paths

Override default API paths if needed:

```bash
XETHER_AUTH_LOGIN_PATH=/custom/login
XETHER_AUTH_REGISTER_PATH=/custom/register
XETHER_CONTACT_FORM_PATH=/custom/contact
# ... etc
```

## Testing

### Manual Testing

1. **Forms**: Test contact, demo request, and CTA forms
2. **Auth**: Test login, signup, forgot password, and logout
3. **OAuth2**: Test SSO flow if configured
4. **Responsive**: Test on mobile, tablet, and desktop
5. **Theme**: Test dark/light mode toggle

### Checklist

- [ ] Contact form submits successfully
- [ ] Demo request form submits successfully
- [ ] Email capture (CTA) submits successfully
- [ ] Login with email/password works
- [ ] Signup with email/password works
- [ ] Forgot password sends reset email
- [ ] OAuth2 SSO flow works (if configured)
- [ ] Logout clears session
- [ ] Redirects to app after auth
- [ ] Dark/light theme toggle works
- [ ] Mobile navigation works
- [ ] All links work correctly

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

### Environment Variables in Vercel

Add these in Project Settings → Environment Variables:

```
XETHER_BACKEND_API_BASE_URL
XETHER_BACKEND_API_KEY (if needed)
XETHER_OAUTH_CLIENT_ID (if using OAuth)
XETHER_OAUTH_CLIENT_SECRET (if using OAuth)
NEXT_PUBLIC_APP_URL
```

### Custom Domain

1. Add domain in Vercel project settings
2. Configure DNS records
3. SSL is automatic

## Troubleshooting

### "Backend not configured" error

**Cause**: Missing `XETHER_BACKEND_API_BASE_URL`
**Solution**: Set the environment variable in `.env.local`

### OAuth2 not working

**Cause**: Missing OAuth credentials
**Solution**: Set `XETHER_OAUTH_CLIENT_ID` and `XETHER_OAUTH_CLIENT_SECRET`

### Forms not submitting

**Cause**: Backend API not reachable
**Solution**: Check backend URL and network connectivity

### Redirects not working after auth

**Cause**: Missing or incorrect `NEXT_PUBLIC_APP_URL`
**Solution**: Set the correct app URL

### Build errors

**Cause**: TypeScript or ESLint errors
**Solution**: Run `npm run lint` and fix issues

## Next Steps

1. Review [API Integration Guide](./API_INTEGRATION.md)
2. Check [TASKS.md](./TASKS.md) for remaining work
3. Read [THEME_SYSTEM.md](../THEME_SYSTEM.md) for theme customization
4. See [CONTRIBUTING.md](../CONTRIBUTING.md) for contribution guidelines

## Support

For issues or questions:
1. Check documentation in `/docs`
2. Review backend API documentation
3. Contact the development team
