import React, { useState } from "react";
import EnquiryModal from "../components/EnquiryModal";

function MaterialIcon({ name, filled, className }) {
  return (
    <span
      className={`material-symbols-outlined ${className ?? ""}`}
      style={filled ? { fontVariationSettings: "'FILL' 1" } : undefined}
    >
      {name}
    </span>
  );
}

export default function CTASection() {

    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
    <section className="w-full px-6 lg:px-16 py-14 lg:py-20 bg-[#fff8f0] relative overflow-hidden">

      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#cc1b1b]/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#fdcc22]/20 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center relative z-10">

        {/* LEFT CONTENT */}
        <div>
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#fdcc22] text-[#6e5700] text-xs font-bold uppercase tracking-wider mb-5">
            <MaterialIcon name="verified" filled />
            Limited Seats Available
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold font-headline text-[#191c1d] leading-tight mb-4">
            Secure your <span className="text-[#a4000b]">seat today</span>
          </h2>

          <p className="text-[#5c403c] text-base md:text-lg max-w-xl mb-8">
            Don’t miss the opportunity to join the upcoming academic session. 
            Admissions are strictly first-come, first-served.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button type="button" onClick={() => setIsModalOpen(true)} className="px-8 py-3 rounded-xl bg-[#a4000b] text-white font-bold shadow-lg hover:shadow-xl hover:scale-[1.03] transition">
              Apply Now →
            </button>

            <button type="button" onClick={() => setIsModalOpen(true)} className="px-8 py-3 rounded-xl border border-[#a4000b] text-[#a4000b] font-semibold hover:bg-[#a4000b]/10 transition flex items-center gap-2">
              <MaterialIcon name="call" />
              Request Callback
            </button>
          </div>
        </div>

        {/* RIGHT CONTENT (STATS CARDS) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

          {[
            { num: "2,400+", label: "Students Enrolled" },
            { num: "Aug '26", label: "Next Intake" },
            { num: "96%", label: "Success Rate" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-5 shadow-md border border-[#e6bdb8]/20 text-center"
            >
              <h3 className="text-2xl font-extrabold text-[#a4000b]">
                {item.num}
              </h3>
              <p className="text-sm text-[#5c403c] mt-1">{item.label}</p>
            </div>
          ))}

        </div>
      </div>
    </section>


<EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      </>
  );
}