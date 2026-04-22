import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EnquiryModal from "../components/EnquiryModal";

const DaiNamUniversity = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
    <Header />
    <div className="bg-gray-50 font-sans text-gray-900 min-h-screen">
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap');
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
          word-wrap: normal;
          white-space: nowrap;
          direction: ltr;
        }
        .material-symbols-filled {
          font-family: 'Material Symbols Outlined';
          font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          font-style: normal;
          display: inline-block;
          line-height: 1;
        }
        .glass-nav {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(12px);
        }
      `}</style>

      

      <main className="pb-24">

        {/* Hero Section */}
        <section className="relative px-6 py-12 md:py-20 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-bold uppercase tracking-widest mb-6">
                <span className="material-symbols-outlined text-sm">location_on</span>
                Hanoi, Vietnam
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold font-headline text-gray-900 tracking-tight mb-6 leading-tight">
                Dai Nam <br />
                <span className="text-red-800">University (DNU)</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-500 max-w-xl mb-10 leading-relaxed">
                Excellence in Medical Education at the heart of Vietnam's capital. A premier destination for
                international students pursuing a global career in medicine.
              </p>
              <div className="flex flex-wrap gap-4">
                <button type="button" onClick={() => setIsModalOpen(true)} className="bg-red-700 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:shadow-lg transition-all active:scale-95">
                  Apply Now
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                <button type="button" onClick={() => setIsModalOpen(true)} className="bg-yellow-100 text-yellow-800 px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:shadow-md transition-all active:scale-95">
                  Download Brochure
                  <span className="material-symbols-outlined">download</span>
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 relative mt-12 lg:mt-0">
              <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl relative">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQqcCilx8SJ6kiERbO1UbkDOryCiKW5ZFvtQgO6LndJeAFWRqGZm5CBIrTCMRRWCKHF5Cgna1-JiVXp0NlkSjjDSs9mJW4XKZJAJcHGy98Uy1vI7VYL3dhsTeU8kVqd4sPmtIyDgOdqYNOwXKAtZGwJ7qKzFwEzB68Fg4FFx0FezJvpIdDu7bePt9oXOuCle5gVc8gQBWcMnRUpCMBFJN-5COLJettRmlj6bil9nDIJbqgriE90Dzk3mcymo0pY-Fk6K690zsw0VU"
                  alt="Dai Nam University Campus"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 to-transparent"></div>
              </div>
              {/* Decorative Overlay Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-[200px] hidden md:block">
                <div className="text-3xl font-bold text-red-800 font-headline">$5,000</div>
                <div className="text-xs uppercase font-bold text-slate-500 tracking-wider">Annual Tuition Starts At</div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Education Bento Grid */}
        <section className="bg-gray-50 py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4 text-[#CC1B1B]">A Truly Global Education</h2>
                <p className="text-slate-500">
                  Tailored for the next generation of international medical practitioners, DNU provides a seamless
                  transition into the professional world.
                </p>
              </div>
              <div className="bg-teal-50 border border-teal-100 px-6 py-3 rounded-xl">
                <span className="text-teal-700 font-bold flex items-center gap-2">
                  <span className="material-symbols-filled">verified</span>
                  NMC RECOGNISED
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Feature 1 - English Medium */}
              <div className="md:col-span-2 bg-white p-8 rounded-xl shadow-sm border-l-4 border-red-700">
                <div className="flex items-start gap-6">
                  <div className="bg-red-50 p-4 rounded-full">
                    <span className="material-symbols-outlined text-red-700 text-3xl">translate</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-headline mb-3">100% English Medium</h3>
                    <p className="text-slate-500 leading-relaxed mb-6">
                      All medical programs for international students are conducted entirely in English. From lectures
                      and clinical rotations to assessments and textbooks, we ensure zero language barriers in your
                      academic journey.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-semibold text-slate-700">English Textbooks</span>
                      <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-semibold text-slate-700">Foreign Faculty</span>
                      <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-semibold text-slate-700">Global Standards</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 2 - 80% International */}
              <div className="bg-red-100 p-8 rounded-xl text-red-900 flex flex-col justify-between">
                <span className="material-symbols-outlined text-5xl opacity-50">public</span>
                <div>
                  <h3 className="text-4xl font-extrabold font-headline mb-2 tracking-tighter">80%</h3>
                  <p className="font-medium">International student body in Medical Sciences Program.</p>
                </div>
              </div>

              {/* Feature 3 - Affordable */}
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="mb-6">
                  <span className="material-symbols-outlined text-yellow-600 text-3xl">payments</span>
                </div>
                <h3 className="text-xl font-bold font-headline mb-2">Affordable Excellence</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  Premium medical education without the premium debt.
                </p>
                <div className="text-2xl font-bold text-red-800 font-headline">$5,000 – $6,500</div>
                <div className="text-xs text-slate-500 font-medium">Per academic year</div>
              </div>

              {/* Feature 4 - Clinical Exposure */}
              <div className="md:col-span-2 bg-white p-8 rounded-xl shadow-sm relative overflow-hidden">
                <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
                  <div className="w-full md:w-1/3">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjdNjs_TZzdJPTHyB9LVoyevobgK2tlkSkCCrywYx-f_07SM89kSa-vb4i_ANk2y-gz8kgqioMMX-X2nQWODJzt5Q5_7kSgMSnbz0lOWShLas0QIbsaEakCwX9FCJnJtPl-roLSx8gHTuKxtCh_XBWmfQvgtI75YgXZNmFh-WS8bEMsfRjhOTZh5JOwzA7zz8liPB94GqQqq1PVTyDab1nWV-5am4bjBuX6vK97_9u91hjJC09pz1nh96HOsGkoqcK8vtgpxZ2Eq8"
                      alt="Medical Students"
                      className="rounded-lg w-full h-48 object-cover"
                    />
                  </div>
                  <div className="w-full md:w-2/3">
                    <h3 className="text-xl font-bold font-headline mb-3">Clinical Exposure</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      DNU maintains partnerships with top-tier hospitals in Hanoi, offering students intensive
                      hands-on clinical training from the third year onwards.
                    </p>
                  </div>
                </div>
                <div className="absolute top-0 right-0 p-4 opacity-5">
                  <span className="material-symbols-outlined text-9xl">medical_services</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capital Advantage Section */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Images */}
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXok7xOs6Cu_m6AGJzXOR0IMdCL3Q8C0cB8A0F7Yq8NmfmuVbebgf4aRyNQP15JXDgHOK5qzO1H3RQSrSZ2g15pP1KgnmZbNkhxsMxPu6__EOQWwgd_l1YVArB8aABo8O1qlFq8WtBHt5bAGYBbUf4xCZdSXj3-IBcrodBrZKCEsDI6pWGwOa1PtZpy6NcmvA3MznM5sUsT_qYBv2Ix6CqwZ-RtQt_BwBo8G0fXS69qQ-EWg_OQ5MoA7dbABRhcfyvDdIkoGJuRHw"
                  alt="Hanoi Landscape"
                  className="rounded-xl w-full h-64 object-cover"
                />
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtdsvEsurCq63Thrfs4zBBldE2H5MFPR9fNYYlw2tyjdjkmZh6vxwgR1EUzL9cpZsyUwsF1WtuXOFe0XRWF9Acg-GWgIlbtSC8vM-5FzBQpLVQEQ9c8tKjZ2oIcAUEJS94hT-HeCk5ebMsGx44Oug8kasAbJjq5d79V0WA_oAitfvK_tpbWxo8mfkJzHfB_2XgQDOF0pwKwbPxEmYkVENwbfJGVtM2_-EKxWPAEWdODhiJ-JkE5gp-QSccAfINMTtzLopjLaZR5JE"
                  alt="Hanoi Culture"
                  className="rounded-xl w-full h-64 object-cover mt-8"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="order-1 lg:order-2">
              <span className="text-yellow-600 font-bold uppercase tracking-widest text-xs block mb-4">
                Location: Hanoi Capital
              </span>
              <h2 className="text-4xl font-bold font-headline mb-6 leading-tight text-[#CC1B1B]">
                The Capital Advantage: <br />Studying in the Heart of Vietnam
              </h2>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                Hanoi is not just a city; it's a living classroom. As the political and cultural capital, students
                benefit from the country's most advanced medical infrastructure and a vibrant international community.
              </p>
              <ul className="space-y-4">
                {[
                  {
                    title: "Safe & Welcoming",
                    desc: "Hanoi consistently ranks as one of the safest cities in Southeast Asia for students.",
                  },
                  {
                    title: "Low Cost of Living",
                    desc: "Modern lifestyle with affordable housing and world-renowned cuisine.",
                  },
                  {
                    title: "Connectivity",
                    desc: "Centrally located with an international airport connecting you to the world.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-red-800">check_circle</span>
                    <div>
                      <strong className="text-gray-900 block">{item.title}</strong>
                      <span className="text-slate-500 text-sm">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Admission Requirements */}
        <section className="bg-gray-50 py-20 px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="bg-red-800 px-8 py-10 text-white">
              <h2 className="text-3xl font-bold font-headline mb-2">Admission Requirements</h2>
              <p className="opacity-80">Streamlined process for international applicants to Dai Nam University.</p>
            </div>
            <div className="p-8 md:p-12 space-y-12">
              {/* Academic Record */}
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <h3 className="text-xl font-bold font-headline text-red-800 mb-2">Academic Record</h3>
                  <div className="h-1 w-12 bg-yellow-400 rounded-full"></div>
                </div>
                <div className="md:w-2/3">
                  <h4 className="font-bold mb-2">High School Certification</h4>
                  <p className="text-slate-500 leading-relaxed">
                    Applicants must have successfully completed 12th Grade (or equivalent) with a minimum of 50%
                    aggregate in Physics, Chemistry, and Biology.
                  </p>
                </div>
              </div>

              {/* Entrance Exams */}
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <h3 className="text-xl font-bold font-headline text-red-800 mb-2">Entrance Exams</h3>
                  <div className="h-1 w-12 bg-yellow-400 rounded-full"></div>
                </div>
                <div className="md:w-2/3">
                  <div className="bg-gray-100 p-6 rounded-xl border-l-4 border-yellow-400">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <span className="material-symbols-filled text-yellow-600">info</span>
                      For Indian Applicants
                    </h4>
                    <p className="text-slate-500 leading-relaxed">
                      Qualifying NEET (National Eligibility cum Entrance Test) marks are mandatory as per the
                      guidelines of the National Medical Commission (NMC).
                    </p>
                  </div>
                </div>
              </div>

              {/* Language */}
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <h3 className="text-xl font-bold font-headline text-red-800 mb-2">Language</h3>
                  <div className="h-1 w-12 bg-yellow-400 rounded-full"></div>
                </div>
                <div className="md:w-2/3">
                  <h4 className="font-bold mb-2">English Proficiency</h4>
                  <p className="text-slate-500 leading-relaxed">
                    Since the medium of instruction is 100% English, students must demonstrate proficiency. No
                    IELTS/TOEFL required if previous education was in English medium.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Full Width CTA Section */}
<section className="w-full bg-gradient-to-r from-red-50 via-yellow-50 to-white py-8 px-6">
  <div className="max-w-7xl mx-auto text-center">

    {/* Badge */}
    <span className="inline-block px-5 py-2 rounded-full bg-red-100 text-red-700 text-sm font-bold uppercase tracking-wider mb-3">
      Admissions Open 2026
    </span>

    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-extrabold font-headline text-gray-900 leading-tight mb-3">
      Start Your Medical Career <br />
      with <span className="text-[#CC1B1B]">Dai Nam University</span>
    </h2>

    {/* Subtext */}
    <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-6 text-justify md:text-center">
      Experience world-class medical education in Hanoi with affordable tuition,
      modern hospital training, and a globally recognized degree pathway for
      aspiring international doctors.
    </p>

    {/* Buttons */}
    <div className="flex flex-wrap justify-center gap-4">
      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        className="bg-[#CC1B1B] hover:bg-red-800 text-white px-8 py-4 rounded-xl font-bold shadow-lg transition-all duration-300"
      >
        Apply Now
      </button>

      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        className="border-2 border-[#CC1B1B] text-[#CC1B1B] hover:bg-red-50 px-8 py-4 rounded-xl font-bold transition-all duration-300"
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
};

export default DaiNamUniversity;