import { Link } from "react-router-dom";

function Home() {
  const trending = [
    { id: 1, title: "Web Development", company: "Google", location: "Remote" },
    { id: 2, title: "Data Science", company: "Microsoft", location: "Bangalore" },
    { id: 3, title: "UI/UX Design", company: "Adobe", location: "Delhi" },
    { id: 4, title: "Marketing", company: "Zomato", location: "Mumbai" },
  ];

  const categories = [
    { id: 1, name: "Engineering", img: "https://img.icons8.com/color/96/000000/engineering.png" },
    { id: 2, name: "Design", img: "https://img.icons8.com/color/96/000000/design.png" },
    { id: 3, name: "Marketing", img: "https://img.icons8.com/color/96/000000/money.png" },
    { id: 4, name: "Finance", img: "https://img.icons8.com/color/96/000000/money.png" },
  ];

const companies = [
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  // { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Adobe_Corporate_logo.png" },
  // { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo.svg" },
  { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { name: "Zomato", logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png" },
  // { name: "Flipkart", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flipkart_logo.png" },
];


  return (
    <div className="bg-white text-[#333]">
      {/* Hero Section */}
      <section className="relative bg-[#766ABB] text-white py-24 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Find Your Dream Internship 
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
          Build your resume, explore trending opportunities, and land your dream role with ease.
        </p>
        <Link
          to="/form"
          className="bg-white text-[#766ABB] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition shadow"
        >
          Get Started
        </Link>
      </section>

      {/* Moving Companies */}
      <section className="bg-gray-100 py-6 overflow-hidden relative">
        <div className="flex animate-scroll space-x-16 items-center w-max">
          {[...companies, ...companies].map((c, i) => (
            <img
              key={i}
              src={c.logo}
              alt={c.name}
              className="h-12 object-contain transition"
            />
          ))}
        </div>
      </section>

      {/* Trending Internships */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-8"> Trending Internships</h2>
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
            What are you looking for today?
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

      {/* Custom CSS for marquee */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 25s linear infinite;
          }
        `}
      </style>
    </div>
  );
}

export default Home;
