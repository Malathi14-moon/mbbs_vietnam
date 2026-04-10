import { useState } from "react";
import { Link } from "react-router-dom";
import EnquiryModal from "./EnquiryModal";

const universities = [
  "Hanoi Medical University",
  "Hue University of Medicine",
  "Ho Chi Minh City University",
  "Can Tho University",
  "Hai Phong University",
  "Thai Nguyen University",
];

const admissionItems = [
  { label: "Application Process", to: "#application" },
  { label: "Eligibility", to: "#eligibility" },
  { label: "Fees Details", to: "#fees" },
];



function HeaderLegacyEnquiryModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: "", email: "", phone: "", state: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    try {
      const res = await fetch("http://localhost:5000/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setShowSuccess(true);
        setFormData({ fullName: "", email: "", phone: "", state: "" });
        setTimeout(() => { setShowSuccess(false); onClose(); }, 2800);
      } else {
        setStatus("Failed to send enquiry. Please try again.");
      }
    } catch (err) {
      setStatus("Server error. Please try again later.");
    }
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/55 z-50">
      <div
        className="relative bg-white flex overflow-hidden"
        style={{ width: "75vw", height: "75vh", borderRadius: "16px" }}
      >

        {/* ── Left: Form ── */}
        <div className="flex-1 flex flex-col justify-center px-10 py-8 overflow-y-auto">

          {/* Badge */}
          <span
            className="inline-flex items-center gap-1.5 text-[11px] font-medium w-fit mb-4 px-3 py-1 rounded-full border"
            style={{ background: "#FFF8E1", color: "#7a5a00", borderColor: "#F5C518" }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#F5C518" }} />
            Admissions Open 2025
          </span>

          <h2 className="text-xl font-semibold text-gray-900 mb-1">
            Study MBBS in Vietnam
          </h2>
          <p className="text-sm text-gray-400 mb-5">
            Our counsellor will reach out within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-1">

            <label className="text-[11px] font-medium text-gray-400 tracking-wide">Full name *</label>
            <input
              name="fullName" value={formData.fullName} onChange={handleChange}
              placeholder="e.g. Arjun Sharma" required
              className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm mb-3
                         focus:outline-none focus:border-[#CC1B1B] focus:ring-[3px] focus:ring-[#CC1B1B]/10"
            />

            <label className="text-[11px] font-medium text-gray-400 tracking-wide">Email address</label>
            <input
              name="email" value={formData.email} onChange={handleChange}
              placeholder="Optional"
              className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm mb-3
                         focus:outline-none focus:border-[#CC1B1B] focus:ring-[3px] focus:ring-[#CC1B1B]/10"
            />

            {/* Mobile + State side by side */}
            <div className="flex gap-3">
              <div className="flex-1 flex flex-col gap-1">
                <label className="text-[11px] font-medium text-gray-400 tracking-wide">Mobile number *</label>
                <input
                  name="phone" value={formData.phone} onChange={handleChange}
                  placeholder="+91 00000 00000" required
                  className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm mb-3
                             focus:outline-none focus:border-[#CC1B1B] focus:ring-[3px] focus:ring-[#CC1B1B]/10"
                />
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <label className="text-[11px] font-medium text-gray-400 tracking-wide">State *</label>
                <select
                  name="state" value={formData.state} onChange={handleChange} required
                  className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 mb-3
                             focus:outline-none focus:border-[#CC1B1B] focus:ring-[3px] focus:ring-[#CC1B1B]/10"
                >
                  <option value="">— Select —</option>
                  {states.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            </div>

            <button
              type="submit" disabled={loading}
              className="text-white text-sm font-medium py-2.5 rounded-lg transition-colors disabled:opacity-60"
              style={{ background: "#CC1B1B" }}
              onMouseEnter={e => e.target.style.background = "#b01616"}
              onMouseLeave={e => e.target.style.background = "#CC1B1B"}
            >
              {loading ? "Sending..." : "Submit enquiry →"}
            </button>

            {status && <p className="text-xs text-center text-gray-400 mt-2">{status}</p>}
          </form>
        </div>

        {/* ── Right: Image ── */}
        <div className="relative overflow-hidden" style={{ width: "42%" }}>
          <img
            src="https://tse4.mm.bing.net/th/id/OIP.IIUoT3tIL6zwyDB0IcoB2AHaHh?rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="MBBS Vietnam"
            className="w-full h-full object-cover"
          />
          {/* Branded gradient overlay */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(135deg, rgba(204,27,27,0.55) 0%, rgba(245,197,24,0.35) 100%)" }}
          />
          {/* Close button on image side */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full flex items-center justify-center text-white text-base border"
            style={{ background: "rgba(255,255,255,0.15)", borderColor: "rgba(255,255,255,0.3)" }}
          >
            ×
          </button>
          {/* Caption 
          <div className="absolute bottom-7 left-5 right-5">
            <span
              className="inline-block text-[10px] font-medium px-2.5 py-0.5 rounded-full mb-2"
              style={{ background: "#F5C518", color: "#5a3d00" }}
            >
              Top Ranked University
            </span>
            <h3 className="text-white text-base font-medium mb-1">
              Begin your medical career abroad
            </h3>
            <p className="text-white/75 text-xs">
              Affordable fees · NMC approved · English medium
            </p>
          </div> */}
        </div>

        {/* ── Success overlay ── */}
        {showSuccess && (
          <div className="absolute inset-0 bg-white flex flex-col items-center justify-center z-20"
               style={{ borderRadius: "16px" }}>
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center mb-4 border-2"
              style={{ background: "#FFF8E1", borderColor: "#F5C518" }}
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M5 13l4 4L19 7" stroke="#CC1B1B" strokeWidth="2.2"
                      strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="text-lg font-semibold text-gray-800 mb-1">Enquiry sent successfully!</p>
            <p className="text-sm text-gray-400 mb-4">We'll contact you within 24 hours.</p>
            <span
              className="text-[11px] font-medium px-4 py-1 rounded-full"
              style={{ background: "#F5C518", color: "#5a3d00" }}
            >
              Thank you
            </span>
          </div>
        )}

      </div>
    </div>
  );
}

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="w-full font-sans">
      <div className="bg-[#CC1B1B] px-6 py-2 flex items-center justify-between">
        <div className="flex items-center gap-6 text-white text-xs">
          <span>Call: +91 98765 43210</span>
          <span>Email: info@medviet.in</span>
          <span>Hours: Mon-Sat, 9 AM - 6 PM</span>
        </div>
        <div className="flex items-center gap-2">
          {["f", "in", "yt"].map((social) => (
            <div
              key={social}
              className="w-7 h-7 rounded-md bg-white/20 hover:bg-white/30 flex items-center justify-center text-white text-xs cursor-pointer transition"
            >
              {social}
            </div>
          ))}
        </div>
      </div>

      <nav className="bg-white px-6 py-3 flex items-center justify-between shadow-md border-b-4 border-[#F5C518]">
        <Link to="/" className="flex items-center gap-4">
          <img
            src="/logo.png"
            alt="MedViet Logo"
            className="w-16 h-16 rounded-xl object-cover"
          />
          <div className="text-xl font-bold tracking-widest text-[#CC1B1B] uppercase">
            MBBS in Vietnam
          </div>
        </Link>

        <ul className="flex items-center gap-1">
          {[
            { label: "About Us", to: "/about" },
            { label: "MBBS in Vietnam", to: "/mbbs-vietnam" },
          ].map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="px-3 py-2 text-sm font-semibold text-gray-700 rounded-lg hover:text-[#CC1B1B] hover:bg-red-50 transition"
              >
                {item.label}
              </Link>
            </li>
          ))}

          <li className="relative group">
            <span className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-gray-700 hover:text-[#CC1B1B] hover:bg-red-50 transition cursor-pointer">
              Universities
              <svg
                className="w-4 h-4 transition-transform group-hover:rotate-180"
                fill="none"
                viewBox="0 0 16 16"
              >
                <path
                  d="M4 6l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>

            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-white border border-red-100 border-t-2 border-t-[#CC1B1B] rounded-b-xl shadow-xl min-w-[240px] z-50 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
              <p className="text-[10px] font-bold tracking-widest text-[#CC1B1B] uppercase px-3 py-1">
                Top Medical Universities
              </p>
              {universities.map((university, index) => (
                <Link
                  key={university}
                  to={`/universities/${index + 1}`}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-red-50 hover:text-[#CC1B1B] transition"
                >
                  <span className="w-5 h-5 rounded bg-red-50 text-[#CC1B1B] text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {index + 1}
                  </span>
                  {university}
                </Link>
              ))}
              <div className="border-t border-gray-100 mt-1 pt-1 px-3">
                <Link
                  to="/universities"
                  className="text-xs font-semibold text-[#CC1B1B]"
                >
                  View all universities -&gt;
                </Link>
              </div>
            </div>
          </li>

        {/* {[
            { label: "Blogs", to: "/blog" },
            { label: "Admission Services", to: "/admissionServices" },
            { label: "Contact Us", to: "/contact" },
          ].map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="px-3 py-2 text-sm font-semibold text-gray-700 rounded-lg hover:text-[#CC1B1B] hover:bg-red-50 transition"
              >
                {item.label}
              </Link>
            </li>
          ))} */}


          <li className="relative group">
  <span className="px-3 py-2 text-sm font-semibold text-gray-700 rounded-lg hover:text-[#CC1B1B] hover:bg-red-50 transition cursor-pointer flex items-center gap-1">
    Admission Services
    <svg className="w-4 h-4 group-hover:rotate-180 transition-transform" fill="none" viewBox="0 0 16 16">
      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  </span>

  <div className="absolute top-full left-0 mt-1 bg-white border border-red-100 border-t-2 border-t-[#CC1B1B] rounded-xl shadow-xl min-w-[220px] z-50 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">

    <a href="/admissionServices#admission" className="block px-4 py-2 text-sm hover:bg-red-50">
      Admission Selection
    </a>

    <a href="/admissionServices#university" className="block px-4 py-2 text-sm hover:bg-red-50">
      University Selection
    </a>

    <a href="/admissionServices#documentation" className="block px-4 py-2 text-sm hover:bg-red-50">
      Documentation Support
    </a>

    <a href="/admissionServices#visa" className="block px-4 py-2 text-sm hover:bg-red-50">
      Visa Processing
    </a>

    <a href="/admissionServices#education loan" className="block px-4 py-2 text-sm hover:bg-red-50">
      Education Loan
    </a>

    <a href="/admissionServices#forex" className="block px-4 py-2 text-sm hover:bg-red-50">
      Forex & Insurance
    </a>

    
    <a href="/admissionServices#pre-departure" className="block px-4 py-2 text-sm hover:bg-red-50">
      Pre-Departure Briefing
    </a>

    <a href="/admissionServices#airport" className="block px-4 py-2 text-sm hover:bg-red-50">
      Airport Pick-Up & Hostel
    </a>

    <a href="/admissionServices#post-landing" className="block px-4 py-2 text-sm hover:bg-red-50">
      Post-Landing Support
    </a>

  </div>
</li>



          {[
  { label: "Blogs", to: "/blog" },
  { label: "Contact Us", to: "/contact" },
].map((item) => (
  <li key={item.to}>
    <Link
      to={item.to}
      className="px-3 py-2 text-sm font-semibold text-gray-700 rounded-lg hover:text-[#CC1B1B] hover:bg-red-50 transition"
    >
      {item.label}
    </Link>

    
  </li>
))}





        </ul>

        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-5 py-2.5 bg-[#CC1B1B] text-white text-sm font-bold rounded-xl hover:bg-[#b01616] transition border-2 border-[#CC1B1B] hover:bg-white hover:text-[#CC1B1B]"
        >
          <span className="w-2 h-2 rounded-full bg-[#F5C518] animate-pulse" />
          Enquiry
        </button>

        <EnquiryModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </nav>
    </header>
  );
}
