import React from "react";
import Rating from "@mui/material/Rating";

const Reviews = () => {
  const reviews = [
    { name: "Anu", comment: "Loved Paris!", rating: 4.5 },
    { name: "Bhoomi", comment: "Tokyo was amazing!", rating: 5 },
    { name: "Charlie", comment: "Dubai was a dream!", rating: 4.2 },
    { name: "Dhanush", comment: "New York is vibrant!", rating: 4.5 }
  ];

  return (
    <div className="reviews">
      <h1>Reviews</h1>
      {reviews.map((rev, index) => (
        <div key={index}>
          <h3>{rev.name}</h3>
          <Rating value={rev.rating} precision={0.1} readOnly />
          <p>"{rev.comment}"</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
