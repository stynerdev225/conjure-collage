"use client"

import { generateArtistSchema, generateOrganizationSchema, generateServiceSchema } from "@/lib/schema"
import { usePathname } from "next/navigation"

export function SchemaMarkup() {
  const pathname = usePathname()

  // Generate the appropriate schema based on the current page
  let schema = generateOrganizationSchema()

  if (pathname === "/about") {
    schema = generateArtistSchema()
  } else if (pathname === "/services") {
    schema = generateServiceSchema()
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
