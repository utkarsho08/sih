import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AuthContext } from "../context/AuthContext";
import "../styles/Navbar.css";

function Navbar() {
  const { t, i18n } = useTranslation();
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  // Toggle language between English and Hindi
  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "hi" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="navbar-logo">
        Internova
      </Link>

      {/* Links */}
      <div className="navbar-links">
        <Link to="/">{t("Home")}</Link>

        {/* Protected links */}
        {user && (
          <>
            <Link to="/form">{t("Upload Details")}</Link>
            <Link to="/internships">{t("Internships")}</Link>
            <Link to="/Career">{t("AI Career Guidance")}</Link>
            <Link to="/resume">{t("ATS Checker")}</Link>
          </>
        )}

        {/* Auth Links */}
        {user ? (
          <>
            <Link to="/profile">{user.name}</Link>
            <button onClick={handleLogout} className="navbar-logout">
              {t("Logout")}
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="navbar-login">
              {t("Login")}
            </Link>
            <Link to="/signup" className="navbar-signup">
              {t("Signup")}
            </Link>
          </>
        )}

        {/* Language Toggle */}
        <button className="lang-toggle" onClick={toggleLanguage}>
          {i18n.language === "en" ? "हिन्दी" : "English"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;