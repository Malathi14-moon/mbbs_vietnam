import React, { useState, useEffect } from "react";
import EnquiryModal from "./EnquiryModal";

function Popup({ onClose, onEnquiry }) {  // ✅ receive onEnquiry as prop
  return (
    <>
      <div style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.45)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        padding: "1rem",
      }}>
        <div style={{
          background: "#fff",
          borderRadius: "16px",
          maxWidth: "420px",
          width: "100%",
          overflow: "hidden",
          boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
          animation: "popIn 0.25s ease",
        }}>
          {/* Header */}
          <div style={{
            background: "#29544d",
            padding: "1.5rem 1.5rem 1.25rem",
            textAlign: "center",
          }}>
            <div style={{
              width: 48, height: 48,
              background: "rgba(255,255,255,0.15)",
              borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 12px",
              fontSize: 22,
            }}>🎓</div>
            <p style={{
              color: "rgba(255,255,255,0.8)",
              fontSize: 12,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              margin: "0 0 4px",
              fontWeight: 500,
            }}>NCTU Vietnam</p>
            <h2 style={{
              color: "#fff",
              fontSize: 20,
              fontWeight: 600,
              margin: 0,
              lineHeight: 1.3,
            }}>Interested in MBBS in Vietnam?</h2>
          </div>

          {/* Body */}
          <div style={{ padding: "1.25rem 1.5rem 1.5rem" }}>
            <p style={{
              color: "#555",
              fontSize: 14,
              lineHeight: 1.6,
              margin: "0 0 1.25rem",
              textAlign: "center",
            }}>
              Take the first step toward your medical career. Our counsellors will
              guide you through admissions, fees, and scholarships.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <button
                type="button"
                onClick={onEnquiry}  // ✅ use the prop
                style={{
                  background: "#c8102e",
                  color: "#fff",
                  padding: "12px 20px",
                  border: "none",
                  borderRadius: 8,
                  cursor: "pointer",
                  fontSize: 14,
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                }}
              >
                Enquire now <span>→</span>
              </button>

              <button
                onClick={onClose}
                style={{
                  background: "transparent",
                  color: "#888",
                  padding: "10px 20px",
                  border: "1px solid #ddd",
                  borderRadius: 8,
                  cursor: "pointer",
                  fontSize: 13,
                }}
              >
                Maybe later
              </button>
            </div>

            <p style={{
              color: "#bbb",
              fontSize: 11,
              textAlign: "center",
              margin: "12px 0 0",
            }}>
              No spam. We respect your privacy.
            </p>
          </div>
        </div>

        <style>{`
          @keyframes popIn {
            from { opacity: 0; transform: scale(0.93) translateY(8px); }
            to   { opacity: 1; transform: scale(1) translateY(0); }
          }
        `}</style>
      </div>
    </>
  );
}

function TimeBasedPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);  // ✅ state lives here

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  const handleEnquiry = () => {
    setShowPopup(false);   // close the popup
    setIsModalOpen(true);  // open the enquiry modal
  };

  return (
    <>
      {showPopup && (
        <Popup
          onClose={() => setShowPopup(false)}
          onEnquiry={handleEnquiry}  // ✅ pass handler as prop
        />
      )}

      <EnquiryModal                  // ✅ lives at the same level, not nested inside Popup
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default TimeBasedPopup;