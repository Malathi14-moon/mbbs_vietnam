import { useEffect, useState } from "react";
import EnquiryModal from "../components/EnquiryModal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Header from "../components/Header";
import UniversityCard from "../components/UniversityCard";
import Footer from "../components/Footer";

/*const API = "http://localhost:5000/universities";*/

const BASE_URL = import.meta.env.VITE_API_URL;
const API = `${BASE_URL}/universities`;

const stats = [
  { num: "500+", label: "Students placed" },
  { num: "6", label: "Top universities" },
  { num: "Rs.15L", label: "Avg. total cost" },
  { num: "98%", label: "Visa success" },
];


const features = [
  {
    icon: "🎓",
    title: "Expert Guidance",
    desc: "Personalized counselling to choose the best university for your MBBS journey.",
  },
  {
    icon: "🏥",
    title: "Trusted Universities",
    desc: "Direct partnerships with top NMC-approved medical universities in Vietnam.",
  },
  {
    icon: "💰",
    title: "Transparent Fees",
    desc: "No hidden costs. Clear and honest fee structure for students and parents.",
  },
  {
    icon: "✈️",
    title: "End-to-End Support",
    desc: "From admission to visa, travel, and accommodation – we handle everything.",
  },
  {
    icon: "🍛",
    title: "Indian Food & Hostel",
    desc: "Comfortable stay with Indian food options for a home-like experience.",
  },
  {
    icon: "📞",
    title: "24/7 Support",
    desc: "Dedicated support team for students and parents at every step.",
  },
];



