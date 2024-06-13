import React, { useEffect, useRef, useState } from 'react';
import './TitleCards.css';
import { Link } from 'react-router-dom';

const TitleCards = ({ title, category }) => {
  // State to store the API data, initialized as an empty array
  const [apiData, setApiData] = useState([]);
  // Ref to access the card list DOM element
  const cardsRef = useRef();

  // Options for the fetch request including the API key in the headers
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Mjc0MzNmODVjMDQ5NTlmZGYxNWUyZTU4OGY5MTIyZCIsInN1YiI6IjY2MmI1M2UwM2Q3NDU0MDExZGQyMjg4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lofHSDEDVsm_GWFQYs8wbChCX1ZDGecHFYrE084Y4Ys'
    }
  };

  // Handle horizontal scrolling with the mouse wheel
  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY; // Use scrollLeft instead of scrollleft
  };

  // useEffect to fetch data from the API when the component mounts
  useEffect(() => {
    // Fetch data from the API based on the category prop or default to 'now_playing'
    fetch(`https://api.themoviedb.org/3/movie/${category ? category : 'now_playing'}?language=en-US&page=1`, options)
      .then(response => response.json()) // Convert the response to JSON
      .then(response => setApiData(response.results)) // Set the results in the state
      .catch(err => console.error(err)); // Log any errors

    // Sets up the wheel event listener for horizontal scrolling
    const currentCardsRef = cardsRef.current;
    currentCardsRef.addEventListener('wheel', handleWheel);

    // Cleanup the event listener on component unmount
    return () => {
      currentCardsRef.removeEventListener('wheel', handleWheel);
    };
  }, [category]); // The useEffect depends on the category prop

  return (
    <div className='title-cards'>
      <h2>{title ? title : 'Popular on Netflix'}</h2> {/* Display the title or default text */}
      <div className="card-list" ref={cardsRef}>
        {/*  maps over the apiData array to generate a list of movie cards */}
        {apiData.map((card, index) => {
          return (
            // Link tag to navigate to the player component with the card id
            <Link to={`/player/${card.id}`} className="card" key={index}>
              {/* Concatenate the file name and the image path */}
              <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} alt={card.original_title} />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
