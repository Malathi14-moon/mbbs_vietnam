import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import EnquiryModal from "../components/EnquiryModal";
import PhanBanner from "../assets/phan-banner.webp";


const PhanChauTrinhUniversity = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>

    <Header />


    <div className="bg-gray-50 text-gray-900 font-sans min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        .font-headline { font-family: 'Plus Jakarta Sans', sans-serif; }
        .font-body { font-family: 'Inter', sans-serif; }
        .material-symbols-outlined {
          font-family: 'Material Symbols Outlined';
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          font-style: normal;
          display: inline-block;
          line-height: 1;
          text-transform: none;
          letter-spacing: normal;
          white-space: nowrap;
        }
        .material-symbols-filled {
          font-family: 'Material Symbols Outlined';
          font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          font-style: normal;
          display: inline-block;
          line-height: 1;
        }
        .glass-card {
          backdrop-filter: blur(12px);
          background: rgba(255, 255, 255, 0.4);
        }
      `}</style>

      
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[751px] flex items-center overflow-hidden bg-gray-50">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src={PhanBanner}
              alt="PCTU Campus"
              className="w-full h-full object-cover opacity-90"
            />
          {/*  <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-gray-50/60 to-transparent"></div> */}
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 backdrop-blur-md rounded-full border border-teal-100">
                <span className="material-symbols-filled text-teal-700 text-sm">verified</span>
                <span className="text-xs font-bold text-teal-700 tracking-widest uppercase">NMC RECOGNISED</span>
              </div>
              <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight">
                Phan Chau Trinh <br />
                <span className="text-red-800">University</span>
              </h1>
            {/*  <p className="text-xl text-[#111827] max-w-lg leading-relaxed">
                Pioneering the Hospital-University model in Central Vietnam. Excellence in medical education with
                USMLE-standard curriculum.
              </p> */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button type="button" onClick={() => setIsModalOpen(true)}  className="bg-red-700 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:shadow-lg transition-all active:scale-95">
                  Apply Now <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                <button type="button" onClick={() => setIsModalOpen(true)} className="bg-yellow-100 text-yellow-800 px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:shadow-lg transition-all active:scale-95">
                  Download Brochure <span className="material-symbols-outlined">download</span>
                </button>
              </div>
            </div>

            {/* Right Info Card */}
            <div className="hidden md:block">
              <div className="glass-card p-8 rounded-3xl border border-white/50 shadow-2xl space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-red-800 font-bold text-sm uppercase tracking-widest mb-1">Standard Training</p>
                    <h3 className="font-headline text-3xl font-bold">USMLE Oriented</h3>
                  </div>
                  <span className="material-symbols-outlined text-4xl text-red-800">clinical_notes</span>
                </div>
                <div className="h-px bg-gray-200"></div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/50 rounded-2xl">
                    <p className="text-xs text-slate-500 font-medium">Annual Tuition</p>
                    <p className="text-2xl font-bold text-gray-900">$5,000 – $6k</p>
                  </div>
                  <div className="p-4 bg-white/50 rounded-2xl">
                    <p className="text-xs text-slate-500 font-medium">Location</p>
                    <p className="text-2xl font-bold text-gray-900">Da Nang</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights Bento Grid */}
        <section className="py-24 bg-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16 text-center">
              <h2 className="font-headline text-4xl font-bold mb-4 text-[#CC1B1B]">Core Program Highlights</h2>
              <div className="h-1.5 w-24  mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Clinical Training Network */}
              <div className="md:col-span-8 bg-white p-8 rounded-[2rem] flex flex-col justify-between overflow-hidden relative">
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-red-800">apartment</span>
                  </div>
                  <h3 className="text-3xl font-headline font-bold mb-4">Clinical Training Network</h3>
                  <p className="text-slate-500 max-w-md text-lg leading-relaxed text-justify">
                    Access to 9 affiliated hospitals with over 1500+ beds for immersive clinical rotations and
                    hands-on patient care experience.
                  </p>
                </div>
                <div className="mt-8 flex gap-4 overflow-x-auto pb-4">
                  {["TAM TRI GENERAL HOSPITAL", "DA NANG C HOSPITAL", "QUANG NAM GENERAL"].map((h) => (
                    <span key={h} className="px-4 py-2 bg-gray-100 rounded-full text-xs font-bold whitespace-nowrap">
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* 100% English */}
              <div className="md:col-span-4 bg-red-100 p-8 rounded-[2rem] text-red-900 flex flex-col justify-center items-center text-center">
                <div className="w-20 h-20 bg-white/40 rounded-full flex items-center justify-center mb-6">
                  <span className="material-symbols-filled text-4xl">translate</span>
                </div>
                <h3 className="text-4xl font-headline font-extrabold mb-2">100%</h3>
                <p className="text-sm tracking-widest uppercase font-bold opacity-80">English Medium Instruction</p>
              </div>

              {/* Hospital-University Model */}
              <div className="md:col-span-4 bg-yellow-100 p-8 rounded-[2rem] text-yellow-900">
                <span className="material-symbols-outlined text-4xl mb-4">medical_services</span>
                <h3 className="text-2xl font-headline font-bold mb-3">Hospital-University Integrated Model</h3>
                <p className="text-sm leading-relaxed opacity-90 text-justify">
                  Our unique curriculum integrates hospital rounds from year one, ensuring medical theory is
                  immediately applicable in clinical settings.
                </p>
              </div>

              {/* USMLE Support */}
              <div className="md:col-span-8 bg-white p-8 rounded-[2rem] border border-gray-100 flex items-center gap-8">
                <div className="hidden sm:block w-1/3 h-full rounded-2xl overflow-hidden">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgnmnlYv3AdhY0OSIwQdUlga-QhpK1YO9XDitZqgbl3TcatTAqoy6bTXUF7tQr4w4ssjyzCeX-XuBiT51fByqYtJ_PvAjG393Qp36UsfjG8EesOg8OhA51cI-uf5niLjKsdsJIYhL-AastrBKR-rsnIYgdy3zYBIk8wYL4p9ZzOfaSjI54Cy_vvvIQVW52_Lv7relNgWLYAZcgIN-Oq3krOrFnwTo7QxpwZBQ7nkfsLKrhTJmMBycDWXwnVelkiyZevT-9PyuZcvw"
                    alt="USMLE Study"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-headline font-bold mb-4">USMLE Step 1 &amp; 2 Support</h3>
                  <p className="text-slate-500 mb-6 text-justify">
                    Specialized coaching and resource access for students aiming for US Residency through the USMLE
                    pathway.
                  </p>
                  <div className="flex items-center gap-2 text-red-800 font-bold">
                    <span className="material-symbols-outlined">trending_up</span>
                    <span>High Success Rate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Post-Grad Path Section */}
        <section className="py-24 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
            {/* Image */}
            <div className="w-full md:w-1/2 relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden rotate-3 shadow-2xl">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBF-M8mYxoLCi_soshIpJPLR3_HIruvyTzYFe-P6-sbwEWoLOiZuPOX760q3cZRA4ShRizsCc7xizhoC17-Tl-e7PwUDpjz_qSanA3t1euONQHNwIov9HWCkmATlUHDf00KA0slBkWVxLek2YuUc4xzIoiPCJ7wcdPVB0HdA6-h0kjd-PwCHP3ZUKcHDioZO1Kw32ubEtlMH15jHyiF2c8fzmXn11wTPQoI8LHt0yBC5vqq32RANQKSu6l10eIZdR4QLu0YDEm7KgU"
                  alt="Doctors"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 max-w-xs -rotate-3">
                <p className="text-red-800 font-bold text-lg mb-2">Global Career Path</p>
                <p className="text-sm text-slate-500 italic">
                  "The curriculum is designed for those who look beyond borders. USMLE readiness is our DNA."
                </p>
              </div>
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2 space-y-8">
              <h2 className="font-headline text-4xl font-bold text-gray-900">
                Your Gateway to <br />
                <span className="text-red-800">US Medical Practice</span>
              </h2>
              <div className="space-y-6">
                {[
                  {
                    n: "1",
                    title: "Standardised Curriculum",
                    desc: "Courses mapped to USMLE requirements, ensuring students are ready for Step exams early in their degree.",
                  },
                  {
                    n: "2",
                    title: "International Faculty",
                    desc: "Classes led by experienced professionals familiar with international licensing standards.",
                  },
                  {
                    n: "3",
                    title: "US Electives Support",
                    desc: "Assistance in securing clinical electives in the United States to build competitive residency profiles.",
                  },
                ].map((item) => (
                  <div key={item.n} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-800 font-bold">
                      {item.n}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Life at PCTU */}
        <section className="py-24 bg-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <h2 className="font-headline text-4xl font-bold mb-4 text-[#CC1B1B]">Life at PCTU</h2>
                <p className="text-slate-500 max-w-xl">
                  A home away from home, specifically tailored for international students from India and across the
                  globe.
                </p>
              </div>
              <div className="flex gap-2">
                <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-red-700 hover:text-white transition-all">
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-red-700 hover:text-white transition-all">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Hostel */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="h-64 overflow-hidden">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAE1C-AYGCUz7uD0e8pmF1Det2njy-1gLS6eMGXYdyR1rmCnkrQQo1nn5fLY3PG9eOS6g34Q5zRNI3cEoCaXU-fK8No9l8sRJ8GpaeDy3uEkwfVj9gUBfQwx2DiewmLg8ugu55fQyIjyRMLPCQVG_GtLj-6L5sX_eDC6d3g8_R5ooRoc7NUVuaJzMLr2yGiw8k2ooEmVZx6zXxVKMlwJXXRh7FvRMqk1uMUXHF3FtEPdIxDSSuNBjTgPXJwTgxzTsL0rKU729OqcLo"
                    alt="Hostel"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Modern Hostels</h3>
                  <p className="text-sm text-slate-500 text-justify">
                    Safe, secure, and fully-equipped residency halls with high-speed internet and quiet study zones.
                  </p>
                </div>
              </div>

              {/* Indian Food */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="h-64 overflow-hidden">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTYMTtXow8DP_p2WwJG_Llak8R-mZgv8lzf3anVlPncz2as2_eR_EJHMS2ZwOC12tI8zQT_PNdnrO60rNTe3nxksQDvpZyyLbf3jqXkFjwUie0Q2HIKoA-L02748VsGqNn_-sU_cGQhgNl_FDomesQhNYVy7xrk3lCYUwN4GCjGa3Elr79Ro_yubLB8uQBY_eJE95m4lbzfxMad9Uydvye-QCeR9nVwmwleMcUz4mdw1F48UiLlunFQNcuZbVMnmOpEE_jZl6juz4"
                    alt="Indian Cuisine"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold">Indian Cuisine</h3>
                    <span className="bg-yellow-100 text-yellow-800 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-widest">
                      Speciality
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 text-justify">
                    Dedicated kitchen staff serving authentic Indian meals (Veg &amp; Non-Veg) daily in the university
                    mess.
                  </p>
                </div>
              </div>

              {/* Da Nang */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="h-64 overflow-hidden">
                  <img
                    src="https://cdn.prod.website-files.com/66fab24d6dde4d79b3b50865/6863878982a840fdbfea4248_Golden%20Bridge%20Da%20Nang.webp"
                    alt="Da Nang"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Da Nang Vicinity</h3>
                  <p className="text-sm text-slate-500 text-justify">
                    Minutes away from Da Nang's beautiful beaches and cultural heritage sites, offering a perfect
                    balance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* CTA Section */}
<section className="w-full py-12 bg-gradient-to-r from-[#fff7f7] via-[#ffffff] to-[#fff1f1] overflow-hidden relative">
  {/* Decorative Shapes */}
  <div className="absolute -top-20 -left-20 w-72 h-72 bg-red-100 rounded-full blur-3xl"></div>
  <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-yellow-100 rounded-full blur-3xl"></div>

  <div className="relative z-10 w-full px-6 md:px-12 text-center">
    {/* Badge */}
    <span className="inline-block px-5 py-2 rounded-full bg-red-50 border border-red-100 text-red-700 text-sm font-bold uppercase tracking-widest mb-4">
      Admissions Open 2026
    </span>

    {/* Heading */}
    <h2 className="font-headline text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-gray-900">
      Begin Your Journey at <br />
      <span className="text-[#CC1B1B]">Phan Chau Trinh University</span>
    </h2>

    {/* Description */}
    <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
      Join one of Vietnam's most progressive medical universities with
      integrated hospital training, global curriculum standards, and
      exceptional student support.
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        className="bg-[#CC1B1B] text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-md"
      >
        Apply Now
      </button>

      <a
        href="https://pctu.edu.vn/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="border border-gray-300 bg-white text-gray-800 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-sm">
          Visit University
        </button>
      </a>
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
};

export default PhanChauTrinhUniversity;