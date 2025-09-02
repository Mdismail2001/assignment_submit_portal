import React, { useState } from "react";

const SubmitAssignment = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please upload your answer sheet before submitting.");
      return;
    }
    // Later you can send this file to backend
    alert(`Assignment submitted: ${file.name}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl text-center font-bold text-gray-800 mb-6">
        📝 Submit Assignment
      </h1>

      <div className="max-w-4xl mx-auto border border-gray-200 shadow-md rounded-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gray-800 text-white text-base px-6 py-3 font-semibold">
          Assignment Description
        </div>

        {/* Body */}
        <div className="bg-gray-700 text-white p-6 text-sm leading-relaxed">
          Solve Chapter 3 (Linear Equations) & Chapter 4 (Quadratic Equations).  
          Submit in PDF format with all steps clearly shown.
        </div>
      </div>

      {/* Upload Section */}
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto mt-6 p-6 border border-gray-200 shadow-md rounded-xl bg-white"
      >
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Upload Your Answer Sheet
        </label>
        <input
          type="file"
          accept=".pdf,.doc,.docx,.jpg,.png"
          onChange={handleFileChange}
          className="block w-full border border-gray-300 rounded-lg p-2 mb-4"
        />

        <button
          type="submit"
          className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg"
        >
          Submit Assignment
        </button>
      </form>
    </div>
  );
};

export default SubmitAssignment;
