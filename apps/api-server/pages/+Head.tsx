// https://vike.dev/Head

import React from "react";
import logoUrl from "../assets/logo.svg";

export default function HeadDefault() {
  return (
    <>
      <link rel="icon" href={logoUrl} />

      {/* <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${import.meta.env.PUBLIC_ENV__GOOGLE_ANALYTICS}`}
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${import.meta.env.PUBLIC_ENV__GOOGLE_ANALYTICS}');`,
        }}
      ></script> */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            const getThemePreference = () => {
              if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
                return localStorage.getItem('theme');
              }
              return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            };
            const isDark = getThemePreference() === 'dark';
            document.documentElement.classList[isDark ? 'add' : 'remove']('dark');
            
            if (typeof localStorage !== 'undefined') {
              const observer = new MutationObserver(() => {
                const isDark = document.documentElement.classList.contains('dark');
                localStorage.setItem('theme', isDark ? 'dark' : 'light');
              });
              observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
            }
          `
        }}
      ></script>
    </>
  );
}
