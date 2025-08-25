import React from "react";
import { Card } from "flowbite-react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

// Dummy LegendDot component (replace with your own if needed)
const LegendDot = ({ label, className, value }) => (
  <div className="flex items-center gap-1">
    <span className={`inline-block w-3 h-3 rounded-full ${className}`}></span>
    <span>{label}</span>
    <span className="ml-1 font-semibold">{value}</span>
  </div>
);

const PieChart = ({
  title = "Submission Status",
  accepted = 30,
  rejected = 10,
  pending = 8,
}) => {
  const data = {
    labels: ["Accepted", "Rejected", "Pending"],
    datasets: [
      {
        data: [accepted, rejected, pending],
        backgroundColor: ["#22c55e", "#ef4444", "#f59e0b"], // green, red, yellow
        borderColor: ["#15803d", "#b91c1c", "#b45309"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "bottom" },
      tooltip: {
        callbacks: {
          label: (ctx) => {
            const label = ctx.label || "";
            const value = ctx.parsed || 0;
            const total = ctx.dataset.data.reduce((a, b) => a + b, 0);
            const pct = total ? ((value / total) * 100).toFixed(1) : 0;
            return `${label}: ${value} (${pct}%)`;
          },
        },
      },
    },
  };

  return (
    <div className="w-full p-4   ">
      <h1 className="text-2xl text-center font-bold mb-4 text-gray-900 ">
      Pie Chart
      </h1>
      <div className="flex items-center justify-center h-full">
      <Card className="w-full p-4 max-w-md select-none">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Accepted / Rejected / Pending
            </p>
          </div>
        </div>

        {/* Chart container needs a fixed height for responsive charts */}
        <div className="mt-4 h-64">
          <Pie data={data} options={options} />
        </div>

        <div className="mt-2 grid grid-cols-3 gap-2 text-xs">
          <LegendDot label="Accepted" className="bg-green-500" value={accepted} />
          <LegendDot label="Rejected" className="bg-red-500" value={rejected} />
          <LegendDot label="Pending" className="bg-yellow-500" value={pending} />
        </div>
      </Card>
      </div>
    </div>
  );
};

export default PieChart;