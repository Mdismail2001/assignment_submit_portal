import { useParams, useNavigate } from "react-router-dom";

const ViewAssinments = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const assignments = JSON.parse(localStorage.getItem("assignments")) || [];
  const assignment = assignments[id];

  if (!assignment) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-lg font-semibold text-red-400">
          Assignment not found 🚫
        </p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center text-gray mb-6">
        📑 Assignment Details
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full max-w-5xl mx-auto text-sm text-left text-white border border-gray-700  overflow-hidden bg-gray-800">
          <thead className="bg-gray-900 text-white text-base">
            <tr>
              <th scope="col" className="px-6 py-5">Title</th>
              <th scope="col" className="px-6 py-5">Description</th>
              <th scope="col" className="px-6 py-5">Deadline</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            <tr className="hover:bg-gray-700">
              <td className="px-6 py-6 font-semibold">{assignment.title}</td>
              <td className="px-6 py-6 whitespace-pre-wrap leading-relaxed">
                {assignment.description}
              </td>
              <td className="px-6 py-6 text-red-400 font-bold">
                {assignment.deadline}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex justify-center">
        <button
          onClick={() => navigate(-1)}
          className="px-5 py-3 rounded-lg bg-gray-600 text-white hover:bg-gray-500 transition"
        >
          ⬅ Back
        </button>
      </div>
    </div>
  );
};

export default ViewAssinments;
