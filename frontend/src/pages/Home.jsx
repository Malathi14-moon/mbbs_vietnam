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
    src="https://wallpapers.com/images/hd/mbbs-hexagon-symbols-1r5fp8l34h0h0qrw.jpg"
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









        
      </section>


      

      </div>

      <CTA />

      <Footer />

      </>
    
  );
}
