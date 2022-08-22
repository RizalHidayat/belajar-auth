import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>haloo</h1>
      <button>
        <Link to="/register">Daftar</Link>
      </button>
      <button>
        <Link to="/login">Login</Link>
      </button>
    </div>
  );
};

export default Home;
