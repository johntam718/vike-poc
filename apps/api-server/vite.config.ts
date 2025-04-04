import { paraglideVitePlugin } from '@inlang/paraglide-js'
import { pages } from "vike-cloudflare";
import { sentryVitePlugin } from "@sentry/vite-plugin";
import react from "@vitejs/plugin-react";
import devServer from "@hono/vite-dev-server";
import { defineConfig } from "vite";
import vike from "vike/plugin";
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    paraglideVitePlugin({
      project: './project.inlang',
      outdir: './paraglide',
      disableAsyncLocalStorage: true,
      strategy: ['url', 'baseLocale'],
    }),
    vike(),
    tailwindcss(),
    tsconfigPaths(),
    react({}),
    // sentryVitePlugin({
    //   sourcemaps: {
    //     disable: false,
    //   },
    // }),
    // devServer({
    //   entry: "hono-entry.ts",

    //   exclude: [
    //     /^\/@.+$/,
    //     /.*\.(ts|tsx|vue)($|\?)/,
    //     /.*\.(s?css|less)($|\?)/,
    //     /^\/favicon\.ico$/,
    //     /.*\.(svg|png)($|\?)/,
    //     /^\/(public|assets|static)\/.+/,
    //     /^\/node_modules\/.*/,
    //   ],

    //   injectClientScript: false,
    // }),

    // pages({
    //   server: {
    //     kind: "hono",
    //     entry: "hono-entry.ts",
    //   },
    // }),
  ],
  build: {
    rollupOptions: {
      external: ["wrangler"],
    },

    target: "es2022",
    sourcemap: true,
  }
});
