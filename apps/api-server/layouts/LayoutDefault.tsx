import { Header } from "@/components/header";
import "./style.css";

import React, { createContext, useContext, useEffect } from "react";
import { useTheme } from "@/hooks/useTheme";
import { assertIsLocale, baseLocale, getLocale, overwriteGetLocale, overwriteSetLocale, setLocale } from "@/paraglide/runtime";
import { usePageContext } from "vike-react/usePageContext";
import { useConfig } from "vike-react/useConfig";

const LocaleContextSSR = createContext(baseLocale);
if (import.meta.env.SSR) {
  overwriteGetLocale(() => assertIsLocale(useContext(LocaleContextSSR)));
}

export default function LayoutDefault({ children }: { children: React.ReactNode }) {
  useTheme();
  const pageContext = usePageContext();
  const config = useConfig();
  // console.log(pageContext.locale);

  config({
    lang: pageContext.locale,
  })
  return <div>
    <LocaleContextSSR.Provider value={pageContext.locale}>
      <Header />
      {children}
    </LocaleContextSSR.Provider>
  </div>;
}