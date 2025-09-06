import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="text-center mt-20">
            <h1 className="text-4xl font-bold mb-6">Welcome to Internshala Clone 🚀</h1>
            <p className="text-lg text-gray-300 mb-10">
                Create your resume and find the best internships matched to your skills.
            </p>
            <Link
                to="/form"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold"
            >
                Get Started
            </Link>
        </div>
    );
}

export default Home;