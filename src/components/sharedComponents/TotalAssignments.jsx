import React from "react";
import { useNavigate } from "react-router-dom";

const TotalAssignments = () => {
// Get assignments from localStorage
  const assignments = JSON.parse(localStorage.getItem("assignments")) || [];
  const navigate = useNavigate();


  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center text-gray-800 ">
        Total Assignments
      </h1>

      {assignments.length === 0 ? (
        <div className="flex items-center justify-center py-10">
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            📂 No assignments found.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto  border border-gray-200 dark:border-gray-700">
          <table className="w-full text-sm text-left text-gray-700 dark:text-gray-300">
            {/* Table Header */}
            <thead className="text-xs uppercase bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
              <tr>
                <th className="px-6 py-3">No</th>
                <th className="px-6 py-3">Title</th>
                <th className="px-6 py-3">Deadline</th>
                <th className="px-6 py-3 text-center">Action</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {assignments.map((assignment, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 font-semibold text-blue-600 dark:text-blue-400">
                    {assignment.title}
                  </td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                    {assignment.deadline}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button
                    onClick={() => navigate(`total-assignments/${index}`)}
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
      )}
    </div>
  );
};

export default TotalAssignments;
