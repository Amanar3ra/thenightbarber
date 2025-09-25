import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
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
    console.log("Form Submitted 🚀", form.current);

    emailjs
      .sendForm(
        "service_bobx6kb",   //  service ID
        "template_ebgxhdo",  //  template ID
        form.current,        //  must be the HTML form element
        "aFNe-rGiXI1q92wJE"  //  public key
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setStatus("❌ Failed to send message. " + error.text);
        }
      );
  };

  return (
    <section id="contact" style={{ padding: "50px", backgroundColor: "#111", color: "#fff" }}>
      <h2 style={{ fontSize: "32px", color: "#facc15", marginBottom: "24px" }}>Contact Us</h2>
      
      <form ref = {form} onSubmit={sendEmail} style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "400px", margin: "0 auto" }}>
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
        />
        <button
          type="submit"
          style={{ backgroundColor: "#facc15", color: "#000", padding: "12px", borderRadius: "8px", fontWeight: "bold" }}
        >
          Send Message
        </button>
      </form>

      {status && <p style={{ marginTop: "16px", color: "#facc15", fontWeight: "600" }}>{status}</p>}
    </section>
  );
};

export default Contact;
