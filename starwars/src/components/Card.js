import React from 'react';
import { StyledCard } from './styleComponents/Cards';

const Card = ({ person: { name, birth_year } }) => {
  return (
    <StyledCard primary>
      <div className='image-container'>
        <img src={`https://source.unsplash.com/random/550x550`} alt={`random from unsplash`} className='card-image' />
      </div>
      <div className='content'>
        <h3>{name}</h3>
        <p>born: {birth_year}</p>
      </div>
    </StyledCard>
  );
};

export default Card;
