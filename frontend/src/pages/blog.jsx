import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function BlogPage() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);

  const BASE_URL = import.meta.env.VITE_API_URL || "https://mbbs-vietnam.onrender.com";

  useEffect(() => {
    fetch(`${BASE_URL}/api/blogs`)
      .then((res) => res.json())
      .then(setBlogs);
  }, []);

  return (
    <>
      <Header />

      {/* ── Hero Section ── */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          minHeight: "360px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "left",
          
        }}
      >
        {/* Background image */}
        <img
          src="https://img.freepik.com/premium-vector/word-concept-color-geometric-shapes-blog_205544-12899.jpg"
          alt="Blog hero"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />

        {/* Dark overlay — stronger on left for text, fades right */}
       <div
  style={{
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to right, rgba(10,15,40,0.50) 30%, rgba(10,15,40,0.30) 60%, rgba(10,15,40,0.25) 100%)",
  }}
/>

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "1200px",
            width: "100%",
            margin: "0 auto",
            padding: "4rem clamp(1.5rem, 5vw, 4rem)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          {/* Left — text */}
          <div style={{ flex: "1 1 480px" }}>

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
                color: "#F5C518",
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
                color: "#ffffff",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 900,
                lineHeight: 1.18,
                marginBottom: "1rem",
                textShadow: "0 2px 16px rgba(0,0,0,0.4)",
              }}
            >
              Insights, Guides &{" "}
              <span style={{ color: "#F5C518" }}>Expert Advice</span>
              <br />
              for MBBS Aspirants
            </h1>

            {/* Subtext */}
            <p
              style={{
                color: "rgba(255,255,255,0.78)",
                fontSize: "1rem",
                lineHeight: 1.8,
                maxWidth: "500px",
                marginBottom: "2rem",
              }}
            >
              Stay informed with the latest updates on MBBS admissions in Vietnam
              — university rankings, fee structures, visa tips, student experiences,
              and everything you need to make the right decision.
            </p>

            {/* Topic pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {[
                "Admission Guide",
                "University Reviews",
                "Visa Tips",
                "Student Life",
                "NMC Updates",
                "Fee Structure",
              ].map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: "6px 14px",
                    borderRadius: "999px",
                    border: "1px solid rgba(255,255,255,0.18)",
                    background: "rgba(255,255,255,0.08)",
                    backdropFilter: "blur(6px)",
                    color: "rgba(255,255,255,0.80)",
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

          {/* Right — stat cards 
          <div
            style={{
              flex: "0 1 260px",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            {[
              { value: `${blogs.length || "20"}+`, label: "Articles Published", icon: "📝" },
              { value: "10+", label: "Topics Covered", icon: "📚" },
              { value: "Weekly", label: "New Posts", icon: "🗓️" },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "14px 18px",
                  borderRadius: "12px",
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <span style={{ fontSize: "22px" }}>{s.icon}</span>
                <div>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      fontWeight: 900,
                      color: "#F5C518",
                      lineHeight: 1,
                      fontFamily: "Georgia, serif",
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.72rem",
                      color: "rgba(255,255,255,0.70)",
                      marginTop: "3px",
                      fontWeight: 500,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              </div>
            ))}
          </div>  */}

        </div>
      </section>

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

      <Footer />
    </>
  );
}