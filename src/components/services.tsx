export function Services() {
  const services = [
    {
      title: "Manicure",
    },
    {
      title: "Gel Manicure",
    },
    {
      title: "Pedicure",
    },
    {
      title: "Nail Art",
    },
  ]

  return (
    <section id="services" className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-7xl font-bold text-center mb-8 text-gray-800">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-6 text-center bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-medium mb-2 text-gray-800">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

