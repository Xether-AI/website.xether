import { NextResponse } from 'next/server'
import { getBackendBaseUrl, getBackendPath } from '@/lib/server/backend'

export async function POST(req: Request) {
  const baseUrl = getBackendBaseUrl()
  if (!baseUrl) {
    return NextResponse.json(
      { error: 'Backend not configured. Set XETHER_BACKEND_API_BASE_URL.' },
      { status: 501 },
    )
  }

  const path = getBackendPath('AUTH_FORGOT_PASSWORD', '/auth/forgot-password')
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
      typeof data === 'string' ? { error: data } : (data ?? { error: 'Request failed' }),
      { status: upstreamRes.status },
    )
  }

  return NextResponse.json({ ok: true })
}

