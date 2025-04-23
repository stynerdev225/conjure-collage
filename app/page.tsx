import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Palette, Mic, Users } from "lucide-react"
import { ImageWithFallback } from "@/components/image-with-fallback"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-pink-500/30 blur-3xl"></div>
        <div className="absolute top-40 -right-24 w-64 h-64 rounded-full bg-yellow-400/30 blur-3xl"></div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <AnimateOnScroll variant="fade-right">
              <div>
                <h1 className="text-4xl md:text-6xl font-serif mb-6">Art that tells a story</h1>
                <p className="text-lg mb-8">
                  Vibrant collage art inspired by African heritage and cultural narratives. Each piece is a unique
                  journey through color, texture, and meaning.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/gallery"
                    className="px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors"
                    aria-label="View our gallery of artwork"
                  >
                    View Gallery
                  </Link>
                  <Link
                    href="/services"
                    className="px-6 py-3 border border-black rounded-full hover:bg-black hover:text-white transition-colors"
                    aria-label="Learn about our services"
                  >
                    Book Services
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-left" delay={200}>
              <div className="relative">
                <div className="absolute inset-0 bg-pattern opacity-20 z-0"></div>
                <div className="relative z-10 p-4 transform perspective-1000 hover:rotate-y-3 hover:rotate-x-3 transition-transform duration-500">
                  <div className="relative rounded-lg overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] transform hover:scale-[1.02] transition-all duration-300">
                    <ImageWithFallback
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8414.png-ojHkHelVS1rYLjvpFlKZMTEA33ad8B.jpeg"
                      alt="Vibrant collage art by Dr. Nedra T. Williams featuring African cultural elements"
                      width={500}
                      height={700}
                      className="rounded-lg"
                      priority={true}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60"></div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-yellow-400 z-0"></div>
                <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full border-4 border-pink-500 z-0"></div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimateOnScroll variant="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">Work with Dr. Nedra T. Williams</h2>
              <p className="max-w-2xl mx-auto text-gray-600">
                Elevate your space, event, or creative journey through art, poetry, and cultural exploration
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            <AnimateOnScroll variant="fade-up" delay={100}>
              <div className="bg-cream p-6 md:p-8 rounded-lg shadow-xl transform hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mb-6">
                  <Palette className="text-pink-600" size={24} />
                </div>
                <h3 className="text-2xl font-serif mb-4">Art Commissions</h3>
                <p className="mb-6">
                  Commission a unique piece of collage art for your home, office, or as a meaningful gift. Each
                  commission begins with a consultation to discuss your vision and preferences.
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center text-pink-600 hover:text-pink-700 transition-colors"
                >
                  Learn More <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fade-up" delay={200}>
              <div className="bg-cream p-6 md:p-8 rounded-lg shadow-xl transform hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mb-6">
                  <Mic className="text-pink-600" size={24} />
                </div>
                <h3 className="text-2xl font-serif mb-4">Spoken Word</h3>
                <p className="mb-6">
                  Book Dr. Williams for a powerful spoken word performance at your event, gallery opening, or special
                  occasion. Her poetic expressions explore themes of cultural identity and heritage.
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center text-pink-600 hover:text-pink-700 transition-colors"
                >
                  Learn More <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fade-up" delay={300}>
              <div className="bg-cream p-6 md:p-8 rounded-lg shadow-xl transform hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mb-6">
                  <Users className="text-pink-600" size={24} />
                </div>
                <h3 className="text-2xl font-serif mb-4">Workshops</h3>
                <p className="mb-6">
                  Experience hands-on learning with workshops on collage techniques, poetry writing, and cultural
                  storytelling. Available for educational institutions, community centers, and private groups.
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center text-pink-600 hover:text-pink-700 transition-colors"
                >
                  Learn More <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll variant="fade-up" delay={400}>
            <div className="text-center mt-12">
              <Link
                href="/services"
                className="px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors inline-flex items-center gap-2"
              >
                View All Services <ArrowRight size={16} />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <AnimateOnScroll variant="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">Featured Artwork</h2>
              <p className="max-w-2xl mx-auto text-gray-600">
                Explore a selection of vibrant collage art that celebrates culture, identity, and storytelling.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <AnimateOnScroll variant="zoom-in" delay={100}>
              <div className="group relative overflow-hidden rounded-lg shadow-[0_15px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 transform perspective-1000 hover:rotate-y-2 hover:rotate-x-2">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <Image
                  src="/gallery-art-11.jpg"
                  alt="Urban Rhythms - Mixed media collage with geometric shapes"
                  width={300}
                  height={400}
                  className="w-full h-[400px] object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform z-20">
                  <h3 className="text-xl font-serif">Urban Rhythms</h3>
                  <p className="text-sm opacity-80">Mixed media collage on canvas</p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variant="zoom-in" delay={200}>
              <div className="group relative overflow-hidden rounded-lg shadow-[0_15px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 transform perspective-1000 hover:rotate-y-2 hover:rotate-x-2">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <Image
                  src="/gallery-art-9.jpg"
                  alt="Pattern Language - Black silhouette figure with intricate white patterns"
                  width={300}
                  height={400}
                  className="w-full h-[400px] object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform z-20">
                  <h3 className="text-xl font-serif">Pattern Language</h3>
                  <p className="text-sm opacity-80">Mixed media on canvas</p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variant="zoom-in" delay={300}>
              <div className="group relative overflow-hidden rounded-lg shadow-[0_15px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 transform perspective-1000 hover:rotate-y-2 hover:rotate-x-2">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <Image
                  src="/gallery-art-10.jpg"
                  alt="Sisters - Three stylized faces with colorful headwraps"
                  width={300}
                  height={400}
                  className="w-full h-[400px] object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform z-20">
                  <h3 className="text-xl font-serif">Sisters</h3>
                  <p className="text-sm opacity-80">Mixed media drawing on paper</p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll variant="fade-up" delay={400}>
            <div className="text-center mt-12">
              <Link
                href="/gallery"
                className="px-6 py-3 border border-black rounded-full hover:bg-black hover:text-white transition-colors inline-flex items-center gap-2"
              >
                View Full Gallery <ArrowRight size={16} />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-pattern opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-pink-500/20 blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <AnimateOnScroll variant="flip-up">
                <div className="w-full h-[300px] rounded-lg bg-pattern opacity-10 absolute"></div>
                <div className="relative z-10 p-6">
                  <div className="w-32 h-32 rounded-full bg-yellow-400 absolute -top-4 -left-4 z-0"></div>
                  <div className="transform perspective-1000 hover:rotate-y-3 hover:rotate-x-2 transition-transform duration-500">
                    <Image
                      src="/vibrant-african-collage.png"
                      alt="Artist at Work"
                      width={300}
                      height={350}
                      className="rounded-lg shadow-[0_15px_30px_rgba(0,0,0,0.3)] relative z-10 transform hover:scale-[1.02] transition-all duration-300"
                    />
                  </div>
                  <div className="w-24 h-24 rounded-full bg-pink-500 absolute -bottom-2 -right-2 z-0"></div>
                </div>
              </AnimateOnScroll>
            </div>
            <div className="order-1 md:order-2">
              <AnimateOnScroll variant="fade-left">
                <h2 className="text-3xl md:text-4xl font-serif mb-6">About the Artist</h2>
                <p className="mb-4">
                  Conjure Collage Art & Design was founded by Dr. Nedra T. Williams, a mixed-media artist with over 15
                  years of experience creating vibrant collage artwork inspired by African heritage and cultural
                  narratives.
                </p>
                <p className="mb-4">
                  In addition to her visual art, Dr. Williams is an accomplished poet and spoken word artist. Her work
                  focuses on the Orisa (Divinities among the West African Yoruba) as an inspirational source for her
                  creative expression.
                </p>
                <p className="mb-6">
                  With a strong background in education, Dr. Williams continues to enjoy teaching and sharing her
                  knowledge about art, poetry, and cultural heritage through workshops and gallery talks.
                </p>
                <div className="flex gap-4">
                  <Link
                    href="/about"
                    className="px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors inline-flex items-center gap-2"
                  >
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <AnimateOnScroll variant="fade-up">
            <h2 className="text-3xl font-serif mb-12 text-center">What People Are Saying</h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto">
            <AnimateOnScroll variant="fade-up" delay={100}>
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
                <p className="italic mb-4">
                  "Dr. Williams' workshop transformed our team building retreat. Her ability to guide participants
                  through both visual art and poetry created a powerful experience of connection and creativity."
                </p>
                <p className="font-medium">— Bay Area Tech Company</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-up" delay={200}>
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
                <p className="italic mb-4">
                  "The commissioned piece Dr. Williams created for our anniversary captures our journey together
                  perfectly. Her process of understanding our story and translating it into art was as meaningful as the
                  finished piece itself."
                </p>
                <p className="font-medium">— Private Collector, San Francisco</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-up" delay={300}>
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
                <p className="italic mb-4">
                  "Having Dr. Williams perform her poetry at our gallery opening created a perfect synergy between the
                  perform her poetry at our gallery opening created a perfect synergy between the visual art on display
                  and the power of spoken word. Our patrons were deeply moved by the experience."
                </p>
                <p className="font-medium">— Nedra Williams Gallery</p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimateOnScroll variant="fade-up">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">Get in Touch</h2>
              <p className="max-w-2xl mx-auto text-gray-600 mb-8">
                Interested in commissioning a piece, booking a workshop, or scheduling a poetry performance?
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                <Link
                  href="/contact"
                  className="px-4 sm:px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors inline-flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  Contact Us <ArrowRight size={16} />
                </Link>
                <Link
                  href="/services"
                  className="px-4 sm:px-6 py-3 border border-black rounded-full hover:bg-black hover:text-white transition-colors inline-flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  View Services <ArrowRight size={16} />
                </Link>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variant="zoom-in" delay={200}>
              <div className="bg-cream p-6 rounded-lg inline-block mx-auto shadow-[0_10px_25px_rgba(0,0,0,0.1)] transform hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)] transition-all duration-300">
                <address className="not-italic">
                  <p className="font-medium">Conjure Collage Art & Design</p>
                  <p>8717 Seneca Street, Oakland, CA 94605</p>
                  <p className="mt-2">
                    <a href="mailto:conjurecollage@yahoo.com" className="hover:text-pink-600 transition-colors">
                      conjurecollage@yahoo.com
                    </a>
                  </p>
                  <p>
                    <a href="tel:5109288278" className="hover:text-pink-600 transition-colors">
                      510-928-8278
                    </a>
                  </p>
                </address>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </div>
  )
}
