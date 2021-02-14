import React from "react";

const Search = ({ searchTerm, changeSearchTerm }) => {
  return (
    <div className="search-container">
      <div className="search-icon"></div>
      <input
        value={searchTerm}
        onChange={changeSearchTerm}
        type="text"
        placeholder="Search for a country..."
      />
    </div>
  );
};
export default Search;
