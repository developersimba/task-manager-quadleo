// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../redux/authSlice'
import tasksReducer from "../redux/taskSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: tasksReducer,
  },
});
