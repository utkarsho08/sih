import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/Navbar.css";

function Navbar() {
  const { t, i18n } = useTranslation();

  // Toggle language between English and Hindi
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "hi" : "en");
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="navbar-logo">
        Internova
      </Link>

      {/* Links + Login button */}
      <div className="navbar-links">
        <Link to="/">{t("Home")}</Link>
        <Link to="/form">{t("Upload Details")}</Link>
        <Link to="/internships">{t("Internships")}</Link>
        <Link to="/Career">{t("AI Career Guidance")}</Link>
        <Link to="/resume">{t("ATS Checker")}</Link>
        <Link to="/login" className="navbar-login">
          {t("Login")}
        </Link>

        {/* Language Toggle */}
        <button className="lang-toggle" onClick={toggleLanguage}>
          {i18n.language === "en" ? "हिन्दी" : "English"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
