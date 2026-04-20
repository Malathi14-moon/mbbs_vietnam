import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EnquiryModal from "../components/EnquiryModal";
import CanTho from "../assets/canTho.webp";
import NamCan from "../assets/namCan.webp";
import Phan from "../assets/phan.webp";
import Students from "../assets/students.webp";
const universities = [
  {
    name: "Can Tho University",
    location: "Can Tho City, Vietnam",
    est: "Est. 1979",
    fees: "$4,500 / Yr",
    course: "6 Years",
    desc: "A premier public university known for its advanced research facilities and extensive clinical training network.",
    img: CanTho,
  },
  {
    name: "Nam Can Tho University",
    location: "Can Tho, Vietnam",
    est: "Est. 2013",
    fees: "$4,200 / Yr",
    course: "6 Years",
    desc: "Offering modern infrastructure and a curriculum aligned with global healthcare standards and technology.",
    img: NamCan,
  },

  {
    name: "Phan Chau Trinh University",
    location: "Hoi An, Quang Nam, Vietnam",
    est: "Est. 2008",
    fees: "$4,000 / Yr",
    course: "6 Years",
    desc: "A growing private university offering MBBS with a focus on community medicine and modern clinical training facilities in central Vietnam.",
    img: Phan,
  },
  {
    name: "Buon Ma Thuot Medical University",
    location: "Buon Ma Thuot, Dak Lak, Vietnam",
    est: "Est. 2007",
    fees: "$3,800 / Yr",
    course: "6 Years",
    desc: "Located in the Central Highlands of Vietnam, this university provides quality medical education with strong regional hospital affiliations for clinical exposure.",
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop",
  },
  {
    name: "Dai Nam University",
    location: "Hanoi, Vietnam",
    est: "Est. 2008",
    fees: "$4,100 / Yr",
    course: "6 Years",
    desc: "A well-established private university in Hanoi offering an English-medium MBBS program with state-of-the-art laboratories and hospital tie-ups across the capital.",
    img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&auto=format&fit=crop",
  },
];

const steps = [
  { n: 1, title: "Registration", desc: "Submit your documents and registration form to start the process.", active: true },
  { n: 2, title: "Letter of Admission", desc: "University reviews your profile and issues the official admission letter." },
  { n: 3, title: "Visa Processing", desc: "We assist with the complete student visa documentation and interview prep." },
  { n: 4, title: "Documentation", desc: "Legalization and translation of academic transcripts and medical reports." },
  { n: 5, title: "Departure", desc: "Pack your bags! Our team will assist with flight booking and airport pickup." },
];




