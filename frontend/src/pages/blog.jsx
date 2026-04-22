import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogImg from "../assets/MBBS-in-Vietnam-blog.png";
import Blog from "../assets/blog.png";
import MBBSVietnam from "../assets/MBBS-in-Vietnam-blog.png";
import EnquiryModal from "../components/EnquiryModal";


export default function BlogPage() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);

  const BASE_URL = import.meta.env.VITE_API_URL || "https://mbbs-vietnam.onrender.com";

  useEffect(() => {
    fetch(`${BASE_URL}/api/blogs`)
      .then((res) => res.json())
      .then(setBlogs);
  }, []);


  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Header />


 
<section style={{ width: "100%", overflow: "hidden" }}>
  <img
    src={MBBSVietnam}
    alt="Blog hero"
    style={{
      width: "100%",
      height: "100vh",
      display: "block",
      objectFit: "cover",
      objectPosition: "center",
    }}
  />
</section> 




{/*<section style={{ width: "100%", overflow: "hidden" }}>
  <img
    src={Blog}
    alt="Blog hero"
    style={{
      width: "100%",
      height: "80vh",
      display: "block",
      objectFit: "contain",   // ensures full image is visible
      objectPosition: "center",
      backgroundColor: "#000", // optional: fills empty space with color
    }}
  />
</section> */}



{/* Content — below the hero */}
<div
  style={{
    maxWidth: "1200px",
    width: "100%",
    margin: "0 auto",
    padding: "3rem clamp(1.5rem, 5vw, 4rem)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",   // centers block elements
    textAlign: "center",    // centers text
  }}
>
  {/* Badge */}
  <div
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      marginBottom: "1.25rem",
      padding: "5px 16px",
      borderRadius: "999px",
      border: "1px solid rgba(245,197,24,0.45)",
      background: "rgba(245,197,24,0.12)",
      color: "#b8920e",
      fontSize: "0.7rem",
      fontWeight: 700,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
    }}
  >
    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#F5C518", display: "inline-block" }} />
    MBBS Vietnam · Knowledge Hub
  </div>

  {/* Heading */}
  <h1
    style={{
      fontFamily: "Georgia, serif",
      color: "#111",
      fontSize: "clamp(2rem, 4vw, 3rem)",
      fontWeight: 900,
      lineHeight: 1.18,
      marginBottom: "1rem",
    }}
  >
    Insights, Guides &{" "}
    <span style={{ color: "#CC1B1B" }}>Expert Advice</span>
    <br />
    for MBBS Aspirants
  </h1>

  {/* Subtext */}
  <p
    style={{
      color: "#444",
      fontSize: "1rem",
      lineHeight: 1.8,
      maxWidth: "600px",
      marginBottom: "2rem",
    }}
  >
    Stay informed with the latest updates on MBBS admissions in Vietnam
    — university rankings, fee structures, visa tips, student experiences,
    and everything you need to make the right decision.
  </p>

  {/* Topic pills */}
  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center" }}>
    {["Admission Guide", "University Reviews", "Visa Tips", "Student Life", "NMC Updates", "Fee Structure"].map((tag) => (
      <span
        key={tag}
        style={{
          padding: "6px 14px",
          borderRadius: "999px",
          border: "1px solid #ddd",
          background: "#f5f5f5",
          color: "#333",
          fontSize: "0.75rem",
          fontWeight: 500,
          cursor: "pointer",
        }}
      >
        {tag}
      </span>
    ))}
  </div>
</div>



      {/* ── Blog Cards ── */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              onClick={() => navigate(`/blog/${blog.slug}`)}
              className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer group"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-5">
                <h2 className="text-lg font-semibold text-[#1a2f5e] leading-snug group-hover:text-[#CC1B1B] transition">
                  {blog.title}
                </h2>
                <button
                  onClick={(e) => { e.stopPropagation(); navigate(`/blog/${blog.slug}`); }}
                  className="mt-4 text-[#CC1B1B] font-semibold hover:underline"
                >
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>



     {/* Blog CTA Section */}
<section
  style={{
    width: "100%",
    margin: 0,
    padding: "3.5rem 1.5rem",
    background:
      "linear-gradient(135deg, #fef9f7 0%, #ffffff 50%, #fdf3f0 100%)",
    position: "relative",
    overflow: "hidden",
  }}
>
  {/* Decorative Shapes */}
  <div
    style={{
      position: "absolute",
      top: -60,
      right: -60,
      width: 240,
      height: 240,
      borderRadius: "50%",
      background: "rgba(245, 197, 24, 0.08)",
    }}
  />

  <div
    style={{
      position: "absolute",
      bottom: -80,
      left: -80,
      width: 280,
      height: 280,
      borderRadius: "50%",
      background: "rgba(204, 27, 27, 0.05)",
    }}
  />

  {/* Content */}
  <div
    style={{
      maxWidth: "800px",
      margin: "0 auto",
      position: "relative",
      zIndex: 2,
      textAlign: "center",
    }}
  >
    {/* Badge */}
    <span
      style={{
        display: "inline-block",
        padding: "10px 20px",
        borderRadius: 999,
        background: "#fff1e6",
        color: "#d97706",
        fontSize: 11,
        fontWeight: 800,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        marginBottom: 14,
      }}
    >
      📚 Featured Resources
    </span>

    {/* Heading */}
    <h2
      style={{
        fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
        fontWeight: 800,
        lineHeight: 1.2,
        color: "#1f2937",
        marginBottom: 12,
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      Master Your MBBS Journey
      <br />
      <span style={{ color: "#CC1B1B" }}>with Expert Insights</span>
    </h2>

    {/* Subtext */}
    <p
      style={{
        maxWidth: 650,
        margin: "0 auto 24px",
        fontSize: 16,
        lineHeight: 1.7,
        color: "#6b7280",
      }}
    >
      Join 2,000+ students receiving weekly tips on university selection,
      admission strategies, visa processes, and life in Vietnam. Get exclusive
      guides and success stories directly in your inbox.
    </p>

    

    {/* Secondary CTA */}
    <button
      type="button"
      onClick={() => setIsModalOpen(true)}
      style={{
        background: "transparent",
        color: "#CC1B1B",
        border: "2px solid #CC1B1B",
        padding: "12px 26px",
        borderRadius: 10,
        fontWeight: 700,
        fontSize: 14,
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.target.style.background = "#fff5f5";
      }}
      onMouseLeave={(e) => {
        e.target.style.background = "transparent";
      }}
    >
      Talk to Our Experts
    </button>

    {/* Trust Badge */}
    <p
      style={{
        marginTop: 20,
        fontSize: 13,
        color: "#9ca3af",
        fontWeight: 600,
      }}
    >
      ✓ No spam • ✓ Unsubscribe anytime • ✓ 100% confidential
    </p>
  </div>
</section>

      
      <EnquiryModal
                            isOpen={isModalOpen}
                            onClose={() => setIsModalOpen(false)}
                          />

      <Footer />
    </>

  
  );
}