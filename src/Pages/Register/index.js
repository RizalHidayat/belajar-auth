import React, { useState } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [res, setRes] = useState("");

  const handleEmail = (e) => {
    // console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const payload = {
      email: email,
      password: password,
    };
    axios
      .post("https://reqres.in/api/register", payload)
      .then((res) => setRes(res.data.token))
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
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              onChange={(e) => handleEmail(e)}
            ></input>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="password"
              onChange={(e) => handlePassword(e)}
            ></input>
          </div>
          <button onClick={handleRegister} style={{ width: "100%" }}>
            Register
          </button>
        </div>
        {!!res.length && `Selamat Anda Berhasil!!! Token Anda adalah ${res}`}
      </div>
    </div>
  );
};

export default Register;
