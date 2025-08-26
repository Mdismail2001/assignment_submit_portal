import React from "react";

const TeacherAssTable = () => {
  // Get assignments from localStorage
  const assignments = JSON.parse(localStorage.getItem("assignments")) || [];

  const columns = [
    { label: "Title", key: "title" },
    { label: "Deadline", key: "deadline" },
    { label: "Submissions", key: "submissions" },
    { label: "Action", key: "action" },
  ];

  return (
    <div className="overflow-x-auto h-screen p-4">
      <h1 className="text-2xl text-center font-bold mb-4 text-gray-900 ">
        Assignments Table
      </h1>

      <table className="w-full border border-gray-200 divide-y divide-gray-200 dark:divide-gray-700 dark:border-gray-700">
        {/* Head */}
        <thead className="bg-gray-50 dark:bg-gray-700">
          <tr>
            {columns.map((col, index) => (
              <th
                key={index}
                scope="col"
                className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        {/* Body */}
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {assignments.length > 0 ? (
            assignments.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-200">
                  {row.title}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-200">
                  {row.deadline}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-200">
                  {row.submissions || "0/0"}
                </td>
                <td className="px-6 py-4 flex gap-2">
                  <button className="px-3 py-1 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700">
                    Edit
                  </button>
                  <button className="px-3 py-1 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={4}
                className="px-6 py-4 text-center text-gray-500 dark:text-gray-400"
              >
                No assignments found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherAssTable;