export default function MbbsVietnam() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const onEnquire = () => setIsModalOpen(true);

  return (

    <>

    <Header />
    <div className="bg-[#f8f9fa] text-[#191c1d] font-[Work_Sans] selection:bg-[#fdcc22] selection:text-[#6e5700]">

      {/* Tailwind + Google Fonts (inject via index.html normally) */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&family=Work+Sans:wght@300;400;500;600&family=Inter:wght@400;500;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        .font-headline { font-family: 'Manrope', sans-serif; }
        .font-body     { font-family: 'Work Sans', sans-serif; }
        .font-label    { font-family: 'Inter', sans-serif; }
        .material-symbols-outlined { font-family: 'Material Symbols Outlined'; font-variation-settings: 'FILL' 0,'wght' 400,'GRAD' 0,'opsz' 24; }
        .hero-gradient { background: linear-gradient(135deg, #a4000b 0%, #cc1b1b 100%); }
        .editorial-shadow { box-shadow: 0px 10px 30px rgba(25,28,29,0.05); }
        .step-circle:hover { background: #a4000b !important; color: #fff !important; border-color: #a4000b !important; }
      `}</style>

      {/* ── Header ── */}
      

      <main className="pt-20">

        {/* ── Hero ── */}
        <section className="relative min-h-[751px] flex items-center overflow-hidden bg-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className="z-10 py-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#fdcc22] text-[#6e5700] font-label text-xs font-bold uppercase tracking-widest mb-6">
                World Class Medical Education
              </span>
              <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-[#191c1d] leading-[1.1] tracking-tight mb-6">
                Study MBBS in <span className="text-[#a4000b]">Vietnam</span>
              </h1>
              <p className="font-body text-lg md:text-xl text-[#5c403c] leading-relaxed max-w-xl mb-10 text-justify">
                Experience a globally recognized medical curriculum, English-medium instructions, and high-quality clinical exposure at a fraction of the cost.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button type="button" onClick={() => setIsModalOpen(true)} className="hero-gradient text-white px-8 py-4 rounded-xl font-headline font-bold text-lg transition-transform active:scale-95 flex items-center justify-center gap-2">
                  Apply Now
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                <button type="button" onClick={() => setIsModalOpen(true)} className="bg-[#e1e3e4] text-[#191c1d] px-8 py-4 rounded-xl font-headline font-bold text-lg transition-transform active:scale-95">
                  Download Brochure
                </button>
              </div>
              <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuA3qReGuRt-f2N5eZfz2oZdM0ugb7bfQxogtflQyGrxoWr3wHuluvuzYn0HZxUzZqMol8Si73U0dqCybdYLG-BoWNeBHL9nUDvbXqJis2yLsv5PKQyVMQWpKOf8ODwVEKmeSwUpyAR7WN7oS-2XVI_Fcg4S2UM15sCi7VrQy0TMinFlbYfZ4jCAQTESnuzO2Hiz-bWCuxyGYsYOjBZhZWibwYa3P_m38_XdKZm8nEkiehMQ_0RsEtqScc_YYcy1EZsjriUF5R_v5WE",
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuA3yBqgJzeLIIda0zqfBQZ0aXEvi4suphNVRi3KKn3ondcl2K75XQwHrjuQZoZ52_YnxzWiAZ8YkOWh1I2sVikS9KAj_oXoiP2u-sakMyvPHudLvRH5ZIAADlVShtRlN80TiH2EA2fd2JLujBeQ7IIXhoTwZ1XaKWC6LHf0WcQYUsQZVaUBZgQ2yyrclVC3MInTY6rMg0tggMO2JhWZxRr57ZoVvbDC_v7ZMSTgekU6LWR5o6gUrJB95f123-Y3jHvKHixaWawJ5oE",
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuBgvMzf0Yo4HZEItIbF0dMNPI17-iqHfL5_ctpnInG4NGBv4Hs5V__5K2wSXs-KpWuxojM2t118iJst61Ok4ZQ00KUJ5vXVj9YOl2qxxI0M68GCZAWGWzfITy6w3XJ9P6xeWF38yn0Oj8nfTa7StpLqE_I4ql_rT2zblny8pYnnSFUF9nbZqk9GfCDAdwWvRjGo5XlaWHIYKdrtD3DoupzwSq_8y_B1dL_i7e24rn8kiGBMDzezTRUFZSzOhRxybi4LW9HF6dN1LNU",
                  ].map((src, i) => (
                    <img key={i} src={src} alt="student" className="w-12 h-12 rounded-full border-4 border-[#f8f9fa] object-cover" />
                  ))}
                </div>
                <p className="font-label text-sm text-[#5c403c]">
                  <span className="font-bold text-[#191c1d]">500+ Students</span> applied this session
                </p>
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="absolute inset-0 bg-[#fdcc22]/20 rounded-[2rem] rotate-3 -z-10 translate-x-4" />
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMA7imJy-nlZQolZUnPDAMjaDtvmbq06Ng6qK37KGM8khwHWat_nDROGrYWKkftusgNvIiujxfJBW7QBVWfoD9a2FqFLZH-5PlX6kL8sVnNZixS6dSmkvB90nIOE6uKhcTdH56KrBNuE2jWfRtkzOpunUbY0fr-MggBWb47QuDRQgnDQk_7-2uxFgcDRKof97PiXVmLwmPwBBA5TjS0_RcMrOnnVFqF4zvYtZQ3WHvh5Eg7XMkq8mrbzL-gPMrsYiGwPZq6ERWvAI"
                alt="Medical university"
                className="rounded-[2rem] editorial-shadow w-full h-[600px] object-cover"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl editorial-shadow max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-[#745b00]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  <span className="font-headline font-bold text-[#191c1d]">WHO Recognized</span>
                </div>
                <p className="text-xs font-body text-[#5c403c]">The degree is globally valid, including MCI/NMC, ECFMG (USA), and GMC (UK).</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Why Vietnam ── */}
        <section className="py-24 bg-[#f3f4f5]" id="why">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-headline text-4xl font-extrabold text-[#CC1B1B] mb-4">Why Vietnam for MBBS?</h2>
              <p className="font-body text-lg text-[#5c403c] max-w-2xl mx-auto">Discover the strategic advantages of pursuing your medical degree in the heart of Southeast Asia.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 bg-white p-10 rounded-3xl editorial-shadow border border-[#e6bdb8]/15 flex flex-col justify-between">
                <div>
                  <span className="material-symbols-outlined text-[#a4000b] text-4xl mb-6 block">monetization_on</span>
                  <h3 className="font-headline text-2xl font-bold text-[#191c1d] mb-4">Unbeatable Affordability</h3>
                  <p className="font-body text-[#5c403c] text-lg text-justify">Vietnam offers one of the most cost-effective MBBS programs globally. Tuition fees and cost of living are significantly lower than in Western nations and private colleges in India, without compromising on clinical quality.</p>
                </div>
                <div className="mt-8 pt-8 border-t border-[#e7e8e9] flex items-center justify-between">
                  <span className="font-label text-sm font-bold text-[#a4000b]">60% LOWER COSTS</span>
                  <span className="text-xs font-label text-[#5c403c]">COMPARED TO PRIVATE INDIAN COLLEGES</span>
                </div>
              </div>
              <div className="bg-[#cc1b1b] text-white p-10 rounded-3xl editorial-shadow">
                <span className="material-symbols-outlined text-4xl mb-6 block">translate</span>
                <h3 className="font-headline text-2xl font-bold mb-4">100% English Medium</h3>
                <p className="font-body opacity-90 text-justify">No language barrier. All medical courses, clinical rotations, and examinations are conducted entirely in English by experienced international faculty.</p>
              </div>
              <div className="bg-white p-10 rounded-3xl editorial-shadow border border-[#e6bdb8]/15">
                <span className="material-symbols-outlined text-[#745b00] text-4xl mb-6 block">health_and_safety</span>
                <h3 className="font-headline text-2xl font-bold text-[#191c1d] mb-4">Safety &amp; Culture</h3>
                <p className="font-body text-[#5c403c] text-justify">Vietnam is consistently ranked as one of the safest countries in the world for international students, offering a welcoming culture and vibrant lifestyle.</p>
              </div>
              <div className="md:col-span-2 bg-white p-10 rounded-3xl editorial-shadow border border-[#e6bdb8]/15 flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <span className="material-symbols-outlined text-[#a4000b] text-4xl mb-6 block">public</span>
                  <h3 className="font-headline text-2xl font-bold text-[#191c1d] mb-4">WHO &amp; WDOMS Recognized</h3>
                  <p className="font-body text-[#5c403c] text-justify">Universities are listed in the World Directory of Medical Schools and recognized by the World Health Organization, ensuring global eligibility for licensing exams.</p>
                </div>
                <div className="w-full md:w-64 h-48 bg-[#f8f9fa] rounded-2xl flex items-center justify-center p-6 text-center">
                  <p className="font-headline font-black text-[#a4000b] text-3xl">GLOBAL STANDARDS</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Eligibility ── */}
        <section className="py-24 bg-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-headline text-4xl font-extrabold text-[#CC1B1B] mb-8">Eligibility Criteria</h2>
              <p className="font-body text-lg text-[#5c403c] mb-10">To secure your seat in Vietnam's top medical universities, students must meet the following baseline requirements.</p>
              <div className="space-y-6">
                {[
                  { icon: "medical_information", title: "NEET Qualification", desc: "Students must have a valid NEET-UG score as per the year of admission." },
                  { icon: "school", title: "Academic Scores", desc: "Minimum 50% marks in Physics, Chemistry, and Biology (PCB) in 10+2 (40% for reserved categories)." },
                  { icon: "calendar_month", title: "Age Requirement", desc: "Candidate must be at least 17 years old as of 31st December of the admission year." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-xl bg-[#fdcc22] flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[#6e5700]">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-[#191c1d] mb-1">{item.title}</h4>
                      <p className="font-body text-[#5c403c]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={Students}
                alt="Medical students"
                className="rounded-3xl editorial-shadow h-[500px] w-full object-cover"
              />
              <div className="absolute -top-6 -right-6 bg-[#cc1b1b] text-white p-8 rounded-2xl shadow-xl">
                <p className="font-headline font-black text-4xl mb-1">50%</p>
                <p className="font-label text-xs uppercase tracking-widest font-bold">Minimum PCB Score</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Universities ── */}
        <section className="py-24 bg-[#f3f4f5]" id="universities">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="font-headline text-4xl font-extrabold text-[#CC1B1B] mb-4">Top Medical Universities</h2>
                <p className="font-body text-lg text-[#5c403c]">We partner with the most prestigious government and private medical institutions in Vietnam.</p>
              </div>
              <div className="flex gap-2">
                <button className="w-12 h-12 rounded-full border border-[#e6bdb8] flex items-center justify-center hover:bg-[#e1e3e4] transition-colors">
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="w-12 h-12 rounded-full border border-[#e6bdb8] flex items-center justify-center hover:bg-[#e1e3e4] transition-colors">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {universities.map((u) => (
                <div key={u.name} className="bg-white rounded-3xl overflow-hidden editorial-shadow flex flex-col sm:flex-row">
                  <div className="sm:w-2/5 relative">
                    <img src={u.img} alt={u.name} className="h-full w-full object-cover" />
                    <div className="absolute top-4 left-4 bg-[#fdcc22] text-[#6e5700] px-3 py-1 rounded-full text-xs font-bold font-label">{u.est}</div>
                  </div>
                  <div className="sm:w-3/5 p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="font-headline text-xl font-bold text-[#CC1B1B] mb-2">{u.name}</h3>
                      <div className="flex items-center gap-2 text-[#5c403c] text-sm mb-4">
                        <span className="material-symbols-outlined text-sm">location_on</span>
                        {u.location}
                      </div>
                      <p className="font-body text-sm text-[#5c403c] mb-6 text-justify">{u.desc}</p>
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="bg-[#f3f4f5] p-3 rounded-xl">
                          <p className="text-[10px] font-label text-[#5c403c] uppercase tracking-tighter">Est. Fees</p>
                          <p className="font-headline font-bold text-[#a4000b]">{u.fees}</p>
                        </div>
                        <div className="bg-[#f3f4f5] p-3 rounded-xl">
                          <p className="text-[10px] font-label text-[#5c403c] uppercase tracking-tighter">Course</p>
                          <p className="font-headline font-bold text-[#745b00]">{u.course}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button type="button" onClick={() => setIsModalOpen(true)} className="flex-1 py-3 bg-[#a4000b] text-white rounded-xl font-headline font-bold text-sm">Enquire Now</button>
                     
                    </div>

                    


                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Admission Process ── */}
        <section className="py-24 bg-[#f8f9fa]" id="process">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-headline text-4xl font-extrabold text-[#CC1B1B] mb-4">Admission Process</h2>
              <p className="font-body text-lg text-[#5c403c] max-w-2xl mx-auto">Your journey to becoming a doctor in Vietnam is simplified through our five-step streamlined process.</p>
            </div>
            <div className="relative">
              <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-[#e6bdb8]/30 -z-10" />
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {steps.map((s) => (
                  <div key={s.n} className="flex flex-col items-center text-center group">
                    <div
                      className="step-circle w-16 h-16 rounded-full border-4 flex items-center justify-center font-headline font-black text-xl mb-6 shadow-lg transition-all duration-300 cursor-default"
                      style={{
                        background: s.active ? "#a4000b" : "#fff",
                        borderColor: s.active ? "#a4000b" : "#e6bdb8",
                        color: s.active ? "#fff" : "#5c403c",
                      }}
                    >
                      {s.n}
                    </div>
                    <h4 className="font-headline font-bold text-[#191c1d] mb-2">{s.title}</h4>
                    <p className="text-xs font-body text-[#5c403c]">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>




    
      <section className="py-20 bg-[#f8f9fa] w-full">
  <div className="w-full">
    <div
      className="relative overflow-hidden text-center px-8 py-20"
      style={{
        background: "linear-gradient(135deg, #ffffff 0%, #fef2f2 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-[#cc1b1b]/5 pointer-events-none" />
      <div className="absolute -bottom-20 -left-10 w-56 h-56 rounded-full bg-[#cc1b1b]/5 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center">
        <span className="inline-block mb-5 px-4 py-1.5 rounded-full border border-[#cc1b1b]/20 bg-[#cc1b1b]/10 text-[#cc1b1b] font-label text-xs font-bold uppercase tracking-widest">
          Limited Seats — 2025 Intake Open
        </span>

        <h2 className="font-headline text-4xl md:text-5xl font-extrabold leading-tight mb-4 max-w-2xl text-[#111827]">
          Your Medical Career Starts Here
        </h2>

        <p className="font-body text-lg text-[#4b5563] max-w-xl leading-relaxed mb-10">
          Join hundreds of Indian students who have secured their MBBS seats in Vietnam.
          Let our experts guide you from application to arrival — completely free.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-14">
          <button
            type="button"
            onClick={onEnquire}
            className="bg-[#cc1b1b] text-white px-8 py-4 rounded-xl font-headline font-bold text-lg flex items-center justify-center gap-2 transition-opacity hover:opacity-90 active:scale-95"
          >
            Apply Now
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>

          <button
            type="button"
            onClick={onEnquire}
            className="border-2 border-[#cc1b1b]/30 text-[#cc1b1b] px-8 py-4 rounded-xl font-headline font-bold text-lg transition-colors hover:bg-[#cc1b1b]/5 active:scale-95"
          >
            Talk to a Counsellor
          </button>
        </div>

        
      </div>
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