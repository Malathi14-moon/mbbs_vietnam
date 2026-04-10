import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function BlogPage() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/blogs")
      .then((res) => res.json())
      .then(setBlogs);
  }, []);

  return (
    <>
      <Header />

      {/* Hero Section */}
      <div className="bg-[#f5f7fb] py-12 text-center">
        <h1 className="text-4xl font-bold text-[#CC1B1B]">Blog</h1>
      </div>

      {/* Blog Cards */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              onClick={() => navigate(`/blog/${blog.slug}`)}
              className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer group"
            >
              {/* Image */}
              <div className="h-52 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h2 className="text-lg font-semibold text-[#1a2f5e] leading-snug group-hover:text-[#CC1B1B] transition">
                  {blog.title}
                </h2>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/blog/${blog.slug}`);
                  }}
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