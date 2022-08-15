// import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Login from "./Login";
import Dashboard from "./Pages/Dashboard";
import ProtectedRoute from "./HOC/ProtectedRoute";
import { useEffect, useState } from "react";
import Detail from "./Pages/Detail";

function App() {
  const [isLogin, setIsLogin] = useState(null);

  useEffect(() => {
    const checkIfLogin = () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setIsLogin(false);
      } else {
        setIsLogin(true);
      }
    };

    checkIfLogin();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute isLogin={isLogin}>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/detail/:id"
        element={
          <ProtectedRoute isLogin={isLogin}>
            <Detail />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
