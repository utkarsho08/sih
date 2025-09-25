import { useState } from "react";

const adviceList = [
  {
    title: "How to write a perfect resume",
    content:
      "Learn how to highlight your skills, projects, and achievements to make your resume stand out to recruiters.",
  },
  {
    title: "Cracking internship interviews.",
    content:
      "Discover strategies to prepare for common interview questions and make a strong impression.",
  },
  {
    title: "Networking strategies for students",
    content:
      "Tips on connecting with professionals, leveraging LinkedIn, and building meaningful relationships.",
  },
  {
    title: "Building skills for future jobs",
    content:
      "Identify in-demand skills, certifications, and online courses to prepare for your dream career.",
  },
  {
    title: "Career growth & mindset tips",
    content:
      "Learn how to stay motivated, set goals, and develop a growth mindset for long-term success.",
  },
];

function Career() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-[#766ABB] mb-6">
        Career Advice 💼
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Explore tips and resources to boost your career journey:
      </p>

      <div className="space-y-4">
        {adviceList.map((advice, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 cursor-pointer hover:shadow-lg transition"
            onClick={() => toggleExpand(index)}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-800">
                {advice.title}
              </h2>
              <span className="text-[#766ABB] font-bold">
                {expandedIndex === index ? "−" : "+"}
              </span>
            </div>
            {expandedIndex === index && (
              <p className="mt-2 text-gray-600">{advice.content}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Career;
