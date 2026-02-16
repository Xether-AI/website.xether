import { getBackendPath, proxyJson } from '@/lib/server/backend'

export async function POST(req: Request) {
  const path = getBackendPath('CONTACT_FORM', '/forms/contact')
  return proxyJson(req, path)
}

