import { useState } from "react";
import { Link } from "react-router-dom";
import wipro from "../assets/images/wipro.png";
import visa from "../assets/images/visa.png";
import adani from "../assets/images/adani.png";
import bajaj from "../assets/images/bajaj.png";
import nike from "../assets/images/nike.png";
import drdo from "../assets/images/drdo.png";
import suzuki from "../assets/images/suzuki.png";
import amazon from "../assets/images/amazon.png";
import flipkart from "../assets/images/flipkart.png";
import google from "../assets/images/google.png";
import microsoft from "../assets/images/microsoft.png";
import zomato from "../assets/images/zomato.png";
import hyundai from "../assets/images/hyundai.png";
import heroImg from "../assets/images/hero.jpg"; // ✅ Hero image

function Home() {
  const [selectedIndustry, setSelectedIndustry] = useState("Agriculture");

  // ✅ Trending Internships
  const trending = [
    { id: 1, title: "Web Development", company: "Google", location: "Remote", stipend: "₹15,000/month" },
    { id: 2, title: "Data Science", company: "Microsoft", location: "Bangalore", stipend: "₹20,000/month" },
    { id: 3, title: "UI/UX Design", company: "Adobe", location: "Delhi", stipend: "₹12,000/month" },
    { id: 4, title: "AI Research Intern", company: "OpenAI", location: "Remote", stipend: "₹25,000/month" },
    { id: 5, title: "Cloud Engineering", company: "Amazon", location: "Hyderabad", stipend: "₹18,000/month" },
    { id: 6, title: "Cybersecurity Analyst", company: "Cisco", location: "Pune", stipend: "₹16,000/month" },
  ];

  // ✅ Industry filter buttons
  const industries = ["Agriculture", "Engineering", "Design", "Finance", "Marketing"];

  // ✅ Companies mapped to industries
  const industryCompanies = {
    Agriculture: [
      { name: "visa", logo: visa },
      { name: "wipro", logo: wipro },
      { name: "adani", logo: adani },
      { name: "bajaj", logo: bajaj },
      { name: "suzuki", logo: suzuki },
      { name: "drdo", logo: drdo },
      { name: "nike", logo: nike },
      { name: "hyundai", logo: hyundai },
      { name: "amazon", logo: amazon },
      { name: "flipkart", logo: flipkart },
      { name: "google", logo: google },
      { name: "microsoft", logo: microsoft },
      { name: "zomato", logo: zomato },
    ],
    Engineering: [
      { name: "Wipro", logo: wipro },
      { name: "Hyundai", logo: hyundai },
      { name: "Suzuki", logo: suzuki },
    ],
    Design: [{ name: "Nike", logo: nike }],
    Finance: [
      { name: "Visa", logo: visa },
      { name: "Bajaj", logo: bajaj },
    ],
    Marketing: [
      { name: "Adani", logo: adani },
      { name: "Wipro", logo: wipro },
    ],
  };

  return (
    <div className="bg-white text-[#333]">
      {/* ✅ Hero Section */}
      <section className="relative bg-[#766ABB] text-white py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Find Your <span className="text-yellow-300">Dream Internship</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-lg">
              Build your resume, explore trending opportunities, and land your dream role with ease.
            </p>
            <Link
              to="/form"
              className="bg-white text-[#766ABB] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition shadow"
            >
              Get Started
            </Link>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src={heroImg}
              alt="Internship illustration"
              className="w-full max-w-md rounded-lg drop-shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* ✅ Moving Companies */}
      <section className="bg-gray-100 py-6 overflow-hidden relative">
        <div className="flex animate-scroll space-x-16 items-center w-max">
          {Object.values(industryCompanies)
            .flat()
            .map((c, i) => (
              <img
                key={i}
                src={c.logo}
                alt={c.name}
                className="h-12 object-contain transition hover:scale-110"
              />
            ))}
        </div>
      </section>

      {/* ✅ Trending Internships */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-8">Trending Internships</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trending.map((job) => (
            <div
              key={job.id}
              className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-lg hover:scale-[1.02] transition"
            >
              <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
              <p className="text-gray-600">
                {job.company} – {job.location}
              </p>
              <span className="inline-block mt-2 bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full">
                {job.stipend}
              </span>
              <button className="mt-4 bg-[#766ABB] hover:bg-[#5d5294] px-4 py-2 rounded text-sm text-white">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Explore by Industry */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Explore by Industry</h2>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {industries.map((ind) => (
            <button
              key={ind}
              onClick={() => setSelectedIndustry(ind)}
              className={`px-6 py-2 rounded-lg font-medium transition ${
                selectedIndustry === ind
                  ? "bg-[#766ABB] text-white"
                  : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
              {ind}
            </button>
          ))}
        </div>

        {/* ✅ Auto-scrolling company cards */}
        <div className="overflow-hidden relative">
          <div className="flex animate-scroll-fast space-x-6 w-max px-4">
            {industryCompanies[selectedIndustry].map((c, idx) => (
              <div
                key={idx}
                className="bg-white shadow-md rounded-lg p-6 w-48 flex flex-col items-center border hover:shadow-xl hover:scale-105 transition"
              >
                <img src={c.logo} alt={c.name} className="h-16 mb-3 object-contain" />
                <h3 className="text-lg font-semibold">{c.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Footer */}
      <footer className="bg-[#766ABB] py-6 text-center text-white mt-10">
        <p>© {new Date().getFullYear()} Internshala Clone. Built with ❤️</p>
      </footer>

      {/* ✅ Animations */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          .animate-scroll {
            animation: scroll 15s linear infinite;
          }
          .animate-scroll-fast {
            animation: scroll 12s linear infinite;
          }
        `}
      </style>
    </div>
  );
}

export default Home;
