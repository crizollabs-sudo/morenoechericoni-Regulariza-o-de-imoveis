import { CSSProperties, ReactNode, ElementType } from "react"
import { cn } from "@/lib/utils"

type Direction = "up" | "down" | "right" | "left" | "grow"

interface RevealProps {
  children: ReactNode
  direction?: Direction
  delay?: number
  threshold?: number
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
  void threshold
  const style = delay
    ? ({ transitionDelay: `${delay}ms` } as CSSProperties)
    : undefined

  return (
    <Tag className={cn(`reveal reveal-${direction}`, className)} style={style}>
      {children}
    </Tag>
  )
}
