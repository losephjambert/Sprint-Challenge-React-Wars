import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.li`
  background-color: ghostwhite;
  max-width: 350px;
  padding: 15px;
  h3 {
  }
`;
const Card = ({ person: { name, birth_year } }) => {
  return (
    <StyledCard>
      <div className='card-image-container'>
        <img src={`https://source.unsplash.com/random/550x550`} alt={`random from unsplash`} className='card-image' />
      </div>
      <div>
        <h3>{name}</h3>
        <p>born: {birth_year}</p>
      </div>
    </StyledCard>
  );
};

export default Card;
