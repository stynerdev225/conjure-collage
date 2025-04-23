import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Conjure Collage Art & Design",
    short_name: "Conjure Collage",
    description: "Vibrant collage art, workshops, and spoken word performances by Dr. Nedra T. Williams",
    start_url: "/",
    display: "standalone",
    background_color: "#fcf9f1",
    theme_color: "#ec4899",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
