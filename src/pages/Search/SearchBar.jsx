import React, { useState, useEffect } from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  // State to store the search query
  const [searchQuery, setSearchQuery] = useState("");
  // State to store the search results
  const [searchResults, setSearchResults] = useState([]);
  // State to manage loading state
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Function to fetch data from API based on search query
    const fetchData = async () => {
      // Check if search query is not empty
      if (searchQuery.trim() !== "") {
        // Set loading state to true
        setIsLoading(true);
        try {
          // Fetch data from the API using the search query and API key

          const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=527433f85c04959fdf15e2e588f9122d&query=${encodeURIComponent(
              searchQuery
            )}`
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          // Update state with search results
          setSearchResults(data.results);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          // Set loading state to false after fetch completes
          setIsLoading(false);
        }
      } else {
        setSearchResults([]); // Clear search results if search query is empty
      }
    };

    fetchData(); // Call fetchData function
  }, [searchQuery]); // Dependency array runs when searchQuery changes

  // Function to handle input change
  const handleChange = (event) => {
    //
    setSearchQuery(event.target.value);
  };

  // Function to handle search on button click
  const handleSearch = () => {
    fetchData();
  };

  // Function to handle search on Enter key press
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      // Trigger fetchData function to perform search on Enter key press

      fetchData();
    }
  };
  const handleMovieSelect = (movieId) => {
    navigate(`/player/${movieId}`); // Set selected movie ID when a search result is clicked
  };

  return (
    <div className="navbar-center">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search movies..."
          value={searchQuery}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          className="search-input" // Apply class for search input styling
        />
        <SearchIcon className="search-icon" onClick={handleSearch} />
      </div>
      {/* Display loading message while fetching data */}

      {isLoading && <p>Loading...</p>}
      {/* Display search results if available */}

      {searchResults.length > 0 && (
        <ul className="search-results">
          {" "}
          {/* Apply class for search results styling */}
          {searchResults.map((result) => (
            // Display each search result title
            // <li key={result.id}>{result.title}</li>
            <li key={result.id} onClick={() => handleMovieSelect(result.id)}>
            {result.title}
          </li>
          ))}
        </ul>
      )}
    </div>
    
  );
};

export default SearchBar;
