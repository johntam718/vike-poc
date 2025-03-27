import { baseLocale, extractLocaleFromCookie, extractLocaleFromUrl, getLocale, locales } from '@/paraglide/runtime'
import { useConfig } from 'vike-react/useConfig'
import { modifyUrl } from 'vike/modifyUrl'
import type { PageContext, Url } from 'vike/types'

export function onBeforeRoute(pageContext: PageContext) {
  const { urlLogical, locale } = extractLocale(pageContext.urlParsed)
  console.log({ urlLogical, locale })
  return {
    pageContext: {
      // Make locale available as pageContext.locale
      locale,
      // Vike's router will use pageContext.urlLogical instead of pageContext.urlOriginal and
      // the locale is removed from pageContext.urlParsed
      urlLogical
    }
  }
}

function extractLocale(url: Url) {
  const { pathname } = url

  // // Determine the locale, for example:
  // //  /en-US/film/42 => en-US
  // //  /de-DE/film/42 => de-DE
  // const locale = extractLocaleFromUrl(pathname)
  // // console.log(locale)
  // // const locale = extractLocaleFromUrl(pathname)

  // // Remove the locale, for example:
  // //  /en-US/film/42 => /film/42
  // //  /de-DE/film/42 => /film/42
  // const pathnameWithoutLocale = pathname.replace(`/${locale}`, "")
  // console.log({ pathnameWithoutLocale })

  // // Reconstruct full URL
  // // Cause Error: The onBeforeRoute() hook defined by /pages/+onBeforeRoute.ts returned { pageContext: { urlLogical } } but urlLogical is 'http://localhost:3000/' but it should start with '/'
  // const urlLogical = modifyUrl(url.href, { pathname: pathnameWithoutLocale })

  // console.log({ locale, urlLogical })

  // Follow example
  const path = pathname.split('/')

  let locale
  let urlPathnameWithoutLocale
  // We remove the URL locale, for example `/de-DE/about` => `/about`
  const first = path[1]
  if (locales.filter((locale) => locale !== baseLocale).includes(first as any)) {
    locale = first
    urlPathnameWithoutLocale = '/' + path.slice(2).join('/')
  } else {
    locale = baseLocale
    urlPathnameWithoutLocale = pathname
  }

  const urlLogical = modifyUrl(url.href, { pathname: urlPathnameWithoutLocale })


  return { locale, urlLogical }
}