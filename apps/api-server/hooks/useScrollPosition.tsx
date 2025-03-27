import { useState, useEffect } from "react"

export function useScrollPosition(threshold: number, direction: "vertical" | "horizontal" = "vertical") {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = direction === "vertical" ? window.scrollY : window.scrollX
      if (scrollPosition > threshold) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [threshold, direction])

  return isScrolled
}
