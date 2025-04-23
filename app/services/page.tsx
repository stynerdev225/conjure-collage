import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Palette, Mic, Users, Mail } from "lucide-react"

export const metadata = {
  title: "Services | Conjure Collage Art & Design",
  description: "Book Dr. Nedra T. Williams for workshops, commissions, and spoken word performances",
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Page Header */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif mb-4 text-center">Work with Dr. Nedra T. Williams</h1>
          <p className="text-center max-w-2xl mx-auto text-gray-600">
            Elevate your event, space, or creative journey through art, poetry, and cultural exploration
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-pattern opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-pink-500/20 blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-xl">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              <div className="md:w-1/3 w-full max-w-[250px] mx-auto md:max-w-none">
                <div className="relative">
                  <div className="w-full h-full rounded-full bg-yellow-400 absolute -top-2 -left-2 z-0"></div>
                  <Image
                    src="/vibrant-african-collage.png"
                    alt="Dr. Nedra T. Williams"
                    width={300}
                    height={300}
                    className="rounded-lg shadow-lg relative z-10 transform perspective-1000 hover:rotate-y-2 hover:rotate-x-2 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-serif mb-4">Bringing Art & Poetry to Life</h2>
                <p className="mb-4">
                  Dr. Nedra T. Williams offers a range of professional services that bring the richness of African
                  heritage, cultural narratives, and artistic expression to your space, event, or personal collection.
                </p>
                <p>
                  With expertise spanning visual art, education, and spoken word performance, Dr. Williams creates
                  meaningful experiences that inspire, educate, and transform. Each service is tailored to meet your
                  specific needs and vision.
                </p>
              </div>
            </div>

            <div className="text-center mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition-colors"
              >
                <Mail size={18} />
                <span>Inquire About Availability</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-cream p-4 rounded-md text-center">
                <Palette size={32} className="mx-auto text-pink-600 mb-2" />
                <h3 className="font-serif text-lg mb-1">Custom Commissions</h3>
                <p className="text-sm text-gray-600">Unique artwork for your space</p>
              </div>
              <div className="bg-cream p-4 rounded-md text-center">
                <Mic size={32} className="mx-auto text-pink-600 mb-2" />
                <h3 className="font-serif text-lg mb-1">Spoken Word</h3>
                <p className="text-sm text-gray-600">Performances for your event</p>
              </div>
              <div className="bg-cream p-4 rounded-md text-center">
                <Users size={32} className="mx-auto text-pink-600 mb-2" />
                <h3 className="font-serif text-lg mb-1">Workshops</h3>
                <p className="text-sm text-gray-600">Educational experiences</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Commissions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-serif mb-6">Custom Art Commissions</h2>
                <p className="mb-4">
                  Commission a unique piece of collage art for your home, office, or as a meaningful gift. Each
                  commission begins with a consultation to discuss your vision, preferences, and the story you want to
                  tell.
                </p>
                <p className="mb-4">
                  Dr. Williams creates bespoke artwork that resonates with your space and personal aesthetic while
                  incorporating elements of cultural significance and artistic excellence.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-2">
                    <span className="text-pink-600 font-bold">•</span>
                    <p>
                      <span className="font-medium">Personal Consultations</span> - Discuss your vision, space, and
                      preferences
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-pink-600 font-bold">•</span>
                    <p>
                      <span className="font-medium">Custom Sizing</span> - Artwork created to fit your specific space
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-pink-600 font-bold">•</span>
                    <p>
                      <span className="font-medium">Progress Updates</span> - View the artwork as it develops
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-pink-600 font-bold">•</span>
                    <p>
                      <span className="font-medium">Professional Delivery</span> - Secure packaging and delivery options
                    </p>
                  </div>
                </div>
                <div className="bg-cream p-4 md:p-6 rounded-md">
                  <p className="text-sm italic">
                    "Dr. Williams created a stunning piece for our office that perfectly captures our organization's
                    mission and values. The artwork has become a focal point for visitors and inspires our team daily."
                  </p>
                  <p className="text-right text-sm font-medium mt-2">— Oakland Community Foundation</p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative">
                  <div className="w-full h-full rounded-lg bg-pattern opacity-10 absolute"></div>
                  <div className="relative z-10 p-6">
                    <div className="w-32 h-32 rounded-full bg-pink-500 absolute -top-4 -left-4 z-0"></div>
                    <Image
                      src="/gallery-art-6.jpg"
                      alt="Custom Commission Example"
                      width={400}
                      height={500}
                      className="rounded-lg shadow-xl relative z-10 transform perspective-1000 hover:rotate-y-2 hover:rotate-x-2 transition-transform duration-500"
                    />
                    <div className="w-24 h-24 rounded-full bg-yellow-400 absolute -bottom-2 -right-2 z-0"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spoken Word Performances */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="relative">
                  <div className="w-full h-full rounded-lg bg-pattern opacity-10 absolute"></div>
                  <div className="relative z-10 p-6">
                    <div className="w-32 h-32 rounded-full bg-yellow-400 absolute -top-4 -left-4 z-0"></div>
                    <Image
                      src="/vibrant-african-collage.png"
                      alt="Dr. Williams performing spoken word"
                      width={400}
                      height={500}
                      className="rounded-lg shadow-xl relative z-10 transform perspective-1000 hover:rotate-y-2 hover:rotate-x-2 transition-transform duration-500"
                    />
                    <div className="w-24 h-24 rounded-full bg-pink-500 absolute -bottom-2 -right-2 z-0"></div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-serif mb-6">Spoken Word Performances</h2>
                <p className="mb-4">
                  Elevate your event with a powerful spoken word performance by Dr. Nedra T. Williams. Her poetic
                  expressions explore themes of cultural identity, heritage, and spiritual connections, creating
                  memorable experiences that resonate with audiences.
                </p>
                <p className="mb-4">
                  Whether for cultural events, corporate gatherings, educational institutions, or private celebrations,
                  Dr. Williams crafts performances that inspire, challenge, and connect.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-2">
                    <span className="text-pink-600 font-bold">•</span>
                    <p>
                      <span className="font-medium">Customized Performances</span> - Tailored to your event theme and
                      audience
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-pink-600 font-bold">•</span>
                    <p>
                      <span className="font-medium">Solo or Collaborative</span> - Options to include musicians or
                      visual elements
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-pink-600 font-bold">•</span>
                    <p>
                      <span className="font-medium">Q&A Sessions</span> - Engage directly with your audience
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-pink-600 font-bold">•</span>
                    <p>
                      <span className="font-medium">Virtual Options</span> - Available for online events and platforms
                    </p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-md shadow-md">
                  <p className="text-sm italic">
                    "Dr. Williams' spoken word performance at our annual gala was nothing short of transformative. Her
                    words resonated deeply with our guests, creating a powerful moment of reflection and connection."
                  </p>
                  <p className="text-right text-sm font-medium mt-2">— Museum of the African Diaspora</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-serif mb-6">Art & Poetry Workshops</h2>
                <p className="mb-4">
                  Drawing on her background in education, Dr. Williams offers engaging workshops for all skill levels,
                  teaching collage techniques, poetry writing, and exploring cultural storytelling through visual and
                  verbal art.
                </p>
                <p className="mb-4">
                  Workshops can be customized for educational institutions, community centers, corporate team building,
                  or private groups, creating meaningful experiences that foster creativity and cultural understanding.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-2">
                    <span className="text-pink-600 font-bold">•</span>
                    <p>
                      <span className="font-medium">Collage Techniques</span> - Learn the art of visual storytelling
                      through mixed media
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-pink-600 font-bold">•</span>
                    <p>
                      <span className="font-medium">Poetry & Spoken Word</span> - Develop your voice and performance
                      skills
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-pink-600 font-bold">•</span>
                    <p>
                      <span className="font-medium">Cultural Exploration</span> - Discover the rich heritage of African
                      and diaspora traditions
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-pink-600 font-bold">•</span>
                    <p>
                      <span className="font-medium">Integrated Arts</span> - Explore the connections between visual art
                      and poetry
                    </p>
                  </div>
                </div>
                <div className="bg-cream p-4 rounded-md">
                  <p className="text-sm italic">
                    "Our students were completely engaged throughout Dr. Williams' workshop. Her ability to connect with
                    young people and inspire their creativity is remarkable. Many students described it as a
                    life-changing experience."
                  </p>
                  <p className="text-right text-sm font-medium mt-2">— Oakland Unified School District</p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative">
                  <div className="w-full h-full rounded-lg bg-pattern opacity-10 absolute"></div>
                  <div className="relative z-10 p-6">
                    <div className="w-32 h-32 rounded-full bg-pink-500 absolute -top-4 -left-4 z-0"></div>
                    <Image
                      src="/collage-creation-essentials.png"
                      alt="Workshop materials and participants"
                      width={400}
                      height={500}
                      className="rounded-lg shadow-xl relative z-10 transform perspective-1000 hover:rotate-y-2 hover:rotate-x-2 transition-transform duration-500"
                    />
                    <div className="w-24 h-24 rounded-full bg-yellow-400 absolute -bottom-2 -right-2 z-0"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif mb-8 text-center">Booking Process</h2>
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-serif text-pink-600">1</span>
                  </div>
                  <h3 className="font-serif text-lg mb-2">Initial Consultation</h3>
                  <p className="text-sm text-gray-600">
                    Discuss your needs, vision, and timeline to determine how Dr. Williams can best serve your project
                    or event.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-serif text-pink-600">2</span>
                  </div>
                  <h3 className="font-serif text-lg mb-2">Proposal & Agreement</h3>
                  <p className="text-sm text-gray-600">
                    Receive a detailed proposal outlining services, timeline, and investment. Once approved, a simple
                    agreement confirms the details.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-serif text-pink-600">3</span>
                  </div>
                  <h3 className="font-serif text-lg mb-2">Creation & Delivery</h3>
                  <p className="text-sm text-gray-600">
                    Dr. Williams prepares and delivers your commission, performance, or workshop with the highest level
                    of professionalism and artistry.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <p className="mb-6">
                  Ready to bring the power of art and poetry to your space or event? Contact Dr. Nedra T. Williams to
                  begin the conversation.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition-colors"
                >
                  <span>Start the Conversation</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
