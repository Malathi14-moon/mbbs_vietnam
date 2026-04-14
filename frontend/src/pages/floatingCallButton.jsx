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
      <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  fill="white"
  viewBox="0 0 24 24"
>
  <path d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2a1 1 0 011-.24c1.12.37 2.33.57 3.59.57a1 1 0 011 1v3.5a1 1 0 01-1 1A17 17 0 013 6a1 1 0 011-1h3.5a1 1 0 011 1c0 1.26.2 2.47.57 3.59a1 1 0 01-.25 1z"/>
</svg>
    </a>
  );
};

export default FloatingCallButton;