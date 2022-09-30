import React from "react";
import "./login.css";

export default function Login() {
  const handleClick = () => {
    const clientId = "e35e4843ef5e4145879575b800977b8b";
    const redirectUrl = "http://localhost:3000/";
    const apiUrl = "https://acounts.spotify.com/authorize";
    const scope = ["user-read-email", "user-read-private"];
  };
  return (
    <div className="loginContainer">
      <div className="loginButtonContainer">
        <div className="buttonImgWrapper">
          <button onClick={handleClick} className="loginButton">
            Login
          </button>
          <img
            className="loginButtonImg"
            src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
            alt="spotify"
          />
        </div>
      </div>
      
    </div>
  );
}
