import React, { useState, useEffect } from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import GenreDropdown from "./Genredropdown";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]); // State for suggestions
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=527433f85c04959fdf15e2e588f9122d`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Fetched genres:", data.genres);
        setGenres(data.genres);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchGenres();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery.trim()) {
        fetchSuggestions();
      } else {
        setSuggestions([]);
      }
    }, 300); // Delay before fetching suggestions (adjust as needed)

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const fetchSuggestions = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=527433f85c04959fdf15e2e588f9122d&query=${encodeURIComponent(
          searchQuery
        )}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("Fetched suggestions:", data.results);
      setSuggestions(data.results);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      setSuggestions([]);
    }
  };

  const handleSelectSuggestion = (movieId) => {
    navigate(`/player/${movieId}`);
    setSearchQuery(""); // Clear search query after selection if desired
    setSuggestions([]); // Clear suggestions after selection
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  const handleSearch = () => {
    fetchData();
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      fetchData();
    }
  };

  const fetchData = async () => {
    if (searchQuery.trim() !== "" || selectedGenre) {
      setIsLoading(true);
      try {
        const genreParam = selectedGenre ? `&with_genres=${selectedGenre}` : "";
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=527433f85c04959fdf15e2e588f9122d&query=${encodeURIComponent(
            searchQuery
          )}${genreParam}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Fetched search results:", data.results);
        setSearchResults(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="navbar-center">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search movies..."
          value={searchQuery}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          className="search-input"
        />
        {genres.length > 0 ? (
          <GenreDropdown
            genres={genres}
            selectedGenre={selectedGenre}
            handleGenreChange={handleGenreChange}
          />
        ) : (
          <p>Loading genres...</p>
        )}
        <SearchIcon className="search-icon" onClick={handleSearch} />
      </div>
      {isLoading && <p>Loading...</p>}
      {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.id}
              onClick={() => handleSelectSuggestion(suggestion.id)}
            >
              {suggestion.title}
            </li>
          ))}
        </ul>
      )}
      {searchResults.length > 0 && (
        <ul className="search-results">
          {searchResults.map((result) => (
            <li key={result.id} onClick={() => handleSelectSuggestion(result.id)}>
              {result.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
