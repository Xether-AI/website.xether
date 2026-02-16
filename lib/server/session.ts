import { cookies } from 'next/headers'

export const SESSION_COOKIE_ACCESS = 'xether_access_token'
export const SESSION_COOKIE_REFRESH = 'xether_refresh_token'

export async function getAccessToken() {
  const cookieStore = await cookies()
  return cookieStore.get(SESSION_COOKIE_ACCESS)?.value ?? null
}

export async function isAuthenticated() {
  const token = await getAccessToken()
  return Boolean(token)
}

