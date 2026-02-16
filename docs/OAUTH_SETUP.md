# OAuth Provider Setup Guide

Complete guide for setting up Google, GitHub, and GitLab OAuth authentication.

## Overview

The website supports multiple OAuth providers:
- **Google OAuth** - For Google Workspace users
- **GitHub OAuth** - For GitHub users
- **GitLab OAuth** - For GitLab users (self-hosted or GitLab.com)
- **Enterprise SSO** - Generic OAuth2 for custom identity providers

## Quick Setup

### 1. OAuth Buttons Display

By default, all OAuth provider buttons are shown on the login/signup pages. This provides a better user experience and allows you to configure credentials later.

To hide a specific provider button, set its enabled flag to `false`:

```bash
# Hide specific providers
NEXT_PUBLIC_GOOGLE_OAUTH_ENABLED=false
NEXT_PUBLIC_GITHUB_OAUTH_ENABLED=false
NEXT_PUBLIC_GITLAB_OAUTH_ENABLED=false
```

### 2. Configure Credentials

Add the client credentials for the providers you want to use (see detailed setup below).

**Note**: The buttons will show even without credentials configured. Users will see an error if they click a button without configured credentials. Configure credentials before enabling in production.

### 3. Test

Visit `/login` or `/signup` and you'll see buttons for:
- Continue with Google
- Continue with GitHub
- Continue with GitLab
- Continue with Enterprise SSO (always shown)

## Google OAuth Setup

### Step 1: Create OAuth Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Navigate to **APIs & Services** → **Credentials**
4. Click **Create Credentials** → **OAuth client ID**
5. Select **Web application**
6. Add authorized redirect URIs:
   - Development: `http://localhost:3000/api/auth/oauth2/google/callback`
   - Production: `https://yourdomain.com/api/auth/oauth2/google/callback`
7. Copy the **Client ID** and **Client Secret**

### Step 2: Configure Environment Variables

```bash
# Google OAuth is shown by default
# Set to false to hide the button
NEXT_PUBLIC_GOOGLE_OAUTH_ENABLED=true

# Google OAuth credentials
XETHER_GOOGLE_CLIENT_ID=your_google_client_id.apps.googleusercontent.com
XETHER_GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### Step 3: Configure OAuth Consent Screen

1. Go to **APIs & Services** → **OAuth consent screen**
2. Choose **External** (or Internal for Google Workspace)
3. Fill in app information:
   - App name: Xether AI
   - User support email: your-email@example.com
   - Developer contact: your-email@example.com
4. Add scopes: `openid`, `profile`, `email`
5. Add test users (if in testing mode)

### Scopes Requested

- `openid` - OpenID Connect authentication
- `profile` - User's basic profile info
- `email` - User's email address

## GitHub OAuth Setup

### Step 1: Create OAuth App

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Click **New OAuth App**
3. Fill in the details:
   - Application name: Xether AI
   - Homepage URL: `https://yourdomain.com`
   - Authorization callback URL:
     - Development: `http://localhost:3000/api/auth/oauth2/github/callback`
     - Production: `https://yourdomain.com/api/auth/oauth2/github/callback`
4. Click **Register application**
5. Copy the **Client ID**
6. Generate a new **Client Secret** and copy it

### Step 2: Configure Environment Variables

```bash
# GitHub OAuth is shown by default
# Set to false to hide the button
NEXT_PUBLIC_GITHUB_OAUTH_ENABLED=true

# GitHub OAuth credentials
XETHER_GITHUB_CLIENT_ID=your_github_client_id
XETHER_GITHUB_CLIENT_SECRET=your_github_client_secret
```

### Scopes Requested

- `read:user` - Read user profile data
- `user:email` - Read user email addresses

## GitLab OAuth Setup

### Step 1: Create OAuth Application

#### For GitLab.com:

