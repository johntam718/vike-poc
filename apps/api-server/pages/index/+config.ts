import { m } from "@/paraglide/messages";
import vikeReact from "vike-react/config";
import type { Config } from "vike/types";

// Default config (can be overridden by pages)
// https://vike.dev/config

export default {
  // https://vike.dev/head-tags
  title: m.app_name(),
  description: m.app_description(),

  prerender: {
    partial: false,
  },
  // ssr: true,

  extends: vikeReact,
} satisfies Config;
