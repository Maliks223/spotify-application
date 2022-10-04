import React from "react";
import "./artists.css";
import "../../Components/SerachBar/searchBar.css";
import Card from "../../Components/Card/card";
import { useEffect } from "react";
import searchIcon from "../../Assets/Icons/Search.png";
import { useState } from "react";

const Artists = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  const getAllArtists = async (data) => {
    try {
      if (input.length > 0) {
        let result = await fetch(
          `https://api.spotify.com/v1/search?q=${input}&type=artist`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const fetchedData = await result.json();
        // console.log(fetchedData);
        if (fetchedData.artists.items.length>0) {
          console.log("result of artists: ", fetchedData.artists.items);
          setData(fetchedData.artists.items);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllArtists();
  }, [input]);

  return (
    <div className="homeContainer">
      <div className="searchContainer">
        <input
          onChange={(e) => setInput(e.target.value)}
          className="searchBar"
          type="text"
          placeholder="Search for an artist..."
        />
        <img src={searchIcon} alt="" className="searchIcon" />
      </div>
      <div className="cardContainer">
        {data?.map((artist) => (
          <Card image={artist.images[0]?.url} name={artist.name} followers={artist.followers.total} rate={artist.popularity} />
        ))}
      </div>
    </div>
  );
};

export default Artists;
