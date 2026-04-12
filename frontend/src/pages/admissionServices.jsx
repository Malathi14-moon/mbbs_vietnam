import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

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

export default function AdmissionServices() {
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col font-sans text-gray-900">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600&display=swap');

        .page-root { font-family: 'DM Sans', sans-serif; }
        .serif { font-family: 'Playfair Display', Georgia, serif; }

        .hero-bg {
          background: #0a0a0a;
          position: relative;
          overflow: hidden;
        }
        .hero-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(ellipse 60% 80% at 15% 50%, rgba(204,27,27,0.18) 0%, transparent 70%),
            radial-gradient(ellipse 50% 70% at 85% 30%, rgba(245,197,24,0.10) 0%, transparent 60%);
          pointer-events: none;
        }
        .hero-grid-pattern {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }

        .stat-card {
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(4px);
          border-radius: 12px;
          padding: 1.25rem 1.5rem;
          text-align: center;
          transition: border-color 0.2s, background 0.2s;
        }
        .stat-card:hover { border-color: rgba(204,27,27,0.5); background: rgba(204,27,27,0.06); }

        .service-card {
          background: #fff;
          border: 1px solid #e5e5e5;
          border-radius: 16px;
          padding: 2rem;
          position: relative;
          overflow: hidden;
          transition: box-shadow 0.25s, border-color 0.25s, transform 0.25s;
          cursor: default;
        }
        .service-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #CC1B1B, #F5C518);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
          border-radius: 16px 16px 0 0;
        }
        .service-card:hover {
          box-shadow: 0 12px 40px rgba(204,27,27,0.10), 0 2px 8px rgba(0,0,0,0.05);
          border-color: #ddd;
          transform: translateY(-3px);
        }
        .service-card:hover::before { transform: scaleX(1); }

        .step-badge {
          font-family: 'Playfair Display', serif;
          font-size: 3.5rem;
          font-weight: 900;
          color: rgba(204,27,27,0.07);
          position: absolute;
          top: 1rem;
          right: 1.25rem;
          line-height: 1;
          user-select: none;
          transition: color 0.25s;
        }
        .service-card:hover .step-badge { color: rgba(204,27,27,0.12); }

        .icon-wrap {
          width: 52px; height: 52px;
          border-radius: 12px;
          background: rgba(204,27,27,0.06);
          border: 1px solid rgba(204,27,27,0.2);
          display: flex; align-items: center; justify-content: center;
          color: #CC1B1B;
          margin-bottom: 1.25rem;
          transition: background 0.25s, border-color 0.25s;
          flex-shrink: 0;
        }
        .service-card:hover .icon-wrap {
          background: #CC1B1B;
          border-color: #CC1B1B;
          color: #fff;
        }
        .icon-wrap svg { width: 24px; height: 24px; }

        .highlight-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: #f0f0f0;
          border: 1px solid #e5e5e5;
          border-radius: 100px;
          padding: 3px 10px;
          font-size: 11.5px;
          font-weight: 500;
          color: #555555;
          white-space: nowrap;
        }
        .highlight-pill::before {
          content: '';
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #CC1B1B;
          flex-shrink: 0;
        }

        .section-divider {
          width: 48px; height: 3px;
          background: linear-gradient(90deg, #CC1B1B, #F5C518);
          border-radius: 2px;
          margin: 0.75rem auto 0;
        }

        .cta-section {
          background: #0a0a0a;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
        }
        .cta-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 70% 100% at 100% 50%, rgba(204,27,27,0.15) 0%, transparent 65%);
          pointer-events: none;
        }

        .btn-primary {
          display: inline-flex; align-items: center; justify-content: center;
          padding: 0.875rem 2rem;
          background: #CC1B1B;
          color: #fff;
          font-weight: 600;
          font-size: 0.9375rem;
          border-radius: 10px;
          text-decoration: none;
          transition: background 0.2s, transform 0.15s;
          border: none;
        }
        .btn-primary:hover { background: #b01616; transform: translateY(-1px); }

        .btn-outline {
          display: inline-flex; align-items: center; justify-content: center;
          padding: 0.875rem 2rem;
          background: transparent;
          color: #fff;
          font-weight: 600;
          font-size: 0.9375rem;
          border-radius: 10px;
          text-decoration: none;
          border: 1.5px solid rgba(255,255,255,0.25);
          transition: background 0.2s, border-color 0.2s;
        }
        .btn-outline:hover { background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.45); }

        .process-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(245,197,24,0.12);
          border: 1px solid rgba(245,197,24,0.25);
          border-radius: 100px;
          padding: 5px 14px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #F5C518;
        }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.25rem;
        }
        .why-card {
          background: #fff;
          border: 1px solid #e5e5e5;
          border-radius: 12px;
          padding: 1.5rem;
          text-align: center;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .why-card:hover {
          border-color: #CC1B1B;
          box-shadow: 0 4px 16px rgba(204,27,27,0.08);
        }
        .why-icon {
          font-size: 1.75rem;
          margin-bottom: 0.75rem;
        }
      `}</style>

      <div className="page-root">
        <Header />

        {/* ─── HERO ─── */}
        <section className="hero-bg py-20 px-4">
          <div className="hero-grid-pattern" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="process-badge mb-6 inline-flex">Our Services</div>

            <h1
              className="serif text-white mb-6 leading-tight"
              style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", fontWeight: 900 }}
            >
              End-to-End{" "}
              <span style={{ color: "#CC1B1B" }}>MBBS Admission</span>
              <br />
              Support for Indian Students
            </h1>

            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.0625rem", maxWidth: "620px", margin: "0 auto 2.5rem", lineHeight: 1.75 }}>
              From selecting the right NMC-recognised university in Vietnam to settling you in on campus — we provide comprehensive, transparent, and personalised guidance at every stage of your journey.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
              {stats.map((s) => (
                <div key={s.label} className="stat-card">
                  <div className="serif" style={{ fontSize: "1.875rem", fontWeight: 900, color: "#F5C518", lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.55)", marginTop: "4px", fontWeight: 500, letterSpacing: "0.02em" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── WHY CHOOSE US STRIP ─── */}
        <section style={{ background: "#fff", borderBottom: "1px solid #e5e5e5", padding: "2rem 1.5rem" }}>
          <div className="max-w-5xl mx-auto why-grid">
            {[
              { icon: "🎓", title: "NMC Compliant", sub: "All universities are NMC & WHO recognised" },
              { icon: "🇮🇳", title: "India-Focused", sub: "Indian faculty, food & support community" },
              { icon: "✈️", title: "~4–5 Hr Flight", sub: "Vietnam — the closest MBBS destination" },
              { icon: "💰", title: "₹3.5L/Year", sub: "Affordable fees with no hidden costs" },
              { icon: "📋", title: "NEXT Aligned", sub: "Curriculum designed for NEXT exam success" },
            ].map((item) => (
              <div key={item.title} className="why-card">
                <div className="why-icon">{item.icon}</div>
                <div style={{ fontWeight: 600, fontSize: "0.9rem", color: "#111111", marginBottom: "4px" }}>{item.title}</div>
                <div style={{ fontSize: "0.8rem", color: "#777", lineHeight: 1.5 }}>{item.sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── SERVICES GRID ─── */}
        <main style={{ background: "#f5f5f5", padding: "5rem 1.5rem" }}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#CC1B1B", marginBottom: "0.5rem" }}>
                What We Offer
              </p>
              <h2 className="serif" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 900, color: "#111", marginBottom: "0.75rem", lineHeight: 1.2 }}>
                9 Steps to Your MBBS in Vietnam
              </h2>
              <div className="section-divider" />
              <p style={{ color: "#777", fontSize: "1rem", maxWidth: "520px", margin: "1rem auto 0", lineHeight: 1.7 }}>
                Our structured process ensures nothing is missed — from your first enquiry to your first day on campus.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="service-card"
                  onMouseEnter={() => setActiveCard(service.id)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <span className="step-badge">{service.step}</span>

                  <div className="icon-wrap">{service.icon}</div>

                  <h3 className="serif" style={{ fontSize: "1.15rem", fontWeight: 700, color: "#111", marginBottom: "0.625rem", lineHeight: 1.35, paddingRight: "2rem" }}>
                    {service.title}
                  </h3>

                  <p style={{ fontSize: "0.875rem", color: "#555", lineHeight: 1.75, marginBottom: "1.25rem" }}>
                    {service.description}
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {service.highlights.map((h) => (
                      <span key={h} className="highlight-pill">{h}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ─── CTA ─── */}
          <div className="max-w-5xl mx-auto mt-20">
            <div className="cta-section p-10 sm:p-14">
              <div style={{ position: "relative", zIndex: 1 }}>
                <div className="process-badge mb-5 inline-flex">Take the First Step</div>
                <h2
                  className="serif text-white mb-4"
                  style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 900, lineHeight: 1.25 }}
                >
                  Ready to Begin Your <span style={{ color: "#CC1B1B" }}>MBBS Journey</span>?
                </h2>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1rem", maxWidth: "540px", lineHeight: 1.75, marginBottom: "2rem" }}>
                  Speak to our counsellors today for a free eligibility assessment and personalised roadmap. Thousands of Indian students have made Vietnam their medical education destination — your story starts here.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                  <a href="/contact" className="btn-primary">
                    Get Free Counselling
                    <svg style={{ marginLeft: "8px", width: "16px", height: "16px" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a
                    href="https://wa.me/919150430545"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline"
                  >
                    <svg style={{ marginRight: "8px", width: "17px", height: "17px" }} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp a Counsellor
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}