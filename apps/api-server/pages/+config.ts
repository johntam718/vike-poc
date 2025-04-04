import vikeReact from "vike-react/config";
import type { Config } from "vike/types";
import Layout from "../layouts/LayoutDefault.jsx";
import { m } from "@/paraglide/messages.js";

// Default config (can be overridden by pages)
// https://vike.dev/config

export default {
  // https://vike.dev/Layout
  Layout,

  passToClient: ['locale'],

  // https://vike.dev/head-tags
  title: m.app_name(),
  description: m.app_description(),

  extends: vikeReact,
} satisfies Config;
