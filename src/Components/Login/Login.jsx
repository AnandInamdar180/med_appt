import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const validate = () => {
    let temp = {};

    if (!/\S+@\S+\.\S+/.test(formData.email))
      temp.email = "Enter a valid email address.";

    if (!formData.password)
      temp.password = "Password is required.";

    setErrors(temp);

    return Object.keys(temp).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Login Successful!");
      console.log(formData);
    }
  };

  const handleReset = () => {
    setFormData({
      email: "",
      password: "",
    });

    setErrors({});
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
          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label htmlFor="email">Email</label>

              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />

              <small style={{ color: "red" }}>
                {errors.email}
              </small>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>

              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />

              <small style={{ color: "red" }}>
                {errors.password}
              </small>
            </div>

            <div className="btn-group">

              <button
                type="submit"
                className="btn btn-primary"
              >
                Login
              </button>

              <button
                type="button"
                className="btn btn-danger"
                onClick={handleReset}
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
}

export default Login;