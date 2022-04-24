import React, { createContext, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

import UserCreatePage from "./pages/user/UserCreatePage";
import LoginPage from "./pages/LoginPage";
import ToDoPage from "./pages/todo/ToDoPage";
import TodoCreatePage from "./pages/todo/TodoCreatePage";
import TodoCompletedPage from "./pages/todo/TodoCompletedPage";
import TodoUncompletedPage from "./pages/todo/TodoUncompletedPage";

import "./App.css";
import Globalstyle from "./globalstyles";

const UserContext = createContext({});

function App() {
  const [userContext, setUserContext] = useState(null);
  return (
    <>
      <UserContext.Provider value={{ userContext, setUserContext }}>
        <Globalstyle />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<UserCreatePage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* TEMP ROUTES */}
          <Route path="/todo/" element={<ToDoPage />} />
          <Route path="/todo/create-todo" element={<TodoCreatePage />} />
          <Route path="/todo/completed" element={<TodoCompletedPage />} />
          <Route path="/todo/uncompleted" element={<TodoUncompletedPage />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export { UserContext };
export default App;
