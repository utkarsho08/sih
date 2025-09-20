import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import API from "../services/api";
import { AuthContext } from "../context/AuthContext";

function SignupPage() {
  const { t } = useTranslation();
  const { login } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert(t("passwordMismatch"));
      return;
    }

    try {
      const res = await API.post("/auth/signup", { name, email, password });

      // Auto-login after signup
      const loginRes = await API.post("/auth/login", { email, password });
      login(loginRes.data.token, loginRes.data.user);

      alert(t("signupSuccess"));
      navigate("/"); // redirect to home
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.msg || "Signup failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-2xl font-bold text-center text-[#766ABB] mb-6">
          {t("signupTitle")}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t("fullName")}
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t("namePlaceholder")}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#766ABB] focus:border-[#766ABB]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t("email")}
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("emailPlaceholder")}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#766ABB] focus:border-[#766ABB]"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t("password")}
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={t("passwordPlaceholder")}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#766ABB] focus:border-[#766ABB]"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t("confirmPassword")}
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder={t("confirmPasswordPlaceholder")}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#766ABB] focus:border-[#766ABB]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#766ABB] text-white py-2 px-4 rounded-lg font-semibold hover:bg-[#6654a5] transition"
          >
            {t("signupButton")}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          {t("alreadyAccount")}{" "}
          <a href="/login" className="text-[#766ABB] font-semibold hover:underline">
            {t("login")}
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;