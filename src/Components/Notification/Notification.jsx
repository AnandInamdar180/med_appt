import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Notification.css";

const Notification = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const storedUsername = sessionStorage.getItem("email");
    const storedDoctorData = JSON.parse(localStorage.getItem("doctorData"));

    let storedAppointmentData = null;

    if (storedDoctorData) {
      storedAppointmentData = JSON.parse(
        localStorage.getItem(storedDoctorData.name)
      );
      setDoctorData(storedDoctorData);
    }

    if (storedUsername) {
      setUsername(storedUsername);
      setIsLoggedIn(true);
    }

    if (storedAppointmentData) {
      setAppointmentData(storedAppointmentData);
      setShowNotification(true);
    }
  }, []);

  useEffect(() => {
    if (!appointmentData) {
      setShowNotification(false);
    }
  }, [appointmentData]);

  return (
    <div>
      <Navbar />

      {children}

      {isLoggedIn && showNotification && appointmentData && (
        <div className="appointment-card">
          <div className="appointment-card__content">

            <h2 className="appointment-card__title">
              Appointment Details
            </h2>

            <p>
              <strong>Doctor:</strong> {doctorData?.name}
            </p>

            <p>
              <strong>Speciality:</strong> {doctorData?.speciality}
            </p>

            <p>
              <strong>Name:</strong> {appointmentData.name}
            </p>

            <p>
              <strong>Phone Number:</strong>{" "}
              {appointmentData.phoneNumber}
            </p>

            <p>
              <strong>Date of Appointment:</strong>{" "}
              {appointmentData.date}
            </p>

            <p>
              <strong>Time Slot:</strong>{" "}
              {appointmentData.time}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;