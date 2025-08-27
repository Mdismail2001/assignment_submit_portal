import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [assignment, setAssignment] = useState(null);

  // Load assignment from localStorage
  useEffect(() => {
    const assignments = JSON.parse(localStorage.getItem("assignments")) || [];
    if (assignments[id]) {
      setAssignment(assignments[id]);
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAssignment((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    const assignments = JSON.parse(localStorage.getItem("assignments")) || [];
    assignments[id] = assignment;
    localStorage.setItem("assignments", JSON.stringify(assignments));
    navigate("/teacher-dashboard/ass-table");
  };

  if (!assignment) {
    return <p className="p-4 text-red-500">Assignment not found</p>;
  }

  return (
    <div className="h-screen p-6 bg-white">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900  p-6">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
          Edit Assignment
        </h1>

        <table className="w-full border border-gray-200 divide-y divide-gray-200 dark:divide-gray-700 dark:border-gray-700  overflow-hidden">
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {/* Title */}
            <tr className="bg-white dark:bg-gray-800">
              <td className="px-6 py-4 text-sm font-medium text-gray-700 dark:text-gray-300 w-1/4">
                Title
              </td>
              <td className="px-6 py-4">
                <input
                  type="text"
                  name="title"
                  value={assignment.title}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200"
                />
              </td>
            </tr>

            {/* Description */}
            <tr className="bg-white dark:bg-gray-800">
              <td className="px-6 py-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                Description
              </td>
              <td className="px-6 py-4">
                <textarea
                  name="description"
                  value={assignment.description || ""}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200"
                />
              </td>
            </tr>

            {/* Deadline */}
            <tr className="bg-white dark:bg-gray-800">
              <td className="px-6 py-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                Deadline
              </td>
              <td className="px-6 py-4">
                <input
                  type="date"
                  name="deadline"
                  value={assignment.deadline}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200"
                />
              </td>
            </tr>
          </tbody>
        </table>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={() => navigate("/teacher-dashboard/ass-table")}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Edit;
