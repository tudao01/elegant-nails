"use client"
import Link from "next/link"

export function Header() {
  const navigation = [
    { name: "Home", href: "/" },
    /*{ name: "Services", href: "/services" },*/ //change to add things to header
    { name: "Gallery", href: "/designGallery" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="bg-background border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-center">
          {/* Navigation - Visible on all screen sizes */}
          <nav className="flex items-center gap-4 md:gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground/70 hover:text-foreground transition-colors text-sm md:text-lg font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
