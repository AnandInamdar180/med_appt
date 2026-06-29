import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../../config";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showerr, setShowerr] = useState("");

  const login = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setShowerr("Please fill all fields.");
      return;
    }

    try {
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const json = await response.json();

      if (json.authtoken) {
        sessionStorage.setItem("auth-token", json.authtoken);
        sessionStorage.setItem("email", email);

        navigate("/");
        window.location.reload();
      } else {
        if (json.errors) {
          setShowerr(json.errors[0].msg);
        } else {
          setShowerr(json.error || "Login failed.");
        }
      }
    } catch (error) {
      setShowerr("Unable to connect to server.");
    }
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setShowerr("");
  };

  return (
    <div className="container">
      <div className="login-grid">

        <div className="login-text">
          <h2>Login</h2>
        </div>

        <div className="login-text">
          Are you a new member?
          <span>
            <Link to="/signup"> Sign Up Here</Link>
          </span>
        </div>

        <div className="login-form">
          <form onSubmit={login}>

            <div className="form-group">
              <label>Email</label>

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label>Password</label>

              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
                placeholder="Enter your password"
              />
            </div>

            {showerr && (
              <div style={{ color: "red", marginBottom: "10px" }}>
                {showerr}
              </div>
            )}

            <div className="btn-group">
              <button type="submit" className="btn btn-primary">
                Login
              </button>

              <button
                type="button"
                className="btn btn-danger"
                onClick={resetForm}
              >
                Reset
              </button>
            </div>

            <div className="login-text">
              <a href="#">Forgot Password?</a>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
};

export default Login;