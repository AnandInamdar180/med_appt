import React, { useState } from "react";
import "./ReviewForm.css";

const GiveReviews = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    review: "",
    rating: 0,
  });

  const [submitted, setSubmitted] = useState(false);
  const [warning, setWarning] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRating = (rating) => {
    setFormData({
      ...formData,
      rating,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.name === "" ||
      formData.review === "" ||
      formData.rating === 0
    ) {
      setWarning("Please fill all fields.");
      return;
    }

    setWarning("");

    if (onSubmit) {
      onSubmit(formData);
    }

    setSubmitted(true);
  };

  return (
    <div className="review-form-container">
      <h2>Give Your Review</h2>

      {warning && <p className="warning">{warning}</p>}

      <form onSubmit={handleSubmit}>
        <label>Name:</label>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label>Review:</label>

        <textarea
          name="review"
          rows="5"
          value={formData.review}
          onChange={handleChange}
        ></textarea>

        <label>Rating:</label>

        <div className="rating-container">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={
                star <= formData.rating ? "star active-star" : "star"
              }
              onClick={() => handleRating(star)}
            >
              ★
            </span>
          ))}
        </div>

        <button type="submit" disabled={submitted}>
          {submitted ? "Review Submitted" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default GiveReviews;