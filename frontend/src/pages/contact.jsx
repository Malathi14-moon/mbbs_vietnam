import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../assets/Professional-contact.png"; // adjust path

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

export default function ContactPage() {
  const [form, setForm] = useState({ fullName: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const BASE_URL = import.meta.env.VITE_API_URL || "https://mbbs-vietnam.onrender.com";

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error("Email not sent");
      alert("Form submitted successfully!");
      setSubmitted(true);
      setForm({ fullName: "", email: "", phone: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (error) {
      console.error(error);
      alert("Failed to send email. Please try again.");
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f5f5f5", display: "flex", flexDirection: "column", fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600;700&display=swap');
        .serif { font-family: 'Playfair Display', Georgia, serif; }

        /* ── HERO ── */
        .contact-hero {
          background: #CC1B1B;
          position: relative;
          overflow: hidden;
          padding: 5rem 1.5rem;
          text-align: center;
        }
        .contact-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 55% 80% at 0% 100%, rgba(0,0,0,0.22) 0%, transparent 60%),
            radial-gradient(ellipse 45% 65% at 100% 0%, rgba(245,197,24,0.18) 0%, transparent 55%);
          pointer-events: none;
        }
        .hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px);
          background-size: 44px 44px;
          pointer-events: none;
        }

        /* ── BADGE ── */
        .badge-gold {
          display: inline-flex;
          align-items: center;
          background: #F5C518;
          color: #111;
          border-radius: 100px;
          padding: 5px 16px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          margin-bottom: 1.25rem;
        }

        /* ── LEFT CARD (info panel) ── */
        .info-card {
          background: #CC1B1B;
          border-radius: 20px;
          padding: 2.5rem;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
          box-shadow: 0 20px 60px rgba(204,27,27,0.25);
        }
        .info-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 60% 50% at 100% 0%, rgba(245,197,24,0.15) 0%, transparent 55%),
            radial-gradient(ellipse 50% 60% at 0% 100%, rgba(0,0,0,0.2) 0%, transparent 55%);
          pointer-events: none;
        }
        .info-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 36px 36px;
          pointer-events: none;
        }

        .info-row {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }
        .info-icon {
          width: 42px; height: 42px;
          border-radius: 10px;
          background: #F5C518;
          color: #111;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        .info-divider {
          position: relative; z-index: 1;
          height: 1px;
          background: rgba(255,255,255,0.15);
        }

        .wa-btn {
          position: relative; z-index: 1;
          width: 100%;
          background: #F5C518;
          color: #111;
          padding: 0.875rem;
          border-radius: 12px;
          font-weight: 700;
          font-size: 0.9rem;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          border: none; cursor: pointer;
          transition: background 0.2s, transform 0.15s;
          margin-top: auto;
        }
        .wa-btn:hover { background: #e0b315; transform: translateY(-1px); }
        .wa-btn:active { transform: scale(0.98); }

        /* ── FORM CARD ── */
        .form-card {
          background: #fff;
          border-radius: 20px;
          padding: 2.5rem;
          border: 1.5px solid #ebebeb;
          box-shadow: 0 4px 24px rgba(0,0,0,0.06);
        }

        .gold-bar {
          width: 44px; height: 3px;
          background: #F5C518;
          border-radius: 2px;
          margin-bottom: 1.25rem;
        }

        .field-label {
          display: block;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.09em;
          color: #333;
          margin-bottom: 6px;
        }

        .field-input {
          width: 100%;
          border: 1.5px solid #e0e0e0;
          background: #fafafa;
          border-radius: 10px;
          padding: 0.7rem 1rem;
          font-size: 0.875rem;
          color: #111;
          font-family: 'DM Sans', sans-serif;
          transition: border-color 0.2s, background 0.2s;
          outline: none;
          box-sizing: border-box;
        }
        .field-input::placeholder { color: #aaa; }
        .field-input:focus { border-color: #CC1B1B; background: #fff; }

        .submit-btn {
          width: 100%;
          background: #CC1B1B;
          color: #fff;
          padding: 0.9rem;
          border-radius: 12px;
          font-weight: 700;
          font-size: 0.9375rem;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          border: none; cursor: pointer;
          transition: background 0.2s, transform 0.15s;
          font-family: 'DM Sans', sans-serif;
        }
        .submit-btn:hover { background: #b01616; transform: translateY(-1px); }
        .submit-btn:active { transform: scale(0.98); }

        /* ── TRUST BAR ── */
        .trust-bar {
          background: #CC1B1B;
          border-radius: 16px;
          padding: 1.75rem 2rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 1rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .trust-bar::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 60% 80% at 100% 50%, rgba(245,197,24,0.15) 0%, transparent 60%);
          pointer-events: none;
        }
        .trust-stat {
          position: relative; z-index: 1;
        }

        /* ── LAYOUT GRID ── */
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 1.75rem;
          max-width: 1000px;
          margin: 0 auto;
        }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr; }
        }

        .two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        @media (max-width: 480px) {
          .two-col { grid-template-columns: 1fr; }
        }
      `}</style>

      <Header />

      {/* ── HERO ──  
      <section className="contact-hero">
        <div className="hero-grid" />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "640px", margin: "0 auto" }}>
          <div className="badge-gold">Contact Us</div>
          <h1 className="serif" style={{ color: "#fff", fontSize: "clamp(2rem, 4.5vw, 3rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "1rem" }}>
            Let's Start a{" "}
            <span style={{ color: "#F5C518" }}>Conversation</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "1rem", lineHeight: 1.75 }}>
            Our expert counsellors are ready to guide you toward your MBBS goals in Vietnam. Reach out — we respond within 24 hours.
          </p>
        </div>
      </section> */}


    <section
  style={{
    position: "relative",
    overflow: "hidden",
    minHeight: "480px",
    display: "flex",
    alignItems: "center",
    background: "#fff",
  }}

  >

  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "42%",
      height: "100%",
      background: "linear-gradient(160deg, #CC1B1B 60%, #a01414 100%)",
      clipPath: "polygon(0 0, 88% 0, 100% 100%, 0 100%)",
      zIndex: 0,
    }}
  />

  
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "42%",
      height: "100%",
      backgroundImage:
        "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
      backgroundSize: "22px 22px",
      clipPath: "polygon(0 0, 88% 0, 100% 100%, 0 100%)",
      zIndex: 1,
    }}
  />

  
  <div
    style={{
      position: "relative",
      zIndex: 2,
      maxWidth: "1200px",
      width: "100%",
      margin: "0 auto",
      padding: "3.5rem clamp(1.5rem, 5vw, 4rem)",
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: "2rem",
      alignItems: "center",
    }}
  >
    
    <div>
      <div
        style={{
          display: "inline-block",
          marginBottom: "1.1rem",
          padding: "4px 14px",
          borderRadius: "999px",
          border: "1px solid rgba(255,255,255,0.35)",
          background: "rgba(255,255,255,0.15)",
          color: "#fff",
          fontSize: "0.68rem",
          fontWeight: 700,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
        }}
      >
        Contact Us
      </div>

      <h1
        className="serif"
        style={{
          color: "#ffffff",
          fontSize: "clamp(1.9rem, 3.2vw, 2.75rem)",
          fontWeight: 900,
          lineHeight: 1.18,
          marginBottom: "1rem",
        }}
      >
        Let's Start a{" "}
        <span
          style={{
            color: "#F5C518",
            display: "block",
          }}
        >
          Conversation
        </span>
      </h1>

      <p
        style={{
          color: "rgba(255,255,255,0.82)",
          fontSize: "0.92rem",
          lineHeight: 1.75,
          marginBottom: "1.75rem",
        }}
      >
        Our expert counsellors are ready to guide you every step of the
        way — from course selection to visa approval.
      </p>

      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        style={{
          padding: "11px 26px",
          background: "#F5C518",
          color: "#7a4f00",
          fontWeight: 700,
          fontSize: "0.88rem",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          boxShadow: "0 4px 18px rgba(0,0,0,0.2)",
        }}
      >
        Enquire Now →
      </button>
    </div>

    
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.85rem",
      }}
    >
      {[
        {
          icon: "📞",
          label: "Call Us",
          value: "+91 98765 43210",
          sub: "Mon – Sat, 9 AM – 6 PM",
        },
        {
          icon: "✉️",
          label: "Email Us",
          value: "info@vietnammbbs.in",
          sub: "We reply within 24 hours",
        },
        {
          icon: "📍",
          label: "Our Office",
          value: "Chennai, Tamil Nadu",
          sub: "India Headquarters",
        },
      ].map((item) => (
        <div
          key={item.label}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            padding: "14px 18px",
            borderRadius: "12px",
            background: "#fff",
            border: "1px solid #f0f0f0",
            boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
          }}
        >
          <div
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "10px",
              background: "#fff5f5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
              flexShrink: 0,
            }}
          >
            {item.icon}
          </div>
          <div>
            <div
              style={{
                fontSize: "0.68rem",
                fontWeight: 700,
                color: "#CC1B1B",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "2px",
              }}
            >
              {item.label}
            </div>
            <div
              style={{
                fontSize: "0.9rem",
                fontWeight: 700,
                color: "#111",
                marginBottom: "1px",
              }}
            >
              {item.value}
            </div>
            <div style={{ fontSize: "0.75rem", color: "#888" }}>
              {item.sub}
            </div>
          </div>
        </div>
      ))}
    </div>

    
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={Contact}
        alt="Contact illustration"
        style={{
          marginLeft: "7rem",
          width: "150%",
          maxWidth: "450px",
          height: "auto",
          objectFit: "contain",
         
        }}
      />
    </div>
  </div>
</section>  



{/* <section
  style={{
    width: "100%",
    lineHeight: 0,
    height: "90vh", // removes gap below image
  }}
>
  <img
    style={{
      width: "100%",
      height: "80vh",      // height follows the image's natural ratio
      display: "block",
         // no inline spacing
    }}
    src="https://answerfirst.com/wp-content/uploads/2018/04/communication.jpeg"
    alt="Hero background"
    loading="eager"
  />
</section> */}
      
      

      {/* ── MAIN ── */}
      <main style={{ flex: 1, padding: "4rem 1.5rem" }}>

        <div className="contact-grid">

          {/* ── INFO CARD ── 
          <div className="info-card">
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ width: "36px", height: "3px", background: "#F5C518", borderRadius: "2px", marginBottom: "1rem" }} />
              <h2 className="serif" style={{ color: "#fff", fontSize: "1.875rem", fontWeight: 900, lineHeight: 1.2 }}>
                We're here<br />to help you.
              </h2>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.875rem", marginTop: "0.5rem", lineHeight: 1.7 }}>
                Talk to our counsellors about MBBS admissions, visa, fees, and more.
              </p>
            </div>

            <div className="info-divider" />

            {[
              { icon: <PhoneIcon />, label: "Call Us", value: "90034 20057 | 72000 95846" },
              { icon: <MailIcon />, label: "Email", value: "info@medviet.com" },
              { icon: <LocationIcon />, label: "Office Address", value: "38, Eswaran Koil Street (Lane Side), Alandur, Chennai – 16" },
            ].map(({ icon, label, value }) => (
              <div key={label} className="info-row">
                <div className="info-icon">{icon}</div>
                <div>
                  <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "10.5px", textTransform: "uppercase", letterSpacing: "0.09em", fontWeight: 700, marginBottom: "3px" }}>{label}</p>
                  <p style={{ color: "#fff", fontWeight: 600, fontSize: "0.875rem", lineHeight: 1.6 }}>{value}</p>
                </div>
              </div>
            ))}

            <button className="wa-btn" onClick={() => window.open("https://wa.me/919003420057", "_blank")}>
              <WhatsAppIcon />
              Chat on WhatsApp
            </button>
          </div>  */}




     {/* <div
  style={{
    background: "#fff",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow:
      "0 2px 8px rgba(0,0,0,0.06), 0 12px 40px rgba(204,27,27,0.10), 0 1px 2px rgba(0,0,0,0.04)",
    border: "1px solid #f5f5f5",
  }}
>
  <iframe
    title="Office Location"
    src="https://maps.google.com/maps?q=38,Eswaran%20Koil%20Street,Alandur,Chennai&t=&z=15&ie=UTF8&iwloc=&output=embed"
    width="100%"
    height="350"
    style={{ border: 0 }}
    loading="lazy"
  ></iframe>
</div> */}




<div
  style={{
    background: "#fff",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow:
      "0 2px 8px rgba(0,0,0,0.06), 0 12px 40px rgba(204,27,27,0.10)",
    border: "1px solid #f5f5f5",
    height: "100%", // important
  }}
>
  <iframe
    title="Office Location"
    src="https://maps.google.com/maps?q=38,Eswaran%20Koil%20Street,Alandur,Chennai&z=15&output=embed"
    style={{
      width: "100%",
      height: "100%",
      border: 0,
    }}
    loading="lazy"
  ></iframe>
</div>




          {/* ── FORM CARD ── */}
          <div className="form-card">
            <div className="gold-bar" />
            <h2 className="serif" style={{ fontSize: "1.75rem", fontWeight: 900, color: "#111", marginBottom: "4px" }}>
              Send an Enquiry
            </h2>
            <p style={{ color: "#888", fontSize: "0.875rem", marginBottom: "1.75rem", lineHeight: 1.6 }}>
              Fill in the details below and we'll be in touch within 24 hours.
            </p>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.125rem" }}>
              <div className="two-col">
                <div>
                  <label className="field-label">Full Name *</label>
                  <input className="field-input" type="text" name="fullName" value={form.fullName} onChange={handleChange} required placeholder="Your full name" />
                </div>
                <div>
                  <label className="field-label">Phone Number *</label>
                  <input className="field-input" type="text" name="phone" value={form.phone} onChange={handleChange} required placeholder="Your phone number" />
                </div>
              </div>

              <div>
                <label className="field-label">Email Address *</label>
                <input className="field-input" type="email" name="email" value={form.email} onChange={handleChange} required placeholder="Your email address" />
              </div>

              <div>
                <label className="field-label">Message</label>
                <textarea className="field-input" name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Tell us about your query..." style={{ resize: "none" }} />
              </div>

              <button type="submit" className="submit-btn">
                <SendIcon />
                Submit
              </button>

              {submitted && (
                <div style={{ background: "rgba(245,197,24,0.12)", border: "1.5px solid #F5C518", borderRadius: "10px", padding: "0.875rem", textAlign: "center", fontSize: "0.875rem", fontWeight: 600, color: "#111" }}>
                  ✓ Enquiry submitted! We'll be in touch soon.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* ── TRUST BAR ── 
        <div style={{ maxWidth: "1000px", margin: "2rem auto 0" }}>
          <div className="trust-bar">
            {[
              { stat: "500+", label: "Students Enrolled" },
              { stat: "10+", label: "Partner Universities" },
              { stat: "98%", label: "Visa Success Rate" },
              { stat: "24/7", label: "Student Support" },
            ].map(({ stat, label }) => (
              <div key={label} className="trust-stat">
                <p className="serif" style={{ color: "#F5C518", fontSize: "1.75rem", fontWeight: 900, lineHeight: 1 }}>{stat}</p>
                <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.75rem", marginTop: "4px", fontWeight: 500 }}>{label}</p>
              </div>
            ))}
          </div>
        </div> */}

      </main>


      
      

      <Footer />
    </div>
  );
}