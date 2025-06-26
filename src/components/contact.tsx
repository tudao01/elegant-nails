export function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-title font-bold text-center mb-8 text-foreground">
          Visit Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="p-2 rounded-full bg-muted mb-4 w-12 h-12 flex items-center justify-center">
              📍
            </div>
            <h3 className="font-medium mb-1 text-foreground">
              Address
            </h3>
            <a 
              href="https://maps.app.goo.gl/heLKBtiMfojuB3mv9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground text-lg hover:text-primary transition-colors"
            >
              4345 N Expressway
              Brownsville, TX 78520
            </a>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="p-2 rounded-full bg-muted mb-4 w-12 h-12 flex items-center justify-center">
              📞
            </div>
            <h3 className="font-medium mb-1 text-foreground">
              Phone
            </h3>
            <a 
              href="tel:+19563509311" 
              className="text-muted-foreground text-lg hover:text-primary transition-colors"
            >
              (956) 350-9311
            </a>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="p-2 rounded-full bg-muted mb-4 w-12 h-12 flex items-center justify-center">
              🕒
            </div>
            <h3 className="font-medium mb-1 text-foreground">
              Hours
            </h3>
            <p className="text-muted-foreground text-md">Monday: 10:00AM - 7:00PM</p>
            <p className="text-muted-foreground text-md">Tuesday: CLOSED</p>
            <p className="text-muted-foreground text-md">Wednesday: 10:00AM - 7:00PM</p>
            <p className="text-muted-foreground text-md">Thursday: 10:00AM - 7:00PM</p>
            <p className="text-muted-foreground text-md">Friday: 10:00AM - 7:00PM</p>
            <p className="text-muted-foreground text-md">Saturday: 10:00AM - 7:00PM</p>
            <p className="text-muted-foreground text-md">Sunday: 12PM-5PM</p>
          </div>
        </div>
      </div>
    </section>
  )
}

