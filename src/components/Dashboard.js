// src/components/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
// import { logout } from '../redux/authSlice';

const Dashboard = () => {


  const logout = () =>{
    localStorage.removeItem("token")
  }


  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-indigo-700 text-white p-6 space-y-8">
        <div className="text-3xl font-semibold text-center">Dashboard</div>
        
        <div className="mt-10">
          <ul>
            <li className="mb-4">
              <Link to="/taskList" className="text-lg hover:text-indigo-300">Tasks</Link>
            </li>
            <li className="mb-4">
              <Link to="/register" className="text-lg hover:text-indigo-300">Register</Link>
            </li>
            <li className="mb-4">
              <Link to="/login" className="text-lg hover:text-indigo-300">Login</Link>
            </li>
            <li className="mb-4">
              <Link onClick={()=> logout()}  className="text-lg hover:text-indigo-300">Logout</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold text-gray-800">Welcome to Your Dashboard</h1>
          <button className="bg-indigo-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-700 transition">
            <Link to="/createTasks">Create Task</Link>
          </button>
        </div>

        {/* Dashboard Stats (Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {/* Card 1: Total Tasks */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <div className="flex items-center space-x-4">
              <div className="text-indigo-600 text-4xl">📋</div>
              <div>
                <h3 className="text-xl font-medium text-gray-700">Total Tasks</h3>
                <p className="text-2xl font-bold text-gray-900">35</p>
              </div>
            </div>
          </div>

          {/* Card 2: Completed Tasks */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <div className="flex items-center space-x-4">
              <div className="text-green-600 text-4xl">✅</div>
              <div>
                <h3 className="text-xl font-medium text-gray-700">Completed Tasks</h3>
                <p className="text-2xl font-bold text-gray-900">25</p>
              </div>
            </div>
          </div>

          {/* Card 3: Pending Tasks */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <div className="flex items-center space-x-4">
              <div className="text-yellow-600 text-4xl">⏳</div>
              <div>
                <h3 className="text-xl font-medium text-gray-700">Pending Tasks</h3>
                <p className="text-2xl font-bold text-gray-900">10</p>
              </div>
            </div>
          </div>
        </div>

        {/* Task List (Example Table or List) */}
        <div className="bg-white p-6 rounded-lg shadow-lg mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Tasks</h2>
          
          {/* Example Task List */}
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left text-gray-600">Task Name</th>
                <th className="px-4 py-2 text-left text-gray-600">Status</th>
                <th className="px-4 py-2 text-left text-gray-600">Due Date</th>
                <th className="px-4 py-2 text-left text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Example Task */}
              <tr className="border-b">
                <td className="px-4 py-2">Complete UI Design</td>
                <td className="px-4 py-2 text-green-500">Completed</td>
                <td className="px-4 py-2">2025-02-25</td>
                <td className="px-4 py-2">
                  <button className="text-indigo-600 hover:text-indigo-800">Edit</button> | 
                  <button className="text-red-600 hover:text-red-800">Delete</button>
                </td>
              </tr>
              {/* Add more tasks as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
