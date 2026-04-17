import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t-4  shadow-inner mt-12">
      {/* Top Section */}
      <div className="px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Logo + About */}
        <div>
          <Link to="/" className="flex items-center gap-3 mb-4">
            <img
              src="/logo.png"
              alt="MedViet Logo"
              className="w-14 h-14 rounded-xl object-cover"
            />
            <span className="text-xl font-bold text-[#CC1B1B] uppercase">
              MBBS in Vietnam
            </span>
          </Link>
          <p className="text-sm text-gray-600 leading-relaxed">
            MedViet helps Indian students pursue MBBS in Vietnam with direct
            admissions, affordable fees, and recognized universities.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-[#CC1B1B] mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <Link to="/about" className="hover:text-[#CC1B1B] transition">
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/mbbs-vietnam"
                className="hover:text-[#CC1B1B] transition"
              >
                MBBS in Vietnam
              </Link>
            </li>
            <li>
              <Link
                to="/universities"
                className="hover:text-[#CC1B1B] transition"
              >
                Universities
              </Link>
            </li>
            <li>
              <Link
                to="/admission-services"
                className="hover:text-[#CC1B1B] transition"
              >
                Admission Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#CC1B1B] transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-[#CC1B1B] mb-3">
            Contact Us
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>📞 90034 20057 | 72000 95846</li>
            <li>✉ info@medviet.in</li>
            <li>🕐 Mon–Sat: 9 AM – 6 PM</li>
          </ul>
          <div className="flex gap-2 mt-4">
            {["f", "in", "𝕏"].map((s, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-md bg-[#CC1B1B] hover:bg-red-700 flex items-center justify-center text-white text-sm cursor-pointer transition"
              >
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#CC1B1B] text-white text-xs text-center py-3">
        © {new Date().getFullYear()} DevSpectra. All rights reserved.
      </div>
    </footer>
  );
}