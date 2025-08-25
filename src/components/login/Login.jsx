import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [role, setRole] = useState(""); // default role
  const navigate = useNavigate();

const handleLogin = (e) => {
  e.preventDefault();

  // Get user(s) from localStorage
  const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

  if (!storedUser) {
    alert("No registered user found. Please register first!");
    return;
  }

  let matchedUser = null;

  // If storedUser is array → find
  if (Array.isArray(storedUser)) {
    matchedUser = storedUser.find(
      (u) => u.email === email && u.password === password
    );
  } 
  // If storedUser is just one object
  else {
    if (storedUser.email === email && storedUser.password === password) {
      matchedUser = storedUser;
    }
  }

  if (!matchedUser) {
    alert("Invalid email or password!");
    return;
  }

  // Save current logged-in user
  localStorage.setItem("currentUser", JSON.stringify(matchedUser));

  // Redirect based on role
  if (matchedUser.role === "teacher") {
    navigate("/teacher-dashboard");
  } else {
    navigate("/student-dashboard");
  }
};




//   const handleLogin = (e) => {
//   e.preventDefault();

//   // Get users from localStorage
//   const users = JSON.parse(localStorage.getItem("registeredUser")) || [];
//   console.log(users);
//   // Find matching user
//   const matchedUser = users.map(
//     (u) => u.email === email && u.password === password
//   );

//   if (!matchedUser) {
//     alert("Invalid email or password!");
//     return;
//   }

//   // Save current logged-in user
//   localStorage.setItem("currentUser", JSON.stringify(matchedUser));

//   // Redirect based on role
//   if (matchedUser.role === "teacher") {
//     navigate("/teacher-dashboard");
//   } else {
//     navigate("/student-dashboard");
//   }
// };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
        {/* Logo / Title */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Assignment Portal
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Sign in to continue
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="mt-1 w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="mt-1 w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Login
          </button>
        </form>

        {/* Footer links */}
        <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
          <a href="/forgot-password" className="hover:underline">
            Forgot Password?
          </a>
          <a href="/register" className="hover:underline">
            Create an account
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
