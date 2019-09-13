import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.li`
  background-color: ghostwhite;
  max-width: 350px;
  min-height: 300px;
  padding: 15px;
  transition: 200ms;
  position: relative;
  z-index: 0;
  &:hover {
    z-index: 1;
    transform: rotate(3deg) scale(1.2);
  }
  div.image-container {
    min-height: inherit;
    background-color: rgb(240, 240, 240);
  }
  div.content {
    padding-top: 10px;
  }
  h3 {
    font-size: 2.4rem;
  }
  p {
    font-size: 1.2rem;
  }
`;
const Card = ({ person: { name, birth_year } }) => {
  return (
    <StyledCard>
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
