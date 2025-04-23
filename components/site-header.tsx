"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, ChevronDown } from "lucide-react"
import { useState } from "react"

export function SiteHeader() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const isActive = (path: string) => {
    return pathname === path
  }

  const isDropdownActive = (paths: string[]) => {
    return paths.some((path) => pathname === path)
  }

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(dropdown)
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-pink-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 md:gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-white rounded-full shadow-lg transform -translate-x-1 -translate-y-1"></div>
              <div className="absolute inset-0 bg-gray-200 rounded-full transform translate-x-1 translate-y-1"></div>
              <div className="absolute inset-0 bg-white rounded-full"></div>
              <Image
                src="/logo.png"
                alt="Conjure Collage Art & Design Logo"
                width={64}
                height={64}
                className="h-12 md:h-16 w-auto relative z-10 drop-shadow-lg transform hover:scale-105 transition-transform"
              />
            </div>
            <h1 className="text-xl md:text-2xl font-serif truncate">Conjure Collage Art & Design</h1>
          </Link>

          {/* Mobile menu button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            <Menu size={24} />
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex gap-6">
              <li>
                <Link
                  href="/"
                  className={`transition-colors ${isActive("/") ? "text-pink-600 font-medium" : "text-black hover:text-pink-600"}`}
                >
                  Home
                </Link>
              </li>
              <li className="relative">
                <button
                  onClick={() => toggleDropdown("gallery")}
                  className={`flex items-center gap-1 transition-colors ${
                    isDropdownActive(["/gallery", "/artwork"])
                      ? "text-pink-600 font-medium"
                      : "text-black hover:text-pink-600"
                  }`}
                >
                  Gallery{" "}
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${activeDropdown === "gallery" ? "rotate-180" : ""}`}
                  />
                </button>
                {activeDropdown === "gallery" && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-md rounded-md overflow-hidden z-20">
                    <ul>
                      <li>
                        <Link
                          href="/gallery"
                          className={`block px-4 py-2 transition-colors ${
                            isActive("/gallery") ? "bg-pink-50 text-pink-600" : "hover:bg-pink-50"
                          }`}
                          onClick={() => setActiveDropdown(null)}
                        >
                          Gallery Overview
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/artwork"
                          className={`block px-4 py-2 transition-colors ${
                            isActive("/artwork") ? "bg-pink-50 text-pink-600" : "hover:bg-pink-50"
                          }`}
                          onClick={() => setActiveDropdown(null)}
                        >
                          Artwork Details
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li className="relative">
                <button
                  onClick={() => toggleDropdown("about")}
                  className={`flex items-center gap-1 transition-colors ${
                    isDropdownActive(["/about", "/exhibitions"])
                      ? "text-pink-600 font-medium"
                      : "text-black hover:text-pink-600"
                  }`}
                >
                  About{" "}
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${activeDropdown === "about" ? "rotate-180" : ""}`}
                  />
                </button>
                {activeDropdown === "about" && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-md rounded-md overflow-hidden z-20">
                    <ul>
                      <li>
                        <Link
                          href="/about"
                          className={`block px-4 py-2 transition-colors ${
                            isActive("/about") ? "bg-pink-50 text-pink-600" : "hover:bg-pink-50"
                          }`}
                          onClick={() => setActiveDropdown(null)}
                        >
                          About the Artist
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/exhibitions"
                          className={`block px-4 py-2 transition-colors ${
                            isActive("/exhibitions") ? "bg-pink-50 text-pink-600" : "hover:bg-pink-50"
                          }`}
                          onClick={() => setActiveDropdown(null)}
                        >
                          Exhibitions & Recognition
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li>
                <Link
                  href="/poetry"
                  className={`transition-colors ${isActive("/poetry") ? "text-pink-600 font-medium" : "text-black hover:text-pink-600"}`}
                >
                  Poetry
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className={`transition-colors ${isActive("/services") ? "text-pink-600 font-medium" : "text-black hover:text-pink-600"}`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`transition-colors ${isActive("/contact") ? "text-pink-600 font-medium" : "text-black hover:text-pink-600"}`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-2 border-t border-gray-200 pt-2">
            <ul className="flex flex-col gap-1">
              <li>
                <Link
                  href="/"
                  className={`block py-2 transition-colors ${isActive("/") ? "text-pink-600 font-medium" : "text-black hover:text-pink-600"}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <button
                  onClick={() => toggleDropdown("mobile-gallery")}
                  className={`flex items-center justify-between w-full py-2 transition-colors ${
                    isDropdownActive(["/gallery", "/artwork"])
                      ? "text-pink-600 font-medium"
                      : "text-black hover:text-pink-600"
                  }`}
                >
                  <span>Gallery</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${activeDropdown === "mobile-gallery" ? "rotate-180" : ""}`}
                  />
                </button>
                {activeDropdown === "mobile-gallery" && (
                  <ul className="pl-4 border-l-2 border-pink-200 ml-2">
                    <li>
                      <Link
                        href="/gallery"
                        className={`block py-2 transition-colors ${
                          isActive("/gallery") ? "text-pink-600 font-medium" : "text-black hover:text-pink-600"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Gallery Overview
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/artwork"
                        className={`block py-2 transition-colors ${
                          isActive("/artwork") ? "text-pink-600 font-medium" : "text-black hover:text-pink-600"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Artwork Details
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <button
                  onClick={() => toggleDropdown("mobile-about")}
                  className={`flex items-center justify-between w-full py-2 transition-colors ${
                    isDropdownActive(["/about", "/exhibitions"])
                      ? "text-pink-600 font-medium"
                      : "text-black hover:text-pink-600"
                  }`}
                >
                  <span>About</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${activeDropdown === "mobile-about" ? "rotate-180" : ""}`}
                  />
                </button>
                {activeDropdown === "mobile-about" && (
                  <ul className="pl-4 border-l-2 border-pink-200 ml-2">
                    <li>
                      <Link
                        href="/about"
                        className={`block py-2 transition-colors ${
                          isActive("/about") ? "text-pink-600 font-medium" : "text-black hover:text-pink-600"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        About the Artist
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/exhibitions"
                        className={`block py-2 transition-colors ${
                          isActive("/exhibitions") ? "text-pink-600 font-medium" : "text-black hover:text-pink-600"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Exhibitions & Recognition
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link
                  href="/poetry"
                  className={`block py-2 transition-colors ${isActive("/poetry") ? "text-pink-600 font-medium" : "text-black hover:text-pink-600"}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Poetry
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className={`block py-2 transition-colors ${isActive("/services") ? "text-pink-600 font-medium" : "text-black hover:text-pink-600"}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`block py-2 transition-colors ${isActive("/contact") ? "text-pink-600 font-medium" : "text-black hover:text-pink-600"}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
