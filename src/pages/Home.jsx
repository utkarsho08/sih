import { Link } from "react-router-dom";

function Home() {
    const trending = [
        { id: 1, title: "Web Development", company: "Google", location: "Remote" },
        { id: 2, title: "Data Science", company: "Microsoft", location: "Bangalore" },
        { id: 3, title: "UI/UX Design", company: "Adobe", location: "Delhi" },
        { id: 4, title: "Marketing", company: "Zomato", location: "Mumbai" },
    ];

    const categories = [
        { id: 1, name: "Engineering", img: "https://via.placeholder.com/150" },
        { id: 2, name: "Design", img: "https://via.placeholder.com/150" },
        { id: 3, name: "Marketing", img: "https://via.placeholder.com/150" },
        { id: 4, name: "Finance", img: "https://via.placeholder.com/150" },
    ];

    const companies = [
        "Google", "Microsoft", "Amazon", "Adobe", "Meta", "Netflix", "Zomato", "Flipkart"
    ];

    return (
        <div>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-20 text-center">
                <h1 className="text-5xl font-bold mb-6">Find Your Dream Internship 🚀</h1>
                <p className="text-lg mb-8 text-gray-200">
                    Build your resume, explore trending opportunities, and land your dream role.
                </p>
                <Link
                    to="/form"
                    className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg font-semibold"
                >
                    Get Started
                </Link>
            </section>

            {/* Moving Companies */}
            <section className="overflow-hidden bg-gray-800 py-6">
                <div className="animate-marquee whitespace-nowrap flex space-x-10 text-gray-300 font-semibold text-lg">
                    {companies.map((c, i) => (
                        <span key={i}>{c}</span>
                    ))}
                </div>
            </section>

            {/* Trending Internships */}
            <section className="max-w-6xl mx-auto py-12 px-6">
                <h2 className="text-3xl font-bold mb-8">🔥 Trending Internships</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {trending.map((job) => (
                        <div key={job.id} className="bg-gray-800 p-6 rounded-lg shadow-md hover:scale-105 transition">
                            <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                            <p className="text-gray-400">{job.company} – {job.location}</p>
                            <button className="mt-4 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-sm">
                                Apply Now
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Categories */}
            <section className="bg-gray-900 py-12 px-6">
                <h2 className="text-3xl font-bold mb-8">📌 What are you looking for today?</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((cat) => (
                        <div key={cat.id} className="bg-gray-800 p-6 rounded-lg text-center hover:scale-105 transition">
                            <img
                                src={cat.img}
                                alt={cat.name}
                                className="mx-auto mb-4 rounded-md"
                            />
                            <h3 className="text-lg font-semibold">{cat.name}</h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 py-6 text-center text-gray-400 mt-10">
                <p>© {new Date().getFullYear()} Internshala Clone. Built with ❤️</p>
            </footer>
        </div>
    );
}

export default Home;