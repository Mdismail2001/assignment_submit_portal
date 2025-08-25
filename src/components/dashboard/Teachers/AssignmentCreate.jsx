import React, { useState, useEffect } from "react";

const AssignmentCreate = ({ onSave, editingAssignment }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");

  // Load existing assignments from localStorage
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

    // Get existing assignments from localStorage
    const storedAssignments =
      JSON.parse(localStorage.getItem("assignments")) || [];

    // If editing → update, else add
    let updatedAssignments;
    if (editingAssignment) {
      updatedAssignments = storedAssignments.map((a) =>
        a.id === editingAssignment.id ? newAssignment : a
      );
    } else {
      updatedAssignments = [...storedAssignments, newAssignment];
    }

    // Save back to localStorage
    localStorage.setItem("assignments", JSON.stringify(updatedAssignments));

    // Pass back to parent (optional for UI refresh)
    if (onSave) onSave(newAssignment);

    // Clear form
    setTitle("");
    setDescription("");
    setDeadline("");
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-gray-100 rounded-lg">
      <input
        type="text"
        placeholder="Assignment Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="w-full p-2 border rounded"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        required
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        {editingAssignment ? "Update Assignment" : "Add Assignment"}
      </button>
    </form>
  );
};

export default AssignmentCreate;
