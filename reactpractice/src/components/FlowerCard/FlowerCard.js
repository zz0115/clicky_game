import React from "react";
import "./FlowerCard.css";

const FlowerCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>

    {/* mark as clicked when click */}
    <span onClick={() => props.countClick(props.id)} className="count">*</span>
  </div>
);

export default FlowerCard;
