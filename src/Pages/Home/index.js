import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>haloo</h1>
      <Link to="/register">Daftar</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Home;
