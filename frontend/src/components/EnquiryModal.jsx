import { useState } from "react";
import NCTU from "../assets/NCTU-Student.webp";

const states = [
  "I am not an Indian",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry",
];



const BASE_URL = import.meta.env.VITE_API_URL || "https://mbbs-vietnam.onrender.com";


export default function EnquiryModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    state: "",
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
      const res = await fetch(`${BASE_URL}/api/enquiry`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});

      if (res.ok) {
        setShowSuccess(true);
        setFormData({ fullName: "", email: "", phone: "", state: "" });
        setTimeout(() => {
          setShowSuccess(false);
          onClose();
        }, 2800);
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
        <div className="flex-1 flex flex-col justify-center px-10 py-8 overflow-y-auto">
          <span
            className="inline-flex items-center gap-1.5 text-[11px] font-medium w-fit mb-4 px-3 py-1 rounded-full border"
            style={{ background: "#FFF8E1", color: "#7a5a00", borderColor: "#F5C518" }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#F5C518" }} />
            Admission Open
          </span>

          <h2 className="text-xl font-semibold text-gray-900 mb-1">
            Study MBBS in Vietnam
          </h2>
          <p className="text-sm text-gray-400 mb-5">
            Our counsellor will reach out within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-1">
            <label className="text-[11px] font-medium text-gray-400 tracking-wide">
              Full name *
            </label>
            <input
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Arjun Sharma"
              required
              className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm mb-3 focus:outline-none focus:border-[#CC1B1B] focus:ring-[3px] focus:ring-[#CC1B1B]/10"
            />

            <label className="text-[11px] font-medium text-gray-400 tracking-wide">
              Email address
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Optional"
              className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm mb-3 focus:outline-none focus:border-[#CC1B1B] focus:ring-[3px] focus:ring-[#CC1B1B]/10"
            />

            <div className="flex gap-3">
              <div className="flex-1 flex flex-col gap-1">
                <label className="text-[11px] font-medium text-gray-400 tracking-wide">
                  Mobile number *
                </label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 00000 00000"
                  required
                  className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm mb-3 focus:outline-none focus:border-[#CC1B1B] focus:ring-[3px] focus:ring-[#CC1B1B]/10"
                />
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <label className="text-[11px] font-medium text-gray-400 tracking-wide">
                  State *
                </label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 mb-3 focus:outline-none focus:border-[#CC1B1B] focus:ring-[3px] focus:ring-[#CC1B1B]/10"
                >
                  <option value="">— Select —</option>
                  {states.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="text-white text-sm font-medium py-2.5 rounded-lg transition-colors disabled:opacity-60"
              style={{ background: "#CC1B1B" }}
            >
              {loading ? "Sending..." : "Submit enquiry →"}
            </button>
            {status && (
              <p className="text-xs text-center text-gray-400 mt-2">{status}</p>
            )}
          </form>
        </div>

        <div className="relative overflow-hidden" style={{ width: "42%", height: "120%" }}>
          <img
            src={NCTU}
            alt="MBBS Vietnam"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(204,27,27,0.20) 0%, rgba(245,197,24,0.15) 100%)",
            }}
          />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full flex items-center justify-center text-white text-base border"
            style={{
              background: "rgba(255,255,255,0.15)",
              borderColor: "rgba(255,255,255,0.3)",
            }}
          >
            ×
          </button>

          {showSuccess && (
            <div
              className="absolute inset-0 bg-white flex flex-col items-center justify-center z-20"
              style={{ borderRadius: "16px" }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-4 border-2"
                style={{ background: "#FFF8E1", borderColor: "#F5C518" }}
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 13l4 4L19 7"
                    stroke="#CC1B1B"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-lg font-semibold text-gray-800 mb-1">
                Enquiry sent successfully!
              </p>
              <p className="text-sm text-gray-400 mb-4">
                We'll contact you within 24 hours.
              </p>
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
    </div>
  );
}
