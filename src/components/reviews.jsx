import React from "react";
import Rating from '@mui/material/Rating';

const Reviews = ()=>{
   
    const review=[
        { name: "Anu", comment: "Loved my trip to Paris! The Eiffel Tower was stunning." ,rating:"4.5"},
        { name: "Bhoomi", comment: "Tokyo was amazing! Great food and friendly people.",rating:"5" },
        { name: "Charlie", comment: "Dubai was a dream destination. Desert safari was unforgettable!",rating:"4.2" },
        { name: "Dhanush", comment: "New York is so vibrant! Times Square is magical at night." ,rating:"4.5"}
        
    ]
    return(
        <div>
            <h1 style={{fontWeight:"bold"}}>Reviews</h1>
            {review.map((rev,index)=>(
                <div key={index}>
                    <h3>{rev.name}</h3>
                    {/* ///Using precision={0.1} allows half-star ratings (e.g., 4.1, 4.2). */}
                    <Rating value={rev.rating} precision={0.1} readOnly />

                    <p>"{rev.comment}"</p>

                </div>
                
            ))}
        </div>
    )

}
export default Reviews