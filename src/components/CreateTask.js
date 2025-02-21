// src/components/CreateTask.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { addTask } from '../api'; // Function to call the API for task creation

const CreateTask = () => {
  const navigate = useNavigate();
  
  // State to store task details
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Handler function to create task
  const handleCreateTask = async () => {
    setError('');
    setSuccess('');

    // Validation: Make sure all fields are filled out
    if (!taskName || !description || !dueDate) {
      setError('All fields are required!');
      return;
    }

    // Create task data
    const taskData = {
      taskName,
      description,
      dueDate,
    };

    try {
      const response = await addTask(taskData); // API call to create task
      console.log('Task created:', response.data);
      setSuccess('Task created successfully!');
      
      // Redirect to the task list or dashboard page
      navigate('/taskList');
    } catch (err) {
      console.error('Error creating task:', err.response?.data || err.message);
      setError(err.response?.data?.message || 'Failed to create task.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Create New Task</h2>

        {/* Error Message */}
        {error && (
          <div className="bg-red-500 text-white p-2 rounded mb-4 text-center">
            {error}
          </div>
        )}

        {/* Success Message */}
        {success && (
          <div className="bg-green-500 text-white p-2 rounded mb-4 text-center">
            {success}
          </div>
        )}

        {/* Task Form */}
        <div className="space-y-6">
          <input
            type="text"
            placeholder="Task Name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300"
          />
          
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300"
          ></textarea>

          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300"
          />
        </div>

        <button
          onClick={handleCreateTask}
          className="w-full py-3 mt-6 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          Create Task
        </button>

        <div className="mt-6 text-center text-gray-600">
          <p className="text-sm">
            <Link to="/taskList" className="text-indigo-600 hover:text-indigo-800">
              Go back to Task List
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
