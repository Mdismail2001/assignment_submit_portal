import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const OverView = () => {
  const [stats, setStats] = useState({
    totalAssignments: 0,
    totalSubmissions: 0,
    accepted: 0,
    rejected: 0,
    pending: 0,
  });

  useEffect(() => {
    // ✅ Load assignments from localStorage
    const assignments = JSON.parse(localStorage.getItem("assignments")) || [];
    const submissions = JSON.parse(localStorage.getItem("submissions")) || [];

    // Count status
    const accepted = submissions.filter((s) => s.status === "accepted").length;
    const rejected = submissions.filter((s) => s.status === "rejected").length;
    const pending = submissions.filter((s) => s.status === "pending").length;

    setStats({
      totalAssignments: assignments.length,
      totalSubmissions: submissions.length,
      accepted,
      rejected,
      pending,
    });
  }, []); // runs once when page loads
  // ✅ Cards data linked to stats
  const cards = [
    { title: "Available Assignments", value:'0', color: "bg-blue-500", link: "available-ass" },
    { title: "Total Submitted", value:'0', color: "bg-indigo-500", link: "total-submitted" },
    // { title: "Submitted", value: stats.totalAssignments, color: "bg-purple-500", link: "create" },
    // { title: "Accepted", value: stats.accepted, color: "bg-green-500" },
    // { title: "Rejected", value: stats.rejected, color: "bg-red-500" },
    // { title: "Pending", value: stats.pending, color: "bg-yellow-500" },
  ];

  return (
    <div className="p-4 h-screen">
      <h1 className="text-3xl text-center font-bold mb-4 text-gray-900">
        Dashboard Overview
      </h1>

      {/* Cards Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {cards.map((item, index) => {
          const card = (
            <div
              key={index}
              className="rounded-2xl shadow-md p-6 bg-white dark:bg-gray-800 flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition"
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full text-white ${item.color}`}
              >
                {item.value}
              </div>
              <p className="mt-3 text-sm font-medium text-gray-600 dark:text-gray-400">
                {item.title}
              </p>
            </div>
          );

          // ✅ Wrap with Link if it has a link
          return item.link ? (
            <Link key={index} to={item.link}>
              {card}
            </Link>
          ) : (
            card
          );
        })}
      </div>
    </div>
  );
};

export default OverView;
