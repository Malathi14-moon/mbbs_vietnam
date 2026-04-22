import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import EnquiryModal from "../components/EnquiryModal";
import NCTUStudent from "../assets/NCTU-Student.webp";
import NamBanner from "../assets/nam-banner.webp";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }


  body {
    min-height: max(884px, 100dvh);
    background: #f8f9fa;
    font-family: 'Inter', sans-serif;
    color: #191c1d;
  }

  .material-symbols-outlined {
    font-family: 'Material Symbols Outlined';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    display: inline-block;
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
  }

  .font-headline { font-family: 'Plus Jakarta Sans', sans-serif; }

  .glass-nav {
    background: rgba(255,255,255,0.7);
    backdrop-filter: blur(12px);
  }






`;





const Icon = ({ name, style }) => (
  <span className="material-symbols-outlined" style={style}>{name}</span>


  
);

export default function NCTUMedical() {
  return (
    <>
      <Header />
      <style>{styles}</style>
      <div style={{ fontFamily: "'Inter', sans-serif", background: "#f8f9fa", color: "#191c1d" }}>
        
        <main style={{ paddingTop: 0, paddingBottom: 0 }}>
          <HeroSection />
          <UniversityFacts />
          <TeachingHospital />
          <AcademicPrograms />
          <StudentLifeCost />
          <DisclaimerSection />
          <CTASection />
        </main>
      
        
        
      </div>
    
      <Footer />
    </>
  );
}










  {/* function HeroSection() {
  return (
    <section style={{ position: "relative", height: 751, display: "flex", alignItems: "center", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <img
          alt="Medical Student in Lab"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4nqhhTgx7QYtPSw1MqdBSWgE6_SXeAingI3zasfwVDrDON9bfLMdOMtIvq-RWGbJnlnS2WX0IBuvhdvRVDTR1w_lI0iZEOyuYrAhbmG9xAojpJeLpc_y77AUrG7Er_5OscrKmekWrNWs86r0PCA-eoy3dBmBWRQ6SXMptzsix8eIKJZfqOrgoE1uPYtvlktJrv6jSbMEGpGOC8RPF32LtwgWxm7VnGfuP43M9tEQam6V9GtRkIU-ZM_qRJr_ceSDxvAErqB0vy9s"
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to right, #f8f9fa, rgba(248,249,250,0.8), transparent)"
        }} />
      </div>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 10 }}>
        <div style={{ maxWidth: 672 }}>
          <span style={{
            background: "rgba(41,84,77,0.1)", color: "#29544d",
            fontWeight: 700, letterSpacing: "0.12em", fontSize: 12,
            textTransform: "uppercase", padding: "8px 16px", borderRadius: 9999,
            marginBottom: 24, display: "inline-block",
          }}>Study MBBS in Vietnam</span>
          <h1 className="font-headline" style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 800,
            color: "#9e001f", marginBottom: 24, lineHeight: 1.1,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}>
            Your Medical Career at NCTU
          </h1>
          <p style={{ fontSize: 18, color: "#5c403f", marginBottom: 32, lineHeight: 1.7, maxWidth: 512 }}>
            Step into a world-class medical ecosystem. Combining academic rigor with the clinical powerhouse of Nam Can Tho University Hospital.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            <button style={{
              background: "#c8102e", color: "#fff",
              padding: "16px 32px", borderRadius: 12, fontWeight: 700,
              border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 8,
              boxShadow: "0 10px 30px rgba(158,0,31,0.2)", fontSize: 15,
            }}>
              Apply for Admission <Icon name="trending_flat" style={{ color: "#fff", fontSize: 22 }} />
            </button>
            <button style={{
              background: "#fff", border: "2px solid #e5bdbb", color: "#9e001f",
              padding: "16px 32px", borderRadius: 12, fontWeight: 700,
              cursor: "pointer", fontSize: 15,
            }}>
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} */}









function HeroSection() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>

    <section style={{ position: "relative", height: 751, display: "flex", alignItems: "center", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <img
          alt="Medical Student in Lab"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={NamBanner}
        />
        {/* Dark overlay instead of light gradient */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to right, rgba(0,0,0,0.20) 0%, rgba(0,0,0,0.20) 60%, rgba(0,0,0,0.15) 100%)"
        }} />  
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px", position: "relative", zIndex: 10, width: "100%" }}>
        <div style={{ maxWidth: 640 }}>

          {/* Badge */}
          <span style={{
            background: "#fecc00", color: "#6e5700",
            fontWeight: 700, letterSpacing: "0.12em", fontSize: 12,
            textTransform: "uppercase", padding: "8px 16px", borderRadius: 9999,
            marginBottom: 24, display: "inline-block",
          }}>Study MBBS in Vietnam</span>

          {/* Heading — white on dark bg */}
          <h1 style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800,
            color: "#fff", marginBottom: 24, lineHeight: 1.1,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}>
            Your Medical Career at NCTU
          </h1>

          {/* Subtext with left border like screenshot */}
          <div style={{ borderLeft: "4px solid #c8102e", paddingLeft: 16, marginBottom: 36 }}>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.85)", lineHeight: 1.7, margin: 0 }}>
              Step into a world-class medical ecosystem. Combining academic rigor with the clinical powerhouse of Nam Can Tho University Hospital.
            </p>
          </div>

          {/* Buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            <button type="button" onClick={() => setIsModalOpen(true)} style={{
              background: "#c8102e", color: "#fff",
              padding: "16px 32px", borderRadius: 12, fontWeight: 700,
              border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 8,
              fontSize: 15,
            }}>
              Apply for Admission <Icon name="trending_flat" style={{ color: "#fff", fontSize: 22 }} />
            </button>
            <button type="button" onClick={() => setIsModalOpen(true)} style={{
              background: "rgba(255,255,255,0.12)",
              backdropFilter: "blur(8px)",
              border: "2px solid rgba(255,255,255,0.4)",
              color: "#fff",
              padding: "16px 32px", borderRadius: 12, fontWeight: 700,
              cursor: "pointer", fontSize: 15,
            }}>
              Download Brochure
            </button>
          </div>

        </div>
      </div>
    </section>


    <EnquiryModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />

    </>
  );
}




function UniversityFacts() {
  return (


    <section style={{ padding: "80px 0", background: "#f8fafc" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 16,
          }}
        >
          {/* Established */}
          <div
            style={{
              gridColumn: "span 2",
              background: "#fff",
              padding: 32,
              borderRadius: 16,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              border: "1px solid #e2e8f0",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
            }}
          >
            <div>
              <div
                style={{
                  color: "#0369a1",
                  fontSize: 40,
                  display: "block",
                  marginBottom: 16,
                }}
              >
                <Icon name="verified" />
              </div>
              <h3
                className="font-headline"
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  marginBottom: 8,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: "#0f172a",
                }}
              >
                Established 2013
              </h3>
              <p style={{ color: "#64748b", lineHeight: 1.6, textAlign: "justify" }}>
                A decade of excellence in higher education, producing Vietnam&apos;s next generation of healthcare leaders.
              </p>
            </div>
          </div>

          {/* Can Tho */}
          <div
            style={{
              background: "#e0f2fe",
              padding: 32,
              borderRadius: 16,
              color: "#0c4a6e",
              border: "1px solid #bae6fd",
            }}
          >
            <div style={{ fontSize: 40, display: "block", marginBottom: 16 }}>
              <Icon name="location_on" />
            </div>
            <h3
              className="font-headline"
              style={{
                fontSize: 22,
                fontWeight: 700,
                marginBottom: 8,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: "#0c4a6e",
              }}
            >
              Can Tho City
            </h3>
            <p style={{ fontSize: 14, lineHeight: 1.6, textAlign: "justify" }}>
              The heart of the Mekong Delta, offering a serene yet vibrant academic environment.
            </p>
          </div>

          {/* Private */}
          <div
            style={{
              background: "#f0f4f8",
              padding: 32,
              borderRadius: 16,
              color: "#1e293b",
              border: "1px solid #cbd5e1",
            }}
          >
            <div style={{ fontSize: 40, display: "block", marginBottom: 16, color: "#0f172a" }}>
              <Icon name="account_balance" />
            </div>
            <h3
              className="font-headline"
              style={{
                fontSize: 22,
                fontWeight: 700,
                marginBottom: 8,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: "#0f172a",
              }}
            >
              Private
            </h3>
            <p style={{ fontSize: 14, lineHeight: 1.6, textAlign: "justify" }}>
              Independently governed with massive infrastructure investment and international standards.
            </p>
          </div>
        </div>
      </div>
    </section>

    
  );
}

function TeachingHospital() {
  return (
    <section style={{ padding: "96px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 64 }}>
          {/* Image */}
          <div style={{ flex: "1 1 400px", position: "relative" }}>
           {/* <div style={{
              position: "absolute", top: -24, left: -24, width: 128, height: 128,
              background: "#fecc00", borderRadius: 24, zIndex: 0,
            }} /> */}
            <img
              alt="NCTU Hospital"
              style={{ borderRadius: 40, boxShadow: "0 25px 60px rgba(0,0,0,0.15)", width: "100%", height: 500, objectFit: "cover", position: "relative", zIndex: 1 }}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJDqPc_Pq47y990U_7TxqXmRZS4M5jXfF7q6aaq41K5eR1_on1dUMs_hIJLMooqDiGujv1n8E4AvlhrtZffZPGPD1wxEsULEEZZu3CmL_gvUDUxKGKIXmY5_lDlVLCH7fzfL2-uqTk1fUAH4xIskID3_P3d6zD3bp97g7d5_0DsE1e46fIwrXAg4VF6jKjz_wXVTJEeN0LITRwIFmXjKH0iNms2qCitGaS-kGqXdmC5GV2KvlcNJNZHRp6udH-FA1_UuWzRp0XJ9w"
            />
            <div style={{
              position: "absolute", bottom: -32, right: -32,
              background: "#fff", padding: 24, borderRadius: 24,
              boxShadow: "0 20px 40px rgba(0,0,0,0.12)", maxWidth: 280, zIndex: 2,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                <Icon name="vital_signs" style={{ color: "#9e001f", fontSize: 22 }} />
                <span style={{ fontWeight: 700, fontSize: 17 }}>Direct Clinical Access</span>
              </div>
              <p style={{ fontSize: 12, color: "#5c403f" }}>Students start clinical observation in one of the region's most advanced tertiary care centers.</p>
            </div>
          </div>
          {/* Text */}
          <div style={{ flex: "1 1 400px" }}>
            <h2 className="font-headline" style={{
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800,
              color: "#191c1d", marginBottom: 24, lineHeight: 1.3,
              fontFamily: "'Plus Jakarta Sans', sans-serif", 
            }}>
              Nam Can Tho University Hospital: Your{" "}
              <span style={{ color: "#9e001f" }}>Clinical Advantage</span>
            </h2>
            <p style={{ fontSize: 18, color: "#5c403f", marginBottom: 32, lineHeight: 1.7, textAlign: "justify" }}>
              Unlike traditional programs, NCTU integrates the university and hospital into one seamless campus. This ensures that every MBBS aspirant gets hands-on experience under the mentorship of senior consultants.
            </p>
            <ul style={{ listStyle: "none", marginBottom: 40 }}>
              {[
                "800+ Bed Multi-specialty Facility",
                "Advanced Imaging & Diagnostic Center",
                "24/7 Emergency & Critical Care Training",
              ].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
                  <Icon name="check_circle" style={{ color: "#9e001f", fontSize: 22, fontVariationSettings: "'FILL' 1" }} />
                  <span style={{ fontWeight: 500 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const programs = [
  {
    title: "General Medicine",
    desc: "6-year comprehensive MBBS curriculum with integrated clinical rotations.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2gHQ4hY2sP_QW1sxkexg4wPfchuKkCo-loY_tqXiDBQz3Gsqi02mNih_eg4hCpU8KGZin1c1iDItg2sYCyyRCfNKcX_R3EbHQ6Z36s10KUMCSk1TUmJIuZkrXwxjJcgh9z4N5h_gW8KjZxTQHE8Sa4bdUjttPJ-5xKEy6lMaIOqcfC_ZyJzD_BoQzK1pTriBVkbUu46vCRfhQoflBpjuZ74i63fx-Rmz5TSgPiPadPdywFtAUQcZcBcjGLcTwCsuqQlkwlvNG6P0",
  },
  {
    title: "Pharmacy",
    desc: "Advanced pharmaceutical sciences focusing on research and clinical pharmacology.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-V-u2YuK4SfZiIYm_vHmUVjq-DIfs1enhg6i8hIqL4soEyUIGDw2z1ImBVVzX7Wd1rnz4XPzrjkCKEw-KMaLOMSHz919JHPSJftMmhXh-Hvum3Vm3yf2VY_1aLFDfHzXl-I76zdH6RlVdhS6FTGl_Ci14o5rdFnPPxvvU6BXUzQWGuWlONi8T4oz6u7Zw22rCVZcVyp5HdoKP28MRFGa2DvARvN7eRFpf9Tb_sImy25YegXBBco-PyxiRmUMrLyN5xJVF7vFRfSU",
  },
  {
    title: "Nursing",
    desc: "Focusing on compassionate care, patient safety, and community health management.",
    img: "https://tse3.mm.bing.net/th/id/OIP.WlvgjKBIQ1DILE2IxzNXHQHaFk?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
];

function AcademicPrograms() {
  const [hovered, setHovered] = useState(null);
  return (
    <section style={{ padding: "80px 0", background: "#f3f4f5" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", textAlign: "center", marginBottom: 64 }}>
        <h2 className="font-headline" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800, marginBottom: 16, fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#CC1B1B" }}>
          World-Class Programs
        </h2>
        <p style={{ color: "#5c403f", maxWidth: 480, margin: "0 auto" }}>Diverse medical streams designed to meet global healthcare demands.</p>
      </div>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32 }}>
        {programs.map((prog, i) => (
          <div
            key={prog.title}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              background: "#fff", padding: 8, borderRadius: 32,
              transform: hovered === i ? "translateY(-8px)" : "translateY(0)",
              transition: "transform 0.3s ease",
              cursor: "pointer",
            }}
          >
            <img
              alt={prog.title}
              style={{ width: "100%", height: 192, objectFit: "cover", borderRadius: 28, marginBottom: 24 }}
              src={prog.img}
            />
            <div style={{ padding: "0 24px 32px" }}>
              <h3 className="font-headline" style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{prog.title}</h3>
              <p style={{ color: "#5c403f", fontSize: 14, marginBottom: 24 }}>{prog.desc}</p>
              <a
  href="https://nctu.edu.vn/"
  target="_blank"
  rel="noopener noreferrer"
  style={{ textDecoration: "none" }}
>
  <button
    style={{
      width: "100%",
      padding: "12px 0",
      borderRadius: 12,
      border: "1.5px solid #e5bdbb",
      color: hovered === i ? "#fff" : "#9e001f",
      background: hovered === i ? "#9e001f" : "transparent",
      fontWeight: 700,
      cursor: "pointer",
      transition: "all 0.3s ease",
      fontSize: 14,
    }}
  >
    Course Details
  </button>
</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

 function StudentLifeCost() {
  return (
    <section style={{ padding: "96px 0", backgroundColor: "#f8f9fb" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            background: "#ffffff",
            borderRadius: 24,
            padding: "64px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 48,
            overflow: "hidden",
            position: "relative",
            border: "1px solid #e5e7eb",
            boxShadow: "0 12px 40px rgba(0,0,0,0.06)",
          }}
        >
          {/* Content Section */}
          <div style={{ flex: "1 1 420px", position: "relative", zIndex: 1 }}>
            <span
              style={{
                display: "inline-block",
                background: "#eef2ff",
                color: "#171b74",
                fontSize: 13,
                fontWeight: 700,
                padding: "8px 14px",
                borderRadius: 999,
                marginBottom: 20,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              Student Lifestyle
            </span>

            <h2
              style={{
                fontSize: "clamp(2rem, 3vw, 2.7rem)",
                fontWeight: 800,
                marginBottom: 24,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: "#111827",
                lineHeight: 1.2,
              }}
            >
              Quality Education,{" "}
              <span style={{ color: "#CC1B1B" }}>Affordable Living</span>
            </h2>

            <p
              style={{
                fontSize: 16,
                color: "#4b5563",
                marginBottom: 40,
                lineHeight: 1.8,
                fontWeight: 400,
                maxWidth: 520,
              }}
            >
              Can Tho offers a significantly lower cost of living compared to Ho
              Chi Minh City or Hanoi. Students enjoy a comfortable lifestyle
              with affordable accommodation, fresh local food, and a peaceful
              academic environment.
            </p>

            {/* Stats Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 20,
              }}
            >
              {[
                { value: "40% Less", label: "Living Costs than HCM" },
                { value: "$200", label: "Avg. Monthly Expense" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    background: "#f9fafb",
                    border: "1px solid #e5e7eb",
                    padding: 24,
                    borderRadius: 18,
                    transition: "0.3s ease",
                  }}
                >
                  <span
                    style={{
                      fontSize: 28,
                      fontWeight: 800,
                      display: "block",
                      marginBottom: 8,
                      color: "#171b74",
                    }}
                  >
                    {stat.value}
                  </span>

                  <span
                    style={{
                      fontSize: 12,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "#6b7280",
                      fontWeight: 600,
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div
            style={{
              flex: "1 1 320px",
              position: "relative",
              height: 400,
              borderRadius: 22,
              overflow: "hidden",
              boxShadow: "0 16px 35px rgba(0,0,0,0.08)",
            }}
          >
            <img
              alt="Student Life Can Tho"
              src={NCTUStudent}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "140%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function DisclaimerSection() {
  return (
    <section style={{ padding: "48px 0", background: "#f8f9fa" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{
          border: "2px dashed #e5bdbb", borderRadius: 24, padding: 32, background: "#fff",
        }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
            <Icon name="policy" style={{ color: "#735c00", fontSize: 40 }} />
            <div>
              <h3 className="font-headline" style={{ fontSize: 20, fontWeight: 700, marginBottom: 16, fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#CC1B1B" }}>
                International Recognition & Transparency
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24, marginBottom: 24 }}>
                {[
                  { icon: "verified_user", label: "NMC Recognised Programs" },
                  { icon: "public", label: "Listed in WHO Directory" },
                  { icon: "language", label: "English Medium Instruction" },
                ].map((item) => (
                  <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <Icon name={item.icon} style={{ color: "#9e001f", fontSize: 22 }} />
                    <span style={{ fontSize: 14, fontWeight: 600 }}>{item.label}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 12, color: "#5c403f", lineHeight: 1.7 }}>
                Disclaimer: Admissions are subject to eligibility criteria including NEET scores for Indian students and university entrance examinations. All clinical training is conducted at NCTU Hospital under the guidance of certified practitioners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



function CTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section
        style={{
          width: "100%",
          margin: 0,
          padding: "0",
          background:
            "linear-gradient(135deg, #fff8f8 0%, #ffffff 45%, #fef2f2 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative Shapes */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 260,
            height: 260,
            borderRadius: "50%",
            background: "rgba(204,27,27,0.06)",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: -100,
            left: -60,
            width: 220,
            height: 220,
            borderRadius: "50%",
            background: "rgba(23,27,116,0.05)",
          }}
        />

        {/* Full Width Content */}
        <div
          style={{
            width: "100%",
            padding: "40px 24px",
            textAlign: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* Badge */}
          <span
            style={{
              display: "inline-block",
              padding: "10px 18px",
              borderRadius: 999,
              background: "#fff1f2",
              color: "#cc1b1b",
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            2026 Admissions Open
          </span>

          {/* Heading */}
          <h2
            style={{
              fontSize: "clamp(2rem,4vw,3.3rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              color: "#111827",
              marginBottom: 14,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Begin Your{" "}
            <span style={{ color: "#CC1B1B" }}>Medical Journey</span>{" "}
            at NCTU
          </h2>

          {/* Text */}
          <p
            style={{
              maxWidth: 700,
              margin: "0 auto 28px",
              fontSize: 17,
              lineHeight: 1.8,
              color: "#4b5563",
            }}
          >
            Secure your MBBS seat in Vietnam with expert guidance on
            admission, documentation, visa processing, and travel support.
          </p>

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 16,
              marginBottom: 32,
            }}
          >
            <button
              onClick={() => setIsModalOpen(true)}
              style={{
                background: "#CC1B1B",
                color: "#fff",
                padding: "16px 34px",
                borderRadius: 14,
                border: "none",
                fontWeight: 700,
                fontSize: 15,
                cursor: "pointer",
              }}
            >
              Apply Now
            </button>

            <a
              href="https://nctu.edu.vn/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <button
                style={{
                  background: "#fff",
                  color: "#171b74",
                  padding: "16px 34px",
                  borderRadius: 14,
                  border: "1.5px solid #dbeafe",
                  fontWeight: 700,
                  fontSize: 15,
                  cursor: "pointer",
                }}
              >
                Visit University
              </button>
            </a>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 18,
              maxWidth: 900,
              margin: "0 auto",
            }}
          >
            {[
              { value: "500+", label: "Students Guided" },
              { value: "100%", label: "Visa Support" },
              { value: "₹0", label: "Counselling Fee" },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  background: "#f9fafb",
                  padding: 20,
                  borderRadius: 18,
                  border: "1px solid #e5e7eb",
                }}
              >
                <div
                  style={{
                    fontSize: 28,
                    fontWeight: 800,
                    color: "#171b74",
                    marginBottom: 6,
                  }}
                >
                  {item.value}
                </div>

                <div
                  style={{
                    fontSize: 13,
                    color: "#6b7280",
                    fontWeight: 600,
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}