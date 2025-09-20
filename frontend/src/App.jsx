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

// Auth Context
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

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
    <AuthProvider>
      <div className="bg-gray-50 min-h-screen">
        {/* Navbar always visible */}
        <Navbar changeLanguage={changeLanguage} currentLang={i18n.language} />

        {/* Page Content */}
        <div className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Protected Routes */}
            <Route
              path="/Career"
              element={
                <ProtectedRoute>
                  <Career />
                </ProtectedRoute>
              }
            />
            <Route
              path="/resume"
              element={
                <ProtectedRoute>
                  <ResumePage />
                </ProtectedRoute>
              }
            />

            {/* Public Routes */}
            <Route path="/form" element={<FormPage />} />
            <Route path="/internships" element={<InternshipPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;