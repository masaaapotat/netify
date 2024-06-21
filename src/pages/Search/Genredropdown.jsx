import React from "react";

const GenreDropdown = ({ genres, selectedGenre, handleGenreChange }) => {
  return (
    <select value={selectedGenre} onChange={handleGenreChange} className="genre-dropdown">
      <option value="">Select Genre</option>
      {genres.map((genre) => (
        <option key={genre.id} value={genre.id}>
          {genre.name}
        </option>
      ))}
    </select>
  );
};

export default GenreDropdown;
