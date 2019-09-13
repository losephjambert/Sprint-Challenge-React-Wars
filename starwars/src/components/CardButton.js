import React from 'react';
import { StyledCard } from './styleComponents/Cards';
const CardButton = props => {
  if (props.nextPage === null) return null;
  return (
    <StyledCard>
      <div className='link'>
        <button onClick={() => props.onClick(props.nextPage)}>Load More Data</button>
      </div>
    </StyledCard>
  );
};

export default CardButton;
