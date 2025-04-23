import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-black text-white pt-16 pb-8 relative overflow-hidden">
      {/* Artistic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 z-0">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-pink-500 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-yellow-400 blur-3xl"></div>
      </div>

      {/* Decorative Pattern */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 via-yellow-400 to-pink-500"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 md:gap-4 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-white rounded-full shadow-lg transform -translate-x-1 -translate-y-1"></div>
                <div className="absolute inset-0 bg-gray-200 rounded-full transform translate-x-1 translate-y-1"></div>
                <div className="absolute inset-0 bg-white rounded-full"></div>
                <Image
                  src="/logo.png"
                  alt="Conjure Collage Art & Design Logo"
                  width={56}
                  height={56}
                  className="h-10 md:h-14 w-auto relative z-10 drop-shadow-lg transform hover:scale-105 transition-transform"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-serif">Conjure Collage Art & Design</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Creating vibrant collage art inspired by African heritage and cultural narratives.
            </p>

            {/* Mini Gallery */}
            <div className="grid grid-cols-3 gap-2 mb-6">
              <div className="aspect-square overflow-hidden rounded-md transform perspective-500 hover:rotate-y-3 hover:rotate-x-3 transition-transform duration-300">
                <Image
                  src="/gallery-art-6.jpg"
                  alt="Artwork thumbnail"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover hover:scale-110 transition-transform shadow-md"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-md transform perspective-500 hover:rotate-y-3 hover:rotate-x-3 transition-transform duration-300">
                <Image
                  src="/gallery-art-9.jpg"
                  alt="Artwork thumbnail"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover hover:scale-110 transition-transform shadow-md"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-md transform perspective-500 hover:rotate-y-3 hover:rotate-x-3 transition-transform duration-300">
                <Image
                  src="/gallery-art-11.jpg"
                  alt="Artwork thumbnail"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover hover:scale-110 transition-transform shadow-md"
                />
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-4">
            <h3 className="text-xl font-serif mb-6 pb-2 relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-pink-500"></span>
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-pink-400 transition-colors font-medium flex items-center gap-2 group"
                >
                  <span className="w-0 h-0.5 bg-pink-500 group-hover:w-3 transition-all duration-300"></span>
                  Home
                </Link>
              </li>
              <li className="space-y-2">
                <span className="text-gray-300 font-medium flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-pink-500 group-hover:w-3 transition-all duration-300"></span>
                  Gallery
                </span>
                <ul className="pl-5 space-y-2 mt-2 border-l border-gray-800">
                  <li className="flex items-center gap-1">
                    <ChevronRight size={12} className="text-pink-400" />
                    <Link href="/gallery" className="text-gray-400 hover:text-pink-400 transition-colors">
                      Gallery Overview
                    </Link>
                  </li>
                  <li className="flex items-center gap-1">
                    <ChevronRight size={12} className="text-pink-400" />
                    <Link href="/artwork" className="text-gray-400 hover:text-pink-400 transition-colors">
                      Artwork Details
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="space-y-2">
                <span className="text-gray-300 font-medium flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-pink-500 group-hover:w-3 transition-all duration-300"></span>
                  About
                </span>
                <ul className="pl-5 space-y-2 mt-2 border-l border-gray-800">
                  <li className="flex items-center gap-1">
                    <ChevronRight size={12} className="text-pink-400" />
                    <Link href="/about" className="text-gray-400 hover:text-pink-400 transition-colors">
                      About the Artist
                    </Link>
                  </li>
                  <li className="flex items-center gap-1">
                    <ChevronRight size={12} className="text-pink-400" />
                    <Link href="/exhibitions" className="text-gray-400 hover:text-pink-400 transition-colors">
                      Exhibitions & Recognition
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  href="/poetry"
                  className="text-gray-300 hover:text-pink-400 transition-colors font-medium flex items-center gap-2 group"
                >
                  <span className="w-0 h-0.5 bg-pink-500 group-hover:w-3 transition-all duration-300"></span>
                  Poetry & Spoken Word
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-pink-400 transition-colors font-medium flex items-center gap-2 group"
                >
                  <span className="w-0 h-0.5 bg-pink-500 group-hover:w-3 transition-all duration-300"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-4">
            <h3 className="text-xl font-serif mb-6 pb-2 relative">
              Contact
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-pink-500"></span>
            </h3>
            <address className="not-italic text-gray-400 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-pink-400 mt-1 flex-shrink-0" />
                <div>
                  <p>8717 Seneca Street</p>
                  <p>Oakland, CA 94605</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-pink-400 flex-shrink-0" />
                <a href="mailto:conjurecollage@yahoo.com" className="hover:text-pink-400 transition-colors">
                  conjurecollage@yahoo.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-pink-400 flex-shrink-0" />
                <a href="tel:5109288278" className="hover:text-pink-400 transition-colors">
                  510-928-8278
                </a>
              </div>
            </address>

            {/* Newsletter Signup Teaser */}
            <div className="mt-8 bg-gray-900 p-4 rounded-lg shadow-[0_5px_15px_rgba(0,0,0,0.3)] transform hover:shadow-[0_8px_25px_rgba(0,0,0,0.4)] transition-all duration-300">
              <h4 className="text-lg font-medium mb-2">Stay Updated</h4>
              <p className="text-gray-400 text-sm mb-3">Subscribe to receive updates on new exhibitions and artwork.</p>
              <div className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-white text-gray-900 px-3 py-2 rounded-l-md sm:rounded-r-none rounded-r-md w-full focus:outline-none focus:ring-1 focus:ring-pink-500 mb-2 sm:mb-0"
                />
                <button className="bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-r-md sm:rounded-l-none rounded-l-md transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Conjure Collage Art & Design. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <Link href="#" className="text-gray-500 hover:text-pink-400 mx-2">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-500 hover:text-pink-400 mx-2">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
