import React from "react";

function App() {
  return (
    <div className="bg-black text-gold font-sans">
      {/* Navbar */}
      <nav className="fixed w-full top-0 z-20 bg-black bg-opacity-70 shadow-md">
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* Logo top-left */}
          <div className="text-2xl font-bold text-gold">
            The Night Barber
          </div>
          <ul className="flex space-x-6 text-white">
            <li><a href="#about" className="hover:text-gold">About</a></li>
            <li><a href="#team" className="hover:text-gold">Team</a></li>
            <li><a href="#services" className="hover:text-gold">Services</a></li>
            <li><a href="#faq" className="hover:text-gold">FAQ</a></li>
            <li><a href="#footer" className="hover:text-gold">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center text-center text-white">
        {/* Video background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero-video.mp4" // replace with your video
          autoPlay
          loop
          muted
          playsInline
        ></video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold mb-4">The Night Barber</h1>
          <p className="text-xl mb-6">Where style meets perfection</p>
          <a
            href="#booking"
            className="bg-gold text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
          >
            Book Now
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-black text-white text-center">
        <h2 className="text-4xl font-bold text-gold mb-6">About Us</h2>
        <p className="max-w-3xl mx-auto">
          At The Night Barber, we combine precision, creativity, and passion to
          bring you the best grooming experience. Our barbers are dedicated to
          redefining style for the modern gentleman.
        </p>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 bg-gray-900 text-white">
        <h2 className="text-4xl font-bold text-center text-gold mb-12">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {["Rishabh", "Preet", "Alex", "Jordan"].map((name, i) => (
            <div key={i} className="group relative rounded-lg overflow-hidden shadow-lg">
              <img
                src={`/team${i + 1}.jpg`}
                alt={name}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4">
                <h3 className="text-xl font-bold text-gold mb-2">{name}</h3>
                <p className="text-sm">
                  Master barber with years of expertise in modern and classic styles.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-black text-white text-center">
        <h2 className="text-4xl font-bold text-gold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {["Haircuts", "Beard Styling", "Facial Grooming"].map((service, i) => (
            <div key={i} className="p-6 border border-gold rounded-lg hover:bg-gray-800 transition">
              <h3 className="text-2xl font-semibold mb-4">{service}</h3>
              <p>
                Experience premium {service.toLowerCase()} crafted by skilled professionals.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-gray-900 text-white text-center">
        <h2 className="text-4xl font-bold text-gold mb-6">FAQ</h2>
        <div className="max-w-3xl mx-auto text-left space-y-6">
          <div>
            <h3 className="font-semibold text-lg">Do I need an appointment?</h3>
            <p>Yes, we recommend booking in advance to secure your spot.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">What payment methods do you accept?</h3>
            <p>We accept credit, debit, and digital payments.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Are walk-ins allowed?</h3>
            <p>Yes, but availability is not guaranteed.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-black text-white py-10 text-center">
        <p className="text-gold font-bold text-xl mb-4">The Night Barber</p>
        <p>123 Main Street, Halifax, NS</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#about" className="hover:text-gold">About</a>
          <a href="#team" className="hover:text-gold">Team</a>
          <a href="#services" className="hover:text-gold">Services</a>
          <a href="#faq" className="hover:text-gold">FAQ</a>
        </div>
        <div className="flex justify-center space-x-6 mt-6">
          <a href="#" className="hover:text-gold">Facebook</a>
          <a href="#" className="hover:text-gold">Instagram</a>
          <a href="#" className="hover:text-gold">Twitter</a>
        </div>
        <p className="mt-6 text-sm text-gray-400">&copy; 2025 The Night Barber. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
