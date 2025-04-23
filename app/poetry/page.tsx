import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Poetry & Spoken Word | Conjure Collage Art & Design",
  description: "Explore Dr. Nedra T. Williams' poetry and spoken word performances",
}

export default function PoetryPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Page Header */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif mb-4 text-center">Poetry & Spoken Word</h1>
          <p className="text-center max-w-2xl mx-auto text-gray-600">
            Exploring cultural narratives and spiritual connections through the power of words
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-pattern opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-pink-500/20 blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="relative">
              <div className="w-full h-[400px] rounded-lg bg-pattern opacity-10 absolute"></div>
              <div className="relative z-10 p-6">
                <div className="w-64 h-64 rounded-full bg-yellow-400 absolute -top-8 -left-8 z-0"></div>
                <Image
                  src="/vibrant-african-collage.png"
                  alt="Dr. Nedra T. Williams performing spoken word"
                  width={400}
                  height={500}
                  className="rounded-lg shadow-xl relative z-10 transform perspective-1000 hover:rotate-y-2 hover:rotate-x-2 transition-transform duration-500"
                />
                <div className="w-32 h-32 rounded-full bg-pink-500 absolute -bottom-4 -right-4 z-0"></div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-serif mb-6">The Poetic Voice</h2>
              <p className="mb-4">
                Dr. Nedra T. Williams is not only a visual artist but also an accomplished poet and spoken word
                performer. Her literary work extends and complements her visual art, creating a multidimensional
                approach to storytelling and cultural expression.
              </p>
              <p className="mb-4">
                Through poetry and spoken word, Dr. Williams explores the same themes that inspire her collage work:
                African heritage, spiritual connections to the Orisa, cultural identity, and the experiences of the
                African diaspora. Her performances are known for their rhythmic intensity, vivid imagery, and powerful
                emotional resonance.
              </p>
              <p className="mb-4">
                "Words and images are different languages that speak to the same truths," Dr. Williams explains.
                "Sometimes a story needs to be told through visual composition, and sometimes it demands the rhythm and
                cadence of spoken word. Often, they work together to create a more complete expression."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Poems */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif mb-8 text-center">Featured Poems</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-cream p-8 rounded-lg shadow-md mb-8">
              <h3 className="text-2xl font-serif mb-4 text-center">"Ancestral Whispers"</h3>
              <div className="prose prose-lg max-w-3xl mx-auto">
                <p className="italic text-center mb-6">Excerpt from "Ancestral Whispers" (2021)</p>
                <p className="text-center mb-4">
                  They speak in patterns,
                  <br />
                  these ancestors of mine.
                  <br />
                  Their voices woven into cloth,
                  <br />
                  carved into wood,
                  <br />
                  painted across time.
                </p>
                <p className="text-center mb-4">
                  I listen with my hands,
                  <br />
                  piecing together their stories
                  <br />
                  in fragments of color and texture.
                  <br />
                  Each layer a sentence,
                  <br />
                  each composition a conversation
                  <br />
                  across centuries.
                </p>
                <p className="text-center">
                  The Orisa guide my fingers,
                  <br />
                  as I conjure memory from paper,
                  <br />
                  as I collage the sacred
                  <br />
                  into new forms of remembering.
                </p>
              </div>
            </div>

            <div className="bg-cream p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-serif mb-4 text-center">"Patterns of Becoming"</h3>
              <div className="prose prose-lg max-w-3xl mx-auto">
                <p className="italic text-center mb-6">Excerpt from "Patterns of Becoming" (2022)</p>
                <p className="text-center mb-4">
                  I am a woman made of patterns,
                  <br />
                  geometric certainties and fluid possibilities.
                  <br />
                  My skin a canvas for ancestral mathematics,
                  <br />
                  my voice an echo of rhythms
                  <br />
                  that preceded my birth.
                </p>
                <p className="text-center mb-4">
                  The Orisa dance through my veins,
                  <br />
                  Yemoja's waters,
                  <br />
                  Oshun's honey,
                  <br />
                  Shango's thunder.
                  <br />I am their canvas,
                  <br />
                  their instrument,
                  <br />
                  their living collage.
                </p>
                <p className="text-center">
                  With each word spoken,
                  <br />
                  with each image created,
                  <br />I piece together the fragments
                  <br />
                  of a scattered divinity,
                  <br />
                  making whole what was broken
                  <br />
                  by the Middle Passage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performances */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif mb-8 text-center">Performances & Readings</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-serif mb-4">Spoken Word Events</h3>
              <p className="mb-6">
                Dr. Williams regularly performs her poetry at cultural events, gallery openings, and literary gatherings
                throughout the Bay Area. Her performances often incorporate visual elements, creating immersive
                experiences that engage multiple senses.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-cream p-4 rounded-md">
                  <h4 className="font-medium mb-2">Recent Performance Venues</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-pink-600">•</span>
                      <span>Oakland Museum of California - "Words & Images" Series</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-600">•</span>
                      <span>African American Museum & Library at Oakland - Poetry Night</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-600">•</span>
                      <span>Nedra Williams Gallery - Exhibition Openings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-600">•</span>
                      <span>Museum of the African Diaspora - "Voices of the Diaspora" Series</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-cream p-4 rounded-md">
                  <h4 className="font-medium mb-2">Collaborative Projects</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-pink-600">•</span>
                      <span>"Rhythms & Patterns" - Poetry with live jazz accompaniment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-600">•</span>
                      <span>"Spoken Images" - Multimedia performance with projected artwork</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-600">•</span>
                      <span>"Ancestral Dialogues" - Collaborative performance with dancers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-600">•</span>
                      <span>"Words of the Orisa" - Spiritual poetry and traditional drumming</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-serif mb-4">Publications</h3>
              <p className="mb-6">
                Dr. Williams' poetry has been published in various literary journals and anthologies focused on African
                American literature, spiritual expression, and the intersection of visual and literary arts.
              </p>
              <div className="bg-cream p-4 rounded-md">
                <h4 className="font-medium mb-2">Selected Publications</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-pink-600">•</span>
                    <span>"Patterns of Memory" - Collection of poems and visual art (Self-published, 2020)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-600">•</span>
                    <span>"Bay Area Voices: Contemporary African American Poetry" (Anthology, 2019)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-600">•</span>
                    <span>"The Orisa in Words and Images" - Essay and poetry collection (2021)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-600">•</span>
                    <span>Regular contributor to "Diaspora Arts Quarterly" literary magazine</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration of Art Forms */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif mb-8 text-center">The Integration of Art Forms</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-cream p-8 rounded-lg shadow-md">
              <p className="mb-4">
                For Dr. Williams, poetry and visual art are complementary expressions of the same creative vision. Her
                artistic practice deliberately blurs the boundaries between these forms, creating a rich dialogue
                between word and image.
              </p>
              <p className="mb-4">
                "My collage work often begins with a poem, or a poem emerges from the process of creating a visual
                piece," she explains. "They inform and inspire each other in a continuous conversation."
              </p>
              <p className="mb-4">
                This integration is particularly evident in her exhibition installations, where poems are often
                displayed alongside corresponding visual pieces, inviting viewers to experience both the visual and
                verbal expressions of a single artistic concept.
              </p>
              <p>
                In her workshops and educational programs, Dr. Williams encourages participants to explore multiple
                forms of expression, demonstrating how different creative languages can access and communicate different
                aspects of experience and memory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif mb-6">Experience the Spoken Word</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Join us for upcoming poetry readings and spoken word performances by Dr. Nedra T. Williams. Check our events
            calendar for dates and venues.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors"
            >
              Contact for Bookings
            </Link>
            <Link
              href="/exhibitions"
              className="px-6 py-3 border border-black rounded-full hover:bg-black hover:text-white transition-colors"
            >
              View Events Calendar
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
