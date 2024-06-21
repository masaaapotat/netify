import React, { useEffect, useState } from "react";
import TitleCards from "../../components/TitleCards/TitleCards";

const FavoritesSection = () => {
  const [favoriteMovies, setFavoriteMovies] = useState([]); // State to hold favorite movies data

  // useEffect to fetch favorite movies from localStorage and then fetch their details from TMDb API
  useEffect(() => {
    const fetchFavoriteMovies = async () => {
      // Retrieve the list of favorite movie IDs from localStorage
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

      // Function to fetch details of a single movie by its ID from TMDb API
      const fetchMovieDetails = async (id) => {
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=YOUR_TMDB_API_KEY` // Replace with your actual TMDb API key
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          return data;
        } catch (error) {
          console.error("Error fetching movie details:", error);
          return null; // Return null if there is an error
        }
      };

      // Function to fetch details for all favorite movies
      const getMoviesDetails = async () => {
        const movieDetailsPromises = favorites.map((id) => fetchMovieDetails(id)); // Create an array of promises for each movie detail fetch
        const movieDetails = await Promise.all(movieDetailsPromises); // Wait for all promises to resolve
        setFavoriteMovies(movieDetails.filter((movie) => movie !== null)); // Filter out any null values and update state
      };

      // Fetch details for all favorite movies
      getMoviesDetails();
    };

    // Call the function to fetch favorite movies when the component mounts
    fetchFavoriteMovies();
  }, []);

  return (
    <div>
      {/* Conditionally render the TitleCards component if there are favorite movies */}
      {favoriteMovies.length > 0 && (
        <TitleCards title={"Your Favorites"} movies={favoriteMovies} />
      )}
    </div>
  );
};

export default FavoritesSection;
