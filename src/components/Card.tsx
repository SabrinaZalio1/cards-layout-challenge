// Card.js
import React from 'react';

interface CardProps {
    title: string;
    description: string;
    imageUrl:string;
    onClick: () => void;
  }

const Card: React.FC<CardProps> = ({ title, description, imageUrl, onClick }) => {
  return (
    <div className="c-card card" onClick={onClick}>
      <img src={imageUrl} alt={title} className='w-100'/>
      <div className='p-2'>
        <h2>{title}</h2>
        <p className='c-card__description'>{description}</p>
      </div>
    </div>
  );
};

export default Card;
