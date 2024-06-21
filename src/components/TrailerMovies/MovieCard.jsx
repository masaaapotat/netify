import React, { useState } from 'react';
import './MovieCard.css';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const MovieCard = ({ thumbnail, trailer, title, overview }) => {
  const [isHovered, setIsHovered] = useState(false);

  console.log('Rendering MovieCard with props:', { thumbnail, trailer, title, overview });

  return (
    <div 
      className="movie-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="movie-card-media">
        {!isHovered ? (
          <img src={thumbnail} alt="Movie Thumbnail" className="movie-card-thumbnail" />
        ) : (
          <iframe 
            className="movie-card-video" 
            src={`https://www.youtube.com/embed/${trailer}?autoplay=1&mute=1&loop=1`}
            title={title}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        )}
        <div className={`movie-card-buttons ${isHovered ? 'visible' : ''}`}>
          <Button 
            variant="contained" 
            startIcon={<PlayArrowIcon />}
            className="movie-card-button play-button"
            color="primary"
          >
            Play
          </Button>
          <Button 
            variant="contained" 
            startIcon={<AddIcon />}
            className="movie-card-button list-button"
            color="secondary"
          >
            Add to List
          </Button>
          <Button 
            variant="contained" 
            startIcon={<ThumbUpIcon />}
            className="movie-card-button like-button"
            color="default"
          >
            Like
          </Button>
        </div>
      </div>
      <div className="movie-card-info">
        <p className="movie-card-title">{title}</p>
        <p className="movie-card-overview">{overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
