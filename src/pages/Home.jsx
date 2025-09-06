import { Link } from "react-router-dom";

function Home() {
  const trending = [
    { id: 1, title: "Web Development", company: "Google", location: "Remote" },
    { id: 2, title: "Data Science", company: "Microsoft", location: "Bangalore" },
    { id: 3, title: "UI/UX Design", company: "Adobe", location: "Delhi" },
    { id: 4, title: "Marketing", company: "Zomato", location: "Mumbai" },
  ];

  const categories = [
    {
      id: 1,
      name: "Engineering",
      img: "https://img.icons8.com/color/96/engineering.png",
    },
    {
      id: 2,
      name: "Design",
      img: "https://img.icons8.com/color/96/design.png",
    },
    {
      id: 3,
      name: "Marketing",
      img: "https://img.icons8.com/color/96/000000/marketing.png",
    },
    {
      id: 4,
      name: "Finance",
      img: "https://img.icons8.com/color/96/money.png",
    },
  ];

  const companies = [
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Adobe_Corporate_logo.svg" },
    { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo.svg" },
    { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
    { name: "Zomato", logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png" },
    { name: "Flipkart", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Flipkart_logo.png" },
  ];

  return (
    <div className="bg-white text-[#333]">
      {/* Hero Section */}
      <section className="relative bg-[#766ABB] text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Find Your Dream Internship 🚀
        </h1>
        <p className="text-lg mb-8 text-gray-100">
          Build your resume, explore trending opportunities, and land your dream role.
        </p>
        <Link
          to="/form"
          className="bg-white text-[#766ABB] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition"
        >
          Get Started
        </Link>
      </section>

      {/* Moving Companies */}
      <section className="overflow-hidden bg-gray-100 py-6">
        <div className="animate-marquee flex space-x-16 items-center">
          {companies.map((c, i) => (
            <img
              key={i}
              src={c.logo}
              alt={c.name}
              className="h-10 object-contain grayscale hover:grayscale-0 transition"
            />
          ))}
        </div>
      </section>

      {/* Trending Internships */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-8">🔥 Trending Internships</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trending.map((job) => (
            <div
              key={job.id}
              className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
              <p className="text-gray-600">
                {job.company} – {job.location}
              </p>
              <button className="mt-4 bg-[#766ABB] hover:bg-[#5d5294] px-4 py-2 rounded text-sm text-white">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold mb-8">
          📌 What are you looking for today?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white p-6 rounded-lg text-center shadow-sm border border-gray-200 hover:shadow-md transition"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="mx-auto mb-4 w-20 h-20"
              />
              <h3 className="text-lg font-semibold">{cat.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#766ABB] py-6 text-center text-white mt-10">
        <p>© {new Date().getFullYear()} Internshala Clone. Built with ❤️</p>
      </footer>
    </div>
  );
}

export default Home;
