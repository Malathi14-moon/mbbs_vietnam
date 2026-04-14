import { useState } from "react";

function normalizeHighlights(highlights) {
  if (Array.isArray(highlights)) {
    return highlights;
  }

  if (typeof highlights === "string") {
    try {
      const parsed = JSON.parse(highlights);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  return [];
}

export default function UniversityCard({ university = {}, onOpenEnquiry = () => {} }) {
  const {
    name,
    shortName,
    fee,
    image,
    highlights = [],
    nmcRecognised = true,
  } = university;
  const [imgErr, setImgErr] = useState(false);
  const safeHighlights = normalizeHighlights(highlights);

  return (
    <article
      style={{
        background: "#fff",
        borderRadius: "18px",
        overflow: "hidden",
        border: "1px solid #e5dfd5",
        display: "flex",
        flexDirection: "column",
        transition: "box-shadow 0.28s ease, transform 0.28s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 20px 56px rgba(0,0,0,0.12)";
        e.currentTarget.style.transform = "translateY(-5px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div style={{ position: "relative", height: "220px", overflow: "hidden" }}>
        {!imgErr ? (
          <img
            src={image}
            alt={name}
            onError={() => setImgErr(true)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "#dde0ea",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2rem",
              fontWeight: 700,
              color: "#5a6a80",
            }}
          >
            {shortName ?? name?.slice(0, 3)}
          </div>
        )}

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.55) 100%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: 14,
            left: 16,
            zIndex: 2,
            background: "#CC1B1B",
            color: "#fff",
            fontSize: "13px",
            fontWeight: 700,
            padding: "6px 14px",
            borderRadius: "7px",
            letterSpacing: "0.03em",
            boxShadow: "0 2px 10px rgba(204,27,27,0.4)",
          }}
        >
         ₹{fee}/year
        </div>

        {nmcRecognised && (
          <div
            style={{
              position: "absolute",
              bottom: 14,
              right: 16,
              zIndex: 2,
              background: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.4)",
              color: "#fff",
              fontSize: "11px",
              fontWeight: 700,
              padding: "5px 10px",
              borderRadius: "6px",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            NMC Recognised
          </div>
        )}
      </div>

      <div
        style={{
          padding: "22px 22px 20px",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "1.28rem",
              fontWeight: 900,
              color: "#CC1B1B",
              lineHeight: 1.25,
            }}
          >
            {name}
          </h2>
          {shortName && (
            <span
              style={{
                background: "#F5C518",
                color: "#0f0b04",
                fontSize: "11px",
                fontWeight: 700,
                padding: "4px 9px",
                borderRadius: "6px",
                letterSpacing: "0.06em",
                flexShrink: 0,
                alignSelf: "flex-start",
                marginTop: "3px",
              }}
            >
              {shortName}
            </span>
          )}
        </div>

        <div
          style={{
            width: "36px",
            height: "3px",
            background: "#F5C518",
            borderRadius: "2px",
            margin: "12px 0 16px",
          }}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "8px",
            marginBottom: "20px",
          }}
        >
          {safeHighlights.map((highlight, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "8px",
                background: "#faf8f5",
                border: "1px solid #ede7dc",
                borderRadius: "9px",
                padding: "9px 10px",
                fontSize: "0.83rem",
                color: "#2d2d2d",
                lineHeight: 1.4,
              }}
            >
              <span style={{ fontSize: "14px", flexShrink: 0 }}>
                {highlight.icon}
              </span>
              <span>{highlight.text}</span>
            </div>
          ))}
        </div>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid #ede7dc",
            marginBottom: "16px",
          }}
        />

        <div style={{ display: "flex", gap: "8px", marginTop: "auto" }}>
          <button
            type="button"
            onClick={onOpenEnquiry}
            style={{
              flex: 1,
              background: "#CC1B1B",
              color: "#fff",
              fontWeight: 700,
              fontSize: "0.88rem",
              borderRadius: "9px",
              padding: "11px 0",
              textAlign: "center",
              border: "none",
              cursor: "pointer",
            }}
          >
            Apply Now -&gt;
          </button>
          <button
            type="button"
            onClick={onOpenEnquiry}
            style={{
              flex: 1,
              background: "#F5C518",
              color: "#1a2f5e",
              fontWeight: 600,
              fontSize: "0.85rem",
              border: "1.5px solid #c5cde0",
              borderRadius: "9px",
              padding: "10px 0",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            Download Brochure
          </button>
        </div>
      </div>
    </article>
  );
}
