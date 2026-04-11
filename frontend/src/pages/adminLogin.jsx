import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [focused, setFocused] = useState("");


  const BASE_URL =
  import.meta.env.VITE_API_URL || "https://mbbs-vietnam.onrender.com";

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${BASE_URL}/login`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
});
      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        navigate("/admin/dashboard", { replace: true });
      } else {
        setError(data.error || "Login failed");
      }
    } catch (err) {
      setError("Server not responding. Check backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=Outfit:wght@300;400;500;600&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .login-root {
          min-height: 100vh;
          display: flex;
          font-family: 'Outfit', sans-serif;
          background: #fffdf8;
        }

        /* ── Left Panel ── */
        .login-left {
          flex: 1;
          background: #CC1B1B;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 48px 52px;
          position: relative;
          overflow: hidden;
          min-height: 100vh;
        }

        .login-left::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 48px,
              rgba(255,255,255,0.04) 48px,
              rgba(255,255,255,0.04) 49px
            );
          pointer-events: none;
        }

        .login-left::after {
          content: '';
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          border: 60px solid rgba(255,190,0,0.1);
          bottom: -120px;
          right: -120px;
          pointer-events: none;
        }

        .left-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          position: relative;
          z-index: 2;
        }

        .left-logo-box {
          width: 44px;
          height: 44px;
          background: #ffbe00;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          font-weight: 700;
          color: #CC1B1B;
          flex-shrink: 0;
        }

        .left-logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1.15;
        }

        .left-logo-text .brand-sub {
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.6);
        }

        .left-logo-text .brand-main {
          font-size: 15px;
          font-weight: 600;
          color: #fff;
          letter-spacing: 0.3px;
        }

        .left-middle {
          position: relative;
          z-index: 2;
        }

        .left-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,190,0,0.18);
          border: 1px solid rgba(255,190,0,0.35);
          padding: 5px 14px;
          border-radius: 100px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #ffbe00;
          margin-bottom: 20px;
        }

        .left-tag-dot {
          width: 6px;
          height: 6px;
          background: #ffbe00;
          border-radius: 50%;
        }

        .left-heading {
          font-family: 'Playfair Display', serif;
          font-size: 40px;
          font-weight: 700;
          color: #fff;
          line-height: 1.18;
          margin-bottom: 16px;
        }

        .left-heading span {
          color: #ffbe00;
          font-style: italic;
        }

        .left-desc {
          font-size: 14px;
          color: rgba(255,255,255,0.7);
          line-height: 1.7;
          max-width: 310px;
        }

        .left-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 32px;
        }

        .left-pill {
          display: flex;
          align-items: center;
          gap: 7px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.15);
          padding: 7px 14px;
          border-radius: 100px;
          font-size: 12px;
          font-weight: 500;
          color: rgba(255,255,255,0.88);
        }

        .left-pill-dot {
          width: 6px;
          height: 6px;
          background: #ffbe00;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .left-footer {
          position: relative;
          z-index: 2;
          font-size: 11px;
          color: rgba(255,255,255,0.3);
          letter-spacing: 0.5px;
        }

        /* ── Right Panel ── */
        .login-right {
          width: 480px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 60px 52px;
          background: #fffdf8;
          position: relative;
        }

        .login-right::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: linear-gradient(90deg, #CC1B1B 0%, #ffbe00 50%, #CC1B1B 100%);
        }

        .right-welcome {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #CC1B1B;
          margin-bottom: 8px;
        }

        .right-title {
          font-family: 'Playfair Display', serif;
          font-size: 34px;
          font-weight: 700;
          color: #1a0e00;
          line-height: 1.18;
          margin-bottom: 6px;
        }

        .right-subtitle {
          font-size: 13.5px;
          color: #8a7055;
          margin-bottom: 36px;
          font-weight: 400;
        }

        /* Error */
        .error-box {
          background: #fff5f5;
          border: 1px solid #fecaca;
          border-left: 3px solid #CC1B1B;
          border-radius: 6px;
          padding: 10px 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 20px;
          animation: shake 0.4s ease;
        }

        @keyframes shake {
          0%,100% { transform: translateX(0); }
          20%      { transform: translateX(-5px); }
          60%      { transform: translateX(5px); }
        }

        .error-box span {
          font-size: 13px;
          color: #CC1B1B;
          font-weight: 500;
        }

        /* Field */
        .field-group {
          margin-bottom: 20px;
        }

        .field-label {
          display: block;
          font-size: 11.5px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #a08060;
          margin-bottom: 8px;
          transition: color 0.2s;
        }

        .field-group.active .field-label {
          color: #CC1B1B;
        }

        .input-wrap {
          position: relative;
        }

        .input-wrap input {
          width: 100%;
          background: #fff;
          border: 1.5px solid #e8e0d0;
          border-radius: 8px;
          padding: 13px 16px;
          font-family: 'Outfit', sans-serif;
          font-size: 14.5px;
          font-weight: 400;
          color: #1a0e00;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .input-wrap input::placeholder {
          color: #c8bfaf;
        }

        .input-wrap input:focus {
          border-color: #CC1B1B;
          box-shadow: 0 0 0 3px rgba(204,27,27,0.08);
        }

        .field-group.active .input-wrap input {
          border-color: #CC1B1B;
        }

        .pw-toggle {
          position: absolute;
          right: 13px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          cursor: pointer;
          color: #b8a898;
          padding: 4px;
          display: flex;
          align-items: center;
          transition: color 0.2s;
        }

        .pw-toggle:hover { color: #CC1B1B; }

        /* Divider */
        .divider {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 24px 0;
        }

        .divider-line {
          flex: 1;
          height: 1px;
          background: #f0e8d5;
        }

        .divider-dot {
          width: 6px;
          height: 6px;
          background: #ffbe00;
          border-radius: 50%;
        }

        /* Submit button */
        .submit-btn-wrap {
          position: relative;
        }

        .submit-btn-wrap::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 12%;
          right: 12%;
          height: 5px;
          background: #ffbe00;
          border-radius: 0 0 6px 6px;
          opacity: 0.55;
          transition: opacity 0.2s, left 0.2s, right 0.2s;
        }

        .submit-btn-wrap:hover::after {
          opacity: 0.9;
          left: 8%;
          right: 8%;
        }

        .submit-btn {
          width: 100%;
          padding: 14px;
          border: none;
          border-radius: 8px;
          background: #CC1B1B;
          color: #fff;
          font-family: 'Outfit', sans-serif;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: background 0.2s, box-shadow 0.2s, transform 0.15s;
          box-shadow: 0 4px 16px rgba(204, 27, 27, 0.28);
        }

        .submit-btn::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 40%;
          background: rgba(255,255,255,0.07);
          pointer-events: none;
        }

        .submit-btn:hover:not(:disabled) {
          background: #b01616;
          box-shadow: 0 6px 22px rgba(204, 27, 27, 0.38);
          transform: translateY(-1px);
        }

        .submit-btn:active:not(:disabled) { transform: translateY(0); }
        .submit-btn:disabled { opacity: 0.65; cursor: not-allowed; }

        /* Spinner */
        .spinner {
          display: inline-block;
          width: 14px;
          height: 14px;
          border: 2px solid rgba(255,255,255,0.35);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          margin-right: 8px;
          vertical-align: middle;
        }

        @keyframes spin { to { transform: rotate(360deg); } }

        .right-footer {
          text-align: center;
          margin-top: 32px;
          font-size: 11px;
          color: #c8bfaf;
          letter-spacing: 0.4px;
        }

        .right-footer a {
          color: #CC1B1B;
          text-decoration: none;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .login-left { display: none; }
          .login-right { width: 100%; padding: 48px 28px; }
        }
      `}</style>

      <div className="login-root">

        {/* ── Left branding panel ── */}
        <div className="login-left">
          <div className="left-logo">
            <div className="left-logo-box">V</div>
            <div className="left-logo-text">
              <span className="brand-sub">Vietnam MBBS</span>
              <span className="brand-main">MBBS IN VIETNAM</span>
            </div>
          </div>

          <div className="left-middle">
            <div className="left-tag">
              <span className="left-tag-dot" />
              Admin Portal
            </div>
            <h2 className="left-heading">
              Manage Your<br />
              <span>Admissions</span><br />
              Dashboard
            </h2>
            <p className="left-desc">
              Securely access the admin panel to manage student enquiries, university listings, and admission services.
            </p>
            <div className="left-pills">
              {["Student Enquiries", "University Management", "Lead Tracking", "Admission Reports"].map((t) => (
                <span className="left-pill" key={t}>
                  <span className="left-pill-dot" />
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="left-footer">
            © 2026 MedViet · Vietnam MBBS
          </div>
        </div>

        {/* ── Right login form ── */}
        <div className="login-right">
          <p className="right-welcome">Welcome Back</p>
          <h1 className="right-title">Sign In to<br />Admin Panel</h1>
          <p className="right-subtitle">Enter your credentials to continue</p>

          {error && (
            <div className="error-box">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#CC1B1B" strokeWidth="2.5" strokeLinecap="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin}>
            <div className={`field-group ${focused === "username" ? "active" : ""}`}>
              <label className="field-label">Username</label>
              <div className="input-wrap">
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  value={form.username}
                  onChange={handleChange}
                  onFocus={() => setFocused("username")}
                  onBlur={() => setFocused("")}
                  required
                />
              </div>
            </div>

            <div className={`field-group ${focused === "password" ? "active" : ""}`}>
              <label className="field-label">Password</label>
              <div className="input-wrap">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={handleChange}
                  onFocus={() => setFocused("password")}
                  onBlur={() => setFocused("")}
                  style={{ paddingRight: "44px" }}
                  required
                />
                <button
                  type="button"
                  className="pw-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>
                    </svg>
                  ) : (
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="divider">
              <span className="divider-line" />
              <span className="divider-dot" />
              <span className="divider-line" />
            </div>

            <div className="submit-btn-wrap">
              <button type="submit" className="submit-btn" disabled={loading}>
                {loading && <span className="spinner" />}
                {loading ? "Authenticating..." : "Sign In"}
              </button>
            </div>
          </form>

          <p className="right-footer">
            Unauthorized access is strictly prohibited ·{" "}
            <a href="#">Need help?</a>
          </p>
        </div>
      </div>
    </>
  );
}