1. Go to [GitLab Applications](https://gitlab.com/-/profile/applications)
2. Click **Add new application**
3. Fill in the details:
   - Name: Xether AI
   - Redirect URI:
     - Development: `http://localhost:3000/api/auth/oauth2/gitlab/callback`
     - Production: `https://yourdomain.com/api/auth/oauth2/gitlab/callback`
   - Scopes: Select `read_user`
4. Click **Save application**
5. Copy the **Application ID** and **Secret**

#### For Self-Hosted GitLab:

1. Go to your GitLab instance: `https://gitlab.yourcompany.com/-/profile/applications`
2. Follow the same steps as above
3. Note your GitLab instance URL

### Step 2: Configure Environment Variables

#### For GitLab.com:

```bash
# GitLab OAuth is shown by default
# Set to false to hide the button
NEXT_PUBLIC_GITLAB_OAUTH_ENABLED=true

# GitLab OAuth credentials
XETHER_GITLAB_CLIENT_ID=your_gitlab_application_id
XETHER_GITLAB_CLIENT_SECRET=your_gitlab_secret
XETHER_GITLAB_URL=https://gitlab.com
```

#### For Self-Hosted GitLab:

```bash
# GitLab OAuth is shown by default
# Set to false to hide the button
NEXT_PUBLIC_GITLAB_OAUTH_ENABLED=true

# GitLab OAuth credentials
XETHER_GITLAB_CLIENT_ID=your_gitlab_application_id
XETHER_GITLAB_CLIENT_SECRET=your_gitlab_secret
XETHER_GITLAB_URL=https://gitlab.yourcompany.com
```

### Scopes Requested

- `read_user` - Read user profile data

## Enterprise SSO (Generic OAuth2)

For custom identity providers (Okta, Auth0, Azure AD, etc.):

```bash
# Generic OAuth2 configuration
XETHER_OAUTH_CLIENT_ID=your_client_id
XETHER_OAUTH_CLIENT_SECRET=your_client_secret
XETHER_OAUTH_SCOPES=openid profile email
XETHER_OAUTH_RESPONSE_TYPE=code

# Optional: Custom paths
XETHER_OAUTH_AUTHORIZE_PATH=/oauth/authorize
XETHER_OAUTH_TOKEN_PATH=/oauth/token
```

The "Continue with Enterprise SSO" button will always be shown.

## Complete .env.local Example

```bash
# Backend API
XETHER_BACKEND_API_BASE_URL=https://api.xether.ai

# Application URL
NEXT_PUBLIC_APP_URL=https://app.xether.ai

# Google OAuth
NEXT_PUBLIC_GOOGLE_OAUTH_ENABLED=true
XETHER_GOOGLE_CLIENT_ID=123456789.apps.googleusercontent.com
XETHER_GOOGLE_CLIENT_SECRET=GOCSPX-abc123def456

# GitHub OAuth
NEXT_PUBLIC_GITHUB_OAUTH_ENABLED=true
XETHER_GITHUB_CLIENT_ID=Iv1.abc123def456
XETHER_GITHUB_CLIENT_SECRET=abc123def456ghi789

# GitLab OAuth
NEXT_PUBLIC_GITLAB_OAUTH_ENABLED=true
XETHER_GITLAB_CLIENT_ID=abc123def456
XETHER_GITLAB_CLIENT_SECRET=abc123def456ghi789
XETHER_GITLAB_URL=https://gitlab.com

# Enterprise SSO (optional)
XETHER_OAUTH_CLIENT_ID=your_enterprise_client_id
XETHER_OAUTH_CLIENT_SECRET=your_enterprise_client_secret
```

## Testing OAuth Flows

### Local Development

1. Start the dev server: `npm run dev`
2. Go to `http://localhost:3000/login`
3. Click on an OAuth provider button
4. Complete the OAuth flow
5. You should be redirected to `NEXT_PUBLIC_APP_URL`

### Verify Cookies

After successful OAuth:
1. Open browser DevTools → Application → Cookies
2. Check for `xether_access_token` cookie
3. Verify it's HTTP-only and Secure (in production)

## Troubleshooting

### "OAuth not configured" Error

**Cause**: Missing client credentials  
**Solution**: Set `XETHER_[PROVIDER]_CLIENT_ID` and `XETHER_[PROVIDER]_CLIENT_SECRET`

### "Invalid OAuth state" Error

**Cause**: State parameter mismatch (CSRF protection)  
**Solution**: 
- Clear cookies and try again
- Check that cookies are enabled
- Verify redirect URI matches exactly

### "Redirect URI mismatch" Error

**Cause**: Callback URL doesn't match configured URL  
**Solution**: 
- Check the redirect URI in provider settings
- Ensure it matches: `https://yourdomain.com/api/auth/oauth2/[provider]/callback`
- No trailing slash
- Exact protocol (http vs https)

### Provider Button Not Showing

**Cause**: Provider explicitly disabled  
**Solution**: Remove the `NEXT_PUBLIC_[PROVIDER]_OAUTH_ENABLED=false` line or set it to `true`

**Note**: By default, all provider buttons are shown. You only need to set the enabled flag if you want to hide a button.

### Cookies Not Being Set

**Cause**: Secure cookie settings in development  
**Solution**: 
- Set `NODE_ENV=development` in `.env.local`
- In production, ensure HTTPS is enabled

## Security Considerations

### State Parameter

All OAuth flows use a cryptographically random state parameter to prevent CSRF attacks.

### HTTP-Only Cookies

Access tokens are stored in HTTP-only cookies, making them inaccessible to JavaScript.

### Secure Cookies

In production (`NODE_ENV=production`), cookies are marked as Secure (HTTPS only).

### SameSite Protection

Cookies use `SameSite=Lax` for additional CSRF protection.

### Token Storage

- Access tokens: Stored in `xether_access_token` cookie
- Refresh tokens: Stored in `xether_refresh_token` cookie (when available)
- ID tokens: Stored in `xether_refresh_token` cookie (Google only)

## API Endpoints

### OAuth Initiation

- Google: `GET /api/auth/oauth2/google`
- GitHub: `GET /api/auth/oauth2/github`
- GitLab: `GET /api/auth/oauth2/gitlab`
- Enterprise: `GET /api/auth/oauth2/start`

### OAuth Callbacks

- Google: `GET /api/auth/oauth2/google/callback`
- GitHub: `GET /api/auth/oauth2/github/callback`
- GitLab: `GET /api/auth/oauth2/gitlab/callback`
- Enterprise: `GET /api/auth/oauth2/callback`

## Production Checklist

- [ ] OAuth credentials configured for production domain
- [ ] Redirect URIs updated in provider settings
- [ ] `NEXT_PUBLIC_APP_URL` set to production app URL
- [ ] `NODE_ENV=production` set
- [ ] HTTPS enabled
- [ ] Cookies working correctly
- [ ] Test each OAuth flow
- [ ] Verify redirects work
- [ ] Check error handling

## Additional Resources

- [Google OAuth Documentation](https://developers.google.com/identity/protocols/oauth2)
- [GitHub OAuth Documentation](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps)
- [GitLab OAuth Documentation](https://docs.gitlab.com/ee/api/oauth2.html)
- [OAuth 2.0 Specification](https://oauth.net/2/)

## Support

For issues or questions:
1. Check this documentation
2. Verify environment variables
3. Check browser console for errors
4. Review API route logs
5. Contact development team
