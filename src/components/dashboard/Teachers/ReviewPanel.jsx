import React, { useState } from "react";

const ReviewPanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Mock student submission data
  const studentSubmission = {
    name: "John Doe",
    url: "https://example.com/submissions/john-doe-math1",
    note: "Please check my work carefully, I added extra examples.",
  };

  return (
    <div className="p-6 h-screen">
      {/* Review Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Review
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white dark:bg-gray-800 w-full max-w-lg rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
              Review Submission
            </h2>

            {/* Student Info */}
            <div className="space-y-3">
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-medium">Student:</span> {studentSubmission.name}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-medium">Submission URL:</span>{" "}
                <a
                  href={studentSubmission.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  View Work
                </a>
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-medium">Note:</span> {studentSubmission.note}
              </p>
            </div>

            {/* Status Dropdown */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Status
              </label>
              <select className="w-full border rounded-lg p-2 dark:bg-gray-700 dark:text-gray-200">
                <option>Pending</option>
                <option>Accepted</option>
                <option>Rejected</option>
              </select>
            </div>

            {/* Feedback */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Feedback
              </label>
              <textarea
                rows="3"
                className="w-full border rounded-lg p-2 dark:bg-gray-700 dark:text-gray-200"
                placeholder="Write feedback for the student..."
              ></textarea>
            </div>

            {/* Actions */}
            <div className="flex justify-end mt-6 gap-3">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Save logic here
                  setIsOpen(false);
                }}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Save Review
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewPanel;
