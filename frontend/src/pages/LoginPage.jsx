import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function LoginPage() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login details:", { email, password });
    alert(t("loginSuccess"));
    navigate("/"); // redirect to home
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-2xl font-bold text-center text-[#766ABB] mb-6">
          {t("loginTitle")}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
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

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#766ABB] text-white py-2 px-4 rounded-lg font-semibold hover:bg-[#6654a5] transition"
          >
            {t("loginButton")}
          </button>
        </form>

        {/* Signup Redirect */}
        <p className="text-center text-sm text-gray-600 mt-6">
          {t("signupPrompt")}{" "}
          <a
            href="/signup"
            className="text-[#766ABB] font-semibold hover:underline"
          >
            {t("signup")}
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
