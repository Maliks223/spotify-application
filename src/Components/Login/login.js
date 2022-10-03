import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function Login() {
  const [token, setToken] = useState("");

  const navigate = useNavigate()

  const handleClick = (e) => {
    e.preventDefault();
    const authEnpoint = "https://acounts.spotify.com/authorize";
    const clientId = "123a1aa1eeac4b7b91775e2be82f72b4";
    const redirectUri = "http://localhost:3000";
    const scopes = [
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-modify-playback-state",
      "user-top-read",
      "user-read-playback-state",
      "user-read-email",
      "user-read-private",
      "user-read-playback-position",
    ];
    window.location.href = `${authEnpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
      "%20"
    )}&response_type=token&show_dialog=true`;
  };

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
  }, []);

  return (
    <div className="loginContainer">
      <button onClick={handleClick} className="loginButtonContainer">
        <div className="buttonImgWrapper">
          <div className="loginButton">Login</div>
          <img
            className="loginButtonImg"
            src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
            alt="Spotify_logo"
          />
        </div>
      </button>
    </div>
  );
}
