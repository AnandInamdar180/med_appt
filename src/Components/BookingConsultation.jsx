import React from "react";
import FindDoctorSearch from "./FindDoctorSearch/FindDoctorSearch";
import DoctorCard from "./DoctorCard/DoctorCard";
import "./InstantConsultationBooking/InstantConsultation.css";

const doctors = [
  {
    name: "Dr. John Doe",
    speciality: "Cardiologist",
    experience: 10,
    ratings: 4.8,
  },
  {
    name: "Dr. Jane Smith",
    speciality: "Dermatologist",
    experience: 8,
    ratings: 4.7,
  },
  {
    name: "Dr. Michael Brown",
    speciality: "Orthopedic",
    experience: 12,
    ratings: 4.9,
  },
];

const BookingConsultation = () => {
  return (
    <div className="instant-consultation-container">
      <h1>Book Appointment</h1>

      <FindDoctorSearch />

      <div>
        {doctors.map((doctor, index) => (
          <DoctorCard
            key={index}
            name={doctor.name}
            speciality={doctor.speciality}
            experience={doctor.experience}
            ratings={doctor.ratings}
          />
        ))}
      </div>
    </div>
  );
};

export default BookingConsultation;