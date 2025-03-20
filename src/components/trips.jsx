import React from "react";

const Trips = () => {
  const places = [
    { name: "Paris, France", image: "/p1.jpg" },
    { name: "Tokyo, Japan", image: "/p2.jpg" },
    { name: "Dubai, UAE", image: "/p3.jpg" },
    { name: "Sydney, Australia", image: "/p4.jpg" },
    { name: "New York, USA", image: "/p5.jpg" },
    { name: "London, UK", image: "/p6.jpg" },
  ];

  return (
    <div className="places-container">
      {places.map((place, index) => (
        <div className="place-card" key={index}>
          <img src={place.image} alt={place.name} className="place-image" />
          <div className="place-name">{place.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Trips;
