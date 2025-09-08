import { useState, useRef } from "react";
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
import heroImg from "../assets/images/hero.jpg";
import "./Home.css";

function Home() {
  const [selectedIndustry, setSelectedIndustry] = useState("Agriculture");
  const scrollRef = useRef(null);

  const trending = [
    { id: 1, title: "Web Development", company: "Google", location: "Remote", stipend: "₹15,000/month" },
    { id: 2, title: "Data Science", company: "Microsoft", location: "Bangalore", stipend: "₹20,000/month" },
    { id: 3, title: "UI/UX Design", company: "Adobe", location: "Delhi", stipend: "₹12,000/month" },
    { id: 4, title: "AI Research Intern", company: "OpenAI", location: "Remote", stipend: "₹25,000/month" },
    { id: 5, title: "Cloud Engineering", company: "Amazon", location: "Hyderabad", stipend: "₹18,000/month" },
    { id: 6, title: "Cybersecurity Analyst", company: "Cisco", location: "Pune", stipend: "₹16,000/month" },
  ];

  const industries = ["Agriculture", "Engineering", "Design", "Finance", "Marketing"];

  const industryCompanies = {
    Agriculture: [
      { name: "Visa", logo: visa },
      { name: "Wipro", logo: wipro },
      { name: "Adani", logo: adani },
      { name: "Bajaj", logo: bajaj },
      { name: "Suzuki", logo: suzuki },
      { name: "DRDO", logo: drdo },
      { name: "Nike", logo: nike },
      { name: "Hyundai", logo: hyundai },
      { name: "Amazon", logo: amazon },
      { name: "Flipkart", logo: flipkart },
      { name: "Google", logo: google },
      { name: "Microsoft", logo: microsoft },
      { name: "Zomato", logo: zomato },
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

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth;
      if (direction === "left") {
        scrollRef.current.scrollTo({
          left: scrollLeft - scrollAmount,
          behavior: "smooth",
        });
      } else {
        scrollRef.current.scrollTo({
          left: scrollLeft + scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="bg-white text-[#333]">
      {/* ✅ Hero Section */}
      <section className="relative bg-[#766ABB] text-white py-16 md:py-24 px-6 overflow-hidden">
        {/* Floating circles */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-white opacity-10 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-white opacity-10 rounded-full animate-bounce-slow"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Find Your <span className="text-yellow-300">Dream Internship</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-lg">
              Upload your resume, explore trending opportunities, and land your dream role with ease.
            </p>
            <Link
              to="/form"
              className="bg-white text-[#766ABB] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition shadow transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>
          <div className="flex justify-center md:justify-end animate-fade-in-up delay-200">
            <img
              src={heroImg}
              alt="Internship illustration"
              className="w-full max-w-md rounded-lg drop-shadow-lg hover:scale-105 transform transition duration-500"
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

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {industries.map((ind) => (
            <button
              key={ind}
              onClick={() => setSelectedIndustry(ind)}
              className={`px-6 py-2 rounded-lg font-medium transition ${selectedIndustry === ind
                ? "bg-[#766ABB] text-white"
                : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
            >
              {ind}
            </button>
          ))}
        </div>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#766ABB] text-white px-3 py-2 rounded-full z-10 hover:bg-[#5d5294] shadow"
          >
            &#8592;
          </button>

          <div
            ref={scrollRef}
            className="flex flex-nowrap space-x-6 px-4 overflow-x-auto scrollbar-hide"
          >
            {industryCompanies[selectedIndustry].map((c, idx) => (
              <div
                key={idx}
                className="bg-white shadow-md rounded-lg p-6 w-48 flex-shrink-0 flex flex-col items-center border hover:shadow-xl hover:scale-105 transition"
              >
                <img src={c.logo} alt={c.name} className="h-16 mb-3 object-contain" />
                <h3 className="text-lg font-semibold">{c.name}</h3>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#766ABB] text-white px-3 py-2 rounded-full z-10 hover:bg-[#5d5294] shadow"
          >
            &#8594;
          </button>
        </div>
      </section>

      {/* ✅ Footer */}
      <footer className="bg-[#766ABB] py-10 text-white mt-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p>© {new Date().getFullYear()} Internship Platform</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-yellow-300">About</a>
            <a href="#" className="hover:text-yellow-300">Contact</a>
            <a href="#" className="hover:text-yellow-300">Privacy Policy</a>
          </div>
        </div>
      </footer>

      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          .animate-scroll {
            animation: scroll 150s linear infinite;
          }

          /* Hide scrollbar */
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </div>
  );
}

export default Home;