function normalizeHighlights(highlights) {
  if (Array.isArray(highlights)) {
    return highlights;
  }

  if (typeof highlights === "string") {
    try {
      const parsed = JSON.parse(highlights);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  return [];
}

export default function Home() {
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const resolveImage = (image) => {
      if (!image) return null;
      if (image.startsWith("http://") || image.startsWith("https://")) return image;
      const normalized = image.startsWith("/") ? image : `/${image}`;
      return `${BASE_URL}${normalized}`;
    };

    fetch(API)
      .then(async (res) => {
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Unable to load universities");
        }

        if (!Array.isArray(data)) {
          throw new Error("Unexpected universities response");
        }

        return data;
      })
      .then((data) => {
        setUniversities(
          data.map((uni) => ({
            ...uni,
            highlights: normalizeHighlights(uni.highlights),
            image: resolveImage(uni.image),
          }))
        );
      })
      .catch((err) => {
        console.error("Error fetching universities:", err);
        setError(err.message || "Unable to load universities right now.");
        setUniversities([]);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <section className="relative">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          className="w-full h-[600px]"
        >
          <SwiperSlide>
          { /* <div className="relative w-full h-full">
              <img
                src="https://i0.wp.com/prodirektgroup.com/wp-content/uploads/2022/09/PRODIREKT-is-a-leading-trusted-advisor-for-students-who-want-to-study-abroad.jpg"
                alt="Vietnam"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="max-w-3xl text-center px-6">
                  <h1 className="font-serif text-5xl font-extrabold text-white mb-4">
                    Dreaming of MBBS? <br />
                    <span className="text-[#CC1B1B]">
                      Vietnam Makes It Possible!
                    </span>
                  </h1>

                  <p className="text-white text-lg mb-6">
                    Direct admission for Indian students after 12th. No donation,
                    no IELTS - just your NEET score.
                  </p>

                  <div className="flex justify-center gap-4">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(true)}
                      className="px-7 py-3.5 bg-[#CC1B1B] text-white font-bold rounded-xl hover:bg-[#b01616]"
                    >
                      Apply Now -&gt;
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(true)}
                      className="px-7 py-3.5 bg-[#F5C518] text-yellow-900 font-bold rounded-xl hover:bg-yellow-400"
                    >
                      Download Brochure
                    </button>
                  </div>
                </div>
              </div>
            </div> */}


            <div className="relative w-full h-full">
  <img
    src="https://i0.wp.com/prodirektgroup.com/wp-content/uploads/2022/09/PRODIREKT-is-a-leading-trusted-advisor-for-students-who-want-to-study-abroad.jpg"
    alt="Vietnam"
    className="w-full h-full object-cover"
  />

  {/* Deep gradient overlay — stronger in center for text clarity */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/20" />

  <div className="absolute inset-0 flex items-center justify-center">
    <div className="max-w-3xl text-center px-6">

      {/* Eyebrow badge */}
      <span className="inline-block mb-4 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-red-200 border border-red-400/50 bg-red-800/20 rounded-full">
        For Indian Students · After 12th · NEET Accepted
      </span>

      {/* Heading with text shadow */}
      <h1
        className="font-serif text-5xl font-extrabold text-white mb-2 leading-tight"
        style={{ textShadow: "0 2px 12px rgba(0,0,0,0.7), 0 1px 3px rgba(0,0,0,0.9)" }}
      >
        Dreaming of MBBS?
      </h1>
      <h2
        className="font-serif text-4xl font-extrabold text-red-400 mb-5 leading-tight"
        style={{ textShadow: "0 2px 10px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,0.95)" }}
      >
        Vietnam Makes It Possible!
      </h2>

      {/* Frosted glass tagline pill */}
      <p
        className="inline-block text-white/90 text-base mb-7 px-5 py-2.5 rounded-xl border border-white/15"
        style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(6px)" }}
      >
        Direct admission · No donation · No IELTS required
      </p>

      {/* CTA Buttons */}
      <div className="flex justify-center gap-4">
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="px-7 py-3.5 bg-[#CC1B1B] text-white font-bold rounded-xl hover:bg-[#b01616] shadow-lg shadow-red-900/50"
        >
          Apply Now →
        </button>
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="px-7 py-3.5 bg-[#F5C518] text-yellow-900 font-bold rounded-xl hover:bg-yellow-400 shadow-lg shadow-yellow-900/30"
        >
          Download Brochure
        </button>
      </div>

    </div>
  </div>
</div>


          </SwiperSlide>

          <SwiperSlide>
           {/* <div className="relative w-full h-full">
              <img
                src="https://th.bing.com/th/id/OIP.feHgQ4d-dF4wcUgUzy6GjwHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Vietnam"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-white/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="max-w-3xl text-center px-6">
                  <h1 className="font-serif text-5xl font-extrabold text-gray-900 mb-4">
                    Dreaming of MBBS? <br />
                    <span className="text-[#CC1B1B]">
                      Vietnam Makes It Possible!
                    </span>
                  </h1>

                  <p className="text-gray-600 text-lg mb-6">
                    Direct admission for Indian students after 12th. No donation,
                    no IELTS - just your NEET score.
                  </p>
                </div>
              </div>
            </div> */}


           <div className="relative w-full h-full overflow-hidden">
  <img
    src="https://th.bing.com/th/id/OIP.feHgQ4d-dF4wcUgUzy6GjwHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
    alt="Vietnam"
    className="w-full h-full object-cover object-center"
  />

  {/* Stronger overlay for light image */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/65 to-black/50" />

  <div className="absolute inset-0 flex items-center justify-center">
    <div className="max-w-2xl text-center px-8">

      {/* Eyebrow */}
      <p className="text-yellow-300 text-sm font-semibold uppercase tracking-widest mb-4">
        MBBS in Vietnam · 2026 Admissions
      </p>

      {/* Heading */}
      <h1
        className="font-serif text-5xl font-extrabold text-white leading-tight mb-4"
        style={{ textShadow: "0 2px 16px rgba(0,0,0,0.7)" }}
      >
        Start Your Medical Career <br />
        <span
          className="text-[#F5C518]"
          style={{ textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}
        >
          with Globally Recognized MBBS
        </span>
      </h1>

      {/* Subtext */}
      <p
        className="text-white/85 text-lg leading-relaxed"
        style={{ textShadow: "0 1px 8px rgba(0,0,0,0.8)" }}
      >
        Study in top NMC-approved universities with advanced hospitals,
        experienced faculty, and affordable fees for Indian students.
      </p>

    </div>
  </div>
</div>

          </SwiperSlide>

          <SwiperSlide>
           {/* <div className="relative w-full h-full">
              <img
                src="https://wallpapercave.com/wp/wp7425397.jpg"
                alt="Campus"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-white/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex gap-8 bg-white/90 rounded-2xl p-6 shadow-xl">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-3xl font-bold text-[#CC1B1B]">
                        {stat.num}
                      </div>
                      <div className="text-sm text-gray-600">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div> */}



            <div className="relative w-full h-full">
  <img
    src="https://wallpapercave.com/wp/wp7425397.jpg"
    alt="MBBS in Vietnam"
    className="w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-black/50" />

  <div className="absolute inset-0 flex items-center justify-center px-4">
    <div className="max-w-5xl text-center text-white">

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
        Study MBBS in Vietnam 🇻🇳 <br />
        <span className="text-yellow-400">
          Affordable • Recognized • Career-Focused
        </span>
      </h1>

      {/* Subtext */}
      <p className="text-lg md:text-xl text-gray-200 mb-8">
        Get direct admission to top NMC-approved universities with modern
        hospitals, Indian curriculum support, and global career opportunities.
      </p>

    

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-8 py-3 bg-[#CC1B1B] rounded-xl font-semibold hover:bg-red-700 transition"
        >
          Apply Now →
        </button>

        <a
          href="https://wa.me/919003420057?text=Hi%20I%20am%20interested%20in%20MBBS%20in%20Vietnam"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-[#F5C518] rounded-xl font-semibold hover:bg-yellow-600 transition"
        >
          Chat on WhatsApp
        </a>
      </div>
    </div>
  </div>
</div>
          </SwiperSlide>
        </Swiper>



         {/* Stats Section */}

<div className="relative z-10 mt-[100px] mb-12 px-4">
  <div className="max-w-5xl mx-auto">
    <div
      className="flex flex-wrap justify-center gap-6 bg-white rounded-2xl p-6 md:p-8"
      style={{
        boxShadow: "0 4px 6px -1px rgba(204,27,27,0.08), 0 20px 60px -10px rgba(204,27,27,0.15), 0 1px 3px rgba(0,0,0,0.06)"
      }}
    >
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className="text-center min-w-[120px] px-4"
        >
          {/* Divider between items */}
          {index !== 0 && (
            <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -left-3 w-px h-8 bg-gray-200" />
          )}
          <div className="text-2xl md:text-3xl font-bold text-[#CC1B1B]">
            {stat.num}
          </div>
          <div className="text-sm text-gray-500 mt-0.5">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

        <section className="mt-16 px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-[#CC1B1B] mb-10">
            Top Medical Universities in Vietnam
          </h1>

          <p className="text-center text-gray-700 text-lg max-w-5xl mx-auto">
            Vietnam offers top-quality medical education with globally
            recognized universities, modern hospitals, and English-medium MBBS
            programs designed for international students.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-6xl mx-auto">
            {loading ? (
              <p className="col-span-2 text-center text-gray-500">
                Loading universities...
              </p>
            ) : error ? (
              <p className="col-span-2 text-center text-red-600">{error}</p>
            ) : universities.length === 0 ? (
              <p className="col-span-2 text-center text-gray-500">
                No universities added yet.
              </p>
            ) : (
              universities.map((uni) => (
                <UniversityCard
                  key={uni.id}
                  onOpenEnquiry={() => setIsModalOpen(true)}
                  university={{
                    name: uni.name,
                    shortName: uni.short_name,
                    fee: uni.fee,
                    image: uni.image,
                    highlights: uni.highlights,
                  }}
                />
              ))
            )}
          </div>
        </section>


         <section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 text-center">
    
    <h2 className="text-3xl md:text-4xl font-bold text-[#CC1B1B]">
      Why Choose Us
    </h2>
    <p className="text-gray-600 mt-3 mb-10">
      Your trusted partner for MBBS in Vietnam
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((item, i) => (
        <div
          key={i}
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
        >
          <div className="text-4xl mb-4">{item.icon}</div>
          <h3 className="text-lg font-semibold text-[#1a2f5e] mb-2">
            {item.title}
          </h3>
          <p className="text-gray-600 text-sm">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>





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
      </section>
    </div>
  );
}
