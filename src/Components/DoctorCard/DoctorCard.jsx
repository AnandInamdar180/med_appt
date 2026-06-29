import React, { useState } from "react";
import "./DoctorCard.css";
import AppointmentForm from "../AppointmentForm/AppointmentForm";

const DoctorCard = ({
  name,
  speciality,
  experience,
  ratings,
  profilePic,
}) => {
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (appointmentData) => {
    console.log("Appointment Booked:", appointmentData);
    alert("Appointment Booked Successfully!");
    setShowForm(false);
  };

  return (
    <div className="doctor-card-container">
      <div className="doctor-card-details-container">
        <div className="doctor-card-profile-image-container">
          {profilePic ? (
            <img
              src={profilePic}
              alt={name}
              className="doctor-profile-image"
            />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="46"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
          )}
        </div>

        <div className="doctor-card-details">
          <div className="doctor-card-detail-name">{name}</div>

          <div className="doctor-card-detail-speciality">
            {speciality}
          </div>

          <div className="doctor-card-detail-experience">
            {experience} years experience
          </div>

          <div className="doctor-card-detail-consultationfees">
            Ratings: {ratings}
          </div>

          <div>
            <button
              className="book-appointment-btn"
              onClick={() => setShowForm(true)}
            >
              <div>Book Appointment</div>
              <div>No Booking Fee</div>
            </button>
          </div>
        </div>
      </div>

      {showForm && (
        <AppointmentForm
          doctorName={name}
          doctorSpeciality={speciality}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default DoctorCard;