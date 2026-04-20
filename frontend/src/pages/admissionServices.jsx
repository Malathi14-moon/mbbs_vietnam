import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import docImage from "../assets/doc.jpeg"; // adjust path
import CTA from "../components/CTA_section";
import Admission from "../assets/admission1.webp";

const services = [
  {
    id: 1,
    step: "01",
    title: "Admission & Course Selection",
    description:
      "Our expert counsellors evaluate your academic profile, eligibility under NMC guidelines, and career goals to recommend the ideal MBBS program in Vietnam — tailored specifically to you.",
    highlights: ["NMC-compliant programs", "Profile-based matching", "NEXT exam alignment"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    id: 2,
    step: "02",
    title: "University Selection",
    description:
      "We shortlist top Vietnamese medical universities — including BMU, Dai Nam, and others — based on accreditation status, fee structure, hospital affiliations, hostel facilities, and Indian student community support.",
    highlights: ["NMC/WHO recognised", "Hospital affiliations", "Indian food & hostel"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: 3,
    step: "03",
    title: "Documentation Support",
    description:
      "From academic transcripts and SOP drafting to bank statements and medical certificates, we assist in compiling a complete, error-free application package that meets each university's exact requirements.",
    highlights: ["SOP & LOR guidance", "Document checklist", "Error-free submission"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
      </svg>
    ),
  },
  {
    id: 4,
    step: "04",
    title: "Visa Processing Assistance",
    description:
      "Our team handles the entire Vietnamese student visa process — from preparing the invitation letter and filling forms to scheduling appointments and tracking your application status, ensuring zero delays.",
    highlights: ["Visa form assistance", "Embassy support", "Status tracking"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
  {
    id: 5,
    step: "05",
    title: "Education Loan Facilitation",
    description:
      "We connect you with leading Indian banks and NBFCs offering collateral-free and collateral-based education loans for MBBS abroad. Our advisors help you prepare documentation and negotiate competitive interest rates.",
    highlights: ["Collateral-free options", "Bank tie-ups", "Loan documentation"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 6,
    step: "06",
    title: "Forex & Travel Insurance",
    description:
      "We help you secure the best foreign exchange rates for your tuition and living expenses, and arrange comprehensive student travel insurance that meets Vietnamese university requirements.",
    highlights: ["Best forex rates", "Student travel insurance", "University-compliant coverage"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 7,
    step: "07",
    title: "Pre-Departure Orientation",
    description:
      "Before you fly, we conduct a thorough orientation session covering Vietnamese culture, campus life, academic expectations, NEXT exam preparation strategy, and connect you with our alumni network in Vietnam.",
    highlights: ["Cultural orientation", "NEXT exam strategy", "Alumni network access"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    id: 8,
    step: "08",
    title: "Airport Pick-Up & Accommodation",
    description:
      "Our on-ground team in Vietnam ensures you are received at the airport on arrival day and safely transferred to your hostel. We pre-arrange accommodation with Indian food facilities, ensuring a comfortable first landing.",
    highlights: ["Airport reception", "Hostel booking", "Indian food arrangements"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 9,
    step: "09",
    title: "Post-Landing & Ongoing Support",
    description:
      "Our support doesn't end at admission. From university registration and SIM card assistance to bank account setup, local navigation, and year-round academic counselling — we remain your trusted partner throughout your MBBS journey.",
    highlights: ["University registration", "Year-round counselling", "Emergency assistance"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "500+", label: "Students Enrolled" },
  { value: "10+", label: "Partner Universities" },
  { value: "98%", label: "Visa Success Rate" },
  { value: "24/7", label: "Student Support" },
];

const whyItems = [
  { icon: "🎓", title: "NMC Compliant", sub: "NMC & WHO recognised universities" },
  { icon: "🇮🇳", title: "India-Focused", sub: "Indian faculty, food & community" },
  { icon: "✈️", title: "~4–5 Hr Flight", sub: "Vietnam — closest MBBS destination" },
  { icon: "💰", title: "₹3.5L/Year", sub: "Affordable fees, no hidden costs" },
  { icon: "📋", title: "NEXT Aligned", sub: "Curriculum built for NEXT success" },
];

export default function AdmissionServices() {
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "#f5f5f5", display: "flex", flexDirection: "column", fontFamily: "'DM Sans', sans-serif", color: "#111" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600&display=swap');
        .serif { font-family: 'Playfair Display', Georgia, serif; }






        /* ── HERO ── */
        .hero-bg {
          background: #CC1B1B;
          position: relative;
          overflow: hidden;
        }
        .hero-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 50% 80% at 0% 100%, rgba(0,0,0,0.25) 0%, transparent 60%),
            radial-gradient(ellipse 40% 60% at 100% 0%, rgba(245,197,24,0.18) 0%, transparent 55%);
          pointer-events: none;
        }
        .hero-grid-pattern {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px);
          background-size: 44px 44px;
          pointer-events: none;
        }

        /* ── STAT CARDS ── */
        .stat-card {
          border: 1px solid rgba(255,255,255,0.25);
          background: rgba(255,255,255,0.12);
          border-radius: 12px;
          padding: 1.25rem 1.5rem;
          text-align: center;
          transition: border-color 0.2s, background 0.2s;
        }
        .stat-card:hover {
          border-color: #F5C518;
          background: rgba(245,197,24,0.12);
        }

        /* ── WHY STRIP ── */
        .why-strip {
          background: #fff;
          border-bottom: 3px solid #F5C518;
          padding: 2rem 1.5rem;
        }
        .why-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 1rem;
          max-width: 900px;
          margin: 0 auto;
        }
        .why-card {
          background: #fff;
          border: 1.5px solid #e5e5e5;
          border-radius: 12px;
          padding: 1.25rem;
          text-align: center;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .why-card:hover {
          border-color: #CC1B1B;
          box-shadow: 0 4px 16px rgba(204,27,27,0.10);
        }

        /* ── SERVICE CARDS ── */
        .service-card {
          background: #fff;
          border: 1.5px solid #e5e5e5;
          border-radius: 16px;
          padding: 2rem;
          position: relative;
          overflow: hidden;
          transition: box-shadow 0.25s, border-color 0.25s, transform 0.25s;
        }
        .service-card::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #CC1B1B, #F5C518);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }
        .service-card:hover {
          box-shadow: 0 12px 36px rgba(204,27,27,0.12);
          border-color: rgba(204,27,27,0.25);
          transform: translateY(-3px);
        }
        .service-card:hover::after { transform: scaleX(1); }

        .step-num {
          font-family: 'Playfair Display', serif;
          font-size: 3.75rem;
          font-weight: 900;
          color: rgba(204,27,27,0.07);
          position: absolute;
          top: 0.75rem;
          right: 1.25rem;
          line-height: 1;
          user-select: none;
          transition: color 0.25s;
        }
        .service-card:hover .step-num { color: rgba(204,27,27,0.14); }

        .icon-box {
          width: 50px; height: 50px;
          border-radius: 10px;
          background: rgba(204,27,27,0.07);
          border: 1.5px solid rgba(204,27,27,0.18);
          display: flex; align-items: center; justify-content: center;
          color: #CC1B1B;
          margin-bottom: 1.25rem;
          transition: background 0.25s, border-color 0.25s, color 0.25s;
          flex-shrink: 0;
        }
        .service-card:hover .icon-box {
          background: #CC1B1B;
          border-color: #CC1B1B;
          color: #fff;
        }
        .icon-box svg { width: 22px; height: 22px; }

        /* ── PILLS ── */
        .pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: #f2f2f2;
          border: 1px solid #e0e0e0;
          border-radius: 100px;
          padding: 3px 10px;
          font-size: 11px;
          font-weight: 500;
          color: #555;
          white-space: nowrap;
        }
        .pill::before {
          content: '';
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #CC1B1B;
          flex-shrink: 0;
        }

        /* ── DIVIDER ── */
        .gold-bar {
          width: 48px; height: 3px;
          background: #F5C518;
          border-radius: 2px;
          margin: 0.75rem auto 0;
        }

        /* ── CTA SECTION ── */
        .cta-wrap {
          background: #CC1B1B;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
        }
        .cta-wrap::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 55% 90% at 100% 50%, rgba(245,197,24,0.18) 0%, transparent 60%),
            radial-gradient(ellipse 40% 60% at 0% 100%, rgba(0,0,0,0.2) 0%, transparent 55%);
          pointer-events: none;
        }

        /* ── BUTTONS ── */
        .btn-gold {
          display: inline-flex; align-items: center; justify-content: center;
          padding: 0.875rem 2rem;
          background: #F5C518;
          color: #111;
          font-weight: 700;
          font-size: 0.9375rem;
          border-radius: 10px;
          text-decoration: none;
          transition: background 0.2s, transform 0.15s;
          border: none;
          cursor: pointer;
        }
        .btn-gold:hover { background: #e0b315; transform: translateY(-1px); }

        .btn-wht {
          display: inline-flex; align-items: center; justify-content: center;
          padding: 0.875rem 2rem;
          background: rgba(255,255,255,0.15);
          color: #fff;
          font-weight: 600;
          font-size: 0.9375rem;
          border-radius: 10px;
          text-decoration: none;
          border: 1.5px solid rgba(255,255,255,0.4);
          transition: background 0.2s, border-color 0.2s;
        }
        .btn-wht:hover { background: rgba(255,255,255,0.25); border-color: rgba(255,255,255,0.7); }

        /* ── SERVICE BADGE ── */
        .badge-gold {
          display: inline-flex; align-items: center; gap: 6px;
          background: #F5C518;
          color: #111;
          border-radius: 100px;
          padding: 5px 16px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        /* ── SERVICES BG SECTION ── */
        .services-section {
          background: #f5f5f5;
          padding: 5rem 1.5rem;
        }
      `}</style>

      <Header />





      {/* Hero — image only */}
<section style={{ width: "100%", overflow: "hidden" }}>
  <img
    src={Admission}
    alt="Indian doctors"
    style={{
      width: "100%",
      height: "100vh",        // fits exactly one screen height
      display: "block",
      objectFit: "cover",
      objectPosition: "center top",
      marginTop: "-60px",       // shifts up to keep faces visible
    }}
    loading="eager"
  />
</section>

{/* Content — below the hero */}
<div
  style={{
    maxWidth: "1200px",
    width: "100%",
    margin: "0 auto",
    padding: "3rem clamp(1.5rem, 5vw, 4rem)",
    textAlign: "center",        // centers all text
    display: "flex",
    flexDirection: "column",
    alignItems: "center",       // centers block elements
  }}
>
  {/* Badge */}
  <div style={{
    display: "inline-block",
    padding: "5px 16px",
    borderRadius: "999px",
    border: "1px solid rgba(204,27,27,0.3)",
    background: "rgba(204,27,27,0.07)",
    color: "#CC1B1B",
    fontSize: "0.7rem",
    fontWeight: 700,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    marginBottom: "1.2rem",
  }}>
    Our Services
  </div>

  {/* Heading */}
  <h1 style={{
    fontFamily: "'Playfair Display', serif",
    color: "#111",
    fontSize: "clamp(1.9rem, 4vw, 3rem)",
    fontWeight: 900,
    lineHeight: 1.15,
    marginBottom: "1rem",
  }}>
    End-to-End{" "}
    <span style={{ color: "#CC1B1B" }}>MBBS Admission</span>
    <br />
    Support for Indian Students
  </h1>

  {/* Description */}
  <p style={{
    color: "#444",
    fontSize: "clamp(0.88rem, 1.4vw, 1rem)",
    lineHeight: 1.8,
    marginBottom: "2rem",
    maxWidth: "600px",
  }}>
    From selecting the right NMC-recognised university in Vietnam to
    settling you in on campus — comprehensive, transparent, and
    personalised guidance at every stage.
  </p>

  {/* Stats */}
  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "3rem", justifyContent: "center" }}>
    {stats.map((s) => (
      <div key={s.label} style={{
        textAlign: "center",
        padding: "12px 18px",
        borderRadius: "10px",
        border: "1px solid #e5e5e5",
        background: "#fafafa",
        minWidth: "110px",
        marginBottom: "-40px",
      }}>
        <div style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "1.65rem",
          fontWeight: 900,
          color: "#CC1B1B",
          lineHeight: 1,
        }}>{s.value}</div>
        <div style={{
          fontSize: "0.62rem",
          color: "#666",
          marginTop: "5px",
          fontWeight: 600,
          letterSpacing: "0.07em",
          textTransform: "uppercase",
        }}>{s.label}</div>
      </div>
    ))}
  </div>
</div>




  {/*   <section style={{ position: "relative", width: "100%", overflow: "hidden" }}>
  {/* Full image — no crop, object-position: top shows faces 
 <img
  src="https://img.freepik.com/premium-photo/indian-doctors-smiling-front-indian-flag-indian-independence-day-indian-republic-day_244157-6762.jpg?w=1400"
  alt="Indian doctors"
  style={{
    width: "100%",
    height: "100vh",        // fits exactly one screen height
    display: "block",
    objectFit: "cover",     // fills without stretching
    objectPosition: "center top",  // keeps faces visible
  }}
  loading="eager"
/>

  {/* Overlay 
  <div style={{
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to right, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.50) 50%, rgba(0,0,0,0.10) 100%)",
  }} />

  {/* Content
  <div style={{
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    padding: "0 clamp(1.5rem, 6vw, 4rem)",
  }}>
    <div style={{ maxWidth: "620px" }}>

      {/* Badge 
      <div style={{
        display: "inline-block",
        padding: "5px 16px",
        borderRadius: "999px",
        border: "1px solid rgba(245,197,24,0.6)",
        background: "rgba(245,197,24,0.12)",
        color: "#F5C518",
        fontSize: "0.7rem",
        fontWeight: 600,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        marginBottom: "1.2rem",
      }}>
        Our Services
      </div>

      {/* Heading 
      <h1 style={{
        fontFamily: "'Playfair Display', serif",
        color: "#fff",
        fontSize: "clamp(1.9rem, 4vw, 3rem)",
        fontWeight: 900,
        lineHeight: 1.15,
        marginBottom: "1rem",
        textShadow: "0 2px 16px rgba(0,0,0,0.5)",
      }}>
        End-to-End{" "}
        <span style={{ color: "#F5C518" }}>MBBS Admission</span>
        <br />
        Support for Indian Students
      </h1>

      {/* Description 
      <p style={{
        color: "rgba(255,255,255,0.85)",
        fontSize: "clamp(0.88rem, 1.4vw, 1rem)",
        lineHeight: 1.8,
        marginBottom: "2rem",
        maxWidth: "480px",
      }}>
        From selecting the right NMC-recognised university in Vietnam to
        settling you in on campus — comprehensive, transparent, and
        personalised guidance at every stage.
      </p>

      {/* Stats 
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {stats.map((s) => (
          <div key={s.label} style={{
            textAlign: "center",
            padding: "12px 18px",
            borderRadius: "10px",
            border: "1px solid rgba(255,255,255,0.15)",
            background: "rgba(0,0,0,0.30)",
            minWidth: "110px",
          }}>
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.65rem",
              fontWeight: 900,
              color: "#F5C518",
              lineHeight: 1,
            }}>{s.value}</div>
            <div style={{
              fontSize: "0.62rem",
              color: "rgba(255,255,255,0.78)",
              marginTop: "5px",
              fontWeight: 600,
              letterSpacing: "0.07em",
              textTransform: "uppercase",
            }}>{s.label}</div>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>  */}



      

      {/* ─── SERVICES GRID ─── */}
      <main className="services-section">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#CC1B1B", marginBottom: "0.5rem" }}>
              What We Offer
            </p>
            <h2 className="serif" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 900, color: "#CC1B1B", marginBottom: "0.5rem", lineHeight: 1.2 }}>
              9 Steps to Your MBBS in Vietnam
            </h2>
            <div className="gold-bar" />
            <p style={{ color: "#666", fontSize: "1rem", maxWidth: "500px", margin: "1rem auto 0", lineHeight: 1.75 }}>
              A structured, proven process — from your first enquiry to your first day on campus.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
            {services.map((service) => (
              <div
                key={service.id}
                className="service-card"
                onMouseEnter={() => setActiveCard(service.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <span className="step-num">{service.step}</span>
                <div className="icon-box">{service.icon}</div>
                <h3 className="serif" style={{ fontSize: "1.125rem", fontWeight: 700, color: "#111", marginBottom: "0.625rem", lineHeight: 1.35, paddingRight: "2.5rem" }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "#555", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                  {service.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {service.highlights.map((h) => (
                    <span key={h} className="pill">{h}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── CTA ─── 
        <div style={{ maxWidth: "1000px", margin: "5rem auto 0" }}>
          <div className="cta-wrap" style={{ padding: "3.5rem 3rem" }}>
            <div style={{ position: "relative", zIndex: 1 }}>
              <div className="badge-gold" style={{ marginBottom: "1.25rem" }}>Take the First Step</div>
              <h2
                className="serif"
                style={{ color: "#fff", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 900, lineHeight: 1.25, marginBottom: "1rem" }}
              >
                Ready to Begin Your{" "}
                <span style={{ color: "#F5C518" }}>MBBS Journey</span>?
              </h2>
              <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "1rem", maxWidth: "540px", lineHeight: 1.8, marginBottom: "2rem" }}>
                Speak to our counsellors today for a free eligibility assessment and personalised roadmap. Thousands of Indian students have made Vietnam their medical education destination — your story starts here.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem" }}>
                <a href="/contact" className="btn-gold">
                  Get Free Counselling
                  <svg style={{ marginLeft: "8px", width: "15px", height: "15px" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a href="https://wa.me/919003420057" target="_blank" rel="noreferrer" className="btn-wht">
                  <svg style={{ marginRight: "8px", width: "17px", height: "17px" }} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5 -.669 -.51 -.173 -.008 -.371 -.01 -.57 -.01 -.198 0 -.52 .074 -.792 .372 -.272 .297 -1.04 1.016 -1.04 2.479 0 1.462 1.065 2.875 1.2₁₃ 3.0７₄ .₁₄₉ .₁₉₈ ₂₀₉₆ ₃.₂ ₅.₀₇₇ ₄.₄₈₇ .₇₀₉ .₃₀₆ ₁.₂₆₂ .₄₈₉ ₁.₆⁹⁴ .⁶²⁵ .⁷¹² .²²⁷ ₁.³⁶ .¹⁹⁵ ₁.⁸⁷¹ .¹¹⁸ .⁵⁷¹ -." />
                  </svg>
                  WhatsApp a Counsellor
                </a>
              </div>
            </div>
          </div>
        </div> */}




        
      </main>


      
     <CTA />

      <Footer />
    </div>
  );
}