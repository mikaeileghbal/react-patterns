import React from "react";

const SearchBar = ({
  filterText,
  inThisLocation,
  setFilterText,
  setInthisLocation,
}) => {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <p>
        <label>
          <input
            type="checkbox"
            checked={inThisLocation}
            onChange={(e) => setInthisLocation(e.target.value)}
          />{" "}
          Only show tweets in your current location
        </label>
      </p>
    </form>
  );
};

export default SearchBar;
