// CardSlider.jsx
import React from 'react';
import Slider from 'react-slick';
import './Card.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

const CardSlider = ({ cards }) => {
  return (
    <Slider {...settings} className="card-slider-container">
      {cards.map(card => (
        <div key={card.id} className="additional-card">
          <h4>{card.content}</h4>
        </div>
      ))}
    </Slider>
  );
};

export default CardSlider;
