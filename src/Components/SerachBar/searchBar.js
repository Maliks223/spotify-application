import React from 'react'
import "./searchBar.css"
import searchIcon from "../../Assets/Icons/Search.png";


const SearchBar = () => {
  return (
    <div className="searchContainer">
    <input
      className="searchBar"
      type="text"
      placeholder="Search for an artist..."
    />
    <img src={searchIcon} alt="" className="searchIcon" />
  </div>
  )
}

export default SearchBar
