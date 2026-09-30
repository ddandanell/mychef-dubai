import { createServer } from 'vite'

const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' })
try {
  await server.ssrLoadModule('/scripts/test-route-readiness.tsx')
} finally {
  await server.close()
}
