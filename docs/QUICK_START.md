# Quick Start Guide

Get the Xether AI marketing website running in 5 minutes.

## Prerequisites

- Node.js 20.9+
- Backend API access

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```bash
# Required - Your backend API URL
XETHER_BACKEND_API_BASE_URL=https://api.xether.ai

# Optional - Where to redirect after auth
NEXT_PUBLIC_APP_URL=https://app.xether.ai

# Optional - OAuth2 credentials
XETHER_OAUTH_CLIENT_ID=your_client_id
XETHER_OAUTH_CLIENT_SECRET=your_client_secret
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Test the Integration

### Test Forms

1. Go to [http://localhost:3000/contact](http://localhost:3000/contact)
2. Fill out the contact form
3. Submit and check for success toast

### Test Authentication

1. Go to [http://localhost:3000/signup](http://localhost:3000/signup)
2. Create an account
3. Should redirect to your app URL

### Test OAuth2 (if configured)

1. Go to [http://localhost:3000/login](http://localhost:3000/login)
2. Click "Continue with SSO"
3. Complete OAuth flow

## Common Issues

### "Backend not configured" error

**Solution**: Set `XETHER_BACKEND_API_BASE_URL` in `.env.local`

### Forms not submitting

**Solution**: Check backend is running and accessible

### OAuth2 not working

**Solution**: Set `XETHER_OAUTH_CLIENT_ID` and `XETHER_OAUTH_CLIENT_SECRET`

## Next Steps

- Read [SETUP.md](./SETUP.md) for detailed setup
- Read [API_INTEGRATION.md](./API_INTEGRATION.md) for API details
- Check [COMPLETION_SUMMARY.md](./COMPLETION_SUMMARY.md) for what's implemented

## Production Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import in Vercel
3. Add environment variables
4. Deploy

### Environment Variables for Production

```
XETHER_BACKEND_API_BASE_URL=https://api.xether.ai
XETHER_BACKEND_API_KEY=your_api_key
XETHER_OAUTH_CLIENT_ID=your_client_id
XETHER_OAUTH_CLIENT_SECRET=your_client_secret
NEXT_PUBLIC_APP_URL=https://app.xether.ai
NODE_ENV=production
```

## Support

- 📖 [Full Documentation](./SETUP.md)
- 🔧 [API Integration Guide](./API_INTEGRATION.md)
- ✅ [Completion Summary](./COMPLETION_SUMMARY.md)
- 📋 [Tasks Tracker](./TASKS.md)
