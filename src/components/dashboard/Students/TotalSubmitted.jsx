import React from "react";

const TotalSubmitted = () => {
  // Mock data (later replace with data from backend)
  const submissions = [
    {
      id: 1,
      title: "Math Assignment - Linear Equations",
      date: "2025-08-18",
      status: "Accepted",
      marks: 18,
    },
    {
      id: 2,
      title: "Physics Assignment - Motion Laws",
      date: "2025-08-20",
      status: "Pending",
      marks: "-",
    },
    {
      id: 3,
      title: "Chemistry Assignment - Organic Compounds",
      date: "2025-08-22",
      status: "Rejected",
      marks: 0,
    },
  ];

  // Color for status
  const getStatusColor = (status) => {
    switch (status) {
      case "Accepted":
        return "text-green-600 font-semibold";
      case "Rejected":
        return "text-red-600 font-semibold";
      default:
        return "text-yellow-600 font-semibold";
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl text-center font-bold text-gray-800 mb-6">
        📊 Submitted Assignments
      </h1>

      <div className="overflow-x-auto max-w-5xl mx-auto shadow-md rounded-lg border border-gray-200">
        <table className="w-full text-sm text-left text-gray-600">
          <thead className="bg-gray-800 text-white text-sm uppercase">
            <tr>
              <th className="px-6 py-3">Title</th>
              <th className="px-6 py-3">Submission Date</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Marks</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {submissions.map((sub) => (
              <tr key={sub.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">{sub.title}</td>
                <td className="px-6 py-4">{sub.date}</td>
                <td className={`px-6 py-4 ${getStatusColor(sub.status)}`}>
                  {sub.status}
                </td>
                <td className="px-6 py-4">{sub.marks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TotalSubmitted;
