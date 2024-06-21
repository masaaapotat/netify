import React, { useState } from "react";
import "./Genredropdown.css";

const GenreDropdown = ({ genres, selectedGenre, handleGenreChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleGenreClick = (genreId) => {
    handleGenreChange({ target: { value: genreId } });
    setIsDropdownOpen(false);
  };

  return (
    <div className="genre-dropdown-container">
      <div className="genre-dropdown" onClick={toggleDropdown}>
        {selectedGenre ? genres.find((genre) => genre.id === selectedGenre)?.name : "Select Genre"}
      </div>
      {isDropdownOpen && (
        <ul className="genre-dropdown-options">
          {genres.map((genre) => (
            <li key={genre.id} onClick={() => handleGenreClick(genre.id)}>
              {genre.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GenreDropdown;
