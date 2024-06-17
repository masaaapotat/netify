import React, { useEffect, useState } from "react";
import "./Hero.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoIcon from "@mui/icons-material/Info";

const Hero = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Mjc0MzNmODVjMDQ5NTlmZGYxNWUyZTU4OGY5MTIyZCIsInN1YiI6IjY2MmI1M2UwM2Q3NDU0MDExZGQyMjg4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lofHSDEDVsm_GWFQYs8wbChCX1ZDGecHFYrE084Y4Ys",
    },
  };

  useEffect(() => {
    
    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((data) => {
        const randomMovie =
          data.results[Math.floor(Math.random() * data.results.length)];
        setMovie(randomMovie);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading)
    return (
      <div class="loader">
      <div class="circle">
        <div class="dot"></div>
        <div class="outline"></div>
      </div>
      <div class="circle">
        <div class="dot"></div>
        <div class="outline"></div>
      </div>
      <div class="circle">
        <div class="dot"></div>
        <div class="outline"></div>
      </div>
      <div class="circle">
        <div class="dot"></div>
        <div class="outline"></div>
      </div>
    </div>
    );

  if (!movie) return <div className="error">Error loading data</div>;

  return (
    <div className="hero">
      <img
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.title}
        className="banner-img"
      />
      <div className="hero-caption">
        <h1>{movie.title}</h1>
        <p>{movie.overview.slice(0, 150)}...</p>  
        <div className="hero-btn">
          <button className="btn">
            <PlayArrowIcon className="hero-btn-icon" />
            Play
          </button>
          <button className="btn dark-btn">
            <InfoIcon className="hero-btn-icon" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
