"use client"

import { useEffect, useState } from "react"

export function useResponsiveValue<T>(defaultValue: T, breakpoints: { sm?: T; md?: T; lg?: T; xl?: T; "2xl"?: T }): T {
  const [value, setValue] = useState<T>(defaultValue)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width >= 1536 && breakpoints["2xl"] !== undefined) {
        setValue(breakpoints["2xl"])
      } else if (width >= 1280 && breakpoints.xl !== undefined) {
        setValue(breakpoints.xl)
      } else if (width >= 1024 && breakpoints.lg !== undefined) {
        setValue(breakpoints.lg)
      } else if (width >= 768 && breakpoints.md !== undefined) {
        setValue(breakpoints.md)
      } else if (width >= 640 && breakpoints.sm !== undefined) {
        setValue(breakpoints.sm)
      } else {
        setValue(defaultValue)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [defaultValue, breakpoints])

  return value
}

export function ResponsiveImage({
  src,
  alt,
  className,
  sizes = { default: { width: 300, height: 300 } },
}: {
  src: string
  alt: string
  className?: string
  sizes?: {
    default: { width: number; height: number }
    sm?: { width: number; height: number }
    md?: { width: number; height: number }
    lg?: { width: number; height: number }
  }
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const currentSize = useResponsiveValue(sizes.default, {
    sm: sizes.sm,
    md: sizes.md,
    lg: sizes.lg,
  })

  if (!mounted) {
    return null
  }

  return (
    <img
      src={src || "/placeholder.svg"}
      alt={alt}
      width={currentSize.width}
      height={currentSize.height}
      className={className}
    />
  )
}
