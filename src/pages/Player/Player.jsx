import React, { useEffect, useState } from "react";
import "./Player.css";
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Player = () => {
  // Creating a state variable to store our response data
  const [apiData, setApiData] = useState({
    name: '',
    key: '',
    published_at: '',
    site: "",
    type: ''
  });

  // Options for the fetch request including the API key in the headers
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Mjc0MzNmODVjMDQ5NTlmZGYxNWUyZTU4OGY5MTIyZCIsInN1YiI6IjY2MmI1M2UwM2Q3NDU0MDExZGQyMjg4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lofHSDEDVsm_GWFQYs8wbChCX1ZDGecHFYrE084Y4Ys'
    }
  };
  
  // useEffect to fetch data from the API when the component mounts
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/653346/videos?language=en-US', options)
      .then(response => response.json()) // Convert the response to JSON
      .then(response => setApiData(response.results[0])) // Set the first result in the state
      .catch(err => console.error(err)); 
  }, []);

  return (
    <div className="player">
      {/* Back arrow icon */}
      <ArrowCircleLeftOutlinedIcon className="back-icon" />
      {/* iframe to display the YouTube video */}
      <iframe
        width="80%"
        height="70%"
        src={`https://www.youtube.com/embed/${apiData.key}`} // Dynamic video key
        title={apiData.name} // Dynamic title from API data
        frameBorder="0"
        allowFullScreen
      ></iframe>
      {/* Forward arrow icon */}
      <ArrowForwardIosIcon className="forward-icon" />
      {/* Display additional information from the API */}
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p> 
        <p>{apiData.name}</p> 
        <p>{apiData.site}</p> 
        <p>{apiData.type}</p> 
      </div>
    </div>
  );
};

export default Player;
