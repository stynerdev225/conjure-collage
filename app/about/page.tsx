import Image from "next/image"
import Link from "next/link"
import { Instagram } from "lucide-react"

export const metadata = {
  title: "About | Conjure Collage Art & Design",
  description: "Learn about Dr. Nedra T. Williams and Conjure Collage Art & Design",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Page Header */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif mb-4 text-center">About the Artist</h1>
        </div>
      </section>

      {/* Artist Bio */}
      <section className="py-16 bg-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-pattern opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-pink-500/20 blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="relative">
              <div className="w-full h-[500px] rounded-lg bg-pattern opacity-10 absolute"></div>
              <div className="relative z-10 p-6">
                <div className="w-64 h-64 rounded-full bg-yellow-400 absolute -top-8 -left-8 z-0"></div>
                <Image
                  src="/vibrant-african-collage.png"
                  alt="Dr. Nedra T. Williams at Work"
                  width={400}
                  height={500}
                  className="rounded-lg shadow-xl relative z-10 transform perspective-1000 hover:rotate-y-2 hover:rotate-x-2 transition-transform duration-500"
                />
                <div className="w-32 h-32 rounded-full bg-pink-500 absolute -bottom-4 -right-4 z-0"></div>
              </div>
              <div className="mt-6 flex justify-center">
                <Link
                  href="https://www.instagram.com/ntwimene/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-4 py-2 rounded-full hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 transition-all"
                >
                  <Instagram size={20} />
                  <span>@ntwimene</span>
                </Link>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-serif mb-6">Dr. Nedra T. Williams</h2>
              <p className="mb-4">
                Conjure Collage Art & Design was founded by Dr. Nedra T. Williams, a mixed-media artist with over 15
                years of experience creating vibrant collage artwork inspired by African heritage and cultural
                narratives.
              </p>
              <p className="mb-4">
                In addition to her visual art, Dr. Williams is an accomplished poet and spoken word artist. Her poetic
                expressions complement her visual work, often exploring the same themes of cultural identity, heritage,
                and spiritual connections through the power of language and performance.
              </p>
              <p className="mb-4">
                Dr. Williams focuses on the Orisa (Divinities among the West African Yoruba) as an inspirational source
                for her visual creativity. Her work celebrates the intersection of heritage, identity, and modern
                artistic expression.
              </p>
              <p className="mb-4">
                With a strong background in education, Dr. Williams continues to enjoy teaching and sharing her
                knowledge about art, poetry, and cultural heritage. She regularly conducts gallery talks, poetry
                readings, and meet-and-greet sessions with art enthusiasts, creating spaces for dialogue and
                appreciation of African-inspired artistic traditions across multiple mediums.
              </p>
              <p className="mb-4">
                The studio is based in Oakland, California, where Dr. Williams draws inspiration from the diverse
                community and rich cultural landscape of the Bay Area. Her work celebrates the intersection of heritage,
                identity, and modern artistic expression.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Artistic Approach */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif mb-8 text-center">Artistic Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-cream p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-serif mb-4">Materials & Techniques</h3>
                <p className="mb-4">
                  Dr. Williams works with a diverse range of materials including found paper, fabric, photographs,
                  paint, natural elements, and cultural artifacts. Each piece begins with a concept or story, which
                  guides the selection and arrangement of materials.
                </p>
                <p>
                  The layering process is meticulous, with each element carefully positioned to create visual harmony
                  while maintaining the narrative integrity of the piece. Many works incorporate traditional African
                  symbols and patterns, recontextualized in contemporary compositions.
                </p>
              </div>
              <div className="bg-cream p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-serif mb-4">Themes & Inspiration</h3>
                <p className="mb-4">
                  Central to Dr. Williams' work is the exploration of cultural identity, heritage, and the African
                  diaspora experience. Her collages often address themes of memory, displacement, belonging, and the
                  reclamation of narrative, with special focus on the Orisa (Divinities among the West African Yoruba).
                </p>
                <p>
                  Inspiration comes from diverse sources: traditional African art and textiles, jazz and blues music,
                  literature of the diaspora, the urban landscape of Oakland, and personal and collective histories.
                  Each piece invites viewers to engage with these themes through their own cultural lens.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artist Community */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif mb-8 text-center">Artist Community</h2>
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <p className="mb-6">
                Dr. Nedra T. Williams is an active member of the Bay Area's vibrant artistic community, regularly
                collaborating with other artists and participating in cultural events at venues like the Nedra Williams
                Gallery.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Image
                    src="/gallery-visitors-1.jpg"
                    alt="Artist with gallery visitor"
                    width={500}
                    height={400}
                    className="rounded-lg shadow-md mb-3 transform perspective-1000 hover:rotate-y-2 hover:rotate-x-2 transition-transform duration-500"
                  />
                  <p className="text-sm text-gray-600 italic">
                    Connecting with art enthusiasts at a recent gallery opening
                  </p>
                </div>
                <div>
                  <Image
                    src="/gallery-visitors-5.jpg"
                    alt="Artist with community members"
                    width={500}
                    height={400}
                    className="rounded-lg shadow-md mb-3 transform perspective-1000 hover:rotate-y-2 hover:rotate-x-2 transition-transform duration-500"
                  />
                  <p className="text-sm text-gray-600 italic">
                    Building relationships with fellow artists and community members
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Outreach */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif mb-8 text-center">Education & Outreach</h2>
            <div className="bg-cream p-8 rounded-lg shadow-md">
              <p className="mb-4">
                With a strong background in education, Dr. Williams is passionate about sharing her knowledge and
                artistic techniques with others. She regularly conducts workshops, gallery talks, and educational
                programs that explore the connections between art, culture, and identity.
              </p>
              <p className="mb-4">
                Her meet-and-greet sessions with art enthusiasts create spaces for meaningful dialogue about the role of
                art in preserving cultural heritage and addressing contemporary social issues. These events often
                include demonstrations of collage techniques and discussions about the symbolism in her work.
              </p>
              <p>
                Dr. Williams believes in the power of art as both a personal expression and a tool for community
                building. Her educational approach emphasizes the importance of understanding cultural context while
                encouraging individual creativity and interpretation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Studio */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif mb-8 text-center">The Studio</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="mb-4">
                Conjure Collage Art & Design is based in a vibrant studio space in Oakland, California. The studio
                serves as both a creative workspace and a gallery where visitors can view completed works and
                works-in-progress.
              </p>
              <p className="mb-4">
                The space is designed to foster creativity and inspiration, with walls adorned with reference materials,
                cultural artifacts, and a growing collection of books on African art, history, and contemporary collage
                techniques.
              </p>
              <p>
                In addition to being a production space, the studio regularly hosts workshops, artist talks, and
                community events that engage with themes of cultural identity, artistic expression, and the power of
                visual storytelling.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <Image
                src="/vibrant-artist-loft.png"
                alt="Studio Space"
                width={300}
                height={200}
                className="rounded-lg shadow-md transform perspective-1000 hover:rotate-y-2 hover:rotate-x-2 transition-transform duration-500"
              />
              <Image
                src="/collage-creation-essentials.png"
                alt="Collage Materials"
                width={300}
                height={200}
                className="rounded-lg shadow-md transform perspective-1000 hover:rotate-y-2 hover:rotate-x-2 transition-transform duration-500"
              />
              <Image
                src="/vibrant-african-art-studio.png"
                alt="Artist Workspace"
                width={300}
                height={200}
                className="rounded-lg shadow-md transform perspective-1000 hover:rotate-y-2 hover:rotate-x-2 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
