import Image from "next/image"
import Link from "next/link"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

export const metadata = {
  title: "Gallery | Conjure Collage Art & Design",
  description: "Explore a collection of vibrant collage art by Dr. Nedra T. Williams",
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Page Header */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <AnimateOnScroll variant="fade-down">
            <h1 className="text-4xl md:text-5xl font-serif mb-4 text-center">Gallery</h1>
          </AnimateOnScroll>
          <div className="max-w-3xl mx-auto">
            <AnimateOnScroll variant="fade-up" delay={200}>
              <div className="bg-cream p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-serif mb-4">Artist Statement</h2>
                <p className="italic mb-4">
                  "My work explores the intersection of African diaspora experiences, cultural memory, and contemporary
                  identity. Through collage, I piece together fragments of history, symbolism, and personal narrative to
                  create visual stories that resonate across cultural boundaries."
                </p>
                <p className="italic mb-4">
                  "I am particularly drawn to the power of collage as a medium that mirrors the way we construct our
                  identities – through layers, juxtapositions, and the bringing together of seemingly disparate elements
                  into a harmonious whole. The Orisa (Divinities among the West African Yoruba) serve as an
                  inspirational source for my visual creativity."
                </p>
                <p className="italic mb-4">
                  "My poetry and spoken word performances are extensions of this same creative process. Through both
                  visual and verbal languages, I explore the connections between ancestral wisdom, contemporary
                  experience, and spiritual understanding."
                </p>
                <p className="text-right">- Dr. Nedra T. Williams</p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Gallery Installation View */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimateOnScroll variant="fade-up">
            <h2 className="text-3xl font-serif mb-8 text-center">Nedra Williams Gallery Exhibition</h2>
          </AnimateOnScroll>

          <div className="max-w-5xl mx-auto mb-12">
            <AnimateOnScroll variant="zoom-in">
              <div className="transform perspective-1000 hover:rotate-y-1 hover:rotate-x-1 transition-transform duration-500">
                <Image
                  src="/gallery-art-8.jpg"
                  alt="Nedra Williams Gallery Exhibition - Installation view"
                  width={1000}
                  height={700}
                  className="w-full rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.3)] transform hover:scale-[1.01] transition-all duration-300"
                />
              </div>
              <p className="text-sm text-gray-600 mt-2 italic text-center">
                Installation view of the exhibition featuring mixed media collage works
              </p>
            </AnimateOnScroll>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <AnimateOnScroll variant="fade-up">
              <p className="text-center mb-8">
                A curated selection of mixed media collage works exploring African heritage, cultural identity, and
                diaspora experiences. This exhibition showcases the artist's distinctive approach to visual storytelling
                through layered compositions and symbolic imagery.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <AnimateOnScroll variant="fade-up">
            <h2 className="text-3xl font-serif mb-8 text-center">Featured Collections</h2>
          </AnimateOnScroll>

          {/* Abstract & Geometric Collection */}
          <div className="mb-16">
            <AnimateOnScroll variant="fade-up">
              <h3 className="text-2xl font-serif mb-6 text-center">Abstract & Geometric Collection</h3>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <AnimateOnScroll variant="fade-right">
                <div className="transform perspective-1000 hover:rotate-y-2 hover:rotate-x-2 transition-transform duration-500">
                  <Image
                    src="/gallery-art-4.jpg"
                    alt="Abstract geometric pattern with circular motifs"
                    width={600}
                    height={450}
                    className="w-full rounded-lg shadow-[0_15px_30px_rgba(0,0,0,0.2)] transform hover:scale-[1.02] transition-all duration-300"
                  />
                  <p className="text-sm text-gray-600 mt-2 italic text-center">
                    "Rhythmic Patterns" - Mixed media on canvas
                  </p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll variant="fade-left">
                <div className="transform perspective-1000 hover:rotate-y-2 hover:rotate-x-2 transition-transform duration-500">
                  <Image
                    src="/gallery-art-11.jpg"
                    alt="Abstract collage with geometric shapes and photographic elements"
                    width={600}
                    height={450}
                    className="w-full rounded-lg shadow-[0_15px_30px_rgba(0,0,0,0.2)] transform hover:scale-[1.02] transition-all duration-300"
                  />
                  <p className="text-sm text-gray-600 mt-2 italic text-center">
                    "Urban Rhythms" - Mixed media collage on canvas
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>

          {/* Figurative Works */}
          <div className="mb-16">
            <AnimateOnScroll variant="fade-up">
              <h3 className="text-2xl font-serif mb-6 text-center">Figurative Works</h3>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <AnimateOnScroll variant="fade-right">
                <div className="transform perspective-1000 hover:rotate-y-2 hover:rotate-x-2 transition-transform duration-500">
                  <Image
                    src="/gallery-art-6.jpg"
                    alt="African Heritage Collage - Mask and continent motif"
                    width={400}
                    height={500}
                    className="w-full rounded-lg shadow-[0_15px_30px_rgba(0,0,0,0.2)] transform hover:scale-[1.02] transition-all duration-300"
                  />
                  <p className="text-sm text-gray-600 mt-2 italic text-center">
                    "Ancestral Connections" - Mixed media collage on paper
                  </p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll variant="fade-up">
                <div className="transform perspective-1000 hover:rotate-y-2 hover:rotate-x-2 transition-transform duration-500">
                  <Image
                    src="/gallery-art-9.jpg"
                    alt="Black silhouette figure with intricate white patterns"
                    width={400}
                    height={500}
                    className="w-full rounded-lg shadow-[0_15px_30px_rgba(0,0,0,0.2)] transform hover:scale-[1.02] transition-all duration-300"
                  />
                  <p className="text-sm text-gray-600 mt-2 italic text-center">
                    "Pattern Language" - Mixed media on canvas
                  </p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll variant="fade-left">
                <div className="transform perspective-1000 hover:rotate-y-2 hover:rotate-x-2 transition-transform duration-500">
                  <Image
                    src="/gallery-art-10.jpg"
                    alt="Three stylized faces with colorful headwraps"
                    width={400}
                    height={500}
                    className="w-full rounded-lg shadow-[0_15px_30px_rgba(0,0,0,0.2)] transform hover:scale-[1.02] transition-all duration-300"
                  />
                  <p className="text-sm text-gray-600 mt-2 italic text-center">
                    "Sisters" - Mixed media drawing on paper
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>

          {/* Cultural Narratives */}
          <div className="mb-16">
            <AnimateOnScroll variant="fade-up">
              <h3 className="text-2xl font-serif mb-6 text-center">Cultural Narratives</h3>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <AnimateOnScroll variant="fade-right">
                <div className="transform perspective-1000 hover:rotate-y-2 hover:rotate-x-2 transition-transform duration-500">
                  <Image
                    src="/gallery-art-5.jpg"
                    alt="Village Scene Collage - Cultural narrative"
                    width={400}
                    height={500}
                    className="w-full rounded-lg shadow-[0_15px_30px_rgba(0,0,0,0.2)] transform hover:scale-[1.02] transition-all duration-300"
                  />
                  <p className="text-sm text-gray-600 mt-2 italic text-center">
                    "Community Gathering" - Mixed media collage on paper
                  </p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll variant="fade-up">
                <div className="transform perspective-1000 hover:rotate-y-2 hover:rotate-x-2 transition-transform duration-500">
                  <Image
                    src="/gallery-art-7.jpg"
                    alt="Vibrant mixed media collage with bird imagery"
                    width={400}
                    height={500}
                    className="w-full rounded-lg shadow-[0_15px_30px_rgba(0,0,0,0.2)] transform hover:scale-[1.02] transition-all duration-300"
                  />
                  <p className="text-sm text-gray-600 mt-2 italic text-center">
                    "Freedom Flight" - Mixed media collage on canvas
                  </p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll variant="fade-left">
                <div className="transform perspective-1000 hover:rotate-y-2 hover:rotate-x-2 transition-transform duration-500">
                  <Image
                    src="/gallery-art-3.jpg"
                    alt="Triptych of African-inspired collage art"
                    width={400}
                    height={500}
                    className="w-full rounded-lg shadow-[0_15px_30px_rgba(0,0,0,0.2)] transform hover:scale-[1.02] transition-all duration-300"
                  />
                  <p className="text-sm text-gray-600 mt-2 italic text-center">
                    "Cultural Narratives" - Triptych series
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Photography Series */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimateOnScroll variant="fade-up">
            <h2 className="text-3xl font-serif mb-8 text-center">Photography Series: "Remembering"</h2>
          </AnimateOnScroll>

          <div className="max-w-3xl mx-auto mb-8">
            <AnimateOnScroll variant="fade-up">
              <p className="text-center italic">
                "This series explores the process of creating collages, the imagery that inspires them, and the cultural
                practices that inform the work. These photographs document both the artistic process and the living
                traditions that continue to influence contemporary expression."
              </p>
            </AnimateOnScroll>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <AnimateOnScroll variant="fade-right">
              <div className="transform perspective-1000 hover:rotate-y-2 hover:rotate-x-2 transition-transform duration-500">
                <Image
                  src="/gallery-art-12.jpg"
                  alt="Woman and child creating chalk patterns on pavement"
                  width={600}
                  height={450}
                  className="w-full rounded-lg shadow-[0_15px_30px_rgba(0,0,0,0.2)] transform hover:scale-[1.02] transition-all duration-300"
                />
                <p className="text-sm text-gray-600 mt-2 italic text-center">
                  "Remembering I" - Photograph documenting traditional pattern-making
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-left">
              <div className="transform perspective-1000 hover:rotate-y-2 hover:rotate-x-2 transition-transform duration-500">
                <Image
                  src="/gallery-art-13.jpg"
                  alt="Woman in white dress seated on patterned ground"
                  width={600}
                  height={450}
                  className="w-full rounded-lg shadow-[0_15px_30px_rgba(0,0,0,0.2)] transform hover:scale-[1.02] transition-all duration-300"
                />
                <p className="text-sm text-gray-600 mt-2 italic text-center">
                  "Remembering II" - Photograph exploring ritual and memory
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Gallery Visitors */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <AnimateOnScroll variant="fade-up">
            <h3 className="text-2xl font-serif mb-8 text-center">Gallery Opening Reception</h3>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <AnimateOnScroll variant="fade-right">
              <div className="transform perspective-1000 hover:rotate-y-2 hover:rotate-x-2 transition-transform duration-500">
                <Image
                  src="/gallery-visitors-1.jpg"
                  alt="Visitors viewing artwork at Nedra Williams Gallery"
                  width={400}
                  height={500}
                  className="w-full rounded-lg shadow-[0_15px_30px_rgba(0,0,0,0.2)] transform hover:scale-[1.02] transition-all duration-300"
                />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-up">
              <div className="transform perspective-1000 hover:rotate-y-2 hover:rotate-x-2 transition-transform duration-500">
                <Image
                  src="/gallery-visitors-4.jpg"
                  alt="Group photo at Nedra Williams Gallery opening"
                  width={400}
                  height={500}
                  className="w-full rounded-lg shadow-[0_15px_30px_rgba(0,0,0,0.2)] transform hover:scale-[1.02] transition-all duration-300"
                />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-left">
              <div className="transform perspective-1000 hover:rotate-y-2 hover:rotate-x-2 transition-transform duration-500">
                <Image
                  src="/gallery-visitors-5.jpg"
                  alt="Artist with gallery visitors"
                  width={400}
                  height={500}
                  className="w-full rounded-lg shadow-[0_15px_30px_rgba(0,0,0,0.2)] transform hover:scale-[1.02] transition-all duration-300"
                />
              </div>
            </AnimateOnScroll>
          </div>

          <div className="max-w-3xl mx-auto mt-12 bg-white p-6 rounded-lg shadow-[0_10px_20px_rgba(0,0,0,0.15)] transform hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)] transition-all duration-300">
            <AnimateOnScroll variant="fade-up">
              <h4 className="text-xl font-serif mb-4 text-center">Visitor Testimonials</h4>
            </AnimateOnScroll>
            <div className="space-y-4">
              <AnimateOnScroll variant="fade-up">
                <blockquote className="border-l-4 border-pink-500 pl-4 italic">
                  "The layering of cultural symbols and personal narrative in these collages creates a powerful visual
                  experience. Each piece invites you to look deeper and discover new meanings with every viewing."
                  <footer className="text-right text-sm text-gray-600 mt-2">— Dr. Maya Johnson, Art Historian</footer>
                </blockquote>
              </AnimateOnScroll>
              <AnimateOnScroll variant="fade-up">
                <blockquote className="border-l-4 border-pink-500 pl-4 italic">
                  "What strikes me most about this exhibition is how the artist weaves together traditional African
                  motifs with contemporary artistic techniques. The result is both timeless and thoroughly modern."
                  <footer className="text-right text-sm text-gray-600 mt-2">— James Wilson, Oakland Tribune</footer>
                </blockquote>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimateOnScroll variant="fade-up">
            <h2 className="text-3xl font-serif mb-8 text-center">Collections</h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimateOnScroll variant="fade-up">
              <div className="bg-cream p-6 rounded-lg shadow-[0_10px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.25)] transition-all duration-300 transform hover:translate-y-[-5px]">
                <h3 className="text-xl font-serif mb-4">African Heritage Series</h3>
                <p className="mb-4">
                  A collection exploring the rich cultural heritage of various African regions through symbolic imagery,
                  traditional patterns, and vibrant color palettes.
                </p>
                <Link
                  href="/artwork"
                  className="text-pink-600 hover:text-pink-700 transition-colors inline-flex items-center gap-1"
                >
                  View Collection <span aria-hidden="true">→</span>
                </Link>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-up">
              <div className="bg-cream p-6 rounded-lg shadow-[0_10px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.25)] transition-all duration-300 transform hover:translate-y-[-5px]">
                <h3 className="text-xl font-serif mb-4">Diaspora Dialogues</h3>
                <p className="mb-4">
                  Works that examine the experiences of the African diaspora, cultural displacement, and the formation
                  of new identities across borders and generations.
                </p>
                <Link
                  href="/artwork"
                  className="text-pink-600 hover:text-pink-700 transition-colors inline-flex items-center gap-1"
                >
                  View Collection <span aria-hidden="true">→</span>
                </Link>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-up">
              <div className="bg-cream p-6 rounded-lg shadow-[0_10px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.25)] transition-all duration-300 transform hover:translate-y-[-5px]">
                <h3 className="text-xl font-serif mb-4">Urban Narratives</h3>
                <p className="mb-4">
                  Collages that capture the energy and diversity of urban life in Oakland and the Bay Area, blending
                  cultural references with contemporary urban aesthetics.
                </p>
                <Link
                  href="/artwork"
                  className="text-pink-600 hover:text-pink-700 transition-colors inline-flex items-center gap-1"
                >
                  View Collection <span aria-hidden="true">→</span>
                </Link>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-up">
              <div className="bg-cream p-6 rounded-lg shadow-[0_10px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.25)] transition-all duration-300 transform hover:translate-y-[-5px]">
                <h3 className="text-xl font-serif mb-4">Remembering Series</h3>
                <p className="mb-4">
                  A photographic series documenting cultural practices, rituals, and the artistic process that informs
                  and inspires the collage work, creating a dialogue between tradition and contemporary art.
                </p>
                <Link
                  href="/artwork"
                  className="text-pink-600 hover:text-pink-700 transition-colors inline-flex items-center gap-1"
                >
                  View Collection <span aria-hidden="true">→</span>
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </div>
  )
}
