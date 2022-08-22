import React, { useState, useEffect, useCallback, useContext } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const authContextData = useContext(AuthContext);
  const { setIsLogin } = authContextData;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [res, setRes] = useState("");
  const navigate = useNavigate();

  const handleEmail = (e) => {
    // console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const redirect = useCallback(
    () => navigate("/dashboard", { replace: true }),
    [navigate]
  );

  useEffect(() => {
    const checkIfLogin = () => {
      const token = localStorage.getItem("token");
      if (!token) return;
      redirect();
    };
    checkIfLogin();
  }, [redirect]);

  const handleLogin = (e) => {
    e.preventDefault();
    const payload = {
      email: email,
      password: password,
    };
    axios
      .post("https://reqres.in/api/login", payload)
      .then((res) => {
        setRes(res.data.token);
        localStorage.setItem("token", res.data.token);
        navigate("/dashboard");
        setIsLogin(true);
      })
      .catch((err) => console.log(err));
    console.log(email, password);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <h1>GAMBAR</h1>
        </div>
        <div className="col-4">
          <div className="mb-3">
            <h1>LOGIN PAGE</h1>
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              onChange={(e) => handleEmail(e)}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="password"
              onChange={(e) => handlePassword(e)}
            ></input>
          </div>
          <button onClick={handleLogin} style={{ width: "100%" }}>
            Login
          </button>
        </div>
        {!!res.length && `Selamat Anda Berhasil!!! Token Anda adalah ${res}`}
      </div>
    </div>
  );
};

export default Login;
