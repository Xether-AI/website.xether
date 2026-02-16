import { NextResponse } from 'next/server'

const OAUTH_STATE_COOKIE = 'xether_oauth_state'

export async function GET(req: Request) {
  const clientId = process.env.XETHER_GOOGLE_CLIENT_ID || ''
  const clientSecret = process.env.XETHER_GOOGLE_CLIENT_SECRET || ''

  if (!clientId || !clientSecret) {
    return NextResponse.json(
      { error: 'Google OAuth not configured. Set XETHER_GOOGLE_CLIENT_ID and XETHER_GOOGLE_CLIENT_SECRET.' },
      { status: 501 },
    )
  }

  const origin = new URL(req.url).origin
  const redirectUri = `${origin}/api/auth/oauth2/google/callback`

  const authorizeUrl = new URL('https://accounts.google.com/o/oauth2/v2/auth')
  const state = crypto.randomUUID()
  const scope = 'openid profile email'

  authorizeUrl.searchParams.set('client_id', clientId)
  authorizeUrl.searchParams.set('redirect_uri', redirectUri)
  authorizeUrl.searchParams.set('response_type', 'code')
  authorizeUrl.searchParams.set('scope', scope)
  authorizeUrl.searchParams.set('state', state)
  authorizeUrl.searchParams.set('access_type', 'offline')
  authorizeUrl.searchParams.set('prompt', 'consent')

  const res = NextResponse.redirect(authorizeUrl)
  const secure = process.env.NODE_ENV === 'production'
  res.cookies.set(OAUTH_STATE_COOKIE, state, {
    httpOnly: true,
    secure,
    sameSite: 'lax',
    path: '/api/auth/oauth2/google',
    maxAge: 10 * 60,
  })
  return res
}
