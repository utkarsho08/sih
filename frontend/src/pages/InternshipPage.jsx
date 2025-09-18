import { useState } from "react";

function InternshipPage() {
  const internships = [
    { id: 1, title: "Web Development Intern", company: "Google", location: "Remote", stipend: 10000, duration: "3 Months", category: "Engineering" },
    { id: 2, title: "Data Analyst Intern", company: "Microsoft", location: "Bangalore", stipend: 15000, duration: "2 Months", category: "Engineering" },
    { id: 3, title: "Marketing Intern", company: "Zomato", location: "Mumbai", stipend: 8000, duration: "1 Month", category: "Marketing" },
    { id: 4, title: "Graphic Design Intern", company: "Adobe", location: "Delhi", stipend: 12000, duration: "4 Months", category: "Design" },
    { id: 5, title: "Finance Intern", company: "Flipkart", location: "Hyderabad", stipend: 10000, duration: "3 Months", category: "Finance" },
    { id: 6, title: "Content Writing Intern", company: "Times of India", location: "Remote", stipend: 7000, duration: "2 Months", category: "Writing" },
    { id: 7, title: "Human Resources Intern", company: "Wipro", location: "Chennai", stipend: 9000, duration: "3 Months", category: "HR" },
    { id: 8, title: "Cybersecurity Intern", company: "Infosys", location: "Pune", stipend: 14000, duration: "3 Months", category: "Engineering" },
    { id: 9, title: "AI/ML Intern", company: "NVIDIA", location: "Bangalore", stipend: 20000, duration: "6 Months", category: "Engineering" },
    { id: 10, title: "Sales Intern", company: "Byju’s", location: "Delhi", stipend: 6000, duration: "1 Month", category: "Sales" },
    { id: 11, title: "Business Development Intern", company: "Swiggy", location: "Kolkata", stipend: 8500, duration: "2 Months", category: "Sales" },
    { id: 12, title: "Game Development Intern", company: "Ubisoft", location: "Mumbai", stipend: 12000, duration: "3 Months", category: "Engineering" },
    { id: 13, title: "Cloud Computing Intern", company: "AWS", location: "Hyderabad", stipend: 18000, duration: "4 Months", category: "Engineering" },
    { id: 14, title: "Social Media Intern", company: "Instagram", location: "Remote", stipend: 9000, duration: "2 Months", category: "Marketing" },
    { id: 15, title: "Product Management Intern", company: "Paytm", location: "Noida", stipend: 16000, duration: "3 Months", category: "Management" },
    { id: 16, title: "Blockchain Intern", company: "Polygon", location: "Bangalore", stipend: 20000, duration: "5 Months", category: "Engineering" },
    { id: 17, title: "Data Entry Intern", company: "Government Office", location: "Lucknow", stipend: 5000, duration: "2 Months", category: "Others" },
    { id: 18, title: "Research Intern", company: "IIT Bombay", location: "Mumbai", stipend: 12000, duration: "2 Months", category: "Research" },
    { id: 19, title: "Video Editing Intern", company: "YouTube India", location: "Remote", stipend: 10000, duration: "3 Months", category: "Design" },
    { id: 20, title: "Law Intern", company: "Supreme Court Lawyer", location: "Delhi", stipend: 7500, duration: "1 Month", category: "Law" },
  ];

  const [filters, setFilters] = useState({
    location: "",
    category: "",
    minStipend: "",
  });

  const filteredInternships = internships.filter((i) => {
    return (
      (filters.location === "" || i.location.toLowerCase().includes(filters.location.toLowerCase())) &&
      (filters.category === "" || i.category === filters.category) &&
      (filters.minStipend === "" || i.stipend >= Number(filters.minStipend))
    );
  });

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-[#766ABB] mb-8 text-center">
        AI Recommended Internships
      </h1>

      {/* Filters Section */}
      <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md mb-8 flex flex-col md:flex-row md:items-center md:space-x-6 space-y-4 md:space-y-0">
        {/* Location Filter */}
        <input
          type="text"
          placeholder="Filter by Location"
          value={filters.location}
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/3"
        />

        {/* Category Filter */}
        <select
          value={filters.category}
          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/3"
        >
          <option value="">All Categories</option>
          <option value="Engineering">Engineering</option>
          <option value="Design">Design</option>
          <option value="Marketing">Marketing</option>
          <option value="Finance">Finance</option>
          <option value="Writing">Writing</option>
          <option value="HR">HR</option>
          <option value="Sales">Sales</option>
          <option value="Management">Management</option>
          <option value="Research">Research</option>
          <option value="Law">Law</option>
          <option value="Others">Others</option>
        </select>

        {/* Stipend Filter */}
        <input
          type="number"
          placeholder="Min Stipend (₹)"
          value={filters.minStipend}
          onChange={(e) => setFilters({ ...filters, minStipend: e.target.value })}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/3"
        />
      </div>

      {/* Internship Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredInternships.map((internship) => (
          <div
            key={internship.id}
            className="bg-white text-gray-800 rounded-lg shadow-md p-6 hover:shadow-xl transition transform hover:scale-105"
          >
            <h2 className="text-xl font-bold text-[#766ABB] mb-2">
              {internship.title}
            </h2>
            <p className="font-semibold">{internship.company}</p>
            <p className="text-sm text-gray-600">{internship.location}</p>
            <p className="text-sm text-gray-500">{internship.category}</p>

            {/* ✅ Styled stipend + duration */}
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-block bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full">
                ₹{internship.stipend}
              </span>
              <span className="inline-block bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">
                {internship.duration}
              </span>
            </div>

            <button className="mt-6 w-full bg-[#766ABB] text-white py-2 rounded-lg font-semibold hover:bg-[#5a4a99] transition">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InternshipPage;
