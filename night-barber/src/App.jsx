import React from "react";

function App() {
  // Team members data with individual descriptions
  const teamMembers = [
    {
      name: "Rishabh",
      image: "/team1.jpg",
      description: "Lead Master Barber specializing in precision fades and contemporary styles. 8+ years of experience transforming looks with artistic flair."
    },
    {
      name: "Preet",
      image: "/team2.jpg", 
      description: "Beard sculpting expert and traditional wet shave specialist. Known for creating perfectly groomed looks that enhance natural features."
    },
    {
      name: "Alex",
      image: "/team3.jpg",
      description: "Creative stylist focused on modern trends and texture work. Passionate about helping clients express their unique personality through hair."
    },
    {
      name: "Jordan",
      image: "/team4.jpg",
      description: "Classic barber with expertise in timeless cuts and hot towel treatments. Dedicated to the traditional craft of barbering excellence."
    }
  ];

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
            <li><a href="#about" className="hover:text-gold transition-colors duration-300">About</a></li>
            <li><a href="#team" className="hover:text-gold transition-colors duration-300">Team</a></li>
            <li><a href="#services" className="hover:text-gold transition-colors duration-300">Services</a></li>
            <li><a href="#faq" className="hover:text-gold transition-colors duration-300">FAQ</a></li>
            <li><a href="#footer" className="hover:text-gold transition-colors duration-300">Contact</a></li>
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
          <h1 className="text-5xl font-extrabold mb-4 animate-fade-in">The Night Barber</h1>
          <p className="text-xl mb-6">Where style meets perfection</p>
          <a
            href="#booking"
            className="bg-gold text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Book Now
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-black text-white text-center">
        <h2 className="text-4xl font-bold text-gold mb-6">About Us</h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          At The Night Barber, we combine precision, creativity, and passion to
          bring you the best grooming experience. Our barbers are dedicated to
          redefining style for the modern gentleman.
        </p>
      </section>

      {/* Enhanced Team Section */}
      <section id="team" className="py-16 bg-gray-900 text-white">
        <h2 className="text-4xl font-bold text-center text-gold mb-12">Meet Our Masters</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
          {teamMembers.map((member, i) => (
            <div key={i} className="group relative rounded-xl overflow-hidden shadow-2xl bg-gray-800 border border-gray-700 hover:border-gold transition-all duration-500 transform hover:scale-105">
              {/* Member Image */}
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
              </div>
              
              {/* Member Info - Always visible at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-xl font-bold text-gold mb-1">{member.name}</h3>
                <p className="text-sm text-gray-300">Master Barber</p>
              </div>

              {/* Hover overlay with detailed description */}
              <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-all duration-500 p-6 backdrop-blur-sm">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-bold text-gold mb-3">{member.name}</h3>
                  <div className="w-12 h-0.5 bg-gold mx-auto mb-4"></div>
                  <p className="text-sm leading-relaxed text-gray-200 mb-4">
                    {member.description}
                  </p>
                  <div className="flex space-x-2 justify-center">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-black text-white text-center">
        <h2 className="text-4xl font-bold text-gold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
          {["Haircuts", "Beard Styling", "Facial Grooming"].map((service, i) => (
            <div key={i} className="p-6 border border-gold rounded-lg hover:bg-gray-800 hover:scale-105 transition-all duration-300 shadow-lg">
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
        <div className="max-w-3xl mx-auto text-left space-y-6 px-4">
          <div className="border-l-4 border-gold pl-4">
            <h3 className="font-semibold text-lg text-gold mb-2">Do I need an appointment?</h3>
            <p>Yes, we recommend booking in advance to secure your spot.</p>
          </div>
          <div className="border-l-4 border-gold pl-4">
            <h3 className="font-semibold text-lg text-gold mb-2">What payment methods do you accept?</h3>
            <p>We accept credit, debit, and digital payments.</p>
          </div>
          <div className="border-l-4 border-gold pl-4">
            <h3 className="font-semibold text-lg text-gold mb-2">Are walk-ins allowed?</h3>
            <p>Yes, but availability is not guaranteed.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-black text-white py-10 text-center">
        <p className="text-yellow-400 font-bold text-xl mb-4">The Night Barber</p>
        <p>123 Main Street, Halifax, NS</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#about" className="hover:text-yellow-400 transition-colors duration-300">About</a>
          <a href="#team" className="hover:text-yellow-400 transition-colors duration-300">Team</a>
          <a href="#services" className="hover:text-yellow-400 transition-colors duration-300">Services</a>
          <a href="#faq" className="hover:text-yellow-400 transition-colors duration-300">FAQ</a>
        </div>
        <div className="flex justify-center space-x-6 mt-6">
          <a href="#" className="hover:text-yellow-400 transition-colors duration-300">Facebook</a>
          <a href="#" className="hover:text-yellow-400 transition-colors duration-300">Instagram</a>
          <a href="#" className="hover:text-yellow-400 transition-colors duration-300">Twitter</a>
        </div>
        <p className="mt-6 text-sm text-gray-400">&copy; 2025 The Night Barber. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;