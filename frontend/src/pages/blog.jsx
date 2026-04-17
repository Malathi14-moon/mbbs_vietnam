import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogImg from "../assets/MBBS-in-Vietnam-blog.png";
import Blog from "../assets/blog.png";
import CTA from "../components/CTA_section";


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


 
<section style={{ width: "100%", overflow: "hidden" }}>
  <img
    src="https://tse1.explicit.bing.net/th/id/OIP.Hg8zrGLfWXHDj5a4QqRGcwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
    alt="Blog hero"
    style={{
      width: "100%",
      height: "80vh",
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

      
      <CTA />

      <Footer />
    </>

  
  );
}