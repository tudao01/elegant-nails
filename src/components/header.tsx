"use client"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"

export function Header() {

  const navigation = [
    { name: "Home", href: "/" },
    /*{ name: "Services", href: "/services" },*/ //change to add things to header
    { name: "Gallery", href: "/designGallery" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="bg-background border-b border-border shadow-sm relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-center">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground/70 hover:text-foreground transition-colors text-lg font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Theme Toggle - Positioned absolutely on the right */}
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
