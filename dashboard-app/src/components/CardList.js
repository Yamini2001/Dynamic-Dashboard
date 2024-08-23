import React, { useState } from 'react';
// import './Card.css'; 
import './CardList.css';

const initialCards = [
//   { id: 1, content: 'Card 1' },
//   { id: 2, content: 'Card 2' },
];

const CardList = () => {
  const [cards, setCards] = useState(initialCards);

  const addCard = () => {
    setCards([...cards, { id: cards.length + 1, content: `Card ${cards.length + 1}` }]);
  };

  return (
    <div className='card'>
    <div className="card-list-container">
      <div className="main-card">
        <button className="add-widget-button" onClick={addCard}>
        <span className="plus-icon">+</span>  Add Widget
        </button>
      </div>
      <div className="additional-cards-container">
        {cards.map(card => (
          <div key={card.id} className="additional-card">
            <h4>{card.content}</h4>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default CardList;
