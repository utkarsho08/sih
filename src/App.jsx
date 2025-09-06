import Career from "./pages/Career";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import FormPage from "./pages/FormPage";
import ResumePage from "./pages/ResumePage";
import InternshipPage from "./pages/InternshipPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar always visible */}
      <Navbar />

      {/* Page Content */}
      <div className="p-6">
        <Routes>
          <Route path="/Career" element={<Career />} />
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/internships" element={<InternshipPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;