// import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Login from "./Login";
import Dashboard from "./Pages/Dashboard";
import ProtectedRoute from "./HOC/ProtectedRoute";
// import { useEffect, useState } from "react";
import Detail from "./Pages/Detail";
import AuthContextProvider from "./Context/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <ProtectedRoute>
              <Detail />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
