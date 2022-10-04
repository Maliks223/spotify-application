import React, {useState} from "react";
import Card from "../../Components/Card/card";
import "../ArtistsPage/artists.css";

const Albums = () => {
  const [data, setData] = useState([]);

  const getArtistAlbums = async (data) => {
    try{

      let result = await fetch(
        "https://api.spotify.com/v1/artists/4rTv3Ejc7hKMtmoBOK1B4T",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const fetchedData = await result.json();
    console.log(fetchedData);
    console.log("result of albums: ", fetchedData.artists.items);
    setData(fetchedData.artists.items);
  }catch(err){
    console.log(err);
  }
  };

  return (
    <div className="cardAlbumsContainer">
      <Card />
    </div>
  );
};

export default Albums;
