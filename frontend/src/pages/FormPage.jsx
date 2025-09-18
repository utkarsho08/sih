import { useState } from "react";
import { useTranslation } from "react-i18next";

function FormPage() {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    education: "",
    skills: "",
    experience: "",
    objective: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("resumeData", JSON.stringify(form));
    alert(t("resumeSavedAlert"));
  };

  return (
    <div className="max-w-3xl mx-auto bg-white text-gray-800 p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-[#766ABB]">
        📝 {t("createResume")}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div>
          <label className="block font-semibold mb-2">{t("fullName")} *</label>
          <input
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder={t("fullNamePlaceholder")}
            required
            className="w-full border border-gray-300 rounded-lg p-3"
          />
        </div>

        {/* Contact Details */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold mb-2">{t("email")} *</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder={t("emailPlaceholder")}
              required
              className="w-full border border-gray-300 rounded-lg p-3"
            />
          </div>
          <div>
            <label className="block font-semibold mb-2">{t("phone")} *</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder={t("phonePlaceholder")}
              required
              className="w-full border border-gray-300 rounded-lg p-3"
            />
          </div>
        </div>

        {/* Address */}
        <div>
          <label className="block font-semibold mb-2">{t("address")}</label>
          <textarea
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder={t("addressPlaceholder")}
            className="w-full border border-gray-300 rounded-lg p-3"
          />
        </div>

        {/* Education */}
        <div>
          <label className="block font-semibold mb-2">{t("education")} *</label>
          <select
            name="education"
            value={form.education}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-3"
          >
            <option value="">{t("selectEducation")}</option>
            <option value="10th Pass">10th Pass</option>
            <option value="12th Pass">12th Pass</option>
            <option value="Diploma">Diploma</option>
            <option value="Graduate">Graduate</option>
            <option value="Post Graduate">Post Graduate</option>
          </select>
        </div>

        {/* Skills */}
        <div>
          <label className="block font-semibold mb-2">{t("skills")} *</label>
          <textarea
            name="skills"
            value={form.skills}
            onChange={handleChange}
            placeholder={t("skillsPlaceholder")}
            required
            className="w-full border border-gray-300 rounded-lg p-3"
          />
        </div>

        {/* Work Experience */}
        <div>
          <label className="block font-semibold mb-2">{t("experience")}</label>
          <textarea
            name="experience"
            value={form.experience}
            onChange={handleChange}
            placeholder={t("experiencePlaceholder")}
            className="w-full border border-gray-300 rounded-lg p-3"
          />
        </div>

        {/* Objective */}
        <div>
          <label className="block font-semibold mb-2">{t("objective")}</label>
          <textarea
            name="objective"
            value={form.objective}
            onChange={handleChange}
            placeholder={t("objectivePlaceholder")}
            className="w-full border border-gray-300 rounded-lg p-3"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-[#766ABB] text-white py-3 rounded-lg font-bold hover:bg-[#5a4a99] transition"
        >
          {t("saveResume")}
        </button>
      </form>
    </div>
  );
}

export default FormPage;
