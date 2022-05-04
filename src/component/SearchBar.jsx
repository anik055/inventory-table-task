import React from 'react'
import SearchIcon from "@mui/icons-material/Search";

const searchIconStyle = {
          backgroundColor: "transparent",
          height: "16.67px",
          width: "16.67px",
          margin: "11.67px 0px 11.67px 13.67px",
          color: "#88898E",
        }

const SearchBar = () => {
  return (
    <div className="searchBar">
      <SearchIcon sx={searchIconStyle} />
      <input className="input" type="text" placeholder="Search" />
    </div>
  );
}

export default SearchBar