import React, { useEffect, useState } from "react";
import "./Player.css";
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Player = () => {
  // creating a variable to sote our response data
  // initializing the object with the some value that is the name and key
  const [apiData, setApiData]=useState({
    name:'',
    key:'',
    published_at:'',
    typeof:''


  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Mjc0MzNmODVjMDQ5NTlmZGYxNWUyZTU4OGY5MTIyZCIsInN1YiI6IjY2MmI1M2UwM2Q3NDU0MDExZGQyMjg4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lofHSDEDVsm_GWFQYs8wbChCX1ZDGecHFYrE084Y4Ys'
    }
  };
  
 useEffect(()=>{
  fetch('https://api.themoviedb.org/3/movie/653346/videos?language=en-US', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
 },[])
  
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
