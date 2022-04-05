import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import UserCreatePage from "./pages/UserCreatePage";
import LoginPage from "./pages/LoginPage";
import ToDoPage from "./pages/ToDoPage";
import TodoCreatePage from "./pages/TodoCreatePage";

import "./App.css";

function App() {
  return (
    <>
      {/* temp nav */}
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/todo">Todo</Link>
        </li>
        <li>
          <Link to="/create-todo">Create Todo</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/register" element={<UserCreatePage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* TEMP ROUTES */}
        <Route path="/todo" element={<ToDoPage />} />
        <Route path="/create-todo" element={<TodoCreatePage />} />
      </Routes>
    </>
  );
}

export default App;
