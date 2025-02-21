// src/components/CreateNewTask.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateNewTask = () => {
  const navigate = useNavigate();
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCreateTask = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!taskTitle || !taskDescription || !dueDate) {
      setError('All fields are required!');
      setLoading(false);
      return;
    }

    try {
      // Here you'd typically make an API request to create the task.
      // Simulating a successful task creation for now
      console.log('Task created:', { taskTitle, taskDescription, dueDate });
      // Redirect to the dashboard or task list
      navigate('/dashboard');
    } catch (err) {
      setError('Failed to create task. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 dark:bg-gradient-to-r dark:from-blue-800 dark:to-purple-900 text-white">
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Create New Task</h2>

        {/* Error Message */}
        {error && (
          <div className="bg-red-500 text-white p-2 rounded mb-4 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleCreateTask} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="taskTitle" className="block text-gray-700 dark:text-gray-200">Task Title</label>
            <input
              type="text"
              id="taskTitle"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
              placeholder="Enter task title"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="taskDescription" className="block text-gray-700 dark:text-gray-200">Task Description</label>
            <textarea
              id="taskDescription"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
              placeholder="Enter task description"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="dueDate" className="block text-gray-700 dark:text-gray-200">Due Date</label>
            <input
              type="date"
              id="dueDate"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
            disabled={loading}
          >
            {loading ? 'Creating Task...' : 'Create Task'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateNewTask;
