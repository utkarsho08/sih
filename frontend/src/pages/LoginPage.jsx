import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import API from "../api/axios"; // ← Correct path to axios.js
import { AuthContext } from "../context/AuthContext";

function LoginPage() {
  const { t } = useTranslation();
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Calling API at:", API.defaults.baseURL + "/auth/login");
      const res = await API.post("/auth/login", { email, password });
      login(res.data.token, res.data.user);
      alert(t("loginSuccess"));
      navigate("/"); // redirect to home
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.msg || "Login failed");
    }
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

          <button
            type="submit"
            className="w-full bg-[#766ABB] text-white py-2 px-4 rounded-lg font-semibold hover:bg-[#6654a5] transition"
          >
            {t("loginButton")}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          {t("signupPrompt")}{" "}
          <a href="/signup" className="text-[#766ABB] font-semibold hover:underline">
            {t("signup")}
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
