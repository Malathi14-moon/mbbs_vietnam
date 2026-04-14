import { useState, useEffect } from "react";

const FloatingWhatsApp = () => {
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
    
      href="https://wa.me/919003420057?text=Hi%20I%20am%20interested"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "24px",
        right: "20px",
        width: "54px",
        height: "54px",
        borderRadius: "50%",
        background: "#25D366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 2px 16px rgba(37,211,102,0.35)",
        zIndex: 9999,
        textDecoration: "none",
      }}
      aria-label="Chat on WhatsApp"
    >
      {/* WhatsApp SVG */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" style={{ width: "28px", height: "28px" }}>
        <path d="M20.52 3.48A11.86 11.86 0 0012.05 0C5.47 0 .16 5.31.16 11.88c0 2.09.55 4.13 1.6 5.94L0 24l6.35-1.66a11.87 11.87 0 005.7 1.45h.01c6.57 0 11.88-5.31 11.88-11.88 0-3.17-1.23-6.15-3.42-8.43zM12.06 21.5c-1.8 0-3.56-.48-5.1-1.4l-.36-.21-3.77.99 1-3.67-.23-.38a9.36 9.36 0 01-1.44-5c0-5.18 4.22-9.4 9.4-9.4 2.51 0 4.87.98 6.65 2.75a9.35 9.35 0 012.75 6.65c0 5.18-4.22 9.4-9.4 9.4zm5.15-7.05c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.31.2-.59.07-.28-.14-1.17-.43-2.23-1.37-.83-.74-1.4-1.65-1.56-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.5.14-.17.19-.28.28-.47.09-.18.05-.35-.02-.5-.07-.14-.61-1.48-.83-2.03-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.47.07-.71.35-.25.28-.96.94-.96 2.29s.99 2.65 1.13 2.83c.14.18 1.96 2.99 4.75 4.2.66.28 1.17.45 1.57.57.66.21 1.26.18 1.73.11.53-.08 1.65-.67 1.88-1.32.23-.65.23-1.21.16-1.32-.07-.11-.25-.18-.52-.32z"/>
      </svg>
    </a>
  );
};

export default FloatingWhatsApp;