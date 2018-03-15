import React from "react";
import "./../styles/SearchBox.scss";

const SearchBox = ({ searchVal, onSearchChange }) => {
  return (
    <div id="searchbox-container">
      <input
        type="search"
        placeholder="Search robots..."
        onChange={event => onSearchChange(event)}
      />
      <p>this value: {searchVal}</p>
    </div>
  );
};

export default SearchBox;
