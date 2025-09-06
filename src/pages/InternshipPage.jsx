function InternshipPage() {
    const internships = [
        { id: 1, title: "Frontend Developer Intern", company: "Tech Corp", location: "Remote" },
        { id: 2, title: "Backend Developer Intern", company: "CodeWorks", location: "Bangalore" },
        { id: 3, title: "UI/UX Designer Intern", company: "DesignHub", location: "Delhi" },
    ];

    return (
        <div className="max-w-4xl mx-auto mt-6">
            <h2 className="text-2xl font-bold mb-6">Available Internships</h2>
            <div className="space-y-4">
                {internships.map((job) => (
                    <div key={job.id} className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold">{job.title}</h3>
                        <p className="text-gray-400">{job.company} – {job.location}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default InternshipPage;