import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = 'https://crudcrud.com/api/4439732cd34647c490f1c001e5c7ae1a/creditcards';

const CreditCardList = ({ creditCards, onDelete }) => {
  return (
    <div>
      <h2>Credit Cards</h2>
      <ul>
        {creditCards.map((card) => (
          <li key={card._id}>
            {card.name} - {card.number}
            <button onClick={() => onDelete(card._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const CreditCardForm = ({ onAdd, createCreditCard }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const newCard = await createCreditCard({ name, number });
      onAdd(newCard);
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

  useEffect(() => {
    fetchCreditCards();
  }, []);

  const fetchCreditCards = async () => {
    try {
      const response = await axios.get(API_BASE_URL);
      setCreditCards(response.data);
    } catch (error) {
      console.error('Error fetching credit cards:', error);
    }
  };

  const createCreditCard = async (newCard) => {
    try {
      const response = await axios.post(API_BASE_URL, newCard);
      return response.data;
    } catch (error) {
      console.error('Error creating credit card:', error);
      return null;
    }
  };

  const deleteCreditCard = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/${id}`);
      setCreditCards(creditCards.filter(card => card._id !== id));
    } catch (error) {
      console.error('Error deleting credit card:', error);
    }
  };

  const handleAddCard = useCallback(
    async (newCard) => {
      const addedCard = await createCreditCard(newCard);
      if (addedCard) {
        setCreditCards([...creditCards, addedCard]);
      }
    },
    [creditCards]
  );

  const handleDeleteCard = useCallback(
    async (id) => {
      await deleteCreditCard(id);
    },
    []
  );

  return (
    <div>
      <h1>Credit Card Manager</h1>
      <CreditCardForm onAdd={handleAddCard} createCreditCard={createCreditCard}/>
      <CreditCardList creditCards={creditCards} onDelete={handleDeleteCard} />
    </div>
  );
};

export default CreditCardApp;
