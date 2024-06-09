import React, { useEffect, useRef } from 'react';
import './TitleCards.css';
import cards_data from '../../assets/cards/Cards_data';

const TitleCards = () => {
  const cardsRef = useRef();

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY; // Use scrollLeft instead of scrollleft
  };

  useEffect(() => {
    const currentCardsRef = cardsRef.current;
    currentCardsRef.addEventListener('wheel', handleWheel);

    // Cleanup the event listener on component unmount
    return () => {
      currentCardsRef.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className='title-cards'>
      <h2>Popular on Netify</h2>
      <div className="card-list" ref={cardsRef}>
        {cards_data.map((card, index) => {
          return (
            <div className="card" key={index}>
              <img src={card.image} alt="" />
              <p>{card.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
