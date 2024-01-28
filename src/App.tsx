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
    <div className="main-container py-5">
      <div className='header'>
       <h1>Card <span className='header__text-color'>Layout</span></h1>
       <p className='header__subtitle'>Card layout using Flexbox and react-spring as a React library for animation purposes. CSS used instead of SASS becaused of the small sized application.</p>
      </div>
      <div className="cards-section d-flex justify-content-center m-auto mt-5">
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
