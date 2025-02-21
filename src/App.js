// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import CreateTask from './components/CreateTask';
import TaskList from './components/TaskList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/createTasks" element={<CreateTask />} />
        <Route path="/taskList" element={<TaskList />} />
      </Routes>
    </Router>
  );
}

export default App;
