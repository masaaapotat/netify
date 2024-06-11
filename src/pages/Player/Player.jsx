import React from "react";
import "./Player.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const Player = () => {
  return (
    <div className="player">
      <ArrowBackIosIcon />
      <ArrowForwardIosIcon />
      <iframe
        width="90%"
        height="90%"
        src="https://www.youtube.com/embed/IFkHrwtHRY8"
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>Published Date</p>
        <p>Name</p>
        <p>Type</p>
      </div>
    </div>
  );
};

export default Player;
