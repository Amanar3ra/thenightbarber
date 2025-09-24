import React, { useState } from "react";
import emailjs from "emailjs-com";


function App() {

  const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_bobx6kb",  // service ID (Gmail)
        "template_fyi752s",  // template ID
        formData,
        "aFNe-rGiXI1q92wJE"    // public key
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          setStatus("❌ Failed to send message. Please try again.");
        }
      );
  };

  // Team members data with individual descriptions
  const teamMembers = [
    {
      name: "Rishabh",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      description: "Lead Master Barber specializing in precision fades and contemporary styles. 8+ years of experience transforming looks with artistic flair."
    },
    {
      name: "Preet",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face", 
      description: "Beard sculpting expert and traditional wet shave specialist. Known for creating perfectly groomed looks that enhance natural features."
    },
    {
      name: "Alex",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      description: "Creative stylist focused on modern trends and texture work. Passionate about helping clients express their unique personality through hair."
    },
    {
      name: "Jordan",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face",
      description: "Classic barber with expertise in timeless cuts and hot towel treatments. Dedicated to the traditional craft of barbering excellence."
    }
  ];

  return (
    <div style={{ backgroundColor: '#000', color: '#facc15', fontFamily: 'sans-serif', minHeight: '100vh' }}>
      {/* Navbar */}
      <nav style={{
        position: 'fixed',
        width: '100%',
        top: 0,
        zIndex: 50,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 24px'
        }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#facc15' }}>
            The Night Barber
          </div>
          <ul style={{
            display: 'flex',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            gap: '32px'
          }}>
            {['About', 'Team', 'Services', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`}
                  style={{
                    color: '#fff',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: '500',
                    transition: 'color 0.3s'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#facc15'}
                  onMouseOut={(e) => e.target.style.color = '#fff'}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
   {/* Hero Section with Video Background */}
<section style={{
  position: 'relative',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  color: '#fff',
  overflow: 'hidden'
}}>
  {/* Video Background */}
  <video
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      zIndex: 1
    }}
    src="/hero-video.mp4"
    autoPlay
    loop
    muted
    playsInline
  ></video>

  {/* Dark Overlay */}
  <div style={{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: 2
  }}></div>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)'
        }}></div>
        
        <div style={{ position: 'relative', zIndex: 10 }}>
          <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '16px' }}>
            The Night Barber
          </h1>
          <p style={{ fontSize: '20px', marginBottom: '24px' }}>
            Where style meets perfection
          </p>
          <a
            href="#booking"
            style={{
              backgroundColor: '#facc15',
              color: '#000',
              padding: '12px 24px',
              borderRadius: '8px',
              fontWeight: '600',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'all 0.3s',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#eab308';
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#facc15';
              e.target.style.transform = 'scale(1)';
            }}
          >
            Book Now
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{
        padding: '64px 0',
        backgroundColor: '#000',
        color: '#fff',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: '#facc15', marginBottom: '24px' }}>
            About Us
          </h2>
          <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
            At The Night Barber, we combine precision, creativity, and passion to
            bring you the best grooming experience. Our barbers are dedicated to
            redefining style for the modern gentleman.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" style={{
        padding: '64px 0',
        backgroundColor: '#1f2937',
        color: '#fff'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#facc15',
            marginBottom: '48px'
          }}>
            Meet Our Masters
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '32px',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            {teamMembers.map((member, i) => (
              <div
                key={i}
                style={{
                  position: 'relative',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 25px rgba(0, 0, 0, 0.3)',
                  backgroundColor: '#374151',
                  border: '1px solid #4b5563',
                  transition: 'all 0.5s ease',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'scale(1.03)';
                  e.currentTarget.style.borderColor = '#facc15';
                  const overlay = e.currentTarget.querySelector('.hover-overlay');
                  if (overlay) overlay.style.opacity = '1';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.borderColor = '#4b5563';
                  const overlay = e.currentTarget.querySelector('.hover-overlay');
                  if (overlay) overlay.style.opacity = '0';
                }}
              >
                {/* Member Image */}
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{
                      width: '100%',
                      height: '250px',
                      objectFit: 'cover',
                      transition: 'transform 0.7s ease'
                    }}
                    onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                    padding: '16px'
                  }}>
                    <h3 style={{
                      fontSize: '20px',
                      fontWeight: 'bold',
                      color: '#facc15',
                      margin: '0 0 4px 0'
                    }}>
                      {member.name}
                    </h3>
                    <p style={{
                      fontSize: '14px',
                      color: '#d1d5db',
                      margin: 0
                    }}>
                      Master Barber
                    </p>
                  </div>
                </div>

                {/* Hover overlay */}
                <div
                  className="hover-overlay"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.95)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    opacity: 0,
                    transition: 'opacity 0.5s ease',
                    padding: '24px'
                  }}
                >
                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#facc15',
                    marginBottom: '12px'
                  }}>
                    {member.name}
                  </h3>
                  <div style={{
                    width: '48px',
                    height: '2px',
                    backgroundColor: '#facc15',
                    marginBottom: '16px'
                  }}></div>
                  <p style={{
                    fontSize: '14px',
                    lineHeight: '1.5',
                    color: '#e5e7eb',
                    marginBottom: '16px'
                  }}>
                    {member.description}
                  </p>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    {[1, 2, 3].map(dot => (
                      <div
                        key={dot}
                        style={{
                          width: '8px',
                          height: '8px',
                          backgroundColor: '#facc15',
                          borderRadius: '50%'
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={{
        padding: '64px 0',
        backgroundColor: '#000',
        color: '#fff',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: '#facc15', marginBottom: '24px' }}>
            Our Services
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
            marginTop: '32px'
          }}>
            {["Haircuts", "Beard Styling", "Facial Grooming"].map((service, i) => (
              <div
                key={i}
                style={{
                  padding: '24px',
                  border: '1px solid #facc15',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#374151';
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>
                  {service}
                </h3>
                <p>Experience premium {service.toLowerCase()} crafted by skilled professionals.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact U Section */}
      <section id="contact" style={{ padding: "64px 24px", backgroundColor: "#000", color: "#fff", textAlign: "center" }}>
        <h2 style={{ fontSize: "36px", color: "#facc15", marginBottom: "24px" }}>Contact Us</h2>

  <form
    style={{ maxWidth: "500px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "16px" }}
    onSubmit={sendEmail}
  >
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      value={formData.name}
      onChange={handleChange}
      required
      style={{ padding: "12px", borderRadius: "8px" }}
    />
    <input
      type="email"
      name="email"
      placeholder="Your Email"
      value={formData.email}
      onChange={handleChange}
      required
      style={{ padding: "12px", borderRadius: "8px" }}
    />
    <textarea
      name="message"
      placeholder="Your Message"
      rows="4"
      value={formData.message}
      onChange={handleChange}
      required
      style={{ padding: "12px", borderRadius: "8px" }}
    ></textarea>
    <button
      type="submit"
      style={{
        backgroundColor: "#facc15",
        color: "#000",
        padding: "12px",
        borderRadius: "8px",
        fontWeight: "bold"
      }}
    >
      Send Message
    </button>
  </form>

  {status && <p style={{ marginTop: "16px", color: "#facc15", fontWeight: "600" }}>{status}</p>}
</section>



      {/* Footer */}
      <footer id="footer" style={{
        backgroundColor: '#000',
        color: '#fff',
        padding: '40px 0',
        textAlign: 'center'
      }}>
        <p style={{ color: '#facc15', fontWeight: 'bold', fontSize: '20px', marginBottom: '16px' }}>
          The Night Barber
        </p>
        <p>Halifax, NS</p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '24px',
          marginTop: '16px',
          marginBottom: '24px'
        }}>
          {['About', 'Team', 'Services', 'FAQ'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                color: '#fff',
                textDecoration: 'none',
                transition: 'color 0.3s'
              }}
              onMouseOver={(e) => e.target.style.color = '#facc15'}
              onMouseOut={(e) => e.target.style.color = '#fff'}
            >
              {item}
            </a>
          ))}
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '24px',
          marginBottom: '24px'
        }}>
          {['Facebook', 'Instagram', 'Twitter'].map((social) => (
            <a
              key={social}
              href="#"
              style={{
                color: '#fff',
                textDecoration: 'none',
                transition: 'color 0.3s'
              }}
              onMouseOver={(e) => e.target.style.color = '#facc15'}
              onMouseOut={(e) => e.target.style.color = '#fff'}
            >
              {social}
            </a>
          ))}
        </div>
        <p style={{ marginTop: '24px', fontSize: '14px', color: '#9ca3af' }}>
          &copy; 2025 The Night Barber. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;