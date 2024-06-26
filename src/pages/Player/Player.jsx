import React, { useEffect, useState } from "react";
import "./Player.css";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [movieData, setMovieData] = useState({});
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [isFavorite, setIsFavorite] = useState(false); // Favorite state

  useEffect(() => {
    const fetchMovieData = async () => {
      setIsLoading(true); // Set loading state to true
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?append_to_response=videos`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Mjc0MzNmODVjMDQ5NTlmZGYxNWUyZTU4OGY5MTIyZCIsInN1YiI6IjY2MmI1M2UwM2Q3NDU0MDExZGQyMjg4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lofHSDEDVsm_GWFQYs8wbChCX1ZDGecHFYrE084Y4Ys",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch movie data");
        }
        const data = await response.json();
        setMovieData(data);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      } finally {
        setIsLoading(false); // Set loading state to false regardless of success or failure
      }
    };

    fetchMovieData();
  }, [id]);

  useEffect(() => {
    // Check local storage to see if the movie is marked as favorite
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.includes(id));
  }, [id]);

  const handleBackClick = () => {
    navigate(-1);
  };

  const toggleFavorite = () => {
    // Toggle favorite state
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (isFavorite) {
      // Remove from favorites
      const updatedFavorites = favorites.filter((fav) => fav !== id);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
      // Add to favorites
      localStorage.setItem("favorites", JSON.stringify([...favorites, id]));
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="player">
      <ArrowCircleLeftOutlinedIcon
        className="back-icon"
        onClick={handleBackClick}
        style={{ fontSize: 50 }}
      />

      {isLoading ? ( // Display loading state
        <p>Loading movie data...</p>
      ) : movieData.hasOwnProperty("id") ? (
        <>
          {/* Display video trailer if available */}
          {movieData.videos?.results.length > 0 && (
            <iframe
              width="80%"
              height="70%"
              src={`https://www.youtube.com/embed/${movieData.videos.results[0].key}`}
              title={movieData.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          )}

          {/* Display additional information */}
          <div className="player-info">
            <h2>{movieData.title}</h2>
            <p>{movieData.overview.slice(0, 200)}</p>
            <p>Release Date: {movieData.release_date}</p>
            {movieData.production_companies?.length > 0 && (
              <p>
                Production Company: {movieData.production_companies[0].name}
              </p>
            )}

            {/* Toggle favorite button */}
            {isFavorite ? (
              <FavoriteIcon color="error" onClick={toggleFavorite} />
            ) : (
              <FavoriteBorderIcon onClick={toggleFavorite} />
            )}
          </div>
        </>
      ) : (
        <p>Failed to load movie data.</p>
      )}
    </div>
  );
};

export default Player;
