import Link from "next/link";
export function Gallery() {
  const images = [
    { src: "/nail_design1.jpg?height=200&width=200" },
    { src: "/nail_design2.jpg?height=200&width=200" },
    { src: "/nail_design3.jpg?height=200&width=200" },
    { src: "/nail_design4.jpg?height=200&width=200" },
  ]

  return (
    <section id="gallery" className="py-16 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-7xl font-title font-bold italic text-center mb-12 text-foreground">
          Our Work
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="aspect-[3/5] rounded-lg overflow-hidden bg-muted"
            >
              <img
                src={image.src || "/placeholder.svg"}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <Link href="/designGallery">
          <div className="text-center mt-8">
            <button className="border-2 border-border text-foreground bg-transparent px-4 py-2 rounded-md text-sm cursor-pointer hover:bg-foreground hover:text-background transition-colors">
              View More Designs
            </button>
          </div>
        </Link>
      </div>
    </section>
  )
}
