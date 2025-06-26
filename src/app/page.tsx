import { Header } from "../components/header"
import { Gallery } from "../components/gallery"
import { Contact } from "../components/contact"

import { Italianno } from 'next/font/google';

const italianno = Italianno(
  { subsets: ['latin'], weight: '400' }
);


export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="relative flex items-center justify-center min-h-[60vh] py-24 bg-[url('/DandD2.jpg')] bg-cover bg-center text-center">
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent"></div>
          {/* Content */}
          <div className="relative max-w-7xl mx-auto px-4 p-12">
            <h1 className="text-7xl font-title mb-4 text-white drop-shadow-lg italic">
              Welcome To
            </h1>
            <h1 className={`${italianno.className} text-8xl sm:text-9xl lg:text-[12rem] mb-4 text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0)] italic `}>
              D&D Nails Spa
            </h1>
            <h1 className = "text-4xl font-title mb-4 text-white drop-shadow-lg italic">
              Professional Nail Care For Ladies & Gentlemen
            </h1>
            {/* <button className="bg-pink-500 text-white px-6 py-3 rounded-md text-base cursor-pointer hover:bg-pink-600 transition-colors">
              Book Appointment
            </button> */}
          </div>
        </section>
        <Gallery />
        <Contact />
      </main>
      
    </div>
  )
}

