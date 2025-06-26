export function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-title font-bold text-center mb-8 text-gray-800">
          Visit Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="p-2 rounded-full bg-gray-100 mb-4 w-12 h-12 flex items-center justify-center">
              📍
            </div>
            <h3 className="font-medium mb-1 text-gray-800">
              Address
            </h3>
            <a 
              href="https://maps.app.goo.gl/heLKBtiMfojuB3mv9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 text-lg hover:text-blue-600 transition-colors"
            >
              4345 N Expressway
              Brownsville, TX 78520
            </a>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="p-2 rounded-full bg-gray-100 mb-4 w-12 h-12 flex items-center justify-center">
              📞
            </div>
            <h3 className="font-medium mb-1 text-gray-800">
              Phone
            </h3>
            <a 
              href="tel:+19563509311" 
              className="text-gray-600 text-lg hover:text-blue-600 transition-colors"
            >
              (956) 350-9311
            </a>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="p-2 rounded-full bg-gray-100 mb-4 w-12 h-12 flex items-center justify-center">
              🕒
            </div>
            <h3 className="font-medium mb-1 text-gray-800">
              Hours
            </h3>
            <p className="text-gray-600 text-md">Monday: 10:00AM - 7:00PM</p>
            <p className="text-gray-600 text-md">Tuesday: CLOSED</p>
            <p className="text-gray-600 text-md">Wednesday: 10:00AM - 7:00PM</p>
            <p className="text-gray-600 text-md">Thursday: 10:00AM - 7:00PM</p>
            <p className="text-gray-600 text-md">Friday: 10:00AM - 7:00PM</p>
            <p className="text-gray-600 text-md">Saturday: 10:00AM - 7:00PM</p>
            <p className="text-gray-600 text-md">Sunday: 12PM-5PM</p>
          </div>
        </div>
      </div>
    </section>
  )
}

