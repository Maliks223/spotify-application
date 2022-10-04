import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TokenPage() {
  const [token, setToken] = useState("");

  const navigate = useNavigate()
  const getToken = () => {
    const hash = window.location.hash;
    // console.log("hash", hash);
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      localStorage.setItem("token", token);
    }

    setToken(token);
    navigate('/artists')
  };

  useEffect(() => {
    getToken();
  }, []);
}
