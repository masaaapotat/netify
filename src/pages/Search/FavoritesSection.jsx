import React, { useEffect, useState } from "react";
import TitleCards from "../../components/TitleCards/TitleCards";

const FavoritesSection = () => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    const fetchFavoriteMovies = async () => {
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      const fetchMovieDetails = async (id) => {
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=527433f85c04959fdf15e2e588f9122d`
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          return data;
        } catch (error) {
          console.error("Error fetching movie details:", error);
          return null;
        }
      };

      const getMoviesDetails = async () => {
        const movieDetailsPromises = favorites.map((id) => fetchMovieDetails(id));
        const movieDetails = await Promise.all(movieDetailsPromises);
        setFavoriteMovies(movieDetails.filter((movie) => movie !== null));
      };

      getMoviesDetails();
    };

    fetchFavoriteMovies();
  }, []);

  return (
    <div>
      {favoriteMovies.length > 0 && (
        <TitleCards title={"Your Favorites"} movies={favoriteMovies} />
      )}
    </div>
  );
};

export default FavoritesSection;
