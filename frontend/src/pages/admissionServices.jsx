import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const services = [
  {
    id: 1,
    title: "Admission Selection",
    subtitle: "Personalized Course Guidance",
    icon: (
      <svg className="w-10 h-10 text-[#CC1B1B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "University Selection",
    subtitle: "Find Your Best-Fit Institution",
    icon: (
      <svg className="w-10 h-10 text-[#CC1B1B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Documentation Support",
    subtitle: "Application & Paperwork Help",
    icon: (
      <svg className="w-10 h-10 text-[#CC1B1B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Visa Processing",
    subtitle: "Visa Assistance & Submission",
    icon: (
      <svg className="w-10 h-10 text-[#CC1B1B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Education Loan",
    subtitle: "Student Loan Solutions",
    icon: (
      <svg className="w-10 h-10 text-[#CC1B1B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Forex & Insurance",
    subtitle: "Currency & Travel Insurance",
    icon: (
      <svg className="w-10 h-10 text-[#CC1B1B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 7,
    title: "Pre-Departure Briefing",
    subtitle: "Travel & Community Assistance",
    icon: (
      <svg className="w-10 h-10 text-[#CC1B1B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    id: 8,
    title: "Airport Pick-Up & Hostel",
    subtitle: "Arrival & Accommodation",
    icon: (
      <svg className="w-10 h-10 text-[#CC1B1B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 9,
    title: "Post-Landing Support",
    subtitle: "Settling In Services",
    icon: (
      <svg className="w-10 h-10 text-[#CC1B1B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function AdmissionServices() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#1A0A0A] py-16 px-4 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 50%, #CC1B1B 0%, transparent 50%), 
              radial-gradient(circle at 75% 50%, #F5C518 0%, transparent 50%)
            `,
          }}
        />

        <div className="relative max-w-3xl mx-auto z-10 w-full flex flex-col items-center">
          <span className="inline-block bg-[#F5C518] text-[#1A0A0A] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded mb-4">
            Our Services
          </span>

          <h1
            className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Complete <span className="text-[#CC1B1B]">Admission</span> Solutions
          </h1>

          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            From university selection to post-landing assistance, we provide end-to-end support to ensure a smooth and successful MBBS journey in Vietnam.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <main className="flex-1 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1a2f5e] mb-4">
              Guiding You From Start to Finish
            </h2>
            <div className="w-24 h-1 bg-[#CC1B1B] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-xl bg-[#FFF8F0] text-[#CC1B1B] flex items-center justify-center shadow-inner mb-6 group-hover:scale-110 group-hover:bg-[#CC1B1B] group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1a2f5e] mb-2 group-hover:text-[#CC1B1B] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>



        {/* CTA Section */}
        <div className="max-w-4xl mx-auto mt-20 text-center bg-white rounded-3xl shadow-lg p-10 border border-gray-100 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-[#FFF8F0] opacity-50"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-red-50 opacity-50"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-[#1a2f5e] mb-4">Ready to start your journey?</h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Our expert counsellors are ready to provide personalized guidance for your medical education overseas. Let's make your dream a reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-[#CC1B1B] text-white font-bold rounded-xl hover:bg-[#b01616] transition-colors shadow-md shadow-red-200"
              >
                Get Started Today
              </a>
              <a
                href="https://wa.me/919150430545"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-[#1a2f5e] border-2 border-[#1a2f5e] font-bold rounded-xl hover:bg-[#1a2f5e] hover:text-white transition-colors"
              >
                Talk to a Counsellor
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}