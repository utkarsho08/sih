import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-gray-800 shadow-md px-6 py-4 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-blue-400">
                Internshala Clone
            </Link>
            <div className="space-x-6">
                <Link to="/" className="hover:text-blue-400">Home</Link>
                <Link to="/form" className="hover:text-blue-400">Create Resume</Link>
                <Link to="/resume" className="hover:text-blue-400">Preview Resume</Link>
                <Link to="/internships" className="hover:text-blue-400">Internships</Link>
            </div>
        </nav>
    );
}

export default Navbar;