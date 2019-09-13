import React from 'react';

const Card = ({ person: { name, birth_year } }) => {
  return (
    <li>
      <div>
        <h2>{name}</h2>
        <p>born: {birth_year}</p>
      </div>
    </li>
  );
};

export default Card;
