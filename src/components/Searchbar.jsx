import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchInput.trim() !== "") {
      navigate("/search?query=" + encodeURIComponent(searchInput));
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div className="searchh w-full flex justify-center items-center">
        <input
          className="search__input"
          type="text"
          placeholder="Search by city"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button className="search__button" onClick={handleSearch}>
          <img src="search.png" className="w-[22px] h-[22px]" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;