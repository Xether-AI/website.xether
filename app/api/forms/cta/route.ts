import { getBackendPath, proxyJson } from '@/lib/server/backend'

export async function POST(req: Request) {
  const path = getBackendPath('CTA_EMAIL', '/forms/cta')
  return proxyJson(req, path)
}

