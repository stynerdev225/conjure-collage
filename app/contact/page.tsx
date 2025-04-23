import { Mail, Phone, MapPin, Calendar, Palette, Mic } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Contact | Conjure Collage Art & Design",
  description: "Get in touch with Dr. Nedra T. Williams for commissions, workshops, and performances",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Page Header */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif mb-4 text-center">Get in Touch</h1>
          <p className="text-center max-w-2xl mx-auto text-gray-600">
            Interested in commissioning artwork, booking a workshop, or scheduling a poetry performance? Reach out using
            the information below.
          </p>
        </div>
      </section>

      {/* Booking Information */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-xl mb-12">
              <h2 className="text-2xl font-serif mb-6 text-center">Book Dr. Nedra T. Williams</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                <div className="bg-cream p-4 md:p-6 rounded-lg shadow-md transform hover:shadow-lg transition-all duration-300 text-center">
                  <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mx-auto mb-4">
                    <Palette className="text-pink-600" size={24} />
                  </div>
                  <h3 className="text-xl font-serif mb-3">Art Commissions</h3>
                  <p className="mb-4 text-sm">
                    Commission a unique piece of collage art for your home, office, or as a meaningful gift.
                  </p>
                  <Link
                    href="/services"
                    className="inline-block px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors text-sm"
                  >
                    Learn More
                  </Link>
                </div>

                <div className="bg-cream p-4 md:p-6 rounded-lg shadow-md transform hover:shadow-lg transition-all duration-300 text-center">
                  <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mx-auto mb-4">
                    <Mic className="text-pink-600" size={24} />
                  </div>
                  <h3 className="text-xl font-serif mb-3">Poetry Performances</h3>
                  <p className="mb-4 text-sm">
                    Book Dr. Williams for a powerful spoken word performance at your event or gathering.
                  </p>
                  <Link
                    href="/services"
                    className="inline-block px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors text-sm"
                  >
                    Learn More
                  </Link>
                </div>

                <div className="bg-cream p-4 md:p-6 rounded-lg shadow-md transform hover:shadow-lg transition-all duration-300 text-center">
                  <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mx-auto mb-4">
                    <Calendar className="text-pink-600" size={24} />
                  </div>
                  <h3 className="text-xl font-serif mb-3">Workshops</h3>
                  <p className="mb-4 text-sm">
                    Schedule a workshop on collage techniques, poetry writing, or cultural storytelling.
                  </p>
                  <Link
                    href="/services"
                    className="inline-block px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors text-sm"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-cream p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-serif mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-pink-600 mt-1" />
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p>8717 Seneca Street</p>
                      <p>Oakland, CA 94605</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="text-pink-600 mt-1" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <a href="mailto:conjurecollage@yahoo.com" className="hover:text-pink-600 transition-colors">
                        conjurecollage@yahoo.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="text-pink-600 mt-1" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <a href="tel:5109288278" className="hover:text-pink-600 transition-colors">
                        510-928-8278
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-medium mb-2">Studio Hours</h3>
                  <ul className="space-y-1">
                    <li className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>10:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday</span>
                      <span>11:00 AM - 4:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                  <p className="text-sm mt-2">
                    Studio visits are available by appointment. Please contact us to schedule.
                  </p>
                </div>
              </div>

              <div className="bg-cream p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-serif mb-6">Send a Message</h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block mb-2">
                      Inquiry Type
                    </label>
                    <select
                      id="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    >
                      <option value="">Select an inquiry type</option>
                      <option value="commission">Art Commission</option>
                      <option value="poetry">Poetry Performance</option>
                      <option value="workshop">Workshop Booking</option>
                      <option value="exhibition">Exhibition Opportunity</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                      placeholder="Please include details about your project, event, or inquiry. For commissions, include size preferences and timeline. For performances or workshops, include date, location, and audience information."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors w-full"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-serif mb-8 text-center">Client Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
                <p className="italic mb-4">
                  "Dr. Williams' workshop transformed our team building retreat. Her ability to guide participants
                  through both visual art and poetry created a powerful experience of connection and creativity."
                </p>
                <p className="font-medium">— Bay Area Tech Company</p>
              </div>
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
                <p className="italic mb-4">
                  "The commissioned piece Dr. Williams created for our anniversary captures our journey together
                  perfectly. Her process of understanding our story and translating it into art was as meaningful as the
                  finished piece itself."
                </p>
                <p className="font-medium">— Private Collector, San Francisco</p>
              </div>
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
                <p className="italic mb-4">
                  "Dr. Williams' spoken word performance at our cultural festival was the highlight of the event. Her
                  words resonated deeply with our diverse audience, creating a moment of shared understanding and
                  appreciation."
                </p>
                <p className="font-medium">— Oakland Cultural Arts Festival</p>
              </div>
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
                <p className="italic mb-4">
                  "Having Dr. Williams perform her poetry at our gallery opening created a perfect synergy between the
                  visual art on display and the power of spoken word. Our patrons were deeply moved by the experience."
                </p>
                <p className="font-medium">— Nedra Williams Gallery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-serif mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4 md:space-y-6">
              <div className="bg-cream p-4 md:p-6 rounded-lg">
                <h3 className="font-serif text-lg mb-2">What is the process for commissioning artwork?</h3>
                <p className="text-sm md:text-base">
                  The commission process begins with an initial consultation to discuss your vision, space, and
                  preferences. Dr. Williams then provides a proposal outlining the concept, timeline, and investment.
                  Once approved, she creates your piece with regular updates throughout the process.
                </p>
              </div>
              <div className="bg-cream p-4 md:p-6 rounded-lg">
                <h3 className="font-serif text-lg mb-2">
                  How far in advance should I book for a performance or workshop?
                </h3>
                <p className="text-sm md:text-base">
                  For optimal scheduling, we recommend booking 4-6 weeks in advance for performances and workshops.
                  However, we understand that sometimes opportunities arise with shorter notice, so please don't
                  hesitate to inquire about current availability.
                </p>
              </div>
              <div className="bg-cream p-4 md:p-6 rounded-lg">
                <h3 className="font-serif text-lg mb-2">Can workshops be customized for specific groups or themes?</h3>
                <p className="text-sm md:text-base">
                  Dr. Williams specializes in creating customized workshop experiences tailored to your group's specific
                  needs, interests, and objectives. Workshops can be adapted for various age groups, skill levels, and
                  thematic focuses.
                </p>
              </div>
              <div className="bg-cream p-4 md:p-6 rounded-lg">
                <h3 className="font-serif text-lg mb-2">
                  Do you offer virtual options for performances and workshops?
                </h3>
                <p className="text-sm md:text-base">
                  Yes, Dr. Williams offers virtual options for both performances and workshops. These can be conducted
                  via various platforms and are designed to create engaging, interactive experiences even in a digital
                  format.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
