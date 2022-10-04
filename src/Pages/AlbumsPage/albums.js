import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../../Components/Card/card";
import "../ArtistsPage/artists.css";
// 0TnOYISbd1XYRBk9myaseg

const Albums = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);

  const getArtistAlbums = async (data) => {
    try {
      let result = await fetch(
        `https://api.spotify.com/v1/artists/${id}/albums`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const fetchedData = await result.json();
      console.log("🚀 ~ file: albums.js ~ line 25 ~ getArtistAlbums ~ fetchedData", fetchedData.items)
      setData(fetchedData.items);
      // console.log("maliks123", fetchedData.itmes);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getArtistAlbums();
  }, []);

  return (
    <div className="cardAlbumsContainer">
      {data?.map((album) => (
        <Card
          albumImage={album.images[0]?.url}
          albumName={album.name}
          albumArtists={album.artists}
          albumReleaseDate={album.release_date}
          albumTracks={album.total_tracks}
          // id={album.id}
        />
      ))}
    </div>
  );
};

export default Albums;
