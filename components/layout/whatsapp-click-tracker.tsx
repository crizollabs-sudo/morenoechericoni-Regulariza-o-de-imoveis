"use client"

import { useEffect } from "react"

type DataLayer = Array<Record<string, unknown>>

declare global {
  interface Window {
    dataLayer?: DataLayer
  }
}

const isWhatsappHref = (href: string) => {
  const normalizedHref = href.toLowerCase()

  return (
    normalizedHref.includes("wa.me") ||
    normalizedHref.includes("api.whatsapp.com")
  )
}

export function WhatsappClickTracker() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target

      if (!(target instanceof Element)) return

      const link = target.closest<HTMLAnchorElement>("a[href]")
      const href = link?.href

      if (!href || !isWhatsappHref(href)) return

      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({ event: "whatsapp_click" })
    }

    document.addEventListener("click", handleClick, true)

    return () => {
      document.removeEventListener("click", handleClick, true)
    }
  }, [])

  return null
}
