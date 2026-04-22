import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EnquiryModal from "../components/EnquiryModal";

const tailwindConfig = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
`;

function MaterialIcon({ name, className = "" }) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
    >
      {name}
    </span>
  );
}

export default function BUHMedical() {
  const [activeNav, setActiveNav] = useState("Overview");
  const [activeMobileNav, setActiveMobileNav] = useState("Overview");

  const navLinks = ["Overview", "Programs", "Hospital", "Apply"];

  const mobileNavItems = [
    { label: "Overview", icon: "info" },
    { label: "Programs", icon: "medical_services" },
    { label: "Hospital", icon: "local_hospital" },
    { label: "Apply", icon: "edit_note" },
  ];

  const stats = [
    {
      icon: "verified",
      iconBg: "bg-red-100",
      iconColor: "text-red-700",
      title: "Government Recognized",
      subtitle: "MoET & MoH Accredited",
    },
    {
      icon: "medical_services",
      iconBg: "bg-teal-100",
      iconColor: "text-teal-700",
      title: "Specialized Medical Focus",
      subtitle: "100% Dedicated to Healthcare",
    },
    {
      icon: "payments",
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-700",
      title: "Affordable Education",
      subtitle: "Low Cost of Living in Dak Lak",
    },
  ];

  const programs = [
    {
      icon: "stethoscope",
      title: "General Medicine",
      desc: "MBBS-equivalent comprehensive training in clinical medicine and surgery.",
      duration: "6 Years Program",
    },
    {
      icon: "medication",
      title: "Pharmacy",
      desc: "Focusing on pharmacological sciences, drug development, and patient care.",
      duration: "5 Years Program",
    },
    {
      icon: "emergency",
      title: "Nursing",
      desc: "Advanced nursing care, patient management, and specialized medical support.",
      duration: "4 Years Program",
    },
    {
      icon: "health_and_safety",
      title: "Preventive Medicine",
      desc: "Community health education, epidemiology, and disease prevention strategies.",
      duration: "6 Years Program",
    },
  ];

  const facilities = [
    {
      colSpan: "md:col-span-2 md:row-span-2",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDWvCD8gFv162ZLlQAsqEfScUc-3a1Z-R6eHa269_JSv1XLH86V8X-XL8AUeipxzypsMSD3HTa7r9-zULKgMXSlC3MdFLIQYfHglIQLiLUDnBFIX2eUrFtaV4gttOSIyP3iT5z_XKZ9DmZlgxcj9jdohuM90_OAym6OB8Zld4fnnLEy81kZHFigZJVeLsAP1hZxqWd0SYANTqsMXxHCMyXVBcdx90IGjLXGKgb4-lx1SChWNUDE6mse4P4a-PTPI28ioJmFVdHwu0",
      label: "Advanced Research Labs",
      labelSize: "text-xl",
      padding: "p-8",
    },
    {
      colSpan: "",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuADlnxtLxsDQZE1YtW2UeJqVXo4CVqBmRsZvs86AJclBvxt0uMyDGzEP9q4cJPdLj_qvaJ2B_t4glhNiG6_clS-71GwWdSicYnmVLTHvcttpDJNyFc67D2Y0XGkuOFbrNMudQpH_Jk4ZGenASJ6TyIt1kxnWnhgtUf21gqB78JScslY9sUhAamtO2QPdVr6htByomE4jDQedIkWmMY9aK-SUhNKIc04otu_Jb-UTODS7qR_eNI1vovkRfzE2_MIE787wQ5o7rfWXto",
      label: "Medical Digital Library",
      labelSize: "text-sm",
      padding: "p-4",
    },
    {
      colSpan: "",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6DalpRKj0ppLH-9Uj5_FnDbQKa39Z6_WGHQ-shulqbI1sGRqmeC3_q9uXCQdI3E_DBEhBkJS-Cm7tQjVP0NEL55Cdpvm86bLeUu95BzJPmMWGxDWsFw9xMKm1hj4w4wnAUYvK0MjFKTRmo250WaXNTetvLrZQq6eA2n5vNI9M_89xzb5V_CcN3zu5JTzVA-DB1ZbD5okEozj4miEWLhlsAODsaA2nSRfJueWPbiMNh_AfaG7fcy98rZeKkywlLC2RRT0ikg5m3cE",
      label: "Smart Lecture Halls",
      labelSize: "text-sm",
      padding: "p-4",
    },
    {
      colSpan: "md:col-span-2",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0tDoH0kzAx-lX6XE0C-Jy1Kfdx5MnokGMyjQBewoOQ5qNVErkwwx21WfFDCRN1MQB6gKlGb3U7QQa8Ydu5t5fwkvMIJVgj3ejqs5f1L4Haa5oHZH7y6WZBjQ4yVn3JQihg49kjmaTTrshnQarpC1ZX5upY78esbuElur0LjNagzvwlSCJlbhquKAooDyY9YIhAKmiKwhMo1WJA089IPBj2ETm-eTIw9Mr4t-EmMCqnyx6hFqwYk6xGe5sX4GMw0ErUKanToZ0Qb0",
      label: "Main Campus Infrastructure",
      labelSize: "text-lg",
      padding: "p-6",
    },
  ];

  const whyChoose = [
    {
      num: "1",
      title: "Specialized Focus",
      desc: "Deep institutional expertise dedicated entirely to the medical sciences.",
    },
    {
      num: "2",
      title: "Affordable Tuition",
      desc: "Premium education with a fee structure designed for accessibility.",
    },
    {
      num: "3",
      title: "Community Integration",
      desc: "Unique training focus on community healthcare and rural medicine needs.",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>

    <Header />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        .material-symbols-outlined {
          font-family: 'Material Symbols Outlined';
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          display: inline-block;
          line-height: 1;
          font-style: normal;
          letter-spacing: normal;
          text-transform: none;
          white-space: nowrap;
          word-wrap: normal;
          direction: ltr;
        }
        .font-headline { font-family: 'Plus Jakarta Sans', sans-serif; }
        .font-body, .font-label { font-family: 'Inter', sans-serif; }
        * { font-family: 'Inter', sans-serif; }
        h1, h2, h3, h4, .font-headline { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>

      <div className="bg-gray-50 text-gray-900 min-h-screen">

        

        <main className="pt-0 pb-24 md:pb-12">

          {/* Hero Section */}
          <section className="relative h-[751px] min-h-[600px] flex items-center overflow-hidden mt-0">
            <div className="absolute inset-0 z-0">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo_I6bDjEDzR9XEapqTuLczuR6ba5Raeu1CwvpvKN8OYcxnbDaSWd0y5qmOHGPuppzkVKfNtjzjlXIztZqqUfHhNS_13xrULGCsIfgpjAQqvgAnYpdbEL8dEjzywfGJXwKBNcaWYYoxf4bWdXfjifZjnCEL0ovYrj0FichM5aDGY5H6v06GoVLnC1QQYLsQ_90TQKRtjY5zxG_qVckFIZnGgxUPET-tPU1x0VhTyBVI57nBbtELiVcLcMHPYxUjOX_a25s8gcaFkw"
                alt="Modern medical university building"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/40 to-transparent"></div>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
              <div className="max-w-2xl">
                <span className="inline-block px-4 py-1.5 rounded-full bg-yellow-200 text-yellow-900 text-xs font-bold tracking-widest uppercase mb-6">
                  Established 2013
                </span>
                <h1 className="text-5xl md:text-7xl font-extrabold text-white font-headline leading-[1.1] mb-6">
                  Buon Ma Thuot Medical University
                </h1>
                <p className="text-xl text-gray-200 font-light leading-relaxed mb-8 border-l-4 border-red-600 pl-6 text-justify">
                  A Premier Specialized Medical Institution in the Central Highlands of Vietnam. Shaping the future of healthcare through excellence in education.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button type="button" onClick={() => setIsModalOpen(true)} className="bg-red-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:scale-[1.02] transition-transform active:scale-95 shadow-xl shadow-red-900/20">
                    Apply for Admission <MaterialIcon name="arrow_forward" />
                  </button>
                  <button type="button" onClick={() => setIsModalOpen(true)} className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-colors">
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Stats */}
          <section className="relative -mt-16 z-20 max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.title}
                  className="bg-white p-8 rounded-2xl flex items-center gap-6 shadow-2xl shadow-black/5"
                >
                  <div className={`w-14 h-14 rounded-xl ${stat.iconBg} flex items-center justify-center ${stat.iconColor}`}>
                    <MaterialIcon name={stat.icon} className="text-3xl" />
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-gray-900 text-lg">{stat.title}</h4>
                    <p className="text-gray-500 text-sm">{stat.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* About Section */}
          <section className="py-24 max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-headline font-extrabold text-[#CC1B1B] mb-6 ">
                  Nurturing Excellence Since 2013
                </h2>
                <p className="text-lg text-gray-500 leading-relaxed mb-6 text-justify">
                  Established in 2013, Buon Ma Thuot Medical University (BUH) has rapidly emerged as a vital pillar of healthcare education in Dak Lak province. As a specialized institution, we focus exclusively on training high-quality medical professionals tailored to meet the growing health needs of the Central Highlands.
                </p>
                <p className="text-lg text-gray-500 leading-relaxed text-justify">
                  Our curriculum integrates rigorous academic theory with intensive clinical practice, ensuring our graduates are not only knowledgeable but clinically proficient and compassionate healers.
                </p>
              </div>
              <div className="md:w-1/2 grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden h-64">
                  <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmmZzCIJX70hCwnVmwC-v36ZP1AokF3rdsZ220XwAA8cofEYHF-hr39sbhstgoQ1CH_oa2ey1QUqgCUKZHHg7CxsGgRqFB9--tNy5y3Z0CJIBtXPLgAfc-s7hd9kg6SwwmXHx_29cAq8OnUlLF_vkqwrjBDQN-5w1YOUOnuYnt9CqQTMZaZTRnA3JeeCtQDGEIq8gClX8TquCBzx4VxfutKpb1LFY5NltcnStPxd0ZYRxsgUo1i3ihUdqmrSXvA6q0nPxzkST6A-U"
                    alt="Medical students in white coats"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-64 mt-8">
                  <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8PUYqGaomE6XUsnVFgccxX93EgOEv9SxhT9pUXtCZIDDYfAyPHCJesKmKUKRnQtkAjGDZpuJuji8D-YgsQlm9NDwJp1mW9oRleS3kPnAYlgs5XycetVjO3_L5ecQHf4zROYLgNOQrlnDyVgb1bTmnGU4X-pz52UC0hYa-wSGzZnBLzIjkM1OTZw5lbiEUR4SdP_bi4LAwNiw2PouYMRGVK_WIEOU0eDzEvH6agne5Vo1jf1ODw2FFmRby4XYh9ge2Nuj8KWeZWss"
                    alt="Medical students at graduation"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Medical Programs */}
          <section className="py-24 bg-gray-100">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-headline font-extrabold text-[#CC1B1B] mb-4">Academic Programs</h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                  Diverse healthcare specializations designed to meet international medical standards.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {programs.map((prog) => (
                  <div
                    key={prog.title}
                    className="bg-white p-8 rounded-2xl group hover:bg-red-700 transition-colors duration-300"
                  >
                    <MaterialIcon
                      name={prog.icon}
                      className="text-red-700 group-hover:text-white text-4xl mb-6 block"
                    />
                    <h3 className="font-headline font-bold text-xl mb-4 text-gray-900 group-hover:text-white">
                      {prog.title}
                    </h3>
                    <p className="text-sm text-gray-500 group-hover:text-white/80 leading-relaxed">
                      {prog.desc}
                    </p>
                    
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Clinical Power */}
          <section className="py-24 max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 rounded-3xl overflow-hidden shadow-2xl relative group">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyb47JuYq-yfjbDozPiL40gl6R1R5QtY4zaLlUs_fJQ_FGRFvfos3CtPlm8hNVfPz4p1PC2Q2supeK0T-91x5-RlVgrcK3O-KV0kGfLRbegYIf7txtlA-1l7gAWZIq8BboltoXGo_c45_pdiid6gdJgsLZ2_ScXN1clHodO0o0u6N9zjsBRXgopNevq7Aa1t0bkR2M19xRZY9Z2J9ha4MyW249w6xFbInqAg57DiycJebNH1SPrlQGIKQ44YiHlTl2O0_RHt_-wLI"
                  alt="Clinical training room"
                />
                <div className="absolute inset-0 bg-red-700/20 mix-blend-overlay"></div>
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-2 text-red-700 font-bold tracking-tighter uppercase mb-4">
                  <span className="w-8 h-[2px] bg-red-700 inline-block"></span> Clinical Training
                </div>
                <h2 className="text-3xl md:text-4xl font-headline font-extrabold text-gray-900 mb-6">
                  Hospital Exposure from Day One
                </h2>
                <p className="text-lg text-gray-500 leading-relaxed mb-8 text-justify">
                  Our students benefit from intensive clinical rotations at regional general hospitals and specialized medical centers in Dak Lak. This exposure provides real-world experience with diverse patient cases and state-of-the-art diagnostic equipment.
                </p>
                <ul className="space-y-4">
                  {[
                    "Affiliated Regional General Hospitals",
                    "Direct Patient Interaction Opportunities",
                    "Modern Clinical Simulation Centers",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-4 text-gray-900 font-medium">
                      <MaterialIcon name="check_circle" className="text-red-700" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Academic & Facilities Grid */}
          <section className="py-24 bg-gray-200/30">
            <div className="max-w-7xl mx-auto px-6">
              <div className="mb-16">
                <h2 className="text-3xl font-headline font-extrabold text-[#CC1B1B] mb-2">
                  Modern Academic Infrastructure
                </h2>
                <p className="text-gray-500">World-class facilities fueling research and medical mastery.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[600px]">
                {facilities.map((fac, idx) => (
                  <div
                    key={idx}
                    className={`${fac.colSpan} rounded-2xl overflow-hidden relative group`}
                  >
                    <img
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      src={fac.src}
                      alt={fac.label}
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent">
                      <div className={fac.padding}>
                        <h4 className={`text-white font-headline font-bold ${fac.labelSize}`}>
                          {fac.label}
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Location Advantage */}
          <section className="py-24 max-w-7xl mx-auto px-6">
            <div className="bg-white rounded-[32px] overflow-hidden shadow-2xl flex flex-col md:flex-row">
              <div className="md:w-1/2 p-12 md:p-20 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-headline font-extrabold text-[#CC1B1B] mb-6">
                  The Serenity of Buon Ma Thuot
                </h2>
                <p className="text-lg text-gray-500 leading-relaxed mb-8 text-justify">
                  Located in the "Coffee Capital" of Vietnam, our university offers a peaceful, green environment conducive to focused study. Enjoy a significantly lower cost of living compared to Ho Chi Minh City while experiencing the rich culture of the Central Highlands.
                </p>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-100">
                  <MaterialIcon name="location_on" className="text-red-700 text-3xl" />
                  <div className="text-sm font-medium">Dak Lak Province, Central Highlands, Vietnam</div>
                </div>
              </div>
              <div className="md:w-1/2 min-h-[400px]">
                <img
                  className="w-full h-full object-cover"
                  src="https://statics.vinpearl.com/buon-ma-thuot-vietnam-03_1696091016.jpg"
                  alt="Scenic view of Buon Ma Thuot"
                />
              </div>
            </div>
          </section>

          {/* Why Choose & Disclaimer */}
          <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-headline font-extrabold text-[#CC1B1B] mb-8">Why Choose BUH?</h2>
              <div className="space-y-6">
                {whyChoose.map((item) => (
                  <div key={item.num} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-700 font-bold">
                      {item.num}
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{item.title}</h4>
                      <p className="text-black-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Important Disclaimer */}
            <div className="bg-red-50 border-2 border-red-100 p-10 rounded-[2rem] relative overflow-hidden">
              <div className="absolute -top-6 -right-6 text-red-100">
                <MaterialIcon name="gavel" className="text-[120px]" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 text-red-700 font-bold mb-6">
                  <MaterialIcon name="error" />
                  <h3 className="font-headline text-xl uppercase tracking-wider">Important Disclaimer</h3>
                </div>
                <p className="text-gray-900 leading-relaxed mb-6 font-medium">For International MBBS Aspirants:</p>
                <ul className="space-y-4 text-black-500 text-sm">
                  {[
                    "Verify latest NMC (India) and WHO eligibility guidelines before enrollment.",
                    "Confirm English-medium instruction tracks specifically for international students.",
                    "Degree recognition is subject to regulatory changes in home countries.",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-red-700 font-bold">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>








          {/* New Full Width CTA Section */}
<section className="w-full bg-gradient-to-r from-red-50 via-white to-pink-50 py-20 px-6">
  <div className="max-w-7xl mx-auto text-center">
    
    <span className="inline-block px-5 py-2 rounded-full bg-red-100 text-red-700 font-semibold text-sm uppercase tracking-wider mb-6">
      Begin Your Medical Journey
    </span>

    <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-gray-900 leading-tight mb-6">
      Shape Your Future in Healthcare with BUH
    </h2>

    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10 text-justify md:text-center">
      Join a globally focused medical university offering affordable tuition, 
      modern clinical training, and a peaceful learning environment in Vietnam.
    </p>

    <div className="flex flex-wrap justify-center gap-4">
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-[#CC1B1B] hover:bg-red-800 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition-all duration-300"
      >
        Apply Now
      </button>

      <button
        onClick={() => setIsModalOpen(true)}
        className="border-2 border-[#CC1B1B] text-[#CC1B1B] hover:bg-red-50 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
      >
        Get Free Counselling
      </button>
    </div>

  </div>
</section>




          
        </main>

        

        
      </div>


      <EnquiryModal
                      isOpen={isModalOpen}
                      onClose={() => setIsModalOpen(false)}
                    />

       
       
      <Footer />
    </>
  );
}