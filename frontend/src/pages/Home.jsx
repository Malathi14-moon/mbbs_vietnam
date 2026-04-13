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
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative w-full h-full">
              <img
                src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1600&q=80"
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
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative w-full h-full">
              <img
                src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?w=1600&q=80"
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
            </div>
          </SwiperSlide>
        </Swiper>





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
