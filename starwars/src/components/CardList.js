import React from 'react';
import Card from './Card';
import styled from 'styled-components';

const CardListContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const CardListTitle = styled.h2`
  font-size: 3rem;
`;

const CardGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  padding: 25px;

  @media screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (min-width: 1200px) {
    /* Do something fun with nth child here */
  }
`;

const CardList = ({ people, title }) => {
  console.log(people);
  const listPeople = people.map((person, key) => <Card key={key} person={person} />);
  return (
    <CardListContainer>
      <CardListTitle>{title}</CardListTitle>
      <CardGrid>{listPeople}</CardGrid>
    </CardListContainer>
  );
};

export default CardList;
