import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function FeaturedDesigns() {
  const designs = [
    {
      id: 1,
      image: "/nail_design1.jpg?height=300&width=300",
    },
    {
      id: 2,
      image: "/nail_design2.jpg?height=300&width=300",
    },
    {
      id: 3,
      image: "/nail_design3.jpg?height=300&width=300",
    },
    {
      id: 4,
      image: "/nail_design4.jpg?height=300&width=300",
    },
    {
      id: 5,
      image: "/nail_design5.jpg?height=300&width=300",
    },
    {
      id: 6,
      image: "/nail_design6.jpg?height=300&width=300",
    },
    {
      id: 7,
      image: "/nail_design7.jpg?height=300&width=300",
    },
    {
      id: 8,
      image: "/nail_design8.jpg?height=300&width=300",
    },
    {
      id: 9,
      image: "/nail_design9.jpg?height=300&width=300",
    },
    {
      id: 10,
      image: "/nail_design10.jpg?height=300&width=300",
    },
    {
      id: 11,
      image: "/nail_design11.jpg?height=300&width=300",
    },
    {
      id: 12,
      image: "/nail_design12.jpg?height=300&width=300",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-end mb-12">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-6xl font-title text-center">Featured Designs</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {designs.map((design) => (
            <div key={design.id} className="group">
              <div className="aspect-square rounded-xl overflow-hidden bg-muted mb-4">
                <img
                  src={design.image || "/placeholder.svg"}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
