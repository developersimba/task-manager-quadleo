// src/components/TaskList.js
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getTasks, deleteTask } from '../api'; // API utility functions

const TaskList = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState('');

  // Fetch tasks when the component mounts
  useEffect(() => {
    const fetchTasks = async () => {
       
      try {
        const response = await getTasks();
        setTasks(response.data);
      } catch (err) {
        setError('Failed to load tasks.');
        console.error(err);
      }
    };

    fetchTasks();
  }, []);

  // Handle marking task as completed
  const handleMarkAsCompleted = async (taskId) => {
    try {
    //   await markTaskAsCompleted(taskId); // API call to mark as completed
      setTasks(tasks.map((task) => 
        task.id === taskId ? { ...task, status: 'Completed' } : task
      ));
    } catch (err) {
      setError('Failed to update task status.');
      console.error(err);
    }
  };

  // Handle task deletion
  const handleDeleteTask = async (taskId) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      try {
        await deleteTask(taskId); // API call to delete task
        setTasks(tasks.filter((task) => task.id !== taskId)); // Remove deleted task from state
      } catch (err) {
        setError('Failed to delete task.');
        console.error(err);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Your Tasks</h1>

      {/* Error message */}
      {error && (
        <div className="bg-red-500 text-white p-2 rounded mb-4 text-center">
          {error}
        </div>
      )}

      {/* Task Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-lg rounded-lg">
          <thead>
            <tr className="bg-indigo-600 text-white">
              <th className="px-6 py-3 text-left">Task Name</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Due Date</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.length > 0 ? (
              tasks.map((task) => (
                <tr key={task.id} className="border-b">
                  <td className="px-6 py-4">{task.title}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-white ${(task.completed) === true ? 'bg-green-500' : 'bg-yellow-500'}`}>
                      {task.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">{task.dueDate}</td>
                  <td className="px-6 py-4 text-center">
                    {task.status !== 'Completed' && (
                      <button
                        onClick={() => handleMarkAsCompleted(task.id)}
                        className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition"
                      >
                        Mark as Completed
                      </button>
                    )}
                    <button
                      onClick={() => handleDeleteTask(task.id)}
                      className="ml-4 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="px-6 py-4 text-center text-gray-600">
                  No tasks available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={() => navigate('/createTasks')}
          className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition"
        >
          Create New Task
        </button>
      </div>
    </div>
  );
};

export default TaskList;
