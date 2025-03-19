import React from "react";

const Trips = () => {
    const place=[
        { name: "Paris, France", image: "/p1.jpg" },
        { name: "Tokyo, Japan", image: "/p2.jpg" },
        { name: "Dubai, UAE", image: "/p3.jpg" },
        { name: "Sydney, Australia", image: "/p4.jpg" },
        { name: "New York, USA", image: "/p5.jpg" },
        { name: "London, UK", image: "/p6.jpg" },
    ]

  return (
    <div className="places-container">
      {place.map((pla, index) => (
        <div className="place-card" key={index}>
          <img src={pla.image} alt={pla.name} className="place-image" />
          <div className="place-name">{pla.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Trips;
