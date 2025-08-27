import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AssignmentCreate = ({ onSave, editingAssignment }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  // Load existing assignment into form when editing
  useEffect(() => {
    if (editingAssignment) {
      setTitle(editingAssignment.title);
      setDescription(editingAssignment.description);
      setDeadline(editingAssignment.deadline);
    }
  }, [editingAssignment]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newAssignment = {
      id: editingAssignment ? editingAssignment.id : Date.now(),
      title,
      description,
      deadline,
    };

    // Get assignments from localStorage
    const storedAssignments =
      JSON.parse(localStorage.getItem("assignments")) || [];

    // Update or add
    let updatedAssignments;
    if (editingAssignment) {
      updatedAssignments = storedAssignments.map((a) =>
        a.id === editingAssignment.id ? newAssignment : a
      );
    } else {
      updatedAssignments = [...storedAssignments, newAssignment];
    }

    // Save back
    localStorage.setItem("assignments", JSON.stringify(updatedAssignments));

    if (onSave) onSave(newAssignment);

    // Show success message
    setSuccess(true);

    // Reset form
    setTitle("");
    setDescription("");
    setDeadline("");

    // Navigate after 1s
    setTimeout(() => {
      navigate("/teacher-dashboard/ass-table");
    }, 1000);
  };

  return (
    <div className="p-6">
      {success && (
        <div className="mb-4 p-3 text-green-800 bg-green-100 border border-green-300 rounded-lg">
          ✅ Assignment {editingAssignment ? "updated" : "created"} successfully!
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-4 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md"
      >
        <input
          type="text"
          placeholder="Assignment Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200"
        />
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          required
          className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {editingAssignment ? "Update Assignment" : "Add Assignment"}
        </button>
      </form>
    </div>
  );
};

export default AssignmentCreate;
