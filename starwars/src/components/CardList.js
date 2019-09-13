import React from 'react';
import Card from './Card';
import styled from 'styled-components';

const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const CardList = ({ people }) => {
  console.log(people);
  const listPeople = people.map((person, key) => <Card key={key} person={person} />);
  return (
    <CardContainer>
      <ul>{listPeople}</ul>
    </CardContainer>
  );
};

export default CardList;
