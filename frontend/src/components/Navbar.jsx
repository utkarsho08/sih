import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [language, setLanguage] = useState("en"); // 'en' or 'hi'
  const [translations, setTranslations] = useState({
    Home: "Home",
    Career: "Career",
    Internships: "Internships",
    Resume: "Resume",
    Form: "Form",
    Login: "Login",
  });

  const links = ["Home", "Career", "Internships", "Resume", "Form", "Login"];

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "hi" : "en"));
  };

  useEffect(() => {
    const translateLinks = async () => {
      if (language === "en") {
        // Reset to English
        setTranslations({
          Home: "Home",
          Career: "Career",
          Internships: "Internships",
          Resume: "Resume",
          Form: "Form",
          Login: "Login",
        });
        return;
      }

      try {
        const newTranslations = {};
        for (const link of links) {
          const response = await fetch("http://localhost:5000/api/translate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: link, source: "en", target: "hi" }),
          });
          const data = await response.json();
          newTranslations[link] = data.translatedText;
        }
        setTranslations(newTranslations);
      } catch (error) {
        console.error("Translation error:", error);
      }
    };

    translateLinks();
  }, [language]);

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="navbar-logo">
        Internova
      </Link>

      {/* Links + Login button */}
      <div className="navbar-links">
        <Link to="/">{translations.Home}</Link>
        <Link to="/Career">{translations.Career}</Link>
        <Link to="/internships">{translations.Internships}</Link>
        <Link to="/resume">{translations.Resume}</Link>
        <Link to="/form">{translations.Form}</Link>
        <Link to="/login" className="navbar-login">
          {translations.Login}
        </Link>

        {/* Language toggle */}
        <button className="lang-toggle" onClick={toggleLanguage}>
          {language === "en" ? "हिन्दी" : "English"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
