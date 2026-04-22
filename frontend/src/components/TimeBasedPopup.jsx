import React, { useState, useEffect } from "react";
import EnquiryModal from "./EnquiryModal";

function Popup({ onClose, onEnquiry }) {
  return (
    <>
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.45)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999,
          padding: "1rem",
        }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: "16px",
            maxWidth: "600px",
            width: "100%",
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
            animation: "popIn 0.25s ease",
          }}
        >
          {/* Header with Top Image */}
          <div
            style={{
              background: "#29544d",
              textAlign: "center",
              overflow: "hidden",
            }}
          >
            {/* Top Image */}
            <img
              src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1200"
              alt="Medical Students"
              style={{
                width: "100%",
                height: "370px",
                objectFit: "cover",
                display: "block",
              }}
            />

            {/* Header Content */}
            
          </div>

          {/* Body */}
          <div style={{ padding: "1.25rem 1.5rem 1.5rem" }}>
            <p
              style={{
                color: "#333",
                fontSize: 14,
                lineHeight: 1.6,
                margin: "0 0 1.25rem",
                textAlign: "center",
              }}
            >
              Take the first step toward your medical career. Our counsellors
              will guide you through admissions, fees, and scholarships.
            </p>

            {/* Buttons */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 10,
              }}
            >
              <button
                type="button"
                onClick={onEnquiry}
                style={{
                  flex: 1,
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
                  flex: 1,
                  background: "transparent",
                  color: "#888",
                  padding: "10px 20px",
                  border: "1px solid #F5C518",
                  borderRadius: 8,
                  cursor: "pointer",
                  fontSize: 13,
                }}
              >
                Maybe later
              </button>
            </div>

            <p
              style={{
                color: "#bbb",
                fontSize: 11,
                textAlign: "center",
                margin: "12px 0 0",
              }}
            >
              No spam. We respect your privacy.
            </p>
          </div>
        </div>

        <style>{`
          @keyframes popIn {
            from {
              opacity: 0;
              transform: scale(0.93) translateY(8px);
            }
            to {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }
        `}</style>
      </div>
    </>
  );
}

function TimeBasedPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  const handleEnquiry = () => {
    setShowPopup(false);
    setIsModalOpen(true);
  };

  return (
    <>
      {showPopup && (
        <Popup
          onClose={() => setShowPopup(false)}
          onEnquiry={handleEnquiry}
        />
      )}

      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default TimeBasedPopup;