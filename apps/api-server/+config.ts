import vikeServer from 'vike-server/config'
import vikeCloudflare from "vike-cloudflare/config";
import { Config } from 'vike/types'

export const config = {
  extends: [vikeServer, vikeCloudflare],
  // Points to your server entry
  server: {
    entry: 'server/index.ts'
  }
} satisfies Config