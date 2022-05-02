import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Check = async () => {
    console.log(email, password);
    let response = await axios.post(
      `http://localhost:8080/api/admin/login/admin`,
      {
        email: email,
        password: password,
      }
    );
    if (response.data.status) {
      localStorage.setItem("jwttoken", response.data.token);
      navigate("/dashboard");
    } else {
      alert("Unauthorized Admin");
    }
  };
  return (
    <div class="container">
      <div class="login_card">
        <from>
          <p>Email Id</p>
          <input
            type="text"
            placeholder=""
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <p>password</p>
          <input
            type="password"
            placeholder=""
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <button onClick={Check}>Login</button>
        </from>
      </div>
    </div>
  );
}

export default Login;
