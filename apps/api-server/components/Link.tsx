import { cn } from "@/lib/utils";
import { baseLocale, Locale } from "@/paraglide/runtime";
import React from "react";
import { usePageContext } from "vike-react/usePageContext";

export type LinkProps = React.ComponentProps<"a"> & {
  href: string;
  locale?: Locale;
  activeClassName?: string | false;
};

export function Link({
  href,
  locale,
  className,
  activeClassName = "text-black",
  ...props }: LinkProps) {
  const pageContext = usePageContext()
  const { urlPathname } = pageContext

  // Handle locale logic
  locale = locale ?? pageContext.locale
  let localizedHref = href
  if (locale !== baseLocale) {
    localizedHref = '/' + locale + href
  }

  // Handle active link detection
  // Normalize current path by removing locale prefix if present
  let normalizedPath = urlPathname
  if (locale !== baseLocale && urlPathname.startsWith('/' + locale)) {
    normalizedPath = urlPathname.substring(('/' + locale).length) || '/'
  }

  // Check if the link is active
  const isActive = href === '/'
    ? normalizedPath === '/'
    : normalizedPath.startsWith(href)

  return (
    <a
      href={localizedHref}
      className={cn(className, { [String(activeClassName)]: isActive })}
      {...props}
    />
  )
}
