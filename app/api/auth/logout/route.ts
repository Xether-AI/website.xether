import { NextResponse } from 'next/server'
import { SESSION_COOKIE_ACCESS, SESSION_COOKIE_REFRESH } from '@/lib/server/session'

export async function POST() {
  const res = NextResponse.json({ ok: true })
  const secure = process.env.NODE_ENV === 'production'

  // Clear session cookies
  res.cookies.set(SESSION_COOKIE_ACCESS, '', {
    httpOnly: true,
    secure,
    sameSite: 'lax',
    path: '/',
    maxAge: 0,
  })
  res.cookies.set(SESSION_COOKIE_REFRESH, '', {
    httpOnly: true,
    secure,
    sameSite: 'lax',
    path: '/',
    maxAge: 0,
  })

  return res
}
