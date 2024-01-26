// App.tsx
import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';
import Card from './components/Card';
import { cardsData } from './data/cardsData';

interface CardData {
  title: string;
  description: string;
  imageUrl: string;
}

const App = () => {
  const [modalData, setModalData] = useState<CardData | null>(null);

  const openModal = (data: CardData) => {
    setModalData(data);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <div className="main-container pt-5">
      <h1 className='text-white'>Heading <span className='header__text-color'>Title</span> </h1>
      <div className="cards-section d-flex m-auto mt-5">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
            onClick={() => openModal(card)}
          />
        ))}
      </div>
      {modalData && (
        <Modal
          title={modalData.title}
          description={modalData.description}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default App;
