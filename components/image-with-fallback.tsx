"use client"

import Image from "next/image"
import { useState } from "react"

interface ImageWithFallbackProps {
  src: string
  alt: string
  width: number
  height: number
  fallbackSrc?: string
  className?: string
  priority?: boolean
}

export function ImageWithFallback({
  src,
  alt,
  width,
  height,
  fallbackSrc = "/placeholder.svg",
  className,
  priority = false,
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <Image
      src={imgSrc || "/placeholder.svg"}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      onError={() => {
        setImgSrc(fallbackSrc)
      }}
    />
  )
}
