import { cn } from "@/lib/utils";
import { Locale } from "@/paraglide/runtime";
import React from "react";
import { usePageContext } from "vike-react/usePageContext";

export type LinkProps = React.ComponentProps<"a"> & {
  href: string;
  locale?: Locale;
};

export function Link({ href, locale, className, children, ...props }: LinkProps) {
  const pageContext = usePageContext();
  const { urlPathname } = pageContext;
  if (locale && locale !== pageContext.locale) {
    href = `/${locale}${href}`;
  }
  const isActive = href === "/" ? urlPathname === href : urlPathname.startsWith(href);
  return (
    <a href={href} className={cn(className, isActive && 'is-active')} {...props}>
      {children}
    </a >
  );
}
