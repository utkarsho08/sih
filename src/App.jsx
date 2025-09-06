import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import FormPage from "./pages/FormPage";
import ResumePage from "./pages/ResumePage";
import InternshipPage from "./pages/InternshipPage";

function App() {
  return (
    <div className="bg-white min-h-screen text-[#333]">
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/internships" element={<InternshipPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
