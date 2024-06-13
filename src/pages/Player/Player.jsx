import React from "react";
import "./Player.css";
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Player = () => {
  return (
    <div className="player">
      <ArrowCircleLeftOutlinedIcon className="back-icon" />
      <iframe
        width="80%"
        height="70%"
        src="https://www.youtube.com/embed/IFkHrwtHRY8"
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <ArrowForwardIosIcon className="forward-icon" />
      <div className="player-info">
        <p>Publish Date</p>
        <p>Name</p>
        <p>Type</p>
      </div>
    </div>
  );
};

export default Player;
