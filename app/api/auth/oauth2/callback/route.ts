import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { getBackendBaseUrl, getBackendPath } from '@/lib/server/backend'
import { SESSION_COOKIE_ACCESS, SESSION_COOKIE_REFRESH } from '@/lib/server/session'

const OAUTH_STATE_COOKIE = 'xether_oauth_state'

export async function GET(req: Request) {
  const baseUrl = getBackendBaseUrl()
  const clientId = process.env.XETHER_OAUTH_CLIENT_ID || ''
  const clientSecret = process.env.XETHER_OAUTH_CLIENT_SECRET || ''

  if (!baseUrl || !clientId) {
    return NextResponse.json(
      { error: 'OAuth not configured. Set XETHER_BACKEND_API_BASE_URL and XETHER_OAUTH_CLIENT_ID.' },
      { status: 501 },
    )
  }

  const url = new URL(req.url)
  const code = url.searchParams.get('code')
  const state = url.searchParams.get('state')
  const storedState = cookies().get(OAUTH_STATE_COOKIE)?.value ?? null

  if (!code) {
    return NextResponse.json({ error: 'Missing OAuth code' }, { status: 400 })
  }

  if (!state || !storedState || state !== storedState) {
    return NextResponse.json({ error: 'Invalid OAuth state' }, { status: 400 })
  }

  const origin = url.origin
  const redirectUri = `${origin}/api/auth/oauth2/callback`

  const tokenPath = getBackendPath('OAUTH_TOKEN', '/oauth/token')
  const tokenUrl = new URL(tokenPath, baseUrl)

  const body = new URLSearchParams()
  body.set('grant_type', 'authorization_code')
  body.set('code', code)
  body.set('redirect_uri', redirectUri)
  body.set('client_id', clientId)
  if (clientSecret) body.set('client_secret', clientSecret)

  const upstreamRes = await fetch(tokenUrl, {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      ...(process.env.XETHER_BACKEND_API_KEY
        ? { authorization: `Bearer ${process.env.XETHER_BACKEND_API_KEY}` }
        : {}),
    },
    body,
    cache: 'no-store',
  })

  const contentType = upstreamRes.headers.get('content-type') ?? ''
  const data = contentType.includes('application/json')
    ? await upstreamRes.json().catch(() => null)
    : await upstreamRes.text().catch(() => null)

  if (!upstreamRes.ok) {
    return NextResponse.json(
      typeof data === 'string' ? { error: data } : (data ?? { error: 'Token exchange failed' }),
      { status: upstreamRes.status },
    )
  }

  const accessToken =
    typeof data === 'object' && data && 'access_token' in (data as any)
      ? String((data as any).access_token)
      : null
  const refreshToken =
    typeof data === 'object' && data && 'refresh_token' in (data as any)
      ? String((data as any).refresh_token)
      : null

  const appUrl = process.env.NEXT_PUBLIC_APP_URL || '/'
  const next = url.searchParams.get('next')
  const redirectTo = next ? new URL(next, appUrl).toString() : appUrl

  const res = NextResponse.redirect(redirectTo)
  const secure = process.env.NODE_ENV === 'production'

  // Clear state cookie
  res.cookies.set(OAUTH_STATE_COOKIE, '', {
    httpOnly: true,
    secure,
    sameSite: 'lax',
    path: '/api/auth/oauth2',
    maxAge: 0,
  })

  if (accessToken) {
    res.cookies.set(SESSION_COOKIE_ACCESS, accessToken, {
      httpOnly: true,
      secure,
      sameSite: 'lax',
      path: '/',
    })
  }
  if (refreshToken) {
    res.cookies.set(SESSION_COOKIE_REFRESH, refreshToken, {
      httpOnly: true,
      secure,
      sameSite: 'lax',
      path: '/',
    })
  }

  return res
}

