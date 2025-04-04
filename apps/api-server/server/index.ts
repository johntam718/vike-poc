import { Hono } from 'hono'
// apply() installs Vike's middlewares onto the server
import { apply } from 'vike-server/hono'
// serve() allows a unique file to target Node.js, Cloudflare, Vercel, Deno, Bun, etc...
import { serve } from 'vike-server/hono/serve'

function startServer() {
  const app = new Hono()

  apply(app)
  const port = process.env.PORT || 3000
  // port is only used when running on non-serverless environments
  return serve(app, { port: +port })
}

export default startServer()