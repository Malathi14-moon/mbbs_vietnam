import { useEffect, useState } from "react";
import EnquiryModal from "../components/EnquiryModal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Header from "../components/Header";
import UniversityCard from "../components/UniversityCard";
import Footer from "../components/Footer";
import CTA from "../components/CTA_section";
import Hero1 from "../assets/hero1.webp";
import Hero2 from "../assets/hero2.webp";
import Hero3 from "../assets/hero31.webp";


/*const API = "http://localhost:5000/universities";*/

const BASE_URL = import.meta.env.VITE_API_URL || "https://mbbs-vietnam.onrender.com";
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

    <>
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
          


            <div className="relative w-full h-full">
  <img
    src={Hero1}
    alt="Vietnam"
    className="w-full h-full object-cover"
  />

  {/* Layer 1 — strong dark base */}
  <div className="absolute inset-0 bg-black/60" />

  {/* Layer 2 — red brand gradient from bottom */}
  <div
    className="absolute inset-0"
    style={{
      background:
        "linear-gradient(to top, rgba(204,27,27,0.45) 0%, transparent 50%)",
    }}
  />

  {/* Layer 3 — center focus vignette */}
  <div
    className="absolute inset-0"
    style={{
      background:
        "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.55) 100%)",
    }}
  />

  {/* Content */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="max-w-3xl text-center px-6">

      {/* Eyebrow badge */}
      <div className="flex justify-center mb-5">
        <span
          className="inline-flex items-center gap-2 px-5 py-2 text-xs font-bold uppercase tracking-widest rounded-full border border-yellow-400/60"
          style={{
            background: "rgba(245,197,24,0.12)",
            color: "#F5C518",
            backdropFilter: "blur(8px)",
            boxShadow: "0 0 20px rgba(245,197,24,0.15)",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse"
          />
          For Indian Students · After 12th · NEET Accepted
        </span>
      </div>

      {/* Main heading */}
      <h1
        className="font-serif text-5xl md:text-6xl font-extrabold text-white mb-3 leading-tight"
        style={{
          textShadow:
            "0 2px 30px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,1)",
        }}
      >
        Dreaming of MBBS?
      </h1>

      {/* Sub heading */}
      <h2
        className="font-serif text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
  style={{
    color: "#FFFFFF",
    textShadow: "0 2px 20px rgba(0,0,0,0.9)",
        }}
      >
        Vietnam Makes It Possible!
      </h2>

      {/* Divider line */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-yellow-400/60" />
        <span className="text-yellow-400/80 text-xs">✦</span>
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-yellow-400/60" />
      </div>

      {/* Tagline pill */}
      <p
        className="inline-block text-white text-base font-medium mb-8 px-6 py-3 rounded-2xl border border-white/20"
        style={{
          background: "rgba(0,0,0,0.50)",
          backdropFilter: "blur(10px)",
          textShadow: "0 1px 6px rgba(0,0,0,0.8)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
        }}
      >
        ✅ Direct admission &nbsp;·&nbsp; ✅ No donation &nbsp;·&nbsp; ✅ No IELTS required
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="px-8 py-3.5 text-white font-bold rounded-xl transition-all duration-200 hover:scale-105"
          style={{
            background: "linear-gradient(135deg, #CC1B1B 0%, #a01515 100%)",
            boxShadow:
              "0 4px 20px rgba(204,27,27,0.5), inset 0 1px 0 rgba(255,255,255,0.1)",
          }}
        >
          Apply Now →
        </button>

        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="px-8 py-3.5 font-bold rounded-xl transition-all duration-200 hover:scale-105"
          style={{
            background: "linear-gradient(135deg, #F5C518 0%, #d4a800 10%)",
            color: "#1a0e00",
            boxShadow:
              "0 4px 20px rgba(245,197,24,0.4), inset 0 1px 0 rgba(255,255,255,0.2)",
          }}
        >
          📄 Download Brochure
        </button>
      </div>

    </div>
  </div>
</div>


          </SwiperSlide>

          <SwiperSlide>
           


           <div className="relative w-full h-full overflow-hidden">
  <img
    src={Hero2}
    alt="Vietnam"
    className="w-full h-full object-cover object-center"
  />

  {/* Layer 1 — dark base */}
  <div className="absolute inset-0 bg-black/60" />

  {/* Layer 2 — red brand gradient from bottom */}
  <div
    className="absolute inset-0"
    style={{
      background:
        "linear-gradient(to top, rgba(204,27,27,0.45) 0%, transparent 50%)",
    }}
  />

  {/* Layer 3 — center focus vignette */}
  <div
    className="absolute inset-0"
    style={{
      background:
        "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.55) 100%)",
    }}
  />

  <div className="absolute inset-0 flex items-center justify-center">
    <div className="max-w-2xl text-center px-8">

      {/* Eyebrow badge */}
      <div className="flex justify-center mb-5">
        <span
          className="inline-flex items-center gap-2 px-5 py-2 text-xs font-bold uppercase tracking-widest rounded-full border border-white/30"
          style={{
            background: "rgba(255,255,255,0.08)",
            color: "#FFF5E0",
            backdropFilter: "blur(8px)",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          MBBS in Vietnam · 2026 Admissions
        </span>
      </div>

      {/* Heading */}
      <h1
        className="font-serif text-5xl font-extrabold text-[#F5C518] leading-tight mb-4"
        style={{
          textShadow: "0 2px 30px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,1)",
        }}
      >
        Start Your Medical Career <br />
        <span
          style={{
            color: "#FFF5E0",
            textShadow: "0 2px 20px rgba(0,0,0,0.9)",
          }}
        >
          with Globally Recognized MBBS
        </span>
      </h1>

      {/* Divider */}
      <div className="flex items-center justify-center gap-3 mb-5">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/40" />
        <span className="text-white/50 text-xs">✦</span>
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/40" />
      </div>

      {/* Subtext */}
      <p
        className="text-base leading-relaxed"
        style={{
          color: "#FFF5E0",
          textShadow: "0 1px 10px rgba(0,0,0,0.8)",
        }}
      >
        Study in top NMC-approved universities with advanced hospitals,
        experienced faculty, and affordable fees for Indian students.
      </p>

    </div>
  </div>
</div>


          </SwiperSlide>

          <SwiperSlide>
           

        
<div className="relative w-full h-full">
  <img
    src={Hero3}
    alt="MBBS in Vietnam"
    className="w-full h-full object-cover"
  />

  {/* Layer 1 — dark base */}
  <div className="absolute inset-0 bg-black/60" />

  {/* Layer 2 — red brand gradient from bottom */}
  <div
    className="absolute inset-0"
    style={{
      background:
        "linear-gradient(to top, rgba(204,27,27,0.45) 0%, transparent 50%)",
    }}
  />

  {/* Layer 3 — center focus vignette */}
  <div
    className="absolute inset-0"
    style={{
      background:
        "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.55) 100%)",
    }}
  />

  <div className="absolute inset-0 flex items-center justify-center px-4">
    <div className="max-w-5xl text-center">

      {/* Eyebrow badge */}
      <div className="flex justify-center mb-5">
        <span
          className="inline-flex items-center gap-2 px-5 py-2 text-xs font-bold uppercase tracking-widest rounded-full border border-white/30"
          style={{
            background: "rgba(255,255,255,0.08)",
            color: "#FFF5E0",
            backdropFilter: "blur(8px)",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          NMC Approved · Indian Curriculum · Global Career
        </span>
      </div>

      {/* Heading */}
      <h1
        className="text-4xl md:text-5xl font-extrabold leading-tight mb-3 text-white"
        style={{
          textShadow: "0 2px 30px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,1)",
        }}
      >
        Study MBBS in Vietnam
      </h1>

      {/* Sub heading */}
      <h2
        className="text-3xl md:text-4xl font-extrabold mb-5"
        style={{
          color: "#FFF5E0",
          textShadow: "0 2px 20px rgba(0,0,0,0.9)",
        }}
      >
        Affordable • Recognized • Career-Focused
      </h2>

      {/* Divider */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/40" />
        <span className="text-white/50 text-xs">✦</span>
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/40" />
      </div>

      {/* Subtext */}
      <p
        className="text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto"
        style={{
          color: "#FFF5E0",
          textShadow: "0 1px 10px rgba(0,0,0,0.8)",
        }}
      >
        Get direct admission to top NMC-approved universities with modern
        hospitals, Indian curriculum support, and global career opportunities.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-8 py-3.5 text-white font-bold rounded-xl transition-all duration-200 hover:scale-105"
          style={{
            background: "linear-gradient(135deg, #CC1B1B 0%, #a01515 100%)",
            boxShadow:
              "0 4px 20px rgba(204,27,27,0.5), inset 0 1px 0 rgba(255,255,255,0.1)",
          }}
        >
          Apply Now →
        </button>

        
         <a href="https://wa.me/919003420057?text=Hi%20I%20am%20interested%20in%20MBBS%20in%20Vietnam"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3.5 font-bold rounded-xl transition-all duration-200 hover:scale-105"
          style={{
            background: "linear-gradient(135deg, #F5C518 0%, #d4a800 10%)",
            color: "#1a0e00",
            boxShadow:
              "0 4px 20px rgba(245,197,24,0.4), inset 0 1px 0 rgba(255,255,255,0.2)",
          }}
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









        
      </section>


      

      </div>

      <CTA />

      <Footer />

      </>
    
  );
}
