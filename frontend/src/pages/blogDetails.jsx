import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CTA from "../components/CTA_section";

export default function BlogDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);
  const [allBlogs, setAllBlogs] = useState([]);
  const [openTOC, setOpenTOC] = useState(true);
  const [loading, setLoading] = useState(true);

  const BASE_URL =
  import.meta.env.VITE_API_URL || "https://mbbs-vietnam.onrender.com";

  /* =========================
     FETCH DATA
  ========================= */
  useEffect(() => {
    setLoading(true);

    // Fetch current blog
    fetch(`${BASE_URL}/api/blogs/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
      })
      .catch((err) => console.error("Blog fetch error:", err));

    // Fetch all blogs
    fetch(`${BASE_URL}/api/blogs`)
      .then((res) => res.json())
      .then((data) => {
        setAllBlogs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("All blogs fetch error:", err);
        setLoading(false);
      });
  }, [slug]);

  /* =========================
     LOADING STATE
  ========================= */
  if (loading || !blog) {
    return (
      <>
        <Header />
        <h1 className="text-center mt-20 text-xl">Loading...</h1>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-10">

        {/* ================= LEFT CONTENT ================= */}
        <div className="md:col-span-2">

          {/* Title */}
          <h1 className="text-3xl font-bold text-[#1a2f5e] mb-2">
            {blog.title}
          </h1>

          {/* Author + Date */}
          <p className="text-gray-500 mb-6">
            By <span className="font-semibold">{blog.author}</span> | {blog.date}
          </p>

          {/* Table of Contents */}
          <div className="mb-6 border rounded-lg">
            <button
              onClick={() => setOpenTOC(!openTOC)}
              className="w-full text-left px-4 py-3 bg-gray-100 font-semibold"
            >
              Table of Contents {openTOC ? "▲" : "▼"}
            </button>

            {openTOC && (
              <ul className="p-4 space-y-2">
                {blog.sections?.map((sec, index) =>
                  sec.heading ? (
                    <li key={index}>
                      <a
                        href={`#section-${index}`}
                        className="text-[#CC1B1B] hover:underline"
                      >
                        {sec.heading}
                      </a>
                    </li>
                  ) : null
                )}
              </ul>
            )}
          </div>

          {/* Main Image */}
          {blog.image && (
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-80 object-cover rounded-xl mb-6"
            />
          )}

          {/* Sections */}
          {blog.sections?.map((sec, index) => (
            <div key={index} id={`#section-${index}`} className="mb-8">
              {sec.heading && (
                <h2 className="text-2xl font-semibold text-[#1a2f5e] mb-2">
                  {sec.heading}
                </h2>
              )}

              {sec.content && (
                <p className="text-gray-700 leading-7">
                  {sec.content}
                </p>
              )}
            </div>
          ))}

        </div>

        {/* ================= RIGHT SIDEBAR ================= */}
        <div>
          <h3 className="text-xl font-semibold text-[#1a2f5e] mb-4">
            Other Blogs
          </h3>

          <div className="space-y-6">
            {allBlogs.filter((b) => b.slug !== slug).length === 0 ? (
              <p className="text-gray-500 text-sm">
                No other blogs available
              </p>
            ) : (
              allBlogs
                .filter((b) => b.slug !== slug) // ✅ FIXED FILTER
                .slice(0, 5)
                .map((item) => (
                  <div
                    key={item.id}
                    onClick={() => navigate(`/blog/${item.slug}`)}
                    className="border rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition"
                  >
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-40 object-cover"
                      />
                    )}

                    <div className="p-3">
                      <h4 className="font-semibold text-sm text-[#1a2f5e]">
                        {item.title}
                      </h4>

                      {item.sections?.[0]?.content && (
                        <p className="text-xs text-gray-500 mt-1">
                          {item.sections[0].content.slice(0, 70)}...
                        </p>
                      )}
                    </div>
                  </div>
                ))
            )}
          </div>
        </div>

      </div>

      <CTA />

      <Footer />
    </>
  );
}