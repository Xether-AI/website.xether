import { getBackendPath, proxyJson } from '@/lib/server/backend'

export async function POST(req: Request) {
  const path = getBackendPath('DEMO_REQUEST', '/forms/demo')
  return proxyJson(req, path)
}

