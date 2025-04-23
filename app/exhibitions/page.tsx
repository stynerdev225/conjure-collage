import Image from "next/image"

export const metadata = {
  title: "Exhibitions & Recognition | Conjure Collage Art & Design",
  description: "Exhibitions, awards, and press featuring the work of Dr. Nedra T. Williams",
}

export default function ExhibitionsPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Page Header */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif mb-4 text-center">Exhibitions & Recognition</h1>
          <p className="text-center max-w-2xl mx-auto text-gray-600">
            Selected exhibitions, awards, and features highlighting the artist's journey and accomplishments.
          </p>
        </div>
      </section>

      {/* Exhibitions */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif mb-8 text-center">Selected Exhibitions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md transform perspective-1000 hover:rotate-y-2 hover:rotate-x-2 transition-transform duration-500">
              <div className="mb-4">
                <Image
                  src="/contemporary-art-viewing.png"
                  alt="Oakland Museum Exhibition"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-md shadow-[0_5px_15px_rgba(0,0,0,0.2)] transform hover:scale-[1.02] transition-all duration-300"
                />
              </div>
              <h3 className="text-xl font-serif mb-2">Oakland Museum of California</h3>
              <p className="text-gray-600 mb-2">Featured Artist, "Cultural Narratives" Exhibition</p>
              <p className="text-gray-600 mb-4">June - September 2023</p>
              <p className="text-sm">
                A solo exhibition featuring a series of large-scale collages exploring the intersection of African
                cultural heritage and contemporary urban experience.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transform perspective-1000 hover:rotate-y-2 hover:rotate-x-2 transition-transform duration-500">
              <div className="mb-4">
                <Image
                  src="/vibrant-sf-gallery.png"
                  alt="San Francisco Art Institute Exhibition"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-md shadow-[0_5px_15px_rgba(0,0,0,0.2)] transform hover:scale-[1.02] transition-all duration-300"
                />
              </div>
              <h3 className="text-xl font-serif mb-2">San Francisco Art Institute</h3>
              <p className="text-gray-600 mb-2">Group Show, "Diaspora Dialogues"</p>
              <p className="text-gray-600 mb-4">March - May 2022</p>
              <p className="text-sm">
                A curated exhibition featuring artists exploring themes of displacement, cultural identity, and the
                African diaspora experience through various media.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transform perspective-1000 hover:rotate-y-2 hover:rotate-x-2 transition-transform duration-500">
              <div className="mb-4">
                <Image
                  src="/vibrant-berkeley-art-scene.png"
                  alt="Berkeley Art Center Exhibition"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-md shadow-[0_5px_15px_rgba(0,0,0,0.2)] transform hover:scale-[1.02] transition-all duration-300"
                />
              </div>
              <h3 className="text-xl font-serif mb-2">Berkeley Art Center</h3>
              <p className="text-gray-600 mb-2">Solo Exhibition, "Fragments of Memory"</p>
              <p className="text-gray-600 mb-4">October - December 2021</p>
              <p className="text-sm">
                An immersive installation combining collage, sound, and projected imagery to create a multisensory
                exploration of memory and cultural heritage.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transform perspective-1000 hover:rotate-y-2 hover:rotate-x-2 transition-transform duration-500">
              <div className="mb-4">
                <Image
                  src="/african-american-museum-oakland.jpg"
                  alt="African American Museum & Library at Oakland Exhibition"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-md shadow-[0_5px_15px_rgba(0,0,0,0.2)] transform hover:scale-[1.02] transition-all duration-300"
                />
              </div>
              <h3 className="text-xl font-serif mb-2">African American Museum & Library at Oakland</h3>
              <p className="text-gray-600 mb-2">Featured Artist, "Heritage in Collage"</p>
              <p className="text-gray-600 mb-4">February - April 2020</p>
              <p className="text-sm">
                A focused exhibition examining the use of collage as a medium for exploring and preserving African
                American cultural heritage and historical narratives.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transform perspective-1000 hover:rotate-y-2 hover:rotate-x-2 transition-transform duration-500">
              <div className="mb-4">
                <Image
                  src="/african-american-art-culture-complex.jpeg"
                  alt="African American Art & Culture Complex"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-md shadow-[0_5px_15px_rgba(0,0,0,0.2)] transform hover:scale-[1.02] transition-all duration-300"
                />
              </div>
              <h3 className="text-xl font-serif mb-2">African American Art & Culture Complex</h3>
              <p className="text-gray-600 mb-2">Group Exhibition, "Contemporary Voices"</p>
              <p className="text-gray-600 mb-4">July - September 2021</p>
              <p className="text-sm">
                A collaborative exhibition featuring emerging artists exploring contemporary African American
                experiences through diverse media, including a series of narrative collages examining urban identity.
              </p>
              <p className="text-xs text-gray-500 mt-2">762 Fulton Street, San Francisco, CA 94102</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transform perspective-1000 hover:rotate-y-2 hover:rotate-x-2 transition-transform duration-500">
              <div className="mb-4">
                <Image
                  src="/MoAD-Entrance.png"
                  alt="Museum of the African Diaspora"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-md shadow-[0_5px_15px_rgba(0,0,0,0.2)] transform hover:scale-[1.02] transition-all duration-300"
                />
              </div>
              <h3 className="text-xl font-serif mb-2">Museum of the African Diaspora</h3>
              <p className="text-gray-600 mb-2">Featured in "Patterns of Migration" Exhibition</p>
              <p className="text-gray-600 mb-4">November 2022 - January 2023</p>
              <p className="text-sm">
                An exhibition exploring themes of migration, displacement, and cultural preservation through visual art.
                Featured a series of mixed media collages examining the journey of cultural symbols across continents.
              </p>
              <p className="text-xs text-gray-500 mt-2">685 Mission Street (at 3rd), San Francisco, CA 94105</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif mb-8 text-center">Nedra Williams Gallery Events</h2>
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-center mb-8">
              Conjure Collage Art & Design has been featured in several exhibitions at the prestigious Nedra Williams
              Gallery, showcasing the cultural significance and artistic innovation of our mixed media collage work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div>
              <Image
                src="/gallery-visitors-2.jpg"
                alt="Artist and visitors at Nedra Williams Gallery"
                width={600}
                height={450}
                className="w-full rounded-lg shadow-md mb-4"
              />
              <h3 className="text-xl font-serif mb-2">Cultural Heritage Exhibition</h3>
              <p className="text-gray-600 mb-4">
                Opening reception featuring discussions on the intersection of art and cultural identity
              </p>
            </div>
            <div>
              <Image
                src="/gallery-visitors-3.jpg"
                alt="Visitors examining artwork at Nedra Williams Gallery"
                width={600}
                height={450}
                className="w-full rounded-lg shadow-md mb-4"
              />
              <h3 className="text-xl font-serif mb-2">Artist-Led Gallery Tour</h3>
              <p className="text-gray-600 mb-4">
                Guided exploration of the symbolic elements and techniques used in the collage series
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Press */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif mb-8 text-center">Awards & Press</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-cream p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-serif mb-4">Awards & Grants</h3>
                <ul className="space-y-4">
                  <li className="border-b border-gray-200 pb-4">
                    <p className="font-medium">East Bay Express</p>
                    <p className="text-sm text-gray-600">"Best Visual Artist" Award, 2022</p>
                    <p className="text-sm mt-2">
                      Annual recognition of outstanding contributions to the East Bay arts community.
                    </p>
                  </li>
                  <li className="border-b border-gray-200 pb-4">
                    <p className="font-medium">California Arts Council</p>
                    <p className="text-sm text-gray-600">Individual Artist Fellowship, 2020</p>
                    <p className="text-sm mt-2">
                      Competitive grant supporting artists creating work that advances cultural dialogue and community
                      engagement.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium">Oakland Arts Commission</p>
                    <p className="text-sm text-gray-600">Community Impact Award, 2019</p>
                    <p className="text-sm mt-2">
                      Recognition for artists whose work has made a significant contribution to Oakland's cultural
                      landscape.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="bg-cream p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-serif mb-4">Press & Publications</h3>
                <ul className="space-y-4">
                  <li className="border-b border-gray-200 pb-4">
                    <p className="font-medium">San Francisco Chronicle</p>
                    <p className="text-sm text-gray-600">Featured Artist Profile, Arts Section, June 2021</p>
                    <p className="text-sm mt-2">
                      "Williams' collages speak to the fragmented yet cohesive nature of cultural identity in the modern
                      world."
                    </p>
                  </li>
                  <li className="border-b border-gray-200 pb-4">
                    <p className="font-medium">Oakland Tribune</p>
                    <p className="text-sm text-gray-600">Interview Feature, March 2020</p>
                    <p className="text-sm mt-2">
                      "The Oakland artist bringing African heritage to life through innovative collage techniques."
                    </p>
                  </li>
                  <li>
                    <p className="font-medium">Art in America</p>
                    <p className="text-sm text-gray-600">Exhibition Review, November 2019</p>
                    <p className="text-sm mt-2">
                      "Conjure Collage represents a vital new voice in contemporary mixed media art, bridging cultural
                      narratives with technical innovation."
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bay Area Cultural Institutions */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif mb-8 text-center">Bay Area Cultural Partnerships</h2>
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-center mb-8">
              Conjure Collage Art & Design has established meaningful partnerships with cultural institutions throughout
              the Bay Area, contributing to the vibrant artistic dialogue around African American heritage and
              contemporary art practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md transform hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-serif mb-4">Educational Workshops</h3>
              <p className="mb-4">
                In collaboration with the Museum of the African Diaspora and the African American Art & Culture Complex,
                Dr. Nedra T. Williams has conducted a series of workshops on collage techniques and cultural
                storytelling through visual art.
              </p>
              <p className="mb-4">
                These workshops engage participants of all ages in exploring their own cultural narratives through mixed
                media art, fostering community dialogue and creative expression.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transform hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-serif mb-4">Community Engagement</h3>
              <p className="mb-4">
                Beyond exhibitions, Conjure Collage Art & Design participates in community events, artist talks, and
                panel discussions at cultural institutions throughout the Bay Area.
              </p>
              <p className="mb-4">
                These engagements create opportunities for meaningful dialogue about the role of art in preserving
                cultural heritage and addressing contemporary social issues through creative expression.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
