import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Artwork Details | Conjure Collage Art & Design",
  description: "Explore the detailed artwork collection of Dr. Nedra T. Williams and Conjure Collage Art & Design",
}

export default function ArtworkPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Page Header */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif mb-4 text-center">Artwork Collection</h1>
          <p className="text-center max-w-2xl mx-auto text-gray-600">
            A detailed look at selected pieces from the Nedra Williams Gallery exhibition and other collections
          </p>
        </div>
      </section>

      {/* Featured Artwork */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif mb-8 text-center">Featured Pieces</h2>

          <div className="max-w-5xl mx-auto">
            {/* Artwork 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <Image
                    src="/gallery-art-6.jpg"
                    alt="Ancestral Connections - Mixed media collage"
                    width={500}
                    height={600}
                    className="rounded-lg shadow-md mx-auto transform perspective-1000 hover:rotate-y-2 hover:rotate-x-2 transition-transform duration-500"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-serif mb-3">Ancestral Connections</h3>
                  <p className="text-sm text-gray-500 mb-4">Mixed media collage on paper, 24" x 36", 2022</p>
                  <div className="space-y-4">
                    <p>
                      This piece explores the connection between African ancestry and contemporary identity. The central
                      mask motif represents ancestral wisdom, while the silhouette of the African continent symbolizes
                      the geographical and cultural roots that continue to influence diaspora experiences.
                    </p>
                    <p>
                      The blue background represents water – both the Atlantic Ocean that physically separates the
                      diaspora from the continent and the spiritual waters that connect ancestors to their descendants.
                      The textural elements and layering technique create depth that invites viewers to look beyond the
                      surface.
                    </p>
                    <p>
                      Notable elements include hand-drawn patterns inspired by traditional textiles, found paper with
                      historical significance, and symbolic representations of cultural memory and inheritance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Artwork 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-serif mb-3">Pattern Language</h3>
                  <p className="text-sm text-gray-500 mb-4">Mixed media on canvas, 48" x 24", 2023</p>
                  <div className="space-y-4">
                    <p>
                      This striking vertical piece explores the concept of embodied knowledge and cultural patterns that
                      are carried within us. The silhouette figure represents the human form as a vessel for cultural
                      memory, filled with intricate patterns that reference traditional African design elements.
                    </p>
                    <p>
                      The stark contrast between the black background and white patterning creates a powerful visual
                      impact, while the subtle blue accent on the lips represents voice and the oral traditions through
                      which cultural knowledge is transmitted across generations.
                    </p>
                    <p>
                      The meticulous detail in the patterning reflects the artist's interest in the ways cultural
                      symbols and motifs evolve and adapt while maintaining connections to their origins. Each pattern
                      element has specific meaning within various African cultural contexts.
                    </p>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <Image
                    src="/gallery-art-9.jpg"
                    alt="Pattern Language - Mixed media on canvas"
                    width={500}
                    height={600}
                    className="rounded-lg shadow-md mx-auto"
                  />
                </div>
              </div>
            </div>

            {/* Artwork 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <Image
                    src="/gallery-art-10.jpg"
                    alt="Sisters - Mixed media drawing"
                    width={500}
                    height={600}
                    className="rounded-lg shadow-md mx-auto"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-serif mb-3">Sisters</h3>
                  <p className="text-sm text-gray-500 mb-4">Mixed media drawing on paper, 12" x 12", 2021</p>
                  <div className="space-y-4">
                    <p>
                      "Sisters" celebrates the bonds between women in the African diaspora through a stylized
                      representation of three figures with distinctive headwraps. The blue, black, and brown color
                      palette creates a harmonious visual rhythm while distinguishing each figure's unique identity.
                    </p>
                    <p>
                      The headwraps feature patterns inspired by various African textile traditions, symbolizing both
                      cultural heritage and personal expression. The simplified facial features focus attention on the
                      eyes, which serve as windows to individual character and shared experiences.
                    </p>
                    <p>
                      This piece is part of a series exploring feminine identity, cultural adornment, and the
                      transmission of aesthetic traditions across generations of women. The accompanying exhibition text
                      elaborates on the significance of headwraps as both practical garments and powerful symbols of
                      identity.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Artwork 4 */}
            <div className="bg-white p-8 rounded-lg shadow-md mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-serif mb-3">Urban Rhythms</h3>
                  <p className="text-sm text-gray-500 mb-4">Mixed media collage on canvas, 30" x 30", 2022</p>
                  <div className="space-y-4">
                    <p>
                      This dynamic collage merges geometric abstraction with photographic elements to explore the
                      intersection of traditional African design principles and contemporary urban experience. The
                      gold/yellow background creates a warm foundation that references both African textiles and the
                      vibrant energy of city life.
                    </p>
                    <p>
                      The composition incorporates circles, triangles, and linear elements in a rhythmic arrangement
                      that suggests movement and music. The integration of a photographic figure in traditional African
                      dress creates a dialogue between past and present, tradition and innovation.
                    </p>
                    <p>
                      Materials include acrylic paint, found papers, fabric scraps, photographic transfers, and mixed
                      media on canvas. The layered approach creates a rich visual texture that rewards extended viewing
                      and reveals new details with each examination.
                    </p>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <Image
                    src="/gallery-art-11.jpg"
                    alt="Urban Rhythms - Mixed media collage"
                    width={500}
                    height={600}
                    className="rounded-lg shadow-md mx-auto"
                  />
                </div>
              </div>
            </div>

            {/* Artwork 5 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <Image
                    src="/gallery-art-12.jpg"
                    alt="Remembering I - Photograph"
                    width={500}
                    height={600}
                    className="rounded-lg shadow-md mx-auto"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-serif mb-3">Remembering Series</h3>
                  <p className="text-sm text-gray-500 mb-4">Photographic series, various dimensions, 2020-2023</p>
                  <div className="space-y-4">
                    <p>
                      The "Remembering" series documents cultural practices and rituals that inform the artist's collage
                      work. These photographs capture moments of intergenerational knowledge transfer and the creation
                      of traditional patterns and symbols that later appear in the collage pieces.
                    </p>
                    <p>
                      "Remembering I" shows a woman in traditional African attire teaching a child to create chalk
                      patterns on pavement, demonstrating how cultural practices are passed down through direct
                      participation. The close-up of the chalk patterns reveals the geometric precision and symbolic
                      meaning embedded in seemingly simple designs.
                    </p>
                    <p>
                      "Remembering II" depicts a ritual moment, with a woman in white seated on a patterned ground
                      drawing. The white dress symbolizes purification and spiritual connection, while the circular
                      patterns reference both cosmic symbols and the cyclical nature of cultural transmission.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artistic Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif mb-8 text-center">Artistic Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-cream p-8 rounded-lg shadow-md">
              <p className="mb-6">
                Each piece begins with extensive research into cultural symbols, historical contexts, and personal
                narratives that inform the conceptual foundation of the work. Materials are carefully selected for both
                their aesthetic qualities and symbolic significance, with special attention to elements that connect to
                the Orisa (Divinities among the West African Yoruba).
              </p>

              <h3 className="text-xl font-serif mb-4">Creation Process</h3>
              <ol className="list-decimal pl-5 space-y-3 mb-6">
                <li>
                  <strong>Concept Development:</strong> Research and sketching to establish the narrative and symbolic
                  elements of the piece
                </li>
                <li>
                  <strong>Material Collection:</strong> Gathering papers, fabrics, photographs, and found objects that
                  will be incorporated
                </li>
                <li>
                  <strong>Background Creation:</strong> Establishing the foundational layers with paint, ink, or
                  prepared papers
                </li>
                <li>
                  <strong>Layering Process:</strong> Building up the composition through careful arrangement and
                  attachment of collage elements
                </li>
                <li>
                  <strong>Detail Work:</strong> Adding hand-drawn elements, additional paint, and finishing touches
                </li>
                <li>
                  <strong>Sealing:</strong> Applying protective finishes to preserve the work and enhance visual
                  qualities
                </li>
              </ol>

              <p>
                The creation of each piece typically spans several weeks, allowing for periods of reflection and
                refinement. This deliberate approach ensures that each element serves both the aesthetic and narrative
                purposes of the work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif mb-6">Interested in Learning More?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Explore our gallery in person, commission a custom piece, or join one of our upcoming workshops to learn
            more about the collage art process.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors"
            >
              Contact the Artist
            </Link>
            <Link
              href="/gallery"
              className="px-6 py-3 border border-black rounded-full hover:bg-black hover:text-white transition-colors"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
