import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/contact";
import AdminLogin from "./pages/adminLogin";
import AdminDashboard from "./pages/admin";
import BlogPage from "./pages/blog";
import BlogDetails from "./pages/blogDetails";
import AdmissionServices from "./pages/admissionServices";
import MbbsVietnam from "./pages/mbbsInVietnam";
import FloatingCallButton from "./pages/floatingCallButton";
import FloatingWhatsApp from "./pages/floatingWhatsapp";


const isAuthenticated = () => {
  return localStorage.getItem("token") === "admin-token";
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/login" element={<Navigate to="/admin" replace />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />
        <Route path="/admissionServices" element={<AdmissionServices />} />
        <Route path="/mbbsInVietnam" element={<MbbsVietnam />} />
        
      
        <Route
          path="/admin/dashboard"
          element={
            isAuthenticated() ? (
              <AdminDashboard />
            ) : (
              <Navigate to="/admin" replace />
            )
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <FloatingCallButton />
      <FloatingWhatsApp />
    </BrowserRouter>
  );
}

export default App;
