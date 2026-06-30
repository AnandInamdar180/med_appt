import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProfileCard.css";

const ProfileCard = () => {
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    name: "Peter",
    phone: "1234567890",
    email: "peter@gmail.com",
  });

  const [updatedDetails, setUpdatedDetails] = useState(userDetails);
  const [editMode, setEditMode] = useState(false);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleInputChange = (e) => {
    setUpdatedDetails({
      ...updatedDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setUserDetails(updatedDetails);
    setEditMode(false);

    alert("Profile Updated Successfully!");
  };

  const logout = () => {
    sessionStorage.clear();
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <h2>Welcome, {userDetails.name}</h2>

        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>

      <div className="profile-card">
        {editMode ? (
          <form onSubmit={handleSubmit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                value={updatedDetails.name}
                onChange={handleInputChange}
              />
            </label>

            <label>
              Phone
              <input
                type="text"
                name="phone"
                value={updatedDetails.phone}
                onChange={handleInputChange}
              />
            </label>

            <label>
              Email
              <input
                type="email"
                name="email"
                value={updatedDetails.email}
                onChange={handleInputChange}
              />
            </label>

            <button type="submit" className="save-btn">
              Save
            </button>
          </form>
        ) : (
          <>
            <h3>Your Profile</h3>

            <p>
              <b>Name:</b> {userDetails.name}
            </p>

            <p>
              <b>Email:</b> {userDetails.email}
            </p>

            <p>
              <b>Phone:</b> {userDetails.phone}
            </p>

            <button className="edit-btn" onClick={handleEdit}>
              Edit
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;