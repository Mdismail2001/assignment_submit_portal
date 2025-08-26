import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Assignment Portal</h1>
          <nav className="space-x-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link to="/login" className="text-gray-700 hover:text-blue-600">
              Login
            </Link>
            <Link to="/register" className="text-gray-700 hover:text-blue-600">
              Register
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-center px-6">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Welcome to the Assignment Submission Portal
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            A simple and efficient way for students to submit assignments and
            teachers to review them.
          </p>
          <div className="space-x-4">
            <Link
              to="/login"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
            >
              Get Started
            </Link>
            <Link
              to="/register"
              className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg shadow hover:bg-gray-300"
            >
              Register
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-center mb-8">Features</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Student Features */}
            <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-blue-600 mb-2">
                For Students
              </h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>View assignments from teachers</li>
                <li>Submit work before deadlines</li>
                <li>Track submission status</li>
              </ul>
            </div>
            {/* Teacher Features */}
            <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-green-600 mb-2">
                For Teachers
              </h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Create and manage assignments</li>
                <li>Review student submissions</li>
                <li>Give feedback and update status</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; {new Date().getFullYear()} Assignment Portal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
