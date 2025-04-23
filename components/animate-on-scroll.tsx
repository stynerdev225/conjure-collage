"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

type AnimationVariant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "zoom-in"
  | "zoom-out"
  | "flip-up"
  | "flip-down"

interface AnimateOnScrollProps {
  children: ReactNode
  className?: string
  variant?: AnimationVariant
  delay?: number // delay in milliseconds
  threshold?: number // 0-1, percentage of element visible to trigger
  once?: boolean // animate only once or every time element comes into view
}

export function AnimateOnScroll({
  children,
  className,
  variant = "fade-up",
  delay = 0,
  threshold = 0.1,
  once = true,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Set initial state - invisible and transformed according to animation type
    element.style.opacity = "0"
    element.style.transform = getInitialTransform(variant)
    element.style.transition = `opacity 0.6s ease-out, transform 0.6s ease-out`
    if (delay) {
      element.style.transitionDelay = `${delay}ms`
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // When element is visible, animate in
            element.style.opacity = "1"
            element.style.transform = "translate3d(0, 0, 0) scale(1) rotate(0)"

            // If once is true, unobserve after animation
            if (once) {
              observer.unobserve(element)
            }
          } else if (!once) {
            // If not once, reset when out of view
            element.style.opacity = "0"
            element.style.transform = getInitialTransform(variant)
          }
        })
      },
      { threshold },
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [variant, delay, threshold, once])

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  )
}

// Helper function to get initial transform based on animation variant
function getInitialTransform(variant: AnimationVariant): string {
  switch (variant) {
    case "fade-up":
      return "translate3d(0, 30px, 0)"
    case "fade-down":
      return "translate3d(0, -30px, 0)"
    case "fade-left":
      return "translate3d(30px, 0, 0)"
    case "fade-right":
      return "translate3d(-30px, 0, 0)"
    case "zoom-in":
      return "scale(0.9)"
    case "zoom-out":
      return "scale(1.1)"
    case "flip-up":
      return "rotateX(-10deg) translate3d(0, 30px, 0)"
    case "flip-down":
      return "rotateX(10deg) translate3d(0, -30px, 0)"
    default:
      return "translate3d(0, 0, 0)"
  }
}
