import React from 'react';
import Card from './Card';

const CardList = ({ people }) => {
  console.log(people);
  const listPeople = people.map((person, key) => <Card key={key} person={person} />);
  return listPeople;
};

export default CardList;
