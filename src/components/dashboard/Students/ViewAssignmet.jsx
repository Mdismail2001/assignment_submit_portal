import React from "react";
import { useNavigate } from "react-router-dom";

const Views = () => {
  const navigate = useNavigate();

  const handleSubmitClick = () => {
    navigate("submit");
  };

  const handleBackClick = () => {
    navigate(-1); // go back to previous page
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl text-center font-bold text-gray-800 mb-4">
        📘 Assignment Details
      </h1>

      {/* Styled box */}
      <div className="max-w-5xl mx-auto border border-gray-200 shadow-md rounded-xl overflow-hidden">
        <div className="bg-gray-800 text-white text-base px-6 py-3 font-semibold">
          Assignment Information
        </div>
        <div className="bg-gray-700 text-white p-6 text-sm leading-relaxed">
          <div className="flex justify-between items-start">
            {/* Description (left side) */}
            <p className="w-3/4">
              Solve Chapter 3 (Linear Equations) & Chapter 4 (Quadratic
              Equations). Submit in PDF format with all steps clearly shown.
            </p>

            {/* Marks (right side) */}
            <p className="w-1/4 text-right font-semibold text-blue-300">
              Marks: <span className="text-white">20</span>
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={handleSubmitClick}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg text-white text-sm font-medium"
        >
          Go to Submit ➝
        </button>
        <button
          onClick={handleBackClick}
          className="px-6 py-3 bg-gray-500 hover:bg-gray-400 rounded-lg text-white text-sm font-medium"
        >
          ⬅ Back
        </button>
      </div>
    </div>
  );
};

export default Views;
