import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// ─── ICONS ───────────────────────────────────────────────────────────────────
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.01l-2.2 2.21z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const SendIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
  </svg>
);

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
  </svg>
);




// ─── CONTACT PAGE ─────────────────────────────────────────────────────────────
export default function ContactPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const BASE_URL =
  import.meta.env.VITE_API_URL || "https://mbbs-vietnam.onrender.com";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch(`${BASE_URL}/send-email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (!response.ok) throw new Error("Email not sent");

    // ✅ Show popup on success
    alert("Form submitted successfully!");

    // Reset form + success state
    setSubmitted(true);
    setForm({ fullName: "", email: "", phone: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  } catch (error) {
    console.error(error);
    alert("Failed to send email. Please try again.");
  }
};


  return (
    <div className="min-h-screen bg-[#FFF8F0] flex flex-col font-sans">
      <Header />

      {/* ── PAGE HERO ── 
      <section className="bg-[#1A0A0A] py-12 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #CC1B1B 0%, transparent 50%), radial-gradient(circle at 80% 50%, #F5C518 0%, transparent 50%)" }}
        />
        <div className="relative max-w-2xl mx-auto">
          <span className="inline-block bg-[#F5C518] text-[#1A0A0A] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded mb-4">
            Contact Us
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-3"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Let's Start a <span className="text-[#CC1B1B]">Conversation</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base">
            Our expert counsellors are ready to guide you toward your international education goals.
          </p>
        </div>
      </section> */}


      <section className="bg-[#1A0A0A] py-12 px-4 text-center relative overflow-hidden">
  {/* Gradient background with theme colors */}
  <div
    className="absolute inset-0 opacity-10"
    style={{
      backgroundImage: `
        radial-gradient(circle at 25% 50%, #CC1B1B 0%, transparent 50%), 
        radial-gradient(circle at 75% 50%, #F5C518 0%, transparent 50%)
      `,
    }}
  />

  <div className="relative max-w-2xl mx-auto">
    {/* Badge */}
    <span className="inline-block bg-[#F5C518] text-[#1A0A0A] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded mb-4">
      Contact Us
    </span>

    {/* Heading */}
    <h1
      className="text-3xl sm:text-4xl font-black text-white leading-tight mb-3"
      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
    >
      Let's Start a <span className="text-[#CC1B1B]">Conversation</span>
    </h1>

    {/* Subtext */}
    <p className="text-gray-400 text-sm sm:text-base">
      Our expert counsellors are ready to guide you toward your international education goals.
    </p>
  </div>
</section>

      {/* ── MAIN CONTENT ── */}
      <main className="flex-1 py-14 px-4">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8">

          {/* ── LEFT CARD ── */}
          <div className="bg-[#CC1B1B] rounded-2xl p-8 sm:p-10 relative overflow-hidden flex flex-col gap-7 shadow-xl">
            {/* Decorative circles */}
            <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-[#A01414] opacity-60 pointer-events-none" />
            <div className="absolute -bottom-10 -left-8 w-28 h-28 rounded-full bg-[#F5C518] opacity-10 pointer-events-none" />

            <div className="relative">
            
              <h2 className="text-white text-2xl sm:text-3xl font-black leading-snug"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                We're here<br />to help you.
              </h2>
            </div>

            <div className="relative h-px bg-white/15" />

            {/* Info rows */}
            {[
              { icon: <PhoneIcon />, label: "Call Us", value: "90034 20057 | 72000 95846" },
              { icon: <MailIcon />, label: "Email", value: "info@medviet.com" },
              {
                icon: <LocationIcon />,
                label: "Office Address",
                value: "38, Eswaran Koil Street (Lane Side), Alandur, Chennai – 16",
              },
            ].map(({ icon, label, value }) => (
              <div key={label} className="relative flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-[#F5C518] text-[#1A0A0A] flex items-center justify-center shadow-md">
                  {icon}
                </div>
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-wider mb-0.5">{label}</p>
                  <p className="text-white font-semibold text-sm leading-relaxed">{value}</p>
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <button
              onClick={() => window.open("https://wa.me/919150430545", "_blank")}
              className="relative mt-auto w-full bg-[#F5C518] text-[#1A0A0A] py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#C9A010] active:scale-[0.98] transition-all duration-200 shadow-lg"
            >
              <WhatsAppIcon />
              Chat on WhatsApp
            </button>
          </div>

          {/* ── RIGHT FORM ── */}
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 border border-[#F0E0E0]">
            {/* Gold accent bar */}
            <div className="w-12 h-1 rounded-full bg-[#F5C518] mb-5" />
            <h2 className="text-[#1A0A0A] text-2xl font-black mb-1"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Send an Enquiry
            </h2>
            <p className="text-gray-400 text-sm mb-7">
              Fill in the details below and we'll be in touch within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Row: Name + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#3D1A1A] uppercase tracking-wider mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="w-full border-[1.5px] border-[#E8D0D0] bg-[#FFF8F0] rounded-xl px-4 py-2.5 text-sm text-[#1A0A0A] placeholder-[#BBA8A8] focus:outline-none focus:border-[#CC1B1B] focus:bg-white transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#3D1A1A] uppercase tracking-wider mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="Your phone number"
                    className="w-full border-[1.5px] border-[#E8D0D0] bg-[#FFF8F0] rounded-xl px-4 py-2.5 text-sm text-[#1A0A0A] placeholder-[#BBA8A8] focus:outline-none focus:border-[#CC1B1B] focus:bg-white transition-all duration-200"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-[#3D1A1A] uppercase tracking-wider mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="Your email address"
                  className="w-full border-[1.5px] border-[#E8D0D0] bg-[#FFF8F0] rounded-xl px-4 py-2.5 text-sm text-[#1A0A0A] placeholder-[#BBA8A8] focus:outline-none focus:border-[#CC1B1B] focus:bg-white transition-all duration-200"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-[#3D1A1A] uppercase tracking-wider mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your query..."
                  className="w-full border-[1.5px] border-[#E8D0D0] bg-[#FFF8F0] rounded-xl px-4 py-2.5 text-sm text-[#1A0A0A] placeholder-[#BBA8A8] focus:outline-none focus:border-[#CC1B1B] focus:bg-white transition-all duration-200 resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-[#CC1B1B] text-white py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#A01414] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-[#CC1B1B]/20"
              >
                <SendIcon />
                Submit Enquiry
              </button>

              {/* Success Toast */}
              {submitted && (
                <div className="bg-[#1A0A0A] text-white text-sm px-4 py-3 rounded-xl border-l-4 border-[#F5C518] text-center animate-pulse">
                  ✓ Enquiry submitted! We'll be in touch soon.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* ── TRUST BAR ── */}
        <div className="max-w-5xl mx-auto mt-10">
          <div className="bg-[#1A0A0A] rounded-2xl px-6 py-5 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { stat: "5000+", label: "Students Placed" },
              { stat: "20+", label: "Countries" },
              { stat: "200+", label: "Partner Universities" },
              { stat: "98%", label: "Visa Success Rate" },
            ].map(({ stat, label }) => (
              <div key={label}>
                <p className="text-[#F5C518] text-xl font-black">{stat}</p>
                <p className="text-gray-400 text-xs mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}