import React from "react";
import { Link } from "react-router-dom"; 

const DashboardOverview = () => {
  // Demo stats data
  const stats = [
    { title: "Total Assignments", value: 0, color: "bg-blue-500", link:"total-assignments" },
    { title: "Total Submissions", value: 0, color: "bg-indigo-500", link:"total-submission"  },
    { title: "Create Assignment", value: 0, color: "bg-purple-500", link: "create" }, 
    { title: "Accepted", value: 0, color: "bg-green-500" },
    { title: "Rejected", value: 0, color: "bg-red-500" },
    { title: "Pending", value: 0, color: "bg-yellow-500" },
  ];

  return (
    <div className="p-4 h-screen">
      <h1 className="text-2xl text-center font-bold mb-4 text-gray-900">
        Dashboard Overview
      </h1>

      {/* Cards Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {stats.map((item, index) => {
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

export default DashboardOverview;
