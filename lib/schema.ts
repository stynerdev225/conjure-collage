export function generateArtistSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dr. Nedra T. Williams",
    url: "https://conjurecollage.com",
    image: "https://conjurecollage.com/vibrant-african-collage.png",
    sameAs: ["https://www.instagram.com/ntwimene/", "https://conjurecollage.com"],
    jobTitle: "Artist",
    worksFor: {
      "@type": "Organization",
      name: "Conjure Collage Art & Design",
    },
    description:
      "Mixed-media artist with over 15 years of experience creating vibrant collage artwork inspired by African heritage and cultural narratives.",
  }
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Conjure Collage Art & Design",
    url: "https://conjurecollage.com",
    logo: "https://conjurecollage.com/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "8717 Seneca Street",
      addressLocality: "Oakland",
      addressRegion: "CA",
      postalCode: "94605",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-510-928-8278",
      contactType: "customer service",
      email: "conjurecollage@yahoo.com",
    },
    sameAs: ["https://www.instagram.com/ntwimene/"],
  }
}

export function generateServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Art Services",
    provider: {
      "@type": "Organization",
      name: "Conjure Collage Art & Design",
      url: "https://conjurecollage.com",
    },
    areaServed: {
      "@type": "City",
      name: "Oakland",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Art Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Art Commissions",
            description: "Commission a unique piece of collage art for your home, office, or as a meaningful gift.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Spoken Word Performances",
            description: "Book Dr. Williams for a powerful spoken word performance at your event or gathering.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Art & Poetry Workshops",
            description: "Schedule a workshop on collage techniques, poetry writing, or cultural storytelling.",
          },
        },
      ],
    },
  }
}
