import React from "react";
import "./artists.css";
import Card from "../../Components/Card/card";
import SearchBar from "../../Components/SerachBar/searchBar"

const Artists = () => {
  return (
    <div className="homeContainer">
   <SearchBar/>
      <div className="cardContainer">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />  
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Artists;
