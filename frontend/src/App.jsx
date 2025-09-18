import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Career from "./pages/Career";
import FormPage from "./pages/FormPage";
import ResumePage from "./pages/ResumePage";
import InternshipPage from "./pages/InternshipPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

// i18next hook
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();

  // Load language from localStorage if available
  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (savedLang) i18n.changeLanguage(savedLang);
  }, [i18n]);

  // Function to change language
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar always visible */}
      <Navbar changeLanguage={changeLanguage} currentLang={i18n.language} />

      {/* Language Toggle (optional, can also be in Navbar) */}
      <div className="p-4 flex gap-2 justify-center">
        <button onClick={() => changeLanguage("en")}>English</button>
        <button onClick={() => changeLanguage("hi")}>हिन्दी</button>
      </div>

      {/* Page Content */}
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Career" element={<Career />} />
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