import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CTA from "../components/CTA_section";
import EnquiryModal from "../components/EnquiryModal";

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
        
        <main style={{ paddingTop: 0, paddingBottom: 96 }}>
          <HeroSection />
          <UniversityFacts />
          <TeachingHospital />
          <AcademicPrograms />
          <StudentLifeCost />
          <DisclaimerSection />
        </main>
      
        
        
      </div>
      <CTA />
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
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4nqhhTgx7QYtPSw1MqdBSWgE6_SXeAingI3zasfwVDrDON9bfLMdOMtIvq-RWGbJnlnS2WX0IBuvhdvRVDTR1w_lI0iZEOyuYrAhbmG9xAojpJeLpc_y77AUrG7Er_5OscrKmekWrNWs86r0PCA-eoy3dBmBWRQ6SXMptzsix8eIKJZfqOrgoE1uPYtvlktJrv6jSbMEGpGOC8RPF32LtwgWxm7VnGfuP43M9tEQam6V9GtRkIU-ZM_qRJr_ceSDxvAErqB0vy9s"
        />
        {/* Dark overlay instead of light gradient */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.15) 100%)"
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
    <section style={{ padding: "80px 0", background: "#f3f4f5" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
          {/* Established */}
          <div style={{
            gridColumn: "span 2", background: "#fff",
            padding: 32, borderRadius: 24, display: "flex", flexDirection: "column", justifyContent: "space-between",
          }}>
            <div>
              <Icon name="verified" style={{ color: "#9e001f", fontSize: 40, display: "block", marginBottom: 16 }} />
              <h3 className="font-headline" style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Established 2013</h3>
              <p style={{ color: "#5c403f" }}>A decade of excellence in higher education, producing Vietnam's next generation of healthcare leaders.</p>
            </div>
          </div>
          {/* Can Tho */}
          <div style={{ background: "#fecc00", padding: 32, borderRadius: 24, color: "#6e5700" }}>
            <Icon name="location_on" style={{ fontSize: 40, display: "block", marginBottom: 16 }} />
            <h3 className="font-headline" style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Can Tho City</h3>
            <p style={{ fontSize: 14, opacity: 0.9 }}>The heart of the Mekong Delta, offering a serene yet vibrant academic environment.</p>
          </div>
          {/* Private */}
          <div style={{ background: "#9e001f", padding: 32, borderRadius: 24, color: "#fff" }}>
            <Icon name="account_balance" style={{ fontSize: 40, display: "block", marginBottom: 16, color: "#fff" }} />
            <h3 className="font-headline" style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Private</h3>
            <p style={{ fontSize: 14, opacity: 0.9 }}>Independently governed with massive infrastructure investment and international standards.</p>
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
            <p style={{ fontSize: 18, color: "#5c403f", marginBottom: 32, lineHeight: 1.7 }}>
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
        <h2 className="font-headline" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800, marginBottom: 16, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
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
              <button style={{
                width: "100%", padding: "12px 0", borderRadius: 12,
                border: "1.5px solid #e5bdbb", color: hovered === i ? "#fff" : "#9e001f",
                background: hovered === i ? "#9e001f" : "transparent",
                fontWeight: 700, cursor: "pointer", transition: "all 0.3s ease", fontSize: 14,
              }}>
                Course Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function StudentLifeCost() {
  return (
    <section style={{ padding: "96px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{
          background: "#c8102e", color: "#fff",
          borderRadius: 48, padding: "64px",
          display: "flex", flexWrap: "wrap", alignItems: "center", gap: 48,
          overflow: "hidden", position: "relative",
        }}>
          <div style={{ flex: "1 1 400px", position: "relative", zIndex: 1 }}>
            <h2 className="font-headline" style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800, marginBottom: 24, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Quality Education, <br />Affordable Living
            </h2>
            <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, lineHeight: 1.7 }}>
              Can Tho offers a significantly lower cost of living compared to Ho Chi Minh City or Hanoi. Students enjoy a high quality of life with affordable housing, fresh local food, and a focused study environment.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              {[
                { value: "40% Less", label: "Living Costs than HCM" },
                { value: "$200", label: "Avg. Monthly Expense" },
              ].map((stat) => (
                <div key={stat.label} style={{
                  background: "rgba(255,255,255,0.15)", padding: 16, borderRadius: 16,
                  backdropFilter: "blur(8px)",
                }}>
                  <span style={{ fontSize: 28, fontWeight: 700, display: "block", marginBottom: 4 }}>{stat.value}</span>
                  <span style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em" }}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ flex: "1 1 300px", position: "relative", height: 384 }}>
            <img
              alt="Student Life Can Tho"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", borderRadius: 24 }}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaqW40XnOIzvORe--rq-RMyPcJoViX3IzIcb9uJ7vBCEGAneR44KEqCUrRwZDKc9wX83__wTtKG4-Q4WSE8v-qMdy73aX1BRUquJPWlpg7GojXAXoWRd9KTZd8RuNweZvrWUsxY03Jd61mBEaEPL1Julw6ymCKxX9KHLTym16uc6v0ltWHaJz7spKav7m3Ij37gje2nfNJMNWC6ZSpgW7Am9-aF-TGde1kKQPi_ycngv3pQiO6A8N2i1OT-a0Z1TI9OsDY95eq5sg"
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
              <h3 className="font-headline" style={{ fontSize: 20, fontWeight: 700, marginBottom: 16, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
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



