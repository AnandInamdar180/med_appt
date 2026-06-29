import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sign_Up.css";

function Sign_Up() {
  const [formData, setFormData] = useState({
    role: "",
    name: "",
    phone: "",
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

    if (!formData.role) temp.role = "Please select a role.";

    if (!formData.name.trim()) temp.name = "Name is required.";

    if (!/^[0-9]{10}$/.test(formData.phone))
      temp.phone = "Phone number must contain exactly 10 digits.";

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
      alert("Sign Up Successful!");
      console.log(formData);
    }
  };

  const handleReset = () => {
    setFormData({
      role: "",
      name: "",
      phone: "",
      email: "",
      password: "",
    });

    setErrors({});
  };

  return (
    <div className="container">
      <div className="signup-grid">

        <div className="signup-text">
          <h1>Sign Up</h1>
        </div>

        <div className="signup-text1">
          Already a member?
          <span>
            <Link to="/login"> Login</Link>
          </span>
        </div>

        <div className="signup-form">
          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label htmlFor="role">Role</label>

              <select
                id="role"
                className="form-control"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="">Select Role</option>
                <option>Doctor</option>
                <option>Patient</option>
              </select>

              <small style={{ color: "red" }}>{errors.role}</small>
            </div>

            <div className="form-group">
              <label htmlFor="name">Name</label>

              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />

              <small style={{ color: "red" }}>{errors.name}</small>
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>

              <input
                type="tel"
                id="phone"
                className="form-control"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
              />

              <small style={{ color: "red" }}>{errors.phone}</small>
            </div>

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

              <small style={{ color: "red" }}>{errors.email}</small>
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

              <small style={{ color: "red" }}>{errors.password}</small>
            </div>

            <div className="btn-group">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>

              <button
                type="button"
                className="btn btn-danger"
                onClick={handleReset}
              >
                Reset
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}

export default Sign_Up;