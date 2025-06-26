import { Button } from "@/components/ui/button"
import { Calendar, Star } from "lucide-react"

export function Hero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-950/20 dark:to-purple-950/20"></div>
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Beautiful Nails,{" "}
                <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Beautiful You
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-md">
                Experience luxury nail care with our expert technicians. From classic manicures to stunning nail art, we
                make your nails the perfect accessory.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Book Appointment
              </Button>
              <Button variant="outline" size="lg">
                View Our Work
              </Button>
            </div>

            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">4.9/5</span> from 200+ reviews
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/20 dark:to-purple-900/20">
              <img
                src="/placeholder.svg?height=600&width=600"
                alt="Beautiful nail art showcase"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-900 rounded-xl p-4 shadow-lg border">
              <div className="text-sm font-medium">Next Available</div>
              <div className="text-2xl font-bold text-pink-500">Today 2:30 PM</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
