import React from "react";
import "./TestimonialCard.css";
const TestimonialCard = ({avatar,name,review}) => {
  return (
    <div className="card-module flex">
      <figure className="card-avatar ">
        <img src={avatar} alt="avatar" />
        <figcaption>{name}</figcaption>
      </figure>
      <div className="card-content">
        <p>
        {review}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
