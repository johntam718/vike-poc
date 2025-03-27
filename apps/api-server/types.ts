import { Locale } from "@/paraglide/runtime"

declare global {
  namespace Vike {
    interface PageContext {
      // Type of pageContext.user
      locale: Locale
    }
  }
}

export { }