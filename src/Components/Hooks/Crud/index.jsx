import React, { useState, useCallback } from 'react';

const CreditCardList = ({ creditCards, onDelete }) => {
  return (
    <div>
      <h2>Credit Cards</h2>
      <ul>
        {creditCards.map((card, index) => (
          <li key={index}>
            {card.name} - {card.number}
            <button onClick={() => onDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const CreditCardForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onAdd({ name, number });
      setName('');
      setNumber('');
    },
    [name, number, onAdd]
  );

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Card Number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

const CreditCardApp = () => {
  const [creditCards, setCreditCards] = useState([]);

  const handleAddCard = useCallback(
    (newCard) => {
      setCreditCards([...creditCards, newCard]);
    },
    [creditCards]
  );

  const handleDeleteCard = useCallback(
    (index) => {
      const updatedCards = [...creditCards];
      updatedCards.splice(index, 1);
      setCreditCards(updatedCards);
    },
    [creditCards]
  );

  return (
    <div>
      <h1>Credit Card Manager</h1>
      <CreditCardForm onAdd={handleAddCard} />
      <CreditCardList creditCards={creditCards} onDelete={handleDeleteCard} />
    </div>
  );
};

export default CreditCardApp;
