import React from "react";
import "./card.css";
import DefaultImage from "../../Assets/Images/DefaultImg.jpg";

const Card = (props) => {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
  return (
    <div className="card">
      <div className="topCard">
        <div>
          {props.image ? (
            <img className="cardImg" src={props.image} alt="Artist" />
          ) : (
            <img className="cardImg" src={DefaultImage} alt="Artist" />
          )}
        </div>
      </div>
      <div className="bottomCard">
        <div className="artistName">{props.name}</div>
        <div className="artistFollowers">{numberWithCommas(props.followers)} followers</div>
        <div className="artistRating">{props.rate}</div>
      </div>
    </div>
  );
};

export default Card;
