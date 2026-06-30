import React from "react";
import "./ReviewForm.css";

const ReviewForm = ({ doctorName, doctorSpeciality, onReviewClick }) => {
  return (
    <tr>
      <td>1</td>

      <td>{doctorName}</td>

      <td>{doctorSpeciality}</td>

      <td>
        <button
          className="review-btn"
          onClick={onReviewClick}
        >
          Click Here
        </button>
      </td>

      <td>Not Reviewed</td>
    </tr>
  );
};

export default ReviewForm;