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

      <a
  href="https://wa.me/919003420057?text=Hi%20I%20am%20interested"
  target="_blank"
  rel="noopener noreferrer"
  class="fixed bottom-5 right-5 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition duration-300"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
    viewBox="0 0 24 24"
    class="w-7 h-7"
  >
    <path d="M20.52 3.48A11.86 11.86 0 0012.05 0C5.47 0 .16 5.31.16 11.88c0 2.09.55 4.13 1.6 5.94L0 24l6.35-1.66a11.87 11.87 0 005.7 1.45h.01c6.57 0 11.88-5.31 11.88-11.88 0-3.17-1.23-6.15-3.42-8.43zM12.06 21.5c-1.8 0-3.56-.48-5.1-1.4l-.36-.21-3.77.99 1-3.67-.23-.38a9.36 9.36 0 01-1.44-5c0-5.18 4.22-9.4 9.4-9.4 2.51 0 4.87.98 6.65 2.75a9.35 9.35 0 012.75 6.65c0 5.18-4.22 9.4-9.4 9.4zm5.15-7.05c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.31.2-.59.07-.28-.14-1.17-.43-2.23-1.37-.83-.74-1.4-1.65-1.56-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.5.14-.17.19-.28.28-.47.09-.18.05-.35-.02-.5-.07-.14-.61-1.48-.83-2.03-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.47.07-.71.35-.25.28-.96.94-.96 2.29s.99 2.65 1.13 2.83c.14.18 1.96 2.99 4.75 4.2.66.28 1.17.45 1.57.57.66.21 1.26.18 1.73.11.53-.08 1.65-.67 1.88-1.32.23-.65.23-1.21.16-1.32-.07-.11-.25-.18-.52-.32z"/>
  </svg>
</a>


      <Footer />
    </>
  );
}