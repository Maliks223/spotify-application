import React, { useContext } from "react";
import "./artists.css";
import "../../Components/SerachBar/searchBar.css";
import Card from "../../Components/Card/card";
import { useEffect } from "react";
import searchIcon from "../../Assets/Icons/Search.png";
import { useState } from "react";
import { StateContext } from "../../Utils/stateProvider";

const Artists = () => {
  const { stateContext } = useContext(StateContext);
  const [input, setInput] = stateContext;
  const [data, setData] = useState([]);

  useEffect(() => {
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
          if (fetchedData.artists.items.length > 0) {
            setData(fetchedData.artists.items);
          }
        }
      } catch (err) {
        console.log(err);
      }
    };
    getAllArtists();
  }, [input]);

  return (
    <div className="homeContainer">
      <div className="searchContainer">
        <input
          onChange={(e) => setInput(e.target.value)}
          className="searchBar"
          type="text"
          value={input}
          placeholder="Search for an artist..."
        />
        <img src={searchIcon} alt="" className="searchIcon" />
      </div>
      <div className="cardContainer">
        {data?.map((artist) => (
          <Card
            withLink
            id={artist.id}
            image={artist.images[0]?.url}
            name={artist.name}
            followers={artist.followers.total}
            rate={artist.popularity}
          />
        ))}
      </div>
    </div>
  );
};

export default Artists;
