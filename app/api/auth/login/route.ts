import { NextResponse } from 'next/server'
import { getBackendBaseUrl, getBackendPath } from '@/lib/server/backend'
import { SESSION_COOKIE_ACCESS, SESSION_COOKIE_REFRESH } from '@/lib/server/session'

export async function POST(req: Request) {
  const baseUrl = getBackendBaseUrl()
  if (!baseUrl) {
    return NextResponse.json(
      { error: 'Backend not configured. Set XETHER_BACKEND_API_BASE_URL.' },
      { status: 501 },
    )
  }

  const path = getBackendPath('AUTH_LOGIN', '/auth/login')
  const body = await req.json().catch(() => ({}))

  const upstreamRes = await fetch(new URL(path, baseUrl), {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      ...(process.env.XETHER_BACKEND_API_KEY
        ? { authorization: `Bearer ${process.env.XETHER_BACKEND_API_KEY}` }
        : {}),
    },
    body: JSON.stringify(body),
    cache: 'no-store',
  })

  const contentType = upstreamRes.headers.get('content-type') ?? ''
  const data = contentType.includes('application/json')
    ? await upstreamRes.json().catch(() => null)
    : await upstreamRes.text().catch(() => null)

  if (!upstreamRes.ok) {
    return NextResponse.json(
      typeof data === 'string' ? { error: data } : (data ?? { error: 'Login failed' }),
      { status: upstreamRes.status },
    )
  }

  const res = NextResponse.json({ ok: true })
  const accessToken =
    typeof data === 'object' && data && 'access_token' in (data as any)
      ? String((data as any).access_token)
      : null
  const refreshToken =
    typeof data === 'object' && data && 'refresh_token' in (data as any)
      ? String((data as any).refresh_token)
      : null

  const secure = process.env.NODE_ENV === 'production'
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

