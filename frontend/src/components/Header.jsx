import { useState } from "react";
import { Link } from "react-router-dom";
import EnquiryModal from "./EnquiryModal";

const universities = [
   {
    name: "Nam Can Tho University",
    slug: "nam-can-tho-university",
  },
  {
    name: "Phan Chau Trinh University",
    slug: "phan-chau-trinh-university",
  },
  {
    name: "Buon Ma Thuot Medical University",
    slug: "buon-ma-thuot-medical-university",
  },
  {
    name: "Can Tho University",
    slug: "can-tho-university",
  },
  {
    name: "Dai Nam University",
    slug: "dai-nam-university",
  },
];

const admissionServices = [
  { label: "Admission Selection", href: "/admissionServices#admission" },
  { label: "University Selection", href: "/admissionServices#university" },
  { label: "Documentation Support", href: "/admissionServices#documentation" },
  { label: "Visa Processing", href: "/admissionServices#visa" },
  { label: "Education Loan", href: "/admissionServices#education loan" },
  { label: "Forex & Insurance", href: "/admissionServices#forex" },
  { label: "Pre-Departure Briefing", href: "/admissionServices#pre-departure" },
  { label: "Airport Pick-Up & Hostel", href: "/admissionServices#airport" },
  { label: "Post-Landing Support", href: "/admissionServices#post-landing" },
];

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [uniOpen, setUniOpen] = useState(false);
  const [admOpen, setAdmOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setUniOpen(false);
    setAdmOpen(false);
  };

  return (
    <header className="w-full font-sans">
      {/* ── Top bar ── */}
      <div className="bg-[#CC1B1B] px-6 py-2 flex items-center justify-between">
        <div className="hidden sm:flex items-center gap-6 text-white text-xs">
          <span>Call: +91 90034 20057</span>
          <span>Email: info@medviet.in</span>
          <span>Hours: Mon-Sat, 9 AM - 6 PM</span>
        </div>
        {/* Mobile: just contact info compact */}
        <div className="flex sm:hidden items-center gap-3 text-white text-xs">
          <span>+91 98765 43210</span>
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

      {/* ── Main nav ── */}
      <nav className="bg-white px-6 py-3 flex items-center justify-between shadow-md border-b-4 border-[#F5C518] relative z-40">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4" onClick={closeMenu}>
          <img
            src="/logo.png"
            alt="MedViet Logo"
            className="w-16 h-16 rounded-xl object-cover"
          />
          <div className="text-xl font-bold tracking-widest text-[#CC1B1B] uppercase">
            MBBS in Vietnam
          </div>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-1">
          {[
            { label: "About Us", to: "/about" },
            { label: "MBBS in Vietnam", to: "/mbbsInVietnam" },
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

          {/* Universities dropdown */}
          <li className="relative group">
            <span className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-gray-700 hover:text-[#CC1B1B] hover:bg-red-50 transition cursor-pointer">
              Universities
              <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 16 16">
                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-white border border-red-100 border-t-2 border-t-[#CC1B1B] rounded-b-xl shadow-xl min-w-[240px] z-50 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
              <p className="text-[10px] font-bold tracking-widest text-[#CC1B1B] uppercase px-3 py-1">
                Top Medical Universities
              </p>
            {/*  {universities.map((university, index) => (
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
              ))} */}

              {universities.map((university, index) => (
  <Link
    key={university.slug}
    to={`/universities/${university.slug}`}
    className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-red-50 hover:text-[#CC1B1B] transition"
  >
    <span className="w-5 h-5 rounded bg-red-50 text-[#CC1B1B] text-xs font-bold flex items-center justify-center flex-shrink-0">
      {index + 1}
    </span>
    {university.name}
  </Link>
))}



              <div className="border-t border-gray-100 mt-1 pt-1 px-3">
                <Link to="/universities" className="text-xs font-semibold text-[#CC1B1B]">
                  View all universities →
                </Link>
              </div>
            </div>
          </li>

          


        



<li className="relative group">
  <div className="flex items-center">
    <Link
      to="/admissionServices"
      className="px-3 py-1 text-sm font-semibold text-gray-700 rounded-lg hover:text-[#CC1B1B] hover:bg-red-50 transition cursor-pointer flex items-center gap-1"
    >
      Admission Services
    </Link>
    <span className="px-1 py-1.5 text-gray-700 cursor-pointer hover:text-[#CC1B1B]">
      <svg className="w-4 h-4 group-hover:rotate-180 transition-transform" fill="none" viewBox="0 0 16 16">
        <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    </span>
  </div>

  <div className="absolute top-full left-0 mt-1 bg-white border border-red-100 border-t-2 border-t-[#CC1B1B] rounded-xl shadow-xl min-w-[220px] z-50 py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
    {admissionServices.map((s) => (
      <Link
        key={s.href}
        to={s.href}
        className="block px-4 py-1.5 text-sm text-gray-700 hover:text-[#CC1B1B] hover:bg-red-50 transition"
      >
        {s.label}
      </Link>
    ))}
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


        





        {/* Desktop Enquiry button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-[#CC1B1B] text-white text-sm font-bold rounded-xl hover:bg-white hover:text-[#CC1B1B] transition border-2 border-[#CC1B1B]"
        >
          <span className="w-2 h-2 rounded-full bg-[#F5C518] animate-pulse" />
          Enquiry
        </button>

        {/* Mobile right side: Enquiry + Hamburger */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-2 bg-[#CC1B1B] text-white text-xs font-bold rounded-lg border-2 border-[#CC1B1B]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5C518] animate-pulse" />
            Enquiry
          </button>

          {/* Hamburger button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="flex flex-col justify-center items-center w-9 h-9 rounded-lg border border-gray-200 gap-1.5 hover:bg-red-50 transition"
          >
            <span
              className={`block w-5 h-0.5 bg-gray-700 rounded transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-gray-700 rounded transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-gray-700 rounded transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* ── Mobile drawer ── */}
      <div
        className={`lg:hidden bg-white border-b border-gray-100 shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-3 flex flex-col gap-1">

          {/* Static links */}
          {[
            { label: "About Us", to: "/about" },
            { label: "MBBS in Vietnam", to: "/mbbsInVietnam" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={closeMenu}
              className="block px-3 py-2.5 text-sm font-semibold text-gray-700 rounded-lg hover:text-[#CC1B1B] hover:bg-red-50 transition"
            >
              {item.label}
            </Link>
          ))}

          {/* Universities accordion */}
          <div>
            <button
              onClick={() => setUniOpen(!uniOpen)}
              className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-gray-700 rounded-lg hover:text-[#CC1B1B] hover:bg-red-50 transition"
            >
              Universities
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${uniOpen ? "rotate-180" : ""}`}
                fill="none" viewBox="0 0 16 16"
              >
                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                uniOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="ml-3 border-l-2 border-[#F5C518] pl-3 py-1 flex flex-col gap-0.5">
                {universities.map((university, index) => (
                  <Link
                    key={university.slug}
                    to={`/universities/${university.slug}`}
                    onClick={closeMenu}
                    className="flex items-center gap-2 px-2 py-2 text-sm text-gray-600 rounded-lg hover:bg-red-50 hover:text-[#CC1B1B] transition"
                  >
                    <span className="w-5 h-5 rounded bg-red-50 text-[#CC1B1B] text-xs font-bold flex items-center justify-center flex-shrink-0">
                      {index + 1}
                    </span>
                    {university.name}
                  </Link>
                ))}
                <Link
                  to="/universities"
                  onClick={closeMenu}
                  className="px-2 py-2 text-xs font-semibold text-[#CC1B1B]"
                >
                  View all universities →
                </Link>
              </div>
            </div>
          </div>

          {/* Admission Services accordion */}
          <div>
            <button
              onClick={() => setAdmOpen(!admOpen)}
              className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-gray-700 rounded-lg hover:text-[#CC1B1B] hover:bg-red-50 transition"
            >
              Admission Services
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${admOpen ? "rotate-180" : ""}`}
                fill="none" viewBox="0 0 16 16"
              >
                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                admOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="ml-3 border-l-2 border-[#F5C518] pl-3 py-1 flex flex-col gap-0.5">
                {admissionServices.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    onClick={closeMenu}
                    className="block px-2 py-2 text-sm text-gray-600 rounded-lg hover:bg-red-50 hover:text-[#CC1B1B] transition"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Static links continued */}
          {[
            { label: "Blogs", to: "/blog" },
            { label: "Contact Us", to: "/contact" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={closeMenu}
              className="block px-3 py-2.5 text-sm font-semibold text-gray-700 rounded-lg hover:text-[#CC1B1B] hover:bg-red-50 transition"
            >
              {item.label}
            </Link>
          ))}

          {/* Mobile bottom contact strip */}
          <div className="mt-2 pt-3 border-t border-gray-100 flex flex-col gap-1 text-xs text-gray-500 px-3 pb-2">
            <span>📞 +91 98765 43210</span>
            <span>✉ info@medviet.in</span>
            <span>🕐 Mon-Sat, 9 AM – 6 PM</span>
          </div>
        </div>
      </div>

      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </header>
  );
}
