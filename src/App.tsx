import React, { useState, useEffect, useCallback } from 'react';

interface Card {
  id: number;
  content: string;
}

const initialCards: Card[] = [
  { id: 1, content: 'A' },
  { id: 2, content: 'A' },
  { id: 3, content: 'B' },
  { id: 4, content: 'B' },
  { id: 5, content: 'C' },
  { id: 6, content: 'C' },
  { id: 7, content: 'D' },
  { id: 8, content: 'D' },
  { id: 9, content: 'E' },
  { id: 10, content: 'E' },
  { id: 11, content: 'F' },
  { id: 12, content: 'F' },
  { id: 13, content: 'G' },
  { id: 14, content: 'G' },
  { id: 15, content: 'H' },
  { id: 16, content: 'H' }
];

const cambioCartas = (array: any[]) => {
  let newArray = array.slice();
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const App = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, SetFlipCards] = useState<Card[]>([]);
  const [matchedCards, setMatchedCards] = useState<Card[]>([]);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setCards(cambioCartas(initialCards));
  }, []);

  const handleClick = useCallback((card: Card) => {
    if (disabled || flippedCards.includes(card) || matchedCards.includes(card)) return;

    SetFlipCards(prev => [...prev, card]);

    if (flippedCards.length === 1) {
      setDisabled(true);
      setTimeout(() => {
        if (flippedCards[0].content === card.content) {
          setMatchedCards(prev => [...prev, flippedCards[0], card]);
        }
        SetFlipCards([]);
        setDisabled(false);
      }, 1000);
    }
  }, [flippedCards, matchedCards, disabled]);

  return (
    <div className="App flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Juego de Memoria</h1>
      <div className="game-board grid grid-cols-4 gap-4">
        {cards.map(card => (
          <div
            key={card.id}
            className={`card relative cursor-pointer ${flippedCards.includes(card) || matchedCards.includes(card) ? 'bg-green-500' : 'bg-gray-200'} w-24 h-32 flex items-center justify-center rounded-lg shadow-md`}
            onClick={() => handleClick(card)}
          >
            <div className="inner absolute w-full h-full flex items-center justify-center text-white text-lg font-bold">
              {flippedCards.includes(card) || matchedCards.includes(card) ? card.content : '?'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;