import React, { useState, useEffect, useCallback } from 'react';
type CardProps = {
  card: any;
  handleCardClick: (card: any) => void;
};

const Card = ({ card, handleCardClick }: CardProps) => {
  return (
    <div onClick={() => handleCardClick(card)}>
      {card.flipped ? card.content : " "}
    </div>
  );
};

const Memorama = () => {
  const [cards, setCards] = useState<{ id: number; content: string; flipped: boolean; }[]>([]);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (hasStarted) {
      const initialCards = [
        { id: 1, content: 'A', flipped: false },
        { id: 2, content: 'B', flipped: false },
        { id: 3, content: 'A', flipped: false },
        { id: 4, content: 'B', flipped: false },
      ].sort(() => Math.random() - 0.5);
      setCards(initialCards);
    }
  }, [hasStarted]);


  const handleCardClick = useCallback((clickedCard: { id: number; content: string; flipped: boolean; }) => {

    const updatedCards = cards.map(card =>
      card.id === clickedCard.id ? { ...card, flipped: !card.flipped } : card
    );
    setCards(updatedCards);
  }, [cards]);

  return (
    <div>
      <button onClick={() => setHasStarted(true)}>Iniciar Juego</button>
      <div className=' bg-black'>
        {cards.map(card => (
          <Card key={card.id} card={card} handleCardClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
};

export default Memorama;