import { cookies } from 'next/headers'

export const SESSION_COOKIE_ACCESS = 'xether_access_token'
export const SESSION_COOKIE_REFRESH = 'xether_refresh_token'

export function getAccessToken() {
  return cookies().get(SESSION_COOKIE_ACCESS)?.value ?? null
}

export function isAuthenticated() {
  return Boolean(getAccessToken())
}

