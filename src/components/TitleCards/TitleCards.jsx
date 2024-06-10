import React, { useEffect, useRef, useState } from 'react';
import './TitleCards.css';
// import cards_data from '../../assets/cards/Cards_data';

const TitleCards = ({title, category}) => {
// its an empty array cos we're fetching the data from the api in the form of an array
  const[apiData, setApiData]=useState([])
  const cardsRef = useRef();
  // data from the API
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Mjc0MzNmODVjMDQ5NTlmZGYxNWUyZTU4OGY5MTIyZCIsInN1YiI6IjY2MmI1M2UwM2Q3NDU0MDExZGQyMjg4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lofHSDEDVsm_GWFQYs8wbChCX1ZDGecHFYrE084Y4Ys'
    }
  };
 

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY; // Use scrollLeft instead of scrollleft
  };

  useEffect(() => {

     // WE WAnt to execute the fetch inside the useEffect so that it fetch the data every timr the page reloads 
  fetch(`https://api.themoviedb.org/3/movie/${category?category:'now_playing'}?language=en-US&page=1`, options)
  .then(response => response.json())
  .then(response => setApiData(response.results))
  .catch(err => console.error(err));
  // sets up the wheel event listener
    const currentCardsRef = cardsRef.current;
    currentCardsRef.addEventListener('wheel', handleWheel);

    // Cleanup the event listener on component unmount
    return () => {
      currentCardsRef.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className='title-cards'>
      <h2>{title?title : 'Popular on Netify'} </h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <div className="card" key={index}>
              {/* concatinates the file name and the image path */}
              <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
              <p>{card.original_title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
