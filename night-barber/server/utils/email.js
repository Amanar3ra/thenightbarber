import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS
  }
});

/** send two emails: company notification + customer receipt */
export async function sendBookingEmails(booking, type = "receipt") {
  const companyMail = {
    from: `"The Night Barber" <${process.env.GMAIL_USER}>`,
    to: process.env.COMPANY_EMAIL,
    subject: `${type === "confirm" ? "Booking confirmed" : "New booking (Pending)"} — ${booking.service}`,
    text: `
Booking: ${booking.service}
Barber: ${booking.barber}
Date: ${booking.date} ${booking.time}
Customer: ${booking.name} (${booking.email}) ${booking.phone ? `• ${booking.phone}` : ""}
Booking ID: ${booking._id}
Status: ${booking.status}
`
  };

  const clientMail = {
    from: `"The Night Barber" <${process.env.GMAIL_USER}>`,
    to: booking.email,
    subject: `${type === "confirm" ? "Your booking is confirmed" : "We received your booking"}`,
    text: `
Hi ${booking.name},

${type === "confirm" ? "Your booking is CONFIRMED." : "We received your booking (Pending)."}

Service: ${booking.service}
Barber: ${booking.barber}
Date: ${booking.date}
Time: ${booking.time}

${type === "confirm" ? "See you soon!" : "We will notify you once it's confirmed."}

Booking ID: ${booking._id}
`
  };

  // try send both; don't throw to caller
  try { await transporter.sendMail(companyMail); console.log("Company email sent"); } catch(e){ console.warn("Company mail error:", e.message); }
  try { await transporter.sendMail(clientMail); console.log("Client email sent"); } catch(e){ console.warn("Client mail error:", e.message); }
}
