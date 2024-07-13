import { useEffect, useState } from 'react';
import './App.css'
import { useParams } from 'react-router-dom';
import { createCardInside } from './api/createCardInside';
import { getCardsInside } from './api/getCardsInside';
import { deleteInside } from './api/deleteInside'; 

export type sFlash = {
  title: string;
  _id: string;
  cards: string[];
};

export default function InsideCard() {
  const [flashCard, setFlashCard] = useState<sFlash | null>(null);
  const [content, setContent] = useState('');
  const { FlashId } = useParams<{ FlashId: string }>();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!FlashId || !flashCard) return;
    const updatedFlashCard = await createCardInside(FlashId, content);
    setFlashCard(updatedFlashCard);
    setContent("");
  }

  async function handleDelete(cardIndex: number) {
    if (!flashCard || !FlashId) return;
    
    try {
      const updatedFlashCard = await deleteInside(FlashId, cardIndex);
      setFlashCard(updatedFlashCard);
    } catch (error) {
      console.error("Failed", error);
    }
  }

  useEffect(() => {
    async function fetchCards() {
      if (!FlashId) return;
      const fetchedFlashCard = await getCardsInside(FlashId);
      setFlashCard(fetchedFlashCard);
    }
    fetchCards();
  }, [FlashId]);

  if (!flashCard) return <div>Loading...</div>;

  return (
    <div className='App'>
      <h2>{flashCard.title}</h2>
      <ul className='flashCards'>
        {flashCard.cards.map((card, index) => (
          <li key={index}>
            {card}
            <button className="btn-img" onClick={() => handleDelete(index)}>
              <img className='img' width="50" height="50" src="https://img.icons8.com/clouds/100/delete.png" alt="delete"/>
            </button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label htmlFor="flash">New Card Content: </label>
        <input
          id="flash"
          value={content}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setContent(e.target.value)}
        />
        <button className='btn' type="submit">Add Card</button>
      </form>
    </div>
  );
}