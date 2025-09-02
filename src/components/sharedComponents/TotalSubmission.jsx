import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TotalSubmission = () => {
  const navigate = useNavigate();

  // Check & insert demo data once
  useEffect(() => {
    const submissions = JSON.parse(localStorage.getItem("submissions")) || [];
    if (submissions.length === 0) {
      const demo = [
        {
          title: "Math Assignment 1",
          date: "2025-08-22",
          content: "Solved algebra problems",
        },
        {
          title: "Science Assignment 2",
          date: "2025-08-23",
          content: "Physics lab report",
        }
      ];
      localStorage.setItem("submissions", JSON.stringify(demo));
    }
  }, []);

  const submissions = JSON.parse(localStorage.getItem("submissions")) || [];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center text-gray mb-6">
        📥 Total Submissions
      </h1>
      <div className="overflow-x-auto">
        <table className="w-full max-w-5xl mx-auto text-sm text-left text-white border border-gray-700 shadow-lg rounded-lg overflow-hidden bg-gray-800">
          <thead className="bg-gray-900 text-white text-base">
            <tr>
              <th className="px-6 py-5">Title</th>
              <th className="px-6 py-5">Submission Date</th>
              <th className="px-6 py-5">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {submissions.map((submission, index) => (
              <tr key={index} className="hover:bg-gray-700">
                <td className="px-6 py-6 font-semibold">{submission.title}</td>
                <td className="px-6 py-6">{submission.date}</td>
                <td className="px-6 py-6">
                  <button
                    onClick={() => navigate(`total-submission/${index}`)}
                    className="px-4 py-2 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 transition"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TotalSubmission;
