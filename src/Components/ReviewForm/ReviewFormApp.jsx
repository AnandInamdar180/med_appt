import React from "react";
import ReviewForm from "./ReviewForm";

const doctors = [
  {
    id: 1,
    name: "Dr. John Doe",
    speciality: "Cardiology",
  },
  {
    id: 2,
    name: "Dr. Jane Smith",
    speciality: "Dermatology",
  },
];

const ReviewFormApp = () => {
  return (
    <div>
      <ReviewForm doctors={doctors} />
    </div>
  );
};

export default ReviewFormApp;