import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../../Components/Card/card";
import "../ArtistsPage/artists.css";
import "./albums.css";
// 0TnOYISbd1XYRBk9myaseg

const Albums = () => {
  const { id, name } = useParams();

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
      setData(fetchedData.items);
    } catch (err) {}
  };

  useEffect(() => {
    getArtistAlbums();
  }, []);

  return (
    <div className="cardAlbumsContainer">
      <h1 className="artistAlbums">
        {name} <br />
        <p>Albums</p>
      </h1>
      <div className="cardsContainer">
        {data?.map((album) => (
          <Card
            albumImage={album.images[0]?.url}
            albumName={album.name}
            albumArtists={album.artists}
            albumReleaseDate={album.release_date}
            albumTracks={album.total_tracks}
            // id={album.id}
            externalUrls={album.external_urls.spotify}
          />
        ))}
      </div>
    </div>
  );
};

export default Albums;
