import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const ViewSubmission = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Get all submissions from localStorage
  const submissions = JSON.parse(localStorage.getItem("submissions")) || [];
  const submission = submissions[id];

  if (!submission) {
    return <p className="text-center text-red-500 text-lg">Submission not found 🚫</p>;
  }

  return (
    <div className="p-6">
      {/* Assignment Header */}
      <h1 className="text-3xl font-bold text-center text-gray mb-6">
        📄 {submission.title} - Submissions
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full max-w-4xl mx-auto text-sm text-left text-white border border-gray-700 shadow-lg rounded-lg overflow-hidden bg-gray-800">
          <thead className="bg-gray-900 text-white text-base">
            <tr>
              <th className="px-6 py-4">Student ID</th>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">ID/Roll</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {submission.students && submission.students.length > 0 ? (
              submission.students.map((student, index) => (
                <tr key={index} className="hover:bg-gray-700">
                  <td className="px-6 py-4">{student.id}</td>
                  <td className="px-6 py-4 font-semibold">{student.name}</td>
                  <td className="px-6 py-4">{student.roll}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="3"
                  className="text-center px-6 py-6 text-gray-400"
                >
                  No students submitted yet 🚫
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Back Button */}
      <div className="text-center mt-6">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 transition"
        >
          🔙 Back
        </button>
      </div>
    </div>
  );
};

export default ViewSubmission;
