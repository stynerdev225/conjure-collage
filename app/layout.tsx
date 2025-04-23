import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SchemaMarkup } from "@/components/schema-markup"
// Import the ScrollToTop component at the top of the file
import { ScrollToTop } from "@/components/scroll-to-top"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Conjure Collage Art & Design | Dr. Nedra T. Williams",
  description:
    "Vibrant collage art, workshops, and spoken word performances by Dr. Nedra T. Williams, inspired by African heritage and cultural narratives",
  keywords: [
    "collage art",
    "African heritage",
    "Dr. Nedra T. Williams",
    "workshops",
    "spoken word",
    "poetry",
    "Oakland artist",
    "art commissions",
    "cultural narratives",
  ],
  authors: [{ name: "Dr. Nedra T. Williams" }],
  creator: "Dr. Nedra T. Williams",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://conjurecollage.com",
    title: "Conjure Collage Art & Design | Dr. Nedra T. Williams",
    description:
      "Vibrant collage art, workshops, and spoken word performances by Dr. Nedra T. Williams, inspired by African heritage and cultural narratives",
    siteName: "Conjure Collage Art & Design",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Conjure Collage Art & Design Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Conjure Collage Art & Design | Dr. Nedra T. Williams",
    description:
      "Vibrant collage art, workshops, and spoken word performances by Dr. Nedra T. Williams, inspired by African heritage and cultural narratives",
    images: ["/logo.png"],
    creator: "@ntwimene",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body className={inter.className}>
        <SchemaMarkup />
        <ScrollToTop />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
