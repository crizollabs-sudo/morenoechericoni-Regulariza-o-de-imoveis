"use client"

import { useEffect } from "react"

export function HorizontalScrollLock() {
  useEffect(() => {
    let startX = 0
    let startY = 0

    const resetHorizontalScroll = () => {
      if (window.scrollX !== 0) {
        window.scrollTo(0, window.scrollY)
      }

      if (document.documentElement.scrollLeft !== 0) {
        document.documentElement.scrollLeft = 0
      }

      if (document.body.scrollLeft !== 0) {
        document.body.scrollLeft = 0
      }
    }

    const handleTouchStart = (event: TouchEvent) => {
      const touch = event.touches[0]
      if (!touch) return

      startX = touch.clientX
      startY = touch.clientY
    }

    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0]
      if (!touch) return

      const deltaX = Math.abs(touch.clientX - startX)
      const deltaY = Math.abs(touch.clientY - startY)

      if (deltaX > deltaY) {
        event.preventDefault()
        resetHorizontalScroll()
      }
    }

    window.addEventListener("scroll", resetHorizontalScroll, { passive: true })
    document.addEventListener("touchstart", handleTouchStart, { passive: true })
    document.addEventListener("touchmove", handleTouchMove, { passive: false })
    resetHorizontalScroll()

    return () => {
      window.removeEventListener("scroll", resetHorizontalScroll)
      document.removeEventListener("touchstart", handleTouchStart)
      document.removeEventListener("touchmove", handleTouchMove)
    }
  }, [])

  return null
}
