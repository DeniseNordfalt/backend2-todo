import React from "react";
import { Route, Routes } from "react-router-dom";

import UserCreatePage from "./pages/UserCreatePage";
import LoginPage from "./pages/LoginPage";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<UserCreatePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
