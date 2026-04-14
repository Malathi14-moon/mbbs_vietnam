import { useState, useEffect } from "react";

const FloatingCallButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > window.innerHeight); // show after scrolling past hero
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <a
    
      href="tel:+919003420057"
      style={{
        position: "fixed",
        bottom: "96px",
        right: "20px",
        width: "54px",
        height: "54px",
        borderRadius: "50%",
        background: "#CC1B1B",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 2px 16px rgba(204,27,27,0.35)",
        zIndex: 9999,
        fontSize: "22px",
        textDecoration: "none",
      }}
      aria-label="Call us"
    >
      📞
    </a>
  );
};

export default FloatingCallButton;