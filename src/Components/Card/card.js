import React from "react";
import "./card.css";
import obama2 from "../../Assets/Images/Login.jpg"


const Card = () => {

  

  return (
    <div className="card">
      <div className="topCard">
        <div>
          <img className="cardImg" src={obama2} alt="Artist" />
        </div>
      </div>
      <div className="bottomCard">
        <div className="artistName">Obama</div>
        <div className="artistFollowers">10,000 followers </div>
        <div className="artistRating"> ⭐⭐⭐⭐⭐</div>
      </div>
    </div>
  );
};

export default Card;
