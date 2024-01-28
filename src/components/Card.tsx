import React from 'react';

interface CardProps {
    title: string;
    description: string;
    imageUrl:string;
    onClick: () => void;
  }

const Card: React.FC<CardProps> = ({ title, description, imageUrl, onClick }) => {
  return (
    <div className="c-card" onClick={onClick}>
      <img src={imageUrl} alt={title} className='w-100 c-card__img'/>
      <div className='p-3'>
        <h3>{title}</h3>
        <p className='c-card__description'>{description}</p>
      </div>
    </div>
  );
};

export default Card;
