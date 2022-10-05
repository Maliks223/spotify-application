import React from "react";
import "./card.css";
import DefaultImage from "../../Assets/Images/DefaultImg.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Card = (props, items) => {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return props?.withLink ? (
    <Link to={`/albums/${props.name}/${props.id}`} className="link">
      <div className="card">
        <div className="topCard">
          {props.image ? (
            <img className="cardImg" src={props.image} alt="Artist" />
          ) : (
            <img className="cardImg" src={DefaultImage} alt="Artist" />
          )}
        </div>
        <div className="bottomCard">
          <div className="artistName">{props.name}</div>
          <div className="artistFollowers">
            {numberWithCommas(props.followers)} followers
          </div>
          <div className="artistRating">{props.rate}</div>
        </div>
      </div>
    </Link>
  ) : (
    <div className="link">
      <div className="card">
        <div className="topCard">
          {props.albumImage ? (
            <img className="cardImg" src={props.albumImage} alt="Artist" />
          ) : (
            <img className="cardImg" src={DefaultImage} alt="Artist" />
          )}
        </div>
        <div className="bottomCard">
          <div className="artistName">{props.albumName}</div>
          <div className="artistFollowers">
            {props.albumArtists.map((artist, index) => {
              return <span key={index}>{artist.name}</span>;
            })}
          </div>
          <div className="artistRating">{props.albumReleaseDate}</div>
          <div className="totalTracks">{props.albumTracks} tracks </div>
        </div>
        <div className="redirectLink">
          <a href={props.externalUrls} target="_blank">
            Preview on spotify
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
