import React, { useEffect } from "react";
import "./login.css";
import { accessUrl } from "../../Config/spotify";
import { useNavigate } from "react-router-dom";

export default function Login() {
  
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  useEffect(()=>{
    if(token){
      navigate('/artists')
    }
  });
  return (
    <div className="loginContainer">
      <a href={accessUrl} className="loginButtonContainer">
        <div className="buttonImgWrapper">
          <div className="loginButton"> Login</div>
          <img
            className="loginButtonImg"
            src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
            alt="Spotify_logo"
          />
        </div>
      </a>
    </div>
  );
}
