import React from "react";
import { useNavigate } from "react-router-dom";

const AvailableAssignments = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h1 className="text-3xl text-center font-bold text-gray-800 mb-4">
        📚 Available Assignments
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full max-w-5xl mx-auto text-sm text-left border border-gray-200 shadow-md rounded-xl overflow-hidden">
          <thead className="bg-gray-800 text-white text-base">
            <tr>
              <th className="px-6 py-3">Title</th>
              <th className="px-6 py-3">Deadline</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-gray-700 text-white">
            <tr className="hover:bg-gray-600">
              <td className="px-6 py-4 font-semibold">Math Algebra Worksheet</td>
              <td className="px-6 py-4">2025-08-30</td>
              <td className="px-6 py-4">
                <button
                  onClick={() => navigate("views")}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-white text-sm font-medium"
                >
                  View
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AvailableAssignments;
