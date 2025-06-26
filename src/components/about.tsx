import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Clock, Heart } from "lucide-react"

export function About() {
  const stats = [
    {
      icon: <Award className="h-6 w-6 text-pink-500" />,
      number: "5+",
      label: "Years Experience",
    },
    {
      icon: <Users className="h-6 w-6 text-purple-500" />,
      number: "1000+",
      label: "Happy Clients",
    },
    {
      icon: <Clock className="h-6 w-6 text-pink-500" />,
      number: "6",
      label: "Days a Week",
    },
    {
      icon: <Heart className="h-6 w-6 text-purple-500" />,
      number: "100%",
      label: "Satisfaction",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">About Luxe Nails</h2>
              <p className="text-lg text-muted-foreground">
                We are passionate about providing exceptional nail care services in a relaxing and luxurious
                environment. Our skilled technicians use only the highest quality products and latest techniques to
                ensure your nails look and feel amazing.
              </p>
              <p className="text-muted-foreground">
                From classic manicures to intricate nail art, we take pride in our attention to detail and commitment to
                hygiene and safety. Every visit to Luxe Nails is designed to be a pampering experience that leaves you
                feeling confident and beautiful.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-4 text-center">
                    <div className="mx-auto mb-2 w-fit">{stat.icon}</div>
                    <div className="text-2xl font-bold">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/20 dark:to-purple-900/20">
              <img
                src="/placeholder.svg?height=600&width=480"
                alt="Luxe Nails salon interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
