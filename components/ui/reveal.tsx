"use client"

import { useEffect, useRef, ReactNode, ElementType } from "react"
import { cn } from "@/lib/utils"

type Direction = "up" | "down" | "right" | "left" | "grow"

interface RevealProps {
  children: ReactNode
  direction?: Direction
  delay?: number        // ms
  threshold?: number    // 0–1, quanto do elemento precisa estar visível
  className?: string
  as?: ElementType
}

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  threshold = 0.12,
  className,
  as: Tag = "div",
}: RevealProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (delay) el.style.transitionDelay = `${delay}ms`

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible")
          observer.unobserve(el)   // dispara só uma vez
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay, threshold])

  return (
    <Tag
      ref={ref}
      className={cn(`reveal reveal-${direction}`, className)}
    >
      {children}
    </Tag>
  )
}
