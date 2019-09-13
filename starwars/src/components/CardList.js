import React, { useState } from 'react';
import Card from './Card';
import CardButton from './CardButton';
import styled from 'styled-components';

const CardListContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
`;

const CardListTitle = styled.h2`
  font-size: 3rem;
  padding: 30px 0;
  padding-bottom: 15px;
  margin-bottom: 100px;
  border-bottom: 5px solid black;
  border-radius: 5px;
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

const CardList = ({ people, title, nextPage, count, onClick }) => {
  let listPeople = people.map((person, key) => <Card key={key} person={person} />);
  listPeople = [...listPeople, <CardButton key={'next-page'} nextPage={nextPage} onClick={onClick} />];
  return (
    <CardListContainer>
      <CardListTitle>{title}</CardListTitle>
      <CardGrid>{listPeople}</CardGrid>
    </CardListContainer>
  );
};

export default CardList;
