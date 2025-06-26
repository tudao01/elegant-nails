"use client"

import { useState } from "react"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    /*{ name: "Services", href: "/services" },*/ //change to add things to header
    { name: "Gallery", href: "/designGallery" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      style={{
        backgroundColor: "white",
        borderBottom: "1px solid #e5e7eb",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            height: "4rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Desktop Navigation */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
            }}
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1.25rem',
                  color: '#4B5563',
                  padding: '0.5rem 1rem',
                  transition: 'color 0.2s ease-in-out',
                  textDecoration: 'none',
                }}
                onMouseOver={(e) => e.currentTarget.style.color = '#000000'}
                onMouseOut={(e) => e.currentTarget.style.color = '#4B5563'}
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